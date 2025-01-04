---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Register-Trigger
---

{{HTTPSidebar}}{{seecompattable}}

The HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response header")}} registers a page feature as an [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers). This header is included as part of a response to a request that contains the {{HTTPHeader("Attribution-Reporting-Eligible")}} header.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

> [!NOTE]
> If the calling site does not have the Attribution Reporting API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), the `Attribution-Reporting-Register-Trigger` header is ignored and attribution triggers are not registered.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
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
          - : An array containing one or more key values for the data.
    - `"aggregatable_values"`
      - : An object containing properties representing a value for each data point defined in `"aggregatable_trigger_data"`. In each case, the property name is equal to the name defined in `"source_keys"`, and the property value is whatever arbitrary value you require.
    - `"debug_key"` {{optional_inline}}
      - : A number representing a debug key. Set this if you want to generate a [debug report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) alongside the associated attribution report.
    - `"debug_reporting"` {{optional_inline}}
      - : A boolean value. If a `debug_key` is set, set this to `true` to specify that the generated debug report should be a verbose debug report.
    - `"filters"` {{optional_inline}}
      - : An object containing custom data that can be used to filter which triggers generate reports. See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more details.
    - `"event_trigger_data"`

      - : An object representing data about the trigger. Available sub-fields are as follows:

        - `"trigger_data"`

          - : A string representing data that describes the trigger, which is typically used to indicate events such as "user added item to shopping cart" or "user signed up to mailing list". This value will be included in the generated event-level report, if any, although it will be subject to modification based on the attributed source's [`"trigger_data_matching"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) field.

            > [!NOTE]
            > The values used to represent each event, and the number of elements in the array, are completely arbitrary and defined by you as the developer. The array may contain values that are not used, but values must be present in the array to be attributed to the source by the browser when a trigger is registered.

        - `"priority"` {{optional_inline}}
          - : A string representing a priority value for the attribution trigger. By default, triggers are attributed to the most recent matching source. For both event-level and summary reports you set a higher priority number to make the trigger match older sources. For example, a value of `2` takes priority over the default value of `1`. See [Report priorities and limits](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) for more information.
        - `"deduplication_key"` {{optional_inline}}
          - : A string representing a unique key that can be used to prevent attributions from being duplicated — for example if a user were to add the same item to a shopping cart multiple times. See [Prevent duplication in reports](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) for more information.
        - `"filters"` {{optional_inline}}
          - : An object containing filters that perform selective filtering to set `"trigger_data"`, `"priority"`, and `"deduplication_key"` based on the `filter_data` set in a corresponding {{HTTPHeader("Attribution-Reporting-Register-Source")}} header. See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more information.

## Examples

### Registering a trigger for an event-level report

A Node.js server might set the `Attribution-Reporting-Register-Trigger` response header as follows to register a trigger intended to match an event-level report attribution source:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    "event_trigger_data": [
      {
        "trigger_data": "4",
        "priority": "1000000000000",
        "deduplication_key": "2345698765",
      },
    ],
    "debug_key": "1115698977",
  });
);
```

### Registering a trigger for a summary report

When registering a trigger intended to match with a summary report attribution source, you need to include the following fields:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
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
    },
    "debug_key": "1115698977"
  });
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
