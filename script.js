const text = document.getElementById("Text");
const Input = document.getElementById("Input");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const dialog = document.querySelector(".dialogbox");
const dis = document.querySelector(".disappear");
let wordarr = ["Apple", "Pineapple", "Blue", "Fun", "People", "Circle", "Ring", "Snake", "Plane", "Union", "Code"];
let x = 0;
let counter = 0;
let counter1=0;
function startAnim() {
    Input.style.top = x + 'px';
    x++;
    if (x == 500) {
        x = 10;
        Input.innerHTML = wordarr[Math.floor(Math.random() * wordarr.length)];
    }

    window.requestAnimationFrame(startAnim);
}
window.requestAnimationFrame(startAnim);
text.addEventListener("keyup", function () {
    if (event.keyCode == 13) {
        if (text.value == Input.innerHTML) {
            let task = `
            <div class="left">${Input.innerText}</div>`
            left.innerHTML += task;
            Input.innerHTML = wordarr[Math.floor(Math.random() * wordarr.length)];
            x = 10;
            counter += 1;
            if(counter==10){
                let task1 = `<div class="dialogbox">
                    <div class="result box">
                        <div class="head">Result</div>
                        <div class="score">Your Score is ${counter-counter1}</div>
                    </div>
                </div>`
                dialog.innerHTML += task1;
                console.log(dialog);
                dis.classList.remove("disappear");
            }
            console.log(counter);            
        }
        else {
            counter1+=1;
            let task = `
            <div class="right">${text.value}</div>`
            right.innerHTML += task;
            Input.innerHTML = wordarr[Math.floor(Math.random() * wordarr.length)];
            x = 10;
            
            console.log(counter);



        }
        text.value = "";
    }
});


