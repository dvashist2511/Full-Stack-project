using CrudApi.Interfaces;
using CrudApi.Model;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System.Net.Sockets;


namespace CrudApi.DataAccessLayers
{
    public class UserDetails : IUserDetails
    {
        private readonly UserDbContext _dbContext;


        public UserDetails(UserDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<FunctionResponse> CreateUserDetails(UserDetail user)
        {
            string sql = @$"
                    INSERT INTO [dbo].[finalusers]
           ([name]
           ,[email]
           ,[username]
           ,[password]
           ,[confirmpassword])
             VALUES
           (@name
           ,@email
           ,@username
           ,@password
           ,@confirmpassword)";
            var result = await _dbContext.userConnection().ExecuteAsync(sql, user);
            return new FunctionResponse
            {
                status = "ok",
                result = new
                {
                    data = result
                }
            };

        }


        public Task createUserDetailss(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<FunctionResponse> deleteUserDetails(int id)
        {

            string sql = "DELETE FROM finalusers WHERE MainId = @id";
            var result = await _dbContext.userConnection().ExecuteAsync(sql, new { Id = id });

            return new FunctionResponse
            {
                status = "ok",
                result = new
                {
                    Data = result
                }
            };


        }


        public async Task<FunctionResponse> GetUserDetails(int id)
        {


            string sql = id != 0 ? "select * from finalusers where mainid=@id" : "select * from finalusers";


                var userDetails1 = await _dbContext.userConnection().QueryAsync(sql, new { id });

            return new FunctionResponse
            {
                status = "ok",
                result = new
                {
                    Data = userDetails1
                }
            };
        }


        //public Task<FunctionResponse> GetUserDetails(int id)
        //{
        //    throw new NotImplementedException();
        //}

        public Task GetUserDetails()
        {
            throw new NotImplementedException();
        }

        public async Task<FunctionResponse> updateUserDetails( UserDetail userDetail, int id)
        {
            string sql = "UPDATE finalusers SET name = @name, email = @email, username = @username, password = @password, confirmpassword = @confirmpassword WHERE Mainid = @Id";
            var result = await _dbContext.userConnection().ExecuteAsync(sql, new
            {
                userDetail.name,
                userDetail.email,
                userDetail.username,
                userDetail.password,
                userDetail.confirmpassword,
                Id = id
            });
            return new FunctionResponse
            {
                status = "ok",
                result = new
                {
                    data = result
                }
            }; 
        }

        public Task<FunctionResponse> updateUserDetails(int id, UserDetail user)
        {
            throw new NotImplementedException();
        }

        
    }

}



