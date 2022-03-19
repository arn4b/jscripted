---
sidebar_position: 3
id: lazy_load
title: Lazy Load
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's begin

```css
.lazyload {
  opacity: 0;
  width: 100%;
  height: 360px;
  transition: opacity 0.5s ease;
  vertical-align: middle;
}
.lazyload.loaded {
  opacity: 1;
  height: auto;
}
```

```js
const images = document.querySelectorAll('.lazyload');

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add('loaded')
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

images.forEach(image => observer.observe(image));
```