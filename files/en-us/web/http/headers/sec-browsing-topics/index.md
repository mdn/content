---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-Browsing-Topics
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Sec-Browsing-Topics`** request header sends observed topics along with a request, to be used by an ad server to choose a personalized ad for the current user.

See the [Topics API](/en-US/docs/Web/API/Topics_API) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes (prefix <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Directives

A JSON object representing an array of objects containing the observed topics.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
