---
title: "PreferenceObject: clearOverride() method"
short-title: clearOverride()
slug: Web/API/PreferenceObject/clearOverride
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PreferenceObject.clearOverride
spec-urls: https://drafts.csswg.org/mediaqueries-5/#clear-override-method
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`clearOverride`** method of the {{domxref("PreferenceObject")}} interface resets the {{domxref("PreferenceObject.override" "override")}} value.

## Syntax

```js-nolint
clearOverrides()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic usage

The following example clears the override of the {{domxref("PreferenceObject.colorScheme" "color scheme")}}.

```js
navigator.preferences.colorScheme.clearOverride();
console.log(navigator.preferences.colorScheme.override);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
