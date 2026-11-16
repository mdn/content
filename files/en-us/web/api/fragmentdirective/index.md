---
title: FragmentDirective
slug: Web/API/FragmentDirective
page-type: web-api-interface
browser-compat: api.FragmentDirective
---

{{APIRef("URL Fragment Text Directives")}}

The **`FragmentDirective`** interface is an object exposed to allow code to check whether or not a browser supports [text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments).

It is accessed via the {{domxref("Document.fragmentDirective")}} property.

## Instance properties

None.

## Instance methods

None.

## Examples

### Checking if text fragments are supported

The code below logs whether or not text fragments are supported in your browser by checking that {{domxref("Document.fragmentDirective")}} is defined.
Note that the object is empty, and at present is mainly intended for feature detection.
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

- {{cssxref("::target-text")}}
