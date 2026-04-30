import React from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, Phone, ShieldCheck, Wrench, Factory, Star, ArrowRight, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompanyLogisticsWebsite() {
  const services = [
    {
      icon: <Truck className="w-7 h-7" />,
      title: "ขนส่งหิน–ทราย",
      desc: "บริการขนส่งวัสดุก่อสร้างด้วยรถสิบล้อ ครอบคลุมกรุงเทพฯ และปริมณฑล",
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "ท่าทรายของบริษัท",
      desc: "มีท่าทรายรองรับงานลูกค้าประจำ งานโครงการ และงานก่อสร้างหลากหลายประเภท",
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "อู่ซ่อมบำรุงภายใน",
      desc: "ดูแลรถในระบบอย่างต่อเนื่อง ลดปัญหารถเสียกลางทาง และเพิ่มความพร้อมในการให้บริการ",
    },
  ];

  const strengths = [
    "มีรถสิบล้อจำนวนมาก พร้อมรองรับงานต่อเนื่อง",
    "ติดตามรถด้วยระบบ GPS",
    "มีทีมงานประสานงานและดูแลงานขนส่ง",
    "มีประสบการณ์ในธุรกิจหิน–ทรายและงานก่อสร้าง",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500 text-neutral-950 shadow-lg shadow-yellow-500/20">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">SAMAINIYOM LOGISTICS</p>
              <p className="text-xs text-neutral-400">ขนส่งหิน–ทราย และวัสดุก่อสร้าง</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-neutral-300 md:flex">
            <a href="#services" className="hover:text-yellow-400">บริการ</a>
            <a href="#about" className="hover:text-yellow-400">เกี่ยวกับเรา</a>
            <a href="#why" className="hover:text-yellow-400">จุดเด่น</a>
            <a href="#contact" className="hover:text-yellow-400">ติดต่อ</a>
          </nav>
          <Button className="rounded-2xl bg-yellow-500 px-5 text-neutral-950 hover:bg-yellow-400">
            ขอใบเสนอราคา
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
              <ShieldCheck className="h-4 w-4" /> บริษัทขนส่งที่พร้อมดูแลงานจริงหน้างาน
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              ขนส่งหิน–ทราย<br />
              <span className="text-yellow-400">รวดเร็ว ตรงเวลา เชื่อถือได้</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              ให้บริการขนส่งวัสดุก่อสร้างด้วยรถสิบล้อ พร้อมระบบติดตามรถ ทีมประสานงาน และอู่ดูแลรถภายใน เพื่อให้งานของลูกค้าเดินต่อได้อย่างมั่นใจ
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-yellow-500 px-7 py-6 text-base text-neutral-950 hover:bg-yellow-400">
                ติดต่อสอบถาม <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-7 py-6 text-base text-white hover:bg-white/10">
                ดูบริการของเรา
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-neutral-800 to-neutral-950 p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Fleet Overview</p>
                    <p className="text-2xl font-bold">ระบบรถพร้อมใช้งาน</p>
                  </div>
                  <div className="rounded-2xl bg-green-500/15 px-4 py-2 text-sm text-green-300">Online</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Stat icon={<Truck />} value="100+" label="รถสิบล้อในระบบ" />
                  <Stat icon={<MapPin />} value="GPS" label="ติดตามตำแหน่งรถ" />
                  <Stat icon={<Clock />} value="24/7" label="ประสานงานต่อเนื่อง" />
                  <Stat icon={<Users />} value="ทีมงาน" label="ดูแลลูกค้าและคนขับ" />
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="mb-3 text-sm text-neutral-400">งานวันนี้</p>
                  <div className="space-y-3 text-sm">
                    <JobLine plate="7797" place="กรุงเทพฯ → ไซต์งานลูกค้า" status="กำลังวิ่ง" />
                    <JobLine plate="3634" place="ท่าทราย → โครงการก่อสร้าง" status="ถึงหน้างาน" />
                    <JobLine plate="1722" place="รับหิน → ส่งตามรอบ" status="รอโหลด" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold text-yellow-400">OUR SERVICES</p>
          <h2 className="text-3xl font-black md:text-4xl">บริการหลักของบริษัท</h2>
          <p className="mt-4 text-neutral-400">ครบทั้งรถขนส่ง ท่าทราย และการดูแลรถ เพื่อให้งานขนส่งมีความต่อเนื่องและควบคุมคุณภาพได้ดีขึ้น</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((item, index) => (
            <Card key={index} className="rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl shadow-black/20">
              <CardContent className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-neutral-950">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="leading-7 text-neutral-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-yellow-400">ABOUT US</p>
            <h2 className="text-3xl font-black md:text-4xl">บริษัทขนส่งที่เข้าใจงานหน้างานจริง</h2>
          </div>
          <div className="text-neutral-300">
            <p className="mb-5 leading-8">
              เราให้บริการขนส่งหิน ทราย และวัสดุก่อสร้าง สำหรับลูกค้าโครงการ งานไซต์ก่อสร้าง และลูกค้าประจำ โดยเน้นความตรงเวลา การสื่อสารชัดเจน และความพร้อมของรถ
            </p>
            <p className="leading-8">
              จุดแข็งของเราคือมีรถในระบบจำนวนมาก มีท่าทราย มีอู่ดูแลรถ และกำลังพัฒนาระบบหลังบ้านให้ทันสมัยมากขึ้น เพื่อให้ลูกค้าได้รับบริการที่มั่นใจได้ตั้งแต่ต้นทางถึงปลายทาง
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-yellow-400">WHY CHOOSE US</p>
            <h2 className="text-3xl font-black md:text-4xl">ทำไมลูกค้าถึงเลือกเรา</h2>
            <p className="mt-4 max-w-xl leading-8 text-neutral-400">
              เพราะงานขนส่งวัสดุก่อสร้างต้องอาศัยทั้งรถ คน ระบบ และการแก้ปัญหาหน้างาน บริษัทจึงเน้นบริการที่ติดต่อได้จริงและติดตามงานได้จริง
            </p>
          </div>
          <div className="space-y-4">
            {strengths.map((item, index) => (
              <div key={index} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-neutral-950">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="leading-7 text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] bg-yellow-500 p-8 text-neutral-950 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">ต้องการรถขนส่งหิน–ทราย?</h2>
              <p className="mt-4 max-w-xl text-neutral-800">ติดต่อเราเพื่อสอบถามราคา รอบรถ และพื้นที่ให้บริการ ทีมงานพร้อมประสานงานให้เหมาะกับงานของคุณ</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button className="w-full rounded-2xl bg-neutral-950 px-7 py-6 text-base text-white hover:bg-neutral-800 md:w-auto">
                <Phone className="mr-2 h-5 w-5" /> โทรติดต่อบริษัท
              </Button>
              <Button variant="outline" className="w-full rounded-2xl border-neutral-950/20 bg-white/20 px-7 py-6 text-base text-neutral-950 hover:bg-white/35 md:w-auto">
                เพิ่มเพื่อน LINE OA
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SAMAINIYOM LOGISTICS. All rights reserved.</p>
          <p>ขนส่งหิน–ทราย | ท่าทราย | อู่ซ่อมบำรุง | ระบบ GPS</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-4 text-yellow-400">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
      <p className="text-2xl font-black">{value}</p>
      <p className="text-sm text-neutral-400">{label}</p>
    </div>
  );
}

function JobLine({ plate, place, status }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-3 py-3">
      <div>
        <p className="font-semibold">ทะเบียน {plate}</p>
        <p className="text-xs text-neutral-500">{place}</p>
      </div>
      <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs text-yellow-300">{status}</span>
    </div>
  );
}
