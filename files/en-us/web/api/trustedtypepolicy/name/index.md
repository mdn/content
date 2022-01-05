---
title: TrustedTypePolicy.name
slug: Web/API/TrustedTypePolicy/name
tags:
  - API
  - Property
  - Reference
  - name
  - TrustedTypePolicy
browser-compat: api.TrustedTypePolicy.name
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`name`** read-only property of the {{domxref("TrustedTypePolicy")}} interface returns the name of the policy.

## Syntax

```js
var name = TrustedTypePolicy.name;
```

### Value

A {{domxref("DOMString")}} containing the name of the policy.

## Examples

In the below example a policy called `myEscapePolicy` is created using {{domxref("TrustedTypePolicyFactory.createPolicy()")}} and is represented by the object `escapeHTMLPolicy`. Calling `name` on this object returns the string "myEscapePolicy".

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/\>/g, "<")
});

console.log(escapeHTMLPolicy.name); /* "myEscapePolicy" */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
