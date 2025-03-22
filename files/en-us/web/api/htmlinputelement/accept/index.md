---
title: "HTMLInputElement: accept property"
short-title: accept
slug: Web/API/HTMLInputElement/accept
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.accept
---

{{ApiRef("HTML DOM")}}

The **`accept`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`accept`](/en-US/docs/Web/HTML/Element/input#accept) attribute, generally a comma-separated list of unique file type specifiers providing a hint for the expected file type for an [`<input>` of type `file`](/en-US/docs/Web/HTML/Element/input/file). If the attribute is not explicitly set, the `accept` property is an empty string.

## Value

A string representing the element's `accept` value or an empty string if no `accept` is explicitly set.

## Example

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.accept); // the current value of the accept attribute
inputElement.accept = ".doc,.docx,.xml,application/msword"; // sets the accept value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.capture")}}
- [File type specifiers](/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/en-US/docs/Web/API/File_API)
