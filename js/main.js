import appData from "./content.js";

// Container for app data
const contentContainer = document.querySelector("#content-container");

// Render App Data
appData.forEach((app) => {
	// Craete a tag
	const a = document.createElement("a");

	// Set href and target attributes
	a.setAttribute("href", `./${app.name}/index.html`);
	a.setAttribute("target", "_blank");

	// Assign classname
	a.className = "inline-block mx-auto";

	// Setting inner HTML
	a.innerHTML = `
  <div id="card"
  class="p-0 bg-navy overflow-hidden rounded-lg shadow-lg flex flex-col justify-between max-w-xs text-dark-khaki transition-transform duration-300 ease-out transform hover:scale-105">
  <img src="./img/${app.img}" alt="${app.imgAlt}">

  <h2 class="text-xl md:text-2xl font-semibold p-2">${app.title}</h2>
</div>
  `;

	// Insert a into container
	contentContainer.appendChild(a);
});
