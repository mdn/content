---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The security of any connection using Transport Layer Security (TLS) is heavily dependent upon the cipher suites and security parameters selected. This article's goal is to help you make these decisions to ensure the confidentiality and integrity of communication between client and server. The Mozilla Operations Security (OpSec) team [maintains a wiki entry](https://wiki.mozilla.org/Security/Server_Side_TLS) with reference configurations for servers.

The Transport Layer Security (TLS) protocol is the standard for enabling two networked applications or devices to exchange information privately and robustly. Applications that use TLS can choose their security parameters, which can have a substantial impact on the security and reliability of data. This article provides an overview of TLS and the kinds of decisions you need to make when securing your content.

## History

When HTTPS was introduced, it was based on Secure Sockets Layer (SSL) 2.0, a technology introduced by Netscape. It was updated to SSL 3.0 not long after, and as its usage expanded, it became clear that a common, standard encryption technology needed to be specified to ensure interoperability among all web browsers and servers. The [Internet Engineering Task Force](https://www.ietf.org/) (IETF) specified TLS 1.0 in {{RFC(2246)}} in January 1999. The current version of TLS is 1.3 ({{RFC(8446)}}).

Despite the fact that the web now uses TLS for encryption, many people still refer to it as "SSL" out of habit.

Although TLS can be used on top of any low-level transport protocol, the original goal of the protocol was to encrypt HTTP traffic. HTTP encrypted using TLS is commonly referred to as {{Glossary("HTTPS")}}. TLS-encrypted web traffic is by convention exchanged on port 443 by default, while unencrypted HTTP uses port 80 by default. HTTPS remains an important use case for TLS.

## HTTP over TLS

TLS provides three primary services that help ensure the safety and security of data exchanged with it:

- Authentication
  - : Authentication lets each party to the communication verify that the other party is who they claim to be.
- Encryption
  - : Data is encrypted while being transmitted between the user agent and the server, in order to prevent it from being read and interpreted by unauthorized parties.
- Integrity
  - : TLS ensures that between encrypting, transmitting, and decrypting the data, no information is lost, damaged, tampered with, or falsified.

A TLS connection starts with a handshake phase where a client and server agree on a shared secret and important parameters, like cipher suites, are negotiated. Once parameters and a data exchange mode where application data, such HTTP, is exchanged.

### Cipher suites

The primary parameters that the TLS handshake negotiates is a [cipher suite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 and earlier, the negotiated cipher suite includes a set of cryptographic algorithms that together provide the negotiation of the shared secret, the means by which a server is authenticated, and the method that will be used to encrypt data.

The cipher suite in TLS 1.3 primarily governs the encryption of data, separate negotiation methods are used for key agreement and authentication.

Different software might use different names for the same cipher suites. For instance, the names used in OpenSSL and GnuTLS differ from those in the TLS standards. The [cipher names correspondence table](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) on the Mozilla OpSec team's article on TLS configurations lists these names as well as information about compatibility and security levels.

### Configuring your server

Correctly configuring your server is crucial. In general, you should try to limit cipher support to the newest ciphers possible which are compatible with the browsers you want to be able to connect to your site. The [Mozilla OpSec guide to TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS) provides more information on recommended configurations.

To assist you in configuring your site, Mozilla provides a helpful [TLS configuration generator](https://ssl-config.mozilla.org/) that will generate configuration files for the following Web servers:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Using the [configurator](https://ssl-config.mozilla.org/) is a recommended way to create the configuration to meet your needs; then copy and paste it into the appropriate file on your server and restart the server to pick up the changes. The configuration file may need some adjustments to include custom settings, so be sure to review the generated configuration before using it; installing the configuration file without ensuring any references to domain names and the like are correct will result in a server that just doesn't work.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} is a major revision to TLS. TLS 1.3 includes numerous changes that improve security and performance. The goals of TLS 1.3 are:

- Remove unused and unsafe features of TLS 1.2.
- Include strong security analysis in the design.
- Improve privacy by encrypting more of the protocol.
- Reduce the time needed to complete a handshake.

TLS 1.3 changes much of the protocol fundamentals, but preserves almost all of the basic capabilities of previous TLS versions. For the web, TLS 1.3 can be enabled without affecting compatibility with some rare exceptions (see below).

The major changes in TLS 1.3 are:

- The TLS 1.3 handshake completes in one round trip in most cases, reducing handshake latency.
- A server can enable a 0-RTT (zero round trip time) handshake. Clients that reconnect to the server can send requests immediately, eliminating the latency of the TLS handshake entirely. Though the performance gains from 0-RTT can be significant, they come with some risk of replay attack, so some care is needed before enabling this feature.
- TLS 1.3 supports forward-secure modes only, unless the connection is resumed or it uses a pre-shared key.
- TLS 1.3 defines a new set of cipher suites that are exclusive to TLS 1.3. These cipher suites all use modern Authenticated Encryption with Associated Data (AEAD) algorithms.
- The TLS 1.3 handshake is encrypted, except for the messages that are necessary to establish a shared secret. In particular, this means that server and client certificates are encrypted. Note however that the server identity (the server_name or SNI extension) that a client sends to the server is not encrypted.
- Numerous mechanisms have been disabled: renegotiation, generic data compression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) certificates, static RSA key exchange, and key exchange with custom Diffie-Hellman (DH) groups.

Implementations of draft versions of TLS 1.3 are available. TLS 1.3 is enabled in some browsers, including the 0-RTT mode. Web servers that enable TLS 1.3 might need to adjust configuration to allow TLS 1.3 to operate successfully.

TLS 1.3 adds just one significant new use case. The 0-RTT handshake can provide significant performance gains for latency sensitive applications, like the web. Enabling 0-RTT requires additional steps, both to ensure successful deployment and to manage the risks of replay attacks.

The removal of renegotiation in TLS 1.3 might affect some web servers that rely on client authentication using certificates. Some web servers use renegotiation to either ensure that client certificates are encrypted, or to request client certificates only when certain resources are requested. For the privacy of client certificates, the encryption of the TLS 1.3 handshake ensures that client certificates are encrypted; however this might require some software changes. Reactive client authentication using certificates is supported by TLS 1.3 but not widely implemented. Alternative mechanisms are in the process of being developed, which will also support HTTP/2.

## Retiring old TLS versions

To help with working towards a more modern, more secure web, all major browsers began removing support for TLS 1.0 and 1.1 in early 2020. You'll need to make sure your web server supports TLS 1.2 or 1.3 going forward.

From version 74 onwards, Firefox will return a [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) error when connecting to servers using the older TLS versions ([Firefox bug 1606734](https://bugzil.la/1606734)).

## TLS handshake timeout values

If the TLS handshake starts to become slow or unresponsive for some reason, the user's experience can be affected significantly. To mitigate this problem, modern browsers have implemented handshake timeouts:

- Since version 58, Firefox implements a TLS handshake timeout with a default value of 30 seconds. The timeout value can be varied by editing the `network.http.tls-handshake-timeout` pref in about:config.

## See also

- The [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) and [Cipherlist.eu](https://cipherlist.eu/) can help you generate configuration files for your server to secure your site.
- The Mozilla Operations Security (OpSec) team maintains a wiki page with [reference TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Use [HTTP Observatory](/en-US/observatory) and [SSL Labs](https://www.ssllabs.com/ssltest/) to test how secure a site's HTTP/TLS configuration is.
- [Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP header
