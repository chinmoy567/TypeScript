// tsx src/Destructuring.ts
const user ={
    name:{
        firstName: "Chinmoy",
        lastName: "sarkar",

    },
    gender: "Male",
    age: 25,
    city: "cumilla",
    profession: "Software Engineer",
};

const {name:userName}= user;
console.log(userName);

const {name:{firstName}, name:{lastName}} = user;
console.log(firstName, lastName);



// array destructring
const friends = [
    "Chinmoy",
    "Sourav",
    "Aman",
    "Riya", 
    "chandra,"
];

const [,...otherFriends] = friends;
console.log(otherFriends);  