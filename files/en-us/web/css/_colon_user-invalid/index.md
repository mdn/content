---
title: ':user-invalid (:-moz-ui-invalid)'
slug: Web/CSS/:user-invalid
tags:
  - CSS
  - CSS Selectors
  - Pseudo-class
  - Reference
  - Selector
  - Experimental
browser-compat: css.selectors.user-invalid
---
{{CSSRef}}{{SeeCompatTable}}

The **`:user-invalid`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any validated form element whose value isn't valid based on their [validation constraints](/en-US/docs/Learn/Forms#constraint_validation), after the user has interacted with it.

The `:user-invalid` pseudo-class must match an {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, or blank-but {{CSSxRef(":required")}} element between the time the user has attempted to submit the form and before the user has interacted again with the form element.

> **Note:** The pseudo-class behaves in the same way as the non-standard `:-moz-ui-invalid` pseudo-class.

## Syntax

```
:user-invalid
```

## Examples

### Setting a color and symbol on :user-invalid

In the following example, the red border and ❌ only display once the user has interacted with the field.
Try typing something other than an email address to see it in action.

```html
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" required>
  <span></span>
</form>
```

```css
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: '✖';
  color: red;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-invalid", 140, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-valid")}}
