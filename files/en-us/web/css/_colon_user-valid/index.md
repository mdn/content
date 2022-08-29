---
title: ':user-valid (:-moz-ui-valid)'
slug: web/css/:user-valid
tags:
  - CSS
  - CSS Selectors
  - Pseudo-class
  - Reference
  - Selector
  - Experimental
browser-compat: css.selectors.user-valid
---
{{CSSRef}}{{SeeCompatTable}}

The **`:user-valid`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any validated form element whose value validates correctly based on its [validation constraints](/en-US/docs/Learn/Forms#constraint_validation). However, unlike {{cssxref(":valid")}} it only matches once the user has interacted with it.

> **Note:** The pseudo-class behaves in the same way as the non-standard `:-moz-ui-valid` pseudo-class.

This pseudo-class is applied according to the following rules:

- If the control does not have focus, and the value is valid, apply this pseudo-class.
- If the control has focus, and the value was valid (including empty) when it gained focus, apply this pseudo-class.
- If the control has focus, and the value was invalid when it gained focus, re-validate on every keystroke.
- If the element is required, the preceding rules apply only if the user has changed the value or attempted to submit the form.

The result is that if the control was valid when the user started interacting with it, the validity styling is changed only when the user shifts focus to another control. However, if the user is trying to correct a previously-flagged value, the control shows immediately when the value becomes valid. Required items are flagged as invalid only if the user changes them or attempts to submit an unchanged invalid value.

## Syntax

```
:user-valid
```

## Examples

### Setting a color and symbol on :user-valid

In the following example, the green border and ✅ only display once the user has interacted with the field.
Try changing the email address to another valid email to see it in action.

```html
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" value="test@example.com" required>
  <span></span>
</form>
```

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: '✓';
  color: green;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-valid", 140, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-invalid")}}
