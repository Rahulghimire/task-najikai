class Dog{
    constructor (_name,_breed){
        this.name = _name;
        this.breed = _breed;
    }
    printDesc (){
        console.log('The name of Dog is ${this.name} and breed is ${this.breed}');
    }
    bark (){
        console.log('The Dog ${this.name} is barking');
    }
}
let myDog1 = new Dog('Sasy','Sepherd');
let myDog2 = new Dog('Sally','Bull Dog');
myDog1.printDesc();
myDog2.printDesc();

