
import { page } from "/ui/main.js"

let current_path = "/"

function render(path){

    const root_path = path.split("/")[1] || "home"

    fetch("/css_properties.json").then(res => res.json()).then(properties => {

        if(root_path == "home"){

            document.title = "Home"

            document.body.innerHTML = page.home(properties)
        }
        else{

            document.title = properties.find(property => property.path == path).name

            document.body.innerHTML = page.editor(properties, properties.find(property => property.path == path).name)

            document.body.dispatchEvent(new CustomEvent("page-ready", {
                
                detail:{

                    data: properties.find(property => property.path == path)
                },

                bubbles:true
            }))
        }
    })
}

history.replaceState({path:current_path}, "", current_path)

render(current_path)

document.body.addEventListener("click", e => {

    if(e.target.tagName == "A" && e.target.hostname == window.location.hostname){

        e.preventDefault()

        if(current_path != e.target.pathname){

            current_path = e.target.pathname

            history.pushState({path:current_path}, "", current_path)

            render(e.target.pathname)

        }

    }

})

window.addEventListener("popstate", e => {

    current_path = e.state.path

    render(current_path)
})



