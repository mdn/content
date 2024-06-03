---
title: "XMLHttpRequest: setAttributionReporting() method"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XMLHttpRequest.setAttributionReporting
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`setAttributionReporting()`** method of the
{{domxref("XMLHttpRequest")}} interface indicates that you want the request's response to be able to register a JavaScript-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers).

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameters

- `options`
  - : An object providing attribution reporting options, which includes the following properties:
    - `eventSourceEligible`
      - : A boolean. If set to `true`, the request's response is eligible to register an attribution source. If set to `false`, it isn't.
    - `triggerEligible`
      - : A boolean. If set to `true`, the request's response is eligible to register an attribution trigger. If set to `false`, it isn't.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated {{domxref("XMLHttpRequest")}} has not yet been {{domxref("XMLHttpRequest.open", "opened", "", "nocode")}}, or has already been {{domxref("XMLHttpRequest.send", "sent", "", "nocode")}}.
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if use of the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) is blocked by a [`attribution-reporting`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting) {{httpheader("Permissions-Policy")}}.

## Examples

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

function triggerSourceInteraction() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://shop.example/endpoint");
  // Check availability of setAttributionReporting() before calling
  if (typeof req.setAttributionReporting === "function") {
    req.setAttributionReporting(attributionReporting);
    req.send();
  } else {
    throw new Error("Attribution reporting not available");
    // Include recovery code here as appropriate
  }
}

// Associate the interaction trigger with whatever
// element and event makes sense for your code
elem.addEventListener("click", triggerSourceInteraction);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
