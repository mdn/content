---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.autocorrect
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

The **`autocorrect`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that controls whether editable text is automatically corrected for spelling and/or punctuation errors.

Autocorrection is relevant to editable text elements:

- {{htmlelement("input")}} elements, except for [`password`](/en-US/docs/Web/HTML/Element/input/password), [`email`](/en-US/docs/Web/HTML/Element/input/email), and [`url`](/en-US/docs/Web/HTML/Element/input/url), which do not support autocorrection.
- {{htmlelement("textarea")}} elements.
- Any element that has the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set.

Editable elements have auto-correction enabled by default, except for within a {{htmlelement("form")}} element, where the default value may be inherited from the form.
Explicitly setting the attribute overrides the default.

## Value

Possible values are:

- `on` or `""` (the empty string)

  - : Enable automatic correction of spelling and punctuation errors.

- `off`

  - : Disable automatic correction of editable text.

The {{htmlelement("input")}} element types that don't support auto-correction always have the `off` state: [`password`](/en-US/docs/Web/HTML/Element/input/password), [`email`](/en-US/docs/Web/HTML/Element/input/email) and [`url`](/en-US/docs/Web/HTML/Element/input/url).

For all other editable elements, setting any other value than those listed above is always treated as `on`.
The default value for elements that are not nested inside a `<form>` is `on`.

When nested in a `<form>`, the following elements inherit their their default value of `autocorrect` from the form if it has been set: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}}.

## Examples

### Basic example

This example demonstrates basic `autocorrect` attribute usage.

#### HTML

We include two text `<input>` elements with different values for their `autocorrect` attributes:

```html
<label for="vegetable">A vegetable: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">A fruit: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### Results

{{EmbedLiveSample("Basic example", "100%", "75")}}

Enter invalid text into the fruit and vegetable text entry boxes above.
If auto-correction is enabled on your browser, a typo in a vegetable name should be auto-corrected, but not in a fruit name.

### Enabling and disabling autocorrection

This example shows how you can enable and disable autocorrection using the `autocorrect` attribute.

#### HTML

The HTML markup defines a {{htmlelement("button")}}, a "name" {{htmlelement("input")}} element of [`type="text"`](/en-US/docs/Web/HTML/Element/input/text), a "bio" {{htmlelement("textarea")}} element, and two {{htmlelement("label")}} elements.

The "username" element has `autocorrect="off"` set because auto-correcting a name would be annoying!
The bio does not specify a value for `autocorrect`, which means that it is enabled (we could have set any value other than `off`).

```html
<button id="reset">Reset</button>
<label for="username">Name: </label>
<input id="username" name="username" type="text" autocorrect="off" />
<label for="bio">Biography: </label>
<textarea id="bio" name="bio"></textarea>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 75px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}

button,
input,
textarea {
  display: block;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code checks whether the `autocorrect` is supported by checking if it is present on the prototype.
If it is not present this fact is logged.
If it is present then the value of the `autocorrect` property for each of the text-entry elements is logged.

A click handler is added for the button, which allows you to reset the entered text and the log.

```js
const resetButton = document.querySelector("#reset");
const userNameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");

if (!("autocorrect" in HTMLElement.prototype)) {
  log("autocorrect not supported");
} else {
  log(`userNameElement.autocorrect: ${userNameElement.autocorrect}`);
  log(`userNameElement.autocorrect: ${bioElement.autocorrect}`);
}

resetButton.addEventListener("click", (e) => {
  userNameElement.value = "";
  bioElement.value = "";
});
```

#### Results

Enter invalid text into the name and biography text entry boxes below.
If auto-correction is enabled on your browser (see the log below) the text in the "Biography" should be auto-corrected, but not in the "Name" box.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
