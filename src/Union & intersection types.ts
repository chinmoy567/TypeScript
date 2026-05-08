

// Union
type Student = {
  name: string;
  roll: number;
};

type Teacher = {
  name: string;
  subject: string;
};

type Person = Student | Teacher;

const student: Person = {
  name: "Chinmoy",
  roll: 101,
};

const teacher: Person = {
  name: "Rahim Sir",
  subject: "Math",
};

// Intersection
type Employe={
    name:string;
    age:number;
    city:string;
    profession:string;
}
type manager={
    name:string;
    age:number;
    city:string;
    profession:string;
}
type EmployeManager=Employe & manager;

const employee:EmployeManager={
    name:"Chinmoy",
    age:25,
    city:"Cumilla",
    profession:"Software Engineer",
}   