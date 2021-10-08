
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


//uc7 for each nd reduce method

let totEmpWage =0;
function sum(dailyWage){
    totEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("uc7 - totalDays = " +totalWorkingDays + " , total hrs "+totalEmpHrs + " , empWage: " +totEmpWage)

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("uc7 = " +empDailyWageArr.reduce(totalWages,0));

//uc7b

let dailyCntr =0;
function mapDayWithWage(dailyWage){
    dailyCntr ++;
    return dailyCntr + " = " +dailyWage +" , ";
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log(" uc7b daily wage map ")
console.log(mapDayWithWageArr);

// uc7c
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log(" uc7c = ");
console.log(fullDayWageArr);

// uc7d

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}

let findFulltimeWageArr=mapDayWithWageArr.find(findFulltimeWage);
console.log("uc7d = ");
console.log(findFulltimeWageArr);

//uc7e

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("60");
}
let isAnyPartTimeWageArr = mapDayWithWageArr.some(isAnyPartTimeWage);
console.log("uc7e = ");
console.log(isAnyPartTimeWageArr)

// uc7f

function isAnyFullTimeWage(dailyWageg){
    return dailyWageg.includes("160")
}
console.log("uc7f = ");
console.log(mapDayWithWageArr.some(isAnyFullTimeWage));

//uc7g

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays
}
console.log("uc7g = ");
console.log(empDailyWageArr.reduce(totalDaysWorked,0));

// uc8

console.log(" uc8 - empWage map totalhrs  " +
            Array.from(empDailyWageMap.values()).reduce(totalWages,0) );

//uc9 arrow function 

const findTotal = (totalVal ,dailyVal) => {
    return totalVal+dailyVal;
}
let totalhours = Array.from(empDailyHrsMap.values())
    .filter(dailyHours => dailyHours > 0)
    .reduce(findTotal,0);
    
let totalsalary = (empDailyWageArr
    .filter(dailyWage => dailyWage > 0))
    .reduce(findTotal,0);

    console.log("uc9 totalHrs = " +totalhours+ " totalWage " +totalsalary )

    //uc9b

    let nonWorkingdays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();

    empDailyHrsMap.forEach((value,key,map) => {
        if(value == 8) fullWorkingDays.push(key);
        if(value == 4) partWorkingDays.push(key);
        else nonWorkingdays.push(key);
    });
    console.log("fullWorkingDays = " +fullWorkingDays)
    console.log("partWorkingDays = " +partWorkingDays)
    console.log(" nonWorkingdays = " +nonWorkingdays)
    
//uc10 object

console.log("uc10 : " +empDailyHrsAndWageArr)