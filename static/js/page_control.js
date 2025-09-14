


function resize_screen(){

    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 850 ){

                    if(entry.target.hasAttribute("small")) entry.target.removeAttribute("small")

                    if(entry.target.hasAttribute("medium")) entry.target.removeAttribute("medium")
                }
                else if(entry.target.offsetWidth >= 550 && entry.target.offsetWidth < 850){

                    if(!entry.target.hasAttribute("medium")) entry.target.setAttribute("medium", "")

                    if(entry.target.hasAttribute("small")) entry.target.removeAttribute("small")
                }
                else{

                    if(!entry.target.hasAttribute("small")) entry.target.setAttribute("small", "")
                }
            }
        })
    })

    resize.observe(document.body)
}



function side_open(){

    const side_open_btn = document.querySelector(".header button")

    side_open_btn.addEventListener("click", ()=>{

        if(!document.body.hasAttribute("side-open")) document.body.setAttribute("side-open", "")
    })
}

function side_close(){

    const side_close_btn = document.querySelector(".side button")

    const overlay = document.querySelector(".overlay")

    side_close_btn.addEventListener("click", ()=>{

        if(document.body.hasAttribute("side-open")) document.body.removeAttribute("side-open")
    })

    overlay.addEventListener("click", ()=>{

        if(document.body.hasAttribute("side-open")) document.body.removeAttribute("side-open")
    })
}

function copy_code(){

    const copy_btn = document.querySelector(".css-code button")

    const code = document.querySelector(".css-code pre")

    copy_btn.addEventListener("click", ()=>{

        navigator.clipboard.writeText(code.innerHTML);

        alert("Code copied !")

    })
}



export { resize_screen, side_open, side_close, copy_code }

