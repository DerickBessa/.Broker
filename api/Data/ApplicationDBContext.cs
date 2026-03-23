using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
		: base(dbContextOptions)
		{
			
		}

		public DbSet<Stock> Stocks {get; set;}
		public DbSet<Comment> Comments { get; set; }

		public DbSet<Portfolio> Portfolios { get; set;}
		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<Portfolio>(x => x.HasKey(p => new {p.AppUserId, p.StockId})); 
			//criando um Id compartilhado, em que ao inves da linha possuir 1 id como primary key ela vai 
			// possuir a combinacao UNICA de um appUserId com stockId, em que nenhuma combinacao pode ser igual
			// logo criando uma primaryKey compartilhada, isso pode ser para N termos, nao apenas 2.
			builder.Entity<Portfolio>()
			.HasOne(u => u.AppUser)
			.WithMany(u => u.Portfolios)
			.HasForeignKey(p => p.AppUserId);

			builder.Entity<Portfolio>()
			.HasOne(u => u.Stock)
			.WithMany(u => u.Portfolios)
			.HasForeignKey(p => p.StockId);

			List<IdentityRole> roles = new List<IdentityRole>
			{
				new IdentityRole
				{
					Name = "Admin",
					NormalizedName = "ADMIN"
				},
				new IdentityRole
				{
					Name = "User",
					NormalizedName = "USER"
				},
			};
			builder.Entity<IdentityRole>().HasData(roles);
		}
    }

	
}