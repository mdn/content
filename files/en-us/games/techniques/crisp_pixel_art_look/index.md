---
title: Crisp pixel art look with image-rendering
slug: Games/Techniques/Crisp_pixel_art_look
tags:
  - 2D
  - 3D
  - CSS
  - Canvas
  - Games
  - JavaScript
  - WebGL
  - image-rendering
  - pixel
---

{{GamesSidebar}}

This article discusses a useful technique for giving your canvas/WebGL games a crisp pixel art look, even on high definition monitors.

## The concept

Retro [pixel art](https://wikipedia.org/wiki/Pixel_art) aesthetics are getting popular, especially in [indie games](https://wikipedia.org/wiki/Indie_game) or [game jam](https://wikipedia.org/wiki/Game_jam) entries. But since today's screens render content at high resolutions, there is a problem with making sure the pixel art does not look blurry. Developers have been manually scaling up graphics so they are shown with blocks that represent pixels. Two downsides to this method are larger file sizes and [compression artifacts](https://wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="small pixelated man" src="technique_original.png" /></td>
      <td><img alt="small pixelated man" src="technique_original.png" /></td>
      <td><img alt="larger pixelated man" src="technique_4x.png" /></td>
    </tr>
    <tr>
      <td>original size</td>
      <td>4x size</td>
      <td>4x size (scaled with an image editor)</td>
    </tr>
    <tr>
      <td>none</td>
      <td>vendor's algorithm</td>
      <td>
        <a href="https://wikipedia.org/wiki/Nearest-neighbor_interpolation"
          >nearest-neighbor algorithm</a
        >
      </td>
    </tr>
  </tbody>
</table>

## A CSS-based solution

The good news is that you can use CSS to automatically do the up-scaling, which not only solves the blur problem, but also allows you to use the images in their original, smaller size, thus saving download time. Also, some game techniques require algorithms that analyze images, which also benefit from working with smaller images.

The CSS property to achieve this scaling is {{cssxref("image-rendering")}}. It is still experimental, but there is partial support in most browsers. The steps to achieve this effect are:

- Create a {{htmlelement("canvas")}} element and set its `width` and `height` attributes to the original, smaller resolution.
- Set its CSS {{cssxref("width")}} and {{cssxref("height")}} properties to be 2x or 4x the value of the HTML `width` and `height`. If the canvas was created with a 128 pixel width, for example, we would set the CSS `width` to `512px` if we wanted a 4x scale.
- Set the {{htmlelement("canvas")}} element's `image-rendering` CSS property to some value that does not make the image blurry. Either `crisp-edges` or `pixelated` will work. Check out the {{cssxref("image-rendering")}} article for more information on the differences between these values, and which prefixes to use depending on the browser.

## An example

Let's have a look at an example. The original image we want to upscale looks like this:

![Pixelated night scenery of a cat on the edge off a cliff with little hearts above his head, behind him a big full moon. With a black background, white text is displayed at the bottom of the image saying: in love with the moon.](cat.png)

Here's some HTML to create a simple canvas:

```html
<canvas id="game" width="128" height="128"></canvas>
```

CSS to size the canvas and render a crisp image:

```css
canvas {
  width: 512px;
  height: 512px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

And some JavaScript to set up the canvas and load the image:

```js
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

This code used together produces the following result:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> **Note:** You can check out the [original code on GitHub](https://github.com/belen-albeza/retro-canvas) ([and a live example](https://belen-albeza.github.io/retro-canvas/).)
