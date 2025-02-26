---
title: :required
slug: Web/CSS/:required
page-type: css-pseudo-class
browser-compat: css.selectors.required
---

{{CSSRef}}

The **`:required`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element that has the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute set on it.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

This pseudo-class is useful for highlighting fields that must have valid data before a form can be submitted.

> [!NOTE]
> The {{cssxref(":optional")}} pseudo-class selects _optional_ form fields.

## Syntax

```css
:required {
  /* ... */
}
```

## Accessibility

Mandatory {{htmlelement("input")}}s should have the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute applied to them. This will ensure that people navigating with the aid of assistive technology such as a screen reader will be able to understand which inputs need valid content to ensure a successful submission.

If the form also contains [optional](/en-US/docs/Web/CSS/:optional) inputs, required inputs should be indicated visually using a treatment that does not rely solely on color to convey meaning. Typically, descriptive text and/or an icon are used.

- [MDN Understanding WCAG, Guideline 3.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Examples

### The required field has a red border

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other validation-related pseudo-classes: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
