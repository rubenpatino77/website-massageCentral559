
var checkbox = document.getElementById("menu-toggle");
window.addEventListener('click', function(e){
    if (!document.getElementById('myLinks').contains(e.target) 
            && !document.getElementById('hamburger-menu').contains(e.target)){
        checkbox.checked = false;
    } 
})

window.onload = function() {
  if(window.location.href.indexOf("#contact") > -1) {
        setTimeout(function () { document.getElementById("contact").scrollIntoView(true); }, 500);
    }
};

const parallax = document.getElementById("introduction");

mobile();
function mobile(){

    const mql = window.matchMedia('screen and (max-width: 850px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){
        	parallax.style.backgroundPosition = "center center";
            let offset = window.pageYOffset;
			parallax.style.backgroundPositionY = offset + "px";

			window.addEventListener("scroll", function(){
    			let offsetAgain = window.pageYOffset;

    			parallax.style.backgroundPositionY = offsetAgain * 0.3 + "px";
			})
        }
    }
}
 
tablet();
function tablet(){

    const mql = window.matchMedia('screen and (min-width: 851px) and (max-width: 1199px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){
        	parallax.style.backgroundPosition = "top left";
            let offset = window.pageYOffset;
			parallax.style.backgroundPositionY = offset + "px";

			window.addEventListener("scroll", function(){
    			let offsetAgain = window.pageYOffset;

    			parallax.style.backgroundPositionY = offsetAgain * 0.3 + "px";
			})
        }
    }
}

desktop();
function desktop(){

    const mql = window.matchMedia('screen and (min-width: 1200px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){
        	parallax.style.backgroundPosition = "top left";
            let offset = window.pageYOffset;
			parallax.style.backgroundPositionY = (offset - 225) + "px";

			window.addEventListener("scroll", function(){
    			let offsetAgain = window.pageYOffset;

    			parallax.style.backgroundPositionY = (offsetAgain - 750) * 0.3 + "px";
			})
        }
    }
}










