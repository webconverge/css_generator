





function css(data){
    return `${ data == null ? `color:red;`: `color:${data.get("color")};`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100%;
                box-sizing:border-box;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:2rem;
                font-weight:bold;
            }
        </style>
        <div class="template">
            Text color
        </div>
    `
} 


const form_data = [

    {
        type:"color",
        name:"color",
        label:"Color",
        id:"color",
        value:"#0000ff"
    }
   
]

export { css, template, form_data }

