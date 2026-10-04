/* Fitri Hanifah — Portfolio
   main.js: language (EN/ID), theme, mobile menu, counters, copy buttons,
   contact form (FormSubmit) and the background animation. */
(function(){
  "use strict";

  /* ---------- Settings: change contact details here ---------- */
  var CONFIG={
    formEndpoint:"https://formsubmit.co/ajax/fitrihanifah371@gmail.com",       // To: main inbox (FormSubmit)
    cc:"fitrihanifah79@yahoo.com,zaskiaaretha258@gmail.com",                  // Cc: separate with commas
    whatsapp:"6282126001022"                                                   // WhatsApp, international format, no +
  };
  var root=document.documentElement;
  var reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* ---------- Language: English by default, Indonesian on request ---------- */
  var ID_DICT={
    "nav.profile": "Profil",
    "nav.exp": "Pengalaman",
    "nav.skills": "Keahlian",
    "nav.edu": "Pendidikan",
    "nav.contact": "Kontak",
    "hero.tag": "Finance &amp; accounting, <span class=\"accent\">dikelola</span> dengan <span class=\"u\">presisi</span>.",
    "hero.lead": "Lulusan S1 Akuntansi (Cumlaude) dengan 10+ tahun pengalaman di bidang keuangan — AR/AP, perpajakan, hingga pelaporan — dengan jabatan terakhir sebagai <b>Supervisor Finance</b>.",
    "hero.cta1": "Lihat pengalaman",
    "hero.cta2": "Hubungi saya",
    "hero.stat1": "Tahun pengalaman",
    "hero.stat2": "IPK · Cumlaude",
    "hero.stat3": "Sertifikasi pajak",
    "hero.alt": "Foto Fitri Hanifah",
    "hero.badgeVal": "10+ th",
    "hero.badgeLab": "Pengalaman",
    "spec.eyebrow": "Spesialisasi",
    "spec.h2": "Bidang keahlian saya",
    "spec.p": "Lebih dari 10 tahun menangani siklus keuangan perusahaan secara menyeluruh — akurat dan patuh standar.",
    "spec.c1h": "Keuangan &amp; AR/AP",
    "spec.c1p": "Mengawasi kegiatan Account Receivable &amp; Account Payable, verifikasi invoice dan faktur pajak, hingga penagihan ke customer.",
    "spec.c1t": "Penagihan",
    "spec.c2h": "Perpajakan (PPN &amp; PPh)",
    "spec.c2p": "Penghitungan, pembayaran, dan pelaporan SPT PPN &amp; PPh melalui e-Faktur dan Coretax — didukung Brevet AB sampai C.",
    "spec.c3h": "Pelaporan, Payroll &amp; Kas",
    "spec.c3p": "Jurnal ke buku besar, payroll karyawan, petty cash sebagai kasir, serta laporan omset, budgeting, dan arus kas.",
    "eq.p": "Setiap angka yang saya kelola, selalu balance.",
    "exp.eyebrow": "Pengalaman kerja",
    "exp.h2": "Jejak karier",
    "exp.p": "Lebih dari 10 tahun di bidang keuangan, dengan kenaikan dari Senior Finance menjadi Supervisor Finance.",
    "exp1.per": "Okt 2018 — Mar 2026",
    "exp1.dur": "8 tahun",
    "exp1.b1": "Mengawasi kegiatan AR dan AP.",
    "exp1.b2": "Mengawasi kegiatan perpajakan khususnya PPN sampai ke tahap pelaporan SPT.",
    "exp1.b3": "Memeriksa invoice dan faktur pajak PPN sebelum didistribusikan ke customer.",
    "exp1.b4": "Menjurnal transaksi dan posting ke buku besar/ledger, serta membuat cek/bilyet giro.",
    "exp1.b5": "Menangani claim reimbursement dan memeriksa bukti bon/voucher dari setiap divisi.",
    "exp1.b6": "Berperan sebagai kasir menangani petty cash (claim reimburse &amp; biaya operasional).",
    "exp1.b7": "Menghitung dan membayar gaji karyawan setiap bulan.",
    "exp1.b8": "Membuat laporan bulanan seperti laporan omset dan budgeting sesuai kebutuhan user.",
    "exp2.per": "Sep 2014 — Agu 2018",
    "exp2.dur": "4 tahun",
    "exp2.b1": "Membuat invoice dan faktur pajak PPN melalui aplikasi e-Faktur dan database perusahaan.",
    "exp2.b2": "Menjurnal transaksi dan posting ke buku besar/ledger.",
    "exp2.b3": "Menghitung, membayar, dan melaporkan SPT PPN tiap akhir bulan.",
    "exp2.b4": "Melakukan penagihan ke customer (AR) dan menyusun budget pembayaran supplier (AP).",
    "exp2.b5": "Membuat surat resmi, memo, notulen meeting, dan proposal kegiatan/sumbangan.",
    "exp2.b6": "Membuat laporan bulanan sesuai kebutuhan user, seperti laporan omset dan komisi sales.",
    "exp2.b7": "Memeriksa dan memverifikasi kelengkapan dokumen sesuai SAK.",
    "sk.eyebrow": "Keahlian",
    "sk.p": "Kemampuan teknis akuntansi–keuangan dan karakter kerja yang mendukungnya.",
    "hard1": "Menangani AR / AP",
    "hard2": "Menjurnal &amp; posting buku besar (General Journal &amp; Ledger)",
    "hard3": "Menangani petty cash sebagai kasir",
    "hard4": "Menangani payroll karyawan &amp; membuat cek/bilyet giro",
    "hard5": "Membuat invoice, faktur pajak PPN, SPT PPN, PO, quotation, delivery order, surat resmi, memo &amp; notulen meeting",
    "hard6": "Menguasai Ms Office, database DJP, Coretax, e-Faktur, Zahir &amp; MYOB",
    "hard7": "Menangani claim / reimbursement dari setiap divisi",
    "hard8": "Menyusun laporan: Omset, Budgeting, Payroll &amp; Arus Kas",
    "soft2": "Terstruktur",
    "soft3": "Inisiatif",
    "soft4": "Keputusan cepat",
    "soft5": "Bertanggung jawab",
    "soft6": "Kerja sama tim",
    "sk.apps": "Aplikasi yang dikuasai",
    "app.djp": "Database DJP",
    "edu.eyebrow": "Pendidikan &amp; sertifikasi",
    "edu.h2": "Latar belakang &amp; kredensial",
    "edu.p": "Pendidikan formal akuntansi dan sertifikasi perpajakan yang relevan.",
    "edu.title": "Pendidikan",
    "edu1.when": "Sarjana · IPK 3.60/4.00 · Cumlaude",
    "edu1.p": "S1 Akuntansi — pengelolaan keuangan perusahaan, akuntansi manajemen, akuntansi keuangan, dan perpajakan.",
    "edu2.when": "Rata-rata 85.00/90.00",
    "edu2.p": "Jurusan Akuntansi Keuangan — implementasi software akuntansi seperti MYOB dan Zahir.",
    "edu.sumTitle": "Ringkasan",
    "edu.sum": "Pribadi yang bertanggung jawab, multitasking, dan mampu bekerja sama dalam tim. Pencapaian karier terbesar adalah promosi dari <b>Senior Finance</b> menjadi <b>Supervisor Finance</b>, dengan lebih dari 10 tahun mengelola keuangan, akuntansi, dan perpajakan perusahaan. Telah menyelesaikan kursus perpajakan Brevet AB sampai Brevet C dengan hasil “Baik”.",
    "edu.certTitle": "Sertifikasi",
    "c1a": "Pajak Internasional",
    "c1b": "Tax Planning &amp; Akuntansi Pajak",
    "c1c": "PPh Badan, PPh OP, PPh Potput",
    "c2.issuer": "Ikatan Akuntan Indonesia (IAI)",
    "c2a": "PPN dan PPnBM",
    "c2b": "Pajak Bea Materai, PBB &amp; BPHTB",
    "c2c": "Ketentuan Umum Perpajakan",
    "c3.h": "Akuntansi Keuangan",
    "c3a": "Menjurnal transaksi keuangan",
    "c3b": "Memposting buku besar",
    "c3c": "Komputer akuntansi (MYOB)",
    "c3d": "Siklus akuntansi perusahaan dagang",
    "ct.eyebrow": "Kontak",
    "ct.h2": "Mari terhubung",
    "ct.p": "Untuk peluang kerja atau kerja sama di bidang keuangan &amp; akuntansi, silakan hubungi saya melalui kontak berikut.",
    "ct.copy": "Salin",
    "ct.cv": "Unduh CV (PDF)",
    "ct.loc": "Lokasi",
    "ct.locVal": "Darmawangsa Residence, Bekasi — Jawa Barat",
    "f.name": "Nama",
    "f.namePh": "Nama lengkap",
    "f.emailPh": "email@contoh.com",
    "f.msg": "Pesan",
    "f.msgPh": "Ceritakan kebutuhan Anda…",
    "f.send": "Kirim pesan",
    "f.note": "Pesan Anda langsung masuk ke inbox email Fitri.",
    "f.ok": "Pesan terkirim! Fitri akan membalas ke email yang Anda isi.",
    "f.failWa": "Chat via WhatsApp",
    "ft.top": "Kembali ke atas"
  };
  var EXTRA={
    "en": {
      "f.sending": "Sending…",
      "f.fail": "The message couldn't be sent from here. Please reach Fitri directly:",
      "f.activate": "This form isn't activated yet. Open the activation email sent to fitrihanifah371@gmail.com, then send again.",
      "ct.copied": "Copied",
      "wa.msg": "Hi Fitri, I came across your portfolio and would like to discuss further.",
      "mail.subject": "Message from {n} — via Portfolio",
      "mail.name": "Name",
      "lang.aria": "Ganti ke Bahasa Indonesia"
    },
    "id": {
      "f.sending": "Mengirim…",
      "f.fail": "Pesan belum bisa terkirim dari sini. Silakan hubungi Fitri langsung:",
      "f.activate": "Form ini belum diaktifkan. Buka email aktivasi yang dikirim ke fitrihanifah371@gmail.com, lalu kirim ulang.",
      "ct.copied": "Tersalin",
      "wa.msg": "Halo Fitri, saya melihat portfolio Anda dan ingin berdiskusi lebih lanjut.",
      "mail.subject": "Pesan dari {n} — via Portfolio",
      "mail.name": "Nama",
      "lang.aria": "Switch to English"
    }
  };
  var EN_DICT={};
  // English is the markup itself: capture it so switching back is exact.
  [].forEach.call(document.querySelectorAll("[data-i18n]"),function(el){EN_DICT[el.getAttribute("data-i18n")]=el.innerHTML;});
  [].forEach.call(document.querySelectorAll("[data-i18n-ph]"),function(el){EN_DICT[el.getAttribute("data-i18n-ph")]=el.getAttribute("placeholder");});
  [].forEach.call(document.querySelectorAll("[data-i18n-alt]"),function(el){EN_DICT[el.getAttribute("data-i18n-alt")]=el.getAttribute("alt");});
  var DICTS={en:EN_DICT,id:ID_DICT};
  var lang="en";
  function t(k){
    var d=DICTS[lang]; if(d&&d[k]!=null) return d[k];
    var x=EXTRA[lang]; if(x&&x[k]!=null) return x[k];
    return EN_DICT[k]!=null?EN_DICT[k]:(EXTRA.en[k]||"");
  }
  var langBtn=document.getElementById("langToggle");
  function applyLang(l){
    lang=(l==="id")?"id":"en";
    root.setAttribute("lang",lang);
    var d=DICTS[lang];
    [].forEach.call(document.querySelectorAll("[data-i18n]"),function(el){var k=el.getAttribute("data-i18n"); var v=t(k); if(v) el.innerHTML=v;});
    [].forEach.call(document.querySelectorAll("[data-i18n-ph]"),function(el){var k=el.getAttribute("data-i18n-ph"); if(d[k]!=null) el.setAttribute("placeholder",d[k]);});
    [].forEach.call(document.querySelectorAll("[data-i18n-alt]"),function(el){var k=el.getAttribute("data-i18n-alt"); if(d[k]!=null) el.setAttribute("alt",d[k]);});
    var wa="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(t("wa.msg"));
    [].forEach.call(document.querySelectorAll("[data-wa]"),function(a){a.setAttribute("href",wa);});
    if(langBtn){
      [].forEach.call(langBtn.querySelectorAll("[data-lang]"),function(s){s.classList.toggle("on",s.getAttribute("data-lang")===lang);});
      langBtn.setAttribute("aria-label",t("lang.aria"));
    }
  }
  var savedLang=null; try{savedLang=localStorage.getItem("pf-lang");}catch(e){}
  applyLang(savedLang==="id"?"id":"en");
  langBtn&&langBtn.addEventListener("click",function(){
    var next=lang==="en"?"id":"en";
    applyLang(next);
    try{localStorage.setItem("pf-lang",next);}catch(e){}
  });

  /* Theme */
  try{var s=localStorage.getItem("pf-theme"); if(s) root.setAttribute("data-theme",s);}catch(e){}
  var toggle=document.getElementById("themeToggle");
  toggle&&toggle.addEventListener("click",function(){
    var cur=root.getAttribute("data-theme");
    var isDark=cur?cur==="dark":window.matchMedia("(prefers-color-scheme:dark)").matches;
    var next=isDark?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("pf-theme",next);}catch(e){}
    fxColors();
  });

  /* Mobile menu */
  var menuBtn=document.getElementById("menuBtn"), navLinks=document.getElementById("navLinks");
  function closeMenu(){navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false");}
  menuBtn&&menuBtn.addEventListener("click",function(){var o=navLinks.classList.toggle("open"); menuBtn.setAttribute("aria-expanded",o?"true":"false");});
  navLinks&&navLinks.addEventListener("click",function(e){if(e.target.closest("a")) closeMenu();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&navLinks.classList.contains("open")){closeMenu(); menuBtn.focus();}});

  /* Header shadow */
  var header=document.querySelector(".site-header");
  function onScroll(){header.classList.toggle("scrolled", window.scrollY>8);}
  onScroll(); window.addEventListener("scroll",onScroll,{passive:true});

  /* Active nav link */
  var links=[].slice.call(document.querySelectorAll(".nav-links a")), map={};
  links.forEach(function(a){map[a.getAttribute("href").slice(1)]=a;});
  var secs=["profil","pengalaman","keahlian","pendidikan","kontak"].map(function(id){return document.getElementById(id);}).filter(Boolean);
  if("IntersectionObserver" in window){
    var navObs=new IntersectionObserver(function(ents){ents.forEach(function(en){
      if(en.isIntersecting){links.forEach(function(a){a.classList.remove("active");}); var m=map[en.target.id]; if(m) m.classList.add("active");}
    });},{rootMargin:"-45% 0px -50% 0px"});
    secs.forEach(function(x){navObs.observe(x);});
  }

  /* Count-up numbers */
  (function(){
    var nums=[].slice.call(document.querySelectorAll(".num[data-count]"));
    if(!nums.length) return;
    function fmt(v,dec){return dec?v.toFixed(dec):Math.round(v).toString();}
    function run(el){
      var target=parseFloat(el.getAttribute("data-count"))||0, dec=parseInt(el.getAttribute("data-dec")||"0",10);
      if(reduce){el.textContent=fmt(target,dec); return;}
      var start=0, dur=1300;
      function step(now){
        if(!start) start=now;
        var tt=Math.min(1,(now-start)/dur), e=1-Math.pow(1-tt,3);
        el.textContent=fmt(target*e,dec);
        if(tt<1) requestAnimationFrame(step); else el.textContent=fmt(target,dec);
      }
      requestAnimationFrame(step);
    }
    if("IntersectionObserver" in window && !reduce){
      var co=new IntersectionObserver(function(ents){ents.forEach(function(en){if(en.isIntersecting){run(en.target); co.unobserve(en.target);}});},{threshold:.4});
      nums.forEach(function(n){co.observe(n);});
    } else { nums.forEach(run); }
  })();

  /* Duplicate ticker for seamless loop */
  if(!reduce){var tk=document.getElementById("ticker"); if(tk) tk.innerHTML+=tk.innerHTML;}

  /* Copy buttons */
  document.querySelectorAll(".copy-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
      var val=btn.getAttribute("data-copy"), done=function(){btn.textContent=t("ct.copied"); setTimeout(function(){btn.textContent=t("ct.copy");},1400);};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(val).then(done).catch(function(){fb(val,done);});}else{fb(val,done);}
    });
  });
  function fb(text,cb){try{var ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); cb();}catch(e){}}

  /* Contact form: FormSubmit sends the message to Fitri, cc Zaskia */
  var form=document.getElementById("contactForm"), ok=document.getElementById("formOk");
  var fail=document.getElementById("formFail"), failMsg=document.getElementById("formFailMsg");
  var sendBtn=form&&form.querySelector('button[type="submit"]');
  function showFail(key){failMsg.setAttribute("data-i18n",key); failMsg.innerHTML=t(key); fail.hidden=false;}
  form&&form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!form.checkValidity()){form.reportValidity&&form.reportValidity(); return;}
    var g=function(id){var el=document.getElementById(id); return el&&el.value?el.value.trim():"";};
    if(g("f-honey")) return; // a bot filled the hidden field
    var n=g("f-name"), em=g("f-email"), msg=g("f-msg");
    ok.classList.remove("show"); fail.hidden=true;
    sendBtn.disabled=true; sendBtn.innerHTML=t("f.sending");
    var payload={name:n, email:em, message:msg, _replyto:em,
      _subject:t("mail.subject").replace("{n}",n),
      _cc:CONFIG.cc, _template:"table", _captcha:"false"};
    var ctrl=("AbortController" in window)?new AbortController():null, timer;
    var timeout=new Promise(function(_,rej){timer=setTimeout(function(){if(ctrl) ctrl.abort(); rej(new Error("timeout"));},15000);});
    Promise.race([fetch(CONFIG.formEndpoint,{
      method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"}, body:JSON.stringify(payload), signal:ctrl?ctrl.signal:undefined
    }), timeout]).then(function(r){
      return r.json().catch(function(){return {};}).then(function(j){return {httpOk:r.ok, j:j||{}};});
    }).then(function(res){
      var sent=res.httpOk&&(res.j.success===true||res.j.success==="true");
      if(sent){ok.classList.add("show"); form.reset(); setTimeout(function(){ok.classList.remove("show");},9000);}
      else if(/activat/i.test(res.j.message||"")){showFail("f.activate");}
      else{showFail("f.fail");}
    }).catch(function(){showFail("f.fail");})
    .then(function(){clearTimeout(timer); sendBtn.disabled=false; sendBtn.innerHTML=t("f.send");});
  });

  /* ---------- Background: drifting finance glyphs ---------- */
  var cv=document.getElementById("bgfx"), ctx=cv&&cv.getContext&&cv.getContext("2d");
  var glyphColor="rgba(14,159,110,.5)", W=0,H=0,dpr=1,parts=[],raf=0;
  var CH=["$","Rp","€","%","¥","£","∑","#","↗","0","1","9","÷"];
  function fxColors(){
    try{var cs=getComputedStyle(root); var a=(cs.getPropertyValue("--accent")||"#0E9F6E").trim(); glyphColor=a;}catch(e){}
  }
  function resize(){
    if(!cv) return;
    dpr=Math.min(window.devicePixelRatio||1,2);
    W=cv.width=Math.floor(innerWidth*dpr); H=cv.height=Math.floor(innerHeight*dpr);
    cv.style.width=innerWidth+"px"; cv.style.height=innerHeight+"px";
    var n=Math.max(8,Math.min(18,Math.round(innerWidth/90)));
    parts=[];
    for(var i=0;i<n;i++){parts.push(mk(true));}
  }
  function mk(spread){
    return {x:Math.random()*W, y:spread?Math.random()*H:H+20*dpr,
      ch:CH[(Math.random()*CH.length)|0], s:(10+Math.random()*16)*dpr,
      v:(0.12+Math.random()*0.35)*dpr, drift:(Math.random()-0.5)*0.25*dpr,
      a:0.04+Math.random()*0.08, rot:(Math.random()-0.5)*0.3};
  }
  function draw(){
    if(!ctx) return;
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<parts.length;i++){var p=parts[i];
      p.y-=p.v; p.x+=p.drift;
      if(p.y< -30*dpr){parts[i]=mk(false); continue;}
      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=glyphColor;
      ctx.font="600 "+p.s+"px 'JetBrains Mono',monospace";
      ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.fillText(p.ch,0,0); ctx.restore();
    }
    raf=requestAnimationFrame(draw);
  }
  function drawStatic(){
    if(!ctx) return; ctx.clearRect(0,0,W,H);
    for(var i=0;i<parts.length;i++){var p=parts[i];
      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=glyphColor;
      ctx.font="600 "+p.s+"px 'JetBrains Mono',monospace";
      ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillText(p.ch,0,0); ctx.restore();
    }
  }
  if(ctx){
    fxColors(); resize();
    if(reduce){drawStatic();}
    else{
      draw();
      var rt; window.addEventListener("resize",function(){clearTimeout(rt); rt=setTimeout(function(){resize();},200);});
      document.addEventListener("visibilitychange",function(){
        if(document.hidden){cancelAnimationFrame(raf);} else {cancelAnimationFrame(raf); draw();}
      });
    }
  }
})();
