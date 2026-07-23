let generatedCode = "";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

const swiper = new Swiper(".mySwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {

        delay: 5000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

        navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },

});

VanillaTilt.init(

document.querySelectorAll(".service-card"),

{

max:15,

speed:400,

glare:true,

"max-glare":0.2,

}

);

new Typed("#typing",{

strings:[

"Repair Laptop.",

"Upgrade SSD.",

"Install Windows.",

"AI Diagnosis."

],

typeSpeed:60,

backSpeed:40,

loop:true

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            faq.querySelector(".faq-answer").style.maxHeight = null;

            faq.querySelector("i").classList.replace("fa-minus", "fa-plus");

        });

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

            question.querySelector("i").classList.replace("fa-plus", "fa-minus");

        }

    });

});

const bookingForm = document.getElementById("bookingForm");

const summary = document.getElementById("summaryContent");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const serviceInput = document.getElementById("service");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const noteInput = document.getElementById("note");

const servicePrices = {

    "Install Windows":150000,

    "Laptop Lemot":100000,

    "Upgrade SSD":350000,

    "Upgrade RAM":250000,

    "Keyboard Rusak":200000,

    "LCD Pecah":800000

};

const serviceSelect = document.getElementById("service");

const estimatedPrice = document.getElementById("estimatedPrice");

serviceSelect.addEventListener("change",()=>{

    const price = servicePrices[serviceSelect.value] || 0;

    estimatedPrice.innerText =

    "Rp " + price.toLocaleString("id-ID");

});


const successModal = document.getElementById("successModal");

const modalBookingCode = document.getElementById("modalBookingCode");

const trackNow = document.getElementById("trackNow");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    console.log("BOOKING DIKLIK");

    // Reset Error
document.querySelectorAll(".error").forEach(el=>el.remove());

document.querySelectorAll(".input-error").forEach(el=>{
    el.classList.remove("input-error");
});

let valid = true;

function showError(input,message){

    valid = false;

    input.classList.add("input-error");

    const error = document.createElement("small");

    error.className = "error";

    error.innerText = message;

    input.parentElement.appendChild(error);

}
if(nameInput.value.trim().length < 3){

    showError(nameInput,"Nama minimal 3 karakter");

}

if(serviceInput.value===""){

    showError(serviceInput,"Silakan pilih layanan");

}

if(phoneInput.value.trim().length < 10){

    showError(phoneInput,"Nomor WhatsApp minimal 10 digit");

}

if(!/^[0-9]+$/.test(phoneInput.value)){

    showError(phoneInput,"Nomor hanya boleh angka");

}

const today = new Date().toISOString().split("T")[0];

if(dateInput.value < today){

    showError(dateInput,"Tanggal tidak boleh sebelum hari ini");

}

if(!valid){

    return;

}

const randomNumber = Math.floor(10000 + Math.random() * 90000);

generatedCode = "LPT" + randomNumber;

    summary.innerHTML = `

    <div class="summary-item">

    <strong>👤 Nama</strong>

    <p>${nameInput.value}</p>

    </div>

    <div class="summary-item">

    <strong>📱 WhatsApp</strong>

    <p>${phoneInput.value}</p>

    </div>

    <div class="summary-item">

    <strong>💻 Service</strong>

    <p>${serviceInput.value}</p>

    </div>

    <div class="summary-item">

    <strong>📅 Tanggal</strong>

    <p>${dateInput.value}</p>

    </div>

    <div class="summary-item">

    <strong>⏰ Jam</strong>

    <p>${timeInput.value}</p>

    </div>

    <div class="summary-item">

    <strong>📝 Catatan</strong>

    <p>${noteInput.value || "-"}</p>

    </div>

    `;

    bookingCode.innerHTML = generatedCode;

    modalBookingCode.innerHTML = generatedCode;

    successModal.classList.add("active");

});


dateInput.min = new Date().toISOString().split("T")[0];

/* ==========================
        AI DIAGNOSIS
========================== */

const aiInput = document.getElementById("aiInput");
const askAI = document.getElementById("askAI");
const aiResult = document.getElementById("aiResult");

askAI.addEventListener("click", () => {

    const text = aiInput.value.toLowerCase().trim();

    if(text === ""){

        aiResult.innerHTML = `
            <strong>⚠️ Silakan masukkan masalah laptop Anda.</strong>
        `;

        return;
    }

    let result = "";

    if(text.includes("lemot")){

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <strong>Kemungkinan Penyebab</strong>

            <ul>
                <li>RAM hampir penuh</li>
                <li>SSD hampir penuh</li>
                <li>Terlalu banyak aplikasi startup</li>
            </ul>

            <strong>Estimasi Biaya</strong>

            <p>Rp100.000 - Rp350.000</p>

            <strong>Rekomendasi</strong>

            <p>Upgrade SSD atau Install Windows.</p>
        `;
    }

    else if(text.includes("panas")){

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <strong>Kemungkinan Penyebab</strong>

            <ul>
                <li>Kipas kotor</li>
                <li>Thermal paste kering</li>
            </ul>

            <strong>Estimasi Biaya</strong>

            <p>Rp100.000 - Rp200.000</p>

            <strong>Rekomendasi</strong>

            <p>Lakukan Cleaning Service dan ganti Thermal Paste.</p>
        `;
    }

    else if(text.includes("keyboard")){

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <strong>Kemungkinan Penyebab</strong>

            <ul>
                <li>Keyboard rusak</li>
                <li>Flexible keyboard putus</li>
            </ul>

            <strong>Estimasi Biaya</strong>

            <p>Rp200.000 - Rp350.000</p>

            <strong>Rekomendasi</strong>

            <p>Perlu penggantian keyboard.</p>
        `;
    }

    else if(text.includes("lcd")){

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <strong>Kemungkinan Penyebab</strong>

            <ul>
                <li>LCD pecah</li>
                <li>Kabel fleksibel rusak</li>
            </ul>

            <strong>Estimasi Biaya</strong>

            <p>Rp600.000 - Rp1.200.000</p>

            <strong>Rekomendasi</strong>

            <p>Perlu penggantian LCD.</p>
        `;
    }

    else if(text.includes("baterai")){

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <strong>Kemungkinan Penyebab</strong>

            <ul>
                <li>Baterai sudah drop</li>
                <li>Cycle baterai tinggi</li>
            </ul>

            <strong>Estimasi Biaya</strong>

            <p>Rp250.000 - Rp500.000</p>

            <strong>Rekomendasi</strong>

            <p>Disarankan mengganti baterai.</p>
        `;
    }

    else{

        result = `
            <h4>🤖 AI Diagnosis</h4>

            <p>
                Maaf, AI belum mengenali masalah tersebut.
                Silakan datang ke Laptify untuk pemeriksaan lebih lanjut.
            </p>
        `;
    }

    aiResult.innerHTML = result;

});

aiInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        askAI.click();

    }

});

const trackingInput = document.getElementById("trackingInput");

const trackingBtn = document.getElementById("trackingBtn");

const trackingResult = document.getElementById("trackingResult");

if(trackingBtn){

trackingBtn.addEventListener("click",()=>{

const code = trackingInput.value.trim().toUpperCase();

if(code===""){

trackingResult.innerHTML="⚠️ Masukkan kode booking.";

return;

}

if(code === generatedCode){

trackingResult.innerHTML = `

<h3>Status Booking</h3>

<p>🎫 <strong>${generatedCode}</strong></p>

<p><span class="status">✔ Booking Berhasil</span></p>

<p><span class="status">✔ Laptop Diterima</span></p>

<p>🔧 Sedang diperiksa teknisi.</p>

`;

}
else{

trackingResult.innerHTML = `

❌ Kode booking tidak ditemukan.

`;

}

});

}

trackNow.addEventListener("click", () => {

    successModal.classList.remove("active");

    trackingInput.value = generatedCode;

    document.querySelector(".tracking").scrollIntoView({
        behavior: "smooth"
    });

    trackingBtn.click();

});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});