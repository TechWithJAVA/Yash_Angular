class Student {
    private enrolmentNumber: number;
    private studentName: string;
    constructor(enrolmentNumber, studentName) {
        this.enrolmentNumber = enrolmentNumber;
        this.studentName = studentName;
    }

    display = () => console.log(this.enrolmentNumber + ' ' + this.studentName)
}

let student = new Student(1, 'Ram');

student.display();
