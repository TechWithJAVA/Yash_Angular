export class Employee {

    private _name: string;
    private _color: string;
    private _birthYear: number;

    constructor(_name, _color, _birthYear) {
        this._name = _name;
        this._color = _color;
        this._birthYear = _birthYear;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        if (name.length > 12) {
            throw new Error("Name has a max length of 12");
        }

        this._name = name;
    }

    get color() {
        return this._color
    }

    set color(color: string) {
        this._color = color;
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(birthYear: number) {
        if (birthYear <= 0 && birthYear.toString().length < 4) {
            throw new Error("Birth Year must not be less than equal to zero ,it should 4 digit");
        }
        this._birthYear = birthYear;
    }
}

class AdhocEmployee extends Employee {

    private _workingHour: number;

    constructor(_name, _color, _birthYear, _workingHour) {
        super(_name, _color, _birthYear);
        this._workingHour = _workingHour;
    }


    get WorkingHour() {
        return this._workingHour;
    }

    set Workinghour(workinghour: number) {
        this._workingHour = workinghour;
    }
}

let employees = new Employee('saroj', 'fare', 1988);
console.log(employees);
let name = employees.name;
console.log(name);
employees.name = 'yfyugui';
console.log(employees.name + " " + employees.color + " " + employees.birthYear);

let emp = new AdhocEmployee('dsaf', 'black', 2889, 24);
console.log(emp);
console.log('name :' + emp.name + ' color :' + emp.color + ' birth_Year : ' + emp.birthYear + ' working_hour : ' + emp.WorkingHour);
