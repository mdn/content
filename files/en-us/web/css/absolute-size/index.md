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

  - : An absolute size 60% the size of `medium`. Mapped to `size="1"`.

- `x-small`

  - : An absolute size 75% the size of `medium`.

- `small`

  - : An absolute size 89% the size of `medium`. Mapped to `size="2"`.

- `medium`

  - : The user's preferred font size. This values is used as the reference middle value. Mapped to `size="3"`.

- `large`

  - : An absolute size 20% larger than `medium`. Mapped to `size="4"`.

- `x-large`

  - : An absolute size 50% larger than `medium`. Mapped to `size="5"`.

- `xx-large`

  - : An absolute size twice the size of `medium`. Mapped to `size="6"`.

- `xxx-large`
  - : An absolute size three times the size of `medium`. Mapped to `size="7"`.

## Description

The values of each `<absolute-size>` keyword is sized relative to the `medium` font size and the individual device's characteristics, such as device resolution. Usser agents maintain a table of font sizes for each font, with the `<absolute-size>` keywords being the index.

In CSS1, the scaling factor between adjacent indexes was 1.5, which was too large. In CSS2 (1998), the scaling factor between adjacent keyword value indexes was 1.2, which created issues for the small values. As a single fixed ratio between adjacent absolute-size keywords was found to be problematic, there is no longer a fixed ratio recommendation. The only recommendation is that, to preserve readability, the smallest font size should not be less than `9px`.

The following table lists the scaling factor, the deprecated [HTML `size` attribute](#html-size-attribute) mapping, and the mapping to [`<h1>` to `<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) headings for each `<absolute-size>` keyword value.

| `<absolute-size>`                                              | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------------------------------------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| scaling factor                                                 | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML `<font>` size                                             | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |
| [HTML headings](/en-US/docs/Web/HTML/Element/Heading_Elements) | h6       |         | h5    | h4     | h3    | h2      | h1       |           |

### HTML size attribute

The deprecated HTML `size` attribute, with a computed value between `1` and `7`, set the size of the font. The attribute value was either an integer between `1` and `7` or a relative value, preceded by a `+` or `-`, to increase or decrease the font size. A value of `+1` meant increase the `size` by one and `-2` meant decrease the size by two, with a minimum computed value of `1` and a maximum computed value of `7`.

## Formal syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

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

- CSS {{cssxref("relative-size")}} data type
- CSS {{cssxref("font")}} and {{cssxref("font-size")}} properties
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
