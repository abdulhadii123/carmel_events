/** @format */

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.classList.contains("opacity-0")) {
    mobileMenu.classList.remove("opacity-0", "invisible");
    mobileMenu.classList.add("opacity-100");
  } else {
    mobileMenu.classList.remove("opacity-100");
    mobileMenu.classList.add("opacity-0");
    setTimeout(() => {
      mobileMenu.classList.add("invisible");
    }, 300); // Delay should match transition duration
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname; // Get the current page URL

  // Select all navigation links (desktop and mobile)
  const navLinks = document.querySelectorAll(".nav-link, #mobile-menu a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href").replace("./", ""); // Normalize href

    // If the current page matches the link, add active styles
    if (currentPage.endsWith(linkHref) || (currentPage === "/" && linkHref === "index.html")) {
      link.classList.add("text-blue-600", "font-bold"); // Active state
    } else {
      link.classList.remove("text-blue-600", "font-bold");
    }
  });
});

//   slider section
var swiper = new Swiper(".mySwiper", {
loop: true,
slidesPerView: 1,
spaceBetween: 15,
slidesPerGroup: 1,
loopFillGroupWithBlank: false,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
breakpoints: {
  480: { slidesPerView: 1 }, // Mobile: 1 card
  768: { slidesPerView: 2 }, // Tablet: 2 cards
  1024: { slidesPerView: 3 }, // Small laptops: 3 cards
  1280: { slidesPerView: 4.5 }, // Larger screens: 5 cards
},
});

// form section
function addStudentField() {
let container = document.getElementById("student-container");
let index = container.children.length;

// Limit to 10 entries
if (index >= 10) {
  alert("You can only add up to 10 students.");
  return;
}

let div = document.createElement("div");
div.classList.add("flex", "space-x-4", "mt-3", "items-center");

div.innerHTML = `
      <input type="text" name="roll_no_${index}" placeholder="Roll No" class="w-1/4 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
      <input type="text" name="name_${index}" placeholder="Name" class="w-1/3 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
      <input type="number" name="age_${index}" placeholder="Age" class="w-1/4 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
      <button type="button" onclick="removeStudentField(this)" class="text-red-500 hover:text-red-700">❌</button>
  `;
container.appendChild(div);
}

function removeStudentField(button) {
let container = document.getElementById("student-container");
button.parentElement.remove();

// Enable add button if limit is reached and an entry is removed
if (container.children.length < 10) {
  document.querySelector(
    "button[onclick='addStudentField()']"
  ).disabled = false;
}
}






// ===================================================================================================================






const sliderTrack = document.getElementById('slider-track');
const dots = document.querySelectorAll('.dot');

let index = 0; // Slide index
const totalSlides = dots.length; // Number of actual images (not including clone)

// Function to handle sliding
function slideNext() {
  index++;

  // Apply transition for smooth animation
  sliderTrack.style.transition = 'transform 0.5s ease-in-out';

  // Translate the slider based on current index
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;

  // Loop back to the start (without animation) after the clone
  if (index === totalSlides) {
      setTimeout(() => {
          sliderTrack.style.transition = 'none'; // Turn off animation
          index = 0; // Reset index
          sliderTrack.style.transform = `translateX(0%)`; // Move back to the first image
      }, 500); // Wait for the transition to finish
  }

  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
      dot.classList.toggle('bg-blue-500', i === index % totalSlides);
      dot.classList.toggle('bg-gray-300', i !== index % totalSlides);
  });
}

// Auto-slide every 5 seconds
setInterval(slideNext, 5000);

// Handle manual dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
      index = i;
      sliderTrack.style.transition = 'transform 0.5s ease-in-out';
      sliderTrack.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
  });
});

// Initialize dots on page load
updateDots();

// Sample data array for race results (to make it dynamic)
const raceResults = [
  { position: 1, name: "Rahul Sharma", category: "Adult 10KM", timing: "38:20 min" },
  { position: 2, name: "Ananya Ramesh", category: "Student 5KM", timing: "24:15 min" },
  { position: 3, name: "Vikram Das", category: "Adult 5KM", timing: "26:30 min" },
  { position: 4, name: "Sneha Nair", category: "Student 5KM", timing: "28:50 min" },
];

// DOM elements
const searchInput = document.getElementById("search-input");
const resultsTable = document.getElementById("results-table");

// Function to render filtered results
function renderTable(data) {
  resultsTable.innerHTML = ""; // Clear previous results
  data.forEach((result) => {
      const row = document.createElement("tr");
      row.className = "border-t hover:bg-gray-100";
      row.innerHTML = `
          <td class="py-3 px-4">${result.position}</td>
          <td class="py-3 px-4">${result.name}</td>
          <td class="py-3 px-4">${result.category}</td>
          <td class="py-3 px-4">${result.timing}</td>
      `;
      resultsTable.appendChild(row);
  });
}

// Initial render
renderTable(raceResults);

// Filter function (on typing in the search input)
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = raceResults.filter((result) =>
      result.name.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredResults);
});


// JavaScript to handle input or button interactions if needed.
document.querySelector('button').addEventListener('click', () => {
  const input = document.querySelector('input').value;
  if (input) {
      alert(`Downloading certificate for Bib Number: ${input}`);
      // Code to download the certificate can be added here
  } else {
      alert('Please enter your Bib Number.');
  }
});