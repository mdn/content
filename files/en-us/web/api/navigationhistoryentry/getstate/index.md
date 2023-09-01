---
title: "NavigationHistoryEntry: getState() method"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.getState
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`getState()`** method of the
{{domxref("NavigationHistoryEntry")}} interface returns a clone of the developer-supplied state associated with this history entry.

## Syntax

```js-nolint
getState()
```

### Parameters

None.

### Return value

A value representing the state. This can be any [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) data type.

If no state is defined, it returns `undefined`.

### Exceptions

None.

## Examples

```js
async function handleReload() {
  // Update existing state via reload()
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  });

  // Print current state to the console
  const current = navigation.currentEntry;
  console.log(current.getState());
}
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
