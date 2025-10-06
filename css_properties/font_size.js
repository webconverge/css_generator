





function css(data){
    return `${ data == null ? `font-size:1rem;`: `font-size:${data.get("font_size")}rem;`}`
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
            }
        </style>
        <div class="template">
            Some Text
        </div>
    `
} 


const form_data = [

    {
        type:"number",
        name:"font_size",
        label:"Font Size (rem)",
        id:"font-size",
        min:1,
        max:4,
        value:1
    },
   
]

export { css, template, form_data }

