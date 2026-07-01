---
title: "HTMLFormElement: elements property"
short-title: elements
slug: Web/API/HTMLFormElement/elements
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.elements
---

{{APIRef("HTML DOM")}}

The **`elements`** property of the {{domxref("HTMLFormElement")}} interface returns an {{domxref("HTMLFormControlsCollection")}} listing all the listed form controls associated with the {{HTMLElement("form")}} element.

You can access a particular form control in the returned collection by using either an index or the element's `name` or `id` attributes.

Prior to HTML 5, the returned object was an {{domxref("HTMLCollection")}}, on which `HTMLFormControlsCollection` is based.

Independently, you can obtain just the number of associated form controls using the {{domxref("HTMLFormElement.length", "length")}} property. You can get a list of all of the forms contained within a given document using the document's {{domxref("Document.forms", "forms")}} property.

## Value

An {{domxref("HTMLFormControlsCollection")}} containing all non-image controls associated with the form.
This is a live collection; if form controls are associated with or disassociated from the form, this collection will update to reflect the change.

The form controls in the returned collection are in the same order in which they appear in the document by following a preorder, depth-first traversal of the tree.
This is called **tree order**.

Only the following form controls are returned:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (with the exception that any whose [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#type) is `"image"` are omitted for historical reasons)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [form-associated custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Examples

### Quick syntax example

In this example, we see how to obtain the list of form controls as well as how to access its members by index and by name or ID.

```html
<form id="my-form">
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Full name:
    <input type="text" name="full-name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### Associated form controls

This example demonstrates how the {{domxref("HTMLFormControlsCollection")}} contains the form controls associated with the form, rather than the controls physically nested in the `<form>`.

The first form is full, with four form controls: one {{htmlelement("fieldset")}} and three {{htmlelement("input")}} elements. The {{htmlelement("legend")}} and {{htmlelement("label")}} elements are not listed form controls. The second form is sparse, with only one nested form control: a single {{htmlelement("object")}} element. All the form controls in the full form are associated with the sparse form via their `form` attribute.

```html
<form id="fullForm">
  This form looks full, but it has no associated form controls
  <fieldset form="sparseForm">
    <legend>This is a legend</legend>
    <label>A form control: <input form="sparseForm" /></label>
    <label>Another form control: <input form="sparseForm" /></label>
    <label>Yet another form control: <input form="sparseForm" /></label>
  </fieldset>
</form>

<form id="sparseForm">
  <object data="lone-form-control.jpg">Lone form control</object>
</form>
```

We use the `elements` property to get the `HTMLFormControlsCollection` for each form.

```js
const sparse = document.getElementById("sparseForm").elements;
const full = document.getElementById("fullForm").elements;
```

The collection includes the form element's associated form controls, meaning all the {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, and form-associated custom elements associated with the form, even if those elements are nested in another form, or not nested in any form.

```js
console.log(`sparse form: ${sparse.length}`); // sparse form: 5
console.log(`full form: ${full.length}`); // full form: 0
```

The collection's form controls are in the same order in which they appear in the document.

```js
console.log(`first member: ${sparse[0].tagName}`); // first member: FIELDSET
console.log(`last member: ${sparse[sparse.length - 1].tagName}`); // last member: OBJECT
```

### Accessing form controls

This example gets the form's element list, then iterates over the list, looking for {{HTMLElement("input")}} elements of type [`"text"`](/en-US/docs/Web/HTML/Reference/Elements/input/text) so that some form of processing can be performed on them.

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (const input of inputs) {
  if (input.nodeName === "INPUT" && input.type === "text") {
    // Update text input
    input.value = input.value.toLocaleUpperCase();
  }
}
```

### Disabling form controls

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (const input of inputs) {
  // Disable all form controls
  input.setAttribute("disabled", "");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
