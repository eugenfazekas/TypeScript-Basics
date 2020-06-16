var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 4] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 5] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 6] = "SAT";
    //SUN = 100,MON,TUE,WED,THU,FRI,SAT
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.MON;
if (day === DaysOfWeek.MON) {
    console.log('Got to go to work');
}
