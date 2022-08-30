---
title: Navigator.msSaveBlob()
slug: Web/API/Navigator/msSaveBlob
page-type: web-api-instance-method
browser-compat: api.Navigator.msSaveBlob
---
{{APIRef("HTML DOM")}}{{non-standard_header}}{{deprecated_header}}

The **`Navigator.msSaveBlob()`** method saves the
{{domxref("File")}} or {{domxref("Blob")}} to disk. This method behaves in the same
way as {{domxref("Navigator.msSaveOrOpenBlob()")}} except that this disables the file
open option.

## Syntax

```js
navigator.msSaveBlob(blob, defaultName);
```

### Parameters

- `blob`
  - : A blob to be saved.
- `defaultName`
  - : The file name to be used when saving file.

### Return value

True is returned as long as the download notification bar is displayed, or false if a
failure occurred.

## Notes

When a site calls this method, the behavior is the same as when Windows Internet
Explorer downloads a file with the following in the header, where
`X-Download-Options` removes the file open button from the browser file
download dialog:

```http
Content-Length: <blob.size>
Content-Type: <blob.type>
Content-Disposition: attachment;filename=<defaultName>
X-Download-Options: noopen
```

## Specifications

Not part of any specifications.

## Browser compatibility

{{Compat}}
