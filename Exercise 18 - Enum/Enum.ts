enum DaysOfWeek {
	SUN,MON,TUE,WED,THU,FRI,SAT
	//SUN = 100,MON,TUE,WED,THU,FRI,SAT
}

let day: DaysOfWeek;
day = DaysOfWeek.MON
if(day === DaysOfWeek.MON) {
	console.log('Got to go to work');
}