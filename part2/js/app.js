//p1.1. interpolation is connecting a string and a variable together, while concatenation is using two strings
//
//concatenation:
	console.log("I love" + " dogs");

//interpolation:
	let six = 6;
	console.log(`I love ${six}`);

//p1.2. DRY stands for DON'T REPEAT YOURSELF. It's used to make code concise, predictable, and modular. Some examples would be functions and loops
//
//p1.3. Declaring a variable is creating a name for some block of memory, and allocating resources to store some value in that block. Assigning means that we actually give value to this variable. We define a variable when we create a name to reference some value
//
//p1.4. const is reserved for variables that will not have their values changed, let is used when the value will change throughout the code
//
//p1.5. A parent directory is the folder that holds another folder
//
//p1.6. use the man command
//
//p1.7. tab completion uses the tab key to autofill filenames, directories, etc. so we don't have to type long file names but can still have descriptive names
//
//p2.1
	const a = 4;
	const b = 53;
	const c = 57;
	const d = 16;
	const e = 'Kevin';
	console.log(a<b);
	console.log(c>d);
	console.log('Name' === 'Name');
	console.log(a<b<c);
	console.log(a===a<d);
	console.log(e&&'Kevin');
	console.log(48=='48');

//p3.1 Yes, true will always be true and the loop will just keep running because it's never changed
//
//p3.2 No, it will run once and then runProgram is set to false and the loop will exit
//
//p3.3. No, i gets incremented with each loop and the loop will exit once their are 20 A's in letters

	//p4.1. a while loop uses just a boolean expression to determine if a code should continue to run. A for loop does the same, but also allows the user to control a variable to determine if the code should keep running or not
//
//p4.2 

	for(let i = 0;i<1000;i++){
		console.log(i);
	}

//p4.3. initialization, conditional, update

//p4.4.
	for(let i = 999;i>=0;i--){
		console.log(i);
	}

//p4.5

	for(let i = 1;i<=10;9++){
		console.log(`The value of i is: ${i} of 10`);
	}

	
