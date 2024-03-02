using Quanlyrapchieuphim.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quanlyrapchieuphim.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        private QLRapChieuPhimEntities1 a = new QLRapChieuPhimEntities1();

        public ActionResult Index()
        {
            
            return View();
        }
    }
}