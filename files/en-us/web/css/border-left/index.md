---
title: border-left
slug: Web/CSS/border-left
page-type: css-shorthand-property
browser-compat: css.properties.border-left
---

{{CSSRef}}

The **`border-left`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets all the properties of an element's left [border](/en-US/docs/Web/CSS/border).

{{InteractiveExample("CSS Demo: border-left")}}

```css interactive-example-choice
border-left: solid;
```

```css interactive-example-choice
border-left: dashed red;
```

```css interactive-example-choice
border-left: 1rem solid;
```

```css interactive-example-choice
border-left: thick double #32a1ce;
```

```css interactive-example-choice
border-left: 4mm ridge rgba(211, 220, 50, 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

As with all shorthand properties, `border-left` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. Consider the following code:

```css
border-left-style: dotted;
border-left: thick green;
```

It is actually the same as this one:

```css
border-left-style: dotted;
border-left: none thick green;
```

The value of {{cssxref("border-left-style")}} given before `border-left` is ignored. Since the default value of {{cssxref("border-left-style")}} is `none`, not specifying the `border-style` part results in no border.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}

## Syntax

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* Global values */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

### Values

- `<br-width>`
  - : See {{cssxref("border-left-width")}}.
- `<br-style>`
  - : See {{cssxref("border-left-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : See {{cssxref("border-left-color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a left border

#### HTML

```html
<div>This box has a border on the left side.</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Results

{{EmbedLiveSample('Applying_a_left_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
- [Backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Learn CSS: Backgrounds and borders](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
