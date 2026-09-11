---
title: "Navigator: preferences property"
short-title: preferences
slug: Web/API/Navigator/preferences
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.preferences
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}

The **`preferences`** read-only property of the {{domxref("Navigator")}} interface returns a {{domxref("PreferenceManager")}} object for the current document. This is the entry point for the [User Preferences API](/en-US/docs/Web/API/User_Preferences_API) functionality.

## Value

A {{domxref('PreferenceManager')}} object.

## Examples

### Get color scheme preference

This example demonstrates how to query the user's preferred color scheme.

```js
if (navigator.preferences.colorScheme.value === "dark") {
  // The user prefers a dark color scheme.
} else {
  // The user prefers a light color scheme.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [User Preferences API](/en-US/docs/Web/API/User_Preferences_API)
