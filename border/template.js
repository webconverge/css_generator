


const initial_css = "border:1px solid #0000FF ;"

const title = "Border"


function css(form_data){
    return `${form_data.get("border_side")}:${form_data.get("border_width")}px ${form_data.get("border_style")} ${form_data.get("border_color")};`
}


function html(css_code){
    return `
        <style>
            .rendered-html{
                ${css_code}
                /* additional css */
                height:100px;
            }
        </style>
        <div class="rendered-html"></div>
    `
}

export { initial_css, css, html, title }


