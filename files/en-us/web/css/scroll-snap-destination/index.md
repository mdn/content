---
title: scroll-snap-destination
slug: Web/CSS/scroll-snap-destination
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - Deprecated
  - Reference
  - recipe:css-property
  - Non-standard
browser-compat: css.properties.scroll-snap-destination
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-destination`** [CSS](/en-US/docs/Web/CSS) property defines the position in x and y coordinates within the scroll container's visual {{Glossary("viewport")}} which element snap points align with.

```css
/* <position> value */
scroll-snap-destination: 400px 600px;

/* Global values */
scroll-snap-destination: inherit;
scroll-snap-destination: initial;
scroll-snap-destination: unset;
```

## Syntax

### Values

- `<position>`
  - : Specifies the offset of the snap destination from the start edge of the scroll container's visual viewport. The first value gives the x coordinate of the snap destination, the second value its y coordinate.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
scroll-snap-destination =
  <position>
```

## Examples

### Setting scroll snap destination

#### HTML

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer destination0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer destination25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer destination50">
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

#container > div:nth-child(-n+2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 20px 0;
  font-size: 0;
}

.destination0 {
  scroll-snap-destination: 0 0;
}

.destination25 {
  scroll-snap-destination: 25px 0;
}

.destination50 {
  scroll-snap-destination: 50px 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87EA87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

#### Result

{{EmbedLiveSample("Setting_scroll_snap_destination", "100%", "170")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
