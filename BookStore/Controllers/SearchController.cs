using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookStore.Models;

namespace BookStore.Controllers
{
    public class SearchController : ApiController
    {
        BookStoreEntities db = new BookStoreEntities();

        public HttpResponseMessage Get(string category)
        {
            var data = (from bk in db.Book_tbl where 
                        bk.Category == category 
                        select new BookList { 
                        BookName = bk.Name,
                        Author = bk.Author,
                        Cost = bk.Cost
                        }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }


    }
}
