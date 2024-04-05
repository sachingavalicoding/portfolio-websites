const menubar = document.getElementById("menubar");
const smNav = document.getElementById("smNav");
menubar.addEventListener("click", () => {
  if (smNav.classList.contains("hidden")) {
    smNav.classList.add("flex");
    smNav.classList.remove("hidden");
  } else {
    smNav.classList.add("hidden");
    smNav.classList.remove("flex");
  }
});

const data = [
  {
    title: "Responsive Website Design",
    subtitle: "Built with HTML5, CSS3, and Bootstrap",
    image: "./images/portfolio1.jpg",
  },
  {
    title: "E-commerce Platform",
    subtitle: "Developed using React.js and Node.js",
    image: "./images/portfolio2.jpg",
  },
  {
    title: "Blog Application",
    subtitle: "Created with Django and PostgreSQL",
    image: "./images/portfolio3.jpg",
  },
  {
    title: "Portfolio Website",
    subtitle: "Designed with Vue.js and Tailwind CSS",
    image: "./images/portfolio4.jpg",
  },
  {
    title: "Online Learning Platform",
    subtitle: "Built with Angular and MongoDB",
    image: "./images/portfolio5.png",
  },
  {
    title: "Social Media App",
    subtitle: "Developed using React Native and Firebase",
    image: "./images/portfolio6.jpg",
  },
  {
    title: "Content Management System",
    subtitle: "Created with WordPress and PHP",
    image: "./images/portfolio1.jpg",
  },
  {
    title: "Job Board Website",
    subtitle: "Designed with Flask and SQLite",
    image: "./images/portfolio2.jpg",
  },
  {
    title: "Real Estate Listing Platform",
    subtitle: "Developed using Laravel and MySQL",
    image: "./images/portfolio3.jpg",
  },
  {
    title: "Online Portfolio Builder",
    subtitle: "Built with React.js and Firebase",
    image: "./images/portfolio4.jpg",
  },
];

const projectsection = document.getElementById("projectsection");

data.map((card) => {
  let div = document.createElement("div");
  div.innerHTML = `
         <div class="card ">
          <img
            class="px-4 py-2 rounded-lg"
            src= ${card.image}
            alt="card"
          />
          <div class="px-6 py-1">
            <h2 class="text-xl font-semibold"> ${card.title} </h2>
            <p class="text-slate-300">
             ${card.subtitle}
            </p>
          </div>
        </div>
    `;
  projectsection.appendChild(div);
});
