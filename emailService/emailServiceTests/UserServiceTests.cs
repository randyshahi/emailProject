using NUnit.Framework;
using emailService.Services;

namespace emailServiceTests
{
    public class UserServiceTests
    {
        private UserService _userService;

        public UserServiceTests()
        {
            _userService = new UserService();
        }
        
        [Test]
        public void TestCreateUser()
        {
            Assert.That(_userService.CreateUser("testuser", "testpassword"), Is.True);
        }
    }
}


