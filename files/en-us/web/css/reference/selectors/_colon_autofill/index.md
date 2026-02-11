---
title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
page-type: css-pseudo-class
browser-compat: css.selectors.autofill
sidebar: cssref
---

The **`:autofill`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matches when an {{HTMLElement("input")}} element has its value autofilled by the browser. The class stops matching if the user edits the field.

{{InteractiveExample("CSS Demo: :autofill", "tabbed-shorter")}}

```css interactive-example
input {
  border: 3px solid black;
}
input:autofill {
  outline: 5px solid magenta;
  border: 3px dashed yellow;
}
```

```html interactive-example
<form>
  <p>Click on the text box and choose any option suggested by your browser.</p>
  <p>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Email Address</label>
    <input id="email" name="email" type="email" autocomplete="email" />
  </p>
  <p>
    <label for="country">Country</label>
    <input
      id="country"
      name="country"
      type="text"
      autocomplete="country-name" />
  </p>
</form>
```

## Description

The `:autofill` pseudo-class selects {{htmlelement("input")}} elements containing un-edited content that was auto-filled by the user-agent. Autocompletion may occur when browser settings are set to enable autocompletion or the [`autocomplete` attribute](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete) is set on the element itself.

When the user uses the browser's autocompletion feature to autofill a form control, all the form controls that can be autofilled based on the selection get populated. These will all match the `:autofill` UI state. If the user edits a control, that control will no longer match `:autofill`, even if the value is the same as the autofilled value.

The specification includes the vendor-prefixed `:-webkit-autofill` pseudo-class as an alias. This also matches input elements autofilled by the user agent, and no longer matches if the user edits the autofilled field.

Note that the user agent style sheets of many browsers use `!important` in their style declarations, making some styles non-overridable. For example, Chrome has the following in its internal stylesheet:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

This means that you cannot override the default {{cssxref('background-color')}}, {{cssxref('background-image')}}, or {{cssxref('color')}} values on selected autofilled input elements in your own rules, but you can override the {{cssxref('appearance')}}, and you can override these properties for the autofilled elements that aren't currently focused.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Examples

The following example demonstrates the use of the `:autofill` pseudo-class to change the border of a text field that has been autocompleted by the browser.

### HTML

We include three HTML `<input>` elements, each with an associated {{htmlelement("label")}}. The `name` and `email` will likely autocomplete and match `:autofill`, while the `pet` value is unlikely to.

```html
<form method="post" action="">
  <p>
    <label for="name">Name: </label>
    <input name="n" id="name" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" autocomplete="email" />
  </p>
  <p>
    <label for="pet">Your pet's name: </label>
    <input name="pet" id="pet" />
  </p>
</form>
```

### CSS

We apply a {{cssxref("border-radius")}}, {{cssxref("outline")}}, and {{cssxref("border-color")}} to the `<input>` elements when they match the `:autofill` state.

```css
input {
  border-radius: 0px;
}

input:autofill {
  border-radius: 0.5lh;
  outline: 5px dashed magenta;
  border-color: yellow;
}
```

```css hidden
@supports not selector(:autofill) {
  body::before {
    content: "Your browser doesn't support the :autofill selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px;
  }
}
```

### Results

{{EmbedLiveSample('Examples')}}

If you allow the `name` to autocomplete, the `name` and `email` will both have a rounded border and a magenta outline, though likely the border will not change due to the `!important` flag set in the user agent style sheet. Try editing one of the fields: note how once you edit the value, even if you reset it to it's autocompletion value, the `:autofill` styles are no longer applied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<input>` pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes)
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
