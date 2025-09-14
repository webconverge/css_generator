


function css(data){
    return `${ data == null ? `border:1px solid #0000ff;`: `border:${data.get("border_width")}px ${data.get("border_style")} ${data.get("border_color")};`}`
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
        type:"range",
        name:"border_width",
        label:"Width (Pixels)",
        id:"border-width",
        min:1,
        max:20,
        value:1
    },

    {
        type:"select",
        name:"border_style",
        label:"Style",
        id:"border-style",
        options:[
            "solid",
            "dotted",
            "dashed",
            "ridge"
        ]
    },

    {
        type:"color",
        name:"border_color",
        label:"Color",
        id:"border-color",
        value:"#0000ff"
    }
   
]

export { css, template, form_data }

