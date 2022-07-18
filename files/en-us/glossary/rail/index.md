---
title: RAIL
slug: Glossary/RAIL
tags:
  - Glossary
  - RAIL
  - Timings
  - Web Performance
---
**RAIL**, an acronym for **Response, Animation, Idle, and Load**, is a performance model originated by the Google Chrome team in 2015, focused on user experience and performance within the browser. The performance mantra of RAIL is "Focus on the user; the end goal isn't to make your site perform fast on any specific device, it's to make users happy." There are 4 stages of interaction: page load, idle, response to input, and scrolling and animation. In acronym order, the main tenets are:

- **Response**
  - : Respond to users immediately, acknowledging any user input in **100ms** or less.
- **Animation**
  - : When animating, render each frame in under **16ms**, aiming for consistency and avoiding jank.
- **Idle**
  - : When using the main JavaScript thread, work in chunks for less than **50ms** to free up the thread for user interactions.
- **Load**
  - : Deliver interactive content in less than **1 second**.

## See also

- [Recommended Web Performance Timings: How long is too long](/en-US/docs/Web/Performance/How_long_is_too_long)
