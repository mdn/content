---
title: SVG and CSS
slug: Web/SVG/Tutorial/SVG_and_CSS
tags:
  - CSS
  - CSS:Getting_Started
  - Example
  - Guide
  - Intermediate
  - NeedsUpdate
  - SVG
  - Web
---
{{ PreviousNext("Web/SVG/Tutorial/Tools_for_SVG") }}

This page illustrates the application of CSS to the specialized language for creating graphics: [SVG](/en-US/docs/Web/SVG).

Below you'll create a simple demonstration that runs in your SVG-enabled browser.

> **Note:** Elements referenced by {{SVGElement("use")}} elements inherit the styles from that element. So to apply different styles to them you should use [CSS custom properties](/en-US/docs/Web/CSS/CSS_Variables).

## Example

Make a new SVG document as a plain text file, `doc8.svg`. Copy and paste the content from here, making sure that you scroll to get all of it:

```html
<svg width="600px" height="600px" viewBox="-300 -300 600 600"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <link rel="stylesheet"
    href="style8.css" type="text/css"/>

  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <radialGradient id="fade" cx="0" cy="0" r="200"
        gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%"/>
      <stop id="fade-stop-2" offset="95%"/>
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">Move your mouse pointer over the flower.</text>

  <g id="flower">
    <circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/>

    <g id="outer-petals">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>
    </g>

    <g id="inner-petals" transform="rotate(9) scale(0.33)">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
        </g>
      </g>
    </g>
  </g>
</svg>
```

Make a new CSS file, `style8.css` in the same directory as `doc8.svg`. Copy and paste the content from here, making sure that you scroll to get all of it:

```css
/*** SVG demonstration ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* petals */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* outer petals */
#outer-petals {
  opacity: .75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

Open the `doc8.svg` document in your SVG-enabled browser. Move your mouse pointer over the graphic to see what happens.

### Result

{{EmbedLiveSample("Example", "660", "660")}}

Notes about this demonstration:

- The SVG document links the stylesheet using the following HTML `<link>` tag:

  ```html
  <link rel="stylesheet"
    href="style8.css" type="text/css"/>
  ```

  It can also be linked with the `@import` rule inside a `<style>` tag:

  ```html
  <style>
    @import url(style8.css);
  </style>
  ```

- SVG has its own CSS properties and values. Some of them are similar to CSS properties for HTML.

### Challenge

Change the stylesheet so that the inner petals all turn pink when the mouse pointer is over any one of them, without changing the way the outer petals work.

[See a solution to this challenge.](/en-US/docs/Web/Guide/CSS/Getting_started/Challenge_solutions#svg_and_css)

## Simplified structure

The SVG structure shown above could be written much more concise by referencing the individual parts of the flower via {{SVGElement("use")}} elements. This [behavior is standardized](https://www.w3.org/TR/SVG2/struct.html#UseStyleInheritance), though only a few browsers support the {{cssxref(":hover")}} pseudo-class and other more complex CSS selectors on elements referenced via `<use>` elements, at the moment. There is [some discussion about what rules apply to such referenced elements](https://github.com/w3c/svgwg/issues/504).

See below how the structure then looks like.

```html
<svg width="600px" height="600px" viewBox="-300 -300 600 600"
    xmlns="http://www.w3.org/2000/svg">

  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <g id="segment" class="segment">
      <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
      <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
    </g>
    <g id="quadrant">
      <use xlink:href="#segment"/>
      <use xlink:href="#segment" transform="rotate(18)"/>
      <use xlink:href="#segment" transform="rotate(36)"/>
      <use xlink:href="#segment" transform="rotate(54)"/>
      <use xlink:href="#segment" transform="rotate(72)"/>
    </g>
    <g id="petals">
      <use xlink:href="#quadrant"/>
      <use xlink:href="#quadrant" transform="rotate(90)"/>
      <use xlink:href="#quadrant" transform="rotate(180)"/>
      <use xlink:href="#quadrant" transform="rotate(270)"/>
    </g>
    <radialGradient id="fade" cx="0" cy="0" r="200"
        gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%"/>
      <stop id="fade-stop-2" offset="95%"/>
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">Move your mouse pointer over the flower.</text>

  <g id="flower">
    <circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/>
    <use id="outer-petals" xlink:href="#petals"/>
    <use id="inner-petals" xlink:href="#petals"
      transform="rotate(9) scale(0.33)"/>
  </g>

</svg>
```

{{ PreviousNext("Web/SVG/Tutorial/Tools_for_SVG") }}

## What next?

In this demonstration, your SVG-enabled browser already knows how to display SVG elements. The stylesheet only modifies the display in certain ways. This is also true for HTML documents. But you can use CSS for general-purpose XML documents, where there is no predefined way to display the elements. The next page demonstrates this: [XML introduction](/en-US/docs/Web/XML/XML_introduction)
