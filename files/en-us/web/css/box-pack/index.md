---
title: box-pack
slug: Web/CSS/box-pack
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.box-pack
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> This is a property of the original CSS flexible box layout Module draft, and has been replaced by a newer standard. See [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) for information about the current standard.

The **`-moz-box-pack`** and **`-webkit-box-pack`** [CSS](/en-US/docs/Web/CSS) properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

The direction of layout depends on the element's orientation: horizontal or vertical.

## Syntax

```css
/* Keyword values */
box-pack: start;
box-pack: center;
box-pack: end;
box-pack: justify;

/* Global values */
box-pack: inherit;
box-pack: initial;
box-pack: unset;
```

The `box-pack` property is specified as one of the keyword values listed below.

### Values

- `start`
  - : The box packs contents at the start, leaving any extra space at the end.
- `center`
  - : The box packs contents in the center, dividing any extra space equally between the start and the end.
- `end`
  - : The box packs contents at the end, leaving any extra space at the start.
- `justify`
  - : The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the value as if it were `start`.

## Notes

The edge of the box designated the _start_ for packing purposes depends on the box's orientation and direction:

- For horizontal elements, the _start_ is the top edge.
- For vertical elements, the _start_ is the left edge.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th><strong>Normal</strong></th>
      <th><strong>Reverse</strong></th>
    </tr>
    <tr>
      <th><strong>Horizontal</strong></th>
      <td>left</td>
      <td>right</td>
    </tr>
    <tr>
      <th><strong>Vertical</strong></th>
      <td>top</td>
      <td>bottom</td>
    </tr>
  </tbody>
</table>

The edge opposite to the start is designated the _end_.

If the packing is set using the element's `pack` attribute, then the style is ignored.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
box-pack =
  start | center | end | justify
```

## Examples

### Examples of box-pack

```css
div.example {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 300px;
  /* Make this box wide enough to show the contents
     are centered horizontally */
  width: 300px;

  /* Children should be oriented vertically */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Align children to the horizontal center of this box */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Pack children to the bottom of this box */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
```

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

{{EmbedLiveSample('Examples', 310, 310)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
