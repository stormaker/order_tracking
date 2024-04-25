export default {
	myVar1: [],
	myFun1 () {
		var today = new Date();
    var dayOfWeek = today.getDay(); // 获取今天是周几，0是周日，1是周一，以此类推
    var daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // 如果是周日，需要减去6天，否则减去(1-dayOfWeek)
    var monday = new Date(today);
    monday.setDate(today.getDate() + daysToMonday);

    // 格式化日期输出，例如：2021-04-19
    var year = monday.getFullYear();
    var month = monday.getMonth() + 1; // getMonth() 返回的月份是从0开始的
    var day = monday.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
	}
	