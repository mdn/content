---
title: CSS filter effects
slug: Web/CSS/CSS_filter_effects
page-type: css-module
spec-urls:
  - https://drafts.fxtf.org/filter-effects-2/
  - https://drafts.fxtf.org/filter-effects-1/
---

{{CSSRef}}

The properties in the **CSS filter effects** module let you define a way of processing an element's rendering before the element is displayed in the document. Examples of such effects include blurring and changing the intensity of the color of an element.

### Filter effects in action

Play with the various sliders to apply filter effects to the image below.

```html hidden live-sample___filters
<article>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/george_floyd_memorial_sm.jpg"
    width="600"
    height="400"
    alt="A colorful memorial honoring George Floyd and the Black Lives Matter movement" />
  <form>
    <fieldset>
      <legend>Select your filters</legend>
      <label>
        <input type="range" name="blur" value="0" min="0" max="1" step="0.1" />
        blur()
      </label>
      <label>
        <input
          type="range"
          name="brightness"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        brightness()
      </label>
      <label>
        <input
          type="range"
          name="contrast"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        contrast()
      </label>
      <label>
        <input
          type="range"
          name="dropShadow"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        drop-shadow()
      </label>
      <label>
        <input
          type="range"
          name="grayscale"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        grayscale()
      </label>
      <label>
        <input
          type="range"
          name="hueRotate"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        hue-rotate()
      </label>
      <label>
        <input
          type="range"
          name="invert"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        invert()
      </label>
      <label>
        <input
          type="range"
          name="opacity"
          value="1"
          min="0"
          max="1"
          step="0.1" />
        opacity()
      </label>
      <label>
        <input
          type="range"
          name="saturate"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        saturate()
      </label>
      <label>
        <input type="range" name="sepia" value="0" min="0" max="1" step="0.1" />
        sepia()
      </label>
      <button type="reset">Reset</button>
    </fieldset>
  </form>
</article>

<pre><output></output></pre>

<p>Image by <cite>DigitalNomad</cite></p>
```

```css hidden live-sample___filters
article {
  display: grid;
  grid-template-columns: minmax(200px, 800px) 15em;
  gap: 1rem;
  max-width: 100%;
}
label {
  display: block;
  font-family: sans-serif;
}
input {
  vertical-align: middle;
  margin-right: 0.25em;
  max-width: 50%;
}
output {
  white-space: normal;
  overflow-wrap: break-word;
  display: block;
  width: 100%;
}

img {
  margin: 1rem;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
```

```js hidden live-sample___filters
const image = document.querySelector("img");
const controls = document.querySelectorAll("input");
const output = document.querySelector("output");

for (control of controls) {
  control.addEventListener(
    "change",
    () => {
      /* do function */
      changeCSS();
    },
    false,
  );
}
document.querySelector("button").addEventListener(
  "click",
  () => {
    setTimeout(function () {
      changeCSS();
    }, 50);
  },
  false,
);

function changeCSS() {
  let currentFilter =
    "filter: " +
    blur() +
    brightness() +
    contrast() +
    dropShadow() +
    grayscale() +
    hueRotate() +
    invert() +
    opacity() +
    saturate() +
    sepia() +
    ";";
  image.setAttribute("style", currentFilter);
  output.innerText = currentFilter;
}
function blur() {
  let blurValue = document.getElementsByName("blur")[0].value;
  return blurValue == "0" ? "" : `blur(${blurValue}rem) `;
}
function brightness() {
  let brightnessValue = document.getElementsByName("brightness")[0].value;
  return brightnessValue.toString() === "1"
    ? ""
    : `brightness(${brightnessValue}) `;
}
function contrast() {
  let contrastValue = document.getElementsByName("contrast")[0].value;
  return contrastValue == 1 ? "" : `contrast(${contrastValue}) `;
}
function dropShadow() {
  let dropShadowValue = document.getElementsByName("dropShadow")[0].value;
  return dropShadowValue == 0
    ? ""
    : `drop-shadow(${dropShadowValue}rem ${dropShadowValue}rem 0rem orange) `;
}
function grayscale() {
  let grayscaleValue = document.getElementsByName("grayscale")[0].value;
  return grayscaleValue == 0 ? "" : `grayscale(${grayscaleValue}) `;
}
function hueRotate() {
  let hueRotateValue = document.getElementsByName("hueRotate")[0].value;
  return hueRotateValue == 0 ? "" : `hue-rotate(${hueRotateValue}turn) `;
}
function invert() {
  let invertValue = document.getElementsByName("invert")[0].value;
  return invertValue == 0 ? "" : `invert(${invertValue}) `;
}
function opacity() {
  let opacityValue = document.getElementsByName("opacity")[0].value;
  return opacityValue == 1 ? "" : `opacity(${opacityValue}) `;
}
function saturate() {
  let saturateValue = document.getElementsByName("saturate")[0].value;
  return saturateValue == 1 ? "" : `saturate(${saturateValue}) `;
}
function sepia() {
  let sepiaValue = document.getElementsByName("sepia")[0].value;
  return sepiaValue == 0 ? "" : `sepia(${sepiaValue})`;
}
```

{{EmbedLiveSample("filters", "", "550px")}}

### Properties

- {{cssxref("backdrop-filter")}}
- {{cssxref("filter")}}

### Functions

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}

## Guides

- [Using CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects/Using_filter_effects)
  - : Overview of the concepts surrounding CSS filter effects, including properties, filter functions, and SVG filters, with an explanation of filter values, source order, and value interactions.

## Related concepts

- {{CSSxRef("&lt;image&gt;")}} data type
- {{cssxref("&lt;filter-function&gt;")}} data type

- {{cssxref("background-image")}} CSS property
- {{cssxref("background-blend-mode")}} CSS property
- {{cssxref("mix-blend-mode")}} CSS property

- {{glossary("interpolation")}} glossary term

- [`color-interpolation-filters`](/en-US/docs/Web/SVG/Attribute/color-interpolation-filters) SVG property

## Specifications

{{Specifications}}

## See also

- Properties in the [CSS compositing and blending](/en-US/docs/Web/CSS/CSS_compositing_and_blending) module enable blending an element's background layers together and blending an element with its container
- The SVG {{SVGElement("filter")}} element and the SVG filter primitives: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
