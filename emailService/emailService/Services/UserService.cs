namespace emailService.Services
{
    public class UserService
    {
        private Dictionary<string, string> users;

        public UserService()
        {
            users = new Dictionary<string, string>();
        }
        public bool CreateUser(string username, string password)
        {
            if (users.ContainsKey(username))
            {
                return false;
            }
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return false;
            }
            if (username.Length < 3 || password.Length < 8)
            {
                return false;
            }
            
            users.Add(username, password);
            return true;
        }
    }
}