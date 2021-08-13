---
title: HTTP Public Key Pinning (HPKP)
slug: Web/HTTP/Public_Key_Pinning
tags:
  - Deprecated
  - Guide
  - HPKP
  - HTTP
  - Deprecated
  - Security
---
{{HTTPSidebar}}{{deprecated_header}}

> **Note:** Public Key Pinning mechanism was deprecated in favor of [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency) and {{HTTPHeader("Expect-CT")}} header.

**HTTP Public Key Pinning** ({{Glossary("HPKP")}}) was a security feature that used to tell a web client to associate a specific cryptographic public key with a certain web server to decrease the risk of {{Glossary("MITM")}} attacks with forged certificates. It has been removed in modern browsers and is no longer supported.

To ensure the authenticity of a server's public key used in {{Glossary("TLS")}} sessions, this public key is wrapped into a X.509 certificate which is usually signed by a certificate authority ({{Glossary("Certificate_authority", "CA")}}). Web clients such as browsers trust a lot of these CAs, which can all create certificates for arbitrary domain names. If an attacker is able to compromise a single CA, they can perform MITM attacks on various TLS connections. HPKP can circumvent this threat for the {{Glossary("HTTPS")}} protocol by telling the client which public key belongs to a certain web server.

HPKP is a _Trust on First Use_ ({{Glossary("TOFU")}}) technique. The first time a web server tells a client via a special HTTP header which public keys belong to it, the client stores this information for a given period of time. When the client visits the server again, it expects at least one certificate in the certificate chain to contain a public key whose fingerprint is already known via HPKP. If the server delivers an unknown public key, the client should present a warning to the user.

> **Note:** Firefox and Chrome **disable pin validation** for pinned hosts whose validated certificate chain terminates at a **user-defined trust anchor** (rather than a built-in trust anchor). This means that for users who imported custom root certificates all pinning violations are ignored.

## Enabling HPKP

To enable this feature for your site, you need to return the {{HTTPHeader("Public-Key-Pins")}} HTTP header when your site is accessed over HTTPS:

```
Public-Key-Pins: pin-sha256="base64=="; max-age=expireTime [; includeSubDomains][; report-uri="reportURI"]
```

- `pin-sha256`
  - : The quoted string is the Base64 encoded _Subject Public Key Information_ ({{Glossary("SPKI")}}) fingerprint. It is possible to specify multiple pins for different public keys. Some browsers might allow other hashing algorithms than SHA-256 in the future. See below on how to extract this information out of a certificate or key file.
- `max-age`
  - : The time, in seconds, that the browser should remember that this site is only to be accessed using one of the defined keys.
- `includeSubDomains` {{optional_inline}}
  - : If this optional parameter is specified, this rule applies to all of the site's subdomains as well.
- `report-uri` {{optional_inline}}
  - : If this optional parameter is specified, pin validation failures are reported to the given URL.

> **Note:** The current specification requires including a second pin for a backup key which isn't yet used in production. This allows for changing the server's public key without breaking accessibility for clients that have already noted the pins. This is important for example when the former key gets compromised.

### Extracting the Base64 encoded public key information

> **Note:** While the example below shows how to set a pin on a server certificate, it is recommended to place the pin on the intermediate certificate of the CA that issued the server certificate, to ease certificates renewals and rotations.

First you need to extract the public key information from your certificate or key file and encode them using Base64.

The following commands will help you extract the Base64 encoded information from a key file, a certificate signing request, or a certificate.

```
openssl rsa -in my-rsa-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64

openssl ec -in my-ecc-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64

openssl req -in my-signing-request.csr -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

openssl x509 -in my-certificate.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

The following command will extract the Base64 encoded information for a website.

```
openssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

### Example HPKP Header

```
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

In this example, **pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** pins the server's public key used in production. The second pin declaration **pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** also pins the backup key. **max-age=5184000** tells the client to store this information for two months, which is a reasonable time limit according to the IETF RFC. This key pinning is also valid for all subdomains, which is told by the **includeSubDomains** declaration. Finally, **report-uri="https\://www\.example.net/hpkp-report"** explains where to report pin validation failures.

### Report-Only header

Instead of using a {{HTTPHeader("Public-Key-Pins")}} header you can also use a {{HTTPHeader("Public-Key-Pins-Report-Only")}} header. This header only sends reports to the `report-uri` specified in the header and does still allow browsers to connect to the webserver even if the pinning is violated.

### Setting up your webserver to include the HPKP header

The concrete steps necessary to deliver the HPKP header depend on the web server you use.

> **Note:** These examples use a max-age of two months and include all subdomains. It is advised to verify that this setup will work for your server.

> **Warning:** HPKP has the potential to lock out users for a long time if used incorrectly! The use of backup certificates and/or pinning the CA certificate is recommended.

#### Apache

Adding a line similar to the following to your webserver's config will enable HPKP on your Apache. This requires `mod_headers` enabled.

```
Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"
```

#### Nginx

Adding the following line and inserting the appropriate `pin-sha256="..."` values will enable HPKP on your nginx. This requires the `ngx_http_headers_module.`

```
add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains' always;
```

#### Lighttpd

The following line with your relevant key information (pin-sha256="..." fields) will enable HPKP on lighttpd.

```
setenv.add-response-header  = ( "Public-Key-Pins" => "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains")
```

**Note:** This requires the `mod_setenv` server.module loaded which can be included by the following if not already loaded.

```
server.modules += ( "mod_setenv" )
```

#### IIS

Add the following line to the Web.config file to send the `Public-Key-Pins` header:

```
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="Public-Key-Pins" value="pin-sha256=&quot;base64+primary==&quot;; pin-sha256=&quot;base64+backup==&quot;; max-age=5184000; includeSubDomains" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

## Specifications

| Specification                                            | Title                                 |
| -------------------------------------------------------- | ------------------------------------- |
| {{RFC("7469", "Public-Key-Pins", "2.1")}} | Public Key Pinning Extension for HTTP |

## Browser compatibility

{{Compat("http.headers.Public-Key-Pins")}}

## See also

- {{HTTPHeader("Public-Key-Pins")}}
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- {{HTTPHeader("Expect-CT")}}
