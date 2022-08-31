---
title: scroll-snap-points-y
slug: Web/CSS/scroll-snap-points-y
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - Deprecated
  - Reference
  - recipe:css-property
  - Non-standard
browser-compat: css.properties.scroll-snap-points-y
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-points-y`** [CSS](/en-US/docs/Web/CSS) property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

```css
/* Keyword value */
scroll-snap-points-y: none;

/* Repeated snap points */
scroll-snap-points-y: repeat(400px);

/* Global values */
scroll-snap-points-y: inherit;
scroll-snap-points-y: initial;
scroll-snap-points-y: unset;
```

## Syntax

### Values

- `none`
  - : The scroll container does not define any snap points. Elements within the scroll container may still define snap points on behalf of the scroll container.
- `repeat(<length-percentage>)`
  - : Defines an interval at which snap points are defined, starting from the container's relevant start edge. Only positive lengths are allowed. Percentages refer to the width of the container.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
scroll-snap-points-y =
  none | repeat( <length-percentage> )
```

## Examples

### Setting vertical scroll snap points

#### HTML

```html
<div id="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

#### CSS

```css
#container {
  height: 200px;
  width: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-points-y: repeat(200px);
  scroll-snap-type: mandatory;
  font-size: 0;
}

#container > div {
  width: 200px;
  height: 200px;
  display: inline-block;
  line-height: 200px;
  text-align: center;
  font-size: 100px;
}

#container > div:nth-child(even) {
  background-color: #87EA87;
}

#container > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

#### Result

{{EmbedLiveSample("Setting_vertical_scroll_snap_points", 220, 220)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
