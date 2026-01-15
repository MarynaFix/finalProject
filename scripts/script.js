class EventItem {
  constructor(image, title, category, distance, dateString, attending, price) {
    this.image = image;
    this.title = title;
    this.category = category;
    this.distance = distance;
    this.date = dateString;
    this.attending = attending;
    this.price = price;
  }

  toCardElement() {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${this.image}" alt="${this.title}" class="event-cardImg">
      <div class="event-card_body">
        <h3 class="event-card_title">${this.title}</h3>
        <p class="event-card_meta">${this.category} ${this.distance} </p>
      <div class="kalendar">
      <img src="./assets/pictures/kalendar.svg" alt="Calendar Icon" class="calendarIcon">
        <p class="event-card_date">${this.date}</p></div>
       <div class="event-card_info">
       <img src="./assets/pictures/going.svg" alt="Attending Icon" class="attendingIcon">
       <p class="attending">${this.attending}</p>
       <img src="./assets/pictures/ticket.svg" alt="Price Tag Icon" class="priceTagIcon">
       <p    class="price ${this.isFree() ? "free" : ""}">${this.price}</p>
       </div> 
      </div>
    `;
    return card;
  }

  isFree() {
    return String(this.price).toLowerCase() === "free";
  }
}

const events = [
  new EventItem(
    "./assets/images/Link.png",
    "Day Trading Idea and Strategy",
    "Business",
    "5 km",
    "Mon, Mar 18 · 7:00 PM PDT",
    "1 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/1.png",
    " Let's Talk Networking: JPMorgan Chase in Palo Alto",
    "Business",
    "25 km",
    "Tue, Mar 19 · 5:00 PM PDT",
    "41 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/2.png",
    " Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    "Technology",
    "online",
    "Wed, Mar 13 · 6:00 PM PDT",
    "40 going",
    "$Free"
  ),
  new EventItem(
    "./assets/images/3.png",
    "INFORMS San Francisco Chapter In-Person Event",
    "Health and Wellbweing",
    "50 km",
    "Thu, Mar 28 · 5:00 PM PDT",
    "41 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/4.png",
    " AI Wednesdays - Meet and Greet!",
    "Technology",
    "5 km",
    "Wed, Mar 13 · 6:30 PM PDT",
    "29 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/5.png",
    " AI Wednesdays - Meet and Greet!",
    "Technology",
    "5 km",
    "Wed, Mar 13 · 6:30 PM PDT",
    "29 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/6.png",
    " Free Christian Singles' Dinner",
    "Hobbies and Passions",
    "10 km",
    "Fri, Mar 29 · 6:00 PM PDT",
    "11 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/7.png",
    " In-person: Deep Dive intoRAG Architectures (Foodserved)",
    "Hobbies and Passions",
    "50 km",
    "Thu, Mar 14 · 5:00 PM PDT",
    "16 going",
    "Free"
  ),
];

const onlineEvents = [
  new EventItem(
    "./assets/images/8.png",
    " Amazing On-Demand 15Min Interviews with Top Coaches and Speakers",
    "Business",
    "25 km",
    "Thu, Mar 14 · 6:00 PM PDT",
    "3 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/9.png",
    "  Vision Pro Developers  Online Meetup",
    "Technology",
    "25 km",
    "Wed, Mar 13 · 7:00 PM PDT",
    "51 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/10.png",
    " Significant MusicalMoments",
    "Hobbies and Passions",
    "10 km",
    "Wed, Mar 13 · 6:00 PM PDT",
    "16 going",
    "Free"
  ),
  new EventItem(
    "./assets/images/11.png",
    " SFREE Webinar : Introduction to Power BI",
    "Technology",
    "10 km",
    "Thu, Mar 14 · 5:30 PM PDT",
    "33 going",
    "Free"
  ),
];

class EventnewYork {
  constructor(
    image,
    dateString,
    title,
    category,
    distance,
    attending,
    type = "In-person"
  ) {
    this.image = image;
    this.date = dateString;
    this.title = title;
    this.category = category;
    this.distance = distance;
    this.attending = attending;
    this.type = type;
  }
  toCardNY() {
    const card = document.createElement("div");
    card.className = "eventNY-card";
    card.innerHTML = `
      <img src="${this.image}" alt="${this.title}" class="eventNY-cardImg">
      <div class="eventNY-card_body">
      <p class="eventNY-card_date">${this.date}</p>
        <h3 class="eventNY-card_title">${this.title}</h3>
        <p class="eventNY-card_meta">${this.category} ${this.distance} </p>
       <p class="attending">${this.attending} attendees</p>
       </div> 
      </div>
    `;
    return card;
  }
}
const eventsNY = [
  new EventnewYork(
    "./assets/images_page2/1.png",
    "Wed, Mar 13 · 11:30 PM UTC",
    "All Nations - Manhattan Missions Church Bible Study",
    "Hobbies and Passions",
    "5 km",
    "10",
    "In-person"
  ),
  new EventnewYork(
    "./assets/images_page2/2.png",
    "Sat, Mar 23 · 3:00 PM UTC",
    "INFJ Personality Type - Coffee Shop Meet & Greet",
    "Hobbies and Passions",
    "25 km",
    "99",
    "In-person"
  ),
  new EventnewYork(
    "./assets/images_page2/3.png",
    "Wed, Mar 13 · 11:30 PM UTC",
    "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    "Technology",
    "50 km",
    "43",
    "In-person"
  ),
  new EventnewYork(
    "./assets/images_page2/4.png",
    "Wed, Mar 13 · 11:30 PM UTC",
    "Book 40+ Appointments Per Month Using AI and Automation",
    "Technology",
    "Online",
    "",
    "Online"
  ),
  new EventnewYork(
    "./assets/images_page2/5.png",
    "Wed, Mar 13 · 11:30 PM UTC",
    "Day All Nations - Manhattan Missions Church Bible Study Idea and Strategy",
    "Hobbies and Passions",
    "Online",
    "77",
    "Online"
  ),
  new EventnewYork(
    "./assets/images_page2/6.png",
    "Thu, Mar 14 · 11:00 PM UTC",
    "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    "Hobbies and Passions",
    "Online",
    "140",
    "Online"
  ),
];

function renderEventsforSecondPage(containerId, eventsArray) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  eventsArray.forEach((ev) => container.appendChild(ev.toCardNY()));
}
// Render helper
function renderEvents(containerId, eventsArray) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  eventsArray.forEach((ev) => container.appendChild(ev.toCardElement()));
}

const categoriesCards = [
  { image: "./assets/icons/traveloutdoor.svg", title: "Travel and Outdoor" },
  {
    image: "./assets/icons/socialactivities.svg",
    title: "Social Activities",
  },
  {
    image: "./assets/icons/hobbiespassions.svg",
    title: "Hobbies and Passions",
  },
  {
    image: "./assets/icons/sportsfitness.svg",
    title: "Sports and Fitness",
  },
  {
    image: "./assets/icons/healthwellness.svg",
    title: "Health and Wellbeing",
  },
  { image: "./assets/icons/technology.svg", title: "Technology" },
  { image: "./assets/icons/artculture.svg", title: "Art and Culture" },
  { image: "./assets/icons/games.svg", title: "Games" },
];

function renderCategories(containerId, categoriesArray) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  categoriesArray.forEach((category) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <img src="${category.image}" alt="${category.title}" class="category-cardImg">
      <p class="category-card_title">${category.title}</p>
    `;
    container.appendChild(card);
  });
}

function filterEvents() {
  const typeFilter = document.getElementById("typeFilter").value;
  const distanceFilter = document.getElementById("distanceFilter").value;
  const categoryFilter = document.getElementById("categoryFilter").value;

  let filteredEvents = eventsNY.filter((event) => {
    const matchType = typeFilter === "All" || event.type === typeFilter;
    const matchDistance =
      distanceFilter === "All" || event.distance === distanceFilter;
    const matchCategory =
      categoryFilter === "All" || event.category === categoryFilter;

    return matchType && matchDistance && matchCategory;
  });

  renderEventsforSecondPage("eventsNYCards", filteredEvents);
}

function populateFilters() {
  const categories = [...new Set(eventsNY.map((event) => event.category))];
  const categoryFilter = document.getElementById("categoryFilter");
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  
  const distances = [...new Set(eventsNY.map((event) => event.distance))];
  const distanceFilter = document.getElementById("distanceFilter");
  distances.forEach((distance) => {
    const option = document.createElement("option");
    option.value = distance;
    option.textContent = distance;
    distanceFilter.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEvents("eventsCards", events);
  renderEvents("eventsOnlineCards", onlineEvents);
  renderCategories("categoriesContainer", categoriesCards);
  renderEventsforSecondPage("eventsNYCards", eventsNY);

 
  const typeFilter = document.getElementById("typeFilter");
  const distanceFilter = document.getElementById("distanceFilter");
  const categoryFilter = document.getElementById("categoryFilter");

  if (typeFilter && distanceFilter && categoryFilter) {
    populateFilters();
    typeFilter.addEventListener("change", filterEvents);
    distanceFilter.addEventListener("change", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
  }
});
