export default function Home() {
  const services = [
    ["🚚", "ขนส่งหิน–ทราย", "บริการขนส่งวัสดุก่อสร้างด้วยรถสิบล้อ ครอบคลุมกรุงเทพฯ และปริมณฑล"],
    ["🏗️", "ท่าทรายของบริษัท", "มีท่าทรายรองรับงานลูกค้าประจำ งานโครงการ และงานก่อสร้างหลากหลายประเภท"],
    ["🔧", "อู่ซ่อมบำรุงภายใน", "ดูแลรถในระบบอย่างต่อเนื่อง ลดปัญหารถเสียกลางทาง และเพิ่มความพร้อมในการให้บริการ"],
  ];

  const strengths = [
    "มีรถสิบล้อจำนวนมาก พร้อมรองรับงานต่อเนื่อง",
    "ติดตามรถด้วยระบบ GPS",
    "มีทีมงานประสานงานและดูแลงานขนส่ง",
    "มีประสบการณ์ในธุรกิจหิน–ทรายและงานก่อสร้าง",
  ];

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <div className="logo-mark">🚚</div>
            <div>SAMAINIYOM LOGISTICS<small>ขนส่งหิน–ทราย และวัสดุก่อสร้าง</small></div>
          </div>
          <nav className="nav-links">
            <a href="#services">บริการ</a><a href="#about">เกี่ยวกับเรา</a><a href="#why">จุดเด่น</a><a href="#contact">ติดต่อ</a>
          </nav>
          <a className="btn btn-primary" href="#contact">ขอใบเสนอราคา</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">บริษัทขนส่งที่พร้อมดูแลงานจริงหน้างาน</div>
            <h1>ขนส่งหิน–ทราย<br /><span className="yellow">รวดเร็ว ตรงเวลา เชื่อถือได้</span></h1>
            <p className="lead">ให้บริการขนส่งวัสดุก่อสร้างด้วยรถสิบล้อ พร้อมระบบติดตามรถ ทีมประสานงาน และอู่ดูแลรถภายใน เพื่อให้งานของลูกค้าเดินต่อได้อย่างมั่นใจ</p>
            <div className="actions">
              <a className="btn btn-primary" href="#contact">ติดต่อสอบถาม →</a>
              <a className="btn btn-outline" href="#services">ดูบริการของเรา</a>
            </div>
          </div>

          <div className="panel">
            <div className="dashboard">
              <div className="panel-top">
                <div><div className="muted">Fleet Overview</div><h3>ระบบรถพร้อมใช้งาน</h3></div>
                <div className="online">Online</div>
              </div>
              <div className="stats">
                <div className="stat"><strong>100+</strong><span className="muted">รถสิบล้อในระบบ</span></div>
                <div className="stat"><strong>GPS</strong><span className="muted">ติดตามตำแหน่งรถ</span></div>
                <div className="stat"><strong>24/7</strong><span className="muted">ประสานงานต่อเนื่อง</span></div>
                <div className="stat"><strong>ทีมงาน</strong><span className="muted">ดูแลลูกค้าและคนขับ</span></div>
              </div>
              <div className="jobs">
                <div className="muted">งานวันนี้</div>
                <div className="job"><div><b>ทะเบียน 7797</b><br/><span className="muted">กรุงเทพฯ → ไซต์งานลูกค้า</span></div><span className="status">กำลังวิ่ง</span></div>
                <div className="job"><div><b>ทะเบียน 3634</b><br/><span className="muted">ท่าทราย → โครงการก่อสร้าง</span></div><span className="status">ถึงหน้างาน</span></div>
                <div className="job"><div><b>ทะเบียน 1722</b><br/><span className="muted">รับหิน → ส่งตามรอบ</span></div><span className="status">รอโหลด</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section container">
        <div className="kicker">OUR SERVICES</div>
        <h2>บริการหลักของบริษัท</h2>
        <p>ครบทั้งรถขนส่ง ท่าทราย และการดูแลรถ เพื่อให้งานขนส่งมีความต่อเนื่องและควบคุมคุณภาพได้ดีขึ้น</p>
        <div className="cards">
          {services.map((s) => <div className="card" key={s[1]}><div className="icon">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p></div>)}
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container two-col">
          <div><div className="kicker">ABOUT US</div><h2>บริษัทขนส่งที่เข้าใจงานหน้างานจริง</h2></div>
          <div><p>เราให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง สำหรับลูกค้าโครงการ งานไซต์ก่อสร้าง และลูกค้าประจำ โดยเน้นความตรงเวลา การสื่อสารชัดเจน และความพร้อมของรถ</p><p>จุดแข็งของเราคือมีรถในระบบจำนวนมาก มีท่าทราย มีอู่ดูแลรถ และกำลังพัฒนาระบบหลังบ้านให้ทันสมัยมากขึ้น</p></div>
        </div>
      </section>

      <section id="why" className="section container two-col">
        <div><div className="kicker">WHY CHOOSE US</div><h2>ทำไมลูกค้าถึงเลือกเรา</h2><p>งานขนส่งวัสดุก่อสร้างต้องอาศัยทั้งรถ คน ระบบ และการแก้ปัญหาหน้างาน บริษัทจึงเน้นบริการที่ติดต่อได้จริงและติดตามงานได้จริง</p></div>
        <div className="list">{strengths.map((x) => <div className="list-item" key={x}><div className="star">★</div><div>{x}</div></div>)}</div>
      </section>

      <section id="contact" className="section container">
        <div className="cta">
          <div><h2>ต้องการรถขนส่งหิน–ทราย?</h2><p>ติดต่อเราเพื่อสอบถามราคา รอบรถ และพื้นที่ให้บริการ ทีมงานพร้อมประสานงานให้เหมาะกับงานของคุณ</p></div>
          <div className="actions"><a className="btn" style={{background:'#111', color:'#fff'}} href="tel:0000000000">โทรติดต่อบริษัท</a><a className="btn btn-outline" href="#">เพิ่มเพื่อน LINE OA</a></div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-inner"><span>© 2026 SAMAINIYOM LOGISTICS. All rights reserved.</span><span>ขนส่งหิน–ทราย | ท่าทราย | อู่ซ่อมบำรุง | ระบบ GPS</span></div></footer>
    </main>
  );
}
