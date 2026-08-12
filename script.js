// Edit this array to add, remove, or reorder project tiles.
// `image` can point to any local file (e.g. "images/amazfit.jpg") once real assets are ready.
const PROJECTS = [
  { title: "Amazfit", image: "https://picsum.photos/seed/amazfit/900/600" },
  { title: "Grammy Awards", image: "https://picsum.photos/seed/grammy-awards/900/600" },
  { title: "Adidas Football", image: "https://picsum.photos/seed/adidas-football/900/600" },
  { title: "Elle x Anya Taylor-Joy", image: "https://picsum.photos/seed/elle-anya/900/600" },
  { title: "Giant Bicycle", image: "https://picsum.photos/seed/giant-bicycle/900/600" },
  { title: "Rapsody", image: "https://picsum.photos/seed/rapsody/900/600" },
  { title: "Champion", image: "https://picsum.photos/seed/champion/900/600" },
  { title: "Electrolit", image: "https://picsum.photos/seed/electrolit/900/600" },
  { title: "Puma Basketball", image: "https://picsum.photos/seed/puma-basketball/900/600" },
  { title: "Nike", image: "https://picsum.photos/seed/nike/900/600" },
  { title: "Beats by Dre", image: "https://picsum.photos/seed/beats-by-dre/900/600" },
  { title: "Vogue", image: "https://picsum.photos/seed/vogue/900/600" },
  { title: "GQ", image: "https://picsum.photos/seed/gq/900/600" },
  { title: "New Balance", image: "https://picsum.photos/seed/new-balance/900/600" },
  { title: "Jordan Brand", image: "https://picsum.photos/seed/jordan-brand/900/600" },
  { title: "Doja Cat", image: "https://picsum.photos/seed/doja-cat/900/600" },
  { title: "H&M", image: "https://picsum.photos/seed/hm/900/600" },
  { title: "Foot Locker", image: "https://picsum.photos/seed/foot-locker/900/600" },
  { title: "Spotify", image: "https://picsum.photos/seed/spotify/900/600" },
  { title: "ESPN Body Issue", image: "https://picsum.photos/seed/espn-body-issue/900/600" },
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderProjects(projects) {
  const grid = document.querySelector(".project-grid");
  if (!grid) return;

  const markup = projects
    .map(
      (project) => `
      <a class="project-tile" href="#${slugify(project.title)}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <span class="scrim"></span>
        <span class="title">${project.title}</span>
      </a>
    `
    )
    .join("");

  grid.innerHTML = markup;
}

renderProjects(PROJECTS);
