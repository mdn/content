---
title: "HTMLElement: isContentEditable property"
short-title: isContentEditable
slug: Web/API/HTMLElement/isContentEditable
page-type: web-api-instance-property
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
<p id="firstParagraph">Uneditable Paragraph</p>
<p id="secondParagraph" contenteditable="true">Editable Paragraph</p>

<p id="infoText1">Is the first paragraph editable?</p>
<p id="infoText2">Is the second paragraph editable?</p>
```

### JavaScript

```js
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");

infoText1.textContent += " " + firstParagraph.isContentEditable;
infoText2.textContent += " " + secondParagraph.isContentEditable;
```

### Result

{{ EmbedLiveSample('Examples', '100%', 160) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement/contentEditable")}}
- The [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) global attribute.
