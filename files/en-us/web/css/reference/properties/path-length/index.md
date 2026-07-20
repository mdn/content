---
title: "`path-length` CSS property"
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
page-type: css-property
browser-compat: css.properties.path-length
sidebar: cssref
---

The **`path-length`** [CSS](/en-US/docs/Web/CSS) property specifies a total path length, in user units. This value is then used to calibrate the browser's distance calculations with those of the author, by scaling all distance computations using the ratio `path-length` / _(computed value of path length)_.

This can affect the browser's distance-along-a-path calculations and therefore the actual rendered lengths of paths — this includes text paths, animation paths, and various stroke operations.

If present, the `path-length` CSS property overrides an SVG element's {{SVGAttr("pathLength")}} attribute.

> [!NOTE]
> The `path-length` property only applies to {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, and {{SVGElement("rect")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* Keywords */
path-length: none;

/* <length> values */
path-length: 0;
path-length: 70;
path-length: 500;

/* Global values */
path-length: inherit;
path-length: initial;
path-length: revert;
path-length: revert-layer;
path-length: unset;
```

### Values

- `none`
  - : No author path length is specified and the user agent's own computed path length is used for all path-related calculations.

- `<length>`
  - : A non-negative unitless value representing an author-defined total path length, in user units.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example defines a path and shows how to apply a path length to it using the `path-length` CSS property.

#### SVG

Our SVG defines a single curved {{SVGElement("path")}} element with a colored {{SVGAttr("stroke")}}. It includes a {{SVGAttr("stroke-dasharray")}} attribute that defines a regular dashed pattern for the stroke.

```html live-sample___basic-path-length live-sample___path-length-animation
<svg viewBox="0 0 600 200">
  <path
    d="M 30 100 C 150 20, 250 180, 380 100 S 520 20, 570 100"
    fill="none"
    stroke="#D85A30"
    stroke-width="4"
    stroke-dasharray="24 24"></path>
</svg>
```

#### CSS

We set a `path-length` value on the `<path>`:

```css live-sample___basic-path-length
path {
  path-length: 500;
}
```

#### Results

{{EmbedLiveSample("basic-path-length", "100%", "230")}}

Setting a large `path-length` value results in the dashes becoming smaller and more frequent.

### Animating `path-length`

One major advantage of making `path-length` available as a CSS property is that you can apply standard CSS functionality such as [animations](/en-US/docs/Web/CSS/Guides/Animations) and [transitions](/en-US/docs/Web/CSS/Guides/Transitions) to it. This example builds on the previous one, showing how to animate a `path-length` with a CSS animation.

#### HTML and SVG

This example includes the same SVG `<path>` as the previous one. In addition, it includes an [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) element that can be used to change the value of `path-length` applied to the `<path>` at runtime. We also include an {{htmlelement("output")}} element to display the current slider value.

```html live-sample___path-length-animation
<div>
  <label for="path-slider">Adjust path-length</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

On the {{cssxref(":root")}} element, we define a [CSS custom property](/en-US/docs/Web/CSS/Reference/Properties/--*) called `--path-length` and give it an initial value of `200`. We then set the `<path>` element's `path-length` value to the `--path-length` property, and set an {{cssxref("animation")}} on it that runs an infinite number of times and alternates between forwards and backwards.

```css live-sample___path-length-animation
:root {
  --path-length: 200;
}

path {
  path-length: var(--path-length);
  animation: path-length-anim 2s alternate infinite ease-in-out;
}
```

```css hidden live-sample___path-length-animation
div {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
```

Next, we define the {{cssxref("@keyframes")}} block for the animation — it animates the `path-length` property between the `--path-length` value and the `--path-length` value multiplied by `1.5`.

```css live-sample___path-length-animation
@keyframes path-length-anim {
  from {
    path-length: var(--path-length);
  }

  to {
    path-length: calc(var(--path-length) * 1.5);
  }
}
```

#### JavaScript

We start our script by grabbing references to the `<input type="range">`, `<output>`, and `:root` elements.

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

Next, we add an `input` event handler to the range slider so that, when its value is changed, the `<output>` element's `textContent` and the value of the `--path-length` custom property are set to equal the slider's new value.

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = slider.value;
  rootElem.style.setProperty("--path-length", slider.value);
});
```

#### Results

{{EmbedLiveSample("path-length-animation", "100%", "230")}}

Adjust the slider, and note how larger values result in a smaller dash size.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("pathLength")}} attribute
- Presentation properties: {{cssxref("fill")}}, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, `path-length`, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
