module.exports.convertDateInto_YYYY_MM_DD = date => {
    let time = new Date(date);
    let year = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDay();
    return year + "/" + month + "/" + day;
};
module.exports.convertDateInto_time_HH_MM = date => {
    let time = new Date(date);
    let hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
    let minutes = time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
    return hours + ":" + minutes;
};
module.exports.convertDateInto_time_HH_MM_PM_AM = date => {
    let time = new Date(date);
    let PMorAM = time.getHours >= 12 ? " PM" : " AM";
    let hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
    let minutes = time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
    return hours + ":" + minutes + PMorAM;
};
module.exports.convertDateIntoRelativeTime = timeStamp => {
    if (timeStamp !== null) {
        let valueDate = new Date(timeStamp);
        var now = new Date(),
            secondsPast = (now.getTime() - valueDate.getTime()) / 1000;
        if (secondsPast < 60) {
            return parseInt(secondsPast) + "s";
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + "m";
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + "h";
        }
        if (secondsPast > 86400) {
            day = valueDate.getDate();
            month = valueDate
                .toDateString()
                .match(/ [a-zA-Z]*/)[0]
                .replace(" ", "");
            year = valueDate.getFullYear() == now.getFullYear() ? "" : " " + valueDate.getFullYear();
            return day + " " + month + year;
        }
    } else {
        return "";
    }
};
