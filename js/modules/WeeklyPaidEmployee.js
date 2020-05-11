import Employee from "./Employee.js";


//Subclasses
class WeeklyPaidEmployee extends Employee
{

    hourlyRate;
    hoursWorked;

    constructor(fn,ln,d,hr,hw)
    {
        super(fn,ln,d);
        this.hourlyRate=hr;
        this.hoursWorked=hw;
    }





}

export default WeeklyPaidEmployee;