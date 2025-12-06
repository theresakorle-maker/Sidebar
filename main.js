// 1. Elemente aus dem HTML abrufen
const sidebar = document.getElementById('mySidebar');
const openBtn = document.getElementById('openSidebarBtn');
const closeBtn = document.getElementById('closeSidebarBtn');

// Funktion zum Öffnen der Sidebar
function openSidebar() {
    // Fügt die Klasse 'open' hinzu, die die CSS-Animation auslöst
    sidebar.classList.add('open');
}

// Funktion zum Schließen der Sidebar
function closeSidebar() {
    // Entfernt die Klasse 'open', wodurch die Sidebar wieder herausgleitet
    sidebar.classList.remove('open');
}

// 2. Event-Listener hinzufügen
// Wenn der Öffnen-Button geklickt wird, rufe openSidebar auf
openBtn.addEventListener('click', openSidebar);

// Wenn der Schließen-Button geklickt wird, rufe closeSidebar auf
closeBtn.addEventListener('click', closeSidebar);
