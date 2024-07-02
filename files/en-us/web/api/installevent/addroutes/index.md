---
title: "InstallEvent: addRoutes() method"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
page-type: web-api-instance-method
browser-compat: api.InstallEvent.addRoutes
---

{{APIRef("Navigation API")}}

The **`addRoutes()`** method of the
{{domxref("InstallEvent")}} interface specifies one or more routes, which define rules for how certain resources should be fetched and where from. This allows you to, for example, bypass a service worker in cases where you always want to fetch a resource from the network or a browser cache, without any {{domxref("FetchEvent")}} logic required.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameters

- `routerRules`

  - : A single object, or an array of one or more objects representing rules for how certain resources should be fetched and where from. Each `routerRules` object contains the following two properties:

    - `condition`

      - : An object defining one or more conditions that specify which resources should match this rule. The following properties can be included; if multiple properties are used, a resource must meet all specified conditions to match the rule.
        - `requestMethod` {{optional_inline}}
          - : A string representing the [method](/en-US/docs/Web/HTTP/Methods) the request should be sent by to match.
        - `requestMode` {{optional_inline}}
          - : A string representing the [mode](/en-US/docs/Web/API/Request/mode) the request should have to match.
        - `requestDestination` {{optional_inline}}
          - : A string representing the [destination](/en-US/docs/Web/API/Request/destination) of the request, i.e. what content type should be requested, for it to match.
        - `urlPattern` {{optional_inline}}
          - : A {{domxref("URLPattern")}} instance, or a `URLPattern()` constructor [`input`](/en-US/docs/Web/API/URLPattern/URLPattern#input) pattern representing the URLs that should match.

    - `source`
      - : An enumerated value or an object specifying how matching resources should be loaded.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active, or if the navigation has been cancelled.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the event was dispatched by a {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} call, rather than the user agent, or if the navigation cannot be intercepted (i.e. {{domxref("NavigateEvent.canIntercept")}} is `false`).

## Examples

### xxx

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InstallEvent")}}
- [`install` event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
