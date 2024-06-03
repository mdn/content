---
title: Transport Layer Security
slug: Web/Security/Practical_implementation/TLS
page-type: guide
---

[Transport Layer Security (TLS)](/en-US/docs/Glossary/TLS) provides assurances about the confidentiality, authentication, and integrity of all communications, and as such, should be used for all inbound and outbound website communications. This article explains the most important TLS-related configuration settings.

## TLS configuration

### Problem

All requests and responses should be sent over HTTPS. The modern web practically enforces this — all browsers are moving towards requiring [HTTPS](/en-US/docs/Glossary/HTTPS) by default, and many web features can only be used in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

### Solution

You should set up your server software to use a robust TLS configuration that enforces HTTPS. There are several TLD config generators out there that can help with this, for example the Mozilla [Server-side TLS Configuration Generator](https://ssl-config.mozilla.org/). This provides a number of options based on Mozilla's [interal TLS guidelines](https://wiki.mozilla.org/Security/Server_Side_TLS).

## Resource loading

### Problem

All resources — whether on the same origin or not — should be loaded over secure channels.

Secure (HTTPS) websites that attempt to load active resources such as JavaScript insecurely will be blocked by browsers. As a result, users will experience degraded UIs and [mixed content](/en-US/docs/Web/Security/Mixed_content) warnings. For example, in this case, HTTP is being used to load a JavaScript library:

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

Attempts to load passive content such as images insecurely, although less risky, will still lead to degraded UIs and mixed content warnings, and can allow active attackers to deface websites or phish users. For example:

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

Despite the fact that modern browsers make it evident that websites are loading resources insecurely, these errors still occur with significant frequency.

### Solution

Verify that all resources are loaded over HTTPS prior to deployment.

### Examples

In this case HTTPS is being used to load a JavaScript library:

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP redirections

### Problem

Websites may continue to listen on port 80 (HTTP) so that users do not get connection errors when typing a URL into their address bar, due to initial browser connections being made via HTTP. This creates an initial security risk when sites are first connected to.

In addition, sites should avoid redirections from HTTP to HTTPS on a different host, as this prevents `Strict-Transport-Security` from being set (see [HTTP Strict Transport Security](#http_strict_transport_security)).

### Solution

Sites that listen on port 80 should only redirect to the same resource on HTTPS. Once the redirection has occurred, `Strict-Transport-Security` should ensure that all future attempts go to the site via HTTP are instead sent directly to the secure site.

APIs or websites not intended for public consumption should disable the use of HTTP entirely.

To fix the "different hosts" problem:

1. First redirect from http://example.com/ to https://example.com/.
2. In a second redirect, redirect from https://example.com/ to https://example.org/.

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

## HTTP Strict Transport Security

### Problem

Browsers should only connect to sites via HTTPS, regardless of the chosen protocol.

### Solution

HTTP [`Strict-Transport-Security`](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) is an HTTP header that notifies user agents to only connect to a given site over HTTPS, even if the scheme chosen was HTTP. Browsers with HSTS set for a given site will transparently upgrade all requests to HTTPS. HSTS also tells the browser to treat TLS and certificate-related errors more strictly by disabling the ability for users to bypass the error page.

`Strict-Transport-Security` takes the following directives:

- `max-age`
  - : Sets how long user agents will redirect to HTTPS for, in seconds.
- `includeSubDomains` {{optional_inline}}
  - : Specifies whether user agents should upgrade requests on subdomains to HTTPS. For example, setting `includeSubDomains` on `domain.example.com` will cause requests on `host1.domain.example.com` and `host2.domain.example.com` to be upgraded.
- `preload` {{optional_inline}}
  - : Specifies whether the site should be preloaded. Including this directive means your site will be included in the [HSTS preload list](https://hstspreload.org/).

#### Steps

1. Set a `max-age` value of at least six months (`15768000`). Longer periods such as two years (`63072000`) are recommended. Once this value is set, the site must continue to support HTTPS until the expiry time has been reached.
2. Set `includeSubDomains` if at all possible, to improve security on subdomains. Careful testing is needed when setting `includeSubDomains`, as it could disable sites on subdomains that don't yet have HTTPS enabled.
3. Set `preload` to include the website in the [HSTS preload list](https://hstspreload.org/) if possible. Web browsers will do HTTPS upgrades to preloaded sites before receiving the initial `Strict-Transport-Security` header. This prevents [downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack) upon first use and is recommended for all high-risk websites. Note that being included in the HSTS preload list also requires `includeSubDomains` to be set, and `max-age` to be set to a minimum of 1 year (`31536000`).

### Examples

It is recommended to connect to a site via HTTPS for two years:

```http
Strict-Transport-Security: max-age=63072000
```

If possible, additionally upgrade subdomain requests to HTTPS and include the site in the preload list:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## See also

- [Transport layer security (TLS)](/en-US/docs/Web/Security/Transport_Layer_Security)
  - : The Transport Layer Security ({{Glossary("TLS")}}) protocol is the standard for enabling two networked applications or devices to exchange information privately and robustly. Applications that use TLS can choose their security parameters, which can have a substantial impact on the security and reliability of data. This article provides an overview of TLS and the kinds of decisions you need to make when securing your content.
- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
  - : **Certificate Transparency** is an open framework designed to protect against and monitor for certificate misissuance. Newly issued certificates are 'logged' to publicly run, often independent CT logs. These provide append-only, cryptographically assured records of issued TLS certificates.
- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : If your website delivers HTTPS pages, all [active mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_active_content) delivered via HTTP on these pages will be blocked by default. Consequently, your website may appear broken to users (if {{htmlelement("iframe")}}s don't load, etc.). [Passive mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_passivedisplay_content) is displayed by default, but users can set a preference to block this type of content as well. This page explains what you should be aware of as a web developer.
- [Weak signature algorithms](/en-US/docs/Web/Security/Weak_Signature_Algorithm)
  - : The strength of the hash algorithm used in {{Glossary("Signature/Security", "signing")}} a {{Glossary("digital certificate")}} is a critical element of the security of the certificate. This article provides some information about signature algorithms known to be weak, so you can avoid them when appropriate.

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
