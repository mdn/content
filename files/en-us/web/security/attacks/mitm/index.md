---
title: Manipulator in the Middle (MITM)
slug: Web/Security/Attacks/MITM
page-type: guide
sidebar: security
---

In a Manipulator in the Middle (MITM) attack, the attacker inserts themselves between two entities that are trying to communicating with each other.

On the web, an MITM attack generally takes place between the user's browser and the server, and enables the attacker to see and potentially modify any of the traffic exchanged over HTTP.

A common way for an attacker to execute an MITM attack is to set up a wireless access point in a public place, such as a cafe or an airport, and wait for a victim to connect to it. If a victim does connect, then the attacker will be able to read and modify any data exchanged between the user's browser and any sites they connect to.

## Defenses against MITM

The primary defense against MITM is to serve your site over {{glossary("HTTPS")}} (HTTP over {{glossary("TLS")}}). HTTPS prevents an attacker from reading traffic, or from modifying it in a predictable way.

You should serve all pages over HTTPS, not just pages that you consider especially sensitive.

### Use a secure TLS configuration

To support HTTPS, a website needs a TLS certificate. [Let's Encrypt](https://letsencrypt.org/) is a widely used nonprofit Certification Authority which issues free TLS certificates.

Not all TLS configurations are equally secure: if you need to configure your own server, consult a resource such as Mozilla's [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Modern web hosting services support HTTPS for you, either by default or through a configuration setting. In this situation, the hosting service is likely to manage your certificate and configure the server on your behalf.

### Load subresources over HTTPS

When a page loads resources (scripts, stylesheets, fonts, images, and so on), these resources should also be served over HTTPS. If a page is loaded over HTTPS and it attempts to load resources over HTTP, then the browser will either try to upgrade the load request to use HTTPS or will block the request: this is called [mixed content blocking](/en-US/docs/Web/Security/Mixed_content).

If it's not possible for you to update your code to load resources from HTTPS URLs (for example, because your HTML has been archived) your server can set a [content security policy](/en-US/docs/Web/HTTP/Guides/CSP) that contains the [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) directive, and the browser will automatically upgrade these requests to HTTPS.

### Use HSTS when upgrading HTTP requests

Even if your site is only served over HTTPS, users may still request it over HTTP: for example, by typing `http://example.org` into the address bar. To enable your site to work in cases like this, you can listen for HTTP requests and use a [301 Moved Permanently](/en-US/docs/Web/HTTP/Reference/Status/301) response to redirect to the HTTPS version.

However, this gives attackers the opportunity to intercept the initial exchange, and then prevent the upgrade to HTTPS from happening. This is sometimes called an _SSL stripping_ attack ({{glossary("SSL")}} is the precursor to TLS).

To reduce the risk of this attack, your server should also send the {{httpheader("Strict-Transport-Security")}} HTTP response header (also known as HSTS): this informs clients that you wish them to use HTTPS, and will cause the browser to connect using HTTPS directly for any subsequent visits, even those made using HTTP URLs.

With HSTS, SSL stripping is prevented except for the first time the browser tries to connect to your site (or, since HSTS has an expiry, the first time after an HSTS record in the browser has expired). To protect your site even on first connection or HSTS record expiry, Chrome maintains a list of domains called the [HSTS preload list](https://hstspreload.org/): if a domain is on this list, then Chrome will always upgrade HTTP request to HTTPS, effectively behaving as if the server has already sent the HSTS header. Safari and Firefox have similar behavior, using a list that is derived from the Chrome list.

### Defense summary checklist

- Serve all your site's pages and subresources over HTTPS.
- If you want to redirect HTTP requests to HTTPS, use HSTS, and consider adding your site to the HSTS preload list.

## See also

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
