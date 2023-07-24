// Запросы, XMLHttpRequest, AJAX. Домашняя работа 
 
/* Задание №1.1.  
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'. 
Используйте fetch или ajax. Отобразите на странице имена персонажей из  
Рика и Морти в list.  
let block1 = $('.block1'); 
let list = $('.list'); 
(Вы можете стилизовать страницу по желанию.) 
*/ 
 
let list = document.querySelector(".list"); 
let list2 = document.querySelector(".list2"); 
let Api1 = "https://rickandmortyapi.com/api/character"; 
let obj = {}; 
function cile() { 
    fetch(Api1) 
        .then((data) => data.json()) 
        .then((res) => 
            res.results.forEach( 
                (item) => 
                    (list.innerHTML += ` ${item.name} <img src = "${item.image}" style="width:30px";><br>`) 
                // console.log((obj = item.image)) 
            ) 
        ) 
        .catch((err) => console.log(err)); 
} 
cile(); 
 
/* Задание №1.2.  
Рядом с именами отобразите все изображенияgrg  
которые вы получили вместе с остальными данными из сервера. 
*/
 
async function getRequestImg() { 
    try { 
        let response = await fetch(Api1); 
        let data = await response.json(); 
        let a = data.results.map((item) => item.image); 
        let b = data.results.map((item) => item.name); 
 
        for (let i = 0; i < a.length; i++) { 
            let obj2 = { 
                title: a[i], 
                name: b[i], 
            }; 
            fetch(" http://localhost:8000/characters", { 
                method: "POST", 
                body: JSON.stringify(obj2), 
                headers: { 
                    "Content-Type": "application/json;charset=utf-8", 
                }, 
            }); 
            list2.innerHTML += `<p>${obj2.name}</p> <img src = "${obj2.title}" style="width:30px">`; 
            console.log("s"); 
        } 
    } catch (error) { 
        console.error("Произошла ошибка при получении данных:", error); 
    } 
}
                
                
/* Задание №1.3.  
Создайте файл db.json и запустите локальный сервер. 
Данные которые вы получили во втором задании, сохраните  
в локальном сервере db.json, в массиве под  
названием "characters". 
Подсказка: как только ваши данные сохранились в db.json 
функцию, которая отправляет запрос на db.json стоит закомментировать. 
*/ 
 
/* Задание №1.4.  
А теперь сделайте запрос на локальный сервер. 
Во второй блок с классом 'block-2', отобразите имена, которые  
вы получили (стянули) с db.json. 
 
 
/* Задание №1.5.  
К именам добавьте картинки персонажей. 
В итоге у вас должна получиться точная копия первых двух тасков. 
Отличие которых лишь в базе данных. 
*/