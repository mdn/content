---
title: Subresource Integrity
slug: Web/Security/Defenses/Subresource_Integrity
page-type: guide
sidebar: security
---

**Subresource Integrity** (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a [CDN](/en-US/docs/Glossary/CDN)) are delivered without unexpected manipulation. It works by allowing you to provide a {{glossary("hash function", "cryptographic hash")}} that a fetched resource must match.

## How Subresource Integrity helps

Websites sometimes choose to rely on a third party such as a {{glossary("CDN", "Content Delivery Network (CDN)")}} to host some of their resources, rather than self-host all their resources. For example, a document served from `https://example.com` might include a resource from another location:

```html
<script src="https://not-example.com/script.js"></script>
```

This comes with a risk, in that if an attacker gains control of the third-party host, the attacker can inject arbitrary malicious content into its files (or replace the files completely) and thus can also potentially attack sites that fetch files from it, in a [supply chain attack](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks).

Subresource Integrity is a defense against attacks such as this, by ensuring that the files your web application fetches have not been modified.

## Using Subresource Integrity

You can use Subresource Integrity with:

- {{HTMLElement("script")}} elements
- {{HTMLElement("link")}} elements whose [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) attribute value is [`stylesheet`](/en-US/docs/Web/HTML/Reference/Attributes/rel#stylesheet), [`preload`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload), or [`modulepreload`](/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

### Setting the `integrity` attribute

To use the feature, add the [`integrity`](/en-US/docs/Web/HTML/Reference/Attributes/integrity) attribute to the element. The value of `integrity` is a whitespace-separated list of {{glossary("hash function", "cryptographic hashes")}} of the content of the linked resource, where each hash is prefixed with an identifier for the hash algorithm used, followed by a dash, and ending with the actual base64-encoded hash value.

Currently the allowed prefixes are `sha256`, `sha384`, and `sha512`.

For example, the following markup adds an `integrity` attribute to a `<script>` element. The attribute contains two SHA-384 hashes, and two SHA-512 hashes:

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-DEzZmZhMGFkMGQ0OTQ3MzZkNGY0OTg4NGIwN2ZiMMTM3YmQ
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"></script>
```

### How browsers handle Subresource Integrity

When a browser encounters a {{HTMLElement("script")}} or {{HTMLElement("link")}} element with an `integrity` attribute, before executing the script or before applying any stylesheet specified by the {{HTMLElement("link")}} element, the browser must first compare the script or stylesheet to the expected hashes given in the `integrity` value.

The different hash functions have different strengths: from weaker to stronger, the order is SHA-256, SHA-384, SHA-512. When the browser downloads a resource with the integrity attribute set, it will first select the set of hashes that were generated using the strongest hash function present. That is, if the attribute contains values generated with SHA-256 and SHA-384, it will only use the hashes generated using SHA-384. It will ignore all other hashes.

The browser will then calculate the hash of the resource contents using the specified function, and compare the result with all the specified values: if the actual value matches any of the specified values, then the browser will load the resource, otherwise it will refuse to load the resource, and return a network error.

This means that developers can:

- **Provide multiple values using different hash functions**, and the browser will use only the strongest function provided.
- **Provide multiple values using the same hash function**, and the browser will validate the attribute if any of them match: this enables a developer to provide alternate versions of a resource, while still checking their integrity.

### Cross-Origin Resource Sharing and Subresource Integrity

For subresource-integrity verification of a resource served from an origin other than the document in which it's embedded, browsers additionally check the resource using [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS), to ensure the origin serving the resource allows it to be shared with the requesting origin. Therefore, the resource must be served with an [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) header that allows the resource to be shared with the requesting origin; for example:

```http
Access-Control-Allow-Origin: *
```

## Tools for generating SRI hashes

### SRI Hash Generator

The [SRI Hash Generator](https://srihash.org/) is an online tool you can use to generate SRI hashes.

### Using OpenSSL

You can generate SRI hashes from the command-line using **OpenSSL** with a command invocation such as:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

In a Windows environment, you can create a tool for generating SRI hashes with the following code:

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

To use that code:

1. Save that code in a file named `sri-hash.bat` in the Windows SendTo folder in your environment (for example, `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`).
2. Right-click a file in the File Explorer, select **Send to…**, and then select `sri-hash`. You will see the integrity value in a command box.
3. Select the integrity value and right-click to copy it to the Clipboard.
4. Press any key to dismiss the command box.

> [!NOTE]
> If OpenSSL is not installed on your system, visit the [OpenSSL project website](https://www.openssl.org/) for information about downloading and installing it. The OpenSSL project does not itself host binary distributions of OpenSSL, but does maintain an informal list of third-party distributions: https://github.com/openssl/openssl/wiki/Binaries.

### Using shasum

You can generate SRI hashes using [**shasum**](https://linux.die.net/man/1/shasum) with a command invocation such as:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- The pipe-through `xxd` step takes the hexadecimal output from `shasum` and converts it to binary.
- The pipe-through `awk` step is necessary because `shasum` will pass the hashed filename in its output to `xxd`. That can have disastrous consequences if the filename happens to have valid hex characters in it — because `xxd` will also decode that and pass it to `base64`.

## Integrity policy

The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers enable a document to enforce a policy regarding the integrity metadata requirements on loaded script and stylesheet subresources.

When an `Integrity-Policy` header is specified, the browser blocks requests with [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode or without an `integrity` attribute from being made, and will also report violations if a valid reporting endpoint is specified.
When an `Integrity-Policy-Report-Only` header is specified, the browser allows requests that violate the policy, but will report violations to the reporting endpoint (if a valid reporting endpoint is specified).

Developers would typically use `Integrity-Policy-Report-Only` as a first deployment step in their Integrity Policy journey, to ensure that all the scripts and stylesheets loaded in their documents have appropriate integrity metadata. Once they'd see that no violation reports are being received, they'd know that they can enable blocking using the `Integrity-Policy` header without risking user-facing breakage.

The header values are defined as structured field dictionaries with the following keys:

- `blocked-destinations`
  - : Defines a list of [request destinations](/en-US/docs/Web/API/Request/destination) to be blocked. The only allowed values are `script` and `style`.
- `sources` {{optional_inline}}
  - : Defines a list of integrity sources. The default and only currently supported value is `inline`. As a result, adding `sources=(inline)` to the header has a similar effect as omitting `sources`.
- `endpoints` {{optional_inline}}
  - : Defines a list of [reporting endpoints](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). The reporting endpoints need to be defined in a {{httpheader("Reporting-Endpoints")}} header.

In cases where a request is blocked by an integrity policy, a [Reporting API](/en-US/docs/Web/API/Reporting_API) violation report is created with a type property of `integrity-violation` and the structure defined by {{domxref("IntegrityViolationReport")}} that includes information such as the URL of the document and the blocked resource.

A typical report might look like this

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Examples

### Subresource Integrity with the `<script>` element

This example adds an `integrity` attribute to a {{htmlelement("script")}} element. The attribute contains four hashes: two calculated using SHA-384, and the other two using SHA-512. The browser will:

- select the two SHA-512 hashes
- hash the file contents using SHA-512

If the result matches either of the two SHA-512 hashes listed, then the browser will load and execute the script: otherwise it will return a network error.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-DEzZmZhMGFkMGQ0OTQ3MzZkNGY0OTg4NGIwN2ZiMMTM3YmQ
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> For more details on the purpose of the `crossorigin` attribute, see [CORS settings attributes](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin).

### Integrity enforcement with the `Integrity-Policy` header

You can add the {{httpheader("Integrity-Policy")}} header to your document to ensure that the external resources it loads (in this case, scripts) are loaded with integrity (and aren't loaded with [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode)

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

If you're unsure that all the external scripts have integrity metadata, you can enable the report-only version of the feature and start getting reports of violations.
You can do that with the {{httpheader("Integrity-Policy-Report-Only")}} header.

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## See also

- [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
- The {{httpheader("Content-Security-Policy")}} HTTP header.
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://srihash.org/)
