class Support {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(Name, Address) {
        this.name = Name;
        this.address = Address;
    }
    startSession() {
        console.log(this.name, 'Start a support Session');
    }
}

const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman);