const proposal = function(data){
    return new Promise((resolve, reject) => {
        if(data.name == "Yeasin"){
            resolve(data);
        } else {
            reject("Rejected");
        }
    })
}

proposal({ name: "Yeasin"}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

const getData = async () => {
    const result = await proposal({ name: "Yeasin"});
    console.log(result);
}

getData()