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

Validation (); 


