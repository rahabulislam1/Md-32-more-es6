class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    // name;
    // designation = 'Support Web Dev';
    // address = 'BD';
    // constructor(name, address) {
    //     this.name = name;
    //     this.address = address;
    // }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare {
    name;
    designation = 'Student Care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for ', student);
    }

}

class NeptuneDev {
    name;
    designation = 'Student Care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'release app version', student);
    }

}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

// console.log(salman);