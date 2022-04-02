---
sidebar_position: 1
id: progress_bar
title: Progress Bar
tags:
  - DOM APIs
  - UI Challenge
---

## Queue based progress bar using Element.animate()

This is the challenge #5 from [Sunny Puri's](https://www.linkedin.com/in/sunnypuri/) The DOM Challenge Series.

### [PROBLEM STATEMENT LINK](https://github.com/devkodeio/the-dom-challenge/blob/main/progress-bar/README.md)

:::tip

## Element.animate()

The Element interface's animate() method is a shortcut method which creates a new Animation, applies it to the element, then plays the animation. It returns the created Animation object instance.

## Syntax

animate(keyframes, options)

## Parameters

### keyframes

> Either an array of keyframe objects, or a keyframe object whose properties are arrays of values to iterate over. See Keyframe Formats for more details.

### options

> Either an integer representing the animation's duration (in milliseconds), or an Object containing one or more timing properties described in the KeyframeEffect() options parameter and/or the following options:

### id _Optional_

A property unique to animate(): a DOMString with which to reference the animation.

## Return value

Returns an Animation.

## [More about the Element.animate() API here](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)
:::

### Lets work on the solution

```html
<body>
  <!-- our progress bar -->
  <div id="progress"></div>
  <!-- button to start the loading -->
  <button id="button">Load</button>
  <!-- queue to keep track of number of times button is clicked-->
  <span id="queue"></span>
</body>
```

```js
//declaring the variables
const progress = document.querySelector("#progress");
const display = document.querySelector("#queue");
const button = document.querySelector("#button");

//setting number of variables
let animations = 0;


//onClick event
button.addEventListener("click", () => {
  animations++;     //updating the number of loads
  updateAnimations();       //displaying the updated value
  if (animations === 1) {
    animateOnce();      //run the animation
  }
});

function animateOnce() {
  progress.animate(         //using the animate() API
    [{ width: "100%" }],    //setting width from 0 to 100%, i.e. passing the keyframes as an array
    {
      duration: 2000,       //running for a duration of 2 seconds
      iterations: `1`,      //running just once
    }).finished.then(() => {
      animations--;     //once animation is complete, remove it from the queue
      updateAnimations();       //display the updated value
      if (animations) {
        animateOnce();      //animate it till queue is empty, i.e. animations == 0
      }
    });
}

function updateAnimations() {
  display.innerText = animations;       //set the value of current animations in the queue
}
```

## FINAL CODE

```html
<body>
  <div id="progress"></div>
  <button id="button">Load</button>
  <span id="queue"></span>
</body>

<script>
const progress = document.querySelector("#progress");
const display = document.querySelector("#queue");
const button = document.querySelector("#button");

let animations = 0;

button.addEventListener("click", () => {
  animations++;
  updateAnimations();
  if (animations === 1) {
    animateOnce();
  }
});

function animateOnce() {
  progress.animate(
    [{ width: "100%" }],
    {
      duration: 2000,
      iterations: `1`,
    }).finished.then(() => {
      animations--;
      updateAnimations();
      if (animations) {
        animateOnce();
      }
    });
}

function updateAnimations() {
  display.innerText = animations;
}
</script>
```
