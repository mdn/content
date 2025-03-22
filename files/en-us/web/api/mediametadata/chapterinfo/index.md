---
title: "MediaMetadata: chapterInfo property"
short-title: chapterInfo
slug: Web/API/MediaMetadata/chapterInfo
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaMetadata.chapterInfo
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

The **`chapterInfo`** read-only property of the {{domxref("MediaMetadata")}} interface returns an array of chapter information metadata associated with playing media, represented by {{domxref("ChapterInformation")}} object instances.

The `chapterInfo` for a given media resource is set when it is first created, via the `chapterInfo` property of the {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}} constructor's initialization object.

## Value

An array of {{domxref("ChapterInformation")}} object instances.

## Examples

See the {{domxref("ChapterInformation")}} reference page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ChapterInformation")}}
