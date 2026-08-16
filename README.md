<div align="center">

<img src="icons/coursera.png" width="96" height="96" alt="Coursera Solver Logo" style="border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);" />

# Coursera Solver AI

**The intelligent AI-powered automation and quiz solver extension for Coursera.**  
*Instant quiz solving with Groq (Llama 3.3 70B) & Google Gemini, all-in-one course completion, and a sleek Dark Glassmorphism interface.*

[![GitHub Stars](https://img.shields.io/github/stars/majghirou-mohamedriyad/Coursera-Solver?style=for-the-badge&logo=github&color=fbbf24&logoColor=white)](https://github.com/majghirou-mohamedriyad/Coursera-Solver/stargazers)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=for-the-badge&logo=open-source-initiative&logoColor=white)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](manifest.json)
[![AI Providers](https://img.shields.io/badge/AI-Groq%20%7C%20Gemini%202.5-8b5cf6?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)

<br />

**Language / Langue :**  
**[ 🇬🇧 English ](README.md)** • [ 🇫🇷 Français ](README.fr.md)

</div>

---

## ⚡ Key Features

### 🧠 1. AI Quiz Solver & Semantic Intelligence
- ✨ **Solve This Quiz (Instant Solution):** Automatically parses active quiz questions and accurately selects/types correct answers (Single choice, Multiple selection checkboxes, Text inputs, and True/False).
- 🤖 **Dual AI Engines (Multi-LLM):** Direct integration with **Google Gemini 2.5 Flash / Pro** and **Groq Cloud (Llama 3.3 70B)** for maximum accuracy with sub-2-second response latency.
- 💡 **Pedagogical Explanations ("Why this answer?"):** Interactive expandable cards on each question providing a clear 1-sentence reasoning behind every selected answer.
- 🎨 **Dark Glassmorphism Answer Badges:** Beautiful in-page UI cards showing highlighted answers and verification status, without intrusive emojis or watermarks.

### 🚀 2. Multi-Quiz Course Automation
- 🚀 **Solve All Quizzes:** Automatically finds, navigates, solves, and submits every single quiz across the course in pipeline mode.

### ⏩ 3. Modular Quick Actions & Auto-Refresh
- 🎬 **Skip Videos:** Instantly marks uncompleted videos as watched via Coursera's native backend API without playback waiting.
- 📖 **Skip Readings:** Completes all reading modules in seconds.
- 💬 **Skip Discussions:** Auto-submits required discussion forum prompts and validates forum participation.
- 🔌 **Skip Plugins / Labs:** Marks Jupyter notebooks, widgets, and practice labs as finished with intelligent auto-completion.
- 🔄 **Smart Auto-Refresh:** Automatically refreshes the Coursera page as soon as a batch finishes so you immediately see updated checkmarks.

### 🛡️ 4. Security, Privacy & Clean UX
- ⏱️ **Human-like Simulation & Adjustable Speed:** Switch between *Instant*, *Human-like (1-3s delay)*, and *Slow & Steady (3-6s delay)* to simulate realistic browsing.
- 📜 **Auto Honor Code & In-Page Clicker:** Automatically checks the honor code checkbox and clicks "Mark as completed" buttons for labs and discussions.
- 🔒 **100% Client-Side Privacy:** Zero telemetry or user tracking; API keys are stored solely in your local browser storage (`chrome.storage.local`).
- 💎 **Modern Vector UI (No Emojis):** Modern dark theme with crisp vector SVG icons and responsive controls without annoying confirmation popups.

---

## 📥 Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/majghirou-mohamedriyad/Coursera-Solver.git
   ```
2. Open Google Chrome and navigate to: `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** (*Charger l'extension non empaquetée*).
5. Select the `Coursera-Solver` project directory.
6. Click the extension icon in Chrome, configure your free API key, and start learning! ✓

---

## 🔑 Free API Keys Setup

The extension natively supports two ultra-fast, 100% free AI providers:

### 1. Google Gemini (Recommended)
- Get your free API key on [Google AI Studio](https://aistudio.google.com/api-keys).
- Supported models: `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-2.0-flash`.

### 2. Groq Cloud
- Get your free API key on [Groq Console](https://console.groq.com/keys).
- Supported model: `llama-3.3-70b-versatile`.

> **Setup:** Open the extension popup, choose your provider (Gemini or Groq), paste your API key, and click **Save**.

---

## 🧑‍💻 How to Use

### 1. Complete the whole course in 1 click
1. Open your Coursera course home page.
2. Open the extension and click **⚡ Complete Everything (All-in-One)**.
3. Watch the extension validate videos, readings, discussions, labs, and solve all course quizzes automatically!

### 2. Solve a specific quiz
1. Open any quiz page on Coursera.
2. Open the extension and click **✨ Solve This Quiz**.
3. Answers are immediately filled and highlighted with a clean verification badge.

---

## 🛠️ Tech Stack

- **Architecture:** Manifest V3 (Chrome Extension)
- **Languages:** Modern JavaScript (ES6+), HTML5, CSS3
- **AI APIs:** Google Gemini API (`v1beta`), Groq Cloud API
- **Design:** Modern Dark Glassmorphism, Pure SVG Vector Icons

---

## ⚠️ Disclaimer

This project is intended for **educational and personal research purposes only**. Users are responsible for complying with Coursera's Terms of Service.

---

<div align="center">

Maintained with ❤️ by **[Mohamed Riyad Majghirou](https://github.com/majghirou-mohamedriyad)**

⭐ If you find this project helpful, please consider giving it a star on GitHub!

</div>
