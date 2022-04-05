---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
  - recipe:css-property
browser-compat: css.properties.caption-side
---
{{CSSRef}}

The **`caption-side`** [CSS](/en-US/docs/Web/CSS) property puts the content of a table's {{HTMLElement("caption")}} on the specified side. The values are relative to the {{cssxref('writing-mode')}} of the table.

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

## Syntax

```css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Logical values */
caption-side: block-start;
caption-side: block-end;
caption-side: inline-start;
caption-side: inline-end;

/* Global values */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: revert-layer;
caption-side: unset;
```

The `caption-side` property is specified as one of the keyword values listed below.

### Values

- `top`
  - : The caption box should be positioned above the table.
- `bottom`
  - : The caption box should be positioned below the table.
- `block-start`
  - : The caption box should be positioned at the block start edge of the table.
- `block-end`
  - : The caption box should be positioned at the block end edge of the table.
- `inline-start`
  - : The caption box should be positioned at the inline start edge of the table.
- `inline-end`
  - : The caption box should be positioned at the inline end edge of the table.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting captions above and below

#### HTML

```html
<table class="top">
  <caption>Caption ABOVE the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br>

<table class="bottom">
  <caption>Caption BELOW the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### Result

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
