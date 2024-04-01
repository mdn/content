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
{{domxref("XMLHttpRequest")}} interface indicates that you want the request to trigger the browser to set off an attribution source or trigger event.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameters

- `options`
  - : An object providing attribution reporting options, which includes the following properties:
    - `eventSourceEligible`
      - : A boolean. If set to `true`, a successful request will trigger an attribution source event. If set to `false`, it won't.
    - `triggerEligible`
      - : A boolean. If set to `true`, a successful request will trigger an attribution trigger event. If set to `false`, it won't.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated {{domxref("XMLHttpRequest")}} has not yet been {{domxref("XMLHttpRequest.open", "opened", "", "nocode")}}, or has already been {{domxref("XMLHttpRequest.send", "sent", "", "nocode")}}.
- `NotAllowedError` {{domxref("DOMException")}}
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
  req.setAttributionReporting(attributionReporting);
  req.send();
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
