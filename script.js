let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
let charset = "cdibfiçfecj453486359rvfvgt@#$3vf959*ee1e1f0efvtyihtvf";
let limpa = "";

sizePassword.innerHTML = sliderElement.value;     // innerhtml do valor do slide //
slider.oninput = function(){           // ao mexer no input, igual on click ...//
    sizePassword.innerHTML = this.value;             //this value para ser o valor mostrado//
}

function gerador(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
    pass += charset.charAt(Math.floor(Math.random() * n));
    }

containerPassword.classList.remove("hide"); // classe separada para remover //
password.innerHTML = pass;
}

