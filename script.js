// scripts.js

// Dynamic Services
const services = [
  {
    title: "Luxury Facial",
    icon: "fa-spa",
    description: "Deep cleansing and nourishing facial for radiant skin.",
  },
  {
    title: "Home Massage",
    icon: "fa-hands",
    description: "Professional massage delivered at your convenience.",
  },
  {
    title: "Bridal Package",
    icon: "fa-ring",
    description: "Complete bridal prep including makeup and styling.",
  },
  {
    title: "Nail Art & Manicure",
    icon: "fa-hand-sparkles",
    description: "Creative nail styling and care services at your location.",
  },
];

const servicesContainer = document.getElementById("services-container");
if (servicesContainer) {
  services.forEach((service) => {
    servicesContainer.innerHTML += `
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm text-center p-4 border-0">
          <div class="mb-3 text-warning fs-1"><i class="fas ${service.icon}"></i></div>
          <h5 class="fw-bold">${service.title}</h5>
          <p>${service.description}</p>
        </div>
      </div>
    `;
  });
}

// Dynamic Team
const team = [
  {
    name: "Alice M.",
    role: "Lead Stylist",
    photo: "team1.jpg",
  },
  {
    name: "Brian K.",
    role: "Massage Expert",
    photo: "team2.jpg",
  },
  {
    name: "Catherine W.",
    role: "Makeup Artist",
    photo: "team3.jpg",
  },
  {
    name: "Daniel T.",
    role: "Nail Technician",
    photo: "team4.jpg",
  },
];

const teamContainer = document.getElementById("team-members");
if (teamContainer) {
  team.forEach((member) => {
    teamContainer.innerHTML += `
      <div class="col-md-3 text-center">
        <div class="card border-0 shadow-sm">
          <img src="${member.photo}" alt="${member.name}" class="card-img-top rounded-top" />
          <div class="card-body">
            <h5 class="card-title mb-1">${member.name}</h5>
            <p class="text-muted">${member.role}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Dynamic Gallery
const galleryImages = [
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
];

const galleryContainer = document.getElementById("gallery-grid");
if (galleryContainer) {
  galleryImages.forEach((img) => {
    galleryContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <img src="${img}" alt="Gallery Image" class="img-fluid rounded shadow-sm" />
      </div>
    `;
  });
}

// Dynamic Testimonials
const testimonials = [
  {
    name: "Grace N.",
    comment: "Absolutely the best service. Came to my house and made me feel like royalty!",
    image: "client1.jpg",
  },
  {
    name: "James O.",
    comment: "Very professional, arrived on time, and gave the best massage I've had.",
    image: "client2.jpg",
  },
  {
    name: "Lucy A.",
    comment: "They handled my wedding glam—perfectly! Can’t thank you enough.",
    image: "client3.jpg",
  },
];

const testimonialContainer = document.getElementById("testimonials-slider");
if (testimonialContainer) {
  testimonials.forEach((client) => {
    testimonialContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card border-0 shadow-sm h-100 p-3 text-center">
          <img src="${client.image}" alt="${client.name}" class="rounded-circle mb-3" style="width: 80px; height: 80px; object-fit: cover;" />
          <p>"${client.comment}"</p>
          <h6 class="mt-2">${client.name}</h6>
        </div>
      </div>
    `;
  });
}

// Form Validation
const form = document.getElementById("booking-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      alert("Thank you! Your appointment has been submitted.");
      form.reset();
    } else {
      form.classList.add("was-validated");
    }
  });
}
