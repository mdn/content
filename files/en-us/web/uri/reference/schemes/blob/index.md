---
title: "blob: URLs"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
page-type: uri-scheme
browser-compat: api.URL.createObjectURL_static
spec-urls: https://w3c.github.io/FileAPI/#url
sidebar: urlsidebar
---

**Blob (or object) URLs**, URLs prefixed with the `blob:` scheme, enable integration of {{domxref("Blob")}}s and {{domxref("MediaSource")}}s with other APIs that are only designed to be used with URLs, such as the {{HTMLElement("img")}} element. Blob URLs can also be used to navigate to as well as to trigger downloads of locally generated data. They are designed as opaque identifiers (that is, you shouldn't be handwriting them) and should be managed with the {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} and {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} functions.

Blob URLs are similar to [data URLs](/en-US/docs/Web/URI/Reference/Schemes/data), because they both allow representing in-memory resources as URLs; the difference is that data URLs embed resources in themselves and have severe size limitations, whereas blob URLs require a backing `Blob` or `MediaSource` and can represent larger resources.

## Syntax

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : The scheme of the URL.
- `<origin>`
  - : The [origin](/en-US/docs/Web/API/URL/origin) of the creator of this URL. If the creator's origin is opaque, then this part is implementation-defined.
- `<uuid>`
  - : A {{glossary("UUID")}}.

## Usage notes

### Memory management

Each time you call `createObjectURL()`, a new object URL is created, even if you've already created one for the same object. Each of these must be released by calling {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} when you no longer need them. As long as there's one object URL active, the underlying object cannot be garbage-collected and may cause memory leaks.

Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so.

However, avoid freeing the object URL too early. One common anti-pattern is the following:

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

Revoking the blob URL immediately after the image gets rendered would make the image unusable for user interactions (such as right-clicking to save the image or opening it in a new tab). For long-lived applications, you should revoke object URLs only when the resource is no longer accessible by the user (such as when the image is removed from the DOM).

### Storage partitioning

Access to resources via blob URLs are subject to the same restrictions as all other storage mechanisms, i.e., [state partitioning](/en-US/docs/Web/Privacy/Guides/State_Partitioning). Blob URLs have an associated creator origin (which is stored in the URL itself) and can only be fetched from environments where the storage key matches that of the creator environment. Blob URL _navigations_ are not subject to this restriction, although browsers may enforce privacy measures such as [`noopener`](/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener) for cross-site navigations to a blob URL.

### Using object URLs for media streams

In older versions of the Media Source specification, attaching a stream to a {{HTMLElement("video")}} element required creating an object URL for the {{domxref("MediaStream")}}. This is no longer necessary, and browsers are removing support for doing this.

> [!WARNING]
> If you still have code that relies on `createObjectURL()` to attach streams to media elements, you need to update your code to set {{domxref("HTMLMediaElement.srcObject", "srcObject")}} to the `MediaStream` directly.

## Examples

### Valid blob URLs

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### Creating blob URLs

In this example, we first create a {{domxref("Blob")}} from a {{HTMLElement("canvas")}}, create a blob URL to it, and finally attach the URL to an {{HTMLElement("img")}} element.

```js
const canvas = document.querySelector("canvas");
canvas.toBlob((blob) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- [URIs](/en-US/docs/Web/URI)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
