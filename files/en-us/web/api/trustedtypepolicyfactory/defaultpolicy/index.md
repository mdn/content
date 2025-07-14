---
title: "TrustedTypePolicyFactory: defaultPolicy property"
short-title: defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
page-type: web-api-instance-property
browser-compat: api.TrustedTypePolicyFactory.defaultPolicy
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`defaultPolicy`** read-only property of the {{domxref("TrustedTypePolicyFactory")}} interface returns the default {{domxref("TrustedTypePolicy")}} or null if this is empty.

See [The default policy](/en-US/docs/Web/API/Trusted_Types_API#the_default_policy) for more details.

## Value

A {{domxref("TrustedTypePolicy")}} or `null`.

## Examples

The first line below returns `null` as no default policy has been created. Once a default policy is created, calling `defaultPolicy` returns that policy object.

```js
console.log(trustedTypes.defaultPolicy); // null
const dp = trustedTypes.createPolicy("default", {});
console.log(trustedTypes.defaultPolicy); // a TrustedTypePolicy object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
