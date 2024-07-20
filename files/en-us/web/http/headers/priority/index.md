---
title: Priority
slug: Web/HTTP/Headers/Priority
page-type: http-header
browser-compat: http.headers.Priority
---

{{HTTPSidebar}}

The **`Priority`** HTTP header is sent in requests to indicate a client's preference for the priority order at which the response containing the requested resource should be sent, relative to other resource requests on the same connection. If the header is not specified in the request, a default priority is assumed.

The server is not bound by client prioritization and might only use client requests as hints for its own prioritization process.
For example, a server may know that a specific image is vital for user experience and should be sent at the highest priority.
Server prioritization might also be affected by factors such as network congestion.

This request may be cached, and the server is expected to control the cacheability or the applicability of the cached response using the header fields that control the caching behavior, such as {{HTTPHeader("Cache-Control")}} and {{HTTPHeader("Vary")}}.

The server may also include this header in responses in order to indicate it has an interest in changing the prioritization.
This information can then be used as an input to the prioritization process for caching servers and other servers that are forwarding the response.

> **Note:** This header is one part of the "Extensible Prioritization Scheme for HTTP" defined in {{rfc("9218")}}.
> There are also HTTP/2 and HTTP/3 `PRIORITY_UPDATE` frames that can be used to re-prioritize a resource request after it has been sent.
> The request can be sent in any HTTP version.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
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
Priority: u=<priority>
Priority: i
Priority: u=<priority>, i
```

## Directives

- `u=<priority>`

  - : The "urgency" (`u`) parameter specifies a priority value `<priority>` for the resource.
    The value is an integer between 0 and 7 inclusive, in descending order of priority (0 is the highest urgency).
    The default priority value for requests is 3.
    There is no default priority value for responses: the absence of the header in a response indicates that the server has chosen not to modify the client priority.
    A priority of 7 should only be used for resources that are unlikely to affect the user experience, such as background tasks or delivery of software updates.

    Browsers should request documents that are likely to use other resources at the default priority level.
    The referenced resources should then be requested using values that reflect the relative impact on the user experience of their arrival time.

    Servers may have a different view on the priority than the client, and can respond with a different value in order to provide a priority hint to intermediate servers.
    The intermediate server may take this value into consideration along with the original request priority.
    The absence of the `Priority` header in the response indicates that the server chosen not to modify the client priority.

- `i`

  - : The incremental (`i`) directive, if present, indicates than an HTTP response can be processed incrementally.

    Resources that can be processed incrementally are those where the recipient can potentially do something useful as soon as a chunk arrives, rather than waiting for the complete resource to be available.

    If a browser sets this directive then the server may choose to concurrently serve all incremental requests with the same urgency.
    This distributes the multiple requests across the connection bandwidth, with the result that all the requests start being processed earlier, but take longer in total to complete.

    If the browser does not set this directive then it is indicating that it will not process the resource incrementally.
    Servers should in this case send responses with the same urgency one by one, in the order in which their associated requests were generated.

> **Note:** Servers are expected to ignore directives on this header that they do not understand.
> New directives that are added in future are expected to be compatible with these existing directives so that they can be safely ignored.

## Examples

### Setting resource urgency

The following example shows a request for an HTML file.
The urgency isn't set, and so defaults to 3, with `i` being false.
This is the normal setting for a document that owns other resources.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

The request below is a possible follow-on request for a CSS file used by the HTML.
The urgency is set to 2, indicating that the browser considers it to be quite high priority, but `i` is unset because the CSS file can't be handled incrementally.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> **Note:** The requests above use the human-readable format from the HTTP/2 or HTTP/3 specifications.
> The HTTP/1.1 format used in most of this documentation would be something like:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

A response might look as shown below.
Note that in this case the `priority` is not specified, indicating that the server did not feel that it needed to change the priority for intermediate servers.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Setting the incremental directive

The header below shows a browser request for an image that can be rendered incrementally.
In this case, the priority is set to 4 (lower than the default of 3), and `i` is set to indicate that the client can process the JPG file incrementally.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

The server might send a response like the one below.
In this case the priority is set to 1, indicating that the server has an understanding that particular image should be sent at high priority.

```http
:status: 200
content-type = image/jpeg
content-length = 610
...
priority = u=1, i
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
