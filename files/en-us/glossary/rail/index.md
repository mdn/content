---
title: RAIL
slug: Glossary/RAIL
tags:
  - Glossary
  - RAIL
  - Timings
  - Web Performance
---
<p><strong>RAIL</strong>, an acronym for <strong>Response, Animation, Idle, and Load</strong>, is a performance model originated by the Google Chrome team in 2015, focused on user experience and performance within the browser. The performance mantra of RAIL is "Focus on the user; the end goal isn't to make your site perform fast on any specific device, it's to make users happy." There are 4 stages of interaction: page load, idle, response to input, and scrolling and animation. In acronym order, the main tenets are:</p>

<dl>
 <dt><strong>Response</strong></dt>
 <dd>Respond to users immediately, acknowledging any user input in <strong>100ms</strong> or less.</dd>
 <dt><strong>Animation</strong></dt>
 <dd>When animating, render each frame in under <strong>16ms</strong>, aiming for consistency and avoiding jank.</dd>
 <dt><strong>Idle</strong></dt>
 <dd>When using the main JavaScript thread, work in chunks for less than <strong>50ms</strong> to free up the thread for user interactions.</dd>
 <dt><strong>Load</strong></dt>
 <dd>Deliver interactive content in less than <strong>1 second</strong>.</dd>
</dl>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Performance/How_long_is_too_long">Recommended Web Performance Timings: How long is too long</a></li>
</ul>
