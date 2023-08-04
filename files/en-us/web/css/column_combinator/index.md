---
title: Column combinator
slug: Web/CSS/Column_combinator
page-type: css-combinator
status:
  - experimental
browser-compat: css.selectors.column
---

{{CSSRef("Selectors")}}{{SeeCompatTable}}

The **column combinator** (`||`) is placed between two CSS selectors. It matches only those elements matched by the second selector that belong to the column elements matched by the first.

```css
/* Table cells that belong to the "selected" column */
col.selected||td {
  background: gray;
}
```

## Syntax

```css
column-selector||cell-selector {
  /* style properties */
}
```

## Examples

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>

    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### Result

{{EmbedLiveSample("Examples", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-col")}}
- {{CSSxRef(":nth-last-col")}}
