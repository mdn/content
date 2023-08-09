---
title: "XMLHttpRequest: setAttributionReporting() method"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XMLHttpRequest.setAttributionReporting
---

{{APIRef("Attribution Reporting API")}}{{SeeCompatTable}}

The **`setAttributionReporting()`** method of the
{{domxref("XMLHttpRequest")}} interface indicates that you want the browser to send a {{httpheader("Attribution-Reporting-Eligible")}} header along with the request. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to complete attribution source or trigger registration.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameters

- `options`
  - : An object providing attribution reporting options, which can include the following properties:
    - `eventSourceEligible` {{optional_inline}}
      - : A boolean. If set to `true`, the associated {{htmlelement("script")}} element is eligible to be registered as an attribution source. If not set, the default value, `false`, is used.
    - `triggerEligible` {{optional_inline}}
      - : A boolean. If set to `true`, the associated {{htmlelement("script")}} element is eligible to be registered as an attribution trigger. If not set, the default value, `false`, is used.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated {{domxref("XMLHttpRequest")}} has not yet been {{domxref("XMLHttpRequest.open", "opened", "", "nocode")}}, or has already been {{domxref("XMLHttpRequest.send", "sent", "", "nocode")}}.

## Examples

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

const req = new XMLHttpRequest();
req.open("GET", "https://a.example/register-source");
req.setAttributionReporting(attributionReporting);
req.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
