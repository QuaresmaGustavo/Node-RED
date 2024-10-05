using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Node_Red_Servidor.Data;
using Node_Red_Servidor.Model;

namespace Node_Red_Servidor.Service
{
    public class CorretoraService
    {
        private readonly ServerDbContext serverDbContext;

        public CorretoraService(ServerDbContext serverDbContext) {
            this.serverDbContext = serverDbContext;
        }

        public async Task<ResponseModel<List<Corretora>>> BuscarTodasAsCorretoras(){
            ResponseModel<List<Corretora>> resposta = new ResponseModel<List<Corretora>>();

            var listaDeCorretoras = await serverDbContext.corretoras.ToListAsync();

            resposta.Dados = listaDeCorretoras;
            return resposta;
        }

        public async Task<ResponseModel<Corretora>> SalvarCorretoras(Corretora cnpj){
            ResponseModel<Corretora> resposta = new ResponseModel<Corretora>();

            Corretora novaCorretora = new Corretora()
            {
                CNPJ = cnpj.CNPJ
            };

            serverDbContext.Add(novaCorretora);
            await serverDbContext.SaveChangesAsync();

            resposta.Mensagem = "Corretora salva com sucesso!";
            return resposta;
        }

        public async Task<ResponseModel<Corretora>> RemoverCorretoras(string cnpj)
        {
            ResponseModel<Corretora> resposta = new ResponseModel<Corretora>();

            var corretora = await serverDbContext.corretoras.FirstOrDefaultAsync(c => c.CNPJ == cnpj);

            serverDbContext.Remove(corretora);
            await serverDbContext.SaveChangesAsync();

            resposta.Mensagem = "Corretora removida com sucesso!";
            return resposta;
        }
    }
}
