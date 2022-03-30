---
title: TrustedTypePolicyFactory.getPropertyType()
slug: Web/API/TrustedTypePolicyFactory/getPropertyType
tags:
  - API
  - Method
  - Reference
  - getPropertyType
  - TrustedTypePolicyFactory
browser-compat: api.TrustedTypePolicyFactory.getPropertyType
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`getPropertyType()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface allows web developers to check if a Trusted Type is required for an element's property.

## Syntax

```js
TrustedTypePolicyFactory.getPropertyType(tagName, property)
TrustedTypePolicyFactory.getPropertyType(tagName, property, elementNS)
```

### Parameters

- `tagName`
  - : A {{domxref("DOMString","string")}} containing the name of an HTML tag.
- `property`
  - : A {{domxref("DOMString","string")}} containing a property, for example `"innerHTML"`.
- `elementNs`{{optional_inline}}
  - : A {{domxref("DOMString","string")}} containing a namespace, if empty defaults to the HTML namespace.

### Return value

A {{domxref("DOMString","string")}} with one of:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Or, null.

## Examples

In this example, passing the {{htmlelement("div")}} element and `innerHTML` property to `getPropertyType` returns "TrustedHTML".

```js
console.log(trustedTypes.getPropertyType('div', 'innerHTML')); // "TrustedHTML"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
