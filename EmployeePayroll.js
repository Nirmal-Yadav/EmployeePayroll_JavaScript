
const IS_FULL_TIME=2;
const IS_PART_TIME=1;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const NUM_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=120;

function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
       
    case IS_FULL_TIME:
       return FULL_TIME_HOURS;
      
    default:
      return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOURS;
}
let totalWorkingDays=0;
let totalEmpHrs=0;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();
let empDailyHrsMap=new Map();
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs =getWorkingHours(empCheck);
    totalEmpHrs = empHrs + totalEmpHrs;
   empDailyHrsAndWageArr.push({dayNum:totalWorkingDays,
                              dailyHours:empHrs,
                             dailyWage:calcDailyWage(empHrs),
                             toString(){
                                 return ' \nday ' +this.dayNum+ ' , => workingHours is ' + this.dailyHours +
                                 ' , and wage earned = ' +this.dailyWage
                             }
   });
}
let empWage=calcDailyWage(totalEmpHrs);
console.log( "empHours = " +totalEmpHrs+ " employee Wage = " +empWage + " total days " +totalWorkingDays );
console.log("empDailyWageArr = "+empDailyWageArr)


//uc10 object

console.log("uc10 : " +empDailyHrsAndWageArr)

//uc11a

let totalWages = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
.reduce((totalWage , dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);

let totalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                .reduce((totalHours,dailyHrsAndWage)=> totalHours += dailyHrsAndWage.dailyHours,0);
console.log("uc11A totalHours :  " +totalHours+ " , total wages : " +totalWages)

//uc11b

 empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
.forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDaysStrArr = empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
.map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("uc11c partWorkingDays : " +partWorkingDaysStrArr)

let nonWorkingDays = empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("uc11d nonWorkingdayNum = " +nonWorkingDays)