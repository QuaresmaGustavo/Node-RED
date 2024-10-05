using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Node_Red_Servidor.Model;
using Node_Red_Servidor.Service;

namespace Node_Red_Servidor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorretoraController : ControllerBase{

        private readonly CorretoraService _service;

        public CorretoraController(CorretoraService service) { _service = service;} 

        [HttpGet]
        public async Task<ActionResult<ResponseModel<List<Corretora>>>> BuscarTodasAsCorretoras(){
            return await _service.BuscarTodasAsCorretoras();
        }

        [HttpPost]
        public async Task<ActionResult<ResponseModel<Corretora>>> SalvarCorretoras([FromBody] string cnpj){
            return await _service.SalvarCorretoras(cnpj);
        }

        [HttpDelete]
        public async Task<ActionResult<ResponseModel<Corretora>>> RemoverCorretoras([FromQuery] int id){
            return await _service.RemoverCorretoras(id);
        }
    }
}
