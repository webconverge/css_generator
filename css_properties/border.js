



function css(data){
    return `
        ${
            data == null ? `border:1px solid #0000ff;`:""
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



const border_style = [
    "solid",
    "dotted",
    "dashed",
    "ridge"
]


const form_data = {

    type:"toggle",

    switch:{
        type:"select",
        name:"border_type",
        label:"Type",
        id:"border-type",
        options:[ "Same", "Different"]
    },

    option_1:{
        type:"list",
        list:[
            {
                type:"number",
                name:"border_width",
                label:"Width (Pixels)",
                id:"border-width",
                value:1
            },

            {
                type:"select",
                name:"border_style",
                label:"Style",
                id:"border-style",
                options:border_style
            },

            {
                type:"color",
                name:"border_color",
                label:"Color",
                id:"border-color",
                value:"#0000ff"
            }
        ]
    },

    option_2:{
        type:"list",
        list:[
            {
                type:"group",
                title:"Border Top",
                list:[
                    {
                        type:"number",
                        name:"border_top_width",
                        label:"Width (Pixels)",
                        id:"border-top-width",
                        value:1
                    },

                    {
                        type:"select",
                        name:"border_top_style",
                        label:"Style",
                        id:"border-top-style",
                        options:border_style
                    },

                    {
                        type:"color",
                        name:"border_top_color",
                        label:"Color",
                        id:"border-top-color",
                        value:"#0000ff"
                    }
                ]
            },

            {
                type:"group",
                title:"Border Bottom",
                list:[
                    {
                        type:"number",
                        name:"border_bottom_width",
                        label:"Width (Pixels)",
                        id:"border-bottom-width",
                        value:1
                    },

                    {
                        type:"select",
                        name:"border_bottom_style",
                        label:"Style",
                        id:"border-bottom-style",
                        options:border_style
                    },

                    {
                        type:"color",
                        name:"border_bottom_color",
                        label:"Color",
                        id:"border-bottom-color",
                        value:"#0000ff"
                    }


                ]
            },

            {
                type:"group",
                title:"Border Right",
                list:[
                    {
                        type:"number",
                        name:"border_right_width",
                        label:"Width (Pixels)",
                        id:"border-right-width",
                        value:1
                    },

                    {
                        type:"select",
                        name:"border_right_style",
                        label:"Style",
                        id:"border-right-style",
                        options:border_style
                    },

                    {
                        type:"color",
                        name:"border_right_color",
                        label:"Color",
                        id:"border-right-color",
                        value:"#0000ff"
                    }

                ]
            },

            {
                type:"group",
                title:"Border Left",
                list:[
                    {
                        type:"number",
                        name:"border_left_width",
                        label:"Width (Pixels)",
                        id:"border-left-width",
                        value:1
                    },

                    {
                        type:"select",
                        name:"border_left_style",
                        label:"Style",
                        id:"border-left-style",
                        options:border_style
                    },

                    {
                        type:"color",
                        name:"border_left_color",
                        label:"Color",
                        id:"border-left-color",
                        value:"#0000ff"
                    }
                ]
            }

        ]
    }
} 

export { css, template, form_data }

