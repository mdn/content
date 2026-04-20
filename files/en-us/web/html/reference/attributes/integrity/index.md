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

The **`integrity`** attribute provides a mechanism for a developer to assert that a linked script or stylesheet must have a particular content. The browser will check that the resource does in fact have that content, and refuse to load the resource if it does not.

This is a defense against a [supply-chain attack](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks) in which an attacker gets access to the domain that serves the script or stylesheet, and changes the expected resource for a malicious one.

## Description

The attribute can be applied to {{htmlelement("script")}} or {{htmlelement("link")}} elements only.

The attribute consists of one or more components, each of which consists of:

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

### Including different hash functions

The following {{htmlelement("script")}} element includes an `integrity` attribute containing three values, one calculated using SHA-256, one calculated using SHA-384, and one calculated using SHA-512.

The browser will select the value that was calculated using the strongest algorithm that the browser supports. Since all modern browsers support SHA-512, this means that the browser will select the `sha512-` value. It will hash the file contents using SHA-512 and compare the result with the `sha512-` value, and load the file only if they match.

In this case providing multiple values enables a website to work with browsers that may not support all the hash functions.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

Note that in this and subsequent examples, we've truncated the example hash values, for brevity.

### Including different hash values

The following {{htmlelement("script")}} element includes an `integrity` attribute containing two different values, both calculated using the SHA-512 algorithm. These different values reflect alternative contents for the linked file.

If the SHA-512 hash of the linked file matches either of the given values, then the browser will load it.

This enables the server at `cdn.example.com` to respond with one of two versions of the file.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### Including `integrity` on `<link>` elements

The following {{htmlelement("link")}} element loads a stylesheet and includes an `integrity` attribute containing six values, reflecting two possible contents for the linked file, each calculated using three different hash functions.

The browser will select the set of values that were calculated using the strongest hash function that it supports: in modern browsers, this will be the two `sha512-` values.

It will then calculate the hash of the downloaded file using SHA-512, and compare the result with both the `sha512-` values: if either of them match, then the browser will load the resource.

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha256-OTcyMGZkY2Y3NGZhZjUwNWU5NGQ0ZWJhYWVhND
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-ZTdhYjQ2NTE5OTg0Yjc2ZDU2MDMxMDUxY2Y5NDMxYzI5NjA
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2
  sha512-IxZTcwZjE2ZjU3MzE4NWM5ODU4ZmJkYjBlYzBhYzFkYzU0OGJmM2ZkN"
  crossorigin="anonymous" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity)
- [Supply chain attacks](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks)
