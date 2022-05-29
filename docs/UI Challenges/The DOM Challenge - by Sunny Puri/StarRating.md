---
sidebar_position: 3
id: star_rating
title: Star Rating Widget
tags:
  - DOM APIs
  - UI Challenge
---

This is the challenge #1 from [Sunny Puri's](https://www.linkedin.com/in/sunnypuri/) The DOM Challenge Series.

### [PROBLEM STATEMENT LINK](https://github.com/devkodeio/the-dom-challenge/tree/main/star-rating)

:::tip

## mouseleave event

The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.

## mouseover event

The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.

:::

### Lets work on the solution

```html
<body>
  <div class="container">
    <div class="star" id="s-0"></div>
    <div class="star" id="s-1"></div>
    <div class="star" id="s-2"></div>
    <div class="star" id="s-3"></div>
    <div class="star" id="s-4"></div>
  </div>

  <div class="rating"></div>
</body>
```

```js
const stars = document.querySelectorAll(".star");
let clicked = -1;

stars.forEach((e) => {
  e.addEventListener("click", (e) => {
    clicked = e.target.id[2];
    document.querySelector(".rating").innerHTML = `Rating: ${
      parseInt(clicked) + 1
    }`;
  });
});

stars.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    const idx = e.target.id[2];
    stars.forEach((e) => (e.style.backgroundColor = "#fff"));
    stars.forEach((e) => {
      if (e.id[2] <= idx) e.style.backgroundColor = "#d400ff";
    });
  });
});

document.querySelector(".container").addEventListener("mouseleave", () => {
  stars.forEach((e) => (e.style.backgroundColor = "#fff"));
  stars.forEach((e) => {
    if (e.id[2] <= clicked) e.style.backgroundColor = "#d400ff";
  });
});
```

## FINAL CODE

```html
<body>
  <div class="container">
    <div class="star" id="s-0"></div>
    <div class="star" id="s-1"></div>
    <div class="star" id="s-2"></div>
    <div class="star" id="s-3"></div>
    <div class="star" id="s-4"></div>
  </div>

  <div class="rating"></div>
</body>

<script>
  const stars = document.querySelectorAll(".star");
  let clicked = -1;

  stars.forEach((e) => {
    e.addEventListener("click", (e) => {
      clicked = e.target.id[2];
      document.querySelector(".rating").innerHTML = `Rating: ${
        parseInt(clicked) + 1
      }`;
    });
  });

  stars.forEach((e) => {
    e.addEventListener("mouseover", (e) => {
      const idx = e.target.id[2];
      stars.forEach((e) => (e.style.backgroundColor = "#fff"));
      stars.forEach((e) => {
        if (e.id[2] <= idx) e.style.backgroundColor = "#d400ff";
      });
    });
  });

  document.querySelector(".container").addEventListener("mouseleave", () => {
    stars.forEach((e) => (e.style.backgroundColor = "#fff"));
    stars.forEach((e) => {
      if (e.id[2] <= clicked) e.style.backgroundColor = "#d400ff";
    });
  });
</script>

<style>
  .container {
    display: flex;
    gap: 1rem;
    margin: 5rem;
  }

  .star {
    box-shadow: 2px 2px 20px black;
    width: 40px;
    height: 40px;

    clip-path: polygon(
      50% 3%,
      61% 35%,
      95% 35%,
      68% 57%,
      81% 93%,
      50% 70%,
      19% 93%,
      32% 57%,
      5% 35%,
      39% 35%
    );
  }
</style>
```
