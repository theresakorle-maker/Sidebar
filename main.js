// 1. Hole die benötigten Elemente
const sidebarToggle = document.getElementById('sidebarToggle');
const wrapper = document.getElementById('wrapper');

// 2. Definiere die Funktion, die aufgerufen wird
function toggleSidebar() {
    // Schaltet die CSS-Klasse 'collapsed-sidebar' um
    // Wenn die Klasse da ist, wird sie entfernt (Sidebar öffnet sich)
    // Wenn die Klasse fehlt, wird sie hinzugefügt (Sidebar klappt ein)
    wrapper.classList.toggle('collapsed-sidebar');
}

// 3. Füge den Event Listener zum Button hinzu
sidebarToggle.addEventListener('click', toggleSidebar);

// Optional: Starte mit eingeklappter Sidebar
// wrapper.classList.add('collapsed-sidebar'); 
