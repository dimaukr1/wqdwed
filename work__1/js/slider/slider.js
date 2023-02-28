const Img = document.querySelectorAll(".imgas");
const IMG = document.querySelector(".imgas")
const lineslider = document.querySelector(".body__header__grid__lineslider")
const block = document.querySelectorAll(".body__header__grid__lineslider__block")
const Back = document.querySelector(".slider__back")
const next = document.querySelector(".slider__next")

let countslider = [0, 1, 2];
let img = Img.length;
let Width = 0;
let widthim = 0;
let ciclecount = 0;
let a = 1;
console.log(Width)
lineslider.style.width = 3381;
console.log(img, IMG.clientWidth *  Img.length)



for(let i = 0; i < Img.length; i++)
{
    if(Img[i].clientWidth < 161)
    {
        for(let y = 0; y < Img.length; y++)
        {
    block[1].classList.add("Active")
        }
    }
   

}
function back(element) {
    element.addEventListener('click', () => {
    if(Width != 0)
    {
        cicle();
    Width = Width - widthim;}
    lineslider.style.left = -Width;
    
    console.log("Hello world", Width);
    console.log(a);
    
    a++;

 })
}
function cicle()
{
for(let i = ciclecount; i < countslider.length + ciclecount; i++)
{
   console.log(i)
   widthim = widthim + Img[i].clientWidth;
}
ciclecount += 3;
widthim = 0;
}
console.log(widthim)

function Next(nexter)
{
    nexter.addEventListener('click', () => {
        if(Width + widthim < lineslider.clientWidth)
        {
            for(let i = ciclecount; i < countslider.length + ciclecount; i++)
            {
                
              
               console.log(i)
               widthim = widthim + Img[i].clientWidth;
            }
            ciclecount = ciclecount + 3;   
        }
       
        Width = Width + widthim;
        lineslider.style.left = -Width;
        console.log("Hello world", Width);
        console.log(a);
        widthim = 0;
        a++;
    })
}
    back(Back);
    Next(next);
    