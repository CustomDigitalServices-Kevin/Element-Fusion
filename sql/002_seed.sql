-- ============================================
-- SEED DATA for Element Fusion
-- ============================================

-- CATÉGORIES
INSERT INTO categories (name, color, icon) VALUES
('Nature', '#4CAF50', '🌿'),
('Technologie', '#2196F3', '⚡'),
('Vie', '#E91E63', '❤️'),
('Nourriture', '#FF9800', '🍎'),
('Mythologie', '#9C27B0', '✨')
ON CONFLICT (name) DO NOTHING;

-- ÉLÉMENTS DE BASE (Tier 0)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Eau', '💧', 1, true, 0, 'L''élément fondamental de la vie'),
('Feu', '🔥', 1, true, 0, 'La chaleur et la lumière primordiales'),
('Terre', '🌍', 1, true, 0, 'La base solide de toute existence'),
('Air', '💨', 1, true, 0, 'Le souffle invisible qui enveloppe tout')
ON CONFLICT (name) DO NOTHING;

-- TIER 1 (6 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Vapeur', '♨️', 1, false, 1, 'Eau transformée par la chaleur'),
('Boue', '🟫', 1, false, 1, 'Mélange de terre et d''eau'),
('Fumée', '🌫️', 1, false, 1, 'Air chargé de particules brûlées'),
('Lave', '🌋', 1, false, 1, 'Roche en fusion ardente'),
('Pluie', '🌧️', 1, false, 1, 'L''eau qui tombe du ciel'),
('Poussière', '💫', 1, false, 1, 'Particules de terre dans l''air')
ON CONFLICT (name) DO NOTHING;

-- TIER 2 (15 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Pierre', '🪨', 1, false, 2, 'Roche solide refroidie'),
('Obsidienne', '⬛', 1, false, 2, 'Verre volcanique noir et tranchant'),
('Nuage', '☁️', 1, false, 2, 'Vapeur condensée dans le ciel'),
('Brique', '🧱', 2, false, 2, 'Boue cuite par le feu'),
('Plante', '🌱', 3, false, 2, 'La vie végétale naissante'),
('Sable', '🏜️', 1, false, 2, 'Grains fins de roche érodée'),
('Sel', '🧂', 4, false, 2, 'Cristaux minéraux essentiels'),
('Glace', '🧊', 1, false, 2, 'Eau solidifiée par le froid'),
('Neige', '❄️', 1, false, 2, 'Cristaux de glace tombant du ciel'),
('Vent', '🌬️', 1, false, 2, 'Air en mouvement puissant'),
('Tempête', '⛈️', 1, false, 2, 'Déchaînement des éléments'),
('Rivière', '🏞️', 1, false, 2, 'Eau qui coule à travers la terre'),
('Océan', '🌊', 1, false, 2, 'Immensité d''eau salée'),
('Volcan', '🌋', 1, false, 2, 'Montagne crachant du feu'),
('Île', '🏝️', 1, false, 2, 'Terre entourée d''eau')
ON CONFLICT (name) DO NOTHING;

-- TIER 3 (30 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Métal', '⚙️', 2, false, 3, 'Pierre fondue et raffinée'),
('Mur', '🏗️', 2, false, 3, 'Barrière de pierres empilées'),
('Orage', '⚡', 1, false, 3, 'Tempête électrique violente'),
('Arbre', '🌳', 3, false, 3, 'Plante devenue majestueuse'),
('Champignon', '🍄', 3, false, 3, 'Vie née de l''humidité'),
('Rose', '🌹', 3, false, 3, 'Fleur d''une beauté épineuse'),
('Blé', '🌾', 4, false, 3, 'Céréale nourricière'),
('Algue', '🌿', 3, false, 3, 'Plante aquatique primitive'),
('Montagne', '⛰️', 1, false, 3, 'Terre poussée vers le ciel'),
('Désert', '🏜️', 1, false, 3, 'Étendue de sable aride'),
('Forêt', '🌲', 1, false, 3, 'Multitude d''arbres vivants'),
('Marais', '🐸', 1, false, 3, 'Terre gorgée d''eau stagnante'),
('Glacier', '🏔️', 1, false, 3, 'Rivière de glace éternelle'),
('Arc-en-ciel', '🌈', 1, false, 3, 'Lumière décomposée par la pluie'),
('Soleil', '☀️', 1, false, 3, 'Boule de feu céleste'),
('Lune', '🌙', 1, false, 3, 'Astre nocturne mystérieux'),
('Verre', '🪟', 2, false, 3, 'Sable fondu transparent'),
('Charbon', '⚫', 1, false, 3, 'Bois pétrifié combustible'),
('Fossile', '🦴', 1, false, 3, 'Empreinte du passé dans la pierre'),
('Cuivre', '🟤', 2, false, 3, 'Premier métal travaillé par l''homme'),
('Papier', '📄', 2, false, 3, 'Bois aplati en feuilles'),
('Tissu', '🧵', 3, false, 3, 'Fibres tissées ensemble'),
('Laine', '🐑', 3, false, 3, 'Fibre animale chaude'),
('Animal', '🐾', 3, false, 3, 'Être vivant mobile'),
('Poisson', '🐟', 3, false, 3, 'Animal aquatique'),
('Oiseau', '🐦', 3, false, 3, 'Animal qui vole'),
('Araignée', '🕷️', 3, false, 3, 'Tisseuse de toiles'),
('Coquillage', '🐚', 1, false, 3, 'Carapace marine'),
('Corail', '🪸', 3, false, 3, 'Animal marin constructeur'),
('Huile', '🫒', 4, false, 3, 'Liquide gras végétal')
ON CONFLICT (name) DO NOTHING;

-- TIER 4 (50 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Maison', '🏠', 2, false, 4, 'Abri construit de murs et de toit'),
('Épée', '⚔️', 2, false, 4, 'Lame de métal forgée'),
('Bouclier', '🛡️', 2, false, 4, 'Protection de métal et de bois'),
('Pain', '🍞', 4, false, 4, 'Blé transformé par le feu'),
('Farine', '🌾', 4, false, 4, 'Blé réduit en poudre fine'),
('Bière', '🍺', 4, false, 4, 'Breuvage de blé fermenté'),
('Vin', '🍷', 4, false, 4, 'Nectar de raisin fermenté'),
('Fromage', '🧀', 4, false, 4, 'Lait transformé et affiné'),
('Village', '🏘️', 3, false, 4, 'Regroupement de maisons'),
('Château', '🏰', 2, false, 4, 'Forteresse de pierre imposante'),
('Roi', '👑', 3, false, 4, 'Souverain du château'),
('Soldat', '🗡️', 3, false, 4, 'Guerrier armé d''une épée'),
('Marteau', '🔨', 2, false, 4, 'Outil de métal pour forger'),
('Roue', '☸️', 2, false, 4, 'Invention qui change tout'),
('Bateau', '⛵', 2, false, 4, 'Véhicule flottant sur l''eau'),
('Étoile', '⭐', 1, false, 4, 'Soleil lointain scintillant'),
('Pétrole', '🛢️', 2, false, 4, 'Or noir fossile'),
('Or', '🥇', 2, false, 4, 'Métal précieux inaltérable'),
('Argent', '🥈', 2, false, 4, 'Métal blanc et brillant'),
('Bronze', '🟫', 2, false, 4, 'Alliage de cuivre et d''étain'),
('Acier', '🔩', 2, false, 4, 'Métal le plus résistant'),
('Électricité', '⚡', 2, false, 4, 'Énergie de la foudre captée'),
('Livre', '📚', 2, false, 4, 'Savoir relié en pages'),
('École', '🏫', 3, false, 4, 'Lieu d''apprentissage'),
('Soie', '🕸️', 3, false, 4, 'Fil précieux du ver à soie'),
('Perle', '🔮', 1, false, 4, 'Joyau né de la mer'),
('Caoutchouc', '⚫', 2, false, 4, 'Latex végétal élastique'),
('Cheval', '🐴', 3, false, 4, 'Noble monture'),
('Loup', '🐺', 3, false, 4, 'Prédateur de la forêt'),
('Papillon', '🦋', 3, false, 4, 'Insecte aux ailes colorées'),
('Dinosaure', '🦕', 3, false, 4, 'Reptile géant préhistorique'),
('Gâteau', '🎂', 4, false, 4, 'Pâtisserie sucrée'),
('Soupe', '🍲', 4, false, 4, 'Eau chaude avec légumes'),
('Miel', '🍯', 4, false, 4, 'Or sucré des abeilles'),
('Abeille', '🐝', 3, false, 4, 'Insecte pollinisateur'),
('Serpent', '🐍', 3, false, 4, 'Reptile sans pattes'),
('Chat', '🐱', 3, false, 4, 'Félin domestique'),
('Chien', '🐕', 3, false, 4, 'Meilleur ami de l''homme'),
('Vache', '🐄', 3, false, 4, 'Bovine nourricière'),
('Mouton', '🐏', 3, false, 4, 'Animal laineux'),
('Cochon', '🐷', 3, false, 4, 'Animal de la ferme'),
('Poule', '🐔', 3, false, 4, 'Oiseau de basse-cour'),
('Oeuf', '🥚', 4, false, 4, 'Naissance potentielle'),
('Ferme', '🏡', 3, false, 4, 'Exploitation agricole'),
('Jardin', '🌻', 3, false, 4, 'Espace cultivé de beauté'),
('Pont', '🌉', 2, false, 4, 'Structure enjambant l''eau'),
('Horloge', '🕐', 2, false, 4, 'Mesure du temps'),
('Cloche', '🔔', 2, false, 4, 'Instrument sonore de métal'),
('Ancre', '⚓', 2, false, 4, 'Attache du bateau'),
('Boussole', '🧭', 2, false, 4, 'Guide magnétique')
ON CONFLICT (name) DO NOTHING;

-- TIER 5 (70 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Ville', '🏙️', 2, false, 5, 'Métropole grouillante de vie'),
('Civilisation', '🏛️', 3, false, 5, 'Apogée de la société humaine'),
('Robot', '🤖', 2, false, 5, 'Machine dotée d''intelligence'),
('Ordinateur', '💻', 2, false, 5, 'Calculateur électronique'),
('Fusée', '🚀', 2, false, 5, 'Véhicule vers les étoiles'),
('Dragon', '🐉', 5, false, 5, 'Créature mythique crachant le feu'),
('Phoenix', '🔥', 5, false, 5, 'Oiseau renaissant de ses cendres'),
('Licorne', '🦄', 5, false, 5, 'Cheval magique à la corne unique'),
('Vampire', '🧛', 5, false, 5, 'Mort-vivant assoiffé de sang'),
('Zombie', '🧟', 5, false, 5, 'Cadavre revenu à la vie'),
('Génie', '🧞', 5, false, 5, 'Esprit magique exaucant les voeux'),
('Sorcier', '🧙', 5, false, 5, 'Maître des arts mystiques'),
('Elfe', '🧝', 5, false, 5, 'Être immortel de la forêt'),
('Nain', '⛏️', 5, false, 5, 'Forgeron souterrain légendaire'),
('Diamant', '💎', 1, false, 5, 'Carbone pur cristallisé'),
('Plastique', '🧴', 2, false, 5, 'Matériau synthétique moderne'),
('Planète', '🪐', 1, false, 5, 'Corps céleste en orbite'),
('Bibliothèque', '🏛️', 2, false, 5, 'Temple du savoir'),
('Université', '🎓', 3, false, 5, 'Temple du savoir supérieur'),
('Ampoule', '💡', 2, false, 5, 'Lumière artificielle'),
('Téléphone', '📱', 2, false, 5, 'Communication à distance'),
('Locomotive', '🚂', 2, false, 5, 'Machine à vapeur sur rails'),
('Avion', '✈️', 2, false, 5, 'Machine volante'),
('Sous-marin', '🤿', 2, false, 5, 'Vaisseau des profondeurs'),
('Hôpital', '🏥', 3, false, 5, 'Lieu de guérison'),
('Médecin', '👨‍⚕️', 3, false, 5, 'Guérisseur savant'),
('Musique', '🎵', 3, false, 5, 'Art des sons harmonieux'),
('Guitare', '🎸', 2, false, 5, 'Instrument à cordes'),
('Tambour', '🥁', 2, false, 5, 'Instrument à percussion'),
('Peinture', '🎨', 3, false, 5, 'Art des couleurs'),
('Statue', '🗿', 2, false, 5, 'Pierre sculptée'),
('Couronne', '👑', 2, false, 5, 'Symbole royal'),
('Trésor', '💰', 2, false, 5, 'Richesse accumulée'),
('Pirate', '🏴‍☠️', 3, false, 5, 'Bandit des mers'),
('Fantôme', '👻', 5, false, 5, 'Esprit errant'),
('Momie', '🧟', 5, false, 5, 'Ancien embaumé'),
('Sirène', '🧜', 5, false, 5, 'Mi-femme mi-poisson'),
('Centaure', '🏇', 5, false, 5, 'Mi-homme mi-cheval'),
('Minotaure', '🐂', 5, false, 5, 'Homme à tête de taureau'),
('Griffon', '🦅', 5, false, 5, 'Aigle et lion fusionnés'),
('Kraken', '🐙', 5, false, 5, 'Monstre marin géant'),
('Golem', '🗿', 5, false, 5, 'Créature de pierre animée'),
('Loup-garou', '🐺', 5, false, 5, 'Homme devenant loup'),
('Fée', '🧚', 5, false, 5, 'Être magique minuscule'),
('Troll', '👹', 5, false, 5, 'Géant des montagnes'),
('Basilic', '🐍', 5, false, 5, 'Roi des serpents'),
('Pégase', '🐴', 5, false, 5, 'Cheval ailé divin'),
('Hydre', '🐉', 5, false, 5, 'Serpent à têtes multiples'),
('Chimère', '🦁', 5, false, 5, 'Assemblage de créatures'),
('Potion', '🧪', 5, false, 5, 'Breuvage magique'),
('Chocolat', '🍫', 4, false, 5, 'Douceur cacaotée'),
('Café', '☕', 4, false, 5, 'Boisson énergisante'),
('Thé', '🍵', 4, false, 5, 'Infusion apaisante'),
('Pizza', '🍕', 4, false, 5, 'Galette garnie au four'),
('Sushi', '🍣', 4, false, 5, 'Art culinaire japonais'),
('Bonbon', '🍬', 4, false, 5, 'Sucrerie colorée'),
('Glace (crème)', '🍦', 4, false, 5, 'Dessert glacé'),
('Croissant', '🥐', 4, false, 5, 'Viennoiserie beurrée'),
('Champagne', '🥂', 4, false, 5, 'Vin pétillant de fête'),
('Whisky', '🥃', 4, false, 5, 'Alcool de grain vieilli'),
('Éléphant', '🐘', 3, false, 5, 'Géant de la savane'),
('Lion', '🦁', 3, false, 5, 'Roi de la jungle'),
('Aigle', '🦅', 3, false, 5, 'Rapace majestueux'),
('Baleine', '🐋', 3, false, 5, 'Géant des océans'),
('Requin', '🦈', 3, false, 5, 'Prédateur des mers'),
('Dauphin', '🐬', 3, false, 5, 'Mammifère marin joueur'),
('Tortue', '🐢', 3, false, 5, 'Reptile à carapace'),
('Grenouille', '🐸', 3, false, 5, 'Amphibien sauteur'),
('Hibou', '🦉', 3, false, 5, 'Oiseau nocturne sage'),
('Corbeau', '🐦‍⬛', 3, false, 5, 'Oiseau noir intelligent')
ON CONFLICT (name) DO NOTHING;

-- TIER 6 (50 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Galaxie', '🌌', 1, false, 6, 'Amas d''étoiles infini'),
('Trou noir', '⚫', 1, false, 6, 'Gouffre cosmique'),
('Supernova', '💥', 1, false, 6, 'Explosion stellaire'),
('Nébuleuse', '🌀', 1, false, 6, 'Nuage cosmique coloré'),
('Satellite', '🛰️', 2, false, 6, 'Machine en orbite'),
('Station spatiale', '🏗️', 2, false, 6, 'Habitat orbital'),
('Intelligence artificielle', '🧠', 2, false, 6, 'Esprit numérique'),
('Internet', '🌐', 2, false, 6, 'Réseau mondial'),
('Réseau social', '📱', 2, false, 6, 'Connexion virtuelle'),
('Jeu vidéo', '🎮', 2, false, 6, 'Divertissement numérique'),
('Cinéma', '🎬', 3, false, 6, 'Art des images mouvantes'),
('Photographie', '📷', 2, false, 6, 'Capture de lumière'),
('Télescope', '🔭', 2, false, 6, 'Oeil vers les étoiles'),
('Microscope', '🔬', 2, false, 6, 'Oeil vers l''infiniment petit'),
('ADN', '🧬', 3, false, 6, 'Code de la vie'),
('Virus', '🦠', 3, false, 6, 'Parasite microscopique'),
('Vaccin', '💉', 3, false, 6, 'Bouclier biologique'),
('Antibiotique', '💊', 3, false, 6, 'Tueur de bactéries'),
('Atome', '⚛️', 2, false, 6, 'Brique de la matière'),
('Bombe', '💣', 2, false, 6, 'Énergie destructrice'),
('Énergie solaire', '🔆', 2, false, 6, 'Puissance du soleil captée'),
('Éolienne', '🌬️', 2, false, 6, 'Énergie du vent'),
('Barrage', '🏗️', 2, false, 6, 'Énergie de l''eau retenue'),
('Voiture', '🚗', 2, false, 6, 'Véhicule terrestre'),
('Vélo', '🚲', 2, false, 6, 'Véhicule à pédales'),
('Hélicoptère', '🚁', 2, false, 6, 'Machine à hélices'),
('Cathédrale', '⛪', 2, false, 6, 'Temple monumental'),
('Pyramide', '🔺', 2, false, 6, 'Monument éternel'),
('Sphinx', '🗿', 5, false, 6, 'Gardien de pierre mythique'),
('Olympe', '🏔️', 5, false, 6, 'Montagne des dieux'),
('Excalibur', '⚔️', 5, false, 6, 'Épée légendaire'),
('Graal', '🏆', 5, false, 6, 'Calice sacré'),
('Baguette magique', '🪄', 5, false, 6, 'Instrument de sorcellerie'),
('Pierre philosophale', '💎', 5, false, 6, 'Transmutation ultime'),
('Ambroisie', '🍯', 5, false, 6, 'Nourriture des dieux'),
('Paradis', '☁️', 5, false, 6, 'Lieu de félicité éternelle'),
('Enfer', '🔥', 5, false, 6, 'Royaume des flammes'),
('Ange', '😇', 5, false, 6, 'Messager céleste'),
('Démon', '😈', 5, false, 6, 'Esprit maléfique'),
('Tableau', '🖼️', 3, false, 6, 'Oeuvre peinte encadrée'),
('Orchestre', '🎻', 3, false, 6, 'Ensemble musical harmonieux'),
('Opéra', '🎭', 3, false, 6, 'Spectacle musical dramatique'),
('Théâtre', '🎭', 3, false, 6, 'Art de la scène'),
('Poème', '📜', 3, false, 6, 'Mots en musique'),
('Journal', '📰', 2, false, 6, 'Nouvelles imprimées'),
('Carte', '🗺️', 2, false, 6, 'Représentation du monde'),
('Drapeau', '🏁', 3, false, 6, 'Symbole d''une nation'),
('Monnaie', '💰', 2, false, 6, 'Unité d''échange'),
('Banque', '🏦', 2, false, 6, 'Gardien de la monnaie'),
('Prison', '🏢', 2, false, 6, 'Lieu de détention')
ON CONFLICT (name) DO NOTHING;

-- TIER 7 (50 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Cyborg', '🦾', 2, false, 7, 'Fusion homme-machine'),
('Clone', '👥', 3, false, 7, 'Copie génétique'),
('Mutant', '🧬', 5, false, 7, 'Être génétiquement modifié'),
('Ninja', '🥷', 3, false, 7, 'Guerrier de l''ombre'),
('Samouraï', '⚔️', 3, false, 7, 'Guerrier noble japonais'),
('Gladiateur', '🏛️', 3, false, 7, 'Combattant de l''arène'),
('Viking', '🪓', 3, false, 7, 'Guerrier nordique'),
('Pharaon', '🏺', 3, false, 7, 'Roi d''Égypte'),
('Empereur', '👑', 3, false, 7, 'Souverain suprême'),
('Chevalier', '🛡️', 3, false, 7, 'Noble guerrier en armure'),
('Archer', '🏹', 3, false, 7, 'Tireur à l''arc'),
('Catapulte', '🏗️', 2, false, 7, 'Machine de siège'),
('Canon', '💣', 2, false, 7, 'Arme à poudre'),
('Poudre', '💨', 2, false, 7, 'Mélange explosif'),
('Dynamite', '🧨', 2, false, 7, 'Explosif puissant'),
('Tank', '🔩', 2, false, 7, 'Char de combat'),
('Sous-marin nucléaire', '☢️', 2, false, 7, 'Vaisseau invisible'),
('Porte-avions', '🚢', 2, false, 7, 'Forteresse flottante'),
('Radar', '📡', 2, false, 7, 'Détecteur d''ondes'),
('Laser', '🔴', 2, false, 7, 'Lumière concentrée'),
('Hologramme', '🌈', 2, false, 7, 'Image en 3D'),
('Drone', '🛸', 2, false, 7, 'Machine volante autonome'),
('Imprimante 3D', '🖨️', 2, false, 7, 'Fabrication additive'),
('Blockchain', '🔗', 2, false, 7, 'Registre décentralisé'),
('Cryptomonnaie', '🪙', 2, false, 7, 'Monnaie numérique'),
('Réalité virtuelle', '🥽', 2, false, 7, 'Monde simulé'),
('Cérès', '🌿', 5, false, 7, 'Déesse des moissons'),
('Poséidon', '🔱', 5, false, 7, 'Dieu de la mer'),
('Zeus', '⚡', 5, false, 7, 'Roi des dieux'),
('Hadès', '💀', 5, false, 7, 'Dieu des enfers'),
('Thor', '🔨', 5, false, 7, 'Dieu du tonnerre nordique'),
('Odin', '👁️', 5, false, 7, 'Père de tous les dieux nordiques'),
('Anubis', '🐕', 5, false, 7, 'Dieu chacal égyptien'),
('Méduse', '🐍', 5, false, 7, 'Gorgone pétrifiante'),
('Cerbère', '🐕', 5, false, 7, 'Chien à trois têtes'),
('Minotaure (labyrinthe)', '🏛️', 5, false, 7, 'Prisonnier du labyrinthe'),
('Pandore', '📦', 5, false, 7, 'Boîte de tous les maux'),
('Icare', '🪶', 5, false, 7, 'Vol trop près du soleil'),
('Prométhée', '🔥', 5, false, 7, 'Voleur du feu divin'),
('Mjolnir', '🔨', 5, false, 7, 'Marteau de Thor'),
('Spaghetti', '🍝', 4, false, 7, 'Pâtes italiennes'),
('Hamburger', '🍔', 4, false, 7, 'Sandwich américain'),
('Ramen', '🍜', 4, false, 7, 'Nouilles japonaises'),
('Taco', '🌮', 4, false, 7, 'Tortilla mexicaine garnie'),
('Crêpe', '🥞', 4, false, 7, 'Galette fine bretonne'),
('Donut', '🍩', 4, false, 7, 'Beignet rond sucré'),
('Popcorn', '🍿', 4, false, 7, 'Maïs éclaté'),
('Fondue', '🫕', 4, false, 7, 'Fromage fondu partagé'),
('Macaron', '🧁', 4, false, 7, 'Pâtisserie française'),
('Crocodile', '🐊', 3, false, 7, 'Reptile des marais')
ON CONFLICT (name) DO NOTHING;

-- TIER 8 (50 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Colonie spatiale', '🏙️', 2, false, 8, 'Ville dans l''espace'),
('Terraformation', '🌍', 2, false, 8, 'Planète transformée'),
('Voyage temporel', '⏰', 2, false, 8, 'Traversée du temps'),
('Téléportation', '✨', 2, false, 8, 'Transport instantané'),
('Antigravité', '🔄', 2, false, 8, 'Défier la gravité'),
('Matière noire', '⚫', 1, false, 8, 'Substance invisible'),
('Énergie sombre', '🌑', 1, false, 8, 'Force d''expansion'),
('Multivers', '🌀', 5, false, 8, 'Univers parallèles'),
('Portail dimensionnel', '🚪', 5, false, 8, 'Passage entre mondes'),
('Arbre de vie', '🌳', 5, false, 8, 'Source de toute existence'),
('Fontaine de jouvence', '⛲', 5, false, 8, 'Eau d''immortalité'),
('Valhalla', '⚔️', 5, false, 8, 'Paradis des guerriers'),
('Avalon', '🏝️', 5, false, 8, 'Île mystique arthurienne'),
('Atlantide', '🌊', 5, false, 8, 'Cité engloutie'),
('El Dorado', '🏙️', 5, false, 8, 'Cité d''or perdue'),
('Ragnarök', '🔥', 5, false, 8, 'Fin des temps nordique'),
('Apocalypse', '☄️', 5, false, 8, 'Fin du monde'),
('Renaissance', '🌅', 3, false, 8, 'Renouveau culturel'),
('Révolution', '✊', 3, false, 8, 'Changement radical'),
('Démocratie', '🗳️', 3, false, 8, 'Pouvoir du peuple'),
('Constitution', '📜', 3, false, 8, 'Loi fondamentale'),
('Philosophie', '🤔', 3, false, 8, 'Amour de la sagesse'),
('Mathématiques', '🔢', 2, false, 8, 'Langage de l''univers'),
('Physique', '⚛️', 2, false, 8, 'Science de la matière'),
('Chimie', '🧪', 2, false, 8, 'Science des transformations'),
('Biologie', '🧬', 3, false, 8, 'Science du vivant'),
('Astronomie', '🔭', 2, false, 8, 'Science des astres'),
('Archéologie', '🏺', 3, false, 8, 'Science du passé'),
('Médecine', '⚕️', 3, false, 8, 'Science de la guérison'),
('Alchimie', '⚗️', 5, false, 8, 'Proto-science mystique'),
('Nécromancie', '💀', 5, false, 8, 'Magie des morts'),
('Divination', '🔮', 5, false, 8, 'Vision du futur'),
('Enchantement', '✨', 5, false, 8, 'Magie de l''objet'),
('Invocation', '🌀', 5, false, 8, 'Appel d''entités'),
('Métamorphose', '🦎', 5, false, 8, 'Changement de forme'),
('Chocolatine', '🥐', 4, false, 8, 'Viennoiserie au chocolat'),
('Brioche', '🍞', 4, false, 8, 'Pain sucré brioché'),
('Baguette (pain)', '🥖', 4, false, 8, 'Pain français classique'),
('Paella', '🥘', 4, false, 8, 'Riz espagnol garni'),
('Couscous', '🥘', 4, false, 8, 'Semoule nord-africaine'),
('Wok', '🍳', 4, false, 8, 'Poêle asiatique'),
('Raclette', '🧀', 4, false, 8, 'Fromage fondu sur patates'),
('Tigre', '🐯', 3, false, 8, 'Félin rayé majestueux'),
('Panda', '🐼', 3, false, 8, 'Ours noir et blanc'),
('Koala', '🐨', 3, false, 8, 'Marsupial endormi'),
('Pingouin', '🐧', 3, false, 8, 'Oiseau des glaces'),
('Flamant rose', '🦩', 3, false, 8, 'Échassier élégant'),
('Paon', '🦚', 3, false, 8, 'Oiseau aux plumes somptueuses'),
('Caméléon', '🦎', 3, false, 8, 'Reptile changeant de couleur'),
('Méduse (animal)', '🪼', 3, false, 8, 'Créature marine translucide')
ON CONFLICT (name) DO NOTHING;

-- TIER 9 (50 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Singularité', '⚫', 2, false, 9, 'Point de non-retour technologique'),
('Conscience artificielle', '🧠', 2, false, 9, 'Machine qui pense'),
('Nanobots', '🔬', 2, false, 9, 'Robots microscopiques'),
('Fusion nucléaire', '☀️', 2, false, 9, 'Énergie des étoiles'),
('Antimatière', '💫', 2, false, 9, 'Miroir de la matière'),
('Warp drive', '🌌', 2, false, 9, 'Propulsion supraluminique'),
('Dyson sphere', '🔆', 2, false, 9, 'Sphère autour d''une étoile'),
('Ascenseur spatial', '🏗️', 2, false, 9, 'Câble vers l''espace'),
('Cryogénie', '🧊', 2, false, 9, 'Sommeil glacé éternel'),
('Bioprinting', '🖨️', 3, false, 9, 'Impression d''organes'),
('Exoplanète', '🪐', 1, false, 9, 'Monde au-delà du soleil'),
('Comète', '☄️', 1, false, 9, 'Vagabonde glacée du cosmos'),
('Astéroïde', '🌑', 1, false, 9, 'Roche errante spatiale'),
('Aurore boréale', '🌌', 1, false, 9, 'Lumière polaire dansante'),
('Tsunami', '🌊', 1, false, 9, 'Vague destructrice'),
('Tornade', '🌪️', 1, false, 9, 'Tourbillon dévastateur'),
('Tremblement de terre', '🌍', 1, false, 9, 'Secousse tellurique'),
('Éruption', '🌋', 1, false, 9, 'Explosion volcanique'),
('Cristal', '💎', 1, false, 9, 'Structure géométrique parfaite'),
('Ambre', '🟠', 1, false, 9, 'Résine fossilisée'),
('Saphir', '🔵', 1, false, 9, 'Pierre bleue précieuse'),
('Rubis', '🔴', 1, false, 9, 'Pierre rouge de passion'),
('Émeraude', '🟢', 1, false, 9, 'Pierre verte de sagesse'),
('Opale', '🟣', 1, false, 9, 'Pierre aux mille reflets'),
('Titan', '🏔️', 5, false, 9, 'Géant primordial'),
('Léviathan', '🐋', 5, false, 9, 'Monstre marin biblique'),
('Béhémoth', '🦏', 5, false, 9, 'Bête terrestre colossale'),
('Yggdrasil', '🌳', 5, false, 9, 'Arbre-monde nordique'),
('Cthulhu', '🐙', 5, false, 9, 'Entité cosmique endormie'),
('Fenrir', '🐺', 5, false, 9, 'Loup géant nordique'),
('Jörmungandr', '🐍', 5, false, 9, 'Serpent-monde nordique'),
('Nirvana', '☸️', 5, false, 9, 'Éveil spirituel ultime'),
('Karma', '♻️', 5, false, 9, 'Loi de cause à effet'),
('Chakra', '🔮', 5, false, 9, 'Centre d''énergie vitale'),
('Aura', '✨', 5, false, 9, 'Champ énergétique invisible'),
('Rune', '🔮', 5, false, 9, 'Symbole magique ancien'),
('Grimoire', '📖', 5, false, 9, 'Livre de sorts'),
('Elixir', '🧪', 5, false, 9, 'Breuvage de longue vie'),
('Talisman', '🔮', 5, false, 9, 'Objet protecteur magique'),
('Artefact', '🏺', 5, false, 9, 'Objet ancien de pouvoir'),
('Truffe', '🍄', 4, false, 9, 'Champignon précieux'),
('Caviar', '⚫', 4, false, 9, 'Oeufs de poisson luxueux'),
('Foie gras', '🍽️', 4, false, 9, 'Mets raffiné français'),
('Wasabi', '🟢', 4, false, 9, 'Condiment japonais piquant'),
('Safran', '🟡', 4, false, 9, 'Épice la plus chère'),
('Vanille', '🟤', 4, false, 9, 'Orchidée aromatique'),
('Cannelle', '🟫', 4, false, 9, 'Écorce parfumée'),
('Orchidée', '🌺', 3, false, 9, 'Fleur exotique précieuse'),
('Lotus', '🪷', 3, false, 9, 'Fleur sacrée d''orient'),
('Bonsaï', '🌳', 3, false, 9, 'Arbre miniature japonais')
ON CONFLICT (name) DO NOTHING;

-- TIER 10 (30 éléments)
INSERT INTO elements (name, emoji, category_id, is_base, tier, description) VALUES
('Big Bang', '💥', 1, false, 10, 'Naissance de l''univers'),
('Univers', '🌌', 1, false, 10, 'Totalité de l''existence'),
('Infini', '♾️', 5, false, 10, 'Sans fin ni limite'),
('Néant', '⬜', 5, false, 10, 'Absence absolue'),
('Création', '✨', 5, false, 10, 'Acte de donner vie'),
('Destruction', '💥', 5, false, 10, 'Fin de toute chose'),
('Équilibre', '⚖️', 5, false, 10, 'Harmonie parfaite'),
('Chaos', '🌀', 5, false, 10, 'Désordre primordial'),
('Ordre', '📐', 5, false, 10, 'Structure parfaite'),
('Temps', '⏳', 5, false, 10, 'Quatrième dimension'),
('Espace', '🌌', 5, false, 10, 'Étendue sans fin'),
('Gravité', '🍎', 2, false, 10, 'Force d''attraction'),
('Lumière', '💡', 1, false, 10, 'Particule et onde'),
('Ombre', '🌑', 1, false, 10, 'Absence de lumière'),
('Son', '🔊', 1, false, 10, 'Vibration de l''air'),
('Silence', '🤫', 1, false, 10, 'Absence de son'),
('Vie', '🌱', 3, false, 10, 'Force animatrice'),
('Mort', '💀', 3, false, 10, 'Fin de la vie'),
('Amour', '❤️', 3, false, 10, 'Force la plus puissante'),
('Sagesse', '🦉', 3, false, 10, 'Connaissance profonde'),
('Courage', '🦁', 3, false, 10, 'Force intérieure'),
('Espoir', '🌅', 3, false, 10, 'Lumière dans l''obscurité'),
('Rêve', '💭', 3, false, 10, 'Vision de l''esprit endormi'),
('Cauchemar', '👹', 5, false, 10, 'Rêve terrifiant'),
('Destin', '⭐', 5, false, 10, 'Chemin tracé'),
('Liberté', '🕊️', 3, false, 10, 'Absence de contrainte'),
('Justice', '⚖️', 3, false, 10, 'Équité pour tous'),
('Vérité', '💎', 3, false, 10, 'Ce qui est réel'),
('Imagination', '🌈', 3, false, 10, 'Création de l''esprit'),
('Éternité', '♾️', 5, false, 10, 'Temps sans fin')
ON CONFLICT (name) DO NOTHING;
-- ============================================
-- COMBINATIONS PART 1: Tier 1-3 (100 combos)
-- ============================================

-- TIER 1 BASE
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Feu' AND r.name='Vapeur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Terre' AND r.name='Boue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Feu' AND e2.name='Air' AND r.name='Fumée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Terre' AND e2.name='Feu' AND r.name='Lave' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Air' AND r.name='Pluie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Terre' AND e2.name='Air' AND r.name='Poussière' ON CONFLICT (element1_id,element2_id) DO NOTHING;

-- TIER 2
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lave' AND e2.name='Eau' AND r.name='Pierre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lave' AND e2.name='Air' AND r.name='Obsidienne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vapeur' AND e2.name='Air' AND r.name='Nuage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Boue' AND e2.name='Feu' AND r.name='Brique' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Terre' AND e2.name='Pluie' AND r.name='Plante' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Air' AND r.name='Sable' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Océan' AND e2.name='Feu' AND r.name='Sel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pluie' AND e2.name='Air' AND r.name='Neige' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Neige' AND r.name='Glace' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Air' AND r.name='Vent' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Nuage' AND e2.name='Vent' AND r.name='Tempête' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Pluie' AND r.name='Rivière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Eau' AND r.name='Océan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lave' AND e2.name='Terre' AND r.name='Volcan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Océan' AND e2.name='Terre' AND r.name='Île' ON CONFLICT (element1_id,element2_id) DO NOTHING;

-- TIER 3
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Feu' AND r.name='Métal' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Pierre' AND r.name='Mur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Tempête' AND e2.name='Feu' AND r.name='Orage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Pluie' AND r.name='Arbre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Boue' AND r.name='Champignon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Eau' AND r.name='Rose' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Terre' AND r.name='Blé' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Océan' AND r.name='Algue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Terre' AND r.name='Montagne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Sable' AND r.name='Désert' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Arbre' AND r.name='Forêt' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Boue' AND e2.name='Plante' AND r.name='Marais' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Glace' AND e2.name='Montagne' AND r.name='Glacier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pluie' AND e2.name='Soleil' AND r.name='Arc-en-ciel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Feu' AND r.name='Soleil' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Nuage' AND r.name='Lune' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sable' AND e2.name='Feu' AND r.name='Verre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Feu' AND r.name='Charbon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Arbre' AND r.name='Fossile' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Pierre' AND r.name='Cuivre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Air' AND r.name='Papier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Air' AND r.name='Tissu' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Terre' AND e2.name='Plante' AND r.name='Animal' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Eau' AND r.name='Poisson' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Air' AND r.name='Oiseau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Tissu' AND r.name='Araignée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Pierre' AND r.name='Coquillage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Océan' AND e2.name='Plante' AND r.name='Corail' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Feu' AND r.name='Huile' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Neige' AND r.name='Laine' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poussière' AND e2.name='Eau' AND r.name='Boue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fumée' AND e2.name='Eau' AND r.name='Nuage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Brique' AND r.name='Mur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Terre' AND r.name='Montagne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Vapeur' AND r.name='Nuage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Soleil' AND r.name='Arbre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Nuage' AND r.name='Tempête' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Lave' AND r.name='Volcan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Rivière' AND r.name='Océan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Volcan' AND e2.name='Océan' AND r.name='Île' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Glace' AND e2.name='Feu' AND r.name='Eau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Montagne' AND e2.name='Feu' AND r.name='Volcan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Montagne' AND e2.name='Neige' AND r.name='Glacier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Forêt' AND e2.name='Eau' AND r.name='Marais' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Glace' AND e2.name='Eau' AND r.name='Rivière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Glacier' AND e2.name='Feu' AND r.name='Rivière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Eau' AND r.name='Sable' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Désert' AND e2.name='Eau' AND r.name='Plante' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Marais' AND e2.name='Feu' AND r.name='Charbon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rivière' AND e2.name='Eau' AND r.name='Océan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sel' AND e2.name='Eau' AND r.name='Océan' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vent' AND e2.name='Sable' AND r.name='Désert' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Algue' AND e2.name='Feu' AND r.name='Sel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pluie' AND e2.name='Nuage' AND r.name='Tempête' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Neige' AND e2.name='Terre' AND r.name='Glace' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vent' AND e2.name='Feu' AND r.name='Fumée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vent' AND e2.name='Eau' AND r.name='Pluie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Nuage' AND r.name='Arc-en-ciel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Océan' AND r.name='Sel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Obsidienne' AND e2.name='Feu' AND r.name='Lave' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sable' AND e2.name='Air' AND r.name='Poussière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
-- ============================================
-- COMBINATIONS PART 2: Tier 4-5 (100 combos)
-- ============================================

-- TIER 4
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Mur' AND r.name='Maison' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Feu' AND r.name='Épée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Arbre' AND r.name='Bouclier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Blé' AND e2.name='Pierre' AND r.name='Farine' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Farine' AND e2.name='Feu' AND r.name='Pain' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Blé' AND e2.name='Eau' AND r.name='Bière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rose' AND e2.name='Eau' AND r.name='Vin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Sel' AND r.name='Fromage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Maison' AND r.name='Village' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Mur' AND e2.name='Pierre' AND r.name='Château' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Château' AND e2.name='Épée' AND r.name='Roi' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Épée' AND e2.name='Bouclier' AND r.name='Soldat' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Métal' AND r.name='Marteau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Pierre' AND r.name='Roue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Eau' AND r.name='Bateau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Feu' AND r.name='Étoile' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fossile' AND e2.name='Terre' AND r.name='Pétrole' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Cuivre' AND e2.name='Feu' AND r.name='Bronze' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Charbon' AND r.name='Acier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Eau' AND r.name='Or' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Lune' AND r.name='Argent' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Orage' AND e2.name='Métal' AND r.name='Électricité' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Papier' AND r.name='Livre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Maison' AND e2.name='Livre' AND r.name='École' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Araignée' AND e2.name='Arbre' AND r.name='Soie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Coquillage' AND e2.name='Sable' AND r.name='Perle' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Plante' AND r.name='Caoutchouc' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Plante' AND r.name='Cheval' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Forêt' AND r.name='Loup' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Rose' AND r.name='Papillon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fossile' AND e2.name='Pierre' AND r.name='Dinosaure' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Farine' AND e2.name='Miel' AND r.name='Gâteau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Plante' AND r.name='Soupe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rose' AND e2.name='Animal' AND r.name='Abeille' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Abeille' AND e2.name='Rose' AND r.name='Miel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Marais' AND r.name='Serpent' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Maison' AND r.name='Chat' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Loup' AND e2.name='Maison' AND r.name='Chien' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Blé' AND r.name='Vache' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Laine' AND r.name='Mouton' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Boue' AND r.name='Cochon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Maison' AND r.name='Poule' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poule' AND e2.name='Poule' AND r.name='Oeuf' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Maison' AND e2.name='Animal' AND r.name='Ferme' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rose' AND e2.name='Maison' AND r.name='Jardin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Rivière' AND r.name='Pont' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Soleil' AND r.name='Horloge' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Air' AND r.name='Cloche' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Océan' AND r.name='Ancre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Étoile' AND r.name='Boussole' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Brique' AND e2.name='Arbre' AND r.name='Maison' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Marteau' AND e2.name='Arbre' AND r.name='Maison' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Blé' AND e2.name='Feu' AND r.name='Pain' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Marteau' AND e2.name='Métal' AND r.name='Épée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Acier' AND e2.name='Arbre' AND r.name='Bouclier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Caoutchouc' AND e2.name='Métal' AND r.name='Roue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Argent' AND e2.name='Feu' AND r.name='Or' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Cuivre' AND e2.name='Eau' AND r.name='Argent' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Bronze' AND e2.name='Feu' AND r.name='Acier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Château' AND r.name='Roi' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Village' AND e2.name='Mur' AND r.name='Château' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Île' AND e2.name='Maison' AND r.name='Village' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fossile' AND e2.name='Feu' AND r.name='Pétrole' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lune' AND e2.name='Soleil' AND r.name='Étoile' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vache' AND e2.name='Sel' AND r.name='Fromage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Feu' AND r.name='Sel' ON CONFLICT (element1_id,element2_id) DO NOTHING;

-- TIER 5
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Village' AND r.name='Ville' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ville' AND e2.name='Livre' AND r.name='Civilisation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Électricité' AND r.name='Robot' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Électricité' AND e2.name='Verre' AND r.name='Ordinateur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Acier' AND e2.name='Feu' AND r.name='Fusée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lave' AND e2.name='Oiseau' AND r.name='Dragon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Feu' AND r.name='Phoenix' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Cheval' AND e2.name='Arc-en-ciel' AND r.name='Licorne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Loup' AND e2.name='Lune' AND r.name='Vampire' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Boue' AND e2.name='Soldat' AND r.name='Zombie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vapeur' AND e2.name='Or' AND r.name='Génie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Livre' AND e2.name='Feu' AND r.name='Sorcier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Forêt' AND e2.name='Lune' AND r.name='Elfe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Montagne' AND e2.name='Marteau' AND r.name='Nain' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Charbon' AND e2.name='Pierre' AND r.name='Diamant' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pétrole' AND e2.name='Feu' AND r.name='Plastique' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Étoile' AND e2.name='Terre' AND r.name='Planète' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Livre' AND r.name='Bibliothèque' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='École' AND e2.name='Livre' AND r.name='Université' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Électricité' AND e2.name='Air' AND r.name='Téléphone' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Verre' AND e2.name='Métal' AND r.name='Ampoule' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vapeur' AND e2.name='Roue' AND r.name='Locomotive' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Métal' AND r.name='Avion' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Bateau' AND e2.name='Poisson' AND r.name='Sous-marin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Maison' AND e2.name='Potion' AND r.name='Hôpital' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Livre' AND e2.name='Plante' AND r.name='Médecin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Air' AND e2.name='Métal' AND r.name='Musique' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Musique' AND r.name='Guitare' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Métal' AND r.name='Tambour' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Arc-en-ciel' AND r.name='Peinture' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Marteau' AND r.name='Statue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Or' AND e2.name='Roi' AND r.name='Couronne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Or' AND e2.name='Or' AND r.name='Trésor' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Bateau' AND e2.name='Épée' AND r.name='Pirate' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lune' AND e2.name='Zombie' AND r.name='Fantôme' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Tissu' AND e2.name='Fossile' AND r.name='Momie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Lune' AND r.name='Sirène' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Cheval' AND e2.name='Soldat' AND r.name='Centaure' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vache' AND e2.name='Soldat' AND r.name='Minotaure' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Lion' AND r.name='Griffon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Océan' AND e2.name='Serpent' AND r.name='Kraken' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pierre' AND e2.name='Soldat' AND r.name='Golem' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Loup' AND e2.name='Soleil' AND r.name='Loup-garou' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rose' AND e2.name='Papillon' AND r.name='Fée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Montagne' AND e2.name='Soldat' AND r.name='Troll' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Serpent' AND e2.name='Lune' AND r.name='Basilic' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Cheval' AND e2.name='Oiseau' AND r.name='Pégase' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Dragon' AND e2.name='Dragon' AND r.name='Hydre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Dragon' AND e2.name='Loup' AND r.name='Chimère' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Sorcier' AND r.name='Potion' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Feu' AND e2.name='Blé' AND r.name='Chocolat' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Charbon' AND r.name='Café' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Eau' AND e2.name='Plante' AND r.name='Thé' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pain' AND e2.name='Fromage' AND r.name='Pizza' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Algue' AND r.name='Sushi' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Miel' AND e2.name='Feu' AND r.name='Bonbon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Glace' AND e2.name='Miel' AND r.name='Glace (crème)' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Farine' AND e2.name='Huile' AND r.name='Croissant' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vin' AND e2.name='Air' AND r.name='Champagne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Bière' AND e2.name='Charbon' AND r.name='Whisky' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Montagne' AND r.name='Éléphant' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Soleil' AND r.name='Lion' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Montagne' AND r.name='Aigle' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Océan' AND r.name='Baleine' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Épée' AND r.name='Requin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Air' AND r.name='Dauphin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Coquillage' AND e2.name='Animal' AND r.name='Tortue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Marais' AND r.name='Grenouille' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Lune' AND r.name='Hibou' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Charbon' AND r.name='Corbeau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Dinosaure' AND e2.name='Feu' AND r.name='Dragon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Château' AND e2.name='Roi' AND r.name='Civilisation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ville' AND e2.name='Électricité' AND r.name='Civilisation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ordinateur' AND e2.name='Métal' AND r.name='Robot' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Acier' AND e2.name='Électricité' AND r.name='Fusée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plastique' AND e2.name='Électricité' AND r.name='Téléphone' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Forêt' AND r.name='Elfe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Montagne' AND r.name='Nain' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vampire' AND e2.name='Soleil' AND r.name='Poussière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Nain' AND e2.name='Or' AND r.name='Diamant' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Bibliothèque' AND e2.name='Maison' AND r.name='École' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ordinateur' AND e2.name='Livre' AND r.name='Université' ON CONFLICT (element1_id,element2_id) DO NOTHING;
-- ============================================
-- COMBINATIONS PART 3: Tier 6-10 (100+ combos)
-- ============================================

-- TIER 6
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT e1.id,e1.id,r.id FROM elements e1,elements r WHERE e1.name='Étoile' AND r.name='Galaxie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Étoile' AND e2.name='Galaxie' AND r.name='Trou noir' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Soleil' AND r.name='Supernova' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Galaxie' AND e2.name='Nuage' AND r.name='Nébuleuse' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fusée' AND e2.name='Planète' AND r.name='Satellite' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fusée' AND e2.name='Maison' AND r.name='Station spatiale' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Robot' AND e2.name='Livre' AND r.name='Intelligence artificielle' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ordinateur' AND e2.name='Ordinateur' AND r.name='Internet' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Internet' AND e2.name='Téléphone' AND r.name='Réseau social' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ordinateur' AND e2.name='Épée' AND r.name='Jeu vidéo' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Peinture' AND e2.name='Électricité' AND r.name='Cinéma' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Verre' AND e2.name='Soleil' AND r.name='Photographie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Verre' AND e2.name='Étoile' AND r.name='Télescope' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Verre' AND e2.name='Eau' AND r.name='Microscope' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vie' AND e2.name='Livre' AND r.name='ADN' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poisson' AND e2.name='Poussière' AND r.name='Virus' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Potion' AND e2.name='Virus' AND r.name='Vaccin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Champignon' AND e2.name='Potion' AND r.name='Antibiotique' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Feu' AND e2.name='Diamant' AND r.name='Atome' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Atome' AND e2.name='Feu' AND r.name='Bombe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Métal' AND r.name='Énergie solaire' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Vent' AND e2.name='Métal' AND r.name='Éolienne' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rivière' AND e2.name='Mur' AND r.name='Barrage' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Roue' AND e2.name='Métal' AND r.name='Voiture' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Roue' AND e2.name='Roue' AND r.name='Vélo' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Avion' AND e2.name='Vent' AND r.name='Hélicoptère' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Château' AND e2.name='Pierre' AND r.name='Cathédrale' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sable' AND e2.name='Château' AND r.name='Pyramide' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Statue' AND e2.name='Lune' AND r.name='Sphinx' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Montagne' AND e2.name='Étoile' AND r.name='Olympe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Épée' AND e2.name='Diamant' AND r.name='Excalibur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Or' AND e2.name='Vin' AND r.name='Graal' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Sorcier' AND r.name='Baguette magique' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Or' AND e2.name='Sorcier' AND r.name='Pierre philosophale' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Miel' AND e2.name='Étoile' AND r.name='Ambroisie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Nuage' AND e2.name='Ange' AND r.name='Paradis' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lave' AND e2.name='Démon' AND r.name='Enfer' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Étoile' AND r.name='Ange' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Feu' AND e2.name='Vampire' AND r.name='Démon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Peinture' AND e2.name='Mur' AND r.name='Tableau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Musique' AND e2.name='Ville' AND r.name='Orchestre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Musique' AND e2.name='Château' AND r.name='Opéra' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Maison' AND e2.name='Peinture' AND r.name='Théâtre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Papier' AND e2.name='Rose' AND r.name='Poème' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Papier' AND e2.name='Ville' AND r.name='Journal' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Papier' AND e2.name='Terre' AND r.name='Carte' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Tissu' AND e2.name='Vent' AND r.name='Drapeau' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Or' AND e2.name='Papier' AND r.name='Monnaie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Monnaie' AND e2.name='Maison' AND r.name='Banque' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Mur' AND e2.name='Métal' AND r.name='Prison' ON CONFLICT (element1_id,element2_id) DO NOTHING;

-- TIER 7
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Robot' AND e2.name='Soldat' AND r.name='Cyborg' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='ADN' AND e2.name='ADN' AND r.name='Clone' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='ADN' AND e2.name='Feu' AND r.name='Mutant' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Lune' AND r.name='Ninja' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Épée' AND r.name='Samouraï' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Sable' AND r.name='Gladiateur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Bateau' AND r.name='Viking' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Roi' AND e2.name='Pyramide' AND r.name='Pharaon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Roi' AND e2.name='Roi' AND r.name='Empereur' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soldat' AND e2.name='Cheval' AND r.name='Chevalier' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Épée' AND r.name='Archer' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arbre' AND e2.name='Pierre' AND r.name='Catapulte' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Charbon' AND e2.name='Sable' AND r.name='Poudre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Poudre' AND e2.name='Feu' AND r.name='Dynamite' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Métal' AND e2.name='Poudre' AND r.name='Canon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Acier' AND e2.name='Roue' AND r.name='Tank' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Électricité' AND e2.name='Métal' AND r.name='Radar' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Diamant' AND e2.name='Feu' AND r.name='Laser' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arc-en-ciel' AND e2.name='Électricité' AND r.name='Hologramme' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Avion' AND e2.name='Robot' AND r.name='Drone' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Internet' AND e2.name='Monnaie' AND r.name='Cryptomonnaie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Internet' AND e2.name='Or' AND r.name='Blockchain' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Jeu vidéo' AND e2.name='Verre' AND r.name='Réalité virtuelle' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Orage' AND e2.name='Roi' AND r.name='Zeus' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Océan' AND e2.name='Roi' AND r.name='Poséidon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Enfer' AND e2.name='Roi' AND r.name='Hadès' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Orage' AND e2.name='Marteau' AND r.name='Thor' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Thor' AND e2.name='Roi' AND r.name='Odin' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Chien' AND e2.name='Momie' AND r.name='Anubis' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Serpent' AND e2.name='Sorcier' AND r.name='Méduse' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Chien' AND e2.name='Enfer' AND r.name='Cerbère' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Soleil' AND r.name='Icare' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Feu' AND e2.name='Soldat' AND r.name='Prométhée' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Thor' AND e2.name='Marteau' AND r.name='Mjolnir' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Farine' AND e2.name='Eau' AND r.name='Spaghetti' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pain' AND e2.name='Vache' AND r.name='Hamburger' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soupe' AND e2.name='Spaghetti' AND r.name='Ramen' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pain' AND e2.name='Désert' AND r.name='Taco' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Farine' AND e2.name='Oeuf' AND r.name='Crêpe' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Pain' AND e2.name='Miel' AND r.name='Donut' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Blé' AND e2.name='Feu' AND r.name='Popcorn' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fromage' AND e2.name='Feu' AND r.name='Fondue' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Animal' AND e2.name='Rivière' AND r.name='Crocodile' ON CONFLICT (element1_id,element2_id) DO NOTHING;

-- TIER 8-10
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Station spatiale' AND e2.name='Ville' AND r.name='Colonie spatiale' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Planète' AND e2.name='Plante' AND r.name='Terraformation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Horloge' AND e2.name='Fusée' AND r.name='Voyage temporel' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Trou noir' AND e2.name='Étoile' AND r.name='Téléportation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Île' AND e2.name='Lune' AND r.name='Avalon' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Île' AND e2.name='Océan' AND r.name='Atlantide' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Ville' AND e2.name='Or' AND r.name='El Dorado' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Livre' AND e2.name='Université' AND r.name='Philosophie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Télescope' AND e2.name='Étoile' AND r.name='Astronomie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Microscope' AND e2.name='Animal' AND r.name='Biologie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Potion' AND e2.name='Or' AND r.name='Alchimie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Zombie' AND r.name='Nécromancie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Étoile' AND r.name='Divination' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Épée' AND r.name='Enchantement' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Dragon' AND r.name='Invocation' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Sorcier' AND e2.name='Animal' AND r.name='Métamorphose' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Livre' AND e2.name='Sorcier' AND r.name='Grimoire' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Potion' AND e2.name='Étoile' AND r.name='Elixir' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Supernova' AND e2.name='Supernova' AND r.name='Big Bang' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Galaxie' AND e2.name='Galaxie' AND r.name='Univers' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Création' AND e2.name='Destruction' AND r.name='Équilibre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Horloge' AND e2.name='Étoile' AND r.name='Temps' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Soleil' AND e2.name='Lune' AND r.name='Lumière' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lune' AND e2.name='Trou noir' AND r.name='Ombre' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Plante' AND e2.name='Étoile' AND r.name='Vie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fossile' AND e2.name='Trou noir' AND r.name='Mort' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rose' AND e2.name='Soleil' AND r.name='Amour' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Livre' AND e2.name='Étoile' AND r.name='Sagesse' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Lune' AND e2.name='Nuage' AND r.name='Rêve' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Rêve' AND e2.name='Vampire' AND r.name='Cauchemar' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Oiseau' AND e2.name='Liberté' AND r.name='Espoir' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Arc-en-ciel' AND e2.name='Rêve' AND r.name='Imagination' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Temps' AND e2.name='Univers' AND r.name='Éternité' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Civilisation' AND e2.name='Fusée' AND r.name='Galaxie' ON CONFLICT (element1_id,element2_id) DO NOTHING;
INSERT INTO combinations (element1_id, element2_id, result_id) SELECT LEAST(e1.id,e2.id),GREATEST(e1.id,e2.id),r.id FROM elements e1,elements e2,elements r WHERE e1.name='Fusée' AND e2.name='Étoile' AND r.name='Planète' ON CONFLICT (element1_id,element2_id) DO NOTHING;
