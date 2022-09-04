---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-orient
---
{{CSSRef}}{{Non-standard_header}}

The **`-moz-orient`** [CSS](/en-US/docs/Web/CSS) property specifies the orientation of the element to which it's applied.

## Syntax

The `-moz-orient` property is specified as one of the keyword values chosen from the list below.

### Values

- `inline`
  - : The element is rendered in the same direction as the axis of the text: horizontally for horizontal writing modes, vertically for vertical writing modes.
- `block`
  - : The element is rendered orthogonally to the axis of the text: vertically for horizontal writing modes, horizontal for vertical writing modes.
- `horizontal`
  - : The element is rendered horizontally.
- `vertical`
  - : The element is rendered vertically.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-orient =
  inline | block | horizontal | vertical
```

## Examples

### HTML

```html
<p>
  The following progress meter
  is horizontal (the default):
</p>
<progress max="100" value="75"></progress>

<p>
 The following progress meter
 is vertical:
</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Result

{{EmbedLiveSample("Examples","200","360")}}

## Specifications

Not part of any standard. Though [submitted](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) to the W3C, with positive initial feedback, this property is not yet part of any specification; currently, this is a Mozilla-specific extension (that is, `-moz-orient`).

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("box-orient")}}
