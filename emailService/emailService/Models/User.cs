using System.ComponentModel.DataAnnotations;


namespace emailService.Models
{
    public class User
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [MinLength(8)]
        [MaxLength(20)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]
        public string Password { get; set; }
    }

}