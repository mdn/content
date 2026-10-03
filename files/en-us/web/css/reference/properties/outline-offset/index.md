---
title: "`outline-offset` CSS property"
short-title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
page-type: css-property
browser-compat: css.properties.outline-offset
sidebar: cssref
---

The **`outline-offset`** [CSS](/en-US/docs/Web/CSS) property sets the amount of space between an [outline](/en-US/docs/Web/CSS/Reference/Properties/outline) and the edge or border of an element.

{{InteractiveExample("CSS Demo: outline-offset")}}

```css interactive-example-choice
outline-offset: 4px;
```

```css interactive-example-choice
outline-offset: 0.6rem;
```

```css interactive-example-choice
outline-offset: 12px;
outline: 5px dashed blue;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 2px solid crimson;
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The width of the space between the element and its outline. A negative value places the outline inside the element. A value of `0` places the outline so that there is no space between it and the element.

## Description

An outline is a line that is drawn around an element, outside the border edge. The space between an element and its outline is transparent. In other words, it is the same as the parent element's background.

## Accessibility

Because the space the offset creates is transparent, the outline is drawn over whatever is behind the element rather than over the element itself. When an outline is used as a focus indicator, the 3:1 contrast ratio that [Success Criterion 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) requires must therefore be measured against that background. A negative offset draws the outline inside the border edge instead, over the element's own background, which changes the color the ratio is measured against.

A positive offset can also move the outline outside an ancestor that clips its overflow, or outside a scroll container, where part of the indicator is cut off. [Success Criterion 2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) requires that the focused component not be entirely hidden, and [Success Criterion 2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) sets a minimum area for the indicator itself. Check focus styles in a scrolling container as well as in open space.

- {{cssxref("outline-color")}}
- [Understanding Success Criterion 1.4.11: Non-text Contrast | W3C Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)
- [WCAG 2.2 Success Criterion 2.4.13: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting outline offset in pixels

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Result

{{EmbedLiveSample('Setting_outline_offset_in_pixels')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
