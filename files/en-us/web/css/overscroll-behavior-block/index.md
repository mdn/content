---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
tags:
  - CSS
  - CSS Box Model
  - CSS Logical Properties
  - CSS Property
  - Reference
  - overscroll-behavior-block
  - recipe:css-property
browser-compat: css.properties.overscroll-behavior-block
---
{{CSSRef}}

The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

See {{cssxref("overscroll-behavior")}} for a full explanation.

```css
/* Keyword values */
overscroll-behavior-block: auto; /* default */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Global values */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

## Syntax

The `overscroll-behavior-block` property is specified as a keyword chosen from the list of values below.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior is observed inside the element this value is set on (e.g. "bounce" effects or refreshes), but no scroll chaining occurs to neighboring scrolling areas, e.g. underlying elements will not scroll.
- `none`
  - : No scroll chaining occurs to neighboring scrolling areas, and default scroll overflow behavior is prevented.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preventing block overscrolling

In this demo we have two block-level boxes, one inside the other. The outer box has a large {{cssxref("height")}} set on it so the page will scroll vertically. The inner box has a small {{cssxref("width")}} (and `height`) set on it so it sits comfortably inside the viewport, but its content is given a large `height` so it will also scroll vertically.

By default, when the inner box is scrolled and a scroll boundary is reached, the whole page will begin to scroll, which is probably not what we want. To avoid this happening in the block direction, we've set `overscroll-behavior-block: contain` on the inner box.

#### HTML

```html
<main>
  <div>
    <div>
      <p><code>overscroll-behavior-block</code> has been used to make it so that when the scroll boundaries of the yellow inner box are reached, the whole page does not begin to scroll.</p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 3000px;
  width: 500px;
  background-color: white;
  background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-block: contain;
}

div > div {
  height: 1500px;
  width: 100%;
  background-color: yellow;
  background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 19px, rgba(0,0,0,0.5) 20px);
}

p {
  padding: 10px;
  background-color: rgba(255,0,0,0.5);
  margin: 0;
  width: 340px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Result

{{EmbedLiveSample('Preventing_block_overscrolling','100%', 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
