class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.isDismiss = false;
    }

    getInfo () {
        return !this.isDismiss ? `Студент ${this.course}го курсу ${this.university}, ${this.fullName}` : `ОТЧИСЛЕН, Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }

    get getMarks () {
        return !this.isDismiss ? this.marks : ( null);
    }

    set setMarks (mark) {
        if (!this.isDismiss) {

            if (mark <= 5 && mark >= 1) {
                this.marks.push(mark)
            } else {
                console.log("Оценка может быть от 1 до 5");
            }

        } else {
            return (console.log("ОТЧИСЛЕН"), null)
        }
    }

    getAverageMark () {
        if (!this.isDismiss) {
            const averageMark = this.marks.reduce((acc, cur) => acc + cur) / this.marks.length;
            return Math.round(averageMark * 10) / 10;
        } else {
            return (console.log("ОТЧИСЛЕН"), null)
        } 
    }

    dismiss () {
        this.isDismiss = true;
        return "ОТЧИСЛЕН"
    }

    recover () {
        this.isDismiss = false;
        return "ВОССТАНОВЛЕН"
    }
}

const Ivan = new Student("Київська академія культури", 3, "Іванов Іван");

document.writeln(`
        Student ${Ivan.fullName} <br> <br>
    Info: ${Ivan.getInfo()} <br>
    Marks: ${Ivan.getMarks} <br>
    Set mark: ${Ivan.setMarks = 5} <br>
    Average mark: ${Ivan.getAverageMark()} <br>
    Dismiss: ${Ivan.dismiss()} <br>
    Marks: ${Ivan.getMarks} <br>
    Info: ${Ivan.getInfo()} <br>
    Recover: ${Ivan.recover()} <br>
    Info: ${Ivan.getInfo()} <br>
    Marks: ${Ivan.getMarks} <br> <br>
`)

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        setInterval(() => this.getScholarship(), 30 * 1000);
    }

    getScholarship () {
        if (!this.isDismiss && (this.getAverageMark() >= 4)) {
            console.log(this.fullName + " начислено 1400 грн стипендии")
        }
    }
}

const Andrew = new BudgetStudent("Київський політехнічний інститут", 2, "Андрій Петров");

document.writeln(`
        Budget student ${Andrew.fullName} <br> <br>
    Info: ${Andrew.getInfo()} <br>
    Set mark: ${Andrew.setMarks = 5} <br>
    Marks: ${Andrew.getMarks} <br>
    Average mark: ${Andrew.getAverageMark()} <br>
    Dismiss: ${Andrew.dismiss()} <br>
    Marks: ${Andrew.getMarks} <br>
    Info: ${Andrew.getInfo()} <br>
    Recover: ${Andrew.recover()} <br>
    Info: ${Andrew.getInfo()} <br>
    Marks: ${Andrew.getMarks} <br>
    Scholarship in console
`)