---
sidebar_position: 7
id: progress
title: Progress Bar on Content Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's begin

```html
<progress id="reading-progress" max="100" value="0"></progress>
<article class="post">...lorem ipsum...</article>
```

```javascript
const post = document.querySelector(".post")

const progress = document.querySelector("#reading-progress")

let inViewPort = false

let observer = new IntersectionObserver(handler)

function handler(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting)
            inViewPort = true
        else 
            inViewPort = false
    })
}

observer.observe(post)

function getScrollProgress(element) {
    let coords = element.getBoundingClientRect
    let height = coords.height
    let progressPercentage = 0

    if(inViewPort && coords.top < 0){
        progressPercentage = (Math.abs(coords.top) / height) * 100
    }

    return progressPercentage
}


function showReadingProgress() {
    progress.setAttribute("value", getScrollProgress(post))
}

window.onscroll = showReadingProgress
```
