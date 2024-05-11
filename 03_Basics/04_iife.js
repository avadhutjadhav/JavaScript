//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();
// chai()

// ()() = Reason for IIFE is to avoide global scope pollution

//Arrow funtion
((name)=>{
    //unnamed IIFE
    console.log(`DB connected ${name}`);
})("avadhut")