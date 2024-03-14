let modeBtn = document.querySelector("#mode");
let currmode = "lignt-mode";
let body = document.querySelector("body")



modeBtn.addEventListener("click", () => {

    if(currmode === "lignt-mode"){
        currmode = "dark-mode";
       body.classList.add("dark-mode");

    }else{
        currmode = "lignt-mode";
        body.classList.add("light-mode");
       

    }
console.log(currmode);
})