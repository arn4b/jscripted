---
sidebar_position: 3
id: lazy_load
title: Lazy Load
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's begin

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