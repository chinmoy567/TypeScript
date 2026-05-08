type User = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: {
        city: string;
        country: string;
    };
    gender: "Male" | "Female";
    age: number;
    profession: string;
};

const user: User = {
    name: {
        firstName: "Chinmoy",
        lastName: "Sarkar",
    },
    address: {
        city: "Kolkata",
        country: "India",
    },
    gender: "Male",
    age: 30,
    profession: "Software Engineer",
};

export default user;
