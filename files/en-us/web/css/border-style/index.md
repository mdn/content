---
title: border-style
slug: Web/CSS/border-style
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.border-style
---
{{CSSRef}}

The **`border-style`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the line style for all four sides of an element's border.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-bottom-style`](/en-US/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/en-US/docs/Web/CSS/border-left-style)
- [`border-right-style`](/en-US/docs/Web/CSS/border-right-style)
- [`border-top-style`](/en-US/docs/Web/CSS/border-top-style)

## Syntax

```css
/* Keyword values */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* top and bottom | left and right */
border-style: dotted solid;

/* top | left and right | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

The `border-style` property may be specified using one, two, three, or four values.

- When **one** value is specified, it applies the same style to **all four sides**.
- When **two** values are specified, the first style applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first style applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the styles apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

Each value is a keyword chosen from the list below.

### Values

- `<line-style>`

  - : Describes the style of the border. It can have the following values:

    - `none`
      - : Like the `hidden` keyword, displays no border. Unless a {{cssxref("background-image")}} is set, the computed value of the same side's {{cssxref("border-width")}} will be `0`, even if the specified value is something else. In the case of table cell and border collapsing, the `none` value has the _lowest_ priority: if any other conflicting border is set, it will be displayed.
    - `hidden`
      - : Like the `none` keyword, displays no border. Unless a {{cssxref("background-image")}} is set, the computed value of the same side's {{cssxref("border-width")}} will be `0`, even if the specified value is something else. In the case of table cell and border collapsing, the `hidden` value has the _highest_ priority: if any other conflicting border is set, it won't be displayed.
    - `dotted`
      - : Displays a series of rounded dots. The spacing of the dots is not defined by the specification and is implementation-specific. The radius of the dots is half the computed value of the same side's {{cssxref("border-width")}}.
    - `dashed`
      - : Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.
    - `solid`
      - : Displays a single, straight, solid line.
    - `double`
      - : Displays two straight lines that add up to the pixel size defined by {{cssxref("border-width")}}.
    - `groove`
      - : Displays a border with a carved appearance. It is the opposite of `ridge`.
    - `ridge`
      - : Displays a border with an extruded appearance. It is the opposite of `groove`.
    - `inset`
      - : Displays a border that makes the element appear embedded. It is the opposite of `outset`. When applied to a table cell with {{cssxref("border-collapse")}} set to `collapsed`, this value behaves like `groove`.
    - `outset`
      - : Displays a border that makes the element appear embossed. It is the opposite of `inset`. When applied to a table cell with {{cssxref("border-collapse")}} set to `collapsed`, this value behaves like `ridge`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### All property values

Here is an example of all the property values.

#### HTML

```html
<pre class="b1">none</pre>
<pre class="b2">hidden</pre>
<pre class="b3">dotted</pre>
<pre class="b4">dashed</pre>
<pre class="b5">solid</pre>
<pre class="b6">double</pre>
<pre class="b7">groove</pre>
<pre class="b8">ridge</pre>
<pre class="b9">inset</pre>
<pre class="b10">outset</pre>
```

#### CSS

```css
pre {
  height: 80px;
  width: 120px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
}

/* border-style example classes */
.b1 {
  border-style: none;
}

.b2 {
  border-style: hidden;
}

.b3 {
  border-style: dotted;
}

.b4 {
  border-style: dashed;
}

.b5 {
  border-style: solid;
}

.b6 {
  border-style: double;
}

.b7 {
  border-style: groove;
}

.b8 {
  border-style: ridge;
}

.b9 {
  border-style: inset;
}

.b10 {
  border-style: outset;
}
```

#### Result

{{EmbedLiveSample('All_property_values', "1200", 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The border-related shorthand CSS properties: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
