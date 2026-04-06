---
title: "HTML attribute: integrity"
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
page-type: html-attribute
browser-compat:
  - html.elements.link.integrity
  - html.elements.script.integrity
sidebar: htmlsidebar
---

The **`integrity`** attribute provides a mechanism for a developer to assert that a linked script or stylesheet must have a particular value. The browser will check that the resource does in fact have that value, and refuse to load the resource if it does not.

This is a defense against a [supply-chain attack](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks) in which an attacker gets access to the domain that serves the script or stylesheet, and changes the expected resource for a malicious one.

## Description

The attribute can be applied to {{htmlelement("script")}} or {{htmlelement("link")}} elements only.

The attribute consists of zero or more components, each of which consists of:

- An identifier for a {{glossary("hash function", "cryptographic hash function")}}. Three hash functions are supported. In increasing order of strength, these are: SHA-256, SHA-384, and SHA-512.
- The result of hashing the resource contents using the specified hash function.

When the browser downloads a resource with the `integrity` attribute set, it will first select the set of hashes that were generated using the strongest hash function present. That is, if the attribute contains values generated with SHA-256 and SHA-384, it will only use the hashes generated using SHA-384.

The browser will then calculate the hash of the resource contents using the specified function, and compare the result with all the specified values: if the actual value matches any of the specified values, then the browser will load the resource, otherwise it will refuse to load the resource.

For more details, see our guide to [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity).

## Values

The value of this attribute consists of a whitespace-separated list of components, each of which has one of the following forms:

- `sha256-HASH_VALUE`
- `sha384-HASH_VALUE`
- `sha512-HASH_VALUE`

In each case, the part preceding `-` identifies the {{glossary("hash function")}} used, and `HASH_VALUE` is the {{glossary("base64")}} encoding of the result of hashing the resource using the specified hash function.

## Examples

### Including `integrity` on `<script>` elements

The following {{htmlelement("script")}} element includes an `integrity` attribute containing two values calculated using SHA-384, and two calculated using SHA-512. If the browser supports SHA-512 values then it will only use the SHA-512 values, and if the hash of the script at `https://cdn.example.com/script.js` matches either of them, the browser will load it.

Note that we've truncated the example values, for brevity.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-DEzZmZhMGFkMGQ0OTQ3MzZkNGY0OTg4NGIwN2ZiMMTM3YmQ
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"></script>
```

### Including `integrity` on `<link>` elements

The following {{htmlelement("link")}} element loads a stylesheet and includes an `integrity` attribute containing a single value, calculated using SHA-512.

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="sha512-MzViNmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNTYzNjUxYm" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity)
- [Supply chain attacks](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks)
