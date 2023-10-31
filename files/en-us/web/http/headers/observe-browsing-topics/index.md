---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Observe-Browsing-Topics
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Observe-Browsing-Topics`** response header is used to mark topics sent by {{httpheader("Sec-Browsing-Topics")}} as observed in the response to the request. The browser will then use those topics to calculate topics of interest for a user for future epochs.

See the [Topics API](/en-US/docs/Web/API/Topics_API) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Observe-Browsing-Topics: ?1
```

### Directives

- `?1`
  - : A character sequence declaring that topics sent by {{httpheader("Sec-Browsing-Topics")}} in the corresponding request are observed. The browser will then use those topics to calculate topics of interest for a user for future epochs.

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
