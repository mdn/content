---
title: PAC
slug: Glossary/PAC
tags:
  - CodingScripting
  - Glossary
---
A Proxy Auto-Configuration file (**PAC file**) is a file which contains a function, `FindProxyForURL()`, which is used by the browser to determine whether requests (including HTTP, HTTPS, and FTP) should go directly to the destination or if they need to be forwarded through a web proxy server.

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host)
```

See [Proxy Auto-Configuration (PAC) file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) for details about how these are used and how to create new ones.

## See also

- [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) on Wikipedia
- [Proxy Auto-Configuration file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) on MDN
