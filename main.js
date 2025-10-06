
import { page } from "./ui/main.js"

import { form } from "./ui/main.js"

let current_path = "/"

const prefix = "/css_generator"

function render(path){

    const root_path = path.split("/")[1] || "home"

    fetch(prefix+"/css_properties.json").then(res => res.json()).then(properties => {

        if(root_path == "home"){

            document.title = "Home"

            document.body.innerHTML = page.home(properties)
        }
        else{

            const data = properties.find(property => property.path == path)

            import(prefix+data.config).then(mod => {

                document.title = data.name

                document.body.innerHTML = page.editor(properties, data.name, form(mod.form_data), mod.template(mod.css(null)), mod.css(null))

                document.body.dispatchEvent(new CustomEvent("page-ready", {
                    
                    detail:{
    
                        data: data
                    },
    
                    bubbles:true
                }))

            })
        }
    })
}

history.replaceState({path:prefix+current_path}, "", prefix+current_path)

render(current_path)

document.body.addEventListener("click", e => {

    if(e.target.tagName == "A" && e.target.hostname == window.location.hostname){

        e.preventDefault()

        if(current_path != e.target.pathname){

            current_path = e.target.pathname

            history.pushState({path:prefix+current_path}, "", prefix+current_path)

            render(e.target.pathname)

        }

    }

})

window.addEventListener("popstate", e => {

    if(!prefix){

        current_path = e.state.path
    }
    else{

        current_path = e.state.path.split(prefix)[1]
    }


    render(current_path)
})



