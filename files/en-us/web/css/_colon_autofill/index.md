---
title: :autofill
slug: Web/CSS/:autofill
page-type: css-pseudo-class
browser-compat: css.selectors.autofill
sidebar: cssref
---

The **`:autofill`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches when an {{HTMLElement("input")}} element has its value autofilled by the browser. The class stops matching if the user edits the field.

{{InteractiveExample("CSS Demo: :autofill", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px solid darkorange;
}
```

```html interactive-example
<form>
  <p>Click on the text box and choose any option suggested by your browser.</p>

  <label for="name">Name</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" autocomplete="email" />

  <label for="country">Country</label>
  <input id="country" name="country" type="text" autocomplete="country-name" />
</form>
```

> [!NOTE]
> The user agent style sheets of many browsers use `!important` in their `:-webkit-autofill` style declarations, making them non-overridable by webpages without resorting to JavaScript hacks. For example Chrome has the following in its internal stylesheet:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> This means that you cannot set the {{cssxref('background-color')}}, {{cssxref('background-image')}}, or {{cssxref('color')}} in your own rules.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Examples

The following example demonstrates the use of the `:autofill` pseudo-class to change the border of a text field that has been autocompleted by the browser.
To ensure we don't create an [invalid selector list](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list), both `:-webkit-autofill` and `:autofill` are matched using a forgiving selector list with {{cssxref(":is()")}}.

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chromium issue 46543: Auto-filled input text box yellow background highlight cannot be turned off](https://crbug.com/46543)
- [WebKit bug 66032: Allow site authors to override autofilled fields' colors.](https://webkit.org/b/66032)
- [Mozilla bug 740979: implement `:-moz-autofill` pseudo-class on input elements with an autofilled value](https://bugzil.la/740979)
- [User Interface Module Level 4: more selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
