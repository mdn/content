---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.451
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`451 Unavailable For Legal Reasons`** client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.

## Status

```
451 Unavailable For Legal Reasons
```

## Example

This example response is taken from the IETF RFC (see below) and contains a reference to {{interwiki("wikipedia", "Monty_Python's_Life_of_Brian", "Monty Python's Life of Brian")}}.

> **Note:** the {{HTTPHeader("Link")}} header might also contain a `rel="blocked-by"` relation identifying the entity and implementing blockage, not any other entity mandating it.

Any attempt to identify the entity ultimately responsible for the resource being unavailable belongs in the response body, not in the `rel="blocked-by"` link. This includes the name of the person or organization that made a legal demand resulting in the content's removal.

    HTTP/1.1 451 Unavailable For Legal Reasons
    Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
    Content-Type: text/html

<!---->

    <html>
          <head><title>Unavailable For Legal Reasons</title></head>
          <body>
                <h1>Unavailable For Legal Reasons</h1>
                <p>This request may not be serviced in the Roman Province
                of Judea due to the Lex Julia Majestatis, which disallows
                access to resources hosted on servers deemed to be
                operated by the People's Front of Judea.</p>
         </body>
    </html>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{interwiki("wikipedia", "HTTP_451", "Wikipedia: HTTP 451")}}
- {{interwiki("wikipedia", "Fahrenheit_451", "Wikipedia: Fahrenheit 451")}} (which gave this status code its number)
