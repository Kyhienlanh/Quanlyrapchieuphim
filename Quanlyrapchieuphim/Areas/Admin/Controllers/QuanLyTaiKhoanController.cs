using Quanlyrapchieuphim.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quanlyrapchieuphim.Areas.Admin.Controllers
{
    public class QuanLyTaiKhoanController : Controller
    {
        // GET: Admin/QuanLyTaiKhoan
        private QLRapChieuPhim1Entities1 db= new QLRapChieuPhim1Entities1 ();
        public ActionResult Index()
        {
            var data = db.NguoiDungs;
            return View(data);
        }

    }
}