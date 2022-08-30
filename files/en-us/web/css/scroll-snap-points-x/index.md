---
title: scroll-snap-points-x
slug: Web/CSS/scroll-snap-points-x
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - Deprecated
  - Reference
  - recipe:css-property
  - Non-standard
browser-compat: css.properties.scroll-snap-points-x
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-points-x`** [CSS](/en-US/docs/Web/CSS) property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

```css
/* Keyword value */
scroll-snap-points-x: none;

/* Repeating snap points */
scroll-snap-points-x: repeat(400px);

/* Global values */
scroll-snap-points-x: inherit;
scroll-snap-points-x: initial;
scroll-snap-points-x: unset;
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
scroll-snap-points-x =
  none | repeat( <length-percentage> )
```

## Examples

### Setting horizontal scroll snap points

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
  width: 200px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
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
  background-color: #87ea87;
}

#container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### Result

{{EmbedLiveSample("Setting_horizontal_scroll_snap_points", 220, 220)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
