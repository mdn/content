---
title: "NavigationPrecommitController: addHandler() method"
short-title: addHandler()
slug: Web/API/NavigationPrecommitController/addHandler
page-type: web-api-instance-method
browser-compat: api.NavigationPrecommitController.addHandler
---

{{APIRef("Navigation API")}}

The **`addHandler()`** method of the {{domxref("NavigationPrecommitController")}} interface allows you to dynamically add a handler callback function in precommit code, which will then be run after the navigation has committed.

This is useful when the navigation workflow depends on information that is not know until precommit code has started running.
If the precommit and (post-commit) handler are independent, the handler can be specified in {{domxref("NavigateEvent.intercept()")}}.

The handler callback is invoked as though it was passed to the {{domxref("NavigateEvent.intercept()")}} method in the [`options.handler`](/en-US/docs/Web/API/NavigateEvent/intercept#handler) argument.

## Syntax

```js-nolint
addHandler(handler);
```

### Parameters

- `handler`
  - : A callback function that defines the post-commit navigation handling behavior should be; it returns a promise.
    The function will run after the {{domxref("Navigation.currentEntry", "currentEntry")}} property has been updated.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The originating {{domxref("NavigateEvent")}} was not intercepted or has been canceled.
    - The {{domxref("Document")}} is not fully active.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the event {{domxref("Event/isTrusted","isTrusted")}} attribute is `false`.

## Examples

See the main {{domxref("NavigationPrecommitController")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
