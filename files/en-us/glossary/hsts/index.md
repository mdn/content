---
title: HSTS
slug: Glossary/HSTS
tags:
  - HTTP
  - Security
---
**HTTP Strict Transport Security** lets a web site inform the browser that it should never load the site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. It consists in one HTTP header, {{HTTPHeader("Strict-Transport-Security")}}, sent by the server with the resource.

In other words, it tells the browser that changing the protocol from HTTP to HTTPS in a URL works (and is more secure) and asks the browser to do it for every request.

## See also

- {{HTTPHeader("Strict-Transport-Security")}}
- OWASP Article: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
