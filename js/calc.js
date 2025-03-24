const sehife = document.getElementById("sehife")
const azn = document.getElementById("azn")
const sehifeInput = document.getElementById("sehifeInput")
const murekkebInput = document.getElementById("murekkebInput")
const rangeContainer = document.getElementById("rangeContainer")
const checkContainer = document.getElementById("checkContainer")
const eccomerceContainer = document.getElementById("eccomerceContainer")
const rangeSum = document.getElementById("rangeSum")
const checkSum = document.getElementById("checkSum")
const eccomerceSum = document.getElementById("eccomerceSum")
const sehifePrice = document.getElementById("sehifePrice")
const elaveler = document.getElementById("elaveler")
const seoXidmeti = document.getElementById("seoXidmeti")
const eTicaret = document.getElementById("eTicaret")
const logoDizayn = document.getElementById("logoDizayn")
const input = document.getElementById("input")
const manat = document.getElementById("manat")
const toplamQiymet = document.getElementById("toplamQiymet")

let totalRange = 0;
let totalCheck = 0
let totalEccomerce = 0
let totalLogoPrice = 0
let totalPageCount = 0

const result = () => {
        let totalPrice = totalRange + totalCheck + totalEccomerce + totalLogoPrice + totalPageCount
        toplamQiymet.innerHTML = totalPrice > 450 ? totalPrice : 450
};

const changeValue = () => {
        let sValue = +sehifeInput.value * 100
        let aValue = +murekkebInput.value
        totalPageCount = aValue * sValue
        sehife.innerHTML = sehifeInput.value
        sehifePrice.innerHTML = totalPageCount
        azn.innerHTML = totalPageCount
        result()
};
changeValue();


const showRanges = () => {
        rangeData.forEach((item) => {
                rangeContainer.innerHTML += `
                        <div class="">
                                <label onclick="toggle('d${item.id}', 'x${item.id}')" for="inp${item.id}" class="cursor-pointer flex items-center justify-between">${item.name}
                                        <div id="d${item.id}" class="min-w-[50px] transition-all duration-200 h-[25px] rounded-[15px] bg-[#e5e7eb] relative flex items-center">
                                                <div id="x${item.id}" class="w-[20px] transition-all duration-200 absolute h-[20px] left-[2px] bg-white rounded-[50%]"></div>
                                        </div>
                                </label>
                                <input id="inp${item.id}" type='checkbox' class="hidden" onchange="changeRange(this, ${item.price})" />
                        </div>`
        });

        checkData.forEach((item) => {
                checkContainer.innerHTML += `
                                <div class="flex items-center gap-1">   
                                        <input id="${item.id}" class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-300 
                                                checked:hover:shadow-[0_0_1px_5px_#a271f250] active:scale-95 
                                                checked:border-[#A271F2] checked:bg-[#a271f2] 
                                                relative before:absolute before:left-1/2 before:top-[40%] before:-translate-x-1/2 before:-translate-y-1/2 
                                                before:text-white before:text-sm before:font-bold before:content-['✓'] before:opacity-0 
                                                checked:before:opacity-100" onchange="changeCheck(this, ${item.price})" type='checkbox' />
                                        <label for="${item.id}" class="cursor-pointer">${item.name}</label>
                                </div>`
        });

        eccomerceData.forEach((item) => {
                eccomerceContainer.innerHTML += `
                        <div class="">
                                <label onclick="toggle('d${item.id}', 'x${item.id}')" for="inp${item.id}" class="cursor-pointer items-center flex justify-between">${item.name}
                                        <div id="d${item.id}" class="min-w-[50px] transition-all duration-200 h-[25px] rounded-[15px] bg-[#e5e7eb] relative flex items-center">
                                                <div id="x${item.id}" class="w-[20px] transition-all duration-200 absolute h-[20px] left-[2px] bg-white rounded-[50%]"></div>
                                        </div>
                                </label>
                                <input id="inp${item.id}" type='checkbox' class="hidden" onchange="changeEccomerce(this, ${item.price})" />
                        </div>`
        });

        rangeSum.innerHTML = totalRange;
        checkSum.innerHTML = totalCheck;
        eccomerceSum.innerHTML = totalEccomerce
};

function toggle(divId, childId){
        const myId = document.getElementById(`${childId}`)
        const parId = document.getElementById(`${divId}`)
        myId.classList.toggle('left2')
        parId.classList.toggle('bgPurp')
};

const changeRange = (checkbox, price) => {
        if (checkbox.checked) {
                totalRange += price;
        } else {
                totalRange -= price;
        }

        rangeSum.innerHTML = totalRange;
        elaveler.innerHTML = totalRange;
        result();
};

const changeCheck = (checkbox, price) => {

        if (checkbox.checked) {
                totalCheck += price;
        } else {
                totalCheck -= price;
        }

        checkSum.innerHTML = totalCheck;
        seoXidmeti.innerHTML = totalCheck;
        result();
};

const changeEccomerce = (checkbox, price) => {

        if (checkbox.checked) {
                totalEccomerce += price;
        } else {
                totalEccomerce -= price;
        }

        eccomerceSum.innerHTML = totalEccomerce;
        eTicaret.innerHTML = totalEccomerce;
        result();
};

const logoPrice = () => {
        totalLogoPrice = input.value * 100;
        manat.innerHTML = totalLogoPrice;
        logoDizayn.innerHTML = totalLogoPrice;
        result();
};

showRanges();