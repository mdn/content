---
title: "Document: fragmentDirective property"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
page-type: web-api-instance-property
browser-compat: api.Document.fragmentDirective
---

{{APIRef("URL Fragment Text Directives")}}

The **`fragmentDirective`** read-only property of the {{domxref("Document")}} interface returns the {{domxref("FragmentDirective")}} for the current document.

## Value

A {{domxref("FragmentDirective")}} object.

## Examples

### Checking if text fragments are supported

The code below logs whether or not text fragments are supported in your browser by checking for existence of the object.
Note that the object is empty, and at present it is mainly intended for feature detection.
In the future, it might include other information.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

```js
if (document.fragmentDirective) {
  log("Your browser supports text fragments.");
} else {
  log("Text fragments are not supported in your browser.");
}
```

{{EmbedLiveSample("Checking if text fragments are supported","100%","30px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
