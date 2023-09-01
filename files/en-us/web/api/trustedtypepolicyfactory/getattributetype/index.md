---
title: "TrustedTypePolicyFactory: getAttributeType() method"
short-title: getAttributeType()
slug: Web/API/TrustedTypePolicyFactory/getAttributeType
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.getAttributeType
---

{{DefaultAPISidebar("Trusted Types API")}}

The **`getAttributeType()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface allows web developers to check if a Trusted Type is required for an element, and if so which Trusted Type is used.

## Syntax

```js-nolint
getAttributeType(tagName, attribute)
getAttributeType(tagName, attribute, elementNS)
getAttributeType(tagName, attribute, elementNS, attrNS)
```

### Parameters

- `tagName`
  - : A string containing the name of an HTML tag.
- `attribute`
  - : A string containing an attribute.
- `elementNS` {{optional_inline}}
  - : A string containing a namespace, if empty defaults to the HTML namespace.
- `attrNS` {{optional_inline}}
  - : A string containing a namespace, if empty defaults to null.

### Return value

A string with one of:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Or, null.

## Examples

In this example, passing the {{htmlelement("script")}} element and [`src`](/en-US/docs/Web/HTML/Global_attributes#src) attribute to `getAttributeType` returns "TrustedScriptURL".

```js
console.log(trustedTypes.getAttributeType("script", "src")); // "TrustedScriptURL"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
