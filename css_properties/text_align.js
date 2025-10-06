


function css(data){
    return `${ data == null ? `text-align:right;`: `text-align:${data.get("text_align")};`}`
}


function template(css_code){
    return `
        <style>
            .template{
                ${css_code}
                /* additional style */
                height:100%;
                box-sizing:border-box;
                padding:10px;
            }
        </style>
        <div class="template">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    `
} 


const form_data = [

    {
        type:"select",
        name:"text_align",
        label:"Text Align",
        id:"text-align",
        options:[
            "right",
            "center",
            "left",
            "justify"
        ]
    }
   
]

export { css, template, form_data }

