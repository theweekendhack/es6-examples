
//Superclass or Parent Class
class Employee 
{

        //properties
        firstName;
        lastName;
        age;

        //constructor
        constructor(fn,ln="no value",a="no value")
        {
            this.firstName=fn;
            this.lastName=ln;
            this.age=a;
        }


        //methods
        getFullName()
        {
            return `${this.firstName}  ${this.lastName}`;
        }


}


export default Employee;