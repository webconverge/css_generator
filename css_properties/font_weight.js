





function css(data){
    return `${ data == null ? `font-weight:400;`: `font-weight:${data.get("font_weight")};`}`
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
            }
        </style>
        <div class="template">
            Some Text
        </div>
    `
} 


const form_data = [

    {
        type:"range",
        name:"font_weight",
        label:"Font Weight",
        id:"font-weight",
        min:400,
        max:900,
        value:1
    },
   
]

export { css, template, form_data }

