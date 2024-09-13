---
title: "URL: revokeObjectURL() static method"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
page-type: web-api-static-method
browser-compat: api.URL.revokeObjectURL_static
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`revokeObjectURL()`** static method of the {{domxref("URL")}} interface
releases an existing object URL which was previously created by calling
{{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}.

Call this method when you've finished
using an object URL to let the browser know not to keep the reference to the file any
longer.

> [!NOTE]
> This method is _not_ available in [Service Workers](/en-US/docs/Web/API/Service_Worker_API), due to
> issues with the {{domxref("Blob")}} interface's life cycle and the potential for leaks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameters

- `objectURL`
  - : A string representing an object URL that was previously created by
    calling {{domxref("URL.createObjectURL_static", "createObjectURL()")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [Using object URLs to display images](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
