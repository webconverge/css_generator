



function css(data){
    return `
        ${
            data == null ? `1px solid #0000ff`:""
        }
    
    `
}



function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100px;
            }
        </style>
        <div class="template"></div>
    `
}


const form_data = {


} 

export { css, template, form_data }

