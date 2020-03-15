using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStore.Models
{
    public class BookList
    {
        public string BookName { get; set; }
        public string Category { get; set; }
        public string Author { get; set; }
        public decimal? Cost { get; set; }

    }
}