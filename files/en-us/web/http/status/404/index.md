---
title: 404 Not Found
slug: Web/HTTP/Status/404
tags:
  - Browser
  - Client error
  - HTTP
  - Status code
browser-compat: http.status.404
---
{{HTTPSidebar}}

The HTTP **`404 Not Found`** client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to [link rot](https://en.wikipedia.org/wiki/Link_rot).

A 404 status code does not indicate whether the resource is temporarily or permanently missing. But if a resource is permanently removed, a {{HTTPStatus("410")}} (Gone) should be used instead of a 404 status.

## Status

```
404 Not Found
```

## Custom error pages

Many web sites customize the look of a 404 page to be more helpful to the user and provide guidance on what to do next. Apache servers can be configured using an `.htaccess` file and a code snippet like the following example.

```
ErrorDocument 404 /notfound.html
```

For an example of a custom 404 page, see [MDN's 404 page](/en-US/404).

> **Note:** Custom design is a good thing, in moderation. Feel free to make your 404 page humorous and human, but don't confuse your users.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("410")}}
- {{interwiki("wikipedia", "HTTP_404", "Wikipedia: HTTP 404")}}
