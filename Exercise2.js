var course = {
	name: "WIN Program", 
	awesome: true, 
	teachers: ["Zach", "Kaley", "George"], 
	director: {
		name: "Pasha",
		company: "Carolina Fintech Hub"
	},
	students: [

	{
		name: "Carlton", 
		computer: {
			OS: "Windows", 
			type: "laptop"

		}
	},
	{	
		name: "Yami",
		computer: {
			OS: "Windows",
			type: "laptop"
		}


	},
	{
		name: "Nicolas", 
		computer: {
			OS: "Windows",
			type: "laptop"
		}
	}
	], 
	preReqs: {
		skills: ['ability to learn', 'hard worker'], 
		equipment:{
			laptop: true, 
			OSOptions: ["Window", "MacOS"]
		}
	}
};
//Answers to Exercise 2
console.log("A1:" + course.name);
console.log("A2:" + course.teachers[1]; 
console.log("A3:" + course.students[0].name);

for (var i = 0; i < course.students.length; i++) {
	if (course.students[i].name =="Yami") {
		console.log("A4:" + course.students[i].computer.type);

	}
}

// console.log(course.preReqs.equipment);
// console.log("A6:" + course.preReqs.equipment);
// var OSOptions = course.preReqs.equipment.OSOptions.