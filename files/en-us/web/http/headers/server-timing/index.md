---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
page-type: http-header
browser-compat: http.headers.Server-Timing
---

{{HTTPSidebar}}

The HTTP **`Server-Timing`** {{Glossary("response header")}} communicates one or more performance metrics about the request-response cycle to the user agent.
It is used to surface backend server timing metrics (for example, database read/write, CPU time, file system access, etc.) in the developer tools in the user's browser or in the {{domxref("PerformanceServerTiming")}} interface.

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
  </tbody>
</table>

## Syntax

```http
// A single metric
Server-Timing: <timing-metric>

// Multiple metrics as a comma-separated list
Server-Timing: <timing-metric>, <timing-metric>
```

A `<timing-metric>` has a name, and may include an optional duration and an optional description.
For example:

```http
// A metric with a name only
Server-Timing: missedCache

// A metric with a duration
Server-Timing: cpu;dur=2.4

// A metric with a description and duration
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with duration values
Server-Timing: db;dur=53, app;dur=47.2
```

## Directives

- `<timing-metric>`
  - : A comma-separated list of one or more metrics with the following components separated by semi-colons:
    - `<name>`
      - : A name component as a token (cannot contain spaces or special characters).
    - `<duration>` {{optional_inline}}
      - : A duration component consisting of the string `dur`, followed by `=`, followed by a value, like `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : A description component consisting of the string `desc`, followed by `=`, followed by a value as a token or a quoted string, like `desc=prod` or `desc="DB lookup"`.

The specification advises that names and descriptions should be kept as short as possible (use abbreviations and omit optional values where possible) to minimize the HTTP overhead.

## Description

### Privacy and security

The `Server-Timing` header may expose potentially sensitive application and infrastructure information.
Consider to control which metrics are returned when and to whom on the server side.
For example, you could only show metrics to authenticated users and nothing to the public.

### PerformanceServerTiming interface

In addition to having `Server-Timing` header metrics appear in the developer tools of the browser, the {{domxref("PerformanceServerTiming")}} interface enables tools to automatically collect and process metrics from JavaScript. This interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. The interface is only available in secure contexts (HTTPS) in some browsers.

The components of the `Server-Timing` header map to the {{domxref("PerformanceServerTiming")}} properties as follows:

- `"name"` -> {{domxref("PerformanceServerTiming.name")}}
- `"dur"` -> {{domxref("PerformanceServerTiming.duration")}}
- `"desc"` -> {{domxref("PerformanceServerTiming.description")}}

## Examples

### Sending a metric using the Server-Timing header

The following response includes a metric `custom-metric` with a duration of `123.45` milliseconds, and a description of "My custom metric":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing as HTTP trailer

In the following response, the {{HTTPHeader("Trailer")}} header is used to indicate that a `Server-Timing` header will follow the response body.
A metric `custom-metric` with a duration of `123.4` milliseconds is sent.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Only the browser's DevTools can use the `Server-Timing` header as a HTTP trailer to display information in the Network -> Timings tab.
> The Fetch API cannot access HTTP trailers.
> See [Browser compatibility](#browser_compatibility) for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Trailer")}} header
