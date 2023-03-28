---
title: outline
slug: Web/CSS/outline
page-type: css-shorthand-property
browser-compat: css.properties.outline
---

{{CSSRef}}

The **`outline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets most of the outline properties in a single declaration.

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
outline: revert-layer;
outline: unset;
```

The `outline` property may be specified using one, two, or three of the values listed below. The order of the values does not matter. As with all shorthand properties, any omitted sub-values will be set to their [initial value](/en-US/docs/Web/CSS/initial_value).

> **Note:** The outline will be invisible for many elements if its style is not defined. This is because the style defaults to `none`. A notable exception is `input` elements, which are given default styling by browsers.

### Values

- `<'outline-color'>`
  - : Sets the color of the outline. Defaults to `invert` for browsers supporting it, `currentcolor` for the others. See {{cssxref("outline-color")}}.
- `<'outline-style'>`
  - : Sets the style of the outline. Defaults to `none` if absent. See {{cssxref("outline-style")}}.
- `<'outline-width'>`
  - : Sets the thickness of the outline. Defaults to `medium` if absent. See {{cssxref("outline-width")}}.

## Description

Outline is a line outside of the element's [border](/en-US/docs/Web/CSS/border). Unlike other areas of the box, outlines don't take up space, so they don't affect the layout of the document in any way.

There are a few properties that affect an outline's appearance. It is possible to change the style, color, and width using the `outline` property, the distance from the border using the {{cssxref("outline-offset")}} property, and corner angles using the {{cssxref("border-radius")}} property.

An outline is not required to be rectangular: While dealing with multiline text, some browsers will draw an outline for each line box separately, while others will wrap the whole text with a single outline.

## Accessibility concerns

Assigning `outline` a value of `0` or `none` will remove the browser's default focus style. If an element can be interacted with it must have a visible focus indicator. Provide obvious focus styling if the default focus style is removed.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

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

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 85)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
