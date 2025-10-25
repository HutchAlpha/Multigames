<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MultiGames - Accueil</title>
    <link rel="stylesheet" href="Css/style.css">
    <link rel="icon" type="image/png" href="Img/Multigames.jpeg">

</head>
<body>
    <header class="main-header">
        <div class="logo-title">
            <img src="img/logo.png" alt="Logo MultiGames" class="logo" onerror="this.style.display='none'">
            <h1>MultiGames</h1>
        </div>
        <nav>
            <a href="#games">Jeux</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h2>Bienvenue sur MultiGames !</h2>
            <p>Découvrez une collection de mini-jeux gratuits et amusants. De nouveaux jeux seront ajoutés régulièrement !</p>
        </section>
        <section id="games" class="games-section">
            <h3>Nos jeux disponibles</h3>
            <div class="games-grid">
                <a class="game-card" href="../Calculaton/index.php">
                    <img src="img/Calculaton.jpeg" alt="Calculaton" class="game-img" onerror="this.src='img/placeholder.png'">
                    <div class="game-info">
                        <h4>Calculaton</h4>
                        <p>Jeu de calcul mental amusant et rapide.</p>
                    </div>
                </a>
                <a class="game-card" href="../Démineur/index.html">
                    <img src="img/Demineur.jpeg" alt="Démineur" class="game-img" onerror="this.src='img/placeholder.png'">
                    <div class="game-info">
                        <h4>Démineur</h4>
                        <p>Le classique jeu du démineur revisité.</p>
                    </div>
                </a>
                <a class="game-card" href="../TradGames/index.php">
                    <img src="img/TradGames.jpeg" alt="TradGames" class="game-img" onerror="this.src='img/placeholder.png'">
                    <div class="game-info">
                        <h4>TradGames</h4>
                        <p>Jeux traditionnels et mini-jeux variés.</p>
                    </div>
                </a>
                <!-- Exemple de jeu à venir -->
                <div class="game-card coming-soon">
                    <img src="img/placeholder.png" alt="Nouveau jeu bientôt" class="game-img">
                    <div class="game-info">
                        <h4>Prochain jeu</h4>
                        <p>Bientôt disponible !</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" class="about-section">
            <h3>À propos</h3>
            <p>MultiGames est une plateforme de mini-jeux en ligne, idéale pour s'amuser et se détendre. Notre objectif est d'ajouter régulièrement de nouveaux jeux pour tous les goûts !</p>
        </section>
        <section id="contact" class="contact-section">
            <h3>Contact</h3>
            <p>Une suggestion de jeu ? Contactez-moi à <a href="mailto:quentinboisset50470@gmail.com">quentinboisset50470@gmail.com</a></p>
        </section>
    </main>
    <footer class="main-footer">
        <p>&copy; 2025 MultiGames. Tous droits réservés.</p>
    </footer>
</body>
</html>
