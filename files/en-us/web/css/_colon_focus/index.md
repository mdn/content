---
title: ':focus'
slug: Web/CSS/:focus
tags:
  - ':focus'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.focus
---
{{CSSRef}}

The **`:focus`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's <kbd>Tab</kbd> key.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus.html", "tabbed-shorter")}}

> **Note:** This pseudo-class applies only to the focused element itself. Use {{CSSxRef(":focus-within")}} if you want to select an element that _contains_ a focused element.

## Syntax

```
:focus
```

## Examples

### HTML

```html
<div><input class="red-input" value="I'll be red when focused."></div>
<div><input class="blue-input" value="I'll be blue when focused."></div>
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Accessibility concerns

Make sure the visual focus indicator can be seen by people with low vision.  This will also benefit anyone use a screen in a brightly lit space (like outside in the sun). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requires that the visual focus indicator be at least 3 to 1.

- Accessible Visual Focus Indicators: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Never just remove the focus outline (visible focus indicator) without replacing it with a focus outline that will pass [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

- Quick Tip: [Never remove CSS outlines](https://www.a11yproject.com/posts/never-remove-css-outlines/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
