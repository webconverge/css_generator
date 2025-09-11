


// header
function header(){
    return `
        <div class="header">
            <a href="">Css Generator</a>
        </div>
    `
}


// footer
function footer(){
    return `
        <div class="footer">Web Converge</div>
    `
}

// generator list
function generator_list(list){
    return `
        <ul class="generator-list">
            ${
                list.map(item => `
                    <li class="generator-item"><a href=${item.path}>${item.name}</a></li>
                `).join(" ")
            }
        </ul>
    `
}


const input = {

    // input select
    select:function(data){
        return `
            <label for="${data.id}">${data.label}</label>
            <select name="${data.name}" id="${data.id}">
                ${
                    data.values.map(value => `
                        <option>${value}</option>
                    `).join(" ")
                }
            </select> 
        `
    },
    
    // input radio
    radio:function(data){
        return `
            ${
                data.values.map((item, index) => `
                    ${
                        index == 0 ? 
                        `
                            <input id="${item.id}" type="${data.type}" name="${data.name}" value="${item.value}" checked>
                            <label for="${item.id}">${item.label}</label>
                        `
                        :
                        `
                            <input id="${item.id}" type="${data.type}" name="${data.name}" value="${item.value}">
                            <label for="${item.id}">${item.label}</label>
                        `
                    }
                `).join(" ")
            }
        `
    },
    
    // input range
    range:function(data){
        return `
            <label for="${data.id}">${data.label}</label>
            <input type="${data.type}" name="${data.name}" min="${data.min}" max="${data.min}" value="${data.initial_value}" id="${data.id}">
        `
    },
    
    // input number
    number:function(data){
        return `
            <label for="${data.id}">${data.label}</label>
            <input type="${data.type}" min="${data.min}" max="${data.max}" id="${data.id}" value="${data.initial_value}" name="${data.name}"> 
        `
    },
    
    // input color
    color:function(data){
        return `
           <label for="${data.id}">${data.label}</label>
           <input id="${data.id}" type="${data.type}" value="${data.initial_value}" name="${data.name}">
        `
    }

}

// user input
function user_input(list){
    return `
        <form class="user-input">
            ${
                list.map(item => 
                    input[item.type](item)
                ).join(" ")
            }
        </form>
    `
}

// preview
function preview(html){
    return `
        <div class="preview">${html}</div>
    `
}

// css code
function css_code(css){
    return `
        <div class="css-code-wrapper">
            <pre class="css-code">${css}</pre>
            <button>Copy</button>
        </div>
    `
}


// home page
function home(list){
    return`
        ${header()}
        <div class="main">
            ${generator_list(list)}
        </div>
        ${footer()}
    `
}


// editor page
function editor(list, css, html){
    return `
        ${header()}
        <div class="main">
            ${user_input(list)}
            ${preview(html)}
            ${css_code(css)}
        </div>
        ${footer()}
    `
}


export { home, editor }

