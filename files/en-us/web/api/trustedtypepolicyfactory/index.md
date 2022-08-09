---
title: TrustedTypePolicyFactory
slug: Web/API/TrustedTypePolicyFactory
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - TrustedTypePolicyFactory
browser-compat: api.TrustedTypePolicyFactory
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`TrustedTypePolicyFactory`** interface of the {{domxref('Trusted Types API')}} creates policies and allows the verification of Trusted Type objects against created policies.

## Properties

- {{domxref("TrustedTypePolicyFactory.emptyHTML")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("TrustedHTML")}} object containing an empty string.
- {{domxref("TrustedTypePolicyFactory.emptyScript")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("TrustedScript")}} object containing an empty string.
- {{domxref("TrustedTypePolicyFactory.defaultPolicy")}} {{ReadOnlyInline}}
  - : Returns the default {{domxref("TrustedTypePolicy")}} or null if this is empty.

## Methods

- {{domxref("TrustedTypePolicyFactory.createPolicy()")}}
  - : Creates a {{domxref("TrustedTypePolicy")}} object that implements the rules passed as `policyOptions`.
- {{domxref("TrustedTypePolicyFactory.isHTML()")}}
  - : When passed a value checks that it is a valid {{domxref("TrustedHTML")}} object.
- {{domxref("TrustedTypePolicyFactory.isScript()")}}
  - : When passed a value checks that it is a valid {{domxref("TrustedScript")}} object.
- {{domxref("TrustedTypePolicyFactory.isScriptURL()")}}
  - : When passed a value checks that it is a valid {{domxref("TrustedScriptURL")}} object.
- {{domxref("TrustedTypePolicyFactory.getAttributeType()")}}
  - : Allows web developers to check whether a Trusted Type is required for an element and attribute, and if so which one.
- {{domxref("TrustedTypePolicyFactory.getPropertyType()")}}
  - : Allows web developers to check whether a Trusted Type is required for a property, and if so which one.

## Examples

The below code creates a policy with the name `"myEscapePolicy"` with a function defined for `createHTML()` which sanitizes HTML.

We then use the policy to sanitize a string, creating a {{domxref("TrustedHTML")}} object, `escaped`. This object can be tested with {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}} to ensure that it was created by one of our policies.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/>/g, "<")
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");

console.log(trustedTypes.isHTML(escaped)) // true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
