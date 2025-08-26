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

The `form` HTML attribute associates a form-associated element with a {{htmlelement("form")}} element within the same document. This attribute applies to the {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}} elements.

## Values

The `id` of the `<form>` element, within the same document, with which the element should be associated.

## Usage notes

By default, form controls are associated with their nearest ancestor {{htmlelement("form")}} element, while form controls that are not nested within a `<form>` are not associated with any form. The `form` attribute enables overriding these default behaviors. When a form is submitted, the names and values of the `<form>` element's associated controls are submitted, whether or not the form controls are physically nested within that `<form>`.

The `form` attribute of the {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}} elements allows you to specify an explicit form owner, enabling you to associate the form control on which it is applied located anywhere within a document with any `<form>` element located in the same document. The attribute makes this possible even if the control is not nested in a `<form>` or if it's nested in a different `<form>`.

The `form` attribute takes as its value the `id` of a `<form>` element in the same document, thereby associating the form control on which it is set with that `<form>`. All other values set as the value of `form` attribute are ignored.

While setting the attribute value to the `id` of the nearest ancestor `<form>` isn't necessary, explicitly defining the association between a form control and its nearest ancestor form ensures the form control will not be disassociated from its form if scripts or malformed HTML result in that specific `<form>` not being the nearest form ancestor of the control.

### Associating with a non-ancestor form

The `form` attribute can be used to associate a form control nested in one `<form>` with another `<form>`.

In this code example, the username `<input>` is nested within the `internalForm`, but the `form` attribute disassociates the control from its ancestor form in which it is nested, and associates it with the `externalForm` instead:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Username:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

In this case, the username will be submitted when the `externalForm` is submitted, while the `internalForm` has no associated form controls.

### Non-inheritance of the `form` attribute

The `form` attribute only associates the element on which it is set. The attribute is not inherited. For example, when the `form` attribute is set on a `<fieldset>` element it only associates the `<fieldset>`; it does **not** automatically associate the form controls nested within that `<fieldset>`.

In this example, the `<fieldset>` and `username` `<input>` are associated with the`exampleForm`, and included in the {{domxref("HTMLFormControlsCollection")}} of the {{domxref("HTMLFormElement.elements")}} property, but the`password` is not. Only the `username` will be included when the `exampleForm` is submitted:

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <legend>Login information</legend>
  <label
    >Username: <input form="exampleForm" type="text" name="username"
  /></label>
  <label
  >Password: <input type="password" name="password"
  /></label>
</fieldset>
```

Each nested element needs its own `form` attribute or must be nested inside the form. You can check which elements are associated with a form via JavaScript, using [HTMLFormElement.elements](/en-US/docs/Web/API/HTMLFormElement/elements).

### Form submission

Including the `form` attribute does not mean the element will be submitted with the form. Only submittable elements, including `<button>`, `<input>`, `<select>`, and `<textarea`>, have their name and values submitted when their associated `<form>` is submitted.

In this case, even though the `<output>` is implicitly then explicitly associated with the `calcForm`, the `result` is not submitted along with `a` and `b` when `calcForm` is submitted.

When used as an attribute for `<output>` element, its name and value are **not** submitted with the form, but are part of the form's `HTMLFormControlsCollection`.

```html
<form id="calcForm">
  <label>First number: <input id="a" value="2" type="number" /></label>
  <label>Second number: <input id="b" value="3" type="number" /></label>
  <label>Sum: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## Examples

### Basic example

This example demonstrates how form-associated elements can be associated with a `<form>` element using the `form` attribute, even if they are not explicitly nested inside it. All of the form-associated elements shown in this example are associated with the `loginForm` either implicitly, by being directly nested inside the form (without a `form` attribute disassociating it by being associated with a different `<form>` in the document), or explicitly via the `form` attribute. When the login form is submitted, the names and values of each submittable element will be included.

```html
<form id="loginForm">
  <label>Username: <input type="text" name="username" /></label>
</form>

<label
  >Password: <input form="loginForm" type="password" name="password"
/></label>
<label>
  Choose an option:
  <select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</label>
<label
  >Description:
  <textarea form="loginForm" rows="4" name="description">
Hello, World!</textarea
  >
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  Submit
</button>
```

### Element associated with a different form

This example demonstrates how an element's `form` attribute can associate the element with a form while dissociating itself from its closest ancestor form. We have two `<form>` elements: `parentForm` and `targetForm`. The `<button>` inside `parentForm` has its `form` attribute set to `targetForm`, disassociating it from the nearest ancestor `parentForm`, while associating it with the target form. When the submit button is activated, it submits the `targetForm`, not its `parentForm` ancestor.

```html
<form id="targetForm">
  <input type="text" name="targetInput" />
</form>
<form id="parentForm">
  <button form="targetForm" type="submit" name="submitTarget" value="Target">
    Submit target form
  </button>
</form>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{compat}}

## See also

- [`Overriding default form behaviors`](/en-US/docs/Web/HTML/Reference/Elements/input/image#overriding_default_form_behaviors)
