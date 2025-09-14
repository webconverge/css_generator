
import { init } from "/static/js/init_generator.js"

import { toggle_input, dynamic_input, input } from "/static/js/input_control.js"

import { form_change } from "/static/js/form_change.js"





document.addEventListener("page-ready", e => {

    const user_form = document.querySelector(".user-form")
    
    const css_code = document.querySelector(".css-code > pre")
    
    const preview = document.querySelector(".preview")



    init(e.detail.data.config, user_form, css_code, preview)

    
    
    document.querySelectorAll(".toggle-input").forEach(item => {

        toggle_input(item)
    })

    document.querySelectorAll(".dynamic-input").forEach(item => {

        dynamic_input(item)
    })

    document.querySelectorAll(".input").forEach(item => {

        input(item)
    })

    document.addEventListener("form-change", ()=>{


    })

})



