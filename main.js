


const pathname = window.location.pathname.split("/")[1] || "index.html"


if(pathname != "index.html"){

    import("/ui.js").then(ui => {

        import("/"+pathname+"/template.js").then(template => {

            fetch("/"+pathname+"/form_data.json").then(res => res.json()).then(list => {

                // render html
                document.body.innerHTML = ui.editor(list, template.initial_css, template.html(template.initial_css), template.title)

                // add js script
                const script = document.createElement("script")
                script.src = "/static/js/editor.js"
                script.type = "module"
                document.body.append(script)
                
                // add css style
                const link = document.createElement("link")
                link.rel = "stylesheet"
                link.href = "/static/css/editor.css"
                document.head.append(link)
            })
        })
    })

}
else{
    import("./ui.js").then(ui => {

        fetch("./generator_list.json").then(res => res.json()).then(list => {
            
            // render html
            document.body.innerHTML = ui.home(list)
            
            // add js script
            const script = document.createElement("script")
            script.src = "./static/js/home.js"
            script.type = "module"
            document.body.append(script)
            
            // add css style
            const link = document.createElement("link")
            link.rel = "stylesheet"
            link.href = "./static/css/home.css"
            document.head.append(link)
        })
    })
}



