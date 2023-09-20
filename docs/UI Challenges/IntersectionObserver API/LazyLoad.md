---
sidebar_position: 3
id: lazy_load
title: Lazy Load
tags:
  - IntersectionObserver
  - UI Challenge
---

This documentation explains a JavaScript code snippet that uses the Intersection Observer API to implement lazy loading for images. It loads images only when they become visible in the viewport.

## Code Overview

```javascript
const images = document.querySelectorAll('.lazyload');

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add('loaded');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

images.forEach((image) => observer.observe(image));
```

- The `images` variable is assigned a collection of elements with the class "lazyload" using `document.querySelectorAll()`. These elements are images that we want to load lazily when they become visible in the viewport.

- The `handleIntersection` function is a callback function that executes whenever an observed element intersects with the viewport. It takes an array of `entries` as its parameter.

- Within the function, we loop through each entry in the `entries` array. If an entry is considered intersecting (meaning the target element is within the viewport), we perform the following actions:
  - Set the `src` attribute of the target image to the value stored in its `data-src` attribute. This loads the actual image when it becomes visible.
  - Add the "loaded" class to the target image. This can be used for additional styling or tracking purposes.
  - Call `observer.unobserve(entry.target)` to stop observing the target element, as we only want to load it once.

- We create a new instance of the Intersection Observer by passing in the `handleIntersection` function as the callback. We don't specify any options, so the default options are used.

- Finally, we loop through each image element in the `images` collection and start observing them using the `observe` method of the observer.

## Usage

To implement lazy loading for images in your project using this code, follow these steps:

1. Include the JavaScript code within your HTML document.

2. Add images to your HTML with the "lazyload" class and set the `data-src` attribute to the actual image URL that you want to load lazily.

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


3. When an image with the "lazyload" class becomes visible in the viewport, its `src` attribute will be updated, and it will be loaded. The "loaded" class will also be added for styling purposes.

4. The observer will automatically unobserve the image once it has been loaded, ensuring that it's not reloaded unnecessarily.

## Conclusion

This Intersection Observer code simplifies the implementation of lazy loading for images, enhancing the performance of your web pages by loading images only when they are needed, reducing initial page load times.
