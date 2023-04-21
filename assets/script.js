document.body.onload=function(){
    //let nbr=4;
    let pos=0;
    //let i= pos

    banner=document.getElementById("banner")
    image=banner.querySelector(".banner-img")
    left=banner.querySelector(".arrow_left")
    right=banner.querySelector(".arrow_right")
    dot=banner.querySelector(".dots")
    checked=banner.querySelector(".dot_selected")

    //span=document.createElement("span" + "src="[image]);
    //alt=
    
    

    function sliders(){
        for (i=0; i < slides.length; i++) {
            
            if (pos > slides.length){
                pos=0
            }
            else if (pos < 0) {
            pos=slides.length
            }
        }
        console.log(pos)
    }

    right.onclick=()=> {
        if (right.onclick) {
        pos=pos+1
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
        pos=pos-1
            sliders()
            /*if (pos < 0) {
                pos=slides.length
            }*/
        }
        //console.log(pos)
    }

}



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]