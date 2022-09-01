---
title: scroll-snap-coordinate
slug: Web/CSS/scroll-snap-coordinate
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - Deprecated
  - Reference
  - recipe:css-property
  - Non-standard
browser-compat: css.properties.scroll-snap-coordinate
---

{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-coordinate`** [CSS](/en-US/docs/Web/CSS) property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's {{cssxref("scroll-snap-destination")}} for each respective axis.

```css
/* Keyword value */
scroll-snap-coordinate: none;

/* <position> values */
scroll-snap-coordinate: 50px 50px; /* Single coordinate */
scroll-snap-coordinate: 100px 100px, 100px bottom; /* Multiple coordinates */

/* Global values */
scroll-snap-coordinate: inherit;
scroll-snap-coordinate: initial;
scroll-snap-coordinate: unset;
```

If the element has been transformed, the snap coordinates are likewise transformed, thus aligning the snap points with the element as it is displayed.

## Syntax

### Values

- `none`
  - : Specifies that the element does not contribute to a snap point.
- {{cssxref("&lt;position&gt;")}}
  - : Specifies the offset of the snap coordinates from the start edge of the element's border box. For each pairing, the first value gives the x coordinate of the snap coordinate, the second value its y coordinate.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
scroll-snap-coordinate =
  none | <position>#
```

## Examples

### Setting scroll snap coordinates

#### HTML

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer coordinate0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer coordinate25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer coordinate50">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>
```

#### CSS

```css
#container {
  display: flex;
}

#container > div:nth-child(-n + 2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  font-size: 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.coordinate0 > div {
  scroll-snap-coordinate: 0 0;
}

.coordinate25 > div {
  scroll-snap-coordinate: 25px 0;
}

.coordinate50 > div {
  scroll-snap-coordinate: 50px 0;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87ea87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### Result

{{EmbedLiveSample("Setting_scroll_snap_coordinates", "100%", "170")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
