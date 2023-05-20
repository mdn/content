---
title: page-break-inside
slug: Web/CSS/page-break-inside
page-type: css-property
browser-compat: css.properties.page-break-inside
---

{{CSSRef}}

> **Warning:** This property has been replaced by the {{cssxref("break-inside")}} property.

The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.

{{EmbedInteractiveExample("pages/css/page-break-inside.html")}}

## Syntax

```css
/* Keyword values */
page-break-inside: auto;
page-break-inside: avoid;

/* Global values */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: revert-layer;
page-break-inside: unset;
```

### Values

- `auto`
  - : Initial value. Automatic page breaks (neither forced nor forbidden).
- `avoid`
  - : Avoid page breaks inside the element.

## Page break aliases

The `page-break-inside` property is now a legacy property, replaced by {{cssxref("break-inside")}}.

For compatibility reasons, `page-break-inside` should be treated by browsers as an alias of `break-inside`. This ensures that sites using `page-break-inside` continue to work as designed. A subset of values should be aliased as follows:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Avoiding page breaks inside elements

#### HTML

```html
<div class="page">
  <p>This is the first paragraph.</p>
  <section class="list">
    <span>A list</span>
    <ol>
      <li>one</li>
      <!-- <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
    <!-- <li>two</li> -->
  </ul>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph, it contains more text.</p>
  <p>
    This is the fourth paragraph. It has a little bit more text than the third
    one.
  </p>
</div>
```

#### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

#### Result

{{EmbedLiveSample("Avoiding_page_breaks_inside_elements", 400, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-before")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
