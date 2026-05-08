// tsx src/spredRest.ts

// const friends = [
// 	"Chinmoy",
// 	"Sourav",
// 	"Aman",
// 	"Riya",
// 	"Priya",
// 	"Arjun",
// 	"Karan",
// 	"Neha",
// 	"Ankit",
// 	"Rohan",
// ];

// const schoolFriends = [
// 	...friends.slice(0, 5),
// 	"Rahul",
// 	"Sunita",
// 	"Ramesh",
// 	"Tanya",
// 	"Vikram",
// ];

// const collegeFriends = [
// 	...friends.slice(5),
// 	"Kabir",
// 	"Manisha",
// 	"Siddharth",
// 	"Pooja",
// 	"Ishaan",
// ];

// console.log("friends:", friends);
// console.log("schoolFriends:", schoolFriends);
// console.log("collegeFriends:", collegeFriends);


// tsx src/spreadRest.ts
// const  user ={
//     name: "Chinmoy",
//     age: 25,
//     city: "cumilla",
//     profession: "Software Engineer",
// }

// const user_qualifications ={
//     degree: "BSc in Computer Science",
//     university: "Baiust",
//     graduationYear: 2026,
// }
// const user_details = {
//     ...user,
//     ...user_qualifications,
// }   
// console.log(user_details);


// tsx src/spreadRest.ts

const friends = [
	"Chinmoy",
	"Sourav",
	"Aman",
	"Riya",
	"Priya",
	"Arjun",
	"Karan",
	"Neha",
	"Ankit",
	"Rohan",
];

const schoolFriends = [
    ...friends.slice(0, 5),
	"Rahul",
	"Sunita",
	"Ramesh",
	"Tanya",
	"Vikram",
];

const collegeFriends = [
    ...friends.slice(5),
	"Kabir",
	"Manisha",
	"Siddharth",
	"Pooja",
	"Ishaan",
];
const sendInvite=(...friends:string[])=>{
    friends.forEach(friend=>{
        console.log(`Invitation sent to ${friend}`);
    })
}   
sendInvite(...friends);