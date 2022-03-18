---
sidebar_position: 2
id: render_on_scroll
title: Render on Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's Begin

One of the most common needs for detecting element visibility is for animating or transitioning content. For this example, let’s say we want to animate some text when it becomes visible, that is , when the element comes into the viewport.

```html
<section class="container">
    <h1>Example 1</h1>
    <p>...lorem ipsum...</p>
    <h2 class="animated-text">Animated Text</h2>
</section>
```

In this example, lets say we have thousands of line of text in the `lorem ipsum` section, and at the end, we have a subheading that we want to be rendered with animation only once we reach the subheader. To implement this is basic js, we use the IntersectionObserver API.

But before we get into adding the JS, we need to add some CSS for the animation to look good ✨.

```css
.animated-text { 
    /* before the item is scrolled into the viewport*/
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1s ease, transform 1s ease;
}

.animated-text.visible {
    /* once the item comes into the viewport */
  opacity: 1;
  transform: translateX(0);
}
```

Lets start implementing the IntersectionObserver API now 😃.

```js
// first we select an item to transition
// in our case, it is the element with classname .animated-text

const target = document.querySelector('.animated-text')

// next we create the function that will be called when the element enters the viewport.

function handleIntersection(entries) {

    // The callback will return an array of entries, even if you are only observing a single item

    // Because we are dealing with an array, we need to loop over each of its items and check if they intersect. If so, we add a CSS class.

    entries.map((entry) => {
        if(entry.isIntersecting){  //IntersectionObserver method to see if the element is in the viewport or not
            entry.target.classList.add('visible')   //adding the visible classname 
        } else {
            entry.target.classList.remove('visible')    //else removing the visible classname
        }
    })
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration

const observer = new IntersectionObserver(handleIntersection)

// Finally start observing the target element
observer.observe(target)
```
And thats it! Using a few methods of the IntersectionObserver API, we now can make an element appear or disappear depending on its position in the viewport.

## Final Code for Render on Scroll usng IntersectionObserver

```js
const target = document.querySelector('.animated-text')

function handleIntersection(entries) {
  
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    })
}

const observer = new IntersectionObserver(handleIntersection)

observer.observe(target)
```
