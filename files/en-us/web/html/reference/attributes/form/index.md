---
title: "HTML attribute: form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
page-type: html-attribute
browser-compat:
  - html.elements.button.form
  - html.elements.fieldset.form
  - html.elements.input.form
  - html.elements.object.form
  - html.elements.output.form
  - html.elements.select.form
  - html.elements.textarea.form
sidebar: htmlsidebar
---

The `form` HTML attribute associates a form-associated elements with a `form` element. This attribute requires the `id` of a `<form>` element in the same document. This attribute applies to the following elements: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}}.

## Values

The `form` HTML attribute's value must be the `id` of a `<form>` element in the same document. This links the current element with the specified `<form>`.

## Usage Notes

The `form` attribute allows form-associated elements to be associated with a `<form>` element even if they are not nested inside it. This means the element's nearest ancestor `<form>` can be overridden and associated with a different form. When the associated form is submitted, its data will be included in the submission.

```html
<form id="externalForm"></form>
<form id="internalForm">
  <input form="externalForm" type="text" name="username">
</form>
```

When used on a `<fieldset>` element, it does **not** automatically associate its nested elements with the provided `form` element. Each nested element needs its own `form` attribute or must be nested inside the form. You can check which elements are associated with a form via JavaScript, using [HTMLFormElement.elements](/en-US/docs/Web/API/HTMLFormElement/elements).

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <input form="exampleForm" type="text" id="exampleIn"/>
</fieldset>
```

When used as an attribute for `<output>` element, its name and value are **not** submitted with the form.

```html
<form id="calcForm">
  <input id="a" value="2"/>
  <input id="b" value="3"/>
</form>

<output name="result" for="a b" form="calcForm">5</output>
```

## Examples

### Basic example

The following example shows how form-associated elements can be associated to a `<form>` element using the `form` attribute, even if they are not explicitly nested inside it. All of the form-associated elements shown in this example are linked to `loginForm` `<form>` element, either directly nesting the element inside the form or by using the `form` attribute, such as `password input`, `select`, `textarea`, and `submit button`. When the form is submitted, all these element's data and names will be included.

```html
<form id="loginForm">
    <input type="text" name="username">
</form>

<input form="loginForm" type="password" name="password">
<select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
</select>
<textarea form="loginForm" rows="4" name="description">Hello, World!</textarea>
<button form="loginForm" type="submit">Submit</button>
```

### Element associated with a different form

The following example has two `<form>` elements: `parentForm` and `targetForm`. The `button` inside `parentForm` has its `form` attribute set to `targetForm`, overriding the nearest ancestor `parentForm`. When the submit button is triggered, it submits `targetForm` along with its nested elements.

```html
<form id="targetForm">
  <input type="text" name="targetInput"/>
</form>
<form id="parentForm">
  <button form="targetForm" type="submit">Submit target form</button>
</form>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{compat}}
