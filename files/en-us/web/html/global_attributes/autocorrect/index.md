---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
page-type: html-attribute
browser-compat: html.global_attributes.autocorrect
---

{{HTMLSidebar("Global_attributes")}}

The **`autocorrect`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that controls whether editable text is automatically corrected for spelling and/or punctuation errors.

Autocorrection is relevant to editable text elements:

- {{htmlelement("input")}} elements, except for [`password`](/en-US/docs/Web/HTML/Element/input/password), [`email`](/en-US/docs/Web/HTML/Element/input/email), and [`url`](/en-US/docs/Web/HTML/Element/input/url), which do not support autocorrection.
- {{htmlelement("textarea")}} elements.
- Any element that has the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set.

Elements have autocorrection enabled by default, except for within a {{htmlelement("form")}} element, where the default value is inherited from the form.
Explicitly setting the attribute overrides the default.

## Value

Possible values are:

- `on` or `""` (the empty string)

  - : Enable automatic correction of spelling and punctuation errors.

    Setting any value other than `off`, including the empty string, is treated as `on`.

- `off`

  - : Disable automatic correction of editable text.

    The {{htmlelement("input")}} element types that don't support autocorrection always return `off`: [`password`](/en-US/docs/Web/HTML/Element/input/password), [`email`](/en-US/docs/Web/HTML/Element/input/email) and [`url`](/en-US/docs/Web/HTML/Element/input/url).

The default value for editable elements that are not nested inside a `<form>` is `on`.
Nested `<form>` elements inherit their their default value of `autocorrect` from the form (including {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}}).
The default value will be used if an element's `autocorrect` value is not explicitly set.

## Examples

<!-- Below is currently test code -->

### Autocorrection inheritance

The input element in the following example would not allow autocorrection, since it does not have an autocorrect content attribute and therefore inherits from the form element, which has an attribute of "off". However, the textarea element would allow autocorrection, since it has an autocorrect content attribute with a value of "on".

```html
<form id="formelem" autocorrect="off">
  <input id="searchelem" type="search" />
  <textarea id="textareaelem" autocorrect="on"></textarea>
</form>
```

```html
<form id="formelemnoauto">
  <input id="searchelemcont" type="search" />
  <textarea id="textareaelemcont" autocorrect="on"></textarea>
</form>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const formElement = document.querySelector("#formelem");
console.log(formElement);
log(formElement);
log(`formElement: ${formElement.autocorrect}`);

const searchElement = document.querySelector("#searchelem");
console.log(searchElement);
log(searchElement);
log(`searchElement: ${searchElement.autocorrect}`);

const textAreaElement = document.querySelector("#textareaelem");
console.log(textAreaElement);
log(textAreaElement);
log(`textAreaElement autocrct: ${textAreaElement.autocorrect}`);

// Test if form element have a default autocorrect value

const formElementNo = document.querySelector("#formelemnoauto");
console.log(formElementNo);
log(formElementNo);
log(`formElementNo: ${formElementNo.autocorrect}`);

const searchElementCont = document.querySelector("#searchelemcont");
console.log(searchElementCont);
log(searchElementCont);
log(`searchElementCont: ${searchElementCont.autocorrect}`);

const textAreaElementCont = document.querySelector("#textareaelemcont");
console.log(textAreaElementCont);
log(textAreaElementCont);
log(`textAreaElementCont autocrct: ${textAreaElementCont.autocorrect}`);
```

{{EmbedLiveSample("Autocorrection inheritance", "100%", "300")}}

### Setting autocorrect on an editing host

```html
<blockquote id="bq" contenteditable="true">
  <p id="para" autocorrect="on">Edit this content to add your own quote</p>
</blockquote>

<cite id="cite" contenteditable="true" autocorrect="on"
  >-- Write your own name here</cite
>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const bqElement = document.querySelector("#bq");
console.log(bqElement);
log(bqElement);
log(`bqElement: ${bqElement.autocorrect}`);
const paraElement = document.querySelector("#para");
log(`paraElement: ${paraElement.autocorrect}`);
const citeElement = document.querySelector("#cite");
log(`citeElement: ${citeElement.autocorrect}`);
console.log(citeElement);
```

{{EmbedLiveSample("Setting autocorrect on an editing host", "100%", "300")}}

### Setting autocorrect on a password

To tell the user's browser that the password field must have a valid value before the form can be submitted, specify the Boolean [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" autocorrect="on" />
<input type="submit" value="Submit" />
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const passwordElement = document.querySelector("#userPassword");
console.log(`passwordElem: ${passwordElement.autocorrect}`);
log(`passwordElem: ${passwordElement.autocorrect}`);
/*

*/
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Setting autocorrect on a password", "100%", "300")}}

### Test

#### HTML

```html
<p>Form to test different autocorrect settings:</p>

<form>
  <div>
    <label for="default">Default: no autocorrect set</label>
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocorrect="off"</label>
    <input type="text" id="off" name="off" autocorrect="off" />
  </div>
  <div>
    <label for="none">autocorrect="none"</label>
    <input type="text" id="none" name="none" autocorrect="none" />
  </div>
  <div>
    <label for="on">autocorrect="on"</label>
    <input type="text" id="on" name="on" autocorrect="on" />
  </div>
  <div>
    <label for="sentences">autocorrect="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocorrect="sentences" />
  </div>
  <div>
    <label for="words">autocorrect="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="autocorrect">autocorrect="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocorrect="characters" />
  </div>
  <div>
    <label for="characters-ta">autocorrect="characters" on textarea</label>
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocorrect="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocorrect="on">
  This content is editable and has autocorrect="on" set on it
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

#### Result

Test the effect on each input using a virtual keyboard or voice entry (keyboard entry will not work).

{{ EmbedLiveSample("Test", "100%", "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
