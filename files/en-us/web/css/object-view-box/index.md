---
title: object-view-box
slug: Web/CSS/object-view-box
page-type: css-property
browser-compat: css.properties.object-view-box
---

{{CSSRef}}

The **`object-view-box`** [CSS](/en-US/docs/Web/CSS) property defines a rectangle within the content of a {{glossary("replaced elements", "replaced element")}}. It treats that rectangle as the viewable area (view box). It appears as if you zoomed in on part of an image. It works similarly to {{SVGAttr("viewBox")}} attribute in SVG.

{{InteractiveExample("CSS Demo: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888;
}

@supports not (object-view-box: none) {
  body::before {
    content: "The 'object-view-box' property is not supported by your browser.";
    color: black;
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

## Syntax

```css
object-view-box: none;

/* inset(allSides) */
object-view-box: inset(20%);
/* inset(vertical horizontal) */
object-view-box: inset(20% 30%);
/* inset(top right bottom left) */
object-view-box: inset(10px 0 25px 33px);

/* xywh(x y width height) */
object-view-box: xywh(95px 20px 60px 60px);

/* rect(top right bottom left) */
object-view-box: rect(10px 30px 30px 10px);

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

### Values

- `none`

  - : No view box is specified. It makes the entire content visible.

- `<basic-shape-rect>`
  - : Specifies a view box for the element using {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, or {{cssxref("basic-shape/rect","rect()")}} function.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Live zoom in using object-view-box property

In this example, we allow users to zoom in on a leopard image. The zoom-in point is fixed at the eye of the leopard. We take user input using HTML [`range`](Web/HTML/Reference/Elements/input/range) input element.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<br />
<label for="box-size">Zoom: </label>
<input type="range" id="box-size" min="100" max="350" value="150" />
```

```css hidden
input {
  width: 350px;
}
```

```css
:root {
  --box-size: 350px;
}

img {
  width: 450px;
  height: 350px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

In the above CSS, we define a custom property `--box-size` to adjust the view box size. Decreasing the size of the view box gives a zoom-in effect. Increasing the view box size gives a zoom-out effect. The `xywh()` function accepts an offset point and size of the view box. The view box's offset point is set at (500px, 30px), which is the top left corner of the right eye of the leopard.

```js
const zoom = document.getElementById("box-size");
const root = document.documentElement;

function update() {
  root.style.setProperty("--box-size", `${500 - zoom.value}px`);
}

zoom.addEventListener("input", update);
update();
```

The above JavaScript updates the `--box-size` property value when the user interacts with the input.

{{ EmbedLiveSample("Live zoom in using object-view-box property", 500, 450) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
