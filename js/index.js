const openClose = document.getElementById('openClose')
const customerContainer = document.getElementById("customerContainer")
const down = document.getElementById("down")
const header = document.getElementById("header")
const btn = document.querySelectorAll('#hostingBtn button')
const hostingBtn = document.getElementById("hostingBtn")
const hostingBorder = document.getElementById("hostingBorder")
const hostingBorder1 = document.getElementById("hostingBorder1")
const hostingBorder2 = document.getElementById("hostingBorder2")
const priceValue = document.getElementById("priceValue")
const priceValue1 = document.getElementById("priceValue1")
const priceValue2 = document.getElementById("priceValue2")
const priceMonth = document.getElementById("priceMonth")
const priceMonth1 = document.getElementById("priceMonth1")
const priceMonth2 = document.getElementById("priceMonth2")

function openDiv() { openClose.classList.toggle("active-sidebar") }

const customerData = [
    {
        id: 1,
        name: "Sabina G.",
        position: "Designer",
        situation: true,
        percent: 100
    },
    {
        id: 2,
        name: "Fuad M.",
        position: "Frontend Developer",
        situation: false,
        percent: 90
    },
    {
        id: 3,
        name: "Ahmad R.",
        position: "Backend Developer",
        situation: false,
        percent: 65
    }
]

const showCustomer = () => {
    customerData.map((item) => (
        customerContainer.innerHTML += `
                <div class="flex flex-col bg-white justify-between p-6 items-center h-[280px] w-[33%] rounded-lg shadow-[0_4px_8px_5px_rgba(0,0,0,0.1)]">
                    <p class="text-[14px] text-[#6b7280] capitalize font-[500]">${item.situation ? 'tamamlandı' : 'icradadır'}</p>
                    <div class="rounded-[50%] text[19px] w-[100px] h-[100px] my-[10px] text-[19px] font-semibold flex items-center justify-center">
                        ${item.percent == 100 ? '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#22BFA5" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">100%</text></svg>' : item.percent == 90 ? '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#fc5185" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="21.99114857512855" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">90%</text></svg>' : '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#fc5185" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="76.96902001294993" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">65%</text></svg>'}
                    </div>
                    <p class="text-[20px] text-[#1f2937] font-[700]">${item.name}</p>
                    <p class="text-[14px] text-[#9ca3af] font-semibold">${item.position}</p>
                </div>`
    ))
}

showCustomer()

function toDown() {
    scrollTo({
        top: down.offsetTop - header.scrollHeight,
        behavior: "smooth"
    })
}


function changeBtnBg(x, y) {
    btn.forEach(item => {
        item.style.background = 'white'
        item.style.color = '#94a3c8'
        item.style.fontWeight = 'normal'
    })
    x.style.background = '#a271f2'
    x.style.color = 'white'
    x.style.fontWeight = '500'
    priceValue.innerHTML = `₼${5 * y}`
    priceValue1.innerHTML = `₼${10 * y}`
    priceValue2.innerHTML = `₼${20 * y}`
    priceMonth.innerHTML = `/${y == 1 ? 'ay' : 'il'}`
    priceMonth1.innerHTML = `/${y == 1 ? 'ay' : 'il'}`
    priceMonth2.innerHTML = `/${y == 1 ? 'ay' : 'il'}`
}

function changeBorder(x) {
    hostingBorder.style.borderColor = '#d1d4dc'
    hostingBorder1.style.borderColor = '#d1d4dc'
    hostingBorder2.style.borderColor = '#d1d4dc'
    hostingBorder.style.boxShadow = 'none'
    hostingBorder1.style.boxShadow = 'none'
    hostingBorder2.style.boxShadow = 'none'
    x.style.boxShadow = '0 5px 15px 0 #c58bffef'
    x.style.borderColor = '#a271f2'
}

let swiper = new Swiper(".slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});     