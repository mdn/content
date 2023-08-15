---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Register-Source
---

{{HTTPSidebar}}{{seecompattable}}

The **`Attribution-Reporting-Register-Source`** header is included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, to complete registration of an [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API#registering_attribution_sources). It provides the information that the browser should store when the attribution source is interacted with. The information you include in this header also determines which type of report the browser will generate.

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
Attribution-Reporting-Register-Source: <json-string>
```

## Directives

- `<json-string>`
  - : A string of JSON-encoded data that provides the information that the browser should store when the attribution source is interacted with. Available fields are as follows:
    - `source_event_id`
      - : A string representing a unique ID for the attribution source, which can be used map it to other information required during ad-serving time (EDITORIAL: WHAT KIND OF INFORMATION?), or aggregate information at the reporting endpoint.
    - `destination`
      - : A string representing one or more URLs where a conversion is expected to occur. These are used to match the attribution trigger to the source when a conversion occurs. EDITORIAL: IF THERE ARE MORE THAN ONE, ARE THEY SPACE-SEPARATED, COMMA-SEPARATED?
    - `aggregation_keys` {{optional_inline}}
      - : An object containing keys representing different data points that you'll want to aggregate report values under. Possible values include:
        - `campaignCounts`: A hexadecimal value representing the ad campaign the ad is a part of. (EDITORIAL: WHAT RANGE DO THESE KEY VALUES HAVE? ARE THEY ALL AUTHOR-DECIDED, OR ARE THERE STANDARDIZED LISTS SOMEWHERE TO USE? THIS WOULD SEEM TO MAKE SENSE FOR THINGS LIKE GEO VALUES)
        - `geoValue`: A hexadecimal value representing the geographical region to ad was shown in.
    - `aggregatable_report_window` {{optional_inline}}
      - : A string representing a time in seconds, after which conversions will no longer be included in generated summary reports. The reports are still generated at the same time. If not set, the event report window falls back to the `expiry` value.
    - `debug_key` {{optional_inline}}
      - : xx EDITORIAL: NEED TO FIND OUT WHAT THIS DOES
    - `event_report_window` {{optional_inline}}
      - : A string representing a time in seconds, after which event-level reports will no longer be sent. This can be used to generate reports more quickly. if not set, the event report window falls back to the `expiry` value.
    - `expiry` {{optional_inline}}
      - : A string representing an expiry time, in seconds, for the attribution source, after which it will no longer be active (i.e. the browser will no longer cause interactions). If not specified, the default is 2592000 seconds (30 days)
    - `filter_data` {{optional_inline}}
      - : An object containing custom data that can be used to filter which conversions generate reports.
    - `priority` {{optional_inline}}
      - : A string representing a priority value for the attribution source. By default, conversions are attributed to the most recent matching source. For both event-level and summary reports you set a higher priority number to make the conversion match older sources. For example, a value of `2` takes priority over the default value of `1`. See [Prioritize specific clicks or views for event-level or aggregatable reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/change-attribution-logic/) for more information.

## Examples

### Registering a source for an event-level report

A Node.js server might set the `Attribution-Reporting-Register-Source` response header as follows. This is the minimal set of JSON fields required to make a browser generate an event-level report when a trigger is matched to a source:

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://advertiser.example",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",
  }),
);
```

### Registering a source for a summary report

To make the browser generate a summary report when a trigger is matched to a source, you need to include some additional fields, _in addition_ to those included in an event-level report.

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://advertiser.example",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",

    aggregation_keys: {
      campaignCounts: "0x159",
      geoValue: "0x5",
    },
    aggregatable_report_window: "86400",
  }),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Attribution-Reporting-Eligible")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
