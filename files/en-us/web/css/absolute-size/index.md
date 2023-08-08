---
title: <absolute-size>
slug: Web/CSS/absolute-size
page-type: css-type
spec-urls: https://drafts.csswg.org/css-fonts/#valdef-font-size-absolute-size
---

{{CSSRef}}

The **`<absolute-size>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) describes font-size keywords mapped to the deprecated HTML [`size`](#html-size-attribute) attribute. This data type is used in the {{cssxref("font")}} shorthand and {{cssxref("font-size")}} properties.

## Syntax

The `<absolute-size>` data type is defined using a keyword value chosen from the list below.

### Values

- `xx-small`

  - : Mapped to `size="1"`. An absolute size three sizes smaller than `medium`.

- `x-small`

  - : Mapped to `size="2"`. An absolute size two sizes smaller than `medium`.

- `small`

  - : Mapped to `size="3"`. An absolute size one size smaller than `medium`.

- `medium`

  - : Mapped to `size="4"`. The user's preferred font size. This values is used as the reference middle value.

- `large`

  - : Mapped to `size="5"`. An absolute size one size larger than `medium`.

- `x-large`

  - : Mapped to `size="6"`. An absolute size two sizes larger than `medium`.

- `xx-large`
  - : Mapped to `size="7"`. An absolute size three sizes larger than `medium`.

## Description

The values of each `<absolute-size>` keyword is sized relative to the `medium` font size and the individual device's characteristics, such as device resolution. Usser agents maintain a table of font sizes for each font, with the `<absolute-size>` keywords being the index.

In CSS1, the scaling factor between adjacent indexes was 1.5, which was too large. In CSS2 (1998), the scaling factor between adjacent keyword value indexes was 1.2, which created issues for the small values. As fixed ratio between adjacent absolute-size keywords was found to be problematic, there is no longer a fixed ratio recommendation. The only recommendation is that, to preserve readability, the smallest font size should not be less than `9px`.

### HTML size attribute

The deprecated HTML `size` attribute, with a computed value between `1` and `7`, set the size of the font. The attribute value was either an integer between `1` and `7` or a relative value, preceded by a `+` or `-`, to increase or decrease the font size. A value of `+1` meant increase the `size` by one and `-2` meant decrease the size by two, with a minimum computed value of `1` and a maximum computed value of `7`.

## Formal syntax

{{csssyntax}}

## Examples

```html
<ul>
  <li class="xx-small">font-size: xx-small;</li>
  <li class="x-small">font-size: x-small;</li>
  <li class="small">font-size: small;</li>
  <li class="medium">font-size: medium;</li>
  <li class="large">font-size: large;</li>
  <li class="x-large">font-size: x-large;</li>
  <li class="xx-large">font-size: xx-large;</li>
  <li class="xxx-large">font-size: xxx-large;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.xx-small {
  font-size: xx-small;
}
.x-small {
  font-size: x-small;
}
.small {
  font-size: small;
}
.medium {
  font-size: medium;
}
.large {
  font-size: large;
}
.x-large {
  font-size: x-large;
}
.xx-large {
  font-size: xx-large;
}
.xxx-large {
  font-size: xxx-large;
}
```

#### Result

{{EmbedLiveSample('Examples', '100%', 400)}}

## Specifications

{{Specifications}}

## See also

- The {{cssxref("font")}} and {{cssxref("font-size")}} properties
- The [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
