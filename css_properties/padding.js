





function css(data){
    return `${ data == null ? `padding:5px;`: `padding:${data.get("padding")}px;`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100%;
                box-sizing:border-box;
                border:1px solid red;   
            }
            .template > div{
                background-color:blue;
                height:100%;
            }
        </style>
        <div class="template">
            <div></div>
        </div>
    `
} 


const form_data = [

    {
        type:"range",
        name:"padding",
        label:"Padding",
        id:"padding",
        min:1,
        max:20,
        value:1
    },
   
]

export { css, template, form_data }

