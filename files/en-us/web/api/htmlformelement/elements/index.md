---
title: "HTMLFormElement: elements property"
short-title: elements
slug: Web/API/HTMLFormElement/elements
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.elements
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLFormElement")}} property
**`elements`** returns an
{{domxref("HTMLFormControlsCollection")}} listing all the form controls contained in
the {{HTMLElement("form")}} element.

Independently, you can obtain just the
number of form controls using the {{domxref("HTMLFormElement.length", "length")}}
property.

You can access a particular form control in the returned collection by using either an
index or the element's `name` or `id` attributes.

Prior to HTML 5, the returned object was an {{domxref("HTMLCollection")}}, on which
`HTMLFormControlsCollection` is based.

> [!NOTE]
> Similarly, you can get a list of all of the forms contained within a given document using the document's {{domxref("Document.forms", "forms")}} property.

## Value

An {{domxref("HTMLFormControlsCollection")}} containing all non-image controls in the form.
This is a live collection; if form controls are added to or removed from the form, this collection will update to reflect the change.

The form controls in the returned collection are in the same order in which they appear in the form by following a preorder, depth-first traversal of the tree.
This is called **tree order**.

Only the following elements are returned:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (with the exception that any whose [`type`](/en-US/docs/Web/HTML/Element/input#type) is `"image"` are omitted for historical reasons)
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

### Accessing form controls

This example gets the form's element list, then iterates over the list, looking for
{{HTMLElement("input")}} elements of type
[`"text"`](/en-US/docs/Web/HTML/Element/input/text) so that some
form of processing can be performed on them.

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Update text input
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Disabling form controls

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  // Disable all form controls
  inputs[i].setAttribute("disabled", "");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
