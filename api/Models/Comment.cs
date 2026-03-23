using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Models
{
	[Table("Comments")]
    public class Comment
    {
		public Guid Id { get; set; } = Guid.NewGuid();
		public string Title { get; set; } = string.Empty;
		public string Content { get; set; } = string.Empty;
		public DateTime CreatedOn { get; set; } = DateTime.Now;
        public Guid? StockId { get; set; }//Nav prop
		public Stock? Stock { get; set; }
		public string AppUserId { get; set; }
		public AppUser AppUser { get; set; }
    }
}