---
title: <line-style>
slug: Web/CSS/line-style
page-type: css-type
browser-compat: css.types.line-style
---

{{CSSRef}}

The **`<line-style>`** {{glossary("enumerated")}} value type defines the set of line-style keyword values used in longhand and shorthand border, outline, and column-rule properties. Each value describes the style of a line or lack thereof.

## Syntax

```css
<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

## Values

The `<list-style>` enumerated type is specified using one of the values listed below.

- `none`
  - : Displays no line and the computed value of the line width will be `0`, even if the specified value is something else. In the case of table cell and border collapsing, the `none` value has the _lowest_ priority: if any other conflicting border is set, it will be displayed. Similar to the `hidden` value.
- `hidden`
  - : Displays no line. The computed width of the line will be `0`, even if the specified width value is something else. In the case of table cell and border collapsing, the `hidden` value has the _highest_ priority: if any other conflicting border is set, it won't be displayed. Similar to the `none` value.
- `dotted`
  - : Displays a series of rounded dots. The radius of the dots is half the computed value of the line's width. The spacing of the dots is not defined by the specification and is implementation-specific.
- `dashed`
  - : Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.
- `solid`
  - : Displays a single, straight, solid line.
- `double`
  - : Displays two straight lines that add up to the pixel size defined by the line's width.
- `groove`
  - : Displays a border with a carved appearance. It is the opposite of `ridge`.
- `ridge`
  - : Displays a border with an extruded appearance. It is the opposite of `groove`.
- `inset`
  - : Displays a border that makes the element appear embedded. It is the opposite of `outset`. When applied to a table cell border and {{cssxref("border-collapse")}} is set to `collapsed`, this value behaves like `groove`.
- `outset`
  - : Displays a border that makes the element appear embossed. It is the opposite of `inset`. When applied to a table cell with {{cssxref("border-collapse")}} set to `collapsed`, this value behaves like `ridge`.

## Examples

This example shows all the `<list-style>` values as values of the CSS {{cssxref("border-left-style")}} property.

### HTML

```html

```

### CSS

```css

```

### Results

{{EmbedLiveSample("Examples", "500", "600")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("border")}},{{cssxref("border-block-end")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-start")}}, {{cssxref("border-block-start")}}, {{cssxref("border-block-start")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block")}}, {{cssxref("border-block-style")}}, {{cssxref("border-bottom")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-style")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline")}}, {{cssxref("border-inline-style")}}, {{cssxref("border-left")}}, {{cssxref("border-left-style")}}, {{cssxref("border-right")}}, {{cssxref("border-right-style")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-top-style")}}, {{cssxref("column-rule")}}, {{cssxref("column-rule-style")}}, {{cssxref("outline")}}, {{cssxref("outline-style")}}
- [CSS Basic User Interface](/en-US/docs/Web/CSS/CSS_Basic_User_Interface) module
- [CSS background and borders](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders) module
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_Columns) module
