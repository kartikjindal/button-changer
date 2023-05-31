
console.log('kartik');
let btn = document.getElementsByClassName('btn');
const func = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return `rgb(${a},${b},${c})`;
}
console.log(btn[0]);
btn[0].addEventListener('click',() => {
    const str = func();
    console.log(str);
    document.body.style.backgroundColor= str;
    let f=(str)=>{ 
        return `<span>current colour is ${str}</span>`;
    }
    console.log(document.body.children[0].children[0].innerHTML=f(str));
});

// btn[0].innerHTML=`<div> hi </div>`
// btn.addEventListener('click', ()=>{ console.log('hello')} )
