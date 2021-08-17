---
title: outline
slug: Web/CSS/outline
tags:
  - CSS
  - CSS Outline
  - CSS Property
  - Layout
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.outline
---
{{CSSRef}}

The **`outline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) set all the outline properties in a single declaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}

## Syntax

```css
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* Global values */
outline: inherit;
outline: initial;
outline: revert;
outline: unset;
```

The `outline` property may be specified using one, two, or three of the values listed below. The order of the values does not matter.

> **Note:** The outline will be invisible for many elements if its style is not defined. This is because the style defaults to `none`. A notable exception is `input` elements, which are given default styling by browsers.

### Values

- `<'outline-color'>`
  - : Sets the color of the outline. Defaults to `currentcolor` if absent. See {{cssxref("outline-color")}}.
- `<'outline-style'>`
  - : Sets the style of the outline. Defaults to `none` if absent. See {{cssxref("outline-style")}}.
- `<'outline-width'>`
  - : Sets the thickness of the outline. Defaults to `medium` if absent. See {{cssxref("outline-width")}}.

## Description

[Borders](/en-US/docs/Web/CSS/border) and outlines are very similar. However, outlines differ from borders in the following ways:

- Outlines never take up space, as they are drawn outside of an element's content.
- According to the spec, outlines don't have to be rectangular, although they usually are.

As with all shorthand properties, any omitted sub-values will be set to their [initial value](/en-US/docs/Web/CSS/initial_value).

## Accessibility concerns

Assigning `outline` a value of `0` or `none` will remove the browser's default focus style. If an element can be interacted with it must have a visible focus indicator. Provide obvious focus styling if the default focus style is removed.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using outline to set a focus style

#### HTML

```html
<a href="#">This link has a special focus style.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### Result

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
