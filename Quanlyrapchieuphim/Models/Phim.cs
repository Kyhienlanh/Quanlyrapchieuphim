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
    
    public partial class Phim
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Phim()
        {
            this.BinhLuans = new HashSet<BinhLuan>();
            this.SuatChieux = new HashSet<SuatChieu>();
        }
    
        public string IDPhim { get; set; }
        public string TenPhim { get; set; }
        public string TheLoai { get; set; }
        public Nullable<int> ThoiLuong { get; set; }
        public Nullable<System.DateTime> KhoiChieu { get; set; }
        public string NamSanXuat { get; set; }
        public string DaoDien { get; set; }
        public string DienVien { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BinhLuan> BinhLuans { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SuatChieu> SuatChieux { get; set; }
    }
}