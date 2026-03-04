using emailService.Models;
using Microsoft.AspNetCore.Mvc;
using emailService.Services;

namespace emailService.Controllers
{
    public class UserController : Controller
    {
        private readonly UserService _userService;

        /// <summary>
        /// Constructor for UserController
        /// </summary>
        /// <param name="_userService">user service instance for user operations like creating, updating, deleting users</param>
        public UserController(UserService _userService)
        {
            this._userService = _userService;
        }

        /// <summary>
        /// Create a new user
        /// </summary>
        /// <param name="username">username of the user</param>
        /// <param name="password">password of the user</param>
        /// <returns>JSON response with message</returns>
        [HttpPost]
        [Route("user/create-user")]
        public IActionResult CreateUser([FromBody] string username, [FromBody] string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return Json(new { message = "Username and password are required" });
            }
            if (username.Length < 3 || password.Length < 8)
            {
                return Json(new { message = "Username and password must be at least 3 characters long" });
            }

            bool isCreated = _userService.CreateUser(username, password);
            if (!isCreated)
            {
                return BadRequest(new { message = "User creation failed" });
            }
            else
            {
                // user created successfully, now redirect to email send page
                return Ok(new { message = "User created successfully" });
            }
        }
    }
}