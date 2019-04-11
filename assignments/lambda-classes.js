// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I'm from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return 'Today we are learning about {subject}';
    }
    grade(Student, subject) {
        return '{student.name} receives a perfect score on {subject}';
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;

    }
    listsSubjects() {

    }
    PRAssignment (subject) {
        return `{student.name} has submitted a PR request for {subject}`
    }
}


// comments to commit

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const sally = new Student({
    name: 'Sally',
    age: 22,
    location: 'Cyberspace',
    gender: 'female',
    previousBackground: 'gamer',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})


// console.log

console.log(fred.demo());
console.log(fred.grade());
