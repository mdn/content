---
title: Navigator.setAppBadge()
slug: Web/API/Navigator/setAppBadge
tags:
  - API
  - Badging API
  - Method
  - Reference
  - setAppBadge
  - Navigator
browser-compat: api.Navigator.setAppBadge
---
{{DefaultAPISidebar("Badging API")}}

The **`setAppBadge()`** method of the {{domxref("Navigator")}} interface a badge on the icon associated with this app. If a value is passed to the method, this will be set as the value of the badge. Otherwise the badge will display as a dot, or other indicator as defined by the platform.

## Syntax

```js
let promise = Navigator.setAppBadge(contents);
````

### Parameters

- `contents`{{optional_inline}}
  - : A {{jsxref("number")}} which will be used as the value of the badge. If `contents` is `0` then the badge will be set to `nothing`, indicating a cleared badge.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : The {{domxref("Navigator")}} does not have a document that this action can be acted on.

## Examples

In the example below an unread count is passed to `setAppBadge()`. The badge should then display `30`.

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Badging for app icons](https://web.dev/badging-api/)
