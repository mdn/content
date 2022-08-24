---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
tags:
  - HTTP
  - Performance
  - Reference
  - header
browser-compat: http.headers.Server-Timing
---
{{HTTPSidebar}}

The **`Server-Timing`** header communicates one or more metrics and descriptions for a given request-response cycle. It is used to surface any backend server timing metrics (e.g. database read/write, CPU time, file system access, etc.) in the developer tools in the user's browser or in the {{domxref("PerformanceServerTiming")}} interface.

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
  </tbody>
</table>

## Syntax

The syntax of the `Server-Timing` header allows you to communicate metrics in different ways: server metric name only, metric with value, metric with value and description, and metric with description.

The specification advises that names and descriptions should be kept as short as possible (use abbreviations and omit optional values where possible) to minimize the HTTP overhead.

```http
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with value
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## Privacy and security

The `Server-Timing` header may expose potentially sensitive application and infrastructure information. Consider to control which metrics are returned when and to whom on the server side. For example, you could only show metrics to authenticated users and nothing to the public.

## PerformanceServerTiming interface

In addition to having `Server-Timing` header metrics appear in the developer tools of the browser, the {{domxref("PerformanceServerTiming")}} interface enables tools to automatically collect and process metrics from JavaScript. This interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. The interface is only available in secure contexts (HTTPS) in some browsers.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceServerTiming")}}
