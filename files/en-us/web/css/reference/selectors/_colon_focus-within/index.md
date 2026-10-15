---
title: "`:focus-within` CSS pseudo-class"
short-title: :focus-within
slug: Web/CSS/Reference/Selectors/:focus-within
page-type: css-pseudo-class
browser-compat: css.selectors.focus-within
sidebar: cssref
---

The **`:focus-within`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matches an element if the element or any of its descendants are focused. In other words, it represents an element that is itself matched by the {{CSSxRef(":focus")}} pseudo-class or has a descendant that is matched by `:focus`. (This includes descendants in [shadow trees](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).)

This selector is useful, to take a common example, for highlighting an entire {{HTMLElement("form")}} container when the user focuses on one of its {{HTMLElement("input")}} fields.

{{InteractiveExample("CSS Demo: :focus-within", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

label:focus-within {
  font-weight: bold;
}
```

```html interactive-example
<p>Which flavor would you like to order?</p>
<label>Full Name: <input name="firstName" type="text" /></label>
<label
  >Flavor:
  <select name="flavor">
    <option>Cherry</option>
    <option>Green Tea</option>
    <option>Moose Tracks</option>
    <option>Mint Chip</option>
  </select>
</label>
```

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Examples

In this example, the container will receive special coloring styles when either text input receives focus.

### HTML

```html
<ul class="group">
  <li>
    <label for="given-name">Given Name:</label>
    <input id="given-name" type="text" />
  </li>
  <li>
    <label for="family-name">Family Name:</label>
    <input id="family-name" type="text" />
  </li>
</ul>
```

### CSS

```css
.group {
  list-style: none;
  border: 1px solid;
  color: gray;
  padding: 4px;
}

.group:focus-within {
  background: #ffff88;
  color: black;
}

input {
  margin: 4px;
}
```

### Result

{{EmbedLiveSample("Examples", 500, 150)}}

Try typing in the text fields.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Grab your user's attention with the focus-within selector](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
