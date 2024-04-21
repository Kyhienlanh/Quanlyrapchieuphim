using Quanlyrapchieuphim.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quanlyrapchieuphim.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        private QLRapChieuPhim1Entities db =new QLRapChieuPhim1Entities();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult TaiKhoan()
        {
            var email = Session["TaiKhoan"];
            var data = db.NguoiDungs.SingleOrDefault(d => d.Email == email);
            return View(data);
        }
        public ActionResult Lichsugiaodich()
        {
            var email = Session["TaiKhoan"];

            var IDNguoiDung = (from s in db.NguoiDungs
                               where s.Email == email
                               select s.IDNguoiDung).FirstOrDefault();

            var data = (from s in db.Ve1
                        where s.TrangThai == "Da Thanh Toan" && s.IDNguoiDung == IDNguoiDung
                        select s.IDVe).ToList(); // Convert to list

            var invoiceData = from s in db.HoaDons
                              where data.Contains(s.IDVe ?? 0) // Null-coalescing operator used here
                              select s;

            return View(invoiceData.ToList());
        }

    }
}