---
title: :invalid
slug: Web/CSS/:invalid
page-type: css-pseudo-class
browser-compat: css.selectors.invalid
---

{{CSSRef}}

The **`:invalid`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} or other {{HTMLElement("form")}} element whose contents fail to [validate](/en-US/docs/Web/HTML/Constraint_validation).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

This pseudo-class is useful for highlighting field errors for the user.

## Syntax

```css
:invalid {
  /* ... */
}
```

## Accessibility

The color red is commonly used to indicate invalid input. People who have certain types of color blindness will be unable to determine the input's state unless it is accompanied by an additional indicator that does not rely on color to convey meaning. Typically, descriptive text and/or an icon are used.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Examples

### Coloring elements to show validation

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required />
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

{{EmbedLiveSample('Coloring elements to show validation', 600, 200)}}

### Showing sections in stages

In this example we use `:invalid` along with `~`, the [subsequent-sibling combinator](/en-US/docs/Web/CSS/Subsequent-sibling_combinator), to make a form appear in stages, so the form initially shows the first item to complete, and when the user completes each item the form displays the next one. When the whole form is complete the user can submit it.

#### HTML

```html
<form>
  <fieldset>
    <label for="form-name">Name</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <label for="form-email">Email Address</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <label for="form-message">Message</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">Submit</button>
</form>
```

#### CSS

```css
/* Hide the fieldset after an invalid fieldset */
fieldset:invalid ~ fieldset {
  display: none;
}

/* Dim and disable the button while the form is invalid */
form:invalid button {
  opacity: 0.3;
  pointer-events: none;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  font-family: monospace;
  padding: 0.25em 0.5em;
}

button {
  width: 100%;
  border: thin solid darkgrey;
  font-size: 1.25em;
  background-color: darkgrey;
  color: white;
}
```

#### Result

{{EmbedLiveSample('Showing sections in stages', 600, 300)}}

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
- [Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Accessing the [validity state](/en-US/docs/Web/API/ValidityState) from JavaScript
