//---- Variables
let pos=0;

banner=document.getElementById("banner");
image=banner.querySelector(".banner-img");
left=banner.querySelector(".arrow_left");
right=banner.querySelector(".arrow_right");
dots=banner.querySelector(".dots");
checked=banner.querySelector(".dot_selected");
tag=banner.querySelector("p");
let span=document.createElement("span");
span.classList.add("dot");


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
slides.forEach(element => {
   banner.querySelector("div").appendChild(span);
});

//for (i = 0; i < slides.length; i++)

//---- Fucntions
function sliders(){
    for (i = 0; i < slides.length; i++) {
        
        if (pos > slides.length-1 ){
            pos=0;
        }
        else if (pos < 0) {
            pos=slides.length-1;
        }
    }
    console.log(pos);
    console.log(slides[pos].image);
    console.log(tag);
    console.log(slides[pos].tagLine);

    image.setAttribute("src", slides[pos].image);
    tag.innerHTML = slides[pos].tagLine;
}

//--- Listener & pos change
document.body.onload=function(){

    right.onclick=()=> {
        if (right.onclick) {
        pos=pos+1;
        
            sliders()
            /*for (i=0; i < slides.length; i++) {
                if(pos > slides.length) {
                    pos=0
                }
            }*/
        }
        //console.log(pos)
    }

    left.onclick=()=> {
        if (right.onclick) {
        pos=pos-1;
        
            sliders()
            /*if (pos < 0) {
                pos=slides.length
            }*/
        }
        //console.log(pos)
    }

}


