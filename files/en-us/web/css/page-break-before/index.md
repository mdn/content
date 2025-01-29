---
title: page-break-before
slug: Web/CSS/page-break-before
page-type: css-property
status:
  - deprecated
browser-compat: css.properties.page-break-before
---

{{CSSRef}}{{deprecated_header}}

> [!WARNING]
> This property has been replaced by the {{cssxref("break-before")}} property.

The **`page-break-before`** [CSS](/en-US/docs/Web/CSS) property adjusts page breaks _before_ the current element.

This property applies to block elements that generate a box. It won't apply on an empty {{ HTMLElement("div") }} that won't generate a box.

{{EmbedInteractiveExample("pages/css/page-break-before.html")}}

## Syntax

```css
/* Keyword values */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

### Values

- `auto`
  - : Initial value. Automatic page breaks (neither forced nor forbidden).
- `always`
  - : Always force page breaks before the element.
- `avoid`
  - : Avoid page breaks before the element.
- `left`
  - : Force page breaks before the element so that the next page is formatted as a left page. It's the page placed on the left side of the spine of the book or the back side of the page in duplex printing.
- `right`
  - : Force page breaks before the element so that the next page is formatted as a right page. It's the page placed on the right side of the spine of the book or the front side of the page in duplex printing.
- `recto`
  - : If pages progress left-to-right, then this acts like `right`. If pages progress right-to-left, then this acts like `left`.
- `verso`
  - : If pages progress left-to-right, then this acts like `left`. If pages progress right-to-left, then this acts like `right`.

## Page break aliases

The `page-break-before` property is now a legacy property, replaced by {{cssxref("break-before")}}.

For compatibility reasons, `page-break-before` should be treated by browsers as an alias of `break-before`. This ensures that sites using `page-break-before` continue to work as designed. A subset of values should be aliased as follows:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Avoid a page break before an element

```css
/* Avoid page break before div elements of class note */
div.note {
  page-break-before: avoid;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
