"use client";
import { useState, useEffect } from "react";

const services = [
  {
    image: "/service1.png",
    title: "ขนส่งหิน–ทราย",
    desc: "บริการขนส่งหิน ทราย และวัสดุก่อสร้าง สำหรับไซต์งาน โรงงาน โครงการ และลูกค้าประจำ",
    upload: "service1.png",
  },
  {
    image: "/service2.png",
    title: "งานโครงการ",
    desc: "รองรับงานที่ต้องใช้รถหลายคัน วางแผนรอบรถ คุมรอบงาน และประสานงานหน้างาน",
    upload: "service2.png",
  },
  {
    image: "/service3.png",
    title: "อู่ซ่อมบำรุง",
    desc: "ดูแลรถในระบบให้พร้อมใช้งาน ลดความเสี่ยงรถเสียกลางทาง และช่วยให้งานไม่สะดุด",
    upload: "service3.png",
  },
  {
    image: "/service4.png",
    title: "ติดตาม GPS",
    desc: "ติดตามรถเพื่อประสานงาน ดูสถานะ และเพิ่มความมั่นใจให้กับลูกค้าระหว่างขนส่ง",
    upload: "service4.png",
  },
  {
    image: "/service5.png",
    title: "ทีมประสานงาน",
    desc: "ทีมงานดูแลลูกค้า คนขับ และการจ่ายงาน เพื่อแก้ปัญหาหน้างานได้รวดเร็ว",
    upload: "service5.png",
  },
  {
    image: "/service6.png",
    title: "งานด่วน / งานประจำ",
    desc: "รองรับทั้งงานรายวัน งานประจำ และงานที่ต้องวางแผนรถล่วงหน้าตามรอบงานจริง",
    upload: "service6.png",
  },
];

const vehicleTypes = [
  {
    image: "/truck1.png",
    label: "TRUCK 1",
    title: "รถตัวแม่",
    desc: "รถหลักสำหรับงานหนัก งานขนส่งหิน–ทราย และงานโครงการที่ต้องการความพร้อมสูง",
    upload: "truck1.png",
  },
  {
    image: "/truck2.png",
    label: "TRUCK 2",
    title: "รถตัวลูก",
    desc: "รถสำหรับเสริมรอบงาน ช่วยให้งานต่อเนื่อง คุมเที่ยวได้ดี และรองรับงานประจำรายวัน",
    upload: "truck2.png",
  },
  {
    image: "/truck3.png",
    label: "TRUCK 3",
    title: "รถงานโครงการ",
    desc: "รถสำหรับงานไซต์ งานก่อสร้าง และงานที่ต้องวางแผนรอบรถล่วงหน้าเป็นระบบ",
    upload: "truck3.png",
  },
];

const galleryItems = [
  { image: "/gallery1.png", title: "ภาพหลักของผลงาน", desc: "ใช้เป็นภาพยาวหลัก เช่น ขบวนรถ หน้างานใหญ่ หรือภาพที่อยากให้เด่นที่สุด", upload: "gallery1.png" },
  { image: "/gallery2.png", title: "ท่าทราย", desc: "เพิ่มภาพท่าทราย พื้นที่โหลด หรือบรรยากาศการจัดการวัสดุ", upload: "gallery2.png" },
  { image: "/gallery3.png", title: "อู่ซ่อมบำรุง", desc: "เพิ่มภาพอู่ ช่าง หรือการดูแลรถภายในบริษัท", upload: "gallery3.png" },
  { image: "/gallery4.png", title: "ทีมงาน / หน้างาน", desc: "เพิ่มภาพทีมงาน คนขับ หรือบรรยากาศการทำงานจริง", upload: "gallery4.png" },
];

const partners = [
  { image: "/partner1.png", upload: "partner1.png" },
  { image: "/partner2.png", upload: "partner2.png" },
  { image: "/partner3.png", upload: "partner3.png" },
  { image: "/partner4.png", upload: "partner4.png" },
  { image: "/partner5.png", upload: "partner5.png" },
  { image: "/partner6.png", upload: "partner6.png" },
  { image: "/partner7.png", upload: "partner7.png" },
  { image: "/partner8.png", upload: "partner8.png" },
];

const strengths = [
  ["100+", "รถสิบล้อในระบบ", "รองรับงานต่อเนื่อง งานโครงการ และงานที่ต้องใช้รถจำนวนมาก"],
  ["GPS", "ติดตามรถทุกคัน", "ช่วยประสานงาน ดูรอบรถ และลดความคลาดเคลื่อนของหน้างาน"],
  ["อู่", "ซ่อมบำรุงภายใน", "ดูแลความพร้อมของรถ ลดความเสี่ยงจากรถเสียระหว่างขนส่ง"],
  ["ทีม", "ประสานงานจริง", "ดูแลลูกค้า คนขับ และรอบรถให้ทำงานเป็นระบบ"],
  ["ไซต์", "เข้าใจงานก่อสร้าง", "เข้าใจรอบโหลด จุดลงงาน และการจัดรถในไซต์งาน"],
  ["ระบบ", "ทำงานเป็นข้อมูล", "ต่อยอดกับ GPS, LINE, Dashboard และการจัดการภายในได้"],
];

function ImagePlaceholder({ title, upload, desc, large = false }: { title: string; upload: string; desc?: string; large?: boolean }) {
  return (
    <div className={large ? "image-slot image-slot-large" : "image-slot"}>
      <div className="image-slot-icon">＋</div>
      <strong>{title}</strong>
      <span>อัปโหลดไฟล์ <b>public/{upload}</b></span>
      {desc ? <small>{desc}</small> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 450);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo-wrap" aria-label="SAMAINIYOM KHONSONG">
            <div className="logo-frame">
              <img src="/logo.png" alt="SAMAINIYOM KHONSONG" className="logo-img" />
            </div>
            <div className="logo-text">
              SAMAINIYOM KHONSONG
              <span>สมัยนิยม ขนส่งหิน–ทราย</span>
            </div>
          </a>

          <button
            className="hamburger"
            type="button"
            aria-label="เปิดเมนู"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#services" onClick={() => setMenuOpen(false)}>บริการ</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>เกี่ยวกับเรา</a>
            <a href="#owner" onClick={() => setMenuOpen(false)}>เจ้าของธุรกิจ</a>
            <a href="#history" onClick={() => setMenuOpen(false)}>ความเป็นมา</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>จุดเด่น</a>
            <a href="#fleet" onClick={() => setMenuOpen(false)}>ประเภทรถ</a>
            <a href="#partners" onClick={() => setMenuOpen(false)}>พาร์ทเนอร์</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>แกลลอรี่</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>ติดต่อ</a>
            <a href="#driver" onClick={() => setMenuOpen(false)}>สมัครขับรถ</a>
            <a href="https://line.me/ti/p/" className="nav-quote nav-line-quote" onClick={() => setMenuOpen(false)}><span className="line-logo-nav">LINE</span> ติดต่อกับแอดมิน</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />บรรทุก ขนส่งหิน–ทรายมืออาชีพ</div>
          <h1>
            ขนส่งหิน–ทราย
            <br />
            <span>รวดเร็ว เชื่อถือได้</span>
          </h1>
          <p className="hero-desc">
            SAMAINIYOM KHONSONG ให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง
            ด้วยรถสิบล้อกว่า 100 คัน รองรับงานโครงการ งานประจำ และงานเร่งด่วน
            มีระบบ GPS ติดตามรถทุกคัน พร้อมอู่ซ่อมบำรุงของบริษัท
          </p>
          <div className="service-area">📍 ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / ตามพื้นที่ตกลง</div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">ขอใบเสนอราคาทันที →</a>
            <a className="btn btn-secondary" href="#fleet">ดูประเภทรถ</a>
          </div>
        </div>

        <div className="hero-visual clean-hero-visual">
          <div className="upload-hero-card">
            <div className="upload-glow" />
            <div className="upload-card-top"><span>HERO IMAGE</span><b>อัปโหลดเองได้</b></div>
            <ImagePlaceholder
              large
              title="พื้นที่ภาพหลัก"
              upload="truck1.png"
              desc="แนะนำใช้ภาพรถตัวแม่หรือรถที่ดูสง่าที่สุดของบริษัท"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div><div className="kicker">OUR SERVICES</div><h2>บริการของเรา</h2></div>
          <p className="section-desc">บริการหลักของบริษัท จัดให้กระชับ อ่านง่าย และดูเป็นระบบ เพื่อให้ลูกค้าเข้าใจทันทีว่าเรารองรับงานแบบไหน</p>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article className="service-card service-card-clean" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
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
            <img src="/logo.png" alt="SAMAINIYOM KHONSONG" className="about-logo-large" />
            <h3>SAMAINIYOM KHONSONG</h3>
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

      <section id="owner" className="section owner-section">
        <div className="section-head">
          <div><div className="kicker">OWNER</div><h2>เจ้าของธุรกิจ</h2></div>
          <p className="section-desc">พื้นที่สำหรับเล่าแนวคิด วิสัยทัศน์ และมาตรฐานการทำงานของผู้บริหารสมัยนิยม ขนส่ง</p>
        </div>
        <div className="owner-card">
          <div className="owner-photo-slot">
            <span>อัปโหลดรูปเจ้าของธุรกิจ</span>
            <small>public/owner.png</small>
          </div>
          <div className="owner-content">
            <h3>ขับเคลื่อนธุรกิจด้วยระบบ ความรับผิดชอบ และความตรงเวลา</h3>
            <p>
              สมัยนิยม ขนส่ง ให้ความสำคัญกับการทำงานที่ตรวจสอบได้ การดูแลรถให้พร้อมใช้งาน
              และการประสานงานที่ชัดเจน เพื่อให้ลูกค้ามั่นใจได้ว่างานขนส่งหิน–ทรายทุกเที่ยวมีคนดูแลจริง
            </p>
            <div className="owner-points">
              <span>✓ เน้นความปลอดภัย</span>
              <span>✓ ทำงานเป็นระบบ</span>
              <span>✓ ดูแลลูกค้าและคนขับ</span>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="section history-section">
        <div className="section-head">
          <div><div className="kicker">HISTORY</div><h2>ความเป็นมา</h2></div>
          <p className="section-desc">จากธุรกิจขนส่งหน้างานจริง สู่ระบบขนส่งที่มีรถ ทีมงาน GPS และอู่ซ่อมบำรุงรองรับงานอย่างต่อเนื่อง</p>
        </div>
        <div className="history-grid">
          <article className="history-card"><b>จุดเริ่มต้น</b><span>เริ่มจากงานขนส่งหิน–ทรายที่ต้องอาศัยความตรงเวลาและความพร้อมของรถ</span></article>
          <article className="history-card"><b>การเติบโต</b><span>พัฒนากำลังรถ ทีมงาน และการประสานงานให้รองรับงานโครงการและงานประจำได้มากขึ้น</span></article>
          <article className="history-card"><b>ปัจจุบัน</b><span>ต่อยอดด้วยระบบ GPS การจัดงานผ่านข้อมูล และการดูแลรถด้วยอู่ซ่อมบำรุงภายใน</span></article>
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

      <section id="fleet" className="section premium-fleet">
        <div className="premium-fleet-head compact-head">
          <div>
            <div className="kicker">VEHICLE TYPES</div>
            <h2>ประเภทรถของเรา</h2>
            <p>แบ่งเป็น 3 ประเภทรถ พร้อมช่องอัปโหลดรูปและพื้นที่คำอธิบาย เพื่อให้ลูกค้าเข้าใจว่ารถแต่ละแบบเหมาะกับงานแบบไหน</p>
          </div>
          <a className="btn btn-primary" href="#quote">ขอใบเสนอราคา</a>
        </div>

        <div className="vehicle-type-grid">
          {vehicleTypes.map((item) => (
            <article className="vehicle-type-card" key={item.title}>
              <div className="vehicle-label">{item.label}</div>
              <ImagePlaceholder title={item.title} upload={item.upload} desc="อัปโหลดภาพรถประเภทนี้" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="section partner-section">
        <div className="section-head section-head-simple">
          <div><div className="kicker">PARTNERS</div><h2>พาร์ทเนอร์ที่เคยร่วมงาน</h2></div>
        </div>
        <div className="partner-logo-grid">
          {partners.map((item) => (
            <article className="partner-logo-card" key={item.upload}>
              <div className="partner-image-slot" style={{ backgroundImage: `url(${item.image})` }}>
                <span>public/{item.upload}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-head">
          <div><div className="kicker">GALLERY</div><h2>แกลลอรี่ผลงาน</h2></div>
          <p className="section-desc">ภาพหลัก 1 ช่องอัตราส่วน 1:2 และภาพย่อย 3 ช่องสี่เหลี่ยมจัตุรัส พร้อมคำอธิบายใต้ภาพ</p>
        </div>

        <div className="gallery-layout">
          <article className="gallery-feature-card">
            <div className="gallery-feature-image" style={{ backgroundImage: `url(${galleryItems[0].image})` }}>
              <span>public/{galleryItems[0].upload}</span>
            </div>
            <div className="gallery-text">
              <strong>{galleryItems[0].title}</strong>
              <span>{galleryItems[0].desc}</span>
            </div>
          </article>

          <div className="gallery-small-grid">
            {galleryItems.slice(1).map((item) => (
              <article className="gallery-small-card" key={item.upload}>
                <div className="gallery-small-image" style={{ backgroundImage: `url(${item.image})` }}>
                  <span>public/{item.upload}</span>
                </div>
                <div className="gallery-text">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </article>
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
            <div className="contact-line contact-line-icon">
              <span className="contact-icon contact-icon-phone" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.6 22 2 13.4 2 2.4 2 1.7 2.5 1.2 3.2 1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.6 3.2Z" /></svg>
              </span>
              โทร: 080-000-0000
            </div>
            <div className="contact-line contact-line-line"><span className="line-logo-mini">LINE</span> LINE OA: @samainiyom</div>
            <div className="contact-line contact-line-icon">
              <span className="contact-icon contact-icon-map" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" /></svg>
              </span>
              พื้นที่ให้บริการ: กรุงเทพฯ / ปริมณฑล / ภาคกลาง / ตามตกลง
            </div>
            <div className="contact-line contact-line-icon">
              <span className="contact-icon contact-icon-office" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 21V3h10v4h6v14h-7v-4H9v4H4Zm3-3h2v-2H7v2Zm0-4h2v-2H7v2Zm0-4h2V8H7v2Zm0-4h2V4H7v2Zm4 8h2v-2h-2v2Zm0-4h2V8h-2v2Zm0-4h2V4h-2v2Zm4 12h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2V8h-2v2Z" /></svg>
              </span>
              สถานที่ตั้งบริษัท: ต.ทุ่งลูกนก อ.กำแพงแสน จ.นครปฐม
            </div>
            <div className="contact-line contact-line-icon">
              <span className="contact-icon contact-icon-clock" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .1 0H12Zm1 5v4.4l3.4 2.1-1.1 1.8-4.3-2.6V7h2Z" /></svg>
              </span>
              เวลาทำการ: ติดต่อประสานงานได้ทุกวัน
            </div>
            <div className="hero-actions contact-actions">
              <a className="btn btn-primary" href="tel:0800000000">โทรเลย</a>
              <a className="btn btn-secondary btn-line" href="https://line.me/ti/p/"><span className="line-logo-mini">LINE</span> แอด LINE</a>
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
        <b>SAMAINIYOM KHONSONG</b>
        <span>สมัยนิยม ขนส่ง | ขนส่งหิน–ทราย | รถสิบล้อ | งานโครงการ | วัสดุก่อสร้าง</span>
      </footer>
      {showTop && (
        <button
          className="scroll-top"
          type="button"
          aria-label="เลื่อนขึ้นบนสุด"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </main>
  );
}
