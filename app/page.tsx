const services = [
  { icon: "🚛", title: "ขนส่งหิน–ทราย", desc: "บริการขนส่งหิน ทราย และวัสดุก่อสร้าง สำหรับไซต์งาน โรงงาน โครงการ และลูกค้าประจำ" },
  { icon: "🏗️", title: "งานโครงการ", desc: "รองรับงานที่ต้องใช้รถหลายคัน วางแผนรอบรถ คุมความต่อเนื่อง และประสานงานหน้างาน" },
  { icon: "🧰", title: "อู่ซ่อมบำรุง", desc: "ดูแลรถในระบบให้พร้อมใช้งาน ลดความเสี่ยงรถเสียกลางทาง และช่วยให้งานไม่สะดุด" },
  { icon: "📍", title: "ติดตาม GPS", desc: "ติดตามรถเพื่อประสานงาน ดูสถานะ และเพิ่มความมั่นใจให้กับลูกค้าในระหว่างขนส่ง" },
  { icon: "📞", title: "ทีมประสานงาน", desc: "ทีมงานดูแลลูกค้า คนขับ และการจ่ายงาน เพื่อแก้ปัญหาหน้างานได้รวดเร็ว" },
  { icon: "⏱️", title: "งานด่วน / งานประจำ", desc: "รองรับทั้งงานรายวัน งานประจำ และงานที่ต้องวางแผนรถล่วงหน้าตามรอบงานจริง" },
];

const strengths = [
  ["100+", "รถสิบล้อในระบบ", "รองรับงานต่อเนื่อง งานโครงการ และงานที่ต้องใช้รถจำนวนมาก"],
  ["GPS", "ติดตามรถทุกคัน", "ช่วยประสานงาน ดูรอบรถ และลดความคลาดเคลื่อนของหน้างาน"],
  ["อู่", "ซ่อมบำรุงภายใน", "ดูแลความพร้อมของรถ ลดความเสี่ยงจากรถเสียระหว่างขนส่ง"],
  ["ทีม", "ประสานงานจริง", "ดูแลลูกค้า คนขับ และรอบรถให้ทำงานเป็นระบบ"],
  ["ไซต์", "เข้าใจงานก่อสร้าง", "เข้าใจรอบโหลด จุดลงงาน และการจัดรถในไซต์งาน"],
  ["ระบบ", "ทำงานเป็นข้อมูล", "ต่อยอดกับระบบ GPS, LINE, Dashboard และการจัดการภายในได้"],
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo-wrap" aria-label="SAMAINIYOM LOGISTICS">
            <img src="/logo.png" alt="SAMAINIYOM LOGISTICS" className="logo-img" />
            <div className="logo-text">
              SAMAINIYOM LOGISTICS
              <span>สมัยนิยม ขนส่งหิน–ทราย</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#services">บริการ</a>
            <a href="#about">เกี่ยวกับเรา</a>
            <a href="#fleet">รถของเรา</a>
            <a href="#why">จุดเด่น</a>
            <a href="#contact">ติดต่อ</a>
            <a href="#driver">สมัครขับรถ</a>
            <a href="#quote" className="nav-quote">ขอใบเสนอราคา</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />บริษัทขนส่งหิน–ทรายมืออาชีพ</div>
          <h1>ขนส่งหิน–ทราย<br /><span>รวดเร็ว ตรงเวลา เชื่อถือได้</span></h1>
          <p className="hero-desc">
            SAMAINIYOM LOGISTICS ให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง
            ด้วยรถสิบล้อกว่า 100 คัน รองรับงานโครงการ งานประจำ และงานเร่งด่วน
            มีระบบ GPS ติดตามรถทุกคัน พร้อมอู่ซ่อมบำรุงของบริษัท เพื่อให้งานหน้างานเดินต่อได้อย่างมั่นใจ
          </p>
          <div className="service-area">📍 ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / ตามพื้นที่ตกลง</div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">ขอใบเสนอราคาทันที →</a>
            <a className="btn btn-secondary" href="#contact">ติดต่อเรา</a>
          </div>
          <div className="hero-note">
            <span>✓ รถสิบล้อกว่า 100 คัน</span>
            <span>✓ GPS ทุกคัน</span>
            <span>✓ มีอู่ซ่อมบำรุงเอง</span>
            <span>✓ รองรับงานโครงการ</span>
          </div>
        </div>

        <div className="hero-visual premium-hero-visual">
          <div className="hero-truck-card">
            <div className="hero-glow" />
            <div className="card-topline"><span>Fleet Control</span><b>Online</b></div>
            <img src="/truck1.png" alt="รถสิบล้อสีขาว สมัยนิยมขนส่ง" className="hero-truck-img" />
            <div className="hero-truck-info">
              <strong>พร้อมรับงานขนส่ง</strong>
              <span>หิน–ทราย / งานโครงการ / วัสดุก่อสร้าง</span>
            </div>
          </div>
          <div className="floating-badge">พร้อมรับงานขนส่ง<br />หิน–ทราย / งานโครงการ</div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div><div className="kicker">OUR SERVICES</div><h2>บริการของเรา</h2></div>
          <p className="section-desc">บริการขนส่งวัสดุก่อสร้างแบบครบระบบ ตั้งแต่รถ ท่าทราย ทีมงาน และการดูแลรถ เพื่อให้งานของลูกค้าไม่สะดุด</p>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <div><div className="kicker">ABOUT US</div><h2>เกี่ยวกับเรา</h2></div>
          <p className="section-desc">สมัยนิยม ขนส่ง คือธุรกิจขนส่งหิน–ทรายที่เน้นความพร้อมของรถ ความชัดเจนในการประสานงาน และความเชื่อถือได้ของงานหน้างาน</p>
        </div>
        <div className="about-wrap">
          <div className="about-panel">
            <img src="/logo.png" alt="สมัยนิยม ขนส่ง" className="about-logo" />
            <h3>SAMAINIYOM LOGISTICS</h3>
            <p>เราให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง โดยมีรถสิบล้อในระบบจำนวนมาก มีทีมประสานงาน มีระบบติดตามรถ และมีอู่ดูแลรถภายใน เพื่อให้ลูกค้าได้รับบริการที่ต่อเนื่องและเป็นระบบ</p>
          </div>
          <div className="timeline">
            <div className="timeline-item"><strong>1. รับรายละเอียดงาน</strong><span>ลูกค้าแจ้งต้นทาง ปลายทาง ประเภทวัสดุ และจำนวนเที่ยวที่ต้องการ</span></div>
            <div className="timeline-item"><strong>2. วางแผนรถ</strong><span>ทีมงานตรวจสอบรถพร้อมใช้งาน วางรอบรถ และประสานงานคนขับ</span></div>
            <div className="timeline-item"><strong>3. ติดตามการขนส่ง</strong><span>ติดตามรถด้วย GPS และดูแลการสื่อสารระหว่างงาน</span></div>
            <div className="timeline-item"><strong>4. ส่งงานถึงปลายทาง</strong><span>เน้นความตรงเวลา ความเรียบร้อย และลดปัญหาหน้างานสะดุด</span></div>
          </div>
        </div>
      </section>

      <section id="fleet" className="section premium-fleet">
        <div className="premium-fleet-head">
          <div>
            <div className="kicker">PREMIUM FLEET</div>
            <h2>รถพร้อมลุยทุกงานขนส่ง</h2>
            <p>รถสิบล้อของ SAMAINIYOM LOGISTICS พร้อมรองรับงานหิน–ทราย งานโครงการ และงานขนส่งวัสดุก่อสร้าง ด้วยระบบดูแลรถและติดตามงานแบบมืออาชีพ</p>
          </div>
          <a className="btn btn-primary" href="#quote">ขอใบเสนอราคา</a>
        </div>

        <div className="tesla-fleet-wrap">
          <div className="tesla-main-card">
            <div className="tesla-bg-glow" />
            <div className="tesla-label"><span>FLAGSHIP TRUCK</span><strong>รถหลักพร้อมใช้งาน</strong></div>
            <img src="/truck1.png" alt="รถสิบล้อสีขาว สมัยนิยมขนส่ง" className="tesla-truck-main" />
            <div className="tesla-specs">
              <div><strong>100+</strong><span>รถในระบบ</span></div>
              <div><strong>GPS</strong><span>ติดตามทุกคัน</span></div>
              <div><strong>24/7</strong><span>ประสานงาน</span></div>
            </div>
          </div>

          <div className="tesla-side-card">
            <div className="tesla-side-top"><span>SUPPORT FLEET</span><strong>ขบวนรถเสริมงาน</strong></div>
            <img src="/truck2.png" alt="รถขนส่ง สมัยนิยม" className="tesla-truck-side" />
            <p>เสริมกำลังรถสำหรับงานต่อเนื่อง งานโครงการ และงานที่ต้องควบคุมรอบรถ</p>
          </div>
        </div>
      </section>

      <section id="why" className="why-section">
        <div className="section">
          <div className="section-head">
            <div><div className="kicker">WHY CHOOSE US</div><h2>จุดเด่นของเรา</h2></div>
            <p className="section-desc">ไม่ใช่แค่มีรถ แต่ต้องมีระบบ คนดูแล และความพร้อมในการแก้ปัญหาหน้างานจริง</p>
          </div>
          <div className="why-grid">
            {strengths.map(([no, title, desc]) => (
              <article className="why-card" key={title}><b>{no}</b><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="driver" className="section">
        <div className="driver-box">
          <div>
            <div className="kicker driver-kicker">JOIN OUR TEAM</div>
            <h2>สมัครขับรถกับสมัยนิยม</h2>
            <p className="driver-desc">เรามองหาคนขับที่มีวินัย ดูแลรถได้ดี สื่อสารชัดเจน และพร้อมเติบโตไปกับระบบขนส่งที่เป็นมืออาชีพ</p>
            <div className="driver-list"><div>✓ มีประสบการณ์ขับรถสิบล้อ</div><div>✓ มีความรับผิดชอบและตรงต่อเวลา</div><div>✓ ดูแลรถและปฏิบัติตามกฎความปลอดภัย</div></div>
          </div>
          <div className="driver-card">
            <h3>เปิดรับสมัครพนักงานขับรถ</h3>
            <p>สนใจสมัครงาน สามารถติดต่อฝ่ายบุคคล หรือส่งข้อมูลเบื้องต้นเพื่อให้ทีมงานติดต่อกลับ</p>
            <a className="btn btn-primary" href="#contact">สมัคร / ติดต่อ HR</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <div><div className="kicker">CONTACT</div><h2>ติดต่อเรา</h2></div>
          <p className="section-desc">ติดต่อสอบถามงานขนส่ง พื้นที่ให้บริการ จำนวนรถ หรือขอใบเสนอราคา ทีมงานพร้อมประสานงานให้</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-card">
            <h3>ช่องทางติดต่อ</h3>
            <div className="contact-line">📞 โทร: 080-000-0000</div>
            <div className="contact-line">💬 LINE OA: @samainiyom</div>
            <div className="contact-line">📍 พื้นที่ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / ตามตกลง</div>
            <div className="contact-line">⏰ เวลาทำการ: ติดต่อประสานงานได้ทุกวัน</div>
            <div className="hero-actions contact-actions">
              <a className="btn btn-primary" href="tel:0800000000">โทรเลย</a>
              <a className="btn btn-secondary" href="https://line.me/ti/p/">แอด LINE</a>
            </div>
          </div>

          <div id="quote" className="contact-card quote-card">
            <h3>ขอใบเสนอราคา</h3>
            <form className="quote-form">
              <input className="input" placeholder="ชื่อผู้ติดต่อ / บริษัท" />
              <input className="input" placeholder="เบอร์โทรศัพท์" />
              <input className="input" placeholder="ต้นทาง" />
              <input className="input" placeholder="ปลายทาง" />
              <textarea className="input" placeholder="รายละเอียดงาน เช่น ประเภทวัสดุ จำนวนเที่ยว วันที่ต้องการใช้รถ" />
              <button className="btn btn-primary" type="button">ส่งข้อมูลให้ทีมงาน</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <b>SAMAINIYOM LOGISTICS</b>
        <span>สมัยนิยม ขนส่ง | ขนส่งหิน–ทราย | รถสิบล้อ | งานโครงการ | วัสดุก่อสร้าง</span>
      </footer>
    </main>
  );
}
