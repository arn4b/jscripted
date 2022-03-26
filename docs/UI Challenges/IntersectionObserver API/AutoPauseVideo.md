---
sidebar_position: 6
id: auto_pause
title: Auto Pause Video on Scroll
tags:
  - IntersectionObserver
  - UI Challenge
---

## Let's begin

```html
<video src="OSRO-animation.mp4" controls=""></video>
```

```javascript
let video = document.querySelector('video')

let isPaused = false

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio != 1 && !video.paused) {
            video.pause()
            isPause = true
        }
        else if(isPaused) {
            video.play()
            isPaused = false
        }
    })
}, {threshold: 1})

observer.observe(video)
```
