// function compareTime(timeString1,timeString2)
// {
//     let datetime1 = new Date(timeString1);
//     let datetime2 = new Date(timeString2);
//     return datetime1.getTime()>datetime2.getTime();
// }

function compareTime(timeString1, timeString2) {
    let datetime1 = new Date(timeString1 + 'Z'); // Ensure UTC
    let datetime2 = new Date(timeString2 + 'Z');
    return datetime1.getTime() > datetime2.getTime();
}

module.exports = {
    compareTime
}