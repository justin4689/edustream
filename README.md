# EduStream

Plateforme moderne de streaming et catalogue de vidéos éducatives, développée avec Next.js 15, TypeScript et Drizzle ORM.

![EduStream Home Screenshot](public/EDUSTREAM%20ACCEUIL.png)

## ✨ Fonctionnalités principales

- Recherche instantanée des vidéos par titre
- Pagination côté client avec navigation fluide
- Interface responsive et moderne (UX soignée)
- Fiches vidéos détaillées (titre, description, catégorie, miniature, lecteur intégré)
- Suggestions de vidéos similaires par catégorie
- Seed de base de données prêt à l’emploi

## 🚀 Aperçu

### Accueil avec recherche et pagination
![Accueil et recherche](public/EDUSTREAM%20ACCEUIL.png)

### Détail vidéo
![Détail vidéo](public/edustream%20details.png)

## 🛠️ Installation & Lancement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/votre-utilisateur/edustream.git
   cd edustream
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou yarn install
   ```
3. **Configurer la base de données**
   - Vérifiez le fichier `.env` (par défaut : `DB_FILE_NAME=file:local.db`)
   - Pour (ré)initialiser la base avec des vidéos démo :
     ```bash
     npx ts-node --compiler-options '{"module":"CommonJS"}' src/db/seed.ts
     ```
4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou yarn dev
   ```

Accédez à [http://localhost:3000](http://localhost:3000)

## 📂 Structure du projet

- `src/app/` : Pages Next.js (accueil, détail vidéo, layout)
- `components/` : Composants UI réutilisables (`Header`, `VideoCard`...)
- `src/db/` : Schéma et seed de la base de données

## 🙏 Contributions
Les PR et suggestions sont les bienvenues ! N’hésitez pas à ouvrir une issue ou proposer une amélioration.

## 📸 Crédits images
- Miniatures vidéos : [Unsplash](https://unsplash.com/) et images libres

---

> Projet Next.js 15 — TypeScript — Drizzle ORM — UX moderne
