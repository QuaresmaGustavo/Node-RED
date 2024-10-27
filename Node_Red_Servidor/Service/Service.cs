using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Node_Red_Servidor.Data;
using Node_Red_Servidor.Model;

namespace Node_Red_Servidor.Service
{
    public class Service
    {
        private readonly ServerDbContext serverDbContext;
        private readonly HttpClient httpClient;

        public Service(ServerDbContext serverDbContext, HttpClient httpClient)
        {
            this.serverDbContext = serverDbContext;
            this.httpClient = httpClient;
        }

        public async Task<ResponseModel<CEP>> BuscarPorCEP(string cep) {
            ResponseModel<CEP> resposta = new ResponseModel<CEP>();

            string url = "https://brasilapi.com.br/api/cep/v2/"+cep;
            HttpResponseMessage httpResponseMessage = await httpClient.GetAsync(url);

            if (!httpResponseMessage.IsSuccessStatusCode)
            {
                resposta.Mensagem = "CEP não encontrado!";
                return resposta;
            }

            var data = await httpResponseMessage.Content.ReadAsStringAsync();
            resposta.Dados = JsonConvert.DeserializeObject<CEP>(data);
            return resposta;
        }

        public async Task<ResponseModel<List<Corretora>>> BuscarTodasAsCorretoras() {
            ResponseModel<List<Corretora>> resposta = new ResponseModel<List<Corretora>>();

            string url = "https://brasilapi.com.br/api/cvm/corretoras/v1";
            HttpResponseMessage httpResponseMessage = await httpClient.GetAsync(url);

            if (!httpResponseMessage.IsSuccessStatusCode) {
                resposta.Mensagem = "Erro ao buscar corretoras";
                return resposta;
            }

            var data = await httpResponseMessage.Content.ReadAsStringAsync();
            resposta.Dados = JsonConvert.DeserializeObject<List<Corretora>>(data);
            return resposta;
        }

        public async Task<ResponseModel<List<Salvos>>> BuscarTodasAsCorretorasSalvas(){
            ResponseModel<List<Salvos>> resposta = new ResponseModel<List<Salvos>>();

            var listaDeCorretoras = await serverDbContext.Salvos.ToListAsync();

            resposta.Dados = listaDeCorretoras;
            return resposta;
        }

        public async Task<ResponseModel<Salvos>> SalvarCorretoras(Salvos cnpj){
            ResponseModel<Salvos> resposta = new ResponseModel<Salvos>();

            var corretora = await serverDbContext.Salvos.FirstOrDefaultAsync(c => c.CNPJ == cnpj.CNPJ);

            if (corretora != null)
            {
                resposta.Mensagem = "Esta corretora ja esta salva";
                return resposta;
            }

            Salvos novaCorretora = new Salvos(){
                CNPJ = cnpj.CNPJ
            };

            serverDbContext.Add(novaCorretora);
            await serverDbContext.SaveChangesAsync();

            resposta.Mensagem = "CNPJ salvo com sucesso!";
            return resposta;
        }

        public async Task<ResponseModel<Salvos>> RemoverCorretoras(string cnpj){
            ResponseModel<Salvos> resposta = new ResponseModel<Salvos>();

            var cnpj_salvo = await serverDbContext.Salvos.FirstOrDefaultAsync(c => c.CNPJ == cnpj);

            serverDbContext.Remove(cnpj_salvo);
            await serverDbContext.SaveChangesAsync();

            resposta.Mensagem = "CNPJ salvo removida com sucesso!";
            return resposta;
        }
    }
}
