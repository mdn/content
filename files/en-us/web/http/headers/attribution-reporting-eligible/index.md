---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Eligible
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Attribution-Reporting-Eligible`** request header is used to indicate that the response corresponding to the request is eligible to take part in attribution reporting, by registering either an attribution source or trigger.

This header is never set manually and is instead sent by the browser in response to various HTML element or JavaScript request settings. Depending on the allowed registrations specified in the `Attribution-Reporting-Eligible` value, the server would be expected to respond with a {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} to complete registration of an attribution source or trigger respectively.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Eligible: <allowed-registrations>
```

## Directives

- `<allowed-registrations>`
  - : A structured-header dictionary representing the registrations allowed in the corresponding response. Possible keys are:
    - `event-source`
      - : An event-based (image or script-based) [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API#registering_attribution_sources) can be registered.
    - `navigation-source`
      - : A navigation-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API#registering_attribution_sources) can be registered.
    - `trigger`
      - : An [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API#registering_attribution_triggers) can be registered.

Every response in a redirect chain can register at most one source or one trigger.

## Examples

```http
Attribution-Reporting-Eligible: trigger
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Attribution-Reporting-Register-Source")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
