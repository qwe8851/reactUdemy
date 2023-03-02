class Human {
    gender = 'male';

    printMyGender = () =>{
        console.log(this.gender);
    }
}


class Person extends Human{
    // super();  super도 생략 가능
    name = 'Max';
    

    printMyName = () =>{
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();