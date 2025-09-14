

const input = {

    select:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <select name="${data.name}" id=${data.id}>
                    ${
                        data.options.map(option => `
                            <option>${option}</option>    
                        `)
                    }
                </select>
            </div>
        `
    },

    
    color:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <input type="color" id="${data.id}" name="${data.name}" value="${data.value}">
            </div>
        `
    },

    
    range:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <input type="range" id="${data.id}" name="${data.name}" value="${data.value}">
            </div>
        `
    },


    number:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <input type="number" id="${data.id}" name="${data.name}" value="${data.value}">
            </div>
        `
    },


    text:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <input type="text" id="${data.id}" name="${data.name}" value="${data.value}">
            </div>
        ` 
    },

    
    list:function(data){
        return `
            <div class="input-list">
                ${
                    data.list.map(item => `
                        ${item.type == "text" || item.type == "color" || item.type == "range" || item.type == "select" || item.type == "number" || item.type == "group" ?  `${this[item.type](item)}` : ""}
                    `).join(" ")
                }
            </div>   
        `
    },


    group:function(data){
        return `
            <div class="input-group">
                <span>${data.title}</span>
                <div>
                    ${
                        data.list.map(item => `
                            ${item.type == "text" || item.type == "color" || item.type == "range" || item.type == "select" || item.type == "number" ?  `${this[item.type](item)}` : ""}
                        `).join(" ")
                    }
                </div>
            </div>
        `
    },


    toggle:function(data){
        return `
            <div class="toggle-input">
                ${this.select(data.switch)}
                ${data.option_1.type == "text" || data.option_1.type == "color" || data.option_1.type == "range" || data.option_1.type == "select" || data.option_1.type == "number" || data.option_1.type == "group" || data.option_1.type == "list" ? `${this[data.option_1.type](data.option_1)}` : ""} 
                ${data.option_2.type == "text" || data.option_2.type == "color" || data.option_2.type == "range" || data.option_2.type == "select" || data.option_2.type == "number" || data.option_2.type == "group" || data.option_2.type == "list" ? `${this[data.option_2.type](data.option_2)}` : ""}
            </div>
        `
    },


    dynamic:function(data){
        return `
            <div class="dynamic-input"></div>
        `
    }

}



function form(data){
    return input[data.type](data)
}


export { form }










