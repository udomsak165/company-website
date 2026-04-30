export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">สมัยนิยมขนส่ง</div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">บริษัทขนส่งมืออาชีพ</div>

          <h1>
            ขนส่งหิน–ทราย <br />
            รวดเร็ว ตรงเวลา
          </h1>

          <p className="sub">
            บริการขนส่งด้วยรถสิบล้อกว่า 100 คัน
            พร้อมทีมงานและระบบติดตาม
          </p>

          <a className="btn btn-main" href="tel:0800000000">
            โทรเลย
          </a>

          <a className="btn btn-dark" href="#">
            แอด LINE
          </a>
        </div>

        <div className="hero-card">
          <h3>🚛 พร้อมรับงาน</h3>
          <p>100+ คัน / GPS / 24 ชม.</p>
        </div>
      </section>

      <section className="section">
        <h2>บริการของเรา</h2>

        <div className="services">
          <div className="service">ขนส่งหิน–ทราย</div>
          <div className="service">งานโครงการ</div>
          <div className="service">รถพร้อมใช้งาน</div>
        </div>
      </section>

      <footer className="footer">
        © สมัยนิยมขนส่ง
      </footer>
    </main>
  );
}
