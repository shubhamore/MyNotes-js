let textbox=document.getElementsByClassName("textbox")
// for setting of textarea 
textarea = document.querySelector("textarea");
textarea.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// textarea = document.querySelectorAll(".textbox");
// textarea.forEach(i=>{
//     i.addEventListener('input', autoResize, false);
//     function autoResize() {
//         this.style.height = 'auto';
//         this.style.height = this.scrollHeight + 'px';
//     }
// })

// var multipleFields=document.querySelectorAll('.textbox');
// for(var i=0; i<multipleFields.length; i++){
// multipleFields[i].addEventListener('input',autoResizeHeight,0);
// }
// // auto resize multiple textarea
// function autoResizeHeight(){
//   this.style.height="auto";
//   this.style.height= this.scrollHeight+"px";
// }


// const tx = document.getElementsByTagName("textarea");
// for (let i = 0; i < tx.length; i++) {
//   tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
//   tx[i].addEventListener("input", OnInput, false);
// }
// function OnInput() {
//   this.style.height = 0;
//   this.style.height = (this.scrollHeight) + "px";
// }

// function addAutoResize() {
//     document.querySelectorAll('.textbox').forEach(function (element) {
//         element.style.boxSizing = 'border-box';
//         var offset = element.offsetHeight - element.clientHeight;
//         element.addEventListener('input', function (event) {
//             event.target.style.height = 'auto';
//             event.target.style.height = event.target.scrollHeight + offset + 'px';
//         });
//         element.removeAttribute('data-autoresize');
//     });
// }

var ta = document.querySelector('textarea');

ta.addEventListener('autosize:resized', function () {
    console.log('textarea height updated');
});

// for printing dots 
const dots = document.getElementById('dots')
const dotarray = [' ', '.', '.', '.']
let dotcount = 0
function startprinting() {
    if (dotcount == dotarray.length) {
        dotcount = 0
        dots.textContent = ""
    }
    setTimeout(startprinting, 300)
    dots.textContent += dotarray[dotcount]
    dotcount += 1
}
startprinting()
//for creating new note
const newNote = document.querySelector(".new-note")
const noteContainer = document.querySelector(".note-container")
newNote.addEventListener('click', function () {
    const HtmlOfNoteToAppend = `
    <div class="note-tab">
                <div class="toolbar">
                    <div class="left">
                        <img src="./photos/bold.png" class="bold-icon" alt="bold">
                        <img src="./photos/underline.png" class="underline-icon" alt="underline">
                        <img src="./photos/copy.png" class="copy-icon" alt="copy">
                    </div>
                    <div class="right">
                        <img src="./photos/bin.png" class="bin-icon" alt="delete">
                        <img src="./photos/minus.png" class="minus-icon" alt="close note">
                    </div>
                </div>
                <textarea name="text" class="textbox" placeholder="Enter text here" cols="30" rows="10"></textarea>
            </div>
`
    noteContainer.insertAdjacentHTML("beforeend", HtmlOfNoteToAppend);
    console.log("hello")
})

//for bold feature
// let isBold=false
// let boldContent=""
// const boldIcon=document.querySelectorAll(".bold-icon")
// boldIcon.forEach(i=>{
//     i.addEventListener('click',function(){
//         if(isBold){
//             isBold=false
//             console.log("bold is on");
//             textbox.addEventListener('keypress',function(e){
//                 console.log(e)
//                 // boldContent+=e.key
//                 // textbox.innerText+=boldContent
//             })
//         }
//         else{
//             isBold=true
//             console.log("bold is off");
//         }
//     })

// })
// while(isBold){
//     textbox.addEventListener('keyup',function(e){
//         console.log("hi")
//         boldContent+=e.key
//         console.log(boldContent)
//     })
// }