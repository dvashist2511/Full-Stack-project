using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace CrudApi.Model
{


    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        //public DbSet<UserDetail> UsersDetails { get; set; }

        public string Con = $"Server= (local)\\sqlexpress; Database= UserDb; Integrated Security=True; Trust Server Certificate=True";




        public IDbConnection userConnection()
        {

            return new SqlConnection(Con);


        }
    }

}
