

import * as control from "./page_control.js"

import { form_change } from "./form_change.js"


document.addEventListener("page-ready", e => {

    control.resize_screen()

    control.side_open()

    control.side_close()

    control.copy_code()

    form_change(e.detail.data)
   
})



