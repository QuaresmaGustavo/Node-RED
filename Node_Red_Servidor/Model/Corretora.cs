using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Node_Red_Servidor.Model
{
    public class Corretora
    {
        [JsonProperty("nome_social")]
        public string? Nome_Social { get; set; }

        [JsonProperty("municipio")]
        public string? Municipio { get; set; }

        [JsonProperty("cnpj")]
        public string? CNPJ { get; set; }
    }
}
