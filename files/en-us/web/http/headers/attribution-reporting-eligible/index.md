---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Eligible
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Attribution-Reporting-Eligible`** {{Glossary("request header")}} indicates that the corresponding response is eligible to register an attribution source or trigger.

This header is never set manually and is instead sent by the browser in response to various HTML element or JavaScript request settings. Depending on the allowed registrations specified in the `Attribution-Reporting-Eligible` value, the server is expected to respond with either an {{HTTPHeader("Attribution-Reporting-Register-Source")}} or {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} header to complete the registration of an attribution source or trigger, respectively.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
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
      - : An [event-based attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) can be registered.
    - `navigation-source`
      - : A [navigation-based attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) can be registered.
    - `trigger`
      - : An [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers) can be registered.

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

- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
