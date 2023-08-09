---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Register-Trigger
---

{{HTTPSidebar}}{{seecompattable}}

The **`Attribution-Reporting-Register-Trigger`** header is included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, to complete registration of an [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API#registering_attribution_triggers).

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Trigger: <json-string>
```

## Directives

- `<json-string>`
  - : A string of JSON-encoded data that provides data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values. Available fields are as follows:
    - `event_trigger_data`
      - : An object representing data about the conversion. Note that, because the header value must be a valid JSON string, this object is nested in square brackets. Available sub-fields are as follows:
        - `trigger_data`
          - : A string representing unique data that describes the trigger. It usually includes a unique ID representing the trigger that can be used to aggregate data for that trigger together, and may also include other data such as user location ID, purchase amount, etc.
        - `priority` {{optional_inline}}
          - : A string representing a priority value for the attribution trigger. By default, conversions are attributed to the most recent matching source. For both event-level and summary reports you set a higher priority number to make the conversion match older sources. For example, a value of `2` takes priority over the default value of `1`. See [Prioritize specific clicks or views for event-level or aggregatable reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/change-attribution-logic/) for more information.
        - `deduplication_key` {{optional_inline}}
          - : A string representing a unique key that can be used to prevent reports from being counted multiple times, for example, if a checkout completion page is accidentally reloaded causing an attribution trigger to be fired twice. See [Prevent duplication in reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/prevent-duplication/) for more information.
    - `debug_key`
      - : xx EDITORIAL: NEED TO FIND OUT WHAT THIS DOES

EDITORIAL: THERE IS DEFINITELY MORE STUFF TO COVER HERE, BUT I'M NOT SURE WHAT THE OVERALL STRUCTURE LOOKS LIKE, OR HOW TO SEPARATE INFORMATION FOR EVENT-LEVEL AND SUMMARY REPORTS

## Examples

A Node.js server might set the `Attribution-Reporting-Register-Trigger` response header as follows:

```js
res.set(
  'Attribution-Reporting-Register-Trigger',
  JSON.stringify({
    event_trigger_data: [{
      trigger_data: '412444888111012',
      // Optional
      priority: '1000000000000',
      deduplication_key: '2345698765'
    }],
    debug_key: '1115698977'
  });
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Attribution-Reporting-Eligible")}}
- {{httpheader("Attribution-Reporting-Register-Source")}}
- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
