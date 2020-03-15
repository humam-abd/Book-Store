using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookStore.Models;

namespace BookStore.Controllers
{
    public class AdminController : ApiController
    {
        BookStoreEntities db = new BookStoreEntities();

        public HttpResponseMessage Post(string username, string password)
        {
            var data = (from adm in db.User_tbl where 
                        adm.Role == "admin" && 
                        adm.Username == username && 
                        adm.Password == password
                        select new User
                        {
                            userId = adm.Id,
                            Username = adm.Username,
                            Password = adm.Password,
                            Role = adm.Role
                        }).ToList(); 
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
    }
}
