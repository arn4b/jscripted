---
sidebar_position: 5
id: infinite_scroll
title: Infinite Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

# Infinite Scrolling with Intersection Observer

This documentation explains a JavaScript code snippet that implements infinite scrolling using the Intersection Observer API. It dynamically loads new cards when the user reaches the bottom of the page.

## Code Overview

```javascript
const cards = document.querySelectorAll('.card');
const target = document.querySelector('.card:last-child');

function InfiniteObserver(entries) {
    const lastCard = entries[0];

    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(target);
}

const options = {
    rootMargin: '100px'
}

const lastCardObserver = new IntersectionObserver(InfiniteObserver, options);

lastCardObserver.observe(target);

cards.forEach(card => {
    observer.observe(card);
});

const cardContainer = document.querySelector('.card-container');

function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
    }
}
```

- The `cards` variable stores a collection of elements with the class "card." These represent existing card elements on the page.

- The `target` variable points to the last card element on the page, which serves as the target for the Intersection Observer to trigger the loading of new cards when it becomes visible.

- The `InfiniteObserver` function is the callback executed when the target card enters the viewport. It checks if the target card is intersecting with the viewport, and if so, it calls the `loadNewCards()` function to load additional cards. It then unobserves the previously intersected card and observes the new target card.

- The `options` object is used to configure the Intersection Observer. It sets a `rootMargin` of '100px', creating an intersection margin around the viewport's bottom edge.

- A new Intersection Observer named `lastCardObserver` is created, using the `InfiniteObserver` function as its callback and the defined `options`.

- The observer is started by calling `lastCardObserver.observe(target)`, observing the last card element initially.

- Existing card elements in the `cards` collection are observed using a separate `observer`.

- The `loadNewCards` function generates and appends new card elements to the card container when called.

## Usage

To implement infinite scrolling with Intersection Observer in your project:

1. Include the JavaScript code within your HTML document.

2. Ensure you have card elements with the "card" class on your webpage.

3. As the user scrolls down the page and reaches the last card, new cards will be dynamically loaded and appended to the card container.

4. You can customize the number and content of newly loaded cards by modifying the `loadNewCards` function.

## Conclusion

This code demonstrates how to implement infinite scrolling on a webpage using the Intersection Observer API. It allows you to efficiently load and display new content as the user scrolls, improving the user experience and page performance.
