---
title: page-break-after
slug: Web/CSS/page-break-after
page-type: css-property
status:
  - deprecated
browser-compat: css.properties.page-break-after
---

{{CSSRef}}{{deprecated_header}}

> [!WARNING]
> This property has been replaced by the {{cssxref("break-after")}} property.

The **`page-break-after`** [CSS](/en-US/docs/Web/CSS) property adjusts page breaks _after_ the current element.

{{EmbedInteractiveExample("pages/css/page-break-after.html")}}

## Syntax

```css
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

This property applies to block elements that generate a box. It won't apply on an empty {{HTMLElement("div")}} that won't generate a box.

### Values

- `auto`
  - : Initial value. Automatic page breaks (neither forced nor forbidden).
- `always`
  - : Always force page breaks after the element.
- `avoid`
  - : Avoid page breaks after the element.
- `left`
  - : Force page breaks after the element so that the next page is formatted as a left page. It's the page placed on the left side of the spine of the book or the back side of the page in duplex printing.
- `right`
  - : Force page breaks after the element so that the next page is formatted as a right page. It's the page placed on the right side of the spine of the book or the front side of the page in duplex printing.
- `recto`
  - : If pages progress left-to-right, then this acts like `right`. If pages progress right-to-left, then this acts like `left`.
- `verso`
  - : If pages progress left-to-right, then this acts like `left`. If pages progress right-to-left, then this acts like `right`.

## Page break aliases

The `page-break-after` property is now a legacy property, replaced by {{cssxref("break-after")}}.

For compatibility reasons, `page-break-after` should be treated by browsers as an alias of `break-after`. This ensures that sites using `page-break-after` continue to work as designed. A subset of values should be aliased as follows:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a page break after footnotes

```css
/* move to a new page after footnotes */
div.footnotes {
  page-break-after: always;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
