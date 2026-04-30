---
title: "PreferenceObject: requestOverride() method"
short-title: requestOverride()
slug: Web/API/PreferenceObject/requestOverride
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PreferenceObject.requestOverride
spec-urls: https://drafts.csswg.org/mediaqueries-5/#request-override-method
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`requestOverride`** method of the {{domxref("PreferenceObject")}} interface sets an {{domxref("PreferenceObject.override" "override")}} value for a particular preference.

## Syntax

```js-nolint
requestOverrides(value)
```

### Parameters

- `value`
  - : The value to request an override with.

### Return value

A {{jsxref("Promise")}} which resolves to {{jsxref("undefined")}} on success, or rejects on failure.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the given value is not allowed.

## Examples

### Basic usage

The following example requests an override of the {{domxref("PreferenceObject.colorScheme" "colorScheme")}}.

```js
await navigator.preferences.colorScheme.requestOverride("dark");
console.log(navigator.preferences.colorScheme.override);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
