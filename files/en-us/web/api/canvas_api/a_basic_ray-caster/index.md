---
title: A basic ray-caster
slug: Web/API/Canvas_API/A_basic_ray-caster
tags:
  - Advanced
  - Canvas
  - Example
  - Graphics
  - HTML
  - Web
---
{{CanvasSidebar}}

This article provides an interesting real-world example of using the {{HTMLElement("canvas")}} element to do software rendering of a 3D environment using ray-casting.

{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}

**[Open in new window](https://mdn.github.io/canvas-raycaster/)**

## Why?

After realizing, to my delight, that the nifty `<canvas>` element I'd been [reading about](https://www.whatwg.org/specs/web-apps/current-work/#dynamic) was not only soon to be supported in Firefox, but was **already** supported in the current version of Safari, I had to try a little experiment.

The canvas [overview](/en-US/docs/Web/API/Canvas_API) and [tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial) I found here at MDN are great, but nobody had written about animation yet, so I thought I'd try a port of a basic raycaster I'd worked on a while ago, and see what sort of performance we can expect from a JavaScript-controlled pixel buffer.

## How?

The basic idea is to use {{domxref("setInterval()")}} at some arbitrary delay that corresponds to a desired frame rate. After every interval an update function will repaint the canvas showing the current view. I know I could have started with a simpler example, but I'm sure the canvas tutorial will [get to that](/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations), and I wanted to see if I could do this.

So every update, the raycaster looks to see if you've pressed any keys lately, to conserve calculations by not casting if you're idle. If you have, then the canvas is cleared, the ground and sky are drawn, the camera position and/or orientation are updated, and the rays are cast out. As the rays intersect walls, then they render a vertical sliver of canvas in the color of the wall they've hit, blended with a darker version of the color according to the distance to the wall. The height of the sliver is also modulated by the distance from the camera to the wall, and is drawn centered over the horizon line.

The code I ended up with is a regurgitated amalgam of the raycaster chapters from an old André LaMothe*Tricks of the Game Programming Gurus* book (ISBN: 0672305070), and a [java raycaster](http://www.shinelife.co.uk/java-maze/) I found online, filtered through my compulsion to rename everything so it makes sense to me, and all the tinkering that had to be done to make things work well.

## Results

The canvas in Safari 2.0.1 performed surprisingly well. With the blockiness factor cranked up to render slivers 8 pixels wide, I can run a 320 x 240 window at 24 fps on my Apple mini. Firefox 1.5 Beta 1 is even faster; I can run 320 x 240 at 24 fps with 4 pixel slivers. Not exactly a new member of the ID software family, but pretty decent considering it's a fully interpreted environment, and I didn't have to worry about memory allocation or video modes or coding inner routines in assembler or anything. The code does attempt to be very efficient, using array look-ups of pre-computed values, but I'm no optimization guru, so things could probably be written faster.

Also, it leaves a lot to be desired in terms of trying to be any sort of game engine—there are no wall textures, no sprites, no doors, not even any teleporters to get to another level. But I'm pretty confident all those things could be added given enough time. The canvas API supports pixel copying of images, so textures seem feasible. I'll leave that for another article, probably from another person. =)

## The ray-caster

The nice people here have manually copied my files up so you can take a [look](https://mdn.github.io/canvas-raycaster/), and for your hacking enjoyment I've posted the individual file contents as code listings (see below).

So there you are, fire up Safari 1.3+ or Firefox 1.5+ or some other browser that supports the `<canvas>` element and enjoy!

[input.js](https://github.com/mdn/canvas-raycaster/blob/master/input.js) | [Level.js](https://github.com/mdn/canvas-raycaster/blob/master/Level.js) | [Player.js](https://github.com/mdn/canvas-raycaster/blob/master/Player.js) | [RayCaster.html](https://github.com/mdn/canvas-raycaster/blob/master/index.html) | [RayCaster.js](https://github.com/mdn/canvas-raycaster/blob/master/RayCaster.js) | [trace.css](https://github.com/mdn/canvas-raycaster/blob/master/trace.css) | [trace.js](https://github.com/mdn/canvas-raycaster/blob/master/trace.js)

## See also

- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
