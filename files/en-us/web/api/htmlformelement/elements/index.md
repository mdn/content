---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
tags:
  - API
  - Elements
  - HTML DOM
  - HTMLFormControlsCollection
  - HTMLFormElement
  - Property
  - Reference
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

> **Note:** Similarly, you can get a list of all of the forms contained
> within a given document using the document's {{domxref("Document.forms", "forms")}}
> property.

## Syntax

```js
nodeList = HTMLFormElement.elements
```

### Value

An {{domxref("HTMLFormControlsCollection")}} containing all non-image controls in the
form. This is a live collection; if form controls are added to or removed from the form,
this collection will update to reflect the change.

The form controls in the returned collection are in the same order in which they appear
in the form by following a preorder, depth-first traversal of the tree. This is called
**tree order**.

{{page("/en-US/docs/Web/API/HTMLFormElement", "Elements that are considered form controls")}}

## Example

### Quick syntax example

In this example, we see how to obtain the list of form controls as well as how to
access its members by index and by name or ID.

```html
<form id="my-form">
  <input type="text" name="username">
  <input type="text" name="full-name">
  <input type="password" name="password">
</form>
```

```js
var inputs = document.getElementById("my-form").elements;
var inputByIndex = inputs[0];
var inputByName = inputs["username"];
```

### Accessing form controls

This example gets the form's element list, then iterates over the list, looking for
{{HTMLElement("input")}} elements of type
[`"text"`](/en-US/docs/Web/HTML/Element/input/text) so that some
form of processing can be performed on them.

```js
var inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Update text input
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Disabling form controls

```js
var inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (i = 0; i < inputs.length; i++) {
  // Disable all form controls
  inputs[i].setAttribute("disabled", "");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
