---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
page-type: css-property
browser-compat: css.properties.overscroll-behavior-block
---

{{CSSRef}}

The **`overscroll-behavior-block`** [CSS](/en-US/docs/Web/CSS) property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

See {{cssxref("overscroll-behavior")}} for a full explanation.

## Syntax

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

The `overscroll-behavior-block` property is specified as a keyword chosen from the list of values below.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior (e.g., "bounce" effects) is observed inside the element where this value is set. However, no {{Glossary("Scroll_chaining", "scroll chaining")}} occurs on neighboring scrolling areas; the underlying elements will not scroll. The `contain` value disables native browser navigation, including the vertical pull-to-refresh gesture and horizontal swipe navigation.
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
      <p>
        <code>overscroll-behavior-block</code> has been used to make it so that
        when the scroll boundaries of the yellow inner box are reached, the
        whole page does not begin to scroll.
      </p>
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
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
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
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
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

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-inline")}}
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
