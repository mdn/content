---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
page-type: http-header
browser-compat: http.headers.Strict-Transport-Security
sidebar: http
---

The HTTP **`Strict-Transport-Security`** {{Glossary("response header")}} (often abbreviated as {{Glossary("HSTS")}}) informs browsers that the {{Glossary("host")}} should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be upgraded to HTTPS.
Additionally, on future connections to the host, the browser will not allow the user to bypass secure connection errors, such as an invalid certificate.
HSTS identifies a host by its domain name only.

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
  - : If this directive is specified, the HSTS policy applies to all subdomains of the host's domain as well.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : See [Preloading Strict Transport Security](#preloading_strict_transport_security) for details. When using `preload`, the `max-age` directive must be at least `31536000` (1 year), and the `includeSubDomains` directive must be present.

## Description

The `Strict-Transport-Security` header informs the browser that all connections to the host must use HTTPS.
Although it is a response header, it does not affect how the browser handles the current response, but rather
how it makes future requests.

When an HTTPS response includes the `Strict-Transport-Security` header, the browser adds the host's domain name
to its persistent list of HSTS hosts.
If the domain name is already in the list, the expiration time and `includeSubDomains` directive are updated.
The host is identified only by its domain name. An IP address cannot be an HSTS host.
HSTS applies to all ports of the host, regardless of what port was used for the request.

Before loading an `http` URL, the browser checks the domain name against its HSTS hosts list.
If the domain name is a case insensitive match for an HSTS host or is a subdomain of one that specified `includeSubDomains`,
then the browser replaces the URL scheme with `https`.
If the URL specifies port 80, the browser changes it to 443.
Any other explicit port number remains unchanged, and the browser connects to that port using HTTPS.

If a TLS warning or error, such as an invalid certificate, occurs when connecting to an HSTS host,
the browser does not offer the user a way to proceed or "click through" the error message, which would compromise
the intention of strict security.

> [!NOTE]
> The host must send the `Strict-Transport-Security` header over HTTPS only, not insecure HTTP.
> Browsers ignore the header if sent over HTTP to prevent a [manipulator-in-the-middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM)
> from altering the header to expire prematurely or adding it for a host that doesn't support HTTPS.

### Expiration

Every time the browser receives a `Strict-Transport-Security` header, it updates the host's HSTS expiration time by
adding `max-age` to the current time.
Using a fixed value for `max-age` can prevent HSTS from expiring, as each subsequent response will push the expiration farther into the future.

If the `Strict-Transport-Security` header is missing in a response from a host that previously sent one, the previous header remains in effect until its expiration time.

To disable HSTS, set `max-age=0`.
This only takes effect once the browser makes a secure request and receives the response header.
By design, you cannot disable HSTS over insecure HTTP.

### Subdomains

The `includeSubDomains` directive instructs the browser to apply a domain's HSTS policy to its subdomains as well.
An HSTS policy for `secure.example.com` with `includeSubDomains` also applies to `login.secure.example.com`
and `admin.login.secure.example.com`. But it does not apply to `example.com` or `insecure.example.com`.

Each subdomain host should include `Strict-Transport-Security` headers in its responses even if the
superdomain uses `includeSubDomains`, because a browser may contact a subdomain host before the superdomain.
For example, if `example.com` includes the HSTS header with `includeSubDomains`, but all existing links
go directly to `www.example.com`, the browser will never see `example.com`'s HSTS header.
Therefore, `www.example.com` also should send HSTS headers.

The browser stores the HSTS policy for each domain and subdomain independently, regardless of the `includeSubDomains` directive.
If both `example.com` and `login.example.com` send HSTS headers, the browser stores two separate HSTS policies,
and they can expire independently. If `example.com` used `includeSubDomains`, then `login.example.com` remains covered
if either one of the policies expires.

If `max-age=0`, `includeSubDomains` has no effect, since the domain that specified `includeSubDomains` is
immediately deleted from the HSTS hosts list; this does not delete separate HSTS policies of each subdomain.

### Insecure HTTP requests

If the host accepts insecure HTTP requests, it should respond with a permanent redirect (such as status code {{HTTPStatus("301")}})
having an `https` URL in the {{HTTPHeader("Location")}} header.
The redirect must not include the `Strict-Transport-Security` header since the request used insecure HTTP
but the header must be sent via HTTPS only.
After the browser follows the redirect and makes a new request using HTTPS, the response
should include the `Strict-Transport-Security` header to ensure that future attempts to load an `http` URL
will use HTTPS immediately, without requiring a redirect.

One weakness of HSTS is that it does not take effect until the browser has made at least one secure connection to the host
and received the `Strict-Transport-Security` header.
If the browser loads an insecure `http` URL prior to knowing that the host is an HSTS host, the initial request is
vulnerable to network attacks.
[Preloading](#preloading_strict_transport_security) mitigates this problem.

### Strict Transport Security example scenario

1. At home, the user visits `http://example.com/` for the first time.
2. Since the URL scheme is `http` and the browser does not have it in its HSTS hosts list, the connection uses insecure HTTP.
3. The server responds with a `301 Moved Permanently` redirect to `https://example.com/`.
4. The browser makes a new request, this time using HTTPS.
5. The response, made via HTTPS, includes the header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   The browser remembers `example.com` as an HSTS host, and that it specified `includeSubDomains`.

6. A few weeks later, the user is at the airport and decides to use the free Wi-Fi. But unknowingly, they connect to a rogue access point running on an attacker's laptop.
7. The user opens `http://login.example.com/`. Because the browser remembers `example.com` as an HSTS host and the `includeSubDomains` directive was used, the browser uses HTTPS.
8. The attacker intercepts the request with a fake HTTPS server, but does not have a valid certificate for the domain.
9. The browser displays an invalid certificate error, and does not allow the user to bypass it, thus preventing them from giving their password to the attacker.

### Preloading Strict Transport Security

Google maintains [an HSTS preload service](https://hstspreload.org/).
By following the guidelines and successfully submitting your domain, you can ensure that browsers will connect to your domain only via secure connections.
While the service is hosted by Google, all browsers are using this preload list.
However, it is not part of the HSTS specification and should not be treated as official.

- Information regarding the HSTS preload list in Chrome: https://www.chromium.org/hsts/
- Consultation of the Firefox HSTS preload list: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

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
