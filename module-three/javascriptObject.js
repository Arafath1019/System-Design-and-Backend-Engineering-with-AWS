let Student = {
    name: "Yeasin Arafath",
    age: 24,
    nests: {
        location: "Dhaka"
    }
};

// Shallow cloning, While cloning using spread operator, nested values are not cloned
let cloned1 = {...Student}
cloned1.nests.location = "Chittagong";

console.log("Student", Student);
console.log("Cloned1", cloned1);

// Deep cloning for nested values
let cloned2 = JSON.parse(JSON.stringify(Student));
cloned2.nests.location = "Chittagong";
console.log("Student", Student);
console.log("Cloned2", cloned2)

// Deep cloning using structuredClone method
let cloned3 = structuredClone(Student);
cloned3.nests.location = "Chittagong";

console.log("Student", Student);
console.log("Cloned3", cloned3)