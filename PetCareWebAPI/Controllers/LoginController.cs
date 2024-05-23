using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using PetCareWebAPI.DAL;
using PetCareWebAPI.DAL.Entities;
using PetCareWebAPI.DTOs;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace PetCareWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginServices _services;
        private IConfiguration _config;

        public LoginController(LoginServices services, IConfiguration config)
        {
            _services = services;
            _config = config;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LogInDTO person) 
        {
            var persona = await _services.GetPerson(person);

            if (persona == null)
                return BadRequest();

            string jwtToken = GenerateToken(persona);

            return Ok(new { token = jwtToken });
        }

        private string GenerateToken(Person person) 
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, person.Name),
                new Claim(ClaimTypes.Email, person.Email),
                new Claim(ClaimTypes.Role, person.userType.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("JWT:Key").Value));
            var credenciales = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var securityToken = new JwtSecurityToken(
                                claims: claims,
                                expires: DateTime.Now.AddMinutes(30),
                                signingCredentials: credenciales
                                );
            string token = new JwtSecurityTokenHandler().WriteToken(securityToken);

            return token;
        }
    }
}
