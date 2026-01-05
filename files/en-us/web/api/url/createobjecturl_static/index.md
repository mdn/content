---
title: "URL: createObjectURL() static method"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
page-type: web-api-static-method
browser-compat: api.URL.createObjectURL_static
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`createObjectURL()`** static method of the {{domxref("URL")}} interface
creates a string containing a [blob URL](/en-US/docs/Web/URI/Reference/Schemes/blob) pointing to the object given in the parameter.

For more information, see [blob URLs](/en-US/docs/Web/URI/Reference/Schemes/blob).

To release an object URL, call {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}.

> [!NOTE]
> This feature is _not_ available in [Service Workers](/en-US/docs/Web/API/Service_Worker_API) due to its
> potential to create memory leaks.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameters

- `object`
  - : A {{domxref("Blob")}} (such as a {{domxref("File")}}) or {{domxref("MediaSource")}} object to
    create an object URL for.

### Return value

A string containing an object URL that can be used to reference the
contents of the specified source `object`.

## Examples

See [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Blob URLs](/en-US/docs/Web/URI/Reference/Schemes/blob)
- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
