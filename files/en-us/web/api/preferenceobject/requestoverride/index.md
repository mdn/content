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

The **`requestOverrides`** method of the {{domxref("PreferenceObject")}} interface sets the {{domxref("PreferenceObject.override" "override")}} value.

## Syntax

```js-nolint
requestOverrides(value)
```

### Parameters

- `value`
  - : The value to request an override with.

### Return value

A {{jsxref("Promise")}} which resolves to {{jsxref("undefined")}} on success, or rejects with `ConstraintError` {{domxref("DOMException")}} on failure.

## Examples

The following example requests the override of the {{domxref("PreferenceObject.colorScheme" "color scheme")}}.

```js
await navigator.preferences.colorScheme.requestOverride("dark");
console.log(navigator.preferences.colorScheme.override);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
