using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookStore.Models;

namespace BookStore.Controllers
{
    public class BookController : ApiController
    {
        BookStoreEntities db = new BookStoreEntities();

        //Get List of Books
        public HttpResponseMessage Get()
        {
            var data = (from bk in db.Book_tbl
                        select new BookList
                        {
                            BookName = bk.Name,
                            Author = bk.Author,
                            Category = bk.Category,
                            Cost = bk.Cost
                        }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
        
        //Get Book details
        public HttpResponseMessage Get(string bookName)
        {
            var data = (from bk in db.Book_tbl
                        where bookName == bk.Name
                        select new BookDetails 
                        {
                            BookName = bk.Name,
                            Author = bk.Author,
                            Category = bk.Category,
                            Description = bk.Description,
                            PublishedYear = bk.PublishedYear,
                            Cost = bk.Cost
                        }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        //Post Add Book
        public HttpResponseMessage Post(Book_tbl bk)
        {
            var data = db.Book_tbl.Add(bk);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
    }
}
