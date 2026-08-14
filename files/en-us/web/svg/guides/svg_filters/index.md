---
title: SVG filters
short-title: Filters
slug: Web/SVG/Guides/SVG_filters
page-type: guide
sidebar: svgref
---

SVG filters take the pixels an element would have painted and process them before they reach the screen: blurring, offsetting, recoloring, compositing, or generating new imagery altogether. They can be chained into multi-step pipelines, and they apply to both SVG and HTML content. This guide covers:

- Defining a filter and applying it to an element.
- Chaining filter primitives into a pipeline, and the inputs they can draw on.
- The filter region, and why an effect gets clipped.
- The color space filter operations happen in.
- The filter primitives, with recipes for the effects they're most used for.
- Applying a filter to HTML content.
- Choosing between an SVG filter and a CSS filter function.

A filter is defined by the {{SVGElement("filter")}} element, which is never rendered itself. It must have an `id` for other elements to reference it, and it can be placed anywhere in the document, although it is usually defined inside a {{SVGElement("defs")}} element. SVG elements apply a filter with the {{SVGAttr("filter")}} attribute, and both SVG and HTML elements can apply one with the {{cssxref("filter")}} CSS property:

```html
<rect width="100" height="100" filter="url(#blur-me)" />
```

```css
.blurred {
  filter: url("#blur-me");
}
```

> [!NOTE]
> A `url()` reference works on SVG and HTML elements alike, but CSS [filter functions](/en-US/docs/Web/CSS/Reference/Values/filter-function) such as `blur()` are not applied to elements inside an SVG in every browser: on a shape, a {{SVGElement("g")}} group, or an {{SVGElement("image")}}, the declaration can compute but paint nothing, and writing it as a `filter` presentation attribute doesn't help either. Filter functions do work on HTML elements, and on the root `<svg>` element itself. See the [browser compatibility table](/en-US/docs/Web/CSS/Reference/Properties/filter#browser_compatibility) for the `filter` property.

## A first filter

Inside the `<filter>` element you list _filter primitives_: the `fe*` elements, where `fe` stands for "filter effect". Each primitive performs one operation. The simplest useful filter contains a single primitive, {{SVGElement("feGaussianBlur")}}, whose {{SVGAttr("stdDeviation")}} attribute controls how much blur is applied:

```html
<svg
  viewBox="0 0 200 100"
  width="200"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-me">
      <feGaussianBlur stdDeviation="4" />
    </filter>
  </defs>

  <circle cx="50" cy="50" r="40" fill="steelblue" />
  <circle cx="150" cy="50" r="40" fill="steelblue" filter="url(#blur-me)" />
</svg>
```

Only the second circle references the filter:

{{EmbedLiveSample("A_first_filter", "100%", 130)}}

The two circles are identical, and the filtered one is painted, blurred, and then composited back into the graphic. Raising `stdDeviation` spreads the blur further, until it is clipped by the filter region.

## How a filter pipeline works

A filter with more than one primitive is a pipeline. Each primitive takes zero, one, or two images as input, and produces one image as output:

- {{SVGAttr("in")}} names the input. {{SVGAttr("in2")}} names the second input of the primitives that combine two images, such as {{SVGElement("feBlend")}} and {{SVGElement("feComposite")}}.
- {{SVGAttr("result")}} names the output so that a later primitive can refer to it. `result` is not an `id`: the name is only visible inside the same `<filter>` element.
- If a primitive has no `in`, it uses `SourceGraphic` when it is the first primitive in the filter, and the result of the preceding primitive otherwise. So a chain of primitives that all omit `in` and `result` runs in document order, each one processing the output of the last.

A few primitives take no input at all: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}}, and {{SVGElement("feImage")}} generate an image from their own attributes rather than from anything earlier in the pipeline, so `in` has no meaning on them. They are the only way to introduce imagery a filter didn't receive as its input.

The primitives are always applied in document order, and a `result` can only be referenced by primitives that come after it.

Both filters below blur the source graphic, shift the blurred copy to the right, and multiply that copy with the unfiltered source. The first names every input and output; the second leaves out everything the defaults already cover, keeping only the `in2`, which has no default equivalent. Both widen the filter region so the shifted copy isn't cut off, which the [next section](#the_filter_region) explains:

```html
<svg
  viewBox="0 0 260 120"
  width="260"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="echo-named" x="-20%" y="-20%" width="180%" height="140%">
      <!-- Blur the source graphic, and call the output "blurred" -->
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blurred" />
      <!-- Shift "blurred" to the right, and call the output "shifted" -->
      <feOffset in="blurred" dx="14" result="shifted" />
      <!-- Multiply "shifted" with the source graphic -->
      <feBlend in="shifted" in2="SourceGraphic" mode="multiply" />
    </filter>

    <filter id="echo-default" x="-20%" y="-20%" width="180%" height="140%">
      <feGaussianBlur stdDeviation="3" />
      <feOffset dx="14" />
      <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>

  <circle cx="70" cy="60" r="32" fill="steelblue" filter="url(#echo-named)" />
  <circle
    cx="190"
    cy="60"
    r="32"
    fill="steelblue"
    filter="url(#echo-default)" />
</svg>
```

The two circles render identically, because naming a `result` does not change what a primitive does:

{{EmbedLiveSample("How_a_filter_pipeline_works", "100%", 150)}}

A `result` name is only necessary when a later primitive needs an output other than the one produced immediately before it, either by referencing an earlier result or by using the same result twice. In every other case the name documents the chain rather than changing it, which is more useful the longer the chain is.

## Filter inputs

Besides an earlier `result`, `in` and `in2` accept keywords naming the filter's own input. Two of them matter in practice: `SourceGraphic`, the element as it would have been painted, and `SourceAlpha`, the same thing reduced to its alpha channel. That silhouette is where a shadow starts, since a shadow needs the element's shape but not its colors.

The {{SVGAttr("in")}} reference lists the remaining keywords, which name the element's paint and the backdrop behind it. None of them is usable: they are either unimplemented or implemented in a single engine. To composite an element against other imagery, bring that imagery into the filter explicitly with {{SVGElement("feImage")}}.

## The filter region

A filter is only evaluated inside its _filter region_. Anything the filter would paint outside that region is clipped, which is the most common reason a filter appears to work only partly: a blur or an offset shadow gets cut off at a hard edge.

The region is set by the `x`, `y`, `width`, and `height` attributes on `<filter>`. They default to `-10%`, `-10%`, `120%`, and `120%`, giving a 10% margin around the element's bounding box on every side, because so many effects spread beyond the element itself. Effects that reach further than that need a bigger region.

Both squares below get the same shadow, and the first filter leaves the region at its default:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="clipped-shadow">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>

    <filter id="big-shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#clipped-shadow)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#big-shadow)" />
</svg>
```

The left shadow ends in a straight line 7 units from the square (10% of its 70-unit bounding box), while the right one has the room to fade out:

{{EmbedLiveSample("The_filter_region", "100%", 150)}}

Clipping is sometimes the intended effect. A region of `x="0" y="0" width="100%" height="100%"` trims the effect flush with the element's bounding box, which is how an inner glow is kept inside the shape, and how a blur is stopped from spreading past the edge it softens.

Two attributes control how the numbers are interpreted:

- {{SVGAttr("filterUnits")}}: whether the region's `x`, `y`, `width`, and `height` are fractions of the element's bounding box (`objectBoundingBox`, the default, which is what makes percentages meaningful) or lengths in the current user coordinate system (`userSpaceOnUse`).
- {{SVGAttr("primitiveUnits")}}: the same choice for the values used _inside_ the primitives, such as `stdDeviation` and `dx`. The default is `userSpaceOnUse`.

Under `objectBoundingBox` the values are fractions of the bounding box whether or not they are written as percentages, so `width="180%"` and `width="1.8"` describe the same region.

Individual primitives also accept `x`, `y`, `width`, and `height`, which restrict that one operation to a _primitive subregion_, which is useful for applying an effect to part of an element and for limiting the extent of primitives such as {{SVGElement("feFlood")}} and {{SVGElement("feTile")}} that would otherwise fill the whole region.

## Color interpolation

Filter operations are performed in a color space chosen by the {{SVGAttr("color-interpolation-filters")}} property, whose initial value is `linearRGB`. Linearized color is more physically accurate, because a blur or a composite in `linearRGB` behaves the way light behaves. It does not, however, match what CSS filter functions, image editors, or most people's expectations produce, and the difference is very visible in blurs, gradients, and color mixes. Unless a primitive's definition says otherwise, the operations run on premultiplied color values; {{SVGElement("feColorMatrix")}} and {{SVGElement("feComponentTransfer")}} are the two that do not.

Set the property to `sRGB` on the `<filter>` element, or on an individual primitive, whenever a filter mixes color channels and you want a result that matches CSS. Setting it explicitly is worth doing on every such filter rather than relying on the initial value, because the consequence of the default is easy to mistake for a browser bug. Both sets of stripes below are blurred by the same amount, and only the color space differs:

```html
<svg
  viewBox="0 0 260 120"
  width="260"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-linear" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <filter
      id="blur-srgb"
      x="-25%"
      y="-25%"
      width="150%"
      height="150%"
      color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <g id="stripes">
      <rect width="100" height="80" fill="black" />
      <rect x="10" width="10" height="80" fill="white" />
      <rect x="30" width="10" height="80" fill="white" />
      <rect x="50" width="10" height="80" fill="white" />
      <rect x="70" width="10" height="80" fill="white" />
    </g>
  </defs>

  <use href="#stripes" x="20" y="20" filter="url(#blur-linear)" />
  <use href="#stripes" x="140" y="20" filter="url(#blur-srgb)" />
</svg>
```

Blurring in the initial `linearRGB` mixes the black and white stripes into a much lighter gray, on the left, than blurring the same stripes in `sRGB`, on the right, which is also what the CSS {{cssxref("filter-function/blur", "blur()")}} function produces:

{{EmbedLiveSample("Color_interpolation", "100%", 150)}}

## Filter primitives

There are around twenty `fe*` elements. Grouping them by what they do makes it easier to find the one an effect needs:

- **Generators** take no input and produce an image from their own attributes: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}}, and {{SVGElement("feImage")}}.
- **Color** primitives remap channel values without moving pixels: {{SVGElement("feColorMatrix")}} and {{SVGElement("feComponentTransfer")}}.
- **Geometry** primitives move, spread, or distort pixels: {{SVGElement("feGaussianBlur")}}, {{SVGElement("feOffset")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feConvolveMatrix")}}, and {{SVGElement("feTile")}}.
- **Compositing** primitives combine two or more inputs: {{SVGElement("feBlend")}}, {{SVGElement("feComposite")}}, and {{SVGElement("feMerge")}}.
- **Lighting** primitives shade the input as a surface, using its alpha channel as a bump map: {{SVGElement("feDiffuseLighting")}} and {{SVGElement("feSpecularLighting")}}. Each takes a light-source child: {{SVGElement("feDistantLight")}}, {{SVGElement("fePointLight")}}, or {{SVGElement("feSpotLight")}}.
- {{SVGElement("feDropShadow")}} is a shorthand for a chain of the above, covered in the [recipes](#drop_shadows) below.

`feImage` is widely supported for external images, but referencing an element of the same document is not supported everywhere; check the [browser compatibility table](/en-US/docs/Web/SVG/Reference/Element/feImage#browser_compatibility) for `feImage` before relying on it, and otherwise export the element as a standalone image file.

Each element's own page documents the attributes that control it, and the [filter primitive elements](/en-US/docs/Web/SVG/Reference/Element#filter_primitive_elements) section of the element reference has the full list.

## Recipes

### Drop shadows

{{SVGElement("feDropShadow")}} does the whole job in one primitive, with `dx`, `dy`, and `stdDeviation` for the geometry and the `flood-color` and `flood-opacity` properties for the color. Build a shadow by hand only when you need something the shorthand can't express, such as reusing the blurred silhouette for another effect.

The following example builds the same half-transparent shadow twice. The first filter uses `feDropShadow`; the second assembles the same effect from separate primitives, blurring the alpha channel, offsetting it, fading it to 50% with {{SVGElement("feComponentTransfer")}}, and merging the source graphic back on top. Both widen the filter region so the shadow isn't clipped.

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow-shorthand" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow
        dx="4"
        dy="4"
        stdDeviation="3"
        flood-color="black"
        flood-opacity="0.5" />
    </filter>

    <filter id="shadow-by-hand" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
      <feComponentTransfer in="offsetBlur" result="fadedBlur">
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="fadedBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-shorthand)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-by-hand)" />
</svg>
```

The one-primitive shadow is on the left, the four-primitive one on the right:

{{EmbedLiveSample("Drop_shadows", "100%", 150)}}

The two squares look the same because `feDropShadow` bundles the same steps into one primitive: blur the alpha channel, offset it, color it, and draw the source graphic on top. It tints the shadow by compositing `flood-color` into the blurred alpha rather than by fading the alpha, which comes to the same thing for a solid shadow. Building the chain by hand is only worth it when one of the intermediate results, such as `fadedBlur`, is needed for something else as well.

### Recoloring with feColorMatrix

{{SVGElement("feColorMatrix")}} multiplies every pixel's RGBA values by a matrix of 20 numbers: four rows, one per output channel, of five columns (`R`, `G`, `B`, `A`, and a constant). The shorthand `type` values cover the common cases (`saturate`, `hueRotate`, `luminanceToAlpha`), while `type="matrix"` gives full control. This filter converts to grayscale using the luminance coefficients, in `sRGB` so the result matches the CSS {{cssxref("filter-function/grayscale", "grayscale()")}} function:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="to-grayscale" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0      0      0      1 0" />
    </filter>
  </defs>

  <g id="circles">
    <circle cx="60" cy="47" r="22" fill="crimson" />
    <circle cx="45" cy="73" r="22" fill="seagreen" opacity="0.8" />
    <circle cx="75" cy="73" r="22" fill="orange" opacity="0.8" />
  </g>

  <g filter="url(#to-grayscale)" transform="translate(120, 0)">
    <use href="#circles" />
  </g>
</svg>
```

The same three circles are drawn twice, and only the copy on the right is filtered:

{{EmbedLiveSample("Recoloring_with_feColorMatrix", "100%", 150)}}

Each row of the matrix sets one output channel from a weighted sum of the input channels. The three color rows are identical, so red, green, and blue all end up at the same luminance value, while the alpha row (`0 0 0 1 0`) passes transparency through untouched.

## Filters on HTML content

The CSS {{cssxref("filter")}} property applies an SVG filter to any HTML element, but the filter itself still has to be defined inside an `<svg>` element. That SVG has nothing to draw, so it only needs to hold the `<filter>` without affecting the layout around it:

```html
<svg class="filter-host" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <filter id="wobble" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.05"
      numOctaves="2"
      result="noise" />
    <feDisplacementMap
      in="SourceGraphic"
      in2="noise"
      scale="8"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>
</svg>

<p class="wobble">Filtered HTML text</p>
```

Collapsing the SVG to zero width and height is not sufficient on its own: it still generates a box, which can affect the layout around it. Positioning it out of flow removes it from layout entirely, and `aria-hidden` keeps an empty graphic out of the accessibility tree:

```css
.filter-host {
  position: fixed;
  width: 0;
  height: 0;
}

.wobble {
  font: bold 2rem sans-serif;
  filter: url("#wobble");
}
```

The text is displaced by the noise the filter generates for itself, which no CSS filter function can do:

{{EmbedLiveSample("Filters_on_HTML_content", "100%", 140)}}

Referencing a filter from a different file (`filter: url("filters.svg#wobble")`) is supported unevenly, so keep the `<filter>` in the document that uses it. See [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content) for more on combining the two languages.

## SVG filters and CSS filter functions

The CSS {{cssxref("filter")}} property accepts both a {{cssxref("url_function", "url()")}} reference to an SVG filter and a list of [filter functions](/en-US/docs/Web/CSS/Reference/Values/filter-function) such as {{cssxref("filter-function/blur", "blur()")}}, {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}, and {{cssxref("filter-function/grayscale", "grayscale()")}}. The filter functions are shorthands for exactly these primitives, so:

- Use a filter function where one exists for the effect you need. It is shorter, it can be animated and interpolated by CSS, and it operates in `sRGB` with no surprises. On content inside an SVG, reference a `<filter>` instead, since filter functions are not applied to shapes, groups, or images inside an SVG in every browser.
- Use an SVG filter for anything that needs a pipeline: several operations chained together, two inputs composited, generated noise or lighting, or fine control over the color space and filter region.

The choice isn't exclusive: the property takes a space-separated list, so `filter: url("#wobble") grayscale(1)` runs the SVG filter and then the function, in that order. Listing two `<filter>` references is also the way to combine steps that need different `primitiveUnits`, since that attribute applies to a whole filter rather than to one primitive.

Filtering is expensive: the element is rendered to an offscreen buffer, processed, and composited back, and blurs cost more the larger their `stdDeviation`. Applying a filter to large or frequently repainted areas (anything scrolling, animating, or hovering across a big surface) is a common cause of dropped frames. Keep filter regions no bigger than necessary, and animate less expensive properties in preference to filter parameters.

## See also

- {{SVGElement("filter")}}: the element that defines a filter
- {{SVGAttr("in")}}, {{SVGAttr("result")}}, {{SVGAttr("color-interpolation-filters")}}: the attributes that wire a pipeline together
- [Filter primitive elements](/en-US/docs/Web/SVG/Reference/Element#filter_primitive_elements): reference for the `fe*` elements
- {{cssxref("filter")}}: the CSS property that applies a filter to SVG or HTML
- [Using filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects/Using): CSS guide to the filter functions
- [Filter effects](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects): filters chapter of the SVG tutorial
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content): filters, clipping, and masking on HTML content
- [SVG filters guide: getting started with the basics](https://blog.master.dev/svg-filters-guide-getting-started-with-the-basics/) on blog.master.dev (2026)
- [SVG filter text effects: letterpress, ink gain, wood type](https://www.carmenansio.com/articles/svg-filters-on-type/) on carmenansio.com (2026)
