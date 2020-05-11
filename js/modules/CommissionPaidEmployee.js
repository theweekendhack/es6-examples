import Employee from "./Employee.js";


//subclass or children
class CommissionPaidEmployee extends Employee
{


    fixedSalary;
    commissionRate=0.05;
    totalSales;

        
    constructor(fn,ln,d,fs,ts)
    {
        super(fn,ln,d);
        this.fixedSalary=fs;
        this.totalSales=ts;
    }


    


}

export default CommissionPaidEmployee;