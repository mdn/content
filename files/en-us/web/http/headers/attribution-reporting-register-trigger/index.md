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

> **Note:** If the calling site does not have the Attribution Reporting API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), the `Attribution-Reporting-Register-Trigger` header is ignored and attribution triggers are not registered.

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
  - : A JSON string providing data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values. Available fields are as follows:
    - `"aggregatable_trigger_data"`
      - : An array of objects, each one defining an aggregation key to apply to different source keys. Each object contains the following properties:
        - `"key_piece"`
          - : A hexadecimal value representing a key.
        - `"source_keys"`
          - : An array containing one or more values. The first value is a string representing the key name, while subsequent values contain... (EDITORIAL: I'M NOT SURE WHAT THEY ARE. WE COULD DO WITH BETTER DEFINITIONS OF THESE FIELDS. ALSO NEED TO FIND OUT HOW THESE RELATE TO THE AGGREGATION KEYS SET IN THE Attribution-Reporting-Register-Source HEADER)
    - `"aggregatable_values"`
      - : An object containing a property representing a value for each data point defined in `"aggregatable_trigger_data"`. In each case, the property name is equal to the name defined in `"source_keys"`, and the property value is whatever arbitrary value you require. (EDITORIAL: I'M NOT SURE IF THIS IS CORRECT, OR WHAT THESE DO)
    - `"debug_key"` {{optional_inline}}
      - : A number representing a debug key. Set this if you want to generate a [debug report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) alongside the associated attribution report.
    - `"debug_reporting"` {{optional_inline}}
      - : A boolean value. Set this to `true` (in addition to setting a `debug_key`) if you want the generated debug report to be a verbose debug report. If omitted the default value, `false`, will result in the generation of a success debug report.
    - `"filters"` {{optional_inline}}
      - : An object containing custom data that can be used to filter which conversions generate reports. See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more details.
    - `"event_trigger_data"`
      - : An object representing data about the conversion. Note that, because the header value must be a valid JSON string, this object is nested in square brackets. Available sub-fields are as follows:
        - `"trigger_data"`
          - : A string representing unique data that describes the trigger. It usually includes a unique ID representing the trigger that can be used to aggregate data for that trigger together, and may also include other data such as user location ID, purchase amount, etc.
        - `"priority"` {{optional_inline}}
          - : A string representing a priority value for the attribution trigger. By default, conversions are attributed to the most recent matching source. For both event-level and summary reports you set a higher priority number to make the conversion match older sources. For example, a value of `2` takes priority over the default value of `1`. See [Report priorities and limits](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) for more information.
        - `"deduplication_key"` {{optional_inline}}
          - : A string representing a unique key that can be used to prevent reports from being counted multiple times — for example, if a checkout completion page is accidentally reloaded causing an attribution trigger to be fired twice. See [Prevent duplication in reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/prevent-duplication/) for more information.
        - `"filters"` {{optional_inline}}
          - : An object containing filters that perform selective filtering to set `trigger_data` based on the `filter_data` set in a corresponding {{httpheader("Attribution-Reporting-Register-Source")}} header. See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more information.

## Examples

### Registering a trigger for an event-level report

A Node.js server might set the `Attribution-Reporting-Register-Trigger` response header as follows. This is a minimal set of JSON fields required for registering a trigger intended to match with an event-level report aggregation source:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    "event_trigger_data": [
      {
        "trigger_data": "412444888111012",
        "priority": "1000000000000",
        "deduplication_key": "2345698765",
      },
    ],
    "debug_key": "1115698977",
  });
);
```

### Registering a trigger for a summary report

When registering a trigger intended to match with a summary report aggregation source, you need to include some extra fields, _in addition_ to those included in an event-level report.

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    "event_trigger_data": [
      {
        "trigger_data": "412444888111012",
        "priority": "1000000000000",
        "deduplication_key": "2345698765",
      },
    ],
    "debug_key": "1115698977",

    "aggregatable_trigger_data": [
      {
        "key_piece": "0x400",
        "source_keys": ["campaignCounts"]
      },
      {
        "key_piece": "0xA80",
        "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
      }
    ],
    "aggregatable_values": {
      "campaignCounts": 32768,
      "geoValue": 1664
    }
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
