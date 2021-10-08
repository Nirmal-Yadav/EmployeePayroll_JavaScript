class EmployeePayrollData {
    id;
    salary;
    gender;
    startdate;

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){
        return this._name
    }
    set name(name){
        console.log("setting name : "+name)
        this._name=name;
    }
    toString(){
        return "id= "+this.id +", name = " +this.name + ", salary = " +this.salary;
    }
}
let employeePayrollData=new EmployeePayrollData(1,"mark",30000);
console.log(employeePayrollData.toString());
//employeePayrollData.name="john";

employeePayrollData.id=0
employeePayrollData.name="jeff"
console.log(employeePayrollData.toString());