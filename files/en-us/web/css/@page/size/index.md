---
title: size
slug: Web/CSS/@page/size
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.page.size
---

{{CSSRef}}

The **`size`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) descriptor, used with the {{cssxref("@page")}} at-rule, defines the size and orientation of the box which is used to represent a page. Most of the time, this size corresponds to the target size of the printed page if applicable.

Size may either be defined with a "scalable" keyword (in this case the page will fill the available dimensions) or with absolute dimensions.

## Syntax

```css
/* Keyword values for scalable size */
size: auto;
size: portrait;
size: landscape;

/* <length> values */
/* 1 value: height = width */
size: 6in;

/* 2 values: width then height */
size: 4in 6in;

/* Keyword values for absolute size */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Mixing size and orientation */
size: A4 portrait;
```

### Values

- `auto`
  - : The user agent decides the size of the page. In most cases, the dimensions and orientation of the target sheet are used.
- `landscape`
  - : The content of the page is displayed in landscape mode (i.e. the longest side of the box is horizontal).
- `portrait`
  - : The content of the page is displayed in portrait mode (i.e. the longest side of the box is vertical). This is the default orientation.
- `<length>`
  - : Any length value (see {{cssxref("&lt;length&gt;")}}). The first value corresponds to the width of the page box and the second one corresponds to its height. If only one value is provided, it is used for both width and height.
- `<page-size>`

  - : A keyword which may be any of the following values:

    - A5
      - : This matches the standard, ISO dimensions: 148mm x 210mm.
    - A4
      - : This matches the standard, ISO dimensions: 210mm x 297mm. (most frequently used dimensions for personal printing.)
    - A3
      - : This matches the standard, ISO dimensions: 297mm x 420mm.
    - B5
      - : This matches the standard, ISO dimensions: 176mm x 250mm.
    - B4
      - : This matches the standard, ISO dimensions: 250mm x 353mm.
    - JIS-B5
      - : This correspond to the JIS standard dimensions: 182mm x 257mm.
    - JIS-B4
      - : This correspond to the JIS standard dimensions: 257mm x 364mm.
    - letter
      - : This keyword is an equivalent to the dimensions of letter paper in North America i.e. 8.5in x 11in.
    - legal
      - : This keyword is an equivalent to the dimensions of legal papers in North America i.e. 8.5in x 14in.
    - ledger
      - : This keyword is an equivalent to the dimensions of ledger pages in North America i.e. 11in x 17in.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying size and orientation

```css
@page {
  size: A4 landscape;
}
```

### Specifying a custom size

```css
@page {
  size: 4in 6in;
}
```

### Nesting inside a @media rule

```css
@media print {
  @page {
    size: 50mm 150mm;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
