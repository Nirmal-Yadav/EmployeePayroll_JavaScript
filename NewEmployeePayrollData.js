class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

   constructor(...params){
       this.id=params[0]
       this.name=params[1]
       this.salary=params[2]
       this.gender=params[3]
       this.startDate=params[4]

   }
    get name(){
        return this._name
    }
    set name(name){
        console.log("setting name : "+name)
        this._name=name;
    }
    toString(){
        return "id= "+this.id +", name = " +this.name + ", salary = " +this.salary 
        +", gender = " +this.gender + ", startDate = " +this.startDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1,"mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";

employeePayrollData.id=0
employeePayrollData.name="jeff"
console.log(employeePayrollData.toString());
let newEmployeePayrollData=new EmployeePayrollData(1,"terrisa",30000,"f",new Date());
console.log(newEmployeePayrollData.toString());