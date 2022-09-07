---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
tags:
  - HSTS
  - HTTP
  - HTTPS
  - Security
  - header
browser-compat: http.headers.Strict-Transport-Security
---
{{HTTPSidebar}}

The HTTP **`Strict-Transport-Security`** response header (often abbreviated as {{Glossary("HSTS")}}) informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.

> **Note:** This is more secure than simply configuring a HTTP to HTTPS (301) redirect on your server, where the initial HTTP connection is still vulnerable to a man-in-the-middle attack.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Directives

- `max-age=<expire-time>`
  - : The time, in seconds, that the browser should remember that a site is only to be accessed using HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : If this optional parameter is specified, this rule applies to all of the site's subdomains as well.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : See [Preloading Strict Transport Security](#preloading_strict_transport_security) for details.
    Not part of the specification.

## Description

If a website accepts a connection through HTTP and redirects to HTTPS, visitors may initially communicate with the non-encrypted version of the site before being redirected, if, for example, the visitor types `http://www.foo.com/` or even just foo.com.
This creates an opportunity for a man-in-the-middle attack.
The redirect could be exploited to direct visitors to a malicious site instead of the secure version of the original site.

The HTTP Strict Transport Security header informs the browser that it should never load a site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead.

> **Note:** The `Strict-Transport-Security` header is _ignored_ by the browser when your site has only been accessed using HTTP.
> Once your site is accessed over HTTPS with no certificate errors, the browser knows your site is HTTPS capable and will honor the `Strict-Transport-Security` header.
> Browsers do this as attackers may intercept HTTP connections to the site and inject or remove the header.

### An example scenario

You log into a free Wi-Fi access point at an airport and start surfing the web, visiting your online banking service to check your balance and pay a couple of bills.
Unfortunately, the access point you're using is actually a hacker's laptop, and they're intercepting your original HTTP request and redirecting you to a clone of your bank's site instead of the real thing. Now your private data is exposed to the hacker.

Strict Transport Security resolves this problem; as long as you've accessed your bank's website once using HTTPS, and the bank's web site uses Strict Transport Security, your
browser will know to automatically use only HTTPS, which prevents hackers from performing this sort of man-in-the-middle attack.

### How the browser handles it

The first time your site is accessed using HTTPS and it returns the `Strict-Transport-Security` header, the browser records this information, so that future attempts to load the site using HTTP will automatically use HTTPS instead.

When the expiration time specified by the `Strict-Transport-Security` header elapses, the next attempt to load the site via HTTP will proceed as normal instead of automatically using HTTPS.

Whenever the Strict-Transport-Security header is delivered to the browser, it will update the expiration time for that site, so sites can refresh this information and prevent the timeout from expiring.
Should it be necessary to disable Strict Transport Security, setting the `max-age` to 0 (over an https connection) will immediately expire the `Strict-Transport-Security` header, allowing access via http.

## Preloading Strict Transport Security

Google maintains [an HSTS preload service](https://hstspreload.org/).
By following the guidelines and successfully submitting your domain, you can ensure that browsers will connect to your domain only via secure connections.
While the service is hosted by Google, all browsers are using this preload list.
However, it is not part of the HSTS specification and should not be treated as official.

- Information regarding the HSTS preload list in Chrome : <https://www.chromium.org/hsts>
- Consultation of the Firefox HSTS preload list : [nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## Examples

All present and future subdomains will be HTTPS for a `max-age` of 1 year.
This blocks access to pages or subdomains that can only be served over HTTP.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

If a `max-age` of 1 year is acceptable for a domain, however, two years is the recommended value as explained on <https://hstspreload.org>.

In the following example, `max-age` is set to 2 years, and is suffixed with `preload`, which is necessary for inclusion in all major web browsers' HSTS preload lists, like Chromium, Edge, and Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Blog post: [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [HSTS preload service](https://hstspreload.org/)
- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
