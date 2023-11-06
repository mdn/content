---
title: "URL: createObjectURL() static method"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
page-type: web-api-static-method
browser-compat: api.URL.createObjectURL_static
---

{{APIRef("URL API")}}

The **`URL.createObjectURL()`** static
method creates a string containing a URL representing the object
given in the parameter.

The URL lifetime is tied to the {{domxref("document")}}
in the window on which it was created. The new object URL represents the specified
{{domxref("File")}} object or {{domxref("Blob")}} object.

To release an object URL, call {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}.

{{AvailableInWorkers}}

> **Note:** This feature is _not_ available in [Service Workers](/en-US/docs/Web/API/Service_Worker_API) due to its
> potential to create memory leaks.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameters

- `object`
  - : A {{domxref("File")}}, {{domxref("Blob")}}, or {{domxref("MediaSource")}} object to
    create an object URL for.

### Return value

A string containing an object URL that can be used to reference the
contents of the specified source `object`.

## Examples

See [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Usage notes

### Memory management

Each time you call `createObjectURL()`, a new object URL is created, even if
you've already created one for the same object. Each of these must be released by
calling {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} when you no longer need them.

Browsers will release object URLs automatically when the document is unloaded; however,
for optimal performance and memory usage, if there are safe times when you can
explicitly unload them, you should do so.

### Using object URLs for media streams

In older versions of the Media Source specification, attaching a stream to a
{{HTMLElement("video")}} element required creating an object URL for the
{{domxref("MediaStream")}}. This is no longer necessary, and browsers are removing
support for doing this.

> **Warning:** If you still have code that relies on
> {{domxref("URL.createObjectURL_static", "createObjectURL()")}} to attach streams to media
> elements, you need to update your code to set {{domxref("HTMLMediaElement.srcObject", "srcObject")}} to the `MediaStream` directly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
