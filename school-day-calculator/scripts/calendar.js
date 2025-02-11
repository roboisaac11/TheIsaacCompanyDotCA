class SchoolCalendar {
    constructor(debugMode = false) {
        this.calendar = {};
        this.debugMode = debugMode;
    }

    getCalendar(calendarData) {
        try {
            this.calendar = JSON.parse(calendarData);
        } catch (error) {
            throw new Error("Error parsing calendar data");
        }
    }

    getMonthsBetween(startMonth, endMonth) {
        const months = [
            "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
            "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
        ];
        const startIndex = months.indexOf(startMonth);
        const endIndex = months.indexOf(endMonth);

        if (startIndex <= endIndex) {
            return months.slice(startIndex, endIndex + 1);
        } else {
            return months.slice(startIndex).concat(months.slice(0, endIndex + 1));
        }
    }

    daysTill(startDate, endDate, excludeDaySix = true, excludeDayThree = true, excludeExams = true) {
        const [startMonth, startDay] = startDate;
        const [endMonth, endDay] = endDate;

        const months = this.getMonthsBetween(startMonth, endMonth);

        console.log("Months:", months);

        let schoolDays = [];

        if (startMonth == endMonth && startDay >= endDay - 1) {
            //console.log("Error: startDate equal to or after endDate");
            return 0;
        }

        // Gather school days from the relevant months
        for (let month of months) {
            schoolDays = schoolDays.concat(this.calendar[month]);
        }

        // Trim school days before startDay
        schoolDays = schoolDays.slice(startDay + 1);

        // Trim school days after endDay (including endDay)
        const endMonthDays = this.calendar[endMonth];
        const beyond = endMonthDays.length - endDay;

        schoolDays = schoolDays.slice(0,  schoolDays.length - beyond);

        console.log("School Days:", schoolDays);

        // Count valid school days
        let daysAtSchool = 0;

        for (let i = 0; i < schoolDays.length; i++) {
            const day = schoolDays[i];

            if (day === 0) {
                // It's a weekend or holiday
                console.log("Skipping weekend or holiday");
                continue;
            } else if (day == 6 && excludeDaySix) {
                // Exclude Day Six if requested
                console.log("Skipping Day six");
                continue;
            }
            else if (day == 3 && excludeDayThree) {
                    // Exclude Day Six if requested
                    console.log("Skipping Day three");
                    continue;

            } else if (day.toString().endsWith("11") && excludeExams) {
                // Exclude exams
                console.log("Skipping exams");
                continue;
            } else if (day.toString().endsWith("00")) {
                // It's a day off
                console.log("Skipping day off");
                continue;
            } else {
                daysAtSchool += 1; // Count as a school day
            }
        }

        return daysAtSchool;
    }
}

// 6, 1, 0, 0, 2, 3, 4, 5, 6, 0, 0, 1, 2, 3, 4, 5, 0, 0, 6, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6

// 6, 1, 0, 0, 2, 3, 4, 5, 6, 0, 0, 1, 2, 3, 4, 5, 0, 0, 6, 1, 2
