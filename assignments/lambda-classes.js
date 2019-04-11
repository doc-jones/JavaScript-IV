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
    listsSubjects(favSubjects) {
        return ``
    }
    PRAssignment(subject) {
        return `{student.name} has submitted a PR request for {subject}`
    }
    sprintChallenge(subject) {
        return `{student.name} has begun sprint challenge on {subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standup(channel) {
        return `{name} announces to {channel}, @channel standy times!​​​​​`
    }
    debugsCode(Student, subject) {
        return `{name} debugs {student.name}'s code on {subject}`
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
});

const jane = new ProjectManager({
    name: 'jane',
    age: 32,
    location: 'International Space Station',
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

// console.log

console.log(fred.demo());
console.log(fred.grade());
console.log(sally.PRAssignment());
console.log(sally.sprintChallenge());
console.log(jane.standup());
console.log(jane.debugsCode());
