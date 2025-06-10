---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
page-type: http-header
browser-compat: http.headers.Strict-Transport-Security
---

{{HTTPSidebar}}

The HTTP **`Strict-Transport-Security`** {{Glossary("response header")}} (often abbreviated as {{Glossary("HSTS")}}) informs browsers that the host should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be upgraded to HTTPS.
Additionally, on future connections to the host, the browser will not offer the user a means to bypass secure connection errors, such as an invalid certificate.

> [!NOTE]
> HSTS should be used in addition to configuring an HTTP to HTTPS ({{HTTPStatus("301")}}) redirect on your server.
> The initial HTTP connection is still vulnerable to a man-in-the-middle attack, but this can be mitigated using a browser HSTS preload list.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## Directives

- `max-age=<expire-time>`
  - : The time, in seconds, that the browser should remember that a host is only to be accessed using HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : If this optional directive is specified, the HSTS policy applies to all subdomains of the host's domain as well.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : See [Preloading Strict Transport Security](#preloading_strict_transport_security) for details. When using `preload`, the `max-age` directive must be at least `31536000` (1 year), and the `includeSubDomains` directive must be present.
    Not part of the specification.

## Description

The `Strict-Transport-Security` header informs the browser that all connections to the host must use HTTPS.

### How the browser handles Strict Transport Security

When an HTTPS response includes the `Strict-Transport-Security` header, the browser adds the host's domain name
to its persistent list of non-expired Known HSTS Hosts.
If the domain name is already in the list, the expiration time and `includeSubDomains` directive are updated.
Hosts are identified by their domain names, not including the port. An IP address cannot be a Known HSTS Host.

Every time the browser loads a URL, it first checks the domain name against its Known HSTS Hosts list.
If the domain name equals (case insensitive) a Known HSTS Host or is a subdomain of one that specified `includeSubDomains`,
then the browser uses HTTPS, even if the URL specified the `http` scheme or omitted a scheme.

If a TLS warning or error, such as an invalid certificate, occurs when connecting to a Known HSTS Host,
the browser does not offer the user a way to proceed or "click through" the error message, which would compromise
the intention of strict security.

When the expiration time specified by the `Strict-Transport-Security` header elapses, the next request to the host via HTTP will proceed with insecure HTTP instead of automatically using HTTPS. Whenever the `Strict-Transport-Security` header is delivered to the browser, it will update the expiration time for that host.
Using a fixed value for `max-age` can prevent the HSTS policy from expiring, as each subsequent response will push the expiration farther into the future.
Should it be necessary to disable Strict Transport Security, setting `max-age=0` (over an HTTPS connection) will immediately expire the HSTS policy, allowing access via HTTP.

> [!NOTE]
> The `Strict-Transport-Security` header is _ignored_ by the browser when the request uses HTTP.
> Once your host is accessed over HTTPS with no certificate errors, the browser knows your site is HTTPS-capable and will honor the `Strict-Transport-Security` header.
> Browsers do this as attackers may intercept insecure HTTP connections and inject or remove the header.

### Threat models

HSTS mitigates several threat models. If an otherwise secure page accidentally includes a URL (such as for an image or script) with the `http` scheme, the insecure connection could expose cookies to eavesdroppers on the network and allow malicious response payload injection. In another scenario, a user opens an insecure URL, such as `http://www.example.com/`. Even if the server redirects the browser to HTTPS, a man-in-the-middle attack on the initial insecure request could direct visitors to a malicious site.

With HSTS, as long as at least one secure connection has been made to the host in the past and the `Strict-Transport-Security` response header was present, the browser remembers it as a Known HSTS Host, and the connection uses HTTPS before a man-in-the-middle attack has a chance to occur. However, the HSTS header alone cannot protect an initial insecure request if the browser has never before connected to the host and so does not have the domain name in its Known HSTS Hosts list. [Preloading](#preloading_strict_transport_security) can mitigate this problem. For the same reason, it is still important to specify the `https` scheme in URLs even when using HSTS.

### Strict Transport Security example scenario

1. At home, you visit `http://example.com/` for the first time.
2. Since the URL scheme is `http` and the browser does not have it in its Known HSTS Hosts list, the connection uses insecure HTTP.
3. The server responds with a `301 Moved Permanently` redirect to `https://example.com/`.
4. The browser makes a new request, this time using HTTPS.
5. The response, made via HTTPS, includes the header:

   ```http
   Strict-Transport-Security: max-age=15768000; includeSubDomains
   ```

   Your browser remembers `example.com` as a Known HSTS Host, and that it specified `includeSubDomains`.

6. A few weeks later, you are at the airport and decide to use the free Wi-Fi. But unknowingly, you connect to a rogue access point running on an attacker's laptop.
7. You open your browser to `http://login.example.com/`. Because your browser remembers `example.com` as a Known HSTS Host and the `includeSubDomains` directive was used, your browser uses HTTPS.
8. The attacker intercepts the request with a fake HTTPS server, but does not have a valid certificate for the domain.
9. Your browser displays an invalid certificate error, and does not allow you to bypass it, thus preventing you from giving your password to the attacker.

### Preloading Strict Transport Security

Google maintains [an HSTS preload service](https://hstspreload.org/).
By following the guidelines and successfully submitting your domain, you can ensure that browsers will connect to your domain only via secure connections.
While the service is hosted by Google, all browsers are using this preload list.
However, it is not part of the HSTS specification and should not be treated as official.

- Information regarding the HSTS preload list in Chrome: https://www.chromium.org/hsts/
- Consultation of the Firefox HSTS preload list: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Examples

### Using Strict-Transport-Security

All present and future subdomains will be HTTPS for a `max-age` of 1 year.
This blocks access to pages or subdomains that can only be served over HTTP.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Although a `max-age` of 1 year is acceptable for a domain, two years is the recommended value as explained on https://hstspreload.org.

In the following example, `max-age` is set to 2 years, and is suffixed with `preload`, which is necessary for inclusion in all major web browsers' HSTS preload lists, like Chromium, Edge, and Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) on blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) on hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) cheatsheet on owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) on Wikipedia
- [HSTS preload service](https://hstspreload.org/)
