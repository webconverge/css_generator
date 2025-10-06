



function css(data){
    return `${ data == null ? `border-radius:10px;`: `border-radius:${data.get("border_radius")}px;`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100px;
                box-sizing:border-box;
                border:2px solid blue;
                margin:20px;
            }
        </style>
        <div class="template"></div>
    `
} 


const form_data = [

    {
        type:"range",
        name:"border_radius",
        label:"Border Radius (Pixels)",
        id:"border-radius",
        min:1,
        max:40,
        value:5
    }
   
]

export { css, template, form_data }

