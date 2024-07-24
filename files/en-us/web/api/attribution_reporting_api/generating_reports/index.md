---
title: Generating attribution reports
slug: Web/API/Attribution_Reporting_API/Generating_reports
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) reports are generated — both attribution reports and debug reports — and how you can control the generated reports. This includes handling noise, prioritizing reports, filtering reports, and generating debug reports.

## Basic process

When a match occurs between a trigger and a source, the browser generates a report and sends it via an uncredentialed [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request to a specific endpoint on the reporting origin:

- For event-level reports, this is `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- For summary reports, this is `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

The `<reporting-origin>` will be same-origin with the one that registered the source and trigger.

The report data is contained in a JSON structure.

## Event-level reports

Event-level reports are generated and scheduled to be sent at the end of their containing **report window**. The length of the report window is determined by the values set in the [`"event_report_window"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_window) or [`"event_report_windows"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) field set in the source's {{httpheader("Attribution-Reporting-Register-Source")}} header.

If neither of these fields are specified, the report window falls back to the following defaults:

- For [event-based sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources), the default report window ends at the source's expiry, which is set in the `Attribution-Reporting-Register-Source` [`"expiry"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#expiry) field. This defaults to 30 days after registration if not explicitly set.
- For [navigation-based sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources), the default report windows are 2 days, 7 days, and the source's `"expiry"`.

See [Custom report windows](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/custom-report-windows) for more details.

Once an event-level report is received at the appropriate endpoint, how the data is processed, stored, and displayed is completely up to the developer. A typical event-level report might look like this:

```json
{
  "attribution_destination": "https://advertiser.example",
  "source_event_id": "412444888111012",
  "trigger_data": "4",
  "report_id": "123e4567-e89b-12d3-a456-426614174000",
  "source_type": "navigation",
  "randomized_trigger_rate": 0.34,
  "scheduled_report_time": "1692255696",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

The properties are as follows:

- `"attribution_destination"`
  - : A string, or an array of 2–3 strings, depending on whether the source was registered with multiple destinations or not. These strings represent the attribution [`"destination"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) site(s) set in the source registration via the associated {{httpheader("Attribution-Reporting-Register-Source")}} response header.
- `"source_event_id"`
  - : A string representing the attribution source ID. This is equal to the [`"source_event_id"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#source_event_id) set in the source registration (via the associated {{httpheader("Attribution-Reporting-Register-Source")}} response header).
- `"trigger_data"`
  - : A string representing data originating from the attribution trigger, set in the trigger registration (the [`"trigger_data"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) set via the associated {{httpheader("Attribution-Reporting-Register-Trigger")}} response header).
- `"report_id"`
  - : A string representing a [Universally Unique Identifier (UUID)](/en-US/docs/Glossary/UUID) for this report, which can be used to prevent duplicate counting.
- `"source_type"`
  - : A string equal to either `"navigation"` or `"event"`, which respectively indicate whether the associated attribution source is [navigation-based](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources), or [event-based](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources).
- `"randomized_trigger_rate"`
  - : A random number between 0 and 1 indicating how often [noise](#adding_noise_to_reports) is applied for this particular source configuration.
- `"scheduled_report_time"`
  - : A string representing the number of seconds from the Unix Epoch until the browser initially scheduled the report to be sent (to avoid inaccuracies as a result of offline devices reporting late).
- `"source_debug_key"` {{optional_inline}}
  - : A 64 bit unsigned integer representing the debugging key for the attribution source. This mirrors the value set in the associated {{httpheader("Attribution-Reporting-Register-Source")}} header's [`"debug_key"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key) field. See [Debug reports](#debug_reports) for more information.
- `"trigger_debug_key"` {{optional_inline}}
  - : A 64 bit unsigned integer representing the debugging key for the attribution trigger. This mirrors the value set in the associated {{httpheader("Attribution-Reporting-Register-Trigger")}} header's `"debug_key"` field. See [Debug reports](#debug_reports) for more information.

## Summary reports

A summary report is created from several aggregatable reports received at the appropriate endpoint and then [batched](https://developer.chrome.com/docs/privacy-sandbox/summary-reports/#batching) to prepare them to be processed by an [aggregation service](https://developer.chrome.com/docs/privacy-sandbox/aggregation-service/). When this has occurred, how the data is processed, stored, and displayed is completely up to the developer.

An aggregatable report by default is generated and scheduled to be sent after a trigger is interacted with, with a random delay to help fuzz the timings and improve privacy. For a given registered attribution source, attribution source events will be recorded from registration up until the source expires - this is referred to as the **report window**.

The expiry time is defined by the `expiry` value set in the associated {{httpheader("Attribution-Reporting-Register-Source")}} header, which defaults to 30 days after registration if not explicitly set. Bear in mind that the length of the report window can be further modified by setting an `aggregatable_report_window` value in the `Attribution-Reporting-Register-Source` header. See [Custom report windows](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/custom-report-windows) for more details.

> **Note:** To further protect user privacy, the summary report values associated with each attribution source have a finite total value — this is called the **contribution budget**. This value may very across different implementations of the API; in Chrome it is 65,536. Any conversions that would generate reports adding values over that limit are not recorded. Make sure you keep track of the budget and share it between the different metrics you are trying to measure.

A typical aggregatable report might look like this:

```json
{
  "shared_info": "{\"api\":\"attribution-reporting\",\"attribution_destination\":\"https://advertiser.example\",\"report_id\":\"123e4567-e89b-12d3-a456-426614174000\",\"reporting_origin\":\"https://reporter.example\",\"scheduled_report_time\":\"1692255696\",\"source_registration_time\":\"1692230400\",\"version\":\"3\"}",
  "aggregation_service_payloads": [
    {
      "payload": "[base64-encoded HPKE encrypted data readable only by the aggregation service]",
      "key_id": "[string identifying public key used to encrypt payload]",
      "debug_cleartext_payload": "[base64-encoded unencrypted payload]"
    }
  ],
  "aggregation_coordinator_origin": "https://publickeyservice.aws.privacysandboxservices.com",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

The properties are as follows:

- `"shared_info"`
  - : This is a serialized JSON object providing information that an aggregation service will use to put together a summary report. This data is [encrypted](/en-US/docs/Glossary/Encryption) using [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) to prevent tampering. The following properties are represented in the serialized string:
    - `"api"`
      - : A enumerated value representing the API that triggered the report generation. Currently this will always be equal to `"attribution-reporting"`, but it may be extended with additional values to support other APIs in the future.
    - `"attribution_destination"`
      - : A string representing the attribution [`"destination"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) URL set in the source registration (via the associated {{httpheader("Attribution-Reporting-Register-Source")}} response header).
    - `"report_id"`
      - : A string representing a [Universally Unique Identifier (UUID)](/en-US/docs/Glossary/UUID) for this report, which can be used to prevent duplicate counting.
    - `"reporting_origin"`
      - : The origin that triggered the report generation.
    - `"scheduled_report_time"`
      - : A string representing the number of seconds from the Unix Epoch until the browser initially scheduled the report to be sent (to avoid inaccuracies as a result of offline devices reporting late).
    - `"source_registration_time"`
      - : A string representing the number of seconds from the Unix Epoch until the attribution source was registered, rounded down to a whole day.
    - `"version"`
      - : A string representing the version of the API used to generate the report.
- `"aggregation_service_payloads"`

  - : An array of objects representing payload objects containing the histogram contributions used by the aggregation service to assemble the data contained in the report. Currently, only a single payload is supported per report, configured by the browser. In the future multiple, customizable payloads may be supported. Each payload object can contain the following properties:

    - `"payload"`

      - : A [CBOR](https://cbor.io/) map encrypted via [HPKE](https://datatracker.ietf.org/doc/rfc9180/) and then [base64](/en-US/docs/Glossary/Base64)-encoded, with the following structure:

        ```js
        {
          "operation": "histogram",  // Allows for the service to support other operations in the future
          "data": [{
            "bucket": <bucket, encoded as a 16-byte (i.e. 128-bit) big-endian bytestring>,
            "value": <value, encoded as a 4-byte (i.e. 32-bit) big-endian bytestring>
          }, ...]
        }
        ```

    - `"key_id"`
      - : A string identifying the public key used to encrypt the payload.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optional debugging information.

- `"aggregation_coordinator_origin"`
  - : The deployment option for the aggregation service.
- `"source_debug_key"` {{optional_inline}}
  - : A 64 bit unsigned integer representing the debugging key for the attribution source. This mirrors the value set in the associated {{httpheader("Attribution-Reporting-Register-Source")}} header's [`"debug_key"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key) field. See [Debug reports](#debug_reports) for more information.
- `"trigger_debug_key"` {{optional_inline}}
  - : A 64 bit unsigned integer representing the debugging key for the attribution trigger. This mirrors the value set in the associated {{httpheader("Attribution-Reporting-Register-Trigger")}} header's `"debug_key"` field. See [Debug reports](#debug_reports) for more information.

## Adding noise to reports

<!--
THIS INFORMATION IS NOT COMPLETE; WE HAVE PARKED IT FOR NOW SO THAT WE CAN GET THIS DOCUMENTATION PUBLISHED, AND WE WILL DO MORE WORK ON ARA NOISE ON A FUTURE DATE, IF/WHEN THE DEMAND IS THERE

In the case of event-level reports, this is done using a randomized response algorithm, which works like so:

1. When an attribution source is stored, the browser generates a list of all possible sets of reports that could originate from the source's configuration (including the set consisting of no reports).
2. In a small percentage of cases, the browser prevents the source from being attributed and instead picks a random member of that list to use as the source's reports. The probability of this happening is based on the size of that list, the browser's implementation-specific privacy parameters, and the source's chosen [`"event_level_epsilon"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typical settings in the {{httpheader("Attribution-Reporting-Register-Source")}} header might look like so:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

The source `"trigger_data"` can have a maximum of 32 values. Increasing the number of values and `"event_report_windows"` increases the number of elements in the overall report set.

A matching {{httpheader("Attribution-Reporting-Register-Trigger")}} could contain the following:

```json
{
  ...,
  "event_trigger_data": [
    {
      // The value 4 is contained in the source data, therefore a match is possible
      "trigger_data": "4"
    },
  ],
  ...,
}
```

It is however still possible that a match may not occur, based on the randomized response algorithm described above.
-->

Noise is added to reports in order to obscure the output associated with a particular source, and thereby protect user privacy. The exact source data cannot be identified and attributed back to individual users, but the overall patterns taken from the data will still provide the same meaning.

For information on how noise works in attribution reporting, see:

- [Understanding noise in summary reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/understanding-noise/).
- [Data limits and noise](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Working with noise](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/working-with-noise/)

## Report priorities and limits

By default, all attribution sources have the same priority, and the attribution model is last-touch, meaning that a conversion is attributed to the most recent matching source event. For both event-level and aggregatable reports you can change source priority by setting a new value for the `"priority"` field in the associated {{httpheader("Attribution-Reporting-Register-Source")}} header. The default value is `0`; if you set a `"priority"` value of `1` on a particular source, that source will be matched first, before any priority `0` sources. Sources with `"priority": "2"` will be matched before `"priority": "1"` sources, and so on.

Attribution trigger priorities work the same way; you can also set trigger priorities by adding a `"priority"` field to the associated {{httpheader("Attribution-Reporting-Register-Trigger")}} header, but only for event-level reports.

Different source types have different default limits:

- [Navigation-based attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) have a three-report limit by default. For example, say a user clicks an ad and converts four times: they visit the advertiser site homepage, then visit a product page, sign up to the newsletter, and finally make a purchase. The purchase report would be dropped, as it comes from the fourth conversion.
- [Event-based attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) have a one-report limit by default.

> **Note:** The report limit can be adjusted by setting a different number of `"end_times"` in the [`"event_report_windows"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) fields of the associated `Attribution-Reporting-Register-Source` header.

When an attribution is triggered for a given source event, if the maximum number of attributions (three for clicks, one for images/scripts) has been reached for this source the browser will:

- Compare the priority of the new report with the priorities of existing scheduled reports for that same source.
- Delete the report with the lowest priority to schedule the new report instead. If the new report is the one with the lowest priority, it is ignored and you won't receive it.

If no priorities are set, the browser falls back to its default behavior: any conversion happening after the third conversion for clicks or the first conversion for views is dropped.

## Filters

You can define rules for which conversions generate reports using filters. For example, you could choose to only count conversions for a specific product category, and filter out conversions for other categories.

To declare filters:

1. On source registration, add a `filter_data` field to the {{httpheader("Attribution-Reporting-Register-Source")}} header that defines the filter keys you will use to filter the conversions over on the trigger side. These are completely custom fields. For example, to specify only conversions on particular subdomains, and for particular products:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. On trigger registration, add a `filters` field to the {{httpheader("Attribution-Reporting-Register-Trigger")}} header. The following, for example, causes trigger interactions to match the above source registration, as they both contain the `"electronics.megastore"` `"conversion_subdomain"` field. The `"directory"` filter on the other hand is ignored when a match is attempted, because it was not included in the above source registration.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

If the `"filter_data"` and `"filters"` fields contain matching subfields (like `"conversion_subdomain"` in the example above) but none of the subfield's values match, the trigger is ignored, resulting in no match.

### Filtering trigger data

The `event_trigger_data` field in the {{httpheader("Attribution-Reporting-Register-Trigger")}} header can be extended to do selective filtering to set `trigger_data`, `priority`, or `deduplication_key`, based on `filter_data` defined in the {{httpheader("Attribution-Reporting-Register-Source")}} header.

For example:

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": { "source_type": ["navigation"] }
    },
    {
      "trigger_data": "1",
      "filters": { "source_type": ["event"] }
    }
  ]
}
```

> **Note:** `"source_type"` is an automatically populated field available on the source's `"filter_data"`.

> **Note:** `not_filters`, which filters with negation, is also supported.

In this context, `filters` can be an object or an array of objects. When a list is specified, only one dictionary has to match for the trigger to be considered.

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": [
        {
          "product": ["1234"],
          "conversion_subdomain": ["electronics.megastore"]
        },
        {
          "product": ["4321"],
          "conversion_subdomain": ["electronics4.megastore"]
        }
      ]
    }
  ]
}
```

If the filters do not match for any of the event triggers, no event-level report will be created. If the filters match for multiple event triggers, the first matching event trigger is used.

## Debug reports

You can enable debug reports to return troubleshooting information about your attribution reports. These can, for example, be used to check that your setup is working properly and understand gaps in measurement results between your old cookie-based implementation and your new Attribution Reporting implementation. Debug reports are sent immediately; they are not subject to the same scheduling as event-level and summary reports.

There are two different types of debug report:

- **Success debug reports** track successful generation of a specific attribution report. Success debug reports are generated and sent as soon as the corresponding trigger is registered.
- **Verbose debug reports** give you more visibility into the attribution source and attribution trigger events associated with an attribution report. They enable you to ensure that sources were registered successfully, or track missing reports and determine why they're missing (for example due to failure in source or trigger event registration or failure when sending or generating the report). Verbose debug reports are sent immediately upon source or trigger registration.

> **Note:** To use debug reports, the reporting origin needs to set a cookie. If the origin configured to receive reports is a third party, this cookie will be a [third-party cookie](/en-US/docs/Web/Privacy/Third-party_cookies), which means that debug reports will not be available in browsers where third-party cookies are disabled/not available.

### Using debug reports

To use debug reports, you need to:

1. Set the `ar_debug` cookie on your reporting origin. This needs to be present during both source and trigger registration:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Set the `debug_key` field in any {{httpheader("Attribution-Reporting-Register-Source")}} and {{httpheader("Attribution-Reporting-Register-Trigger")}} response headers related to attribution reports that you want to expose debugging information for. Each `debug_key` value must be a 64-bit unsigned integer formatted as a base-10 string. Make each debug key a unique ID — you could for example set each one as Cookie ID + source/trigger timestamp (and capture that same timestamp in your older cookie-based system if you want to compare the two).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > **Note:** Make the source-side debug key different from the `source_event_id`, so that you can differentiate individual reports that have the same source event ID.

3. Optionally, set the `debug_reporting` field to `true`, in both the `Attribution-Reporting-Register-Source` and `Attribution-Reporting-Register-Trigger` headers. If you do this, a verbose debug report will be generated. If you don't do this, a success debug report will be generated that mirrors the type of attribution report you are generating (event-level or aggregatable).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Set up appropriate endpoints to receive the debug reports you want to generate. Debug reports are sent to three separate endpoints in the reporting origin:

   - Endpoint for event-level success debug reports: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpoint for aggregatable success debug reports: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpoint for verbose debug reports: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generated success debug reports are identical to attribution reports, and contain the source-side and the trigger-side debug keys, in the `"source_debug_key"` and `"trigger_debug_key"` fields respectively.

For further information and examples, see:

- [Introduction to debug reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting-debugging/part-1/) on developer.chrome.com (2023)
- [Set up debug reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting-debugging/part-2/) on developer.chrome.com (2023)
- [Debugging cookbook](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting-debugging/part-3/) on developer.chrome.com (2023)
