// call back --> promise --> async await --> event loop

const getStudentDetails = (callback) => {
    let user;
    setTimeout(() => {
        user = {
            name: "Yeasin Arafath",
            age: 24,
            isActive: true
        };
        callback(user);
    }, 3000)
}

getStudentDetails((user) => {
    if(user.isActive){
        console.log("Valid user go ahead");
    }
});