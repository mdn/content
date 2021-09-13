---
title: HTMLFormElement.length
slug: Web/API/HTMLFormElement/length
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - NeedsSpecTable
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLFormElement.length
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.length`**
read-only property returns the number of controls in the {{HTMLElement("form")}}
element.

You can access the list of the form's controls using the
{{domxref("HTMLFormElement.elements", "elements")}} property.

This includes both elements that are descendants of the `<form>`
element as well as elements that are made members of the form using their
`form` property.

Elements that are considered for this property are: {{HTMLElement("button")}},
{{HTMLElement("fieldset")}}, {{HTMLElement("input")}} (with the exception
that any whose type is "image" are omitted for historical reasons),
{{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}},
and {{HTMLElement("textarea")}}.

## Syntax

```js
numControls = form.length;
```

### Value

`numControls` is the number of form controls within the
`<form>`. This is the same as the number of the elements in the
{{domxref("HTMLFormControlsCollection")}} returned by the
{{domxref("HTMLFormElement.elements", "elements")}} property.

## Example

```js
if (document.getElementById('form1').length > 1) {
  // more than one form control here
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
