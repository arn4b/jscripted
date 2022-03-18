---
sidebar_position: 1
id: intro
title: Intro to IntersectionObserver API
---

From MDN:

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

> Intersection information is needed for many reasons, such as:
 >  - Lazy-loading of images or other content as a page is scrolled.
 >  - Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
 >  - Reporting of visibility of advertisements in order to calculate ad revenues.
 >  - Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

>The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount. This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

> One thing the Intersection Observer API can't tell you: the exact number of pixels that overlap or specifically which ones they are; however, it covers the much more common use case of "If they intersect by somewhere around N%, I need to do something."


You can read the detailed docs for IntersectionObserver API and its methods at the [MDN Docs.](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)