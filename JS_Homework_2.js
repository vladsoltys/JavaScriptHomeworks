// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

function Validation (text) {
    if (typeof text == "string") {
        if (text.length < 5){
            console.log("Too little symbols. Should be at least 5!!!")
        } else if (text.length > 64){
            console.log("Too much symbols. Should be max 64!!!")
        } else if (!text.includes('@')) {
            console.log("String must include at least 1 number, 1 capital letter and '@' !")
        } else if (!text.match(/[0-9]/)) {
            console.log("String must include at least 1 number, 1 capital letter and '@' !")
        } else if (!text.match(/[A-Z]/)) {
            console.log("String must include at least 1 number, 1 capital letter and '@' !")
        } else {
            console.log("Validation value = ", text)
        }
    } else if (text == null) {
        console.log("String is empty! Please, enter values!")
    } else {
        console.log("Value isn't STRING")
    } 
};

Validation ("A@12345"); 


