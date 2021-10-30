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
        return !this.isDismiss ? this.marks : (console.log("ОТЧИСЛЕН"), null)
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

const andrew = new BudgetStudent("Київський політехнічний інститут", 2, "Андрій Петров")