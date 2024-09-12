let passengerData = null;
let survivorCount = 0;
let nonSurvivorCount = 0;
let scrollTopButton = document.getElementById("scroll-button");


// Function to fetch and parse JSON
async function fetchJSON() {
    const response = await fetch('Resources/titanicDF.json');
    const data = await response.json();
    return data;
}

// Function to generate a random name and store passenger data
async function generateRandomName() {
    const titanic_passengers = await fetchJSON();
    const randomIndex = Math.floor(Math.random() * titanic_passengers.length);
    passengerData = titanic_passengers[randomIndex];

    // Display the random name
    const randomName = `${passengerData['first name']} ${passengerData['last name']}`;
    document.getElementById('random-name').textContent = randomName;
}

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Function to reveal 'age' on button1 click
document.getElementById('button1').addEventListener('click', () => {
    if (passengerData) {
        const age = passengerData['age'] !== null && passengerData['age'] !== undefined ? passengerData['age'] : 'Unknown';
        document.getElementById('age-info').textContent = `${age}`;
    } else {
        document.getElementById('age-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'country' on button2 click
document.getElementById('button2').addEventListener('click', () => {
    if (passengerData) {
        const country = passengerData['country'] !== null && passengerData['country'] !== undefined ? passengerData['country'] : 'Unknown';
        document.getElementById('country-info').textContent = `${country}`;
    } else {
        document.getElementById('country-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'embarked' on button3 click
document.getElementById('button3').addEventListener('click', () => {
    if (passengerData) {
        const embarked = passengerData['embarked'] !== null && passengerData['embarked'] !== undefined ? passengerData['embarked'] : 'Unknown';
        document.getElementById('boarding-info').textContent = `${embarked}`;
    } else {
        document.getElementById('boarding-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'sibsp' on button4 click
document.getElementById('button4').addEventListener('click', () => {
    if (passengerData) {
        const sibsp = passengerData['sibsp'] !== null && passengerData['sibsp'] !== undefined ? passengerData['sibsp'] : 'Unknown';
        document.getElementById('sibsp-info').textContent = `${sibsp}`;
    } else {
        document.getElementById('sibsp-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'parch' on button5 click
document.getElementById('button5').addEventListener('click', () => {
    if (passengerData) {
        const parch = passengerData['parch'] !== null && passengerData['parch'] !== undefined ? passengerData['parch'] : 'Unknown';
        document.getElementById('parch-info').textContent = `${parch}`;
    } else {
        document.getElementById('parch-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'class' on button6 click
document.getElementById('button6').addEventListener('click', () => {
    if (passengerData) {
        const class1 = passengerData['class'] !== null && passengerData['class'] !== undefined ? passengerData['class'] : 'Unknown';
        document.getElementById('class-info').textContent = `${class1}`;
    } else {
        document.getElementById('class-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'fare' on button7 click
document.getElementById('button7').addEventListener('click', () => {
    if (passengerData) {
        const fare = passengerData['fare'] !== null && passengerData['fare'] !== undefined ? passengerData['fare'] : 'Unknown';
        document.getElementById('fare-info').textContent = `${fare}`;
    } else {
        document.getElementById('fare-info').textContent = "Please generate a random name first.";
    }
});

// Function to reveal 'survived' status on button8 click
document.getElementById('button8').addEventListener('click', () => {
    if (passengerData) {
        const survivedStatus = passengerData['survived'];

        // Display survival status
        document.getElementById('survival-info').textContent = survivedStatus ? `${survivedStatus}` : 'Survival status: Unknown';

        // Update counters based on survival status
        if (survivedStatus === 'yes') {
            survivorCount++;
            document.getElementById('survivor-count').textContent = `Survivors: ${survivorCount}`;
        } else if (survivedStatus === 'no') {
            nonSurvivorCount++;
            document.getElementById('non-survivor-count').textContent = `Non-Survivors: ${nonSurvivorCount}`;
        }
        
    } else {
        document.getElementById('survival-info').textContent = "Please generate a random name first.";
    }
});

// ---------------------------------------------------------------------------------------- // 
// Clears everything on the page by reloading the index
// Add event listener for the button click
document.getElementById('index-button').addEventListener('click', () => {
    // Redirect to the index page
    window.location.href = 'index.html';
});

// ---------------------------------------------------------------------------------------- // 
// Back to Top Button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;

  // Clear the outputs from other buttons
  document.getElementById('random-name').textContent = '';
  document.getElementById('age-info').textContent = '';
  document.getElementById('country-info').textContent = '';
  document.getElementById('boarding-info').textContent = '';
  document.getElementById('sibsp-info').textContent = '';
  document.getElementById('parch-info').textContent = '';
  document.getElementById('class-info').textContent = '';
  document.getElementById('fare-info').textContent = '';
  document.getElementById('survival-info').textContent = '';
}