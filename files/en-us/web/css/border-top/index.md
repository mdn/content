---
title: border-top
slug: Web/CSS/border-top
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.border-top
---
{{CSSRef}}

The **`border-top`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets all the properties of an element's top [border](/en-US/docs/Web/CSS/border).

{{EmbedInteractiveExample("pages/css/border-top.html")}}

As with all shorthand properties, `border-top` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. Consider the following code:

```css
border-top-style: dotted;
border-top: thick green;
```

It is actually the same as this one:

```css
border-top-style: dotted;
border-top: none thick green;
```

The value of {{cssxref("border-top-style")}} given before `border-top` is ignored. Since the default value of {{cssxref("border-top-style")}} is `none`, not specifying the `border-style` part results in no border.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-top-color`](/en-US/docs/Web/CSS/border-top-color)
- [`border-top-style`](/en-US/docs/Web/CSS/border-top-style)
- [`border-top-width`](/en-US/docs/Web/CSS/border-top-width)

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Global values */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

### Values

- `<br-width>`
  - : See {{cssxref("border-top-width")}}.
- `<br-style>`
  - : See {{cssxref("border-top-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : See {{cssxref("border-top-color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a top border

#### HTML

```html
<div>
  This box has a border on the top side.
</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Results

{{EmbedLiveSample('Applying_a_top_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`border`](/en-US/docs/Web/CSS/border)
- [`border-block`](/en-US/docs/Web/CSS/border-block)
- [`outline`](/en-US/docs/Web/CSS/outline)
