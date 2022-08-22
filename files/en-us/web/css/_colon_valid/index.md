---
title: ':valid'
slug: Web/CSS/:valid
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.valid
---
{{CSSRef}}

The **`:valid`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any {{HTMLElement("input")}} or other {{HTMLElement("form")}} element whose contents [validate](/en-US/docs/Web/Guide/HTML/Constraint_validation) successfully. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-valid.html", "tabbed-shorter")}}

This pseudo-class is useful for highlighting correct fields for the user.

## Syntax

```
:valid
```

## Examples

### Indicating valid and invalid form fields

In this example, we use structures like this, which include extra `<span>`s to generate content on; we'll use these to provide indicators of valid/invalid data:

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required>
  <span></span>
</div>
```

To provide these indicators, we use the following CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: '✖';
  color: red;
}

input:valid + span::before {
  content: '✓';
  color: green;
}
```

We set the `<span>`s to `position: relative` so that we can position the generated content relative to them. We then absolutely position different generated content depending on whether the form's data is valid or invalid — a green check or a red cross, respectively. To add a bit of extra urgency to the invalid data, we've also given the inputs a thick red border when invalid.

> **Note:** We've used `::before` to add these labels, as we were already using `::after` for the "required" labels.

You can try it below:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Notice how the required text inputs are invalid when empty, but valid when they have something filled in. The email input on the other hand is valid when empty, as it is not required, but invalid when it contains something that is not a proper email address.

## Accessibility concerns

The color green is commonly used to indicate valid input. People who have certain types of color blindness will be unable to determine the input's state unless it is accompanied by an additional indicator that does not rely on color to convey meaning. Typically, descriptive text and/or an icon are used.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other validation-related pseudo-classes: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- Accessing the [validity state](/en-US/docs/Web/API/ValidityState) from JavaScript
