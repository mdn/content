---
title: "NavigationDestination: getState() method"
short-title: getState()
slug: Web/API/NavigationDestination/getState
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigationDestination.getState
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`getState()`** method of the
{{domxref("NavigationDestination")}} interface returns a clone of the developer-supplied state associated with the destination {{domxref("NavigationHistoryEntry")}}, or navigation operation (e.g. {{domxref("Navigation.navigate()", "navigate()")}}) as appropriate.

## Syntax

```js-nolint
getState()
```

### Parameters

None.

### Return value

A value representing the state. This can be any type.

If no state is defined, it returns `undefined`.

### Exceptions

None.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.getState());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
- Methods that allow state to be updated — {{domxref("Navigation.navigate()")}}, {{domxref("Navigation.reload()")}}, and {{domxref("Navigation.updateCurrentEntry()")}}
