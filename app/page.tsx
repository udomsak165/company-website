export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo-wrap">
            <img src="/logo.png" alt="SAMAINIYOM LOGISTICS" className="logo-img" />

            <div className="logo-text">
              SAMAINIYOM LOGISTICS
              <span>สมัยนิยม ขนส่งหิน–ทราย</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#services">บริการ</a>
            <a href="#about">เกี่ยวกับเรา</a>
            <a href="#why">จุดเด่น</a>
            <a href="#contact">ติดต่อ</a>
            <a href="#driver">สมัครขับรถ</a>
            <a href="#quote" className="nav-quote">ขอใบเสนอราคา</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            บริษัทขนส่งหิน–ทรายมืออาชีพ
          </div>

          <h1>
            ขนส่งหิน–ทราย
            <br />
            <span>รวดเร็ว ตรงเวลา เชื่อถือได้</span>
          </h1>

          <p className="hero-desc">
            SAMAINIYOM LOGISTICS ให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง
            ด้วยรถสิบล้อกว่า 100 คัน รองรับงานโครงการ งานประจำ และงานเร่งด่วน
            มีระบบ GPS ติดตามรถทุกคัน พร้อมอู่ซ่อมบำรุงของบริษัท
            ให้คุณมั่นใจว่างานไม่สะดุดและควบคุมได้ทุกเที่ยว
          </p>

          <p className="hero-desc">
            📍 ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / พื้นที่ตามตกลง
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">ขอใบเสนอราคาทันที →</a>
            <a className="btn btn-secondary" href="tel:0800000000">โทรเลย</a>
          </div>

          <div className="hero-note">
            <span>✓ รถสิบล้อกว่า 100 คัน</span>
            <span>✓ ติด GPS ทุกคัน</span>
            <span>✓ มีอู่ซ่อมบำรุงเอง</span>
            <span>✓ รองรับงานโครงการ</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="main-card">
            <div className="card-content">
              <img src="/logo.png" alt="สมัยนิยมขนส่ง" className="hero-logo" />
              <div className="card-title">ระบบขนส่งพร้อมลุยทุกงาน</div>
              <div className="card-sub">
                รองรับงานโครงการ งานก่อสร้าง งานประจำ และงานเร่งด่วน
                ในกรุงเทพฯ ปริมณฑล ภาคกลาง และพื้นที่ให้บริการ
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <strong>100+</strong>
                  <span>รถสิบล้อในระบบ</span>
                </div>

                <div className="stat-box">
                  <strong>GPS</strong>
                  <span>ติดตามรถทุกคัน</span>
                </div>

                <div className="stat-box">
                  <strong>24/7</strong>
                  <span>ประสานงานต่อเนื่อง</span>
                </div>

                <div className="stat-box">
                  <strong>อู่</strong>
                  <span>ซ่อมบำรุงภายใน</span>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-badge">
            พร้อมรับงานขนส่ง
            <br />
            หิน–ทราย / งานโครงการ
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div>
            <div className="kicker">OUR SERVICES</div>
            <h2>บริการของเรา</h2>
          </div>
          <p className="section-desc">
            บริการขนส่งวัสดุก่อสร้างแบบครบระบบ ตั้งแต่รถ ท่าทราย ทีมงาน
            และการดูแลรถ เพื่อให้งานของลูกค้าไม่สะดุด
          </p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">🚛</div>
            <h3>ขนส่งหิน–ทราย</h3>
            <p>
              รับขนส่งหิน ทราย และวัสดุก่อสร้าง สำหรับไซต์งานก่อสร้าง
              โรงงาน โครงการ และลูกค้าประจำ
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <h3>งานโครงการ</h3>
            <p>
              รองรับงานที่ต้องใช้รถจำนวนมาก วางแผนรอบรถ ประสานงานหน้างาน
              และควบคุมความต่อเนื่องของงาน
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧰</div>
            <h3>อู่ซ่อมบำรุง</h3>
            <p>
              มีระบบดูแลรถภายใน ช่วยลดปัญหารถเสียกลางทาง
              และเพิ่มความพร้อมในการให้บริการลูกค้า
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📍</div>
            <h3>ติดตามรถด้วย GPS</h3>
            <p>
              ติดตามตำแหน่งรถ ช่วยให้ประสานงานง่ายขึ้น
              และทำให้ลูกค้ามั่นใจในรอบการขนส่ง
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📞</div>
            <h3>ทีมประสานงาน</h3>
            <p>
              มีทีมงานคอยดูแลการจ่ายงาน ติดตามรถ และสื่อสารกับลูกค้า
              เพื่อแก้ปัญหาหน้างานได้เร็ว
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⏱️</div>
            <h3>งานด่วน / งานประจำ</h3>
            <p>
              รองรับทั้งงานประจำรายวัน งานเร่งด่วน และงานที่ต้องวางแผนรถล่วงหน้า
              ตามความต้องการของลูกค้า
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <div>
            <div className="kicker">ABOUT US</div>
            <h2>เกี่ยวกับเรา</h2>
          </div>
          <p className="section-desc">
            สมัยนิยม ขนส่ง คือธุรกิจขนส่งหิน–ทรายที่เน้นความพร้อมของรถ
            ความชัดเจนในการประสานงาน และความเชื่อถือได้ของงานหน้างาน
          </p>
        </div>

        <div className="about-wrap">
          <div className="about-panel">
            <h3>SAMAINIYOM LOGISTICS</h3>
            <p>
              เราให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง โดยมีรถสิบล้อในระบบจำนวนมาก
              มีทีมประสานงาน มีระบบติดตามรถ และมีอู่ดูแลรถภายใน
              เพื่อให้ลูกค้าได้รับบริการที่ต่อเนื่องและเป็นระบบ
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <strong>1. รับรายละเอียดงาน</strong>
              <span>ลูกค้าแจ้งต้นทาง ปลายทาง ประเภทวัสดุ และจำนวนเที่ยวที่ต้องการ</span>
            </div>

            <div className="timeline-item">
              <strong>2. วางแผนรถ</strong>
              <span>ทีมงานตรวจสอบรถพร้อมใช้งาน วางรอบรถ และประสานงานคนขับ</span>
            </div>

            <div className="timeline-item">
              <strong>3. ติดตามการขนส่ง</strong>
              <span>ติดตามรถด้วย GPS และดูแลการสื่อสารระหว่างงาน</span>
            </div>

            <div className="timeline-item">
              <strong>4. ส่งงานถึงปลายทาง</strong>
              <span>เน้นความตรงเวลา ความเรียบร้อย และลดปัญหาหน้างานสะดุด</span>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="why-section">
        <div className="section">
          <div className="section-head">
            <div>
              <div className="kicker">WHY CHOOSE US</div>
              <h2>จุดเด่นของเรา</h2>
            </div>
            <p className="section-desc">
              ไม่ใช่แค่มีรถ แต่ต้องมีระบบ คนดูแล และความพร้อมในการแก้ปัญหาหน้างานจริง
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <b>01</b>
              <h3>รถสิบล้อกว่า 100 คัน</h3>
              <p>รองรับงานต่อเนื่อง งานโครงการ และงานที่ต้องใช้รถจำนวนมาก</p>
            </div>

            <div className="why-card">
              <b>02</b>
              <h3>GPS ทุกคัน</h3>
              <p>ช่วยติดตามรถ ประสานงาน และดูสถานะงานได้ง่ายขึ้น</p>
            </div>

            <div className="why-card">
              <b>03</b>
              <h3>มีอู่ของบริษัท</h3>
              <p>ดูแลความพร้อมของรถ ลดความเสี่ยงรถเสียระหว่างขนส่ง</p>
            </div>

            <div className="why-card">
              <b>04</b>
              <h3>ทีมประสานงานจริง</h3>
              <p>ดูแลลูกค้า คนขับ และการจัดรอบรถให้สอดคล้องกับหน้างาน</p>
            </div>

            <div className="why-card">
              <b>05</b>
              <h3>เหมาะกับงานก่อสร้าง</h3>
              <p>เข้าใจงานหิน ทราย ไซต์งาน และการทำงานแบบมีรอบรถ</p>
            </div>

            <div className="why-card">
              <b>06</b>
              <h3>ทำงานเป็นระบบ</h3>
              <p>เน้นการจัดการข้อมูล การติดตามงาน และการสื่อสารที่ชัดเจน</p>
            </div>
          </div>
        </div>
      </section>

      <section id="driver" className="section">
        <div className="driver-box">
          <div>
            <div className="kicker">JOIN OUR TEAM</div>
            <h2>สมัครขับรถกับสมัยนิยม</h2>
            <p className="hero-desc" style={{ color: "rgba(255,255,255,0.78)" }}>
              เรามองหาคนขับที่มีวินัย ดูแลรถได้ดี สื่อสารชัดเจน
              และพร้อมเติบโตไปกับระบบขนส่งที่เป็นมืออาชีพ
            </p>

            <div className="driver-list">
              <div>✓ มีประสบการณ์ขับรถสิบล้อ</div>
              <div>✓ มีความรับผิดชอบและตรงต่อเวลา</div>
              <div>✓ ดูแลรถและปฏิบัติตามกฎความปลอดภัย</div>
            </div>
          </div>

          <div className="driver-card">
            <h3>เปิดรับสมัครพนักงานขับรถ</h3>
            <p>
              สนใจสมัครงาน สามารถติดต่อฝ่ายบุคคล
              หรือส่งข้อมูลเบื้องต้นเพื่อให้ทีมงานติดต่อกลับ
            </p>
            <a className="btn btn-primary" href="#contact">สมัคร / ติดต่อ HR</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <div>
            <div className="kicker">CONTACT</div>
            <h2>ติดต่อเรา</h2>
          </div>
          <p className="section-desc">
            ติดต่อสอบถามงานขนส่ง พื้นที่ให้บริการ จำนวนรถ หรือขอใบเสนอราคา
            ทีมงานพร้อมประสานงานให้
          </p>
        </div>

        <div className="contact-wrap">
          <div className="contact-card">
            <h3>ช่องทางติดต่อ</h3>
            <div className="contact-line">📞 โทร: 080-000-0000</div>
            <div className="contact-line">💬 LINE OA: @samainiyom</div>
            <div className="contact-line">📍 พื้นที่ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / ตามตกลง</div>
            <div className="contact-line">⏰ เวลาทำการ: ติดต่อประสานงานได้ทุกวัน</div>

            <div className="hero-actions" style={{ marginTop: 22 }}>
              <a className="btn btn-primary" href="tel:0800000000">โทรเลย</a>
              <a className="btn btn-secondary" href="https://line.me/ti/p/">แอด LINE</a>
            </div>
          </div>

          <div id="quote" className="contact-card">
            <h3>ขอใบเสนอราคา</h3>

            <form className="quote-form">
              <input className="input" placeholder="ชื่อผู้ติดต่อ / บริษัท" />
              <input className="input" placeholder="เบอร์โทรศัพท์" />
              <input className="input" placeholder="ต้นทาง" />
              <input className="input" placeholder="ปลายทาง" />
              <textarea className="input" placeholder="รายละเอียดงาน เช่น ประเภทวัสดุ จำนวนเที่ยว วันที่ต้องการใช้รถ"></textarea>
              <button className="btn btn-primary" type="button">ส่งข้อมูลให้ทีมงาน</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <b>SAMAINIYOM LOGISTICS</b>
        สมัยนิยม ขนส่ง | ขนส่งหิน–ทราย | รถสิบล้อ | งานโครงการ | วัสดุก่อสร้าง
      </footer>
    </main>
  );
}
