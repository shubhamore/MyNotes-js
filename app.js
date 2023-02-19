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

//actual js
const container=document.querySelector(".container")
const newNote = document.querySelector(".new-note")

function saveNotes(){
    const notes=document.querySelectorAll(".note-tab textarea")
    let data=[]
    notes.forEach((note)=> data.push(note.value))
    if(data.length===0){
        localStorage.removeItem("notes")
    } 
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}

(
    function() {
        const lsNotes=JSON.parse(localStorage.getItem("notes"))
        if(lsNotes===null){
            addNote()
        }
        else{
            lsNotes.forEach(lsNote=>addNote(lsNote))
        }
    }
)()

newNote.addEventListener("click",function(){
    addNote()
})

function addNote(text=""){
    const note=document.createElement("div")
    note.classList.add("note-tab")
    note.innerHTML=`
    <div class="toolbar">
        <div class="left">
            <img src="./photos/copy.png" class="copy-icon" alt="copy">
        </div>
        <div class="right">
            <img src="./photos/bin.png" class="bin-icon" alt="delete">
        </div>
    </div>
    <textarea name="text" class="textbox" placeholder="Enter text here" cols="30" rows="10">${text}</textarea>
    `

    note.querySelector(".bin-icon").addEventListener("click",function(){
        note.remove()
        saveNotes()
        document.querySelector(".remainder").textContent="NOTE DELETED"
        document.querySelector(".remainder").style.display="block"
        setTimeout(hide,2000)
    })

    note.querySelector(".copy-icon").addEventListener("click",function(){
        var copyText = note.querySelector("textarea");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
        document.querySelector(".remainder").textContent="NOTE COPIED TO CLIPBOARD"
        document.querySelector(".remainder").style.display="block"
        setTimeout(hide,2000)
    })

    note.querySelector("textarea").addEventListener("focusout",function(){
        saveNotes()
        document.querySelector(".remainder").textContent="NOTE SAVED"
        document.querySelector(".remainder").style.display="block"
        setTimeout(hide,2000)
    })

    container.appendChild(note)
    saveNotes()
}

function hide(){
    document.querySelector(".remainder").style.display="none"
}

setTimeout(hide,5000)