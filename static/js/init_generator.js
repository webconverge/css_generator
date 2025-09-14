

import { form } from "/ui/main.js"


function init(config, user_form, css_code, preview){
    
    import(config).then(mod => {
    
        user_form.innerHTML = form(mod.form_data)
    
        css_code.innerHTML = mod.css(null)
    
        preview.innerHTML = mod.template(mod.css(null))
    
    })

}


export { init }

