





function css(data){
    return `${ data == null ? `margin:5px;`: `margin:${data.get("margin")}px;`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100%;
                box-sizing:border-box;
                background-color:blue;
            }
        </style>
        <div class="template"></div>
    `
} 


const form_data = [

    {
        type:"range",
        name:"margin",
        label:"Margin",
        id:"margin",
        min:1,
        max:20,
        value:1
    },
   
]

export { css, template, form_data }

