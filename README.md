# Filter Users — Learn Open Source Collaboration with Git & GitHub

A tiny web app where developers add **their own profile card** to a shared list and learn real-world open-source workflow: fork/clone → branch → edit → commit → push → pull request → review → merge.

**Live Demo:** https://sapnendra.github.io/filterusers/  
**Maintainer:** @sapnendra • https://sapnendra.com

---

## 🎯 What you’ll learn

- How to fork/clone a repository
- Create and switch Git branches
- Make a change in code (add your card to the `users` array)
- Commit, push, and open a Pull Request (PR)
- Get a review, resolve feedback, and merge

---

## 🧰 Prerequisites

- A GitHub account
- Git installed (optional if you use GitHub’s web editor)
- Any editor: VS Code / Notepad / your favorite

---

## ⚡ Quick Start (TL;DR)

1. **Fork** this repo to your own GitHub account.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/filterusers.git
   cd filterusers
   ```
3. **Create a branch:**
   ```bash
   git checkout -b add-<your-username>-card
   ```
4. **Open the project** in an editor (VS Code recommended):
   ```bash
   code .
   ```
5. **Find the `users` array** (search for `users = [` in the repo).  
   File is commonly under `script.js` at the top.
6. **Add your card** (follow the existing object shape exactly):
   ```js
   // Example — match keys used in the file you see!
   {
      name: "Sapnendra Jaiswal",
      pic: "Your Image URL",
      bio: "Sapnendra is a software engineer with a passion for programming and design."
   }
   ```
7. **Test locally:** open `index.html` in your browser (or use the “Live Server” VS Code extension) and **search your name** in the app.
8. **Commit & push:**
   ```bash
   git add .
   git commit -m "Add <your-name> card"
   git push -u origin add-<your-username>-card
   ```
9. **Open a Pull Request (PR)** from your fork → your branch → into `main` of this repo.  
   Use a clear title: `Add <your-name> card` and a brief description.
10. I’ll review and merge. After merge, your card will appear on the live site. 🎉

---

## 📜 License

MIT (or the license defined in this repo).
