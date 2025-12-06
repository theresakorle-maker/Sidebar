body {
    margin: 0;
    font-family: sans-serif;
}

#wrapper {
    display: flex; /* Verwenden wir Flexbox, um Sidebar und Content nebeneinander zu legen */
}

/* --- Sidebar Styling --- */
#sidebar {
    width: 250px; /* Die volle Breite der geöffneten Sidebar */
    height: 100vh; /* Volle Höhe des Viewports */
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    /* Wichtig: Definiert die Animation für die Verschiebung */
    transition: margin-left 0.3s ease;
}

/* --- Hauptinhalt Styling --- */
#content {
    flex-grow: 1; /* Nimmt den restlichen Platz ein */
    padding: 20px;
    /* Wichtig: Definiert die Animation für die Verschiebung */
    transition: margin-left 0.3s ease; 
}

/* --- Zustand: EINGEKLAPPT (Collapsed) --- */
/* Diese Klasse wird von JavaScript hinzugefügt/entfernt */
.collapsed-sidebar #sidebar {
    margin-left: -250px; /* Verschiebt die Sidebar komplett aus dem Sichtfeld (nach links) */
}

.collapsed-sidebar #content {
    /* Setzt den linken Rand des Inhalts zurück, da die Sidebar weg ist */
    margin-left: 0; 
}

/* --- Button Styling --- */
#sidebarToggle {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 20px;
}

/* Allgemeine Listen-Styles */
#sidebar ul {
    list-style: none;
    padding: 0;
}
#sidebar a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px 0;
}
