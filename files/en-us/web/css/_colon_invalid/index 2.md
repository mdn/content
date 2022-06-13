---
title: ':invalid'
slug: Web/CSS/:invalid
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.invalid
---
{{CSSRef}}

The **`:invalid`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any {{HTMLElement("input")}} or other {{HTMLElement("form")}} element whose contents fail to [validate](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation).

```css
/* Selects any invalid <input> */
input:invalid {
  background-color: pink;
}
```

This pseudo-class is useful for highlighting field errors for the user.

## Syntax

{{csssyntax}}

## Examples

### A form that colors elements green when they validate and red when they don't.

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input">
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required>
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Result

{{EmbedLiveSample('Examples', 600, 120)}}

## Accessibility concerns

The color red is commonly used to indicate invalid input. People who have certain types of color blindness will be unable to determine the input's state unless it is accompanied by an additional indicator that does not rely on color to convey meaning. Typically, descriptive text and/or an icon are used.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Notes

### Radio buttons

If any one of the radio buttons in a group is `required`, the `:invalid` pseudo-class is applied to all of them if none of the buttons in the group is selected. (Grouped radio buttons share the same value for their `name` attribute.)

### Gecko defaults

By default, Gecko does not apply a style to the `:invalid` pseudo-class. However, it does apply a style (a red "glow" using the {{Cssxref("box-shadow")}} property) to the {{cssxref(":user-invalid")}} pseudo-class, which applies in a subset of cases for `:invalid`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other validation-related pseudo-classes: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Related Mozilla pseudo-classes: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- Accessing the [validity state](/en-US/docs/Web/API/ValidityState) from JavaScript
