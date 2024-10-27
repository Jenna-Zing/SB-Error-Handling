function mysteryOperation() {
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5) {
		console.log("The operation is completed successfully!");
	}
	else {
		throw new Error("The operation is failed mysteriously!");
	}
}

const numberOfOperations = 20;
let numberOfVacationDaysEarned = 0;

// number of vacation days given per operation based on the outcome
const daysForSuccess = 13;
const daysForFailure = 1;
const daysForAttending = 3;

for (let i = 0; i < numberOfOperations; i++) {
	try {
		mysteryOperation();
		// only reaches here if the mission was successful
		numberOfVacationDaysEarned += daysForSuccess;
	} catch (error) {
		// only reaches here if the error was thrown for mission failure
		console.log(error.message);
		numberOfVacationDaysEarned += daysForFailure;
	} finally {
		// "regardless of the outcome", this always runs.
		numberOfVacationDaysEarned += daysForAttending;
	}
}

console.log("You have earned ", numberOfVacationDaysEarned, " days of vacation!");
