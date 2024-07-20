---
title: "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## What went wrong?

The origin making the request does not match the origin permitted by the {{HTTPHeader("Access-Control-Allow-Origin")}} header. This error can also occur if the response includes more than one `Access-Control-Allow-Origin` header.

If the service your code is accessing uses a CORS request under your control, make
sure it is configured to include your origin in its `Access-Control-Allow-Origin` header. In addition, confirm that only one such header is
included in responses, and that it includes only a single origin.

For example, in Apache, add a line such as the following to the server's configuration
(within the appropriate `<Directory>`, `<Location>`,
`<Files>`, or `<VirtualHost>` section). The
configuration is typically found in a `.conf` file (`httpd.conf`
and `apache.conf` are common names for these), or in an
`.htaccess` file.

> **Warning:** You must include the HTTPS or HTTP protocol as part of the origin.

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

For Nginx, the command to set up this header is:

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
