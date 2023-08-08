---
title: <relative-size>
slug: Web/CSS/relative-size
page-type: css-type
spec-urls: https://drafts.csswg.org/css-fonts/#valdef-font-size-relative-size
---

{{CSSRef}}

The **`<relative-size>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) describes relative size keywords. The `<relative-size>` values define a size relative to the computed size of the parent element. This data type is used in the {{cssxref("font")}} shorthand and {{cssxref("font-size")}} properties.

## Syntax

The `<relative-size>` data type is defined using a keyword value chosen from the list below.

### Values

- `smaller`

  - : A relative size one size smaller than the inherited size.

- `bigger`

  - : A relative size one size larger than the inherited size.

## Description

The values of the `<relative-size>` keywords are relative to the current size the element would otherwise be. If the inherited size was defined using an {{cssxref("absolute-size")}}, the `<relative-size>` equates to the adjacent size in the `<absolute-size>` table. Otherwise, the relative increase or decrease is between 120% and 150%.

## Formal syntax

```plain
<relative-size> = smaller | larger
```

## Examples

```html
<ul>
  <li class="smaller">font-size: smaller;</li>
  <li>No font-size set</li>
  <li class="larger">font-size: larger;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.smaller {
  font-size: smaller;
}
.larger {
  font-size: larger;
}
```

#### Result

{{EmbedLiveSample('Examples', '100%', 100)}}

## Specifications

{{Specifications}}

## See also

- CSS {{cssxref("absolute-size")}} data type
- CSS {{cssxref("font")}} and {{cssxref("font-size")}} properties
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
