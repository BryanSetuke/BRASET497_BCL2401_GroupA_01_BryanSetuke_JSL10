document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: async ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});
// Function to find the most recent book based on publication date
function findMostRecentBook(books) {
    // Corrected logic- Compare the publication date of each book and return the most recent one
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}
// Function to find the intersection (common concepts) between two sets
function findIntersection(setA, setB) {
    // Corrected logic- Calculate the intersection by filtering setA to include only elements also in setB
    const intersection = new Set([...setA].filter(concept => setB.has(concept)));
    return intersection;
}
//Function to navigate the labyrinth based on provided direction
async function navigateLabyrinth(directions) {
    // Corrected logic: Added asynchronous delay between each navigation step for a smooth experience
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000)); //1-second delay between each step
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

