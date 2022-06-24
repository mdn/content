---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-emphasis-position
---
{{CSSRef}}

The **`text-emphasis-position`** [CSS](/en-US/docs/Web/CSS) property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

## Syntax

```css
/* Initial value */
text-emphasis-position: over right;

/* Keywords value */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Global values */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Values

- `over`
  - : Draws marks over the text in horizontal writing mode.
- `under`
  - : Draws marks under the text in horizontal writing mode.
- `right`
  - : Draws marks to the right of the text in vertical writing mode.
- `left`
  - : Draws marks to the left of the text in vertical writing mode.

## Description

The preferred position of emphasis marks depends on the language. In Japanese for example, the preferred position is `over right`. In Chinese, on the other hand, the preferred position is `under right`. The informative table below summarizes the preferred emphasis mark positions for Chinese, Mongolian and Japanese:

<table>
  <caption>
    Preferred emphasis mark and ruby position
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Language</th>
      <th colspan="2" scope="col">Preferred position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontal</th>
      <th>Vertical</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanese</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="Emphasis marks appear over each emphasized character in horizontal Japanese text."
          src="text-emphasis-ja.png"
          title="Emphasis (shown in blue for clarity) applied above a fragment of Japanese text"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Emphasis marks appear on the right of each emphasized character in vertical Japanese text."
          src="text-emphasis-v.gif"
          title="Emphasis applied on the right of a fragment of Japanese text"
        />
      </td>
    </tr>
    <tr>
      <td>Korean</td>
    </tr>
    <tr>
      <td>Mongolian</td>
    </tr>
    <tr>
      <td>Chinese</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="Emphasis marks appear below each emphasized character in horizontal Simplified Chinese text."
          src="text-emphasis-zh.gif"
          title="Emphasis (shown in blue for clarity) applied below a fragment of Chinese text"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Note:** The `text-emphasis-position` cannot be set, and therefore are not reset either, using the {{cssxref("text-emphasis")}} shorthand property.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preferring ruby over emphasis marks

Some editors prefer to hide emphasis marks when they conflict with ruby. In HTML, this can be done with the following style rule:

```css
ruby {
  text-emphasis: none;
}
```

### Preferring emphasis marks over ruby

Some other editors prefer to hide ruby when they conflict with emphasis marks. In HTML, this can be done with the following pattern:

```css
em {
  text-emphasis: dot; /* Set text-emphasis for <em> elements */
}

em rt {
  display: none; /* Hide ruby inside <em> elements */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The longhand properties {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, and the corresponding shorthand property {{cssxref("text-emphasis")}}.
