---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL
page-type: web-api-static-method
tags:
  - API
  - Method
  - URL
  - URL API
  - revokeObjectURL
browser-compat: api.URL.revokeObjectURL
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

```js
revokeObjectURL(objectURL)
```

### Parameters

- `objectURL`
  - : A string representing a object URL that was previously created by
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
