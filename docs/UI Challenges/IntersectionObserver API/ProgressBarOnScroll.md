---
sidebar_position: 7
id: progress
title: Progress Bar on Content Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

# Reading Progress with Intersection Observer Documentation

This documentation explains a JavaScript code snippet that uses the Intersection Observer API to track and display the reading progress of a post as the user scrolls through it.

## Code Overview

```javascript
const post = document.querySelector(".post");
const progress = document.querySelector("#reading-progress");
let inViewport = false;

let observer = new IntersectionObserver(handler);

function handler(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            inViewport = true;
        else
            inViewport = false;
    });
}

observer.observe(post);

function getScrollProgress(element) {
    let coords = element.getBoundingClientRect();
    let height = coords.height;
    let progressPercentage = 0;

    if (inViewport && coords.top < 0) {
        progressPercentage = (Math.abs(coords.top) / height) * 100;
    }

    return progressPercentage;
}

function showReadingProgress() {
    progress.setAttribute("value", getScrollProgress(post));
}

window.onscroll = showReadingProgress;
```

- The `post` variable is assigned a reference to an HTML element with the class "post," representing the post content.

- The `progress` variable is assigned a reference to an HTML element with the id "reading-progress," which will display the reading progress.

- The `inViewport` variable is used to track whether the post is currently in the viewport.

- An `IntersectionObserver` is set up with a callback function named `handler`. This callback will be executed when the `post` element enters or exits the viewport.

- Inside the `handler` function, we loop through the `entries` array and set the `inViewport` variable based on whether the `post` element is intersecting with the viewport.

- The `observer.observe(post)` line starts observing the `post` element for intersection.

- The `getScrollProgress` function calculates the reading progress based on the position of the `post` element in the viewport. It returns a percentage value.

- The `showReadingProgress` function updates the `value` attribute of the `progress` element with the reading progress percentage.

- Finally, the `window.onscroll` event listener triggers the `showReadingProgress` function as the user scrolls, updating the reading progress.

## Usage

To implement reading progress tracking on a post in your project:

1. Include the JavaScript code within your HTML document.

2. Ensure you have a post content element with the class "post" and an HTML element with the id "reading-progress" to display the progress.
```html
<progress id="reading-progress" max="100" value="0"></progress>
<article class="post">...lorem ipsum...</article>
```

3. As the user scrolls through the post, the reading progress will be displayed in the "reading-progress" element.

4. You can customize the styling and behavior of the progress indicator as needed.

## Conclusion

This Intersection Observer code simplifies the implementation of reading progress tracking as a user scrolls through a post, providing valuable feedback on their progress.
