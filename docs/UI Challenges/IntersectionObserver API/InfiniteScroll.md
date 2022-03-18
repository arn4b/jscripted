---
sidebar_position: 5
id: infinite_scroll
title: Infinite Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's begin

```js
const card = document.querySelectorAll('.card');

const target = document.querySelector('.card:last-child');


function InfiniteObserver(entries) {
    const lastCard = entries[0]

    if(!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(target);
}

const options = {
    rootMargin: '100px'
}

const lastCardObserver = new IntersectionObserver(InfiniteObserver, options)

lastCardObserver.observe(target)

cards.forEach(card => {
    observer.observe(card)
})

const cardContainer = document.querySelector('.card-container')

function loadNewCards() {
    for(let i = 0; i< 10; i++) {
        const card = document.createElement("div")
        card.textContent = "New Card"
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)
    }
}
```
