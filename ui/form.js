

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
                <input min="${data.min}" max="${data.max}" type="range" id="${data.id}" name="${data.name}" value="${data.value}">
            </div>
        `
    },


    number:function(data){
        return `
            <div class="input">
                <label for="${data.id}">${data.label}</label>
                <input type="number" min="${data.min}" max="${data.max}" id="${data.id}" name="${data.name}" value="${data.value}">
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
    }

}


function form(data){
    return data.map(item => `
        ${
            input[item.type](item)
        }
    `).join(" ")
}


export { form }










