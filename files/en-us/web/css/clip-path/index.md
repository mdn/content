---
title: clip-path
slug: Web/CSS/clip-path
page-type: css-property
browser-compat: css.properties.clip-path
---

{{CSSRef}}

The **`clip-path`** [CSS](/en-US/docs/Web/CSS) property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

{{EmbedInteractiveExample("pages/css/clip-path.html")}}

## Syntax

```css
/* Keyword values */
clip-path: none;

/* <clip-source> values */
clip-path: url(resources.svg#c1);

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 0 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

The `clip-path` property is specified as one or a combination of the values listed below.

### Values

- `<clip-source>`
  - : A {{cssxref("url", "url()")}} referencing an [SVG](/en-US/docs/Web/SVG) {{SVGElement("clipPath")}} element.
- {{cssxref("&lt;basic-shape&gt;")}}

  - : A shape whose size and position is defined by the `<geometry-box>` value. If no geometry box is specified, the `border-box` will be used as the reference box. One of:

    - {{cssxref("basic-shape/inset","inset()")}}
      - : Defines an inset rectangle.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Defines a circle using a radius and a position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Defines an ellipse using two radii and a position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Defines a polygon using an SVG filling rule and a set of vertices.
    - {{cssxref("path","path()")}}
      - : Defines a shape using an optional SVG filling rule and an SVG path definition.

- `<geometry-box>`

  - : If specified in combination with a `<basic-shape>`, this value defines the reference box for the basic shape. If specified by itself, it causes the edges of the specified box, including any corner shaping (such as a {{cssxref("border-radius")}}), to be the clipping path. The geometry box can be one of the following values:

    - `margin-box`
      - : Uses the [margin box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) as the reference box.
    - `border-box`
      - : Uses the [border box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#border-box) as the reference box.
    - `padding-box`
      - : Uses the [padding box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) as the reference box.
    - `content-box`
      - : Uses the [content box](/en-US/docs/Web/CSS/CSS_shapes/From_box_values#content-box) as the reference box.
    - `fill-box`
      - : Uses the object bounding box as the reference box.
    - `stroke-box`
      - : Uses the stroke bounding box as the reference box.
    - `view-box`
      - : Uses the nearest SVG viewport as the reference box. If a {{SVGAttr("viewBox")}} attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the size of the reference box is set to the width and height values of the `viewBox` attribute.

- `none`
  - : No clipping path is created.

> **Note:** A computed value other than **`none`** results in the creation of a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) the same way that CSS {{cssxref("opacity")}} does for values other than `1`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparison of HTML and SVG

```html hidden
<svg class="defs">
  <defs>
    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
      <path
        d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" />
    </clipPath>
  </defs>
</svg>

<div class="grid">
  <div class="col">
    <div class="note">clip-path: none</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="none">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="none">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: url(#myPath)<br /><br />
      Assuming the following clipPath definition:
      <pre>
&lt;svg&gt;
  &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
    &lt;path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" /&gt;
  &lt;/clipPath&gt;
&lt;/svg&gt;</pre
      >
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45
      Q135,90,75,130 Q15,90,15,45 Z')
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape1">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape1">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: fill-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape3">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape3">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: stroke-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape4">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape4">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: view-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape5">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape5">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: margin-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape6">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape6">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: border-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape7">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape7">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: padding-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape8">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape8">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: content-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape9">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape9">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
html,
body {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.col {
  flex: 1 auto;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em 0.5em 0;
  font: 0.8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  display: inline-block;
  border: 1px dotted grey;
  position: relative;
}

.container::before {
  content: "margin";
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic 0.6em sans-serif;
}

.view-box {
  box-shadow:
    1rem 1rem 0 #efefef inset,
    -1rem -1rem 0 #efefef inset;
}

.container.view-box::after {
  content: "view-box";
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font: italic 0.6em sans-serif;
}

.cell span {
  display: block;
  margin-bottom: 0.5em;
}

p {
  font-family: sans-serif;
  background: #000;
  color: pink;
  margin: 2em;
  padding: 3em 1em;
  border: 1em solid pink;
  width: 6em;
}

.none {
  clip-path: none;
}
.svg {
  clip-path: url(#myPath);
}
.svg2 {
  clip-path: path(
    "M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z"
  );
}
.shape1 {
  clip-path: circle(25%);
}
.shape2 {
  clip-path: circle(25% at 25% 25%);
}
.shape3 {
  clip-path: fill-box circle(25% at 25% 25%);
}
.shape4 {
  clip-path: stroke-box circle(25% at 25% 25%);
}
.shape5 {
  clip-path: view-box circle(25% at 25% 25%);
}
.shape6 {
  clip-path: margin-box circle(25% at 25% 25%);
}
.shape7 {
  clip-path: border-box circle(25% at 25% 25%);
}
.shape8 {
  clip-path: padding-box circle(25% at 25% 25%);
}
.shape9 {
  clip-path: content-box circle(25% at 25% 25%);
}

.defs {
  width: 0;
  height: 0;
  margin: 0;
}

pre {
  margin-bottom: 0;
}

svg {
  margin: 1em;
  font-family: sans-serif;
  width: 192px;
  height: 192px;
}

svg rect {
  stroke: pink;
  stroke-width: 16px;
}

svg text {
  fill: pink;
  text-anchor: middle;
}

svg text.em {
  font-style: italic;
}
```

{{EmbedLiveSample("Comparison_of_HTML_and_SVG", "100%", "800px")}}

### Complete example

#### HTML

```html
<img id="clipped" src="mdn.svg" alt="MDN logo" />
<svg height="0" width="0">
  <defs>
    <clipPath id="cross">
      <rect y="110" x="137" width="90" height="90" />
      <rect x="0" y="110" width="90" height="90" />
      <rect x="137" y="0" width="90" height="90" />
      <rect x="0" y="0" width="90" height="90" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#cross)" selected>cross</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

#### CSS

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
```

```js hidden
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

#### Result

{{EmbedLiveSample("Complete_example", 230, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- CSS properties: {{cssxref("mask")}}, {{cssxref("filter")}}
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- SVG attributes:

  - {{SVGAttr("clip-path")}}
  - {{SVGAttr("clip-rule")}}
