//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Quanlyrapchieuphim.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class HoaDon
    {
        public string IDHoaDon { get; set; }
        public string TenHoaDon { get; set; }
        public Nullable<double> TongTien { get; set; }
        public string GhiChu { get; set; }
        public Nullable<System.DateTime> NgayTao { get; set; }
        public string IDVe { get; set; }
    
        public virtual Ve Ve { get; set; }
    }
}
