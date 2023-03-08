---
title: Applying SVG effects to HTML content
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
page-type: guide
---

{{SVGRef}}

Modern browsers support using [SVG](/en-US/docs/Web/SVG) within [CSS](/en-US/docs/Web/CSS) styles to apply graphical effects to HTML content.

You may specify SVG in styles either within the same document or an external style sheet. There are 3 properties you can use: [`mask`](/en-US/docs/Web/CSS/mask), [`clip-path`](/en-US/docs/Web/CSS/clip-path), and [`filter`](/en-US/docs/Web/CSS/filter).

> **Note:** References to SVG in external files must be to the [same origin](/en-US/docs/Web/Security/Same-origin_policy) as the referencing document.

## Using embedded SVG

To apply an SVG effect using CSS styles, you first need to create the CSS style that references the SVG to apply.

```html
<style>
  p {
    mask: url(#my-mask);
  }
</style>
```

In the above example, all paragraphs are masked by an [SVG `<mask>`](/en-US/docs/Web/SVG/Element/mask) with the [ID](/en-US/docs/Web/HTML/Global_attributes/id) `my-mask`.

### Example: Masking

For example, you can make a gradient mask for HTML content using SVG and CSS code similar to the following, inside your HTML document:

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Note that in the CSS, the mask is specified using a URL to the ID `#mask-1`, which is the ID of the SVG mask specified below it. Everything else specifies details about the gradient mask itself.

Applying the SVG effect to HTML is accomplished by assigning the `target` class defined above to an element, like this:

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

The above example would be rendered with the mask applied to it.

{{EmbedLiveSample('Example_Masking', 650, 200)}}

### Example: Clipping

This example demonstrates using SVG to clip HTML content. Notice that even the clickable areas for links are clipped.

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

This establishes a clipping area made of a circle and rectangle, assigns it the ID `#clipping-path-1`, then references it in the CSS. The clip path can be assigned to any element with the `target` class.

You can make changes to the SVG in real time and see them immediately affect the rendering of the HTML. For example, you can resize the circle in the clip path established above:

```js
function toggleRadius() {
  const circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### Example: Filtering

This demonstrates applying a filter to HTML content using SVG. It establishes several filters, which are applied with CSS to three elements in both the normal and mouse [hover](/en-US/docs/Web/CSS/:hover) states.

```html
<p class="target" style="background: lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

Any SVG filter can be applied this way. For example, to apply a blur effect, you might use:

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

You could also apply a color matrix:

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

And some more filters:

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      style="color-interpolation-filters:sRGB"
      order="3"
      kernelMatrix="0 -1 0   -1 4 -1   0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 1 0 0 0"
      style="color-interpolation-filters:sRGB" />
  </filter>
</svg>
```

The five filters are applied using the following CSS:

```css
p.target {
  filter: url(#f3);
}
p.target:hover {
  filter: url(#f5);
}
em.target {
  filter: url(#f1);
}
em.target:hover {
  filter: url(#f4);
}
pre.target {
  filter: url(#f2);
}
pre.target:hover {
  filter: url(#f3);
}
```

{{EmbedLiveSample('Example_Filtering', 650, 200)}}

### Example: Blurred Text

In order to blur text, Webkit based browsers have a (prefixed) CSS filter called blur (see also [CSS filter](/en-US/docs/Web/CSS/filter#blur%28%29_2)). You can achieve the same effect using SVG filters.

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

You can apply the SVG and the CSS filter in the same class:

```css
.blur {
  filter: url(#wherearemyglasses);
}
```

{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}

Blurring is computation heavy, so ensure to use it sparingly, especially in elements that get scrolled or animated.

### Example: Text Effects

SVG effects can also be used to add a more dynamic and flexible approach to adding text compared to plain HTML text.

By creating the text using SVG elements combined with HTML you can make a variety of different text effects. You can rotate the text:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Example text
  </text>
</svg>
```

## Using external references

SVG used for clipping, masking, and filtering can be loaded from an external source, as long as that source comes from the same origin as the HTML document to which it's applied.

For example, if your CSS is in a file named `default.css`, it can look like this:

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

The SVG is then imported from a file named `resources.svg`, using the clip path with the ID `c1`.

## See also

- [SVG](/en-US/docs/Web/SVG)
- {{CSSXref('clip-path')}} property
- {{CSSXref('mask')}} property
- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
