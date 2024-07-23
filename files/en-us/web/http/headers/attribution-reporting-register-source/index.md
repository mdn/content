---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Attribution-Reporting-Register-Source
---

{{HTTPSidebar}}{{seecompattable}}

The **`Attribution-Reporting-Register-Source`** header registers a page feature as an [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources). This is included as part of a response to a request that included an {{httpheader("Attribution-Reporting-Eligible")}} header. It provides the information that the browser should store when the attribution source is interacted with. The information you include in this header also determines which types of reports the browser can generate.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

> **Note:** If the calling site does not have the Attribution Reporting API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), the `Attribution-Reporting-Register-Source` header is ignored and attribution sources are not registered.

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

  - : A JSON string providing the information that the browser should store when the attribution source is interacted with. Available fields are as follows:

    - `"source_event_id"` {{optional_inline}}
      - : A string representing an ID for the attribution source, which can be used to map it to other information when the attribution source is interacted with, or aggregate information at the reporting endpoint. The string must consist solely of a base-10-formatted 64-bit unsigned integer.
    - `"destination"`
      - : A single string or an array of 1–3 strings. These strings must contain a complete URL corresponding to the site (scheme + [eTLD+1](/en-US/docs/Glossary/eTLD)) on which a trigger is expected to occur. These are used to match the attribution trigger to the source when a trigger is interacted with.
    - `"aggregation_keys"` {{optional_inline}}
      - : An object containing user-provided keys representing different data points to aggregate report values under.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : A string representing a time in seconds after which trigger data will no longer be included in generated aggregatable reports (this is called a **report window**). If not set, this defaults to the `"expiry"` value.
    - `"debug_key"` {{optional_inline}}
      - : A base-10-formatted 64-bit unsigned integer representing a debug key. Set this if you want to generate a [debug report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) alongside the associated attribution report.
    - `"debug_reporting"` {{optional_inline}}
      - : A boolean value. If a `debug_key` is set, set this to `true` to specify that the generated debug report should be a verbose debug report.
    - `"event_level_epsilon"` {{optional_inline}}
      - : A number equal to or greater than `0`, which controls the amount of [noise added to reports](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Lower values of epsilon result in more noise and therefore provide greater privacy protection. The maximum and default values will vary across implementations; Chrome for example has a maximum and default value of `14`.
    - `"event_report_window"` {{optional_inline}}
      - : A string representing a time in seconds, after which subsequent triggers won't be attributable to this source for the purpose of producing event-level reports (this is called a **report window**). If not set, the event report window falls back to the `"expiry"` value.
        > **Note:** If `"event_report_window"` is specified, `"event_report_windows"` cannot be specified, otherwise the source registration will fail.
    - `"event_report_windows"` {{optional_inline}}
      - : An object representing a series of report windows, starting at `"start_time"`, with reports for this source being delivered after each specified end time in `"end_times"`. This can be used to vary the time of report delivery across multiple reports. If not set, the event report window falls back to the `"expiry"` value. Properties are as follows:
        - `"start_time"` {{optional_inline}}: A non-negative number specifying the start time for the reporting windows. If not specified, it defaults to `0`.
        - `"end_times"`: An array of positive numbers specifying end times for subsequent report windows. The values must be increasing, and greater than `"start_time"`.
          > **Note:** If `"event_report_windows"` is specified, `"event_report_window"` cannot be specified, otherwise the source registration will fail.
    - `"expiry"` {{optional_inline}}
      - : A string representing an expiry time in seconds for the attribution source, after which it will no longer be active (i.e. subsequent triggers won't be attributable to this source). The maximum allowable expiry time is 2592000 seconds (30 days), which is also the default value if `"expiry"` is not explicitly set.
    - `"filter_data"` {{optional_inline}}
      - : An object defining custom data that can be used to filter which conversions generate reports. See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : A number between `0` and `20`, inclusive, which specifies the total number of event-level reports this source can generate. After this maximum is reached, the source is no longer capable of producing any new data. If not specified, `"max_event_level_reports"` defaults to `3` for navigation-based sources and `1` for event-based (image- or script-based) sources.
    - `"priority"` {{optional_inline}}
      - : A string representing a priority value for the attribution source. By default, conversions are attributed to the most recent matching source. For both event-level and summary reports you set a higher priority number to prioritise specific sources. For example, a value of `2` takes priority over the default value of `1`. See [Report priorities and limits](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) for more information.
    - `"trigger_data"` {{optional_inline}}

      - : An array of 32-bit unsigned integers representing data that describes the different trigger events that could match this source. For example, "user added item to shopping cart" or "user signed up to mailing list" could be actions happening at the trigger site that could match this source and indicate a conversion of some kind that the advertiser is trying to measure. These must be matched against `"trigger_data"` specified in [triggers](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) for event-level attribution to take place. If omitted, `"trigger_data"` defaults to `[0, 1, 2, 3, 4, 5, 6, 7]` for navigation-based sources and `[0, 1]` for event-based (image- or script-based) sources.

        > **Note:** The values used to represent each event, and the number of elements in the array, are completely arbitrary and defined by you as the developer. The array may contain values that are not used, but values must be present in the array to be attributed to the source by the browser when a trigger is registered.

    - `"trigger_data_matching"` {{optional_inline}}

      - : A string that specifies how the `"trigger_data"` from the trigger is matched against the source's `"trigger_data"`. Possible values are:

        - `"exact"`: The `"trigger_data"` from the trigger must exactly match a value contained in the source's `"trigger_data"`; if there is no such match, no event-level attribution takes place.
        - `"modulus"`: In this case, the following calculation is performed — `d % allowedValues.size` — where `d` is the `"trigger_data"` from the trigger, and `allowedValues` is the sequence of values in the source's `"trigger_data"` array. If the result of this calculation matches a value in the source's `"trigger_data"` array, the match is a success. In such a case, the value will always match, unless `allowedValues` is empty.

        `"modulus"` mode exists primarily for backwards compatibility with the API's behavior before `"exact"` was introduced, and as such, you'd be unlikely to use it. It is still useful in particular cases that require a very specific kind of compression resulting in smaller registration headers. This can be required when using complex filtering logic that needs to set different trigger data based on the source type according to the maximum number of source `"trigger_data"` items.

        > **Note:** If `"modulus"` is used, the source's `"trigger_data"` must form a contiguous sequence of integers starting at 0. If the trigger data does not form such a sequence, an error occurs.

        If not specified, `"trigger_data_matching"` defaults to `"modulus"`. Again, the reason for this is backwards compatibility: omitting the `"trigger_data_matching"` field needs to result in the same behavior observed before this field was introduced.

## Examples

### Registering a source for an event-level report

A Node.js server might set the `Attribution-Reporting-Register-Source` response header as follows to make a browser generate an event-level report when a trigger is matched to a source:

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",
  }),
);
```

### Registering a source for a summary report

To make the browser generate a summary report when a trigger is matched to a source, you need to include some extra fields, _in addition_ to those required for event-level report generation.

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
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
