---
title: "TrustedTypePolicyFactory: getPropertyType() method"
short-title: getPropertyType()
slug: Web/API/TrustedTypePolicyFactory/getPropertyType
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.getPropertyType
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`getPropertyType()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface allows web developers to check if a Trusted Type is required for an element's property.

## Syntax

```js-nolint
getPropertyType(tagName, property)
getPropertyType(tagName, property, elementNS)
```

### Parameters

- `tagName`
  - : A string containing the name of an HTML tag.
- `property`
  - : A string containing a property, for example `"innerHTML"`.
- `elementNS` {{optional_inline}}
  - : A string containing a namespace, if empty defaults to the HTML namespace.

### Return value

A string with one of:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Or, `null`.

## Examples

In this example, passing the {{htmlelement("div")}} element and `innerHTML` attribute to `getPropertyType()` returns "TrustedHTML".

```js
console.log(trustedTypes.getPropertyType("div", "innerHTML")); // "TrustedHTML"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
