---
title: "`<line-width>` CSS type"
short-title: <line-width>
slug: Web/CSS/Reference/Values/line-width
page-type: css-type
browser-compat: css.types.line-width
spec-urls: https://drafts.csswg.org/css-backgrounds/#typedef-line-width
sidebar: cssref
---

The **`<line-width>`** {{glossary("enumerated")}} value type represents the length or the keyword values that define the width of a line, or the lack of a line. The `<line-width>` keyword values are used in the following longhand and shorthand properties:

- {{cssxref("border")}}, {{cssxref("border-width")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-width")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-width")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-width")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-width")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-width")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-width")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}}, {{cssxref("row-rule-width")}}
- {{cssxref("rule")}}, {{cssxref("rule-width")}}
- {{cssxref("outline")}}, {{cssxref("outline-width")}}

## Syntax

### Values

The `<line-width>` type is specified using either `<length>` or a keyword:

- `<length>`
  - : A non-negative {{cssxref("&lt;length&gt;")}}
- `hairline`
  - : Represents a "just visible" line that is less than or equal to `1px`. At the default page zoom it is an integer number of device pixels. While it can be as large as 1px, depending on the device, it will generally be `0.3px` to `0.5px`.
- `thin`
  - : Same as `1px`.
- `medium`
  - : Same as `3px`.
- `thick`
  - : Same as `5px`.

## Formal syntax

{{CSSSyntaxRaw(`<line-width> =  <length [0,∞]> | hairline | thin | medium | thick`)}}

## Examples

### Defining a line width

This example demonstrates all the `<line-width>` keyword values, along with a `<length>` value.

#### HTML

We include five boxes within a {{htmlelement("section")}} element.

```html
<section>
  <div data-width="hairline">hairline</div>
  <div data-width="thin">thin</div>
  <div data-width="medium">medium</div>
  <div data-width="thick">thick</div>
  <div data-width="10px">10px</div>
</section>
```

#### CSS

We style all the elements to be identical, then set the {{cssxref("border-width")}} based on the element's `data-width` attribute.

```css
section {
  display: flex;
  gap: 10px;
}
div {
  flex: 0 0 15%;
  border-style: solid;
  border-color: purple;
  text-align: center;
}
[data-width="hairline"] {
  border-width: hairline;
}

[data-width="thin"] {
  border-width: thin;
}

[data-width="medium"] {
  border-width: medium;
}

[data-width="thick"] {
  border-width: thick;
}

[data-width="10px"] {
  border-width: 10px;
}
```

```css hidden
@supports not (border-width: hairline) {
  body::before {
    content: "Your browser does not support the 'hairline' value.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Results

{{ EmbedLiveSample('Defining a line width') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("line-style")}} data type
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
