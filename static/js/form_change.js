


function form_change(data){

    const form = document.querySelector("form")

    const preview = document.querySelector(".preview div")

    const css_code = document.querySelector(".css-code pre")

    form.addEventListener("input", ()=>{

        const form_data = new FormData(form)

        import(data.config).then(mod => {

            css_code.innerHTML = mod.css(form_data)

            preview.innerHTML = mod.template(mod.css(form_data))

        })

    })

}


export { form_change }



