

import * as control from "/static/js/page_control.js"

import { form_change } from "/static/js/form_change.js"


document.addEventListener("page-ready", e => {

    control.resize_screen()

    control.side_open()

    control.side_close()

    control.copy_code()

    form_change(e.detail.data)
   
})



