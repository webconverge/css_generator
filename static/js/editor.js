


const pathname = window.location.pathname.split("/")[1]

const preview = document.querySelector(".preview")

const css_code = document.querySelector(".css-code")

const form = document.querySelector(".user-input")

const copy_code = document.querySelector(".copy-code")


const input = {

    color:function(ref){

        return ref.value
    },

    number:function(ref){

        return ref.value
    },

    select:function(ref){

        return ref.value
    },

    range:function(ref){

        return ref.value
    },

    radio:function(ref){

        return ref.value
    },

    file:function(ref){

        const f = ref.files[0]

        return URL.createObjectURL(f)
    }

}


document.querySelectorAll(".input").forEach(item => {

    item.addEventListener("change", ()=>{

        form.dispatchEvent(new CustomEvent("inputChange", {

            bubbles:true
        }))
    })
})


form.addEventListener("inputChange", ()=>{

    const formData = new FormData()

    document.querySelectorAll(".input").forEach(item => {

        const name = item.getAttribute("name")

        const type = item.getAttribute("type")

        if(type == "radio"){

            if(item.checked){

                formData.append(name, input[type](item))
            }
        }
        else{

            formData.append(name, input[type](item))
        }

    })


    import("/"+pathname+"/template.js").then(template => {

        const css = template.css(formData)

        css_code.innerHTML = css

        preview.innerHTML = template.html(css)
    })

})


copy_code.addEventListener("click", ()=>{

    navigator.clipboard.writeText(css_code.innerHTML)
})














