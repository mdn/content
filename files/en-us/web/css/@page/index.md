---
title: '@page'
slug: Web/CSS/@page
tags:
  - '@page'
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
browser-compat: css.at-rules.page
---
{{CSSRef}}

The **`@page`** CSS at-rule is used to modify some CSS properties when printing a document.

## Syntax

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

### Descriptors

- [`page-orientation`](/en-US/docs/Web/CSS/@page/page-orientation)
  - : Specifies the orientation of the document on the page, allowing it to be laid out and formatted as normal or be rotated to one either left or right side.

- [`size`](/en-US/docs/Web/CSS/@page/size)
  - : Specifies the target size and orientation of the page box's containing block. In the general case, where one page box is rendered onto one page sheet, it also indicates the size of the destination page sheet.

## Description

You can't change all CSS properties with `@page`. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.

The `@page` at-rule can be accessed via the CSS object model interface {{domxref("CSSPageRule")}}.

> **Note:** The W3C is discussing how to handle viewport-related {{cssxref("&lt;length&gt;")}} units, `vh`, `vw`, `vmin`, and `vmax`. Meanwhile do not use them within a `@page` at-rule.

## Formal syntax

```
@page <page-selector-list> {
  <page-body>
}
```

## Examples

### @page pseudo-class examples

Please refer to the various [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) of `@page` for examples.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- See the [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) ticket in Bugzilla for tracking progress on the subject (page-based counters, etc.)
