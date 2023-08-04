---
title: MediaImage
slug: Web/API/MediaImage
page-type: web-api-interface
browser-compat: api.MediaImage
---

{{APIRef("Media Session API")}}

The Media Session API's **`MediaImage`** dictionary describes the images associated with a media resource's {{domxref("MediaMetadata")}}.

Its contents can be displayed by the {{Glossary("user agent")}} in appropriate contexts like in a player interface to show the current playing video or audio track.

## Instance properties

- {{domxref("MediaImage.src", "src")}}
  - : The URL from which the user agent fetches the image's data.
- {{domxref("MediaImage.sizes", "sizes")}}
  - : Specifies the resource in multiple sizes so the user agent doesn't have to scale a single image.
- {{domxref("MediaImage.type", "type")}}
  - : The {{Glossary("MIME type")}} hint for the user agent that allows it to ignore images of types that it doesn't support. However, the user agent may still use MIME type sniffing after downloading the image to determine its type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaMetadata.artwork")}}
