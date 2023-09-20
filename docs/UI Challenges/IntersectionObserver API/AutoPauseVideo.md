---
sidebar_position: 6
id: auto_pause
title: Auto Pause Video on Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

# Video Auto-Pause/Play with Intersection Observer Documentation

This documentation explains a JavaScript code snippet that uses the Intersection Observer API to automatically pause and play a video when it enters or exits the viewport.

## Code Overview

```javascript
let video = document.querySelector('video');
let isPaused = false;

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio !== 1 && !video.paused) {
            video.pause();
            isPaused = true;
        } else if (isPaused) {
            video.play();
            isPaused = false;
        }
    });
}, { threshold: 1 });

observer.observe(video);
```

- The `video` variable is assigned a reference to the first video element found in the HTML document.

- The `isPaused` variable is used to track the video's pause/play state.

- The `IntersectionObserver` is set up with a callback function that will be executed when the video enters or exits the viewport.

- Inside the callback function, we loop through the `entries` array to check each entry's `intersectionRatio`. If the video is partially visible (intersectionRatio is not 1) and it's not already paused, we pause the video and set `isPaused` to `true`. If `isPaused` is `true`, we play the video and set `isPaused` back to `false`.

- The `threshold` option is set to 1, meaning that the callback will be triggered when the video is fully visible within the viewport.

- The `observer.observe(video)` line starts observing the video element for intersection.

## Usage

To implement automatic pause/play behavior for a video when it enters or exits the viewport:

1. Include the JavaScript code within your HTML document.

2. Make sure you have a `<video>` element that you want to control with this behavior.

```html
<video src="OSRO-animation.mp4" controls=""></video>
```

3. As the user scrolls and the video enters or exits the viewport, it will automatically pause when leaving the viewport and play when entering it.

4. Adjust the `threshold` value in the `options` object to change when the video should start playing or pausing. A threshold of 1 means the video will play when fully visible and pause when fully hidden.

## Conclusion

This Intersection Observer code simplifies the implementation of automatic video pause and play behavior based on visibility within the viewport, enhancing the user experience on web pages with embedded videos.
