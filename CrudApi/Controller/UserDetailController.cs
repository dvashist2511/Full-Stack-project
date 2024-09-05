using CrudApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dapper;
using CrudApi.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace CrudApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class UserDetailController : ControllerBase
    {
        public readonly IConfiguration _config;

        public readonly IUserDetails _userDetails;

        public UserDetailController(IConfiguration config, IUserDetails userDetails)
        {
            _config = config;
            _userDetails = userDetails;
        }



        [HttpGet("GetUserDetails")]
        public async Task<IActionResult> GetUserDetails([FromQuery] int id)
        {
            var result = await _userDetails.GetUserDetails(id);

            return Ok(result);
        }


        //[HttpGet("GetAllUserDetails")]
        //public async Task<IActionResult> GetAllUserDetails()
        //{
        //    var result = await _userDetails.GetAllUserDetails();

        //    return Ok(result);
        //}

        [HttpPut("updateUserDetails")]
        public async Task<IActionResult> UpdateUserDetails( [FromBody] UserDetail user, int id)
        {
           

            var result = await _userDetails.updateUserDetails( user, id);

            return Ok(result);
            
        }

        [HttpPost("CreateUserDetails")]
        public async Task<IActionResult> CreateUserDetails([FromBody] UserDetail user)
        {
            var result = await _userDetails.CreateUserDetails(user);


            return Ok(result);
        }
        [HttpDelete("deleteUserDetails")]
        public async Task<IActionResult> deleteUserDetails([FromQuery] int id)
        {
            var result = await _userDetails.deleteUserDetails(id);


            return Ok(result);
        }

    }
}
