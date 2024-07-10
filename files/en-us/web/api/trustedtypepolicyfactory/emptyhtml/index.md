---
title: "TrustedTypePolicyFactory: emptyHTML property"
short-title: emptyHTML
slug: Web/API/TrustedTypePolicyFactory/emptyHTML
page-type: web-api-instance-property
browser-compat: api.TrustedTypePolicyFactory.emptyHTML
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`emptyHTML`** read-only property of the {{domxref("TrustedTypePolicyFactory")}} interface returns a {{domxref("TrustedHTML")}} object containing an empty string.

This object can be used when the application requires an empty string to be inserted into an injection sink.

## Value

A {{domxref("TrustedHTML")}} object.

## Examples

In the below example an empty string is to be inserted into the element. Therefore there is no need to create a policy, and the `emptyHTML` property can be used to insert the empty element when a Trusted Types object is expected.

```js
el.innerHTML = trustedTypes.emptyHTML;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
