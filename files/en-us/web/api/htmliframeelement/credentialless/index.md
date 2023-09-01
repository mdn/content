---
title: "HTMLIFrameElement: credentialless property"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLIFrameElement.credentialless
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`credentialless`** property of the {{domxref("HTMLIFrameElement")}} interface indicates whether the {{htmlelement("iframe")}} is credentialless, meaning that documents inside will be loaded using new, ephemeral contexts.

Those contexts do not have access to their network, cookies and storage data associated with their origin. Instead, they use new ones, local to the top-level document lifetime. It means any data stored won't be accessible anymore after the user navigates away from the page or reloads it.

In return, the {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) embedding rules can be lifted, so documents with COEP set can embed third-party documents that do not. See [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless) for a deeper explanation.

## Value

A boolean. The default value is `false`; set it to `true` to make the `<iframe>` credentialless.

## Examples

### Get

Specify a credentialless `<iframe>` like so:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

Return the `credentialless` property value:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // will return true in supporting browsers
```

### Set

Alternatively, specify the minimum of details in the HTML:

```html
<iframe width="960" height="600"> </iframe>
```

And set `credentialless` to `true` then load the `<iframe>` contents via script:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless)
- {{htmlelement("iframe")}}
