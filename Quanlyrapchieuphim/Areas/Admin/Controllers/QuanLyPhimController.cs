using Quanlyrapchieuphim.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quanlyrapchieuphim.Areas.Admin.Controllers
{
    public class QuanLyPhimController : Controller
    {
        // GET: Admin/QuanLyPhim
        private QLRapChieuPhim1Entities db = new QLRapChieuPhim1Entities();
        public ActionResult Index()
        {
            var data=db.Phims.ToList();
            return View(data);
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Phim phim)
        {
            if (ModelState.IsValid)
            {

                db.Phims.Add(phim);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View(phim);
          
        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            var data = db.Phims.SingleOrDefault(n => n.IDPhim == id);
            if (data == null)
            {
                Response.StatusCode = 404;
                return null;
            }
            return View(data);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Edit(int id, Phim phim)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var data = db.Phims.SingleOrDefault(n => n.IDPhim == id);
                    if (data == null)
                    {
                        return HttpNotFound();
                    }
                    data.TenPhim = phim.TenPhim;
                    data.TenAnh = phim.TenAnh;
                    data.TheLoai = phim.TheLoai;
                    data.ThoiLuong = phim.ThoiLuong;
                    data.KhoiChieu = phim.KhoiChieu;
                    data.NamSanXuat = phim.NamSanXuat;
                    data.DaoDien = phim.DaoDien;
                    data.DienVien = phim.DienVien;
                    db.SaveChanges();
                    return RedirectToAction("index");
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it in a way that fits your application
                ModelState.AddModelError("", "An error occurred while saving the changes: " + ex.Message);
            }

            // If an exception occurs or ModelState is not valid, return the view with errors
            return View(phim);
        }




        [HttpGet]
        public ActionResult Delete(int id)
        {

            var data = db.Phims.SingleOrDefault(n => n.IDPhim == id);
            if (data == null)
            {
                Response.StatusCode = 404;
                return null;
            }
            return View(data);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirm(int id)
        {
            var data = db.Phims.SingleOrDefault(n => n.IDPhim == id);
            if (data == null)
            {
                Response.StatusCode = 404;
                return null; // Handle the case when the record is not found
            }

            try
            {
                db.Phims.Remove(data);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", "An error occurred while saving the changes: " + ex.Message);
                return View();
            }

            return RedirectToAction("Index");
        }

    }
}