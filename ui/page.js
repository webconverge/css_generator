

function header(){
    return `
        <div class="header">
            <div>
                <a href="/">Css Generator</a>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    `
}


function footer(){
    return `
        <div class="footer"><a href="/">Web Converge</a></div>
    `
}


function css_properties(properties){
    return `
        <div class="css-properties">
            <div>
                ${
                    properties.map(property => `
                        <a href=${property.path}>${property.name}</a>
                    `).join(" ")
                }
            </div>
        </div>
    `
}


function title(name){
    return `
        <div class="title">
            <div>
                <span>${name}</span>
            </div>
        </div>
    `
}


function overlay(){
    return `
        <div class="overlay"></div>
    `
}


function side(properties, name){
    return `
        <div class="side">
            <div>
                <span>Css Properties</span>
                <button><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div>
                ${
                    properties.map(property => `
                        ${
                            property.name == name ? `<a href=${property.path} active>${property.name}</a>`: `<a href=${property.path}>${property.name}</a>`
                        }
                    `).join(" ")
                }
            </div>
        </div>
    `
}


function user_form(form){
    return `
        <form class="user-form">${form}</form>
    `
}

function preview(prev){
    return `
        <div class="preview">
            <span>Preview</span>
            <div>${prev}</div>
        </div>
    `
}

function css_code(css){
    return `
        <div class="css-code">
            <div>
                <span>Css Code</span>
                <button>Copy</button>
            </div>
            <div>
                <pre>${css}</pre>
            </div>
        </div>
    `
}


function home(properties){
    return `
        <div class="home">
            ${header()}
            ${css_properties(properties)}
            ${footer()}
        </div>
    `
}


function editor(properties, name, form, prev, css){
    return `
        <div class="editor">
            ${side(properties, name)}
            <div class="main">
                ${header()}
                ${title(name)}
                <div class="generator">
                    ${user_form(form)}
                    ${preview(prev)}
                    ${css_code(css)}
                </div>
                ${footer()}
            </div>
            ${overlay()}
        </div>
    `
}


export { home, editor }

