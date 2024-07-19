---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
page-type: css-property
browser-compat: css.properties.box-decoration-break
---

{{CSSRef}}

The **`box-decoration-break`** [CSS](/en-US/docs/Web/CSS) property specifies how an element's [fragments](/en-US/docs/Web/CSS/CSS_fragmentation) should be rendered when broken across multiple lines, columns, or pages.

{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}

The specified value will impact the appearance of the following properties:

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## Syntax

```css
/* Keyword values */
box-decoration-break: slice;
box-decoration-break: clone;

/* Global values */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

The `box-decoration-break` property is specified as one of the keyword values listed below.

### Values

- `slice`
  - : The element is initially rendered as if its box were not fragmented, after which the rendering for this hypothetical box is sliced into pieces for each line/column/page. Note that the hypothetical box can be different for each fragment since it uses its own height if the break occurs in the inline direction, and its own width if the break occurs in the block direction. See the CSS specification for details.
- `clone`
  - : Each box fragment is rendered independently with the specified border, padding, and margin wrapping each fragment. The {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }}, and {{ Cssxref("box-shadow") }} are applied to each fragment independently. The background is also drawn independently for each fragment, which means that a background image with {{ Cssxref("background-repeat") }}`: no-repeat` may nevertheless repeat multiple times.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Inline box fragments

An inline element with a box decoration may have unexpected appearance when it contains line breaks due to the initial `slice` value.
The following example shows the effect of adding `box-decoration-break: clone` to a {{htmlelement("span")}} that contains {{htmlelement("br")}} tags:

```css hidden
body {
  display: flex;
  background-color: grey;
  justify-content: space-around;
}

span {
  padding: 0em 1em;
  border-radius: 1rem;
  border-style: solid;
  margin: 1rem;
  font: 22px sans-serif;
  line-height: 2;
}
```

```css
span {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
}

#clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<p>
  <span>The<br />quick<br />orange fox</span>
</p>
<p>
  <span id="clone">The<br />quick<br />orange fox</span>
</p>
```

{{embedlivesample("inline_box_fragments", "100%", "210")}}

### Block box fragments

The following example shows how block elements with box decoration look when they contain line breaks in a [multi-column layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout).
Notice how the result of `box-decoration-break: slice` would be the equivalent of the first {{htmlelement("div")}} if stacked vertically.

```css hidden
body {
  background-color: grey;
}
span {
  padding: 0em 2em;
  border-radius: 250px;
  border-style: solid;
  margin-left: 1em;
  font: 20px sans-serif;
  line-height: 1.5;
}
```

```css
span {
  display: block;
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    inset 8px 8px 10px 0px deeppink,
    inset -5px -5px 5px 0px blue,
    inset 5px 5px 15px 0px yellow;
}
#base {
  width: 33%;
}
.columns {
  columns: 3;
}

.clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<div id="base">
  <span>The<br />quick<br />orange fox</span>
</div>
<br />

<h2>'box-decoration-break: slice'</h2>
<div class="columns">
  <span>The<br />quick<br />orange fox</span>
</div>

<h2>'box-decoration-break: clone'</h2>
<div class="columns">
  <span class="clone">The<br />quick<br />orange fox</span>
</div>
```

{{embedlivesample("block_box_fragments", "", "340")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}
