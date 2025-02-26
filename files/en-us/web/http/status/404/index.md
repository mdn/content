---
title: 404 Not Found
slug: Web/HTTP/Status/404
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.404
---

{{HTTPSidebar}}

The HTTP **`404 Not Found`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server cannot find the requested resource.
Links that lead to a 404 page are often called broken or dead links and can be subject to [link rot](https://en.wikipedia.org/wiki/Link_rot).

A 404 status code only indicates that the resource is missing without indicating if this is temporary or permanent.
If a resource is permanently removed, servers should send the {{HTTPStatus("410", "410 Gone")}} status instead.

404 errors on a website can lead to a poor user experience for your visitors, so the number of broken links (internal and external) should be minimized to prevent frustration for readers.
Common causes of 404 responses are mistyped URLs or pages that are moved or deleted without redirection.
For more information, see the [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections) guide.

## Status

```http
404 Not Found
```

## Examples

### Page not found

Fetching a non-existent page may look like the following request:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

The server returns a response similar to this:

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

### Custom error page in Apache

For the Apache server, you can specify a path to a custom 404 page in a `.htaccess` file.
The example below uses `notfound.html` as a page to show visitors on 404s, although a common approach is to name the file `404.html` or `404.php` (depending on the server-side technology) at the top-level of the server:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Custom 404 page design is a good thing in moderation.
> Feel free to make your 404 page humorous and human, but don't confuse your visitors as to why they are seeing something unexpected.
>
> For an example of a custom 404 page, see the [KonMari 404 page](https://konmari.com/404).

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("410")}}
- [Wikipedia: HTTP 404](https://en.wikipedia.org/wiki/HTTP_404)
