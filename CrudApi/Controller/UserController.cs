using CrudApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        public readonly IConfiguration _config;
        public readonly UserDbContext _context;

        public UserController(IConfiguration config, UserDbContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }
        [HttpPost("CreateUser")]
        public IActionResult Create([FromBody] User user)
        {
            if (_context.Users.Where(u => u.name == user.name).FirstOrDefault() != null)
            {
                return Ok("Already Exist");
            }
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("Success From Create");
        }
        [HttpPut("UpdateUser/{id}")]
        public IActionResult Update(int id, [FromBody] User user)
        {
            var existingUser = _context.Users.Find(id);
            if (existingUser == null)
            {
                return NotFound("Details Not Found ...!!");
            }
            else
            {

                existingUser.name = user.name;
                existingUser.dob = user.dob;
                existingUser.gender = user.gender;
                existingUser.mobile = user.mobile;
                existingUser.city = user.city;

                _context.Users.Update(existingUser);

                _context.SaveChanges();

                return Ok("Success From Update");
            }
        }
        [HttpDelete("DeleteUser/{id}")]
        public IActionResult Delete(int id)
        {
            var existingUser = _context.Users.Find(id);
            if (existingUser == null)
            {
                return NotFound();
            }

            _context.Users.Remove(existingUser);
            _context.SaveChanges();

            return Ok("Success From Delete Done Successfully");
        }
        [HttpGet("id")]
        public IActionResult GetUsers(int id)
        {
            var users = _context.Users.FirstOrDefault(x => x.Id == id);
            return Ok(users);
        }
    }
}
