---
title: ':enabled'
slug: Web/CSS/:enabled
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.enabled
---
{{CSSRef}}

The **`:enabled`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any enabled element. An element is enabled if it can be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has a disabled state, in which it can't be activated or accept focus.

```css
/* Selects any enabled <input> */
input:enabled {
  color: blue;
}
```

## Syntax

```
:enabled
```

## Examples

The following example makes the color of text and button {{htmlElement("input")}}s green when enabled, and gray when disabled. This helps the user understand which elements can be interacted with.

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem"><br>

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled"><br>

  <input type="button" value="Submit">
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### Result

{{EmbedLiveSample("Examples", 550, 95)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":disabled")}}
