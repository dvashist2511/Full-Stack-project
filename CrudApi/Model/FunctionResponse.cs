namespace CrudApi.Model
{
    public class FunctionResponse
    {
        public string status { get; set; }
        public object result { get; set; }
        public string RefNo { get; set; }
        public string Location { get; set; }
        public Exception Ex { get; set; } 
        public object result2 { get; set; }
        public object result3 { get; set; }
        public string message { get; set; }
        public string savedvchrno { get; set; }
        public int totalCount { get; set; }

    }
}
