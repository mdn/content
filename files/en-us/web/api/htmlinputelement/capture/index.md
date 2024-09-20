---
title: "HTMLInputElement: capture property"
short-title: capture
slug: Web/API/HTMLInputElement/capture
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.capture
---

{{ApiRef("HTML DOM")}}

The **`capture`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`capture`](/en-US/docs/Web/HTML/Attributes/capture) attribute. Only relevant to the [`<input>` of type `file`](/en-US/docs/Web/HTML/Element/input/file), the property and attribute specify whether, a new file should be captured from a user-facing (`user`) or outward facing (`environment`) camera or microphone. The type of file is defined the [`accept`](/en-US/docs/Web/HTML/Attributes/accept) attribute. If the attribute is not explicitly set, the `capture` property is an empty string.

## Value

A string; Generally either `user` or `environment`, or an empty string (`""`).

## Example

```js
const inputElement = document.querySelector("avatar");
console.log(inputElement.capture); // the current value of the capture attribute
inputElement.capture = "user"; // sets the capture value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.accept")}}
- {{domxref("HTMLInputElement.files")}}
- [File type specifiers](/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/en-US/docs/Web/API/File_API)
