
let pt_flg = false;
let opr_flg = false;
let per_flg = false;
let per_cntr = 0;
let ans = 0;
let x = 0;
let y = 0;
let p = 0;
let operator = ""

let opr_btns = document.querySelectorAll('button.opr')
opr_btns.forEach(opr_btn => opr_btn.addEventListener('mousedown',operand))

let num_btns = document.querySelectorAll('button.num')
num_btns.forEach(num_btn => num_btn.addEventListener('mousedown',display_num))

let clr_btn = document.getElementById('clr')
clr_btn.addEventListener('mousedown',clear)

let bks_btn = document.getElementById('bks')
bks_btn.addEventListener('mousedown',backspace)

let sgn_btn = document.getElementById('sgn')
sgn_btn.addEventListener('mousedown',sign)

let per_btn = document.getElementById('per')
per_btn.addEventListener('mousedown',percent)

let eql_btn = document.getElementById('eql')
eql_btn.addEventListener('mousedown',operate)

let dec_btn = document.getElementById('dec')
dec_btn.removeEventListener('mousedown',display_num)
dec_btn.addEventListener('mousedown',decimal)


clear()


function display_num(e){
    disp.style.cssText = "font-size: 4vh;"
    if (disp.textContent == "0" || opr_flg == true || per_flg == true){
        disp.textContent = ""
        opr_flg = false
        pt_flg = false
        per_flg = false
    }
    
    disp.textContent = disp.textContent + e.target.id
    trim_output()
}

function operand(e){

    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
    e.target.classList.add('opr_hvr')
    opr_flg = true
    operator = e.target.id
    x = Number(disp.textContent);
    
}


function clear(){
    disp.style.cssText = "font-size: 4vh;"
    disp.textContent = "0";
    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
    pt_flg = false
}

function backspace(){
    if(disp.textContent[disp.textContent.length-1] == "."){pt_flg = false}
    disp.textContent = disp.textContent.slice(0,-1)
    if (disp.textContent == "" || disp.textContent == "-"){clear()}
    
}

function sign(){
    let x = Number(disp.textContent)
    disp.textContent = x*-1
}

function percent(){
    x = disp.textContent
    per_flg = true
    if(per_flg == true){
        operate()
    }
   

}

function decimal(){
    if(pt_flg == false){
        disp.textContent = disp.textContent + '.'
        pt_flg = true;
    }
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

    if(per_flg == true){ans = ans = Number(x) / Number(100)}

    opr_btns.forEach(opr_btn => opr_btn.classList.remove('opr_hvr'))
    //trim_output()
    disp.textContent = ans
    if (String(ans).length>=13){
        console.log('here')
        
        disp.style.cssText = "font-size: 3vh;"
        ans = ans.toExponential(12)
        disp.textContent = ans
    }
    
    
    operator = "done"
    
}

function trim_output(){
    if (String(disp.textContent).length >= 14){
        disp.textContent = disp.textContent.slice(0,13)
    }
}










