---
title: ':default'
slug: Web/CSS/:default
tags:
  - ':default'
  - CSS
  - Forms
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - default
browser-compat: css.selectors.default
---
{{CSSRef}}

The **`:default`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects form elements that are the default in a group of related elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-default.html", "tabbed-shorter")}}

What this selector matches is defined in [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) — it may match the {{htmlelement("button")}}, [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio), and {{htmlelement("option")}} elements:

- A default option element is the first one with the `selected` attribute, or the first enabled option in DOM order. `multiple` {{htmlelement("select")}}s can have more than one `selected` option, so all will match `:default`.
- `<input type="checkbox">` and `<input type="radio">` match if they have the `checked` attribute.
- {{htmlelement("button")}} matches if it is a {{htmlelement("form")}}'s [default submission button](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission): the first `<button>` in DOM order that belongs to the form. This also applies to {{htmlelement("input")}} types that submit forms, like `image` or `submit`.

## Syntax

```
:default
```

## Examples

### HTML

```html
<fieldset>
  <legend>Favorite season</legend>

  <input type="radio" name="season" id="spring">
  <label for="spring">Spring</label>

  <input type="radio" name="season" id="summer" checked>
  <label for="summer">Summer</label>

  <input type="radio" name="season" id="fall">
  <label for="fall">Fall</label>

  <input type="radio" name="season" id="winter">
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

- [Web forms — Working with user data](/en-US/docs/Learn/Forms)
- [Styling web forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- Related HTML elements: {{htmlelement("button")}}, [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio), and {{htmlelement("option")}}
