---
title: Transport Layer Security (TLS) configuration
slug: Web/Security/Practical_implementation_guides/TLS
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

[Transport Layer Security (TLS)](/en-US/docs/Glossary/TLS) provides assurances about the confidentiality, authenticity, and integrity of all communications, and as such, should be used for all inbound and outbound website communications.

## TLS configuration

### Problem

If data is sent over the web unencrypted, it can be intercepted by third parties, who can access and modify the data — this is often known as a [manipulator-in-the-middle](/en-US/docs/Glossary/MitM) (MiTM) attack. MiTM attacks have severe consequences for the security of your system.

All requests and responses should therefore be sent over HTTPS, which uses TLS to encrypt the data. The modern web practically enforces this — all browsers are moving towards requiring [HTTPS](/en-US/docs/Glossary/HTTPS) by default, and many web features can only be used in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

### Solution

You should set up your server software to use a secure configuration that enforces the use of HTTPS with safe TLS settings. There are several TLS configuration generators available that can help with this, for example, the Mozilla [SSL Configuration Generator](https://ssl-config.mozilla.org/). This tool provides several options based on Mozilla's [TLS guidelines](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Resource loading

### Problem

All resources, regardless of their origin, should be loaded over secure channels.

Secure (HTTPS) websites that attempt to load active resources such as JavaScript over insecure connections (HTTP) will be blocked by browsers. As a result, users will experience degraded UIs and [mixed content](/en-US/docs/Web/Security/Mixed_content) warnings. In the code below, for example, HTTP is being used incorrectly to load a JavaScript library:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Similarly, attempts to load passive content such as images insecurely, although less risky, will still lead to degraded UIs and mixed content warnings, and can allow active attackers to deface websites or phish users. For example:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Although modern browsers make it evident when websites are loading resources insecurely, these errors still occur across the web with significant frequency.

### Solution

Verify that all resources are loaded over HTTPS prior to deployment.

### Examples

In this example, HTTPS is being used correctly to load a JavaScript library:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP redirection

### Problem

Websites may continue to listen on port 80 (HTTP) to prevent connection errors when users type a URL into their address bar, as initial browser connections are often made via HTTP. This poses an initial security risk during the first connection to sites as that connection is not protected by TLS.

In addition, sites should avoid redirections from HTTP on one host to HTTPS on a different host, as this prevents `Strict-Transport-Security` from being set for the first host (see [HTTP Strict Transport Security](#http_strict_transport_security_implementation)).

### Solution

Sites that listen on port 80 should only redirect to the same resource on HTTPS. Once the redirection has occurred, `Strict-Transport-Security` should ensure that all future attempts to access the site via HTTP are automatically redirected to the secure site.

APIs or websites not intended for public access should entirely disable the use of HTTP.

To fix the "different hosts" problem:

1. First, redirect from http://example.com/ to https://example.com/.
2. Next, redirect from https://example.com/ to https://example.org/.

### Examples

Redirect all incoming HTTP requests to the same site and URI on HTTPS, using NGINX:

```text
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Redirect `site.example.org` from HTTP to HTTPS, using Apache:

```text
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## HTTP Strict Transport Security implementation

### Problem

To prevent [manipulator-in-the-middle](/en-US/docs/Glossary/MitM) (MiTM) attacks, browsers should only connect to sites via HTTPS.

### Solution

HTTP [`Strict-Transport-Security`](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) is an HTTP header that notifies browsers to connect to a given site only over HTTPS, even if the originally specified scheme was HTTP. Browsers with HSTS set for a given site will automatically upgrade all requests to HTTPS for that site. HSTS also tells browsers to treat TLS and certificate-related errors more strictly by disabling the ability to bypass the certificate error page.

`Strict-Transport-Security` supports the following directives:

- `max-age`
  - : Sets the duration, in seconds, for which browsers will redirect to HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : Specifies whether browsers should upgrade requests on all subdomains to HTTPS. For example, setting `includeSubDomains` on `domain.example.com` will ensure that requests to `host1.domain.example.com` and `host2.domain.example.com` are upgraded in addition to `domain.example.com`.
- `preload` {{optional_inline}}
  - : Specifies whether the site should be preloaded. Including this directive means your site can be included in the [HSTS preload list](https://hstspreload.org/).

Follow these steps to correctly implement HSTS on your website:

1. Set a `max-age` value of at least six months (`15768000`). Longer periods, such as two years (`63072000`), are recommended. Once this value is set, the site must continue to support HTTPS until the expiry time is reached.
2. If possible, set `includeSubDomains` to improve security on all subdomains. Careful testing is needed when setting this directive because it could disable sites on subdomains that don't yet have HTTPS enabled.
3. If possible, set `preload` to make it possible to include your website in the HSTS preload list. To add it to the list, visit https://hstspreload.org/ and enter your site URL into the form at the top of the page, fixing any issues that it mentions. Web browsers will perform HTTPS upgrades to preloaded sites before receiving the initial `Strict-Transport-Security` header. This prevents [downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack) upon first use and is recommended for all high-risk websites. Note that being included in the HSTS preload list also requires `includeSubDomains` to be set and `max-age` to be set to a minimum of 1 year (`31536000`).

Along with `Strict-Transport-Security`, you should also set the [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) directive in your {{httpheader("Content-Security-Policy")}}. This instructs browsers to treat all of a site's insecure URLs (those served over HTTP) as though they have been served over HTTPS. `upgrade-insecure-requests` is intended for websites with large numbers of insecure legacy URLs that need to be rewritten.

### Examples

It is recommended to connect to a site via HTTPS for two years:

```http
Strict-Transport-Security: max-age=63072000
```

If possible, additionally upgrade subdomain requests to HTTPS and include the site in the preload list:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Also set the `upgrade-insecure-requests` CSP:

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## See also

- [Transport layer security (TLS)](/en-US/docs/Web/Security/Transport_Layer_Security)
- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
- [Weak signature algorithms](/en-US/docs/Web/Security/Weak_Signature_Algorithm)
