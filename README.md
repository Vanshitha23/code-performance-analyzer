# 🚀 Why Your Code Is Slow

A developer-focused performance analyzer built with **React + JavaScript** that inspects JavaScript and Java code to detect performance bottlenecks, estimate time complexity, and provide actionable optimization hints.

🌐 **Live Demo**: https://your-vercel-link.vercel.app

---

## 🧠 What This Tool Does

This tool helps developers understand **why their code may be slow** by analyzing common algorithmic patterns such as:

- Nested loops
- Recursion
- Costly lookup operations inside loops
- Deep nesting and repeated work

It estimates **time complexity** using heuristic analysis and explains performance issues in a **human-readable** way.

---

## ✨ Features

- 🔍 Detects nested loops and loop depth
- 🧬 Identifies recursion and flags potential exponential behavior
- ⚠️ Warns about costly operations like `includes()`, `indexOf()`, `find()`
- 📊 Estimates time complexity: `O(1)` → `O(n³)` and beyond
- 💡 Provides contextual optimization tips
- 🌗 Dark, developer-friendly UI inspired by modern code editors
- 🌐 Fully client-side (no backend)

---

## 🛠️ Tech Stack

- **React**
- **JavaScript**
- **Vite**
- **HTML & CSS (inline styling)**

---

## ⚙️ How It Works

The analyzer uses **pattern-based heuristic analysis**, not compiler-level parsing.

Key ideas:
- Loop nesting depth → time complexity estimation
- Function self-calls → recursion detection
- Costly operations inside loops → performance warnings
- Additive vs nested loops handled separately

This approach keeps the tool **fast, explainable, and beginner-friendly**.

---

## 🧪 Supported Languages

- ✅ JavaScript (primary support)
- ⚠️ Java (heuristic support based on syntax patterns)

> Note: Since this is a static analyzer, results are best-effort estimates and may not match exact runtime behavior in all cases.

---

## 🎯 Why I Built This

To bridge the gap between **DSA theory** and **real-world code performance**.

Most beginners know Big-O notation but struggle to see how it applies to actual code. This project visualizes those concepts in a practical, interactive way.

---

## 🚀 Getting Started Locally

```bash
npm install
npm run dev

