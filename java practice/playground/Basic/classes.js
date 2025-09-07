class Student {
    submit() {
        console.log(this.name + " form is submite");

    }
    cancel() {
        console.log(this.name + " form is canced");

    }

    fill(givenName) {
        this.name = givenName;
    }
}

let anshu = new Student;
anshu.fill("anshu");
let munish = new Student;
munish.fill("munish");
munish.submit();
munish.cancel();
anshu.submit();