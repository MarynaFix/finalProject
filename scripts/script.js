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
};




// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () =>
  renderEvents("eventsCards", events)
);
document.addEventListener("DOMContentLoaded", () =>
  renderEvents("eventsOnlineCards", onlineEvents)
);
document.addEventListener("DOMContentLoaded", () =>
  renderCategories("categoriesContainer", categoriesCards)
);