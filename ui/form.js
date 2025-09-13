

const input = {

    select:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}<label>
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

    group:function(data){
        return `
            <div class="group">
                <span>${data.name}</span>
                <div>
                    ${
                        data.list.map(item => `
                            ${this[item.type](item)}                            
                        `).join(" ")
                    }
                </div>
            </div>
        `
    },

    group_list:function(){
        return `
        
        `
    },

    switch_content:function(data){
        return `
            <div class="switch-content"></div>
        `
    },
    
    dynamic_content:function(data){
        return `
            <div class="dynamic-content"></div>
        `
    }

}

function form(data){
    return `
        ${
            data.list.map(item => `
                ${input[item.type](item)}                            
            `).join(" ")
        }
    `
}

export { form }










