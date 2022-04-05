---
title: border-collapse
slug: Web/CSS/border-collapse
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - CSS Tables
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-collapse
---
{{CSSRef}}

The **`border-collapse`** [CSS](/en-US/docs/Web/CSS) property sets whether cells inside a {{htmlElement("table")}} have shared or separate borders.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

When cells are collapsed, the {{cssxref("border-style")}} value of `inset` behaves like `groove`, and `outset` behaves like `ridge`.

When cells are separated, the distance between cells is defined by the {{cssxref("border-spacing")}} property.

## Syntax

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;

/* Global values */
border-collapse: inherit;
border-collapse: initial;
border-collapse: revert;
border-collapse: revert-layer;
border-collapse: unset;
```

The `border-collapse` property is specified as a single keyword, which may be chosen from the list below.

### Values

- `collapse`
  - : Adjacent cells have shared borders (the collapsed-border table rendering model).
- `separate`
  - : Adjacent cells have distinct borders (the separated-border table rendering model).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### A colorful table of browser engines

#### HTML

```html
<table class="separate">
  <caption><code>border-collapse: separate</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
  </tbody>
</table>
<table class="collapse">
  <caption><code>border-collapse: collapse</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}

.separate {
  border-collapse: separate;
}

table {
  display: inline-table;
  margin: 1em;
  border: dashed 5px;
}

table th,
table td {
  border: solid 3px;
}

.fx { border-color: orange blue; }
.gk { border-color: black red; }
.ed { border-color: blue gold; }
.tr { border-color: aqua; }
.sa { border-color: silver blue; }
.wk { border-color: gold blue; }
.ch { border-color: red yellow green blue; }
.bk { border-color: navy blue teal aqua; }
.op { border-color: red; }
```

#### Result

{{ EmbedLiveSample('A_colorful_table_of_browser_engines', 400, 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}
- The `border-collapse` property alters the appearance of the {{htmlelement("table")}} HTML element.
