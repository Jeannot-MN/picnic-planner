export function getNextWeekendDates(asOfDate) {
    return isDateOnSaturday(asOfDate) ? {
        saturday: new Date(new Date(asOfDate).setDate(asOfDate.getDate() + 7)),
        sunday: new Date(new Date(asOfDate).setDate(asOfDate.getDate() + 8))
    } : {
        saturday: new Date(new Date(asOfDate).setDate(asOfDate.getDate() - asOfDate.getDay() + 6)),
        sunday: new Date(new Date(asOfDate).setDate(asOfDate.getDate() - asOfDate.getDay() + 7))
    }
}

export function formatDateToYYYYMMDD(date, separator = '/') {
    return `${date.getFullYear()}${separator}${date.getMonth() + 1}${separator}${date.getDate()}`;
}

function isDateOnSaturday(date) {
    return date.getDay() === 6;
}