# CSE343 – Web Development Labs (Fall 2026)

**Student:** Omar Ashraf Roushdy Farghally Ahmed — 24P0205
Computer and Artificial Intelligence Engineering (CAIE) – International Credit Hours Engineering Programs (ICHEP), Faculty of Engineering, Ain Shams University

| Folder | Lab | What it contains |
|---|---|---|
| [`Lab1_Git`](Lab1_Git) | Lab 1 – Git & GitHub | Text file created for the Lab 1 task (`git status` → `git add` → `git commit` → `git push`) |
| [`Lab2_Portfolio`](Lab2_Portfolio) | Lab 2 – HTML & CSS | Personal portfolio page: header + navigation, About Me, Projects (flexbox cards), Contact form, footer |
| [`Lab3_JS_Cart`](Lab3_JS_Cart) | Lab 3 – JavaScript | Cart counter using `addEventListener` (add 1/2/3, remove, reset, show quantity) |
| [`Lab4_JS_Todo`](Lab4_JS_Todo) | Lab 4 – JavaScript & TypeScript | Todo list app: type a task, click **Add Task**, the list is re-rendered from a `string[]` array (written in TypeScript, compiled to `script.js`) |
| [`Lab5_React`](Lab5_React) | Lab 5 – Intro to React | Movie watch list (add/remove, rating shown as star emojis, review) and a comments section (post, likes), built with components, props and `useState` |

## Run it
Labs 2–4 have no build step — open the `.html` file of the lab in a browser:

- Portfolio: `Lab2_Portfolio/index.html`
- JS Cart: `Lab3_JS_Cart/index.html` (open the browser console to see the cart log)
- Todo App: `Lab4_JS_Todo/index.html` (`script.js` is already compiled; to rebuild it from `script.ts` run `npm install` then `npx tsc` inside `Lab4_JS_Todo`)
- React App (Lab 5): inside `Lab5_React` run `npm install` then `npm run dev`, and open the link it prints
