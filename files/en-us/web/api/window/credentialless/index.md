---
title: "Window: credentialless property"
short-title: credentialless
slug: Web/API/Window/credentialless
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.Window.credentialless
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`window.credentialless`** read-only property returns a boolean that indicates whether the current document was loaded inside a credentialless {{htmlelement("iframe")}}, meaning that it is loaded in a new, ephemeral context.

This context doesn't have access to the network, cookies, and storage data associated with its origin. It uses a new context local to the top-level document lifetime. In return, the {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) embedding rules can be lifted, so documents with COEP set can embed third-party documents that do not.

See [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless) for a deeper explanation.

## Value

A boolean. A value of `true` indicates that the document was loaded inside a credentialless `<iframe>`; `false` indicates that it was not.

## Examples

You can specify a credentialless `<iframe>` like so:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

In supporting browsers, if the document loaded in the `<iframe>` were to run the following line, it would return `true`:

```js
console.log(window.credentialless);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
