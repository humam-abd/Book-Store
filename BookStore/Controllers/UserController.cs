using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookStore.Models;

namespace BookStore.Controllers
{
    public class UserController : ApiController
    {
        BookStoreEntities db = new BookStoreEntities();

        //User Login
        public HttpResponseMessage Post(string username, string password)
        {
            var data = (from user in db.User_tbl where 
                        user.Role == "user" && 
                        username == user.Username && 
                        password == user.Password
                        select new User { 
                            userId = user.Id,
                            Username = user.Username,
                            Password = user.Password,
                            Role = user.Role
                        }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK,data);
        }

    }
}
