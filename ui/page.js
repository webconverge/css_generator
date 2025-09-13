

function header(){
    return `
        <div class="header">
            <a href="/">Css Generator</a>
            <button></button>
        </div>
    `
}


function footer(){
    return `
        <div class="footer">Web Converge</div>
    `
}


function css_properties(properties){
    return `
        <ul class="css_properties">
            ${
                properties.map(property => `
                    <li><a href=${property.path}>${property.name}</a></li>
                `).join(" ")
            }
        </ul>
    `
}


function title(name){
    return `
        <div class="title">${name}</div>
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
                <a href="/">Css Generator</a>
                <button></button>
            </div>
            <ul>
                ${
                    properties.map(property => `
                        ${
                            property.name == name ? `<li><a href=${property.path} active>${item.name}</a></li>`: `<li><a href=${item.path}>${item.name}</a></li>`
                        }
                    `).join(" ")
                }
            </ul>
        </div>
    `
}


function user_form(){
    return `
        <form class="user-form"></form>
    `
}

function preview(){
    return `
        <div class="preview"></div>
    `
}

function css_code(){
    return `
        <div class="css-code">
            <pre></pre>
            <button>Copy</button>
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


function editor(properties, name){
    return `
        <div class="editor">
            ${side(properties, name)}
            <div class="main">
                ${title(name)}
                ${user_form()}
                ${preview()}
                ${css_code()}
                ${footer()}
            </div>
            ${overlay()}
        </div>
    `
}


export { home, editor }

