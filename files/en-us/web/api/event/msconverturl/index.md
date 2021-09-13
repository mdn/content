---
title: Event.msConvertURL()
slug: Web/API/Event/msConvertURL
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Non-standard
  - Reference
  - msConvertURL
---
{{APIRef("DOM")}}{{Non-standard_Header}}

The **`msConvertURL`** method instructs the HTML paste operation on how to modify the src attribute that corresponds to each file in the clipboardData.files collection, allowing otherwise inaccessible files to be converted to blob or data URIs.

This proprietary method is specific to Internet Explorer and the Microsoft Edge browser.

## Syntax

```js
var retVal = DragEvent.msConvertURL(file, targetType, targetURL);
```

### Parameters

**file** \[in]

Type: _File_

The file object to be converted.

**targetType** \[in]

Type: _DOMString_

One of the following values indicating the desired conversion type: "specified", "base64", or "unchanged".

**targetURL** \[in, optional]

Type: _URL_

The target URL.

### Return value

This method does not return a value.

### Example

```js
  var blobList = [];

    document.getElementById("pasteZone").addEventListener('paste', handlePaste, false);

    function handlePaste(evt) {
      var fileList = window.clipboardData.files; // Note that window.DataTransfer.files is not applicable.

      if (!fileList) {
        console.log("fileList is null.");
        return;
      }

      for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        var url = URL.createObjectURL(file);

        if (evt.convertURL) { // Use standard if available.
          evt.convertURL(file, "specified", url);
        } else {
          evt.msConvertURL(file, "specified", url);
        }

        console.log("Local file: " + file.name + " (" + file.size + ")");
        blobList.push(file);
      } // for
    } // handlePaste
```

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
