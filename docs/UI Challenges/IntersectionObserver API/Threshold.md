---
sidebar_position: 4
id: threshold
title: Threshold based Rendering
tags:
  - IntersectionObserver
  - UI Challenge
---

Threshold bases Rendering explains a JavaScript code snippet that utilizes the Intersection Observer API to track when an HTML element enters the viewport and triggers a specified event when it meets a certain visibility threshold.

## Code Overview

```javascript
const target = document.querySelector('.section:last-child');

const options = {
  threshold: 0.75,
}
```

- The `target` variable is assigned the reference to the last child element with the class "section" in the HTML document. This is the element we want to observe for intersection.

- The `options` object is used to configure the Intersection Observer. Here, we set the `threshold` property to 0.75, indicating that the observer should activate when 75% of the target element is visible within the viewport.

```javascript
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Log event and unobserve')
      observer.unobserve(target);
    }
  });
}
```

- The `handleIntersection` function is a callback function that executes whenever the observed element intersects with the viewport. It takes an array of `entries` as its parameter.

- Within the function, we loop through each entry in the `entries` array. If an entry is considered intersecting (meaning the target element is within the viewport), we log a message to the console, and then we call `observer.unobserve(target)` to cease observing the target element. This is commonly done to prevent multiple triggers for the same element.

```javascript
const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(target);
```

- We create a new instance of the Intersection Observer by passing in the `handleIntersection` function as the callback and the `options` object as the configuration.

- Finally, we begin observing the `target` element using the `observe` method of the observer.

## Usage

To implement this code in your project, follow these steps:

1. Embed the JavaScript code within your HTML document.

2. Ensure that there exists an HTML element with the "section" class, and it is the last child of the container you wish to monitor for intersection.

3. Adjust the `threshold` value in the `options` object to modify the intersection triggering point as needed.

4. Whenever the target element comes into view within the viewport, you will observe the message "Log event and unobserve" in your browser console, and the observer will cease monitoring the element.

## Final Code

```js
const target = document.querySelector('.section:last-child');

const options = {
  threshold: 0.75,
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Log event and unobserve')
      observer.unobserve(target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(target);
```
