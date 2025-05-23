// ==============================
// 🌱 Sélections
// ==============================

const menuItems = document.querySelectorAll("nav a");
let lastId = null;

// Liste des sections ciblées par les liens
const scrollItems = Array.from(menuItems)
  .map(link => {
    const id = link.getAttribute("href");
    return document.querySelector(id);
  })
  .filter(item => item !== null); // filtrer les sections inexistantes

// ==============================
// 🧲 Scroll Event
// ==============================

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  // Trouver la section actuelle (la plus basse visible)
  const current = scrollItems.filter(section => {
    return section.offsetTop < scrolled + 100; // +100 pour anticiper un peu
  });

  const currentSection = current[current.length - 1];
  const id = currentSection ? currentSection.id : "";

  if (lastId !== id) {
    lastId = id;

    // Nettoyage
    menuItems.forEach(link => link.classList.remove("active"));

    // Sélection du lien actif
    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
});
