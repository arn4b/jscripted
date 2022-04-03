---
sidebar_position: 1
id: search_bar
title: Search Bar
tags:
  - DOM APIs
  - UI Challenge
---

# Search Box DOM Challenge Machine Coding

## Elements
- HTML Input field
- Div to display suggestions

## Functions

- to capture the word entered (searchHandler)
- to search the word in the provided array or API
- to populate the suggestions array
- to populate search box on click of suggestion

## Lets start with the solution

```html
<input
  type="text"
  name="cricketer"
  id="cricketer"
  class="search-input"
  placeholder="Search cricketer 🧍"
/>
<div class="suggestions">
  <!-- here list are inserted from javascript -->
</div>
```

```js
const input = document.querySelector("#cricketer");
const suggestions = document.querySelector(".suggestions");

const cricketers = [
  "MS Dhoni",
  "Virat Kohli",
  "Rohit Sharma",
  "Mohammed Shami",
  "Manish Pandey",
  "Shikhar Dhawan",
  "Jasprit Bumrah	",
  "Shreyas Iyer	",
  "KL Rahul",
  "Hardik Pandya",
  "Kuldeep Yadav",
  "Shardul Thakur",
  "Shubman Gill",
  "Navdeep Saini",
  "Ajinkya Rahane",
  "Ravichandran Ashwin",
  "Umesh Yadav",
  "Wriddhiman Saha",
  "Hanuma Vihari",
  "Rishabh Pant",
  "Cheteshwar Pujara",
  "Mohammed Siraj",
  "Prithvi Shaw",
];

function searchHandler(e) {
  let results = [];
  const inputVal = e.target.value;

  if (inputVal.length > 0) {
    results = search(inputVal);
  }

  showSuggestions(results, inputVal);
}

function search(str) {
  let results = [];

  const val = str.toLowerCase();

  for (let i = 0; i < cricketers.length; i++) {
    if (cricketers[i].toLowerCase().indexOf(val) > -1) {
      results.push(cricketers[i]);
    }
  }

  return results;
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      let item = results[i];
      const match = item.match(new RegExp(inputVal, "i"));
      item = item.replace(match[0], `<strong>${match[0]}</strong>`);
      suggestions.innerHTML += `<p>${item}</p>`;
    }

    suggestions.classList.add("has-suggestions");
  } else {
    results = [];
    suggestions.innerHTML = "";
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
  suggestions.innerHTML = "";
  suggestions.classList.remove("has-suggestions");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
```
