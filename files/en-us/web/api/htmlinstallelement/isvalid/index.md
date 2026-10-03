---
title: "HTMLInstallElement: isValid property"
short-title: isValid
slug: Web/API/HTMLInstallElement/isValid
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.isValid
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`isValid`** read-only property of the {{domxref("HTMLInstallElement")}} interface returns a boolean value indicating whether the associated {{htmlelement("install")}} element is valid or invalid (blocked).

When a [blocker](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking) is active on an `<install>` element, it is prevented from functioning (invalid), either temporarily or permanently, depending on the reason.

You can return the reason why it is invalid via the {{domxref("HTMLInstallElement.invalidReason")}} property — see that page for a full list of possible reasons.

## Value

A boolean value:

- If `true`, the `<install>` element is valid and functional, meaning that it can be used to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps).
- If `false`, the `<install>` element is invalid and non-functional, meaning that it can't be used to install a PWA.

Defaults to `false`.

## Examples

### Basic usage

```html
<install></install>
```

```js
const installElem = document.querySelector("install");
console.log(installElem.isValid);
```

See the {{domxref("HTMLInstallElement.invalidReason")}} page for a more complete example involving `isValid`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
