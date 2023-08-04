---
title: "URL: revokeObjectURL() static method"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
page-type: web-api-static-method
browser-compat: api.URL.revokeObjectURL_static
---

{{ApiRef("URL API")}}

The **`URL.revokeObjectURL()`** static
method releases an existing object URL which was previously created by calling
{{domxref("URL.createObjectURL()") }}.

Call this method when you've finished
using an object URL to let the browser know not to keep the reference to the file any
longer.

{{AvailableInWorkers}}

> **Note:** This method is not available from service workers, due to
> issues with the {{domxref("Blob")}} interface's life cycle and the potential for
> leaks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameters

- `objectURL`
  - : A string representing an object URL that was previously created by
    calling {{domxref("URL.createObjectURL", "createObjectURL()") }}.

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
- {{domxref("URL.createObjectURL()") }}
