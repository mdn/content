---
title: "`:default` CSS pseudo-class"
short-title: :default
slug: Web/CSS/Reference/Selectors/:default
page-type: css-pseudo-class
browser-compat: css.selectors.default
sidebar: cssref
---

The **`:default`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selects form elements that are the default in a group of related elements.

{{InteractiveExample("CSS Demo: :default", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<label for="name">Name (required):</label>
<input id="name" name="name" type="text" required />

<label for="birth">Date of birth:</label>
<input id="birth" name="birth" type="date" />

<label for="origin">How did you find out about us? (required)</label>
<select id="origin" name="origin" required>
  <option value="">Choose an option</option>
  <option value="google">Google</option>
  <option value="facebook">Facebook</option>
  <option value="advertisement">Advertisement</option>
</select>

<fieldset>
  <legend>Preferred contact method:</legend>
  <label>
    <input name="contact" type="radio" value="email" checked /> Email
  </label>
  <label><input name="contact" type="radio" value="phone" /> Phone</label>
</fieldset>

<label>
  <input name="newsletter" type="checkbox" checked /> I want to subscribe to a
  personalized newsletter.
</label>
<label>
  <input name="privacy" type="checkbox" required /> I have read and I agree to
  the Privacy Policy (required).
</label>
```

What this selector matches is defined in [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) — it may match the {{htmlelement("button")}}, [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/en-US/docs/Web/HTML/Reference/Elements/input/radio), and {{htmlelement("option")}} elements:

- A default option element is the first one with the `selected` attribute, or the first enabled option in DOM order. `multiple` {{htmlelement("select")}}s can have more than one `selected` option, so all will match `:default`.
- `<input type="checkbox">` and `<input type="radio">` match if they have the `checked` attribute.
- {{htmlelement("button")}} matches if it is a {{htmlelement("form")}}'s [default submission button](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission): the first `<button>` in DOM order that belongs to the form. This also applies to {{htmlelement("input")}} types that submit forms, like `image` or `submit`.

## Syntax

```css
:default {
  /* ... */
}
```

## Examples

### HTML

```html
<fieldset>
  <legend>Favorite season</legend>

  <input type="radio" name="season" id="spring" value="spring" />
  <label for="spring">Spring</label>

  <input type="radio" name="season" id="summer" value="summer" checked />
  <label for="summer">Summer</label>

  <input type="radio" name="season" id="fall" value="fall" />
  <label for="fall">Fall</label>

  <input type="radio" name="season" id="winter" value="winter" />
  <label for="winter">Winter</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web forms — Working with user data](/en-US/docs/Learn_web_development/Extensions/Forms)
- [Styling web forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Related HTML elements: {{htmlelement("button")}}, [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/en-US/docs/Web/HTML/Reference/Elements/input/radio), and {{htmlelement("option")}}
