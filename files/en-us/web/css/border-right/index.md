---
title: border-right
slug: Web/CSS/border-right
page-type: css-shorthand-property
browser-compat: css.properties.border-right
---

{{CSSRef}}

The **`border-right`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets all the properties of an element's right [border](/en-US/docs/Web/CSS/border).

{{EmbedInteractiveExample("pages/css/border-right.html")}}

As with all shorthand properties, `border-right` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. Consider the following code:

```css
border-right-style: dotted;
border-right: thick green;
```

It is actually the same as this one:

```css
border-right-style: dotted;
border-right: none thick green;
```

The value of {{cssxref("border-right-style")}} given before `border-right` is ignored. Since the default value of {{cssxref("border-right-style")}} is `none`, not specifying the `border-style` part results in no border.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}

## Syntax

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* Global values */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: revert-layer;
border-right: unset;
```

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

### Values

- `<br-width>`
  - : See {{cssxref("border-right-width")}}.
- `<br-style>`
  - : See {{cssxref("border-right-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : See {{cssxref("border-right-color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a right border

#### HTML

```html
<div>This box has a border on the right side.</div>
```

#### CSS

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Results

{{EmbedLiveSample('Applying_a_right_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
