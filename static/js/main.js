
import { form } from "/ui/main.js"

document.body.addEventListener("page-ready", e => {

    const user_form = document.querySelector(".user-form")

    const css_code = document.querySelector(".css-code > prev")

    const preview = document.querySelector(".preview")

    import(e.detail.data.config).then(mod => {

        user_form.innerHTML = form(mod.form_data)

        css_code.innerHTML = mod.css(null)

        preview.innerHTML = mod.template(mod.css(null))

    })

})



