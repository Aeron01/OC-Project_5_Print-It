//---- Variables
let pos=0;

const banner=document.getElementById("banner");
const image=banner.querySelector(".banner-img");
const left=banner.querySelector(".arrow_left");
const right=banner.querySelector(".arrow_right");
const dots=banner.querySelector(".dots");
const checked=banner.querySelector(".dot_selected");
const tag=banner.querySelector("p");



//---- Pictures Array
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//---- Dots creation
slides.forEach((_, index) => {
    const span=document.createElement("span");
    span.onclick=()=>{
        setSlidesPosition(index)
    }
    span.classList.add("dot");
    dots.appendChild(span);
});



//---- Functions
function setSlidesPosition(newPos){
    
        
    if (newPos > slides.length-1 ){
        newPos=0;
    }
    else if (newPos < 0) {
        newPos=slides.length-1;
    }
    
    pos=newPos;

    image.setAttribute("src", slides[pos].image);
    tag.innerHTML = slides[pos].tagLine;

    banner.querySelectorAll(".dot")
    .forEach((span, index)=> {
        if (index == pos) {
            span.classList.add("dot_selected");
        } else {
            span.classList.remove("dot_selected");
        }
    });
}

//--- Listener & pos change
document.body.onload=function(){

    right.onclick=()=> {
        if (right.onclick) {
            setSlidesPosition(pos+1)            
        }
    }

    left.onclick=()=> {
        if (right.onclick) {
            setSlidesPosition(pos-1)
        }
    }

    setSlidesPosition(0);
}


