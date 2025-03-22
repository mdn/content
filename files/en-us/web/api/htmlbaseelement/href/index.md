---
title: "HTMLBaseElement: href property"
short-title: href
slug: Web/API/HTMLBaseElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLBaseElement.href
---

{{APIRef("HTML DOM")}}

The **`href`** property of the {{domxref("HTMLBaseElement")}} interface contains a string that is the URL to use as the base for [relative URLs](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls).

It reflects the `href` attribute of the {{HTMLElement("base")}} element.

## Value

A string that contains a URL, or the empty string (`""`) if the corresponding `<base>` element does not include the `href` attribute.

## Examples

### HTML with base URL

This example demonstrates that the `href` attribute in `<base>` is reflected in the `href` property of `HTMLBaseElement`.

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

#### HTML

```html
<base href="https://developer.mozilla.org/example" />
```

#### JavaScript

```js
const base = document.getElementsByTagName("base")[0];
log(`base.href="${base.href}"`);
```

#### Result

{{EmbedLiveSample('HTML with base URL', '100','50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
