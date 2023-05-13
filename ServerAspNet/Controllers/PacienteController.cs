using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PacienteAPI.Models;
using PacienteAPI.Repository;

namespace PacienteAPI.Controllers
{
    [Route("api/pacientes")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly RepositoryDbAccess repository;

        public PacienteController(RepositoryDbAccess repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            return Ok(await this.repository.Pacientes.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> FindById([FromRoute]int id)
        {
            return Ok(await this.repository.Pacientes.FindAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post(PacienteDTO pacienteInput)
        {
            Paciente paciente = new Paciente()
            {
                Nome = pacienteInput.Nome,
                Endereco = pacienteInput.Endereco,
                DataDeNascimento = pacienteInput.DataDeNascimento,
                Observacao = pacienteInput.Observacao
            };

            await this.repository.Pacientes.AddAsync(paciente);
            return Ok(await this.repository.SaveChangesAsync());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute]int id, [FromBody]PacienteDTO pacienteInput)
        {
            Paciente paciente = await this.repository.Pacientes.FindAsync(id);

            paciente.Nome = pacienteInput.Nome;
            paciente.Endereco = pacienteInput.Endereco;
            paciente.DataDeNascimento = pacienteInput.DataDeNascimento;
            paciente.Observacao = pacienteInput.Observacao;

            this.repository.Pacientes.Update(paciente);
            return Ok(await this.repository.SaveChangesAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            Paciente paciente = await this.repository.Pacientes.FindAsync(id);
            this.repository.Pacientes.Remove(paciente);
            return Ok(await this.repository.SaveChangesAsync());
        }
    }
}
