<div align="center">

<img src="icons/coursera.png" width="96" height="96" alt="Coursera Solver Logo" style="border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);" />

# Coursera Solver AI

**L'extension d'automatisation et de résolution intelligente pour Coursera propulsée par IA.**  
*Résolution instantanée de quiz avec Groq (Llama 3.3 70B) & Google Gemini, complétion tout-en-un de cours, et interface moderne Dark Glassmorphism.*

[![GitHub Stars](https://img.shields.io/github/stars/majghirou-mohamedriyad/Coursera-Solver?style=for-the-badge&logo=github&color=fbbf24&logoColor=white)](https://github.com/majghirou-mohamedriyad/Coursera-Solver/stargazers)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=for-the-badge&logo=open-source-initiative&logoColor=white)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](manifest.json)
[![AI Providers](https://img.shields.io/badge/AI-Groq%20%7C%20Gemini%202.5-8b5cf6?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)

<br />

**Langue / Language :**  
[ 🇬🇧 English ](README.md) • **[ 🇫🇷 Français ](README.fr.md)**

</div>

---

## ⚡ Fonctionnalités Clés

### 🧠 1. Intelligence Artificielle & Résolution de Quiz
- ✨ **Solve This Quiz (Résolution Instantanée) :** Analyse instantanément les questions du quiz actif et sélectionne automatiquement les bonnes réponses (QCM à choix unique, choix multiples, réponses textuelles et Vrai/Faux).
- 🤖 **Double Moteur IA (Multi-LLM) :** Intégration directe avec **Google Gemini 2.5 Flash / Pro** et **Groq Cloud (Llama 3.3 70B)** pour une précision maximale et un temps de réponse inférieur à 2 secondes.
- 💡 **Explications Pédagogiques (« Why this answer? ») :** Bouton interactif dépliant sur chaque question résolue affichant le raisonnement clair de l'IA pour chaque réponse.
- 🎨 **Bandeau de Réponse Dark Glassmorphism :** Chaque question résolue affiche un badge moderne et épuré mettant en valeur la réponse choisie et la validation IA, sans émojis ni filigranes intrusifs.

### 🚀 2. Résolution Automatique Multi-Quiz
- 🚀 **Solve All Quizzes :** Détecte, navigue, résout et soumet automatiquement tous les quiz du cours en mode pipeline.

### ⏩ 3. Validation Rapide par Catégorie & Auto-Actualisation
- 🎬 **Skip Videos :** Valide instantanément toutes les vidéos non regardées via les requêtes API natives de Coursera (aucun temps de lecture nécessaire).
- 📖 **Skip Readings :** Marque toutes les lectures et pages théoriques comme complétées.
- 💬 **Skip Discussions :** Valide automatiquement les participations obligatoires aux forums et les questions ouvertes.
- 🔌 **Skip Plugins / Labs :** Valide les widgets interactifs, notebooks Jupyter, workspaces et exercices non notés.
- 🔄 **Auto-Actualisation Intelligente :** Dès qu'un traitement par lot se termine, la page Coursera se recharge automatiquement pour afficher immédiatement toutes les coches vertes.

### 🛡️ 4. Ergonomie, Sécurité & Confidentialité
- ⏱️ **Vitesse & Simulation Humaine Ajustable :** Choisissez entre *Instantané*, *Simulation Humaine (1-3s de délai)* ou *Lent & Régulier (3-6s)* pour imiter une navigation humaine naturelle.
- 📜 **Auto Honor Code & Auto-Compléteur :** Coche automatiquement la case du code d'honneur et valide automatiquement les boutons « Mark as completed » sur les labs et forums.
- 🔒 **Confidentialité Totale :** Aucune donnée personnelle n'est collectée ; vos clés API sont conservées exclusivement en local dans votre navigateur (`chrome.storage.local`).
- 💎 **Interface Moderne Pro (Zéro Emoji) :** Interface sombre épurée, icônes vectorielles SVG intégrées et navigation fluide sans popup de confirmation inutile.

---

## 📥 Installation

1. **Cloner ou télécharger le dépôt :**
   ```bash
   git clone https://github.com/majghirou-mohamedriyad/Coursera-Solver.git
   ```
2. Ouvrez Google Chrome et accédez à : `chrome://extensions/`
3. Activez le **Mode développeur** (en haut à droite).
4. Cliquez sur **Charger l'extension non empaquetée** (*Load unpacked*).
5. Sélectionnez le dossier du projet `Coursera-Solver`.
6. Cliquez sur l'icône de l'extension dans Chrome, ajoutez votre clé API gratuite et commencez ! ✓

---

## 🔑 Clés API Gratuites

L'extension prend en charge deux fournisseurs d'IA ultra-rapides et 100% gratuits :

### 1. Google Gemini (Recommandé)
- Obtenez votre clé gratuite sur [Google AI Studio](https://aistudio.google.com/api-keys).
- Modèles supportés : `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-2.0-flash`.

### 2. Groq Cloud
- Obtenez votre clé gratuite sur [Groq Console](https://console.groq.com/keys).
- Modèle ultra-rapide : `llama-3.3-70b-versatile`.

> **Configuration :** Dans la popup de l'extension, sélectionnez votre fournisseur (Gemini ou Groq), collez votre clé API et cliquez sur **Save**.

---

## 🧑‍💻 Utilisation

### 1. Compléter tout le cours en 1 clic
1. Ouvrez la page principale de votre cours Coursera.
2. Cliquez sur l'extension puis sur le bouton **⚡ Complete Everything (All-in-One)**.
3. L'extension valide automatiquement les vidéos, lectures, forums, labs et résout tous les quiz du cours !

### 2. Résoudre un quiz spécifique
1. Ouvrez la page du quiz sur Coursera.
2. Cliquez sur **✨ Solve This Quiz**.
3. Les réponses sont instantanément sélectionnées et un bandeau moderne vous indique les choix effectués.

---

## 🛠️ Stack Technique

- **Architecture :** Manifest V3 (Chrome Extension)
- **Langages :** JavaScript ES6+, HTML5, CSS3 Moderne
- **APIs IA :** Google Gemini API (`v1beta`), Groq Cloud API
- **Design :** Modern Dark Glassmorphism, Icônes Vectorielles SVG

---

## ⚠️ Avertissement (Disclaimer)

Ce projet est développé à des fins **éducatives et de recherche personnelle uniquement**. L'utilisateur est responsable de son utilisation conformément aux conditions d'utilisation de la plateforme Coursera.

---

<div align="center">

Développé par **[Mohamed Riyad Majghirou](https://github.com/majghirou-mohamedriyad)**

⭐ Si ce projet vous est utile, n'hésitez pas à lui laisser une étoile sur GitHub !

</div>
