---
title: column-fill
slug: Web/CSS/column-fill
page-type: css-property
browser-compat: css.properties.column-fill
---

{{CSSRef}}

The **`column-fill`** [CSS](/en-US/docs/Web/CSS) property controls how an element's contents are balanced when broken into columns.

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## Syntax

```css
/* Keyword values */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* Global values */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

The `column-fill` property is specified as one of the keyword values listed below. The initial value is `balance` so the content will be balanced across the columns.

### Values

- `auto`
  - : Columns are filled sequentially. Content takes up only the room it needs, possibly resulting in some columns remaining empty.
- `balance`
  - : Content is equally divided between columns. In fragmented contexts, such as [paged media](/en-US/docs/Web/CSS/CSS_paged_media), only the last fragment is balanced. Therefore in paged media, only the last page would be balanced.
- `balance-all` {{Experimental_Inline}}
  - : Content is equally divided between columns. In fragmented contexts, such as [paged media](/en-US/docs/Web/CSS/CSS_paged_media), all fragments are balanced.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Balancing column content

#### HTML

```html
<p class="fill-auto">
  This paragraph fills columns one at a time. Since all of the text can fit in
  the first column, the others are empty.
</p>

<p class="fill-balance">
  This paragraph attempts to balance the amount of content in each column.
</p>
```

#### CSS

```css
p {
  height: 7em;
  background: #ff9;
  columns: 3;
  column-rule: 1px solid;
}

p.fill-auto {
  column-fill: auto;
}

p.fill-balance {
  column-fill: balance;
}
```

#### Result

{{EmbedLiveSample('Balancing_column_content', 'auto', 320)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Warning:** There are some interoperability issues and bugs with `column-fill` across browsers, due to unresolved issues in the specification.
>
> In particular, when using `column-fill: auto` to fill columns sequentially, Chrome will only consult this property if the multicol container has a size in the block dimension (e.g., height in a horizontal writing mode). Firefox will always consult this property, therefore filling the first column with all of the content in cases where there is no size.

## See also

- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
