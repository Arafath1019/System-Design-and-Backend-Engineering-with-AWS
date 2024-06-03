const getStudentById = function(data){
    return new Promise((resolve, reject) => {
        let user;
        setTimeout(() => {
            user = {name: "Yeasin Arafath", subject: ["english"]}
            resolve(user);
            if(!user) reject("Rejected");
        }, 1000);
    })
}

const getStudentsResultBySubject = function(data){
    return new Promise((resolve, reject) => {
        let user;
        setTimeout(() => {
            user = {name: "Yeasin Arafath", result: "4.0"}
            resolve(user);
            if(!user) reject("Rejected");
        }, 1000);
    })
}

async function processStudent(){
    const result = await getStudentById(12);
    const subjectWise = await getStudentsResultBySubject(result.subject[0]);
    console.log(subjectWise);
}

processStudent();

async function logMovies(){
    const response = await fetch("https://dummyjson.com/products/1");
    const data = await response.json();
    console.log(data);
}

logMovies();

let smartFunc = async () => {
    return "I am new";
}

smartFunc().then(data => console.log(data))