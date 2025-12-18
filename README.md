/* =========================================
   1. VARIABLES Y RESET GLOBAL
   ========================================= */
:root {
    --primary-color: #4CAF4F;       /* Verde Nexcent */
    --secondary-color: #263238;     /* Gris oscuro texto */
    --text-color: #717171;          /* Gris suave párrafos */
    --bg-silver: #F5F7FA;           /* Fondo secciones alternas */
    --white: #FFFFFF;
    --font-main: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    color: var(--text-color);
    line-height: 1.5;
    background-color: var(--white);
}

h1, h2, h3, h4 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: var(--secondary-color);
    transition: color 0.3s;
}

button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background 0.3s, transform 0.2s;
}

/* =========================================
   2. HEADER & NAVEGACIÓN
   ========================================= */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background-color: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

header img {
    height: 30px; /* Ajuste del logo */
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-right: auto;
    margin-left: 10px;
}

.main-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.main-nav a:hover {
    color: var(--primary-color);
}

.header-login {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
}

/* Botón de Sign Up (apuntando a la clase .Sign o .Up) */
.header-login .Sign {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
}

.header-login .Sign:hover {
    background-color: #3e8e41;
}

/* =========================================
   3. HERO SECTION (.top)
   ========================================= */
.top {
    background-color: var(--bg-silver);
    padding: 5rem 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh; /* Ocupa buena parte de la pantalla */
}

.top h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    max-width: 600px;
}

.top p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

button.onclick { /* Botón Register */
    background-color: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    font-size: 1rem;
    align-self: flex-start;
}

/* =========================================
   4. FEATURES (CARDS)
   ========================================= */
/* Contenedor temporal para agrupar las cards si no existe en el HTML */
/* Sugerencia: Envuelve los divs .card en un <div class="features-grid"> en tu HTML */
body > .card { 
    /* Esto aplica a las cards que están sueltas en el body */
    display: inline-block; 
    width: 30%;
    text-align: center;
    padding: 2rem;
    margin: 1%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 8px;
    vertical-align: top;
}

.card img {
    width: 50px;
    margin-bottom: 1rem;
}

/* Títulos centrados antes de las cards */
body > h1, body > h3 {
    text-align: center;
    max-width: 600px;
    margin: 1rem auto;
}

/* =========================================
   5. INFO SECTIONS (PixelGrade & FooterExpli)
   ========================================= */
.info, .footerexpli {
    padding: 4rem 5%;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.info img, .footerexpli img {
    /* Si agregas imágenes aquí, ocuparán la mitad */
    flex: 1; 
}

.containerinfo, .explication {
    flex: 1;
}

.containerinfo h1, .explication h1 {
    font-size: 2.5rem;
}

button.learn, button.learn2 {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.8rem 1.5rem;
    margin-top: 1.5rem;
}

/* =========================================
   6. STATS SECTION
   ========================================= */
.stats {
    background-color: var(--bg-silver);
    padding: 4rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statscompany {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Texto izquierda, stats derecha */
    gap: 2rem;
    align-items: center;
}

/* Reorganizamos los items de estadísticas en una grid de 2x2 */
.statitem {
    display: flex;
    flex-direction: column;
}

/* Un truco para agrupar los .statitem si están sueltos */
.statscompany > div:not(:first-child):not(:nth-child(2)) {
    /* Esto apunta a los divs de stats */
    display: inline-block;
    width: 45%;
    margin-bottom: 1.5rem;
}

.statitem h1 {
    font-size: 2rem;
    color: var(--secondary-color);
    margin: 0;
}

/* =========================================
   7. TESTIMONIAL (Tesla Thing)
   ========================================= */
.teslathing {
    background-color: var(--bg-silver); /* A veces es blanco, a veces gris */
    padding: 3rem 5%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
}

.tesla p {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.paragraph b {
    color: var(--primary-color);
    display: block;
    margin-top: 1rem;
}

/* =========================================
   8. BLOG SECTION (Section.card)
   ========================================= */
section.card {
    padding: 4rem 5%;
    text-align: center;
}

section.card .info {
    margin-bottom: 3rem;
    display: block; /* Override del flex anterior */
}

/* Las 3 cards de blog */
.cardinfo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.cardinfo .container {
    background: var(--white);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.cardinfo h4 {
    font-size: 1.1rem;
    margin: 1rem 0;
}

.cardinfo p {
    color: var(--primary-color);
    font-weight: 700;
    cursor: pointer;
}

/* =========================================
   9. FOOTER
   ========================================= */
footer {
    background-color: #263238; /* Fondo oscuro típico */
    color: var(--white);
    padding: 4rem 5%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 2rem;
    font-size: 0.9rem;
}

/* Sección superior del footer "Pellentesque..." */
.moreinfo {
    grid-column: 1 / -1; /* Ocupa todo el ancho */
    text-align: center;
    margin-bottom: 3rem;
}

.moreinfo h1 {
    color: var(--white);
    font-size: 3rem;
    margin-bottom: 2rem;
}

button.demo {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
}

/* Columnas de enlaces */
.footer-column h4 {
    color: var(--white);
    margin-bottom: 1.5rem;
}

.footer-column a {
    display: block;
    color: #d9d9d9;
    margin-bottom: 0.8rem;
}

.footer-column a:hover {
    color: var(--primary-color);
}

/* Input y suscripción */
.footer-bottomright input {
    padding: 0.8rem;
    border-radius: 4px;
    border: none;
    background: #3c484e;
    color: white;
    margin-right: 0.5rem;
}

button.submit {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.8rem 1.2rem;
}

/* Parte inferior (Logos) */
.footerbottomleft {
    grid-column: 1 / -1;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-top: 3rem;
    border-top: 1px solid #3c484e;
    padding-top: 2rem;
}

.footerbottomleft img {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

/* =========================================
   10. MEDIA QUERIES (RESPONSIVE)
   ========================================= */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 1rem;
    }

    .main-nav {
        flex-direction: column;
        gap: 0.5rem;
    }

    .statscompany {
        grid-template-columns: 1fr;
    }
    
    body > .card, 
    .cardinfo {
        grid-template-columns: 1fr;
        display: block;
        width: 100%;
        margin-bottom: 2rem;
    }

    footer {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footerbottomleft {
        justify-content: center;
    }
}