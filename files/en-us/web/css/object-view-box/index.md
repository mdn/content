---
title: object-view-box
slug: Web/CSS/object-view-box
page-type: css-property
browser-compat: css.properties.object-view-box
---

{{CSSRef}}

The **`object-view-box`** [CSS](/en-US/docs/Web/CSS) property defines a rectangle as a viewable area (view box) within a {{glossary("replaced elements", "replaced element")}} enabling the the content of element to be zoomed or panned. It works similarly to the SVG {{SVGAttr("viewBox")}} attribute.

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
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="A close up of red flowers and buds on a branch." />
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
    background-color: #ffcd33;
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
/* keywords */
object-view-box: none;

/* Rectangular shape functions */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
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
  - : The default. The element does not have a view box.

- [`<basic-shape-rect>`](/en-US/docs/Web/CSS/basic-shape#basic-shape-rect)
  - : A {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, or {{cssxref("basic-shape/rect","rect()")}} function specifying a view box for an element with a natural dimensions (replaced elements). Resolves to `none` otherwise.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Live zoom in using object-view-box property

In this example, we display part of a large image of a leopard. Users can zoom the image in and out, with the eye of the leopard being the focal point.

### HTML

We include an {{htmlelement("img")}} and a [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} element, associating a {{htmlelement("label")}} with the `<input>` . The natural dimensions of the original image is `1244px` by `416px` tall, with an {{glossary("aspect ratio")}} of `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom: </label>
  <input type="range" id="box-size" min="100" max="350" value="150" />
</p>
```

### CSS

We define a custom property `--box-size` which we use to adjust the view box size. Decreasing the size of the view box gives a zoom-in effect. Increasing the view box size gives a zoom-out effect. The {{cssxref("basic-shape/xywh","xywh()")}} function accepts an offset point and size of the view box as parameters. The view box's offset point, the focal point in our zoom effects, is set at `(500px, 30px)`, which is the top left corner of the right eye of the leopard.

```css hidden
input {
  width: 350px;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser doesn't support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  --box-size: 150px;
  width: 450px;
  height: 350px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

### JavaScript

```js
const zoom = document.getElementById("box-size");

function update() {
  zoom.style.setProperty("--box-size", `${500 - zoom.value}px`);
}

zoom.addEventListener("input", update);
```

### Result

{{ EmbedLiveSample("Live zoom in using object-view-box property", 500, 450) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Understanding aspect ratio](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
