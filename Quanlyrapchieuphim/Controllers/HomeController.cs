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
        private QLRapChieuPhim1Entities1 a = new QLRapChieuPhim1Entities1();
                

        public ActionResult Index()
        {

            
            return View();
        }
    }
}