using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Node_Red_Servidor.Model;
using Node_Red_Servidor.Service;

namespace Node_Red_Servidor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Controller : ControllerBase
    {
        private readonly Service.Service _service;

        public Controller(Service.Service service) { _service = service; }

        [HttpGet("/cep")]
        public async Task<ResponseModel<CEP>> BuscarPorCEP(string cep)
        {
            return await _service.BuscarPorCEP(cep);
        }

        [HttpGet("/corretoras")]
        public async Task<ResponseModel<List<Corretora>>> BuscarTodasAsCorretoras()
        {
            return await _service.BuscarTodasAsCorretoras();
        }

        [HttpGet("/salvos")]
        public async Task<ActionResult<ResponseModel<List<Salvos>>>> BuscarTodasAsCorretorasSalvas()
        {
            return await _service.BuscarTodasAsCorretorasSalvas();
        }

        [HttpPost]
        public async Task<ActionResult<ResponseModel<Salvos>>> SalvarCorretoras([FromBody] Salvos cnpj)
        {
            return await _service.SalvarCorretoras(cnpj);
        }

        [HttpDelete]
        public async Task<ActionResult<ResponseModel<Salvos>>> RemoverCorretoras([FromQuery] string cnpj)
        {
            return await _service.RemoverCorretoras(cnpj);
        }
    }
}
