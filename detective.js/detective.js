function mysteryOperation(operationNum) {
    const outcome = Math.random(); // Generates a random number between 0 and 1.

    if (outcome < 0.5) {
        console.log(`Operation #${operationNum} is completed successfully! 13 vacation days added.`);
    }
    else {
        throw new Error(`Operation #${operationNum} failed mysteriously! 1 vacation day added.`);
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
        mysteryOperation(i + 1);
        // only reaches here if the mission was successful
        numberOfVacationDaysEarned += daysForSuccess;
    } catch (error) {
        // only reaches here if the error was thrown for mission failure
        console.log(error.message);
        numberOfVacationDaysEarned += daysForFailure;
    } finally {
        // "regardless of the outcome", this always runs.
        console.log("Three vacation days added for your attendance!");
        numberOfVacationDaysEarned += daysForAttending;
    }
}

console.log("You have earned ", numberOfVacationDaysEarned, " days of vacation!");