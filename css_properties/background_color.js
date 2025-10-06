





function css(data){
    return `${ data == null ? `background-color:red;`: `background-color:${data.get("background_color")};`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100%;
                box-sizing:border-box;
            }
        </style>
        <div class="template"></div>
    `
} 


const form_data = [

    {
        type:"color",
        name:"background_color",
        label:"Background Color",
        id:"background-color",
        value:"#0000ff"
    }
   
]

export { css, template, form_data }

