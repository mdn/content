---
title: "InstallResultEvent: result property"
short-title: result
slug: Web/API/InstallResultEvent/result
page-type: web-api-instance-property
browser-compat: api.InstallResultEvent.result
---

{{APIRef("HTML DOM")}}

The **`result`** read-only property of the {{domxref("InstallResultEvent")}} interface represents the status of a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) installation.

## Value

An enumerated value representing the status of the PWA installation. This can be one of the following values:

- `success`
  - : Installation was successful.
- `aborted`
  - : Installation was aborted by the user or the user agent.
- `invalid_data`
  - : Installation failed because of a data issue such as a badly-formed manifest, or a missing [`manifest`](/en-US/docs/Web/HTML/Reference/Elements/install#manifest) URL or [`manifestId`](/en-US/docs/Web/HTML/Reference/Elements/install#manifestId).

## Examples

### Basic usage

```js
const installElem = document.querySelector("install");

installElem.addEventListener("installresult", (e) => {
  console.log(`Install result: ${e.result}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
