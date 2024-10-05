namespace Node_Red_Servidor.Model
{
    public class ResponseModel<T>
    {
        public T? Dados { get; set; }
        public string Mensagem { get; set; }
    }
}
