---
title: HTMLElement.isContentEditable
slug: Web/API/HTMLElement/isContentEditable
page-type: web-api-instance-property
tags:
  - API
  - Editing
  - HTML DOM
  - HTMLElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLElement.isContentEditable
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.isContentEditable`** read-only property
returns a boolean value that is `true` if the contents of the element
are editable; otherwise it returns `false`.

## Value

A boolean value.

## Examples

### HTML

```html
<p id="myText1">Uneditable Paragraph</p>
<p id="myText2" contentEditable="true">Editable Paragraph</p>

<p id="infoText1">Can edit the first paragraph? </p>
<p id="infoText2">Can edit the second paragraph? </p>
```

### JavaScript

```js
document.getElementById('infoText1').innerHTML += document.getElementById('myText1').isContentEditable;
document.getElementById('infoText2').innerHTML += document.getElementById('myText2').isContentEditable;
```

### Result

{{ EmbedLiveSample('Examples') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement/contentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute.
