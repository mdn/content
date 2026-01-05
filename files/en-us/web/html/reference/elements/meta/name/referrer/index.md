---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
page-type: html-attribute-value
browser-compat: html.elements.meta.name.referrer
sidebar: htmlsidebar
---

The **`referrer`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of the {{htmlelement("meta")}} element controls the HTTP {{httpheader("Referer")}} header of requests sent from the document.
If specified, you define the referrer using a [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute in the `<meta>` element as a keyword value.

For example, the following `<meta>` element sends the {{glossary("origin")}} of the document as the referrer:

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> Dynamically inserting `<meta name="referrer">` (with {{domxref("Document.write", "document.write()")}} or {{domxref("Node.appendChild", "appendChild()")}}) makes the referrer behavior unpredictable.
> When several conflicting policies are defined, the `no-referrer` policy is applied.

## Usage notes

A `<meta name="referrer">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : Sets the document referrer. You must define this attribute.
    Accepts one of the following values:
    - `no-referrer`
      - : Does not send an HTTP `Referer` header.
    - `origin`
      - : Sends the origin of the document.
    - `no-referrer-when-downgrade`
      - : Sends the full URL when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but sends no referrer when it's less secure (HTTPS→HTTP). This is the default behavior.
    - `origin-when-cross-origin`
      - : Sends the full URL (stripped of parameters) for same-origin requests, but only sends the origin for other cases.
    - `same-origin`
      - : Sends the full URL (stripped of parameters) for same-origin requests. Cross-origin requests will contain no referrer header.
    - `strict-origin`
      - : Sends the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but sends no referrer when it's less secure (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`
      - : Sends the full URL (stripped of parameters) for same-origin requests. Sends the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS). Otherwise, sends no referrer.
    - `unsafe-URL`
      - : Sends the full URL (stripped of parameters) for same-origin or cross-origin requests.

## Examples

### Removing a referrer from requests

The following `<meta>` element specifies that the document shouldn't send a `Referer` header with HTTP requests from the document:

```html
<meta name="referrer" content="no-referrer" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP {{httpheader("Referer")}} header
