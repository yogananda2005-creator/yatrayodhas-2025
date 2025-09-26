// dataset for monasteries (images + video links + history)
const monasteryData = {
  rumtek: {
    id:'rumtek',
    title:'Rumtek Monastery',
    images:[
      'img/Rumtek1.jpeg.jpg',
      'img/Rumtek2.jpeg.jpg'
    ],
    video:'https://www.youtube.com/embed/afh5du83c78',
    history: 'Rumtek Monastery (also called Dharmachakra Centre) is the seat of the Karmapa of the Karma Kagyu school and a key center for Tibetan Buddhism in Sikkim.',
    architecture:'Large stupa, ornate prayer halls, and vivid murals; modern reconstruction after mid-20th-century developments.',
    visiting:'Open daily. Best to visit early morning or late afternoon. Respect rituals and dress codes.',
    timings: [
      { source: 'MyOksha Travel Guide', hours: '7:00 AM – 7:00 PM daily' },
      { source: 'Tourism-of-India & others', hours: '6:00 AM – 6:00 PM daily' },
      { source: 'TourMyIndia', hours: '9:00 AM – 6:00 PM daily' }
    ],
    visitingHoursTable: `
      <table style="width:100%;margin-top:8px;border-collapse:collapse">
        <thead>
          <tr style="background:#f3e6d0">
            <th style="text-align:left;padding:4px 8px">Source</th>
            <th style="text-align:left;padding:4px 8px">Visiting Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:4px 8px">MyOksha Travel Guide</td>
            <td style="padding:4px 8px"><b>7:00 AM – 7:00 PM</b> daily (<a href="https://myoksha.com/rumtek-buddhist-monastery-sikkim/?utm_source=chatgpt.com" target="_blank">Myoksha Travels</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">Tourism-of-India &amp; others</td>
            <td style="padding:4px 8px"><b>6:00 AM – 6:00 PM</b> daily (<a href="https://tripnetra.com/blog/rumtek-monastery-in-sikkim?utm_source=chatgpt.com" target="_blank">Tripnetra</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">TourMyIndia</td>
            <td style="padding:4px 8px"><b>9:00 AM – 6:00 PM</b> daily (<a href="https://www.tourmyindia.com/states/sikkim/rumtek.html?utm_source=chatgpt.com" target="_blank">Tour My India</a>)</td>
          </tr>
        </tbody>
      </table>
    `
  },
  pemayangtse: {
    id:'pemayangtse',
    title:'Pemayangtse Monastery',
    images:[
      'img/Pemayangtse1.jpeg.jpg',
      'img/pemayangtse2.jpeg.jpg'
    ],
    video:'https://www.youtube.com/embed/whrbBnrIqdQ',
    history:'Founded centuries ago, Pemayangtse is among the oldest monasteries in Sikkim and has deep links to royal patronage.',
    architecture:'Tibetan-style multistoried monastery, intricate woodwork and prayer halls.',
    visiting:'Often part of western Sikkim tours; check weather for high-altitude access.',
    // timings: [
    //   { source: 'MyOksha Travel Guide', hours: '7:00 AM – 5:00 PM daily' },
    //   { source: 'Tripnetra', hours: '6:00 AM – 5:00 PM daily' }
    // ]
    timings: [
      { source: 'MyOksha Travel Guide', hours: '9:00 AM – 6:00 PM daily' },
      { source: 'Tourism-of-India & others', hours: '9:00 AM – 5:00 PM daily' },
      { source: 'TourMyIndia', hours: '7:00 AM – 6:00 PM daily' }
    ],
    visitingHoursTable: `
      <table style="width:100%;margin-top:8px;border-collapse:collapse">
        <thead>
          <tr style="background:#f3e6d0">
            <th style="text-align:left;padding:4px 8px">Source</th>
            <th style="text-align:left;padding:4px 8px">Visiting Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:4px 8px">MyOksha Travel Guide</td>
            <td style="padding:4px 8px"><b>9:00 AM – 6:00 PM</b> daily (<a href="https://myoksha.com/rumtek-buddhist-monastery-sikkim/?utm_source=chatgpt.com" target="_blank">Myoksha Travels</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">Tourism-of-India &amp; others</td>
            <td style="padding:4px 8px"><b>9:00 AM – 5:00 PM</b> daily (<a href="https://tripnetra.com/blog/rumtek-monastery-in-sikkim?utm_source=chatgpt.com" target="_blank">Tripnetra</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">TourMyIndia</td>
            <td style="padding:4px 8px"><b>7:00 AM – 6:00 PM</b> daily (<a href="https://www.tourmyindia.com/states/sikkim/rumtek.html?utm_source=chatgpt.com" target="_blank">Tour My India</a>)</td>
          </tr>
        </tbody>
      </table>
    `
  },
  enchey: {
    id:'enchey',
    title:'Enchey Monastery',
    images:[
      'img/Enchey1.jpeg.jpg',
      'img/enchey2.jpeg.jpg'
    ],
    video:'https://www.youtube.com/embed/MNZkHL2ZIyM',
    history:'A compact hilltop monastery near Gangtok, known for its annual mask dances and rituals.',
    architecture:'Painted interiors and compact prayer halls with old murals.',
    visiting:'Accessible from Gangtok; lively during festival dates with mask dances.',
    timings: [
      { source: 'MyOksha Travel Guide', hours: '7:00 AM – 7:00 PM daily' },
      { source: 'Tourism-of-India & others', hours: '6:00 AM – 6:00 PM daily' },
      { source: 'TourMyIndia', hours: '9:00 AM – 6:00 PM daily' }
    ],
    visitingHoursTable: `
      <table style="width:100%;margin-top:8px;border-collapse:collapse">
        <thead>
          <tr style="background:#f3e6d0">
            <th style="text-align:left;padding:4px 8px">Source</th>
            <th style="text-align:left;padding:4px 8px">Visiting Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:4px 8px">MyOksha Travel Guide</td>
            <td style="padding:4px 8px"><b>9:00 AM – 5:00 PM</b> daily (<a href="https://myoksha.com/rumtek-buddhist-monastery-sikkim/?utm_source=chatgpt.com" target="_blank">Myoksha Travels</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">Tourism-of-India &amp; others</td>
            <td style="padding:4px 8px"><b>6:00 AM – 4:00 PM</b> daily (<a href="https://tripnetra.com/blog/rumtek-monastery-in-sikkim?utm_source=chatgpt.com" target="_blank">Tripnetra</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">TourMyIndia</td>
            <td style="padding:4px 8px"><b>9:00 AM – 6:00 PM</b> daily (<a href="https://www.tourmyindia.com/states/sikkim/rumtek.html?utm_source=chatgpt.com" target="_blank">Tour My India</a>)</td>
          </tr>
        </tbody>
      </table>
    `
  },
  tashiding:{
    id:'tashiding',
    title:'Tashiding Monastery',
    images:[
      'img/Tashiding1.jpeg.jpg',
      'img/Tashiding2.jpeg.jpg'
    ],
    video:'https://www.youtube.com/embed/U44e9kweIJs',
    history:'An important sacred site and pilgrimage center in western Sikkim, with ancient rituals.',
    architecture:'Perched on a ridge with multiple chapels and stupas.',
    visiting:'Combine with western Sikkim sightseeing; roads may be narrow.',
    timings: [
      { source: 'MyOksha Travel Guide', hours: '7:00 AM – 7:00 PM daily' },
      { source: 'Tourism-of-India & others', hours: '6:00 AM – 6:00 PM daily' },
      { source: 'TourMyIndia', hours: '9:00 AM – 6:00 PM daily' }
    ],
    visitingHoursTable: `
      <table style="width:100%;margin-top:8px;border-collapse:collapse">
        <thead>
          <tr style="background:#f3e6d0">
            <th style="text-align:left;padding:4px 8px">Source</th>
            <th style="text-align:left;padding:4px 8px">Visiting Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:4px 8px">MyOksha Travel Guide</td>
            <td style="padding:4px 8px"><b>10:00 AM – 4:00 PM</b> daily (<a href="https://myoksha.com/rumtek-buddhist-monastery-sikkim/?utm_source=chatgpt.com" target="_blank">Myoksha Travels</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">Tourism-of-India &amp; others</td>
            <td style="padding:4px 8px"><b>7:00 AM – 6:00 PM</b> daily (<a href="https://tripnetra.com/blog/rumtek-monastery-in-sikkim?utm_source=chatgpt.com" target="_blank">Tripnetra</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">TourMyIndia</td>
            <td style="padding:4px 8px"><b>9:00 AM – 6:00 PM</b> daily (<a href="https://www.tourmyindia.com/states/sikkim/rumtek.html?utm_source=chatgpt.com" target="_blank">Tour My India</a>)</td>
          </tr>
        </tbody>
      </table>
    `
  },
  ralang:{
    id:'ralang',
    title:'Ralang Monastery',
    images:[
      'img/Raland1.jpeg.jpg',
      'img/ranlang2.jpeg.jpg'
    ],
    video:'https://www.youtube.com/embed/uMX0NxWB4YU',
    history:'Ralang is known for its scenic setting and vibrant festivals that attract pilgrims from nearby regions.',
    architecture:'Traditional multi-tiered monastery buildings with colorful prayer flags.',
    visiting:'Eastern Sikkim site, often included in regional festival visits.',
    timings: [
      { source: 'MyOksha Travel Guide', hours: '7:00 AM – 7:00 PM daily' },
      { source: 'Tourism-of-India & others', hours: '6:00 AM – 6:00 PM daily' },
      { source: 'TourMyIndia', hours: '9:00 AM – 6:00 PM daily' }
    ],
    visitingHoursTable: `
      <table style="width:100%;margin-top:8px;border-collapse:collapse">
        <thead>
          <tr style="background:#f3e6d0">
            <th style="text-align:left;padding:4px 8px">Source</th>
            <th style="text-align:left;padding:4px 8px">Visiting Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:4px 8px">MyOksha Travel Guide</td>
            <td style="padding:4px 8px"><b>8:00 AM – 5:00 PM</b> daily (<a href="https://myoksha.com/rumtek-buddhist-monastery-sikkim/?utm_source=chatgpt.com" target="_blank">Myoksha Travels</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">Tourism-of-India &amp; others</td>
            <td style="padding:4px 8px"><b>8:00 AM – 5:00 PM</b> daily (<a href="https://tripnetra.com/blog/rumtek-monastery-in-sikkim?utm_source=chatgpt.com" target="_blank">Tripnetra</a>)</td>
          </tr>
          <tr>
            <td style="padding:4px 8px">TourMyIndia</td>
            <td style="padding:4px 8px"><b>8:00 AM – 5:00 PM</b> daily (<a href="https://www.tourmyindia.com/states/sikkim/rumtek.html?utm_source=chatgpt.com" target="_blank">Tour My India</a>)</td>
          </tr>
        </tbody>
      </table>
    `
  }
};

// festival dataset (month associations - use as guide)
const festivals = [
  { name:'Losar', month:[2,3], info:'Tibetan New Year — celebrations, rituals and family gatherings. Dates follow lunar calendar (Feb/Mar typically).', tips:'Expect colorful rituals, plan travel early as dates change yearly.' },
  { name:'Pang Lhabsol', month:[9], info:'Honours Mount Kanchenjunga; includes masked dances and reverence for the mountain spirit (Sept typically).', tips:'Local masked dances are a highlight; check exact dates with local tourism.' },
  { name:'Saga Dawa', month:[5], info:'Celebrates Buddha’s birth, enlightenment and parinirvana. Major pilgrimages and acts of merit (May/June typically).', tips:'Pilgrims often engage in circumambulation and charity.' },
  { name:'Losoong', month:[12,1], info:'Sikkimese harvest festival (around Dec/Jan) with dances & community events.', tips:'Great time to see cultural performances.' }
];

// init year
document.getElementById('year').textContent = new Date().getFullYear();

// populate month select
const monthSel = document.getElementById('monthSel');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
months.forEach((m,i) => {
  const opt = document.createElement('option'); opt.value = i+1; opt.textContent = m;
  monthSel.appendChild(opt);
});
// set current month
monthSel.value = new Date().getMonth()+1;

// render festival list for selected month
function renderFestivals(){
  const m = parseInt(monthSel.value,10);
  const list = document.getElementById('festivalList');
  list.innerHTML = '';
  const found = festivals.filter(f => f.month.includes(m));
  if(found.length === 0){
    list.innerHTML = `<div style="color:var(--muted)">No major festivals typically in this month (or dates vary widely). Check other months.</div>`;
    document.getElementById('festivalDetail').textContent = 'Choose a festival to see details.';
    return;
  }
  found.forEach(f => {
    const div = document.createElement('div');
    div.style.padding='8px'; div.style.borderBottom='1px dashed #eee';
    div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><strong>${f.name}</strong><button class="small-btn" style="padding:6px 8px" onclick="showFestivalDetail('${f.name}')">Details</button></div><div style="color:var(--muted);margin-top:6px">Typical month(s): ${f.month.map(n=>months[n-1]).join(', ')}</div>`;
    list.appendChild(div);
  });
}
function showFestivalDetail(name){
  const f = festivals.find(x => x.name === name);
  if(!f) return;
  document.getElementById('festivalDetail').innerHTML = `<h4 style="margin:6px 0">${f.name}</h4><p style="color:var(--muted)">${f.info}</p><p style="color:var(--muted)"><strong>Tips:</strong> ${f.tips}</p>`;
}

// Load monastery cards into the Explore page
function buildCards(){
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';
  Object.values(monasteryData).forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${m.images[0]}" alt="${m.title}" style="width:100%;height:120px;object-fit:cover;border-radius:6px 6px 0 0" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x120?text=No+image'">
      <h4 style="margin:8px 0 4px 0">${m.title}</h4>
      <p style="color:var(--muted);font-size:13px">${m.history}</p>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="small-btn" onclick="openModal('${m.id}')">View Details</button>

        </div>
      `;
      grid.appendChild(card);
  });
}

buildCards();
renderFestivals();

// search filter (filters cards)
function filterMonasteries(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const cards = document.querySelectorAll('#cardsGrid .card');
  cards.forEach(c => {
    const title = c.getAttribute('data-title') || '';
    if(title.includes(q) || q === '') c.style.display = '';
    else c.style.display = 'none';
  });
}
function clearSearch(){
  document.getElementById('searchInput').value=''; filterMonasteries();
}

// Modal with image + video gallery
function openModal(id){
  const data = monasteryData[id];
  if(!data) return;
  const galleryImgs = data.images.map((src, idx) => `<img src="${src}" alt="${data.title} image ${idx+1}" onclick="swapBanner(this.src)" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x120?text=No+image'">`).join('');
  // Add visiting hours table if available (for Rumtek)
  const visitingHoursTable = data.visitingHoursTable ? `<h4 style="margin:12px 0 4px 0">Visiting Hours (from various sources)</h4>${data.visitingHoursTable}` : '';
  const html = `
    <div class="detail-grid">
      <div>
        <div class="detail-banner"><img id="bannerImg" src="${data.images[0]}" alt="${data.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/800x400?text=No+image'"></div>
        <div class="gallery-row">${galleryImgs}</div>

        <div style="margin-top:12px">
          <h4 style="margin:6px 0">${data.title} — History</h4>
          <p style="color:var(--muted)">${data.history}</p>
          <p style="color:var(--muted)"><strong>Architecture:</strong> ${data.architecture}</p>
          <p style="color:var(--muted)"><strong>Visiting:</strong> ${data.visiting}</p>
          ${visitingHoursTable}
        </div>
      </div>
      <aside>
        <div style="position:sticky;top:10px">
          <h4 style="margin:6px 0">Media</h4>
          <div class="video-wrap">
            <iframe width="100%" height="100%" src="${data.video}" title="${data.title} video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div style="margin-top:12px">
            <h4 style="margin:6px 0">Nearby</h4>
            <p style="color:var(--muted)">Hotels & homestays can be searched on Google Maps. Click below to search nearby.</p>
            <div style="display:flex;gap:8px;margin-top:8px">
              <button class="small-btn" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(data.title+' hotels')}', '_blank')">Find Hotels</button>
              
            </div>
          </div>
        </div>
      </aside>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = html;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
}
function swapBanner(src){ document.getElementById('bannerImg').src = src; }
function closeModal(){ const modal = document.getElementById('modal'); modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }

// Itinerary (same as before)
let itinerary = [];
function refreshItinerary(){
  const list = document.getElementById('itList');
  if(!list) return;
  if(itinerary.length === 0){
    list.innerHTML = '<div style="color:var(--muted);margin-top:12px">No items yet — add monasteries or choose a preset.</div>';
    return;
  }
  list.innerHTML = '';
  itinerary.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'it-item';
    div.innerHTML = `<div>${item}</div><div><button onclick="removeIt(${idx})" style="border:0;background:transparent;color:var(--muted);cursor:pointer">✕</button></div>`;
    list.appendChild(div);
  });
}
function addToItinerary(name){
  itinerary.push(name);
  refreshItinerary();
  alert(`Added "${name}" to itinerary`);
}
function removeIt(index){ itinerary.splice(index,1); refreshItinerary(); }
function addItineraryPreset(title, places){
  if(!confirm(`Add preset "${title}" to itinerary?`)) return;
  itinerary = itinerary.concat(places);
  refreshItinerary();
}

function clearItinerary(){ if(confirm('Clear your itinerary?')){ itinerary=[]; refreshItinerary(); } }
function printItinerary(){
  if(itinerary.length === 0){ alert('No items to print. Add monasteries to your itinerary first.'); return; }
  const printWindow = window.open('', '_blank', 'width=800,height=600');
  const html = `
    <html><head><title>Your Itinerary</title>
      <style>body{font-family:Arial;padding:20px}h1{color:${getComputedStyle(document.documentElement).getPropertyValue('--maroon') || '#6f1515'}}</style>
    </head><body>
    <h1>Sikkim Monastery Itinerary</h1>
    <p>Generated: ${new Date().toLocaleString()}</p>
    <ul>${itinerary.map(i=>`<li>${i}</li>`).join('')}</ul>
    </body></html>
  `;
  printWindow.document.write(html); printWindow.document.close(); printWindow.focus(); printWindow.print();
}

function shareItinerary(){
  if(itinerary.length === 0){ alert('No items to share.'); return; }
  const text = `Sikkim Itinerary:\n${itinerary.map((v,i)=>`${i+1}. ${v}`).join('\n')}\n\nGenerated from Sikkim Monastery Tourism prototype`;
  navigator.clipboard?.writeText(text).then(()=> alert('Itinerary copied to clipboard.'), ()=> alert('Copy failed — please copy manually:\n\n'+text));
}


// Chat (simple canned)
function toggleChat(){
  const box = document.getElementById('chatBox');
  const btn = document.getElementById('chatBtn');
  if(box.style.display === 'block'){ box.style.display = 'none'; btn.setAttribute('aria-expanded','false'); }
  else{ box.style.display = 'block'; btn.setAttribute('aria-expanded','true'); document.getElementById('chatInput').focus(); }
}
function sendChat(){
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  const text = input.value.trim();
  if(!text) return;
  const userMsg = document.createElement('div'); userMsg.style.margin='8px 0'; userMsg.innerHTML = `<div style="text-align:right;font-weight:600">${escapeHtml(text)}</div>`;
  body.appendChild(userMsg);
  input.value='';
  setTimeout(()=> {
    const reply = document.createElement('div');
    reply.style.margin='6px 0'; reply.style.color='var(--muted)';

    const q = text.toLowerCase();
    if(q.includes('best time') || q.includes('when to visit')) reply.innerHTML = 'Best time: March–May and October–November. Check festival months for special events.';
    else if(q.includes('permit') || q.includes('ilp')) reply.innerHTML = 'Indian citizens usually do not require permits for main tourist routes. Foreigners should verify ILP requirements for restricted regions.';
    else if(q.includes('3-day')) reply.innerHTML = '3-day suggestion: Day1 Rumtek & Gangtok; Day2 Enchey & Pemayangtse; Day3 Tashiding (western Sikkim) or Ralang (east).';
    else reply.innerHTML = 'Try: "best time to visit", "permit info", or "3-day itinerary".';
    body.appendChild(reply);
    body.scrollTop = body.scrollHeight;
  }, 700);
  body.scrollTop = body.scrollHeight;
}
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// accessibility: close modal with Esc
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

// helper scroll
function scrollToSection(e,id){ e && e.preventDefault(); const el=document.getElementById(id); if(!el) return; el.scrollIntoView({behavior:'smooth',block:'start'}) }

// audio for festivals (speech synthesis quick demo)
function playFestivalAudio(name){
  const f = festivals.find(x=>x.name===name);
  if(!f) return alert('Festival audio demo: '+name);
  if('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(`${f.name}. ${f.info}`);
    u.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } else {
    alert('Audio not supported in this browser.');
  }
}


// initial render
refreshItinerary();

// ...existing code...
window.addToItinerary = addToItinerary;
window.openModal = openModal;









