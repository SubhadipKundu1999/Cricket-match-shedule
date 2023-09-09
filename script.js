// Sample data for matches (You can replace this with your actual data)
const All=[
    { matchNumber: 1, team1: "Footbal Team", team2: "Holaigora Football team" , time:'10:00'},
    { matchNumber: 2, team1: "Kumra Football team", team2: "Isha 11 Bankura",time:'10:30' },
    { matchNumber: 3, team1: "Bajrang11 Juniour Team", team2: "Maltor The General Club", time:'11:00' },
    { matchNumber: 4, team1: "Maa Mansa Juniour Club", team2: "Sitladi Football Team", time:'11:30' },
    { matchNumber: 5, team1: "Gaira Maa Tara", team2: "Mankanali Football Team", time:'12:00' },
    { matchNumber: 6, team1: "Balaram Sevenstar, Khatra", team2: "Mora ShivShankar Club", time:'12:30' },
    { matchNumber: 7, team1: "Katabani Football Team", team2: " Ladapur Football Team", time:'1:00' },
    { matchNumber: 8, team1: "Chatna Islampur Manchaster Club", team2: "Young Sporting Club", time:'1:30' }
]
const groupA =All.slice(0,4);

const groupB = All.slice(4,8)


// Function to generate HTML for match schedule
function generateMatchSchedule(group, groupElement) {
    const matchesContainer = groupElement.querySelector(".matches");
    matchesContainer.innerHTML = ""; // Clear existing content

    group.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match-item");
        matchDiv.innerHTML = `
            <p>Match ${match.matchNumber}</p>
            <p style="font-size:16px ;color:green; font-weight:600">${match.team1}<span style=" color:red">vs.</span>  ${match.team2}</p>
        `;
        matchesContainer.appendChild(matchDiv);
    });
}

// Call the function to populate match schedule for Group A
const groupAElement = document.getElementById("group-a");
generateMatchSchedule(groupA, groupAElement);

// Call the function to populate match schedule for Group B
const groupBElement = document.getElementById("group-b");
generateMatchSchedule(groupB, groupBElement);


// playsound
function playClickSound() {
    const clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0; // Rewind the audio to the beginning
    clickSound.play();
}



// Function to open the match details modal
function openMatchModal(matchNumber, team1, team2, time) {
    const modal = document.getElementById("match-modal");
    const matchDetails = document.getElementById("match-details");

    // Populate modal content with match details
    matchDetails.innerHTML = `
        <p style='color:blue'>Match Number: ${matchNumber}</p>
        <p   style='color:green'>Teams: ${team1} vs. ${team2}</p>
        <p  style='color:red ;font-weight:600'>${time}</p>
        <!-- Add more match details here -->
    `;

    modal.style.display = "block";
}

// Function to close the match details modal
function closeMatchModal() {
    const modal = document.getElementById("match-modal");
    modal.style.display = "none";
}

// Add click event listeners to each match item
const matchItems = document.querySelectorAll(".match-item");
matchItems.forEach((matchItem, index) => {
    matchItem.addEventListener("click", () => {
        playClickSound()
        const match = All[index];
        openMatchModal(match.matchNumber, match.team1, match.team2, match.time);
    });

});


// Close modal when the close button is clicked
const closeModalButton = document.querySelector(".close-modal");
closeModalButton.addEventListener("click", closeMatchModal);

// Close modal when the background overlay is clicked
window.addEventListener("click", (event) => {
    const modal = document.getElementById("match-modal");
    if (event.target === modal) {
        closeMatchModal();
    }

});


