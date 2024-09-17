function sum() {
    // Получаем значения из двух разных элементов
    let x = document.getElementsByName("x")[0].value;
    let y = document.getElementsByName("y")[0].value;
    
    // Преобразуем значения в числа и суммируем их
    let z = Number(x) + Number(y);
    
    // Находим элемент для вывода результата и изменяем его содержимое
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = `${z}`;
    
    // Выводим результат в консоль
    console.log(z);
}

function min() {
    // Получаем значения из двух разных элементов
    let x = document.getElementsByName("x")[0].value;
    let y = document.getElementsByName("y")[0].value;
    
    // Преобразуем значения в числа и суммируем их
    let z = Number(x) - Number(y);
    
    // Находим элемент для вывода результата и изменяем его содержимое
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = `${z}`;
    
    // Выводим результат в консоль
    console.log(z);
}

function multiplication() {
    // Получаем значения из двух разных элементов
    let x = document.getElementsByName("x")[0].value;
    let y = document.getElementsByName("y")[0].value;
    
    // Преобразуем значения в числа и суммируем их
    let z = Number(x) * Number(y);
    
    // Находим элемент для вывода результата и изменяем его содержимое
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = `${z}`;
    
    // Выводим результат в консоль
    console.log(z);
}
function division() {
    let x = document.getElementsByName("x")[0].value;
    let y = document.getElementsByName("y")[0].value;
    let z 
    
    if(x == 0) {
        z = "Вселенной нужна помощь"
    } else {
     z = Number(x) / Number(y);
    }
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = `${z}`;
    console.log(z);
}


let country = document.querySelector("#country");

country.addEventListener("input", countryPhone);
function countryPhone() {
    let phone = document.getElementById("phone");
    let countryValue = country.value;
    if( countryValue = "uz") {
        phone.value = "+998";
    } else if (countryValue = "ru") {
        phone.value = "+7";
    } else if (countryValue = "kz") {
        phone.value = "+77";
    }
}





let checkbox = document.getElementById("check");

checkbox.addEventListener ("input", activeBtn); 

function activeBtn() {
    let checkboxValue = checkbox.checked;
    let btn = document.getElementById("btn");
    if(checkboxValue) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}








let courseSelect = document.querySelector("#courseSelect")
let range = document.getElementById("rangeValue")

courseSelect.addEventListener ("input",course)
range.addEventListener ("input",course)

function course (){
    let courseSelectValue = courseSelect.value
    let FRONTEND_PRICE=15000000
    let PYTHON_PRICE=13000000
    let DA_PRICE=14000000
    let basicPrice

    if(courseSelectValue == "front" ){
        basicPrice=FRONTEND_PRICE
    } else if (courseSelectValue="py"){ 
        basicPrice=PYTHON_PRICE    
    } else if (courseSelectValue="DA"){
        basicPrice=DA_PRICE
    }
    let rangeValue = range.value
    let rangeSale = document.getElementById("rangeSale")
    rangeSale.innerHTML = rangeValue + "%"
    let sum = basicPrice / 100 * (100-rangeValue)
    let coursePrice = document.getElementById("coursePrice");
    coursePrice.value = sum
}
