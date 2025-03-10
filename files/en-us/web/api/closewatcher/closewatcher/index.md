---
title: "CloseWatcher: CloseWatcher() constructor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CloseWatcher.CloseWatcher
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`CloseWatcher()`** constructor creates a new {{domxref("CloseWatcher")}} object.

You can create `CloseWatcher` instances without [user activation](/en-US/docs/Web/Security/User_activation), and this can be useful to implement cases like session inactivity timeout dialogs. However, if you create more than one `CloseWatcher` without user activation, then the newly-created one will be grouped together with the last one, so a single close request will close them both. This means that it is important to call {{domxref("CloseWatcher.destroy()", "destroy()")}}, {{domxref("CloseWatcher.close()", "close()")}}, and {{domxref("CloseWatcher.requestClose()", "requestClose()")}} properly.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `signal`
      - : An {{domxref("AbortSignal")}}. If this is provided, then the watcher can be destroyed (as if by calling {{domxref("CloseWatcher.destroy()")}}) by calling {{domxref("AbortController.abort()")}} on the corresponding {{domxref("AbortController")}}.

### Return value

A new {{domxref("CloseWatcher")}} object.

## Examples

### Creating new `CloseWatcher` instances

Create a new `CloseWatcher`.

```js
const watcher = new CloseWatcher();
```

Create a new `CloseWatcher` with an {{domxref("AbortSignal")}} that controls destroying the watcher.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
