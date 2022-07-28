---
title: HTMLSelectElement.autofocus
slug: Web/API/HTMLSelectElement/autofocus
page-type: web-api-instance-property
tags:
  - API
  - HTML forms
  - HTMLSelectElement
  - Property
  - Reference
browser-compat: api.HTMLSelectElement.autofocus
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.autofocus`** property has a value of either `true` or `false` that reflects the {{htmlattrxref("autofocus", "select")}} HTML
attribute, which indicates whether the associated {{HTMLElement("select")}} element
will get input focus when the page loads, unless the user overrides it.

Only one form-associated element in a document can have this attribute specified. If
there are several, the first element with the attribute set inserted, usually the first
such element on the page, get the initial focus.

> **Note:** Setting this property doesn't set the focus to the associated
> {{HTMLElement("select")}} element: it merely tells the browser to focus to it when
> _the element is inserted_ in the document. Setting it after the insertion, that
> is most of the time after the document load, has no visible effect.

## Value

A boolean value.

## Examples

### HTML

```html
<select id="mySelect" autofocus>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### JavaScript

```js
// Check if the autofocus attribute on the <select>
const hasAutofocus = document.getElementById('mySelect').autofocus;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
