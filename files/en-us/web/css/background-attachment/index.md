---
title: background-attachment
slug: Web/CSS/background-attachment
page-type: css-property
browser-compat: css.properties.background-attachment
---

{{CSSRef}}

The **`background-attachment`** [CSS](/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the {{glossary("viewport")}}, or scrolls with its containing block.

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## Syntax

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

The `background-attachment` property is specified as one of the keyword values from the list below.

### Values

- `fixed`
  - : The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element. (This is not compatible with {{cssxref("background-clip", "background-clip: text", "#values")}}.)
- `local`
  - : The background is fixed relative to the element's contents. If the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.
- `scroll`
  - : The background is fixed relative to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple example

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### CSS

```css
p {
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### Result

{{EmbedLiveSample("Simple_example")}}

### Multiple background images

This property supports multiple background images. You can specify a different `<attachment>` for each background, separated by commas. Each image is matched with the corresponding `<attachment>` type, from first specified to last.

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### CSS

```css
p {
  background-image: url("starsolid.gif"), url("startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Result

{{EmbedLiveSample("Multiple_background_images")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
