
let pt_flg = false;
let opr_flg = false;
let ans = 0;
let x = 0;
let y = 0;
let operator = ""

let opr_btns = document.querySelectorAll('button.opr')
opr_btns.forEach(opr_btn => opr_btn.addEventListener('click',operand))

let num_btns = document.querySelectorAll('button.num')
num_btns.forEach(num_btn => num_btn.addEventListener('click',display_num))

let clr_btn = document.getElementById('clr')
clr_btn.addEventListener('click',clear)

let bks_btn = document.getElementById('bks')
bks_btn.addEventListener('click',backspace)

let sgn_btn = document.getElementById('sgn')
sgn_btn.addEventListener('click',sign)

let per_btn = document.getElementById('per')
per_btn.addEventListener('click',percent)

let eql_btn = document.getElementById('eql')
eql_btn.addEventListener('click',operate)




clear()


function display_num(e){
    if (disp.textContent == "0" || opr_flg == true){
        disp.textContent = ""
        opr_flg = false
    }
    disp.textContent = disp.textContent + e.target.id
}

function operand(e){

    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
    e.target.classList.add('opr_hvr')
    opr_flg = true
    operator = e.target.id
    x = Number(disp.textContent);
    
}


function clear(){
    disp.textContent = "0";
    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
}

function backspace(){
    disp.textContent = disp.textContent.slice(0,-1)
    if (disp.textContent == "" || disp.textContent == "-"){clear()}
    
}

function sign(){
    let x = Number(disp.textContent)
    disp.textContent = x*-1
}

function percent(){
    let x = Number(disp.textContent)
    disp.textContent = x/100
}

function operate(){
    
    y  = Number(disp.textContent)
    if(operator == "add"){
        ans = Number(x) + Number(y)
    }
    if(operator == "mul"){
        ans = Number(x) * Number(y)
    }
    if(operator == "sub"){
        ans = Number(x) - Number(y)
    }
    if(operator == "div"){
        ans = Number(x) / Number(y)
    }

    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
    disp.textContent = ans
    operator = "done"
    
}









