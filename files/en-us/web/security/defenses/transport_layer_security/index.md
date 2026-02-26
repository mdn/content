---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Defenses/Transport_Layer_Security
page-type: guide
sidebar: security
---

Transport Layer Security (TLS) is a protocol which enables a client to communicate securely with a server across an untrusted network. Most notably it's used to secure HTTP connections on the web: the resulting protocol is called {{glossary("HTTPS")}}.

TLS secures a network connection in three ways:

- **Encryption**: the data exchanged between client and server is encrypted while in transit, so it can't be read by any attackers.
- **Integrity**: an attacker can't secretly modify data (without detection) while it is in transit between client and server.
- **Authentication**: client and server are each able to prove to the other party that they are the entity they claim to be. On the web, servers usually authenticate themselves to clients, but clients don't usually authenticate themselves to servers.

In particular, HTTPS is the defense against a [manipulator in the middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM) attack, in which the attacker inserts themselves between the user's browser and the server they are connecting to, and can read and modify the traffic exchanged.

Browsers consider pages delivered over HTTPS as providing a [secure context](/en-US/docs/Web/Security/Secure_Contexts). Many powerful web APIs are only available to code running in a secure context.

**All websites should serve all their pages and subresources over HTTPS, and implement server authentication.**

## TLS handshake

When a client connects to a server using TLS, an initial _handshake_ sets the security parameters for the protocol:

- Client and server agree on which version of TLS to use. The current version of TLS is 1.3 ({{RFC(8446)}}), and this is the most widely-used version. TLS 1.2 is still used by some websites, and TLS 1.1 and 1.0 should no longer be used.
- Client and server agree on the {{glossary("cipher suite")}} that they will use: this defines the algorithms that they will use for key agreement, authentication, encryption, and message authentication.
- Optionally, client and server authenticate each other. Client authentication, in which the client proves who they are to the server, is rare on the web outside some specialized applications. However, server authentication, in which the server proves who they are to the client, is a fundamental part of web security.
- Client and server agree on a {{glossary("Symmetric-key cryptography", "secret key")}} that they will use to encrypt and decrypt messages.

After the handshake, client and server use the secret key to encrypt and decrypt any messages, including HTTP headers as well as bodies.

## Configuring TLS

Choosing the right TLS server configuration has a big impact on the security of the connection. In particular, it determines the TLS version and cryptographic algorithms that will be used. If you need to configure your own server, consult a resource such as Mozilla's [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Mozilla also provides a [TLS configuration generator](https://ssl-config.mozilla.org/) that will generate configuration files for a wide range of web servers.

## Server authentication

To support server authentication, your website must have a {{glossary("digital certificate")}}, which contains a {{glossary("digital signature", "digitally signed")}} copy of the public key which is the counterpart of the website's private key. This binds the website's keys to their domain name, so the browser knows that it really is connecting to, for example, "https://example.com".

[Let's Encrypt](https://letsencrypt.org/) is a widely used nonprofit Certification Authority which issues free TLS certificates.

Modern web hosting services support HTTPS for you, either by default or through a configuration setting. In this situation, the hosting service is likely to manage your certificate and configure the server on your behalf.

## Mixed content

A website should use HTTPS not only for the main document, but also for all subresources that it loads, such as scripts, stylesheets, images, and fonts. If a website loads the main document over HTTPS but then loads any of its subresources over HTTP, this is called [mixed content](/en-US/docs/Web/Security/Defenses/Mixed_content).

For example, if a document served from `https://example.org` includes the following content, then it will constitute mixed content:

```html
<img src="http://example.org/my-image.png" />
```

Mixed content is unsafe because the subresources don't get the protection that HTTPS offers, so an attacker can not only read them but potentially also modify them. This can undermine the integrity of the page as a whole! For example, we could imagine an attacker modifying a script to behave harmfully. Other resources are less dangerous than scripts, but still potentially dangerous: for example, an attacker could modify images so as to confuse or mislead users.

For this reason, browsers don't allow secure pages to load insecure subresources. Instead, depending on the type of subresource, they either upgrade the load request to use HTTPS, or block the request entirely.

If it's not possible for you to update your code to load resources from HTTPS URLs (for example, because your HTML has been archived), your server can set a [content security policy](/en-US/docs/Web/HTTP/Guides/CSP) that contains the [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) directive, and the browser will automatically upgrade these requests to HTTPS.

See [Mixed content](/en-US/docs/Web/Security/Defenses/Mixed_content) for more details.

## Upgrading HTTP connections

Even if a site is only served over HTTPS, users may still request it over HTTP: for example, by typing `http://example.org` into the address bar. To enable the site to work in cases like this, listen for HTTP requests and use a [301 Moved Permanently](/en-US/docs/Web/HTTP/Reference/Status/301) response to redirect to the HTTPS version.

However, this gives attackers the opportunity to intercept the initial exchange, and then prevent the upgrade to HTTPS from happening. This is sometimes called an _SSL stripping_ attack ({{glossary("SSL")}} is the precursor to TLS).

To reduce the risk of this attack, the server should also send the {{httpheader("Strict-Transport-Security")}} HTTP response header (also known as HSTS): this informs clients that the site wishes them to use HTTPS, and will cause the browser to connect using HTTPS directly for any subsequent visits, even those made using HTTP URLs.

With HSTS, SSL stripping is prevented except for the first time the browser tries to connect to your site (or, since HSTS has an expiry, the first time after an HSTS record in the browser has expired). To protect the site even on first connection or HSTS record expiry, Chrome maintains a list of domains called the [HSTS preload list](https://hstspreload.org/): if a domain is on this list, then Chrome will always upgrade HTTP requests to HTTPS, effectively behaving as if the server has already sent the HSTS header. Safari and Firefox have similar behavior, using a list that is derived from the Chrome list.

## See also

- Testing HTTPS/TLS configurations:
  - [Mozilla HTTP Observatory](/en-US/observatory)
  - [SSL Labs](https://www.ssllabs.com/ssltest/)
- Recommended TLS configurations:
  - [Mozilla recommended configurations](https://ssl-config.mozilla.org/)
  - [Cipherlist.eu recommended TLS configurations](https://cipherlist.eu/)
