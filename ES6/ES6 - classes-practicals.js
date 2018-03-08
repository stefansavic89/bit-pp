
// Create a class Person with properties name and surname. 

class Person {
    // Write a constructor of the Person class. 
    constructor( name, surname){
        this.name = name;
        this.surname = surname;
    }

    // Add a method printPersonData that prints out person’s name and surname. 
     printPersonData(){
        console.log(`${this.name} ${this.surname}`);
    }
}
let michaelJordan = new Person( "Michael" , "Jordan");
michaelJordan.printPersonData();

// Create a class Programmer with properties name, surname, and languages that extends Person class. Property languages represents programming languages that the programmer knows. 

class Programer extends Person{

    // Write a constructor of the Programmer class. Don’t forget to use parent constructor to complete the job. 
  constructor( name, surname, languages){
       super( name, surname);
        this.languages = languages;
    }
    // Add a method printProgramerData that prints out name and surname and all the programming languages that the programmer knows. 
    printPersonData(){
        super.printPersonData();
        console.log(this.languages);
    }

    // Add a method learnedNewLanguage that extends the list of the programming languages with the name of the new language.
    learnedNewLanguage(pLanguage){
        this.languages.push(pLanguage);
    }

}
let majklProgramer = new Programer( "Majkl", "Turtic", ["PHP", "JS"]);

majklProgramer.learnedNewLanguage("Java");

majklProgramer.printPersonData();

console.log(majklProgramer);




