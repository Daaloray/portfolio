window.addEventListener("scroll", function(){
    const docHeight = document.documentElement.scrollHeight

    const scrollTop = window.pageYOffset ||this.document.documentElement.scrollTop;

    const windowHeight = window.innerHeight || this.document.documentElement.clientHeight;

if (scrollTop + windowHeight >= docHeight) {
    document.querySelector("footer").classList.add("footer-show");
} else {
    document.querySelector("footer").classList.remove("footer-show");
}

});






// typwriter effect

const words = [ "A Frontend geek", "A Medical student", "and a Web Developer" ];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
let textElement = document.getElementById("text");

function type() {
    let currentWord = words[index];
    if (!isDeleting) {
        textElement.innerHTML += currentWord.charAt(letterIndex);
        letterIndex++;

        if (letterIndex >= currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        }
        } else {
            textElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            if(letterIndex <= 0) {
                isDeleting = false;
                index++;
                if (index >= words.length) {
                    index = 0;
                }
            }
        setTimeout(type,110);
    }
}
setInterval(type, 210);