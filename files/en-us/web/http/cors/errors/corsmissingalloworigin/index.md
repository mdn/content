---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' missing'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
tags:
  - CORS
  - CORSMissingAllowOrigin
  - Cross-Origin
  - Error
  - HTTP
  - HTTPS
  - Messages
  - Reasons
  - Security
  - console
  - troubleshooting
---
{{HTTPSidebar}}

## Reason

```
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## What went wrong?

The response to the {{Glossary("CORS")}} request is missing the required
{{HTTPHeader("Access-Control-Allow-Origin")}} header, which is used to determine whether
or not the resource can be accessed by content operating within the current origin.

If the server is under your control, add the origin of the requesting site to the set
of domains permitted access by adding it to the `Access-Control-Allow-Origin`
header's value.

For example, to allow a site at https\://amazing.site to access the resource using CORS,
the header should be:

```
Access-Control-Allow-Origin: https://amazing.site
```

You can also configure a site to allow any site to access it by using the
`*` wildcard. You should only use this for public APIs. Private APIs should
never use `*`, and should instead have a specific domain or domains set. In
addition, the wildcard only works for requests made with the
{{htmlattrxref("crossorigin")}} attribute set to `anonymous`, and it prevents
sending credentials like cookies in requests.

```
Access-Control-Allow-Origin: *
```

> **Warning:** Using the wildcard to allow all sites to access a private
> API is a bad idea.

To allow any site to make CORS requests _without_ using the `*`
wildcard (for example, to enable credentials), your server must read the value of the
request's `Origin` header and use that value to set
`Access-Control-Allow-Origin`, and must also set a `Vary: Origin`
header to indicate that some headers are being set dynamically depending on the origin.

The exact directive for setting headers depends on your web server. In Apache, add a
line such as the following to the server's configuration (within the appropriate
`<Directory>`, `<Location>`,
`<Files>`, or `<VirtualHost>` section). The
configuration is typically found in a `.conf` file (`httpd.conf`
and `apache.conf` are common names for these), or in an
`.htaccess` file.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

For Nginx, the command to set up this header is:

```
add_header 'Access-Control-Allow-Origin' 'origin-list';
```

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
