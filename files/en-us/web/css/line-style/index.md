---
title: <line-style>
slug: Web/CSS/line-style
page-type: css-type
browser-compat: css.types.line-style
spec-urls: https://drafts.csswg.org/css-backgrounds/#typedef-line-style
sidebar: cssref
---

The **`<line-style>`** {{glossary("enumerated")}} value type represents keyword values that define the style of a line, or the lack of a line. The `<line-style>` keyword values are used in the following longhand and shorthand [border](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) and [column](/en-US/docs/Web/CSS/CSS_multicol_layout) properties:

- {{cssxref("border")}}, {{cssxref("border-style")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-style")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-style")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-style")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-style")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-style")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-style")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-style")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-style")}}

## Syntax

### Values

The `<line-style>` enumerated type is specified using one of the values listed below:

- `none`
  - : Displays no line. The computed value of the line width is `0` even if a width value is specified. In the case of table cell and border collapsing, the `none` value has the _lowest_ priority. If any other conflicting border is set, it will be displayed. The `none` value is similar to `hidden`.
- `hidden`
  - : Displays no line. The computed width of the line is `0` even if a width value is specified. In the case of table cell and border collapsing, the `hidden` value has the _highest_ priority. If any other conflicting border is set, it won't be displayed. The `hidden` value is similar to `none`, but `hidden` is not a valid value for outline styles.
- `dotted`
  - : Displays a series of round dots. The radius of the dots is half the computed value of the line's width. The spacing of the dots is not defined by the specification and is implementation-specific.
- `dashed`
  - : Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.
- `solid`
  - : Displays a single, straight solid line.
- `double`
  - : Displays two straight lines with some space between them. The length of the lines adds up to the pixel size defined by the line's width.
- `groove`
  - : Displays a border with a carved appearance. This value is the opposite of `ridge`.
- `ridge`
  - : Displays a border with an extruded appearance. This value is the opposite of `groove`.
- `inset`
  - : Displays a border that makes the element appear embedded. This value is the opposite of `outset`. When applied to a table cell border and {{cssxref("border-collapse")}} is set to `collapsed`, this value behaves like `groove`.
- `outset`
  - : Displays a border that makes the element appear embossed. This value is the opposite of `inset`. When applied to a table cell with {{cssxref("border-collapse")}} set to `collapsed`, this value behaves like `ridge`.

> [!NOTE]
> When `<outline-style>` is used as the value type for {{cssxref("outline")}} and {{cssxref("outline-style")}} properties, it is similar to `<line-style>`, but does not support `hidden` and includes the `auto` value. When `auto` is set, the user-agent defined `<line-style>` value is used.

## Formal syntax

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Examples

The first example demonstrates all the `<line-style>` keyword values. The second example demonstrates how some line style colors may display in unexpected ways.

### Defining line styles

This example shows all the `<line-style>` values as values for the CSS {{cssxref("border-style")}} and {{cssxref("column-rule-style")}} properties.

#### HTML

This example uses multiple {{HTMLElement( "div" )}} elements, each with a class representing the `<line-style>` value that is being demonstrated.

```html
<div class="{line-style}">
  <p>{line-style}</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

```html hidden
<div class="none">
  <p>none</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="hidden">
  <p>hidden</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dotted">
  <p>dotted</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dashed">
  <p>dashed</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="solid">
  <p>solid</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="double">
  <p>double</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="groove">
  <p>groove</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="ridge">
  <p>ridge</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="inset">
  <p>inset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="outset">
  <p>outset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

#### CSS

In the CSS for this example, the border and the column-rule for all the `<p>` elements is defined to have a width of `7px` and the style value of `double`. For each paragraph, the `double` value is then overridden by specifying a different `<line-style>` value for the `border-style` and `column-rule-style` properties.

```css hidden
div {
  display: flex;
  gap: 1em;
  list-style: none;
  align-items: center;
}
div:first-of-type {
  display: none;
}

p:first-of-type {
  text-align: center;
  line-height: 5em;
}
p {
  width: 10em;
  height: 5em;
  background-color: palegoldenrod;
}
```

```css
p {
  padding: 5px;
  border: double 7px #bada55;
}
p + p {
  columns: 3;
  column-gap: 20px;
  column-rule: double 7px;
  border-color: #000000;
}
.none p {
  border-style: none;
  column-rule-style: none;
}
.hidden p {
  border-style: hidden;
  column-rule-style: hidden;
}
.dotted p {
  border-style: dotted;
  column-rule-style: dotted;
}
.dashed p {
  border-style: dashed;
  column-rule-style: dashed;
}
.solid p {
  border-style: solid;
  column-rule-style: solid;
}
.double p {
  border-style: double;
  column-rule-style: double;
}
.groove p {
  border-style: groove;
  column-rule-style: groove;
}
.ridge p {
  border-style: ridge;
  column-rule-style: ridge;
}
.inset p {
  border-style: inset;
  column-rule-style: inset;
}
.outset p {
  border-style: outset;
  column-rule-style: outset;
}
```

#### Result

{{EmbedLiveSample("Defining_line_styles", "500", "800")}}

Notice that the black border is not always black.

### Defining line styles and colors

This example demonstrates line-style and color choice. With some `<line-style>` keyword values, the color of the line may not be what you expect. To create the required "3D" effect of `groove`, `ridge`, `inset`, and `outset` styles when displaying these values in black or white, user agents use different color calculations than any other color-line combinations.

#### CSS

The four sides of each `<div>` have a different `<line-style>` value, and each list item has a different {{cssxref("color_value", "&lt;color>")}} value. We use [generated content](/en-US/docs/Web/CSS/content) to display the CSS declared inline.

```css hidden live-sample___line_style_colors
body {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  text-transform: uppercase;
  font-family: monospace;
}
```

```css live-sample___line_style_colors
div {
  border-width: 10px;
  border-style: inset groove ridge outset;
  padding: 5px;
}
```

#### JavaScript

The JavaScript dynamically creates {{HTMLElement( "div" )}} elements, each with a different `border-color` set.

```js live-sample___line_style_colors
// prettier-ignore
const colors = [
  "#000000", "#000001", "#ffffff",
  "#ff00ff", "#ffff00", "#00ffff",
  "#cc33cc", "#cccc33", "#33cccc",
  "#ff0000", "#00ff00", "#0000ff",
  "#cc3333", "#33cc33", "#3333cc",
  "#993333", "#339933", "#333399",
];

for (const c of colors) {
  const div = document.createElement("div");
  div.style.borderColor = c;
  div.textContent = c;
  document.body.appendChild(div);
}
```

#### Result

{{EmbedLiveSample("line_style_colors", "500", "200")}}

Notice that the almost-black color of `#000001` may be different from the actual black, and the contrast between the dark and light edges is more noticeable when using lighter colors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface) module
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module
