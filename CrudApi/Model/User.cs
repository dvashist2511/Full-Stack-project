using Microsoft.EntityFrameworkCore;

namespace CrudApi.Model
{
    public class User
    {

        public int Id { get; set; }  //primary key add 
        public string name { get; set; }
        public string dob { get; set; }
        public string gender { get; set; }
        public string city { get; set; }
        public string mobile { get; set; }
    }
}
