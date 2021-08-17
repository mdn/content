---
title: ':focus-within'
slug: Web/CSS/:focus-within
tags:
  - ':focus'
  - ':focus-within'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.focus-within
---
{{CSSRef}}

The **`:focus-within`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches an element if the element or any of its descendants are focused. In other words, it represents an element that is itself matched by the {{CSSxRef(":focus")}} pseudo-class or has a descendant that is matched by `:focus`. (This includes descendants in [shadow trees](/en-US/docs/Web/Web_Components/Using_shadow_DOM).)

```css
/* Selects a <div> when one of its descendants is focused */
div:focus-within {
  background: cyan;
}
```

This selector is useful, to take a common example, for highlighting an entire {{HTMLElement("form")}} container when the user focuses on one of its {{HTMLElement("input")}} fields.

## Syntax

{{CSSSyntax}}

## Examples

In this example, the form will receive special coloring styles when either text input receives focus.

### HTML

```html
<p>Try typing into this form.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text">
  <br>
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text">
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### Result

{{EmbedLiveSample("Examples", 500, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- [Grab your user's attention with the focus-within selector](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
