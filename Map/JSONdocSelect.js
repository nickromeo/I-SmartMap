

if (typeof document !== 'undefined'){
    let selectElement = document.querySelector("#SM");
    output = selectElement.value
fetch("data.json")
.then(response => response.json())
.then( (data) => {
    data.forEach(item => {
        console.log(item)
        

    })})
}

