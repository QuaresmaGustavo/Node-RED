using System.ComponentModel.DataAnnotations;

namespace Node_Red_Servidor.Model
{
    public class Corretora
    {
        [Key] [Required]
        public int Id { get; set; }

        [Required] [MaxLength(14)]
        public string CNPJ { get; set; }
    }
}
