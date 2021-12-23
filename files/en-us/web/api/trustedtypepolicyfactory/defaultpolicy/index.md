---
title: TrustedTypePolicyFactory.defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
tags:
  - API
  - Property
  - Reference
  - defaultPolicy
  - TrustedTypePolicyFactory
browser-compat: api.TrustedTypePolicyFactory.defaultPolicy
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`defaultPolicy`** read-only property of the {{domxref("TrustedTypePolicyFactory")}} interface returns the default {{domxref("TrustedTypePolicy")}} or null if this is empty.

> **Note:** Information about the creation and use of default policies can be found in the [`createPolicy()`](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#default_policy) documentation.

## Syntax

```js
var defaultPolicy = TrustedTypePolicyFactory.defaultPolicy;
```

### Value

A {{domxref("TrustedTypePolicy")}} or null.

## Examples

The first line below returns null as no default policy has been created. Once a default policy is created, calling `defaultPolicy` returns that policy object.

```js
console.log(trustedTypes.defaultPolicy); // null
const dp = trustedTypes.createPolicy('default', {});
console.log(trustedTypes.defaultPolicy); // a TrustedTypePolicy object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
