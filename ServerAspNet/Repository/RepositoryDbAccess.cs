using Microsoft.EntityFrameworkCore;
using PacienteAPI.Models;

namespace PacienteAPI.Repository
{
    public class RepositoryDbAccess : DbContext
    {
        public RepositoryDbAccess(DbContextOptions options) : base(options) { }

        public DbSet<Paciente> Pacientes { get; set; }
    }
}
