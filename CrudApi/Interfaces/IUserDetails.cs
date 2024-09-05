using CrudApi.DataAccessLayers;
using CrudApi.Model;

namespace CrudApi.Interfaces
{
    public interface IUserDetails
    {

        Task<FunctionResponse> GetUserDetails(int id);
        Task<FunctionResponse> CreateUserDetails(UserDetail user);
        Task<FunctionResponse> updateUserDetails( UserDetail user, int id);
        Task<FunctionResponse> deleteUserDetails(int id);
        Task GetUserDetails();
    }
}
