using Microsoft.EntityFrameworkCore;
using Node_Red_Servidor.Model;
using System;

namespace Node_Red_Servidor.Data
{
    public class ServerDbContext : DbContext {
        public ServerDbContext(DbContextOptions<ServerDbContext> options) : base(options) { }

        public DbSet<Corretora> corretoras { get; set; }
    }
}
