---
title: DOMError
slug: Web/API/DOMError
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOMError
  - Deprecated
  - Interface
  - Reference
browser-compat: api.DOMError
---
{{APIRef("DOM")}}{{Deprecated_Header}}

The **`DOMError`** interface describes an error object that contains an error name.

## Properties

- {{domxref("DOMError.name")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns a string representing one of the error type names (see below).
- {{domxref("DOMError.message")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns a string representing a message or description associated with the given error type name.

## Error types

| Type                         | Description                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | The index is not in the allowed range (e.g. thrown in a {{ domxref("range") }} object). |
| `HierarchyRequestError`      | The node tree hierarchy is not correct.                                                       |
| `WrongDocumentError`         | The object is in the wrong {{ domxref("document") }}.                                  |
| `InvalidCharacterError`      | The string contains invalid characters.                                                       |
| `NoModificationAllowedError` | The object can not be modified.                                                               |
| `NotFoundError`              | The object can not be found here.                                                             |
| `NotSupportedError`          | The operation is not supported                                                                |
| `InvalidStateError`          | The object is in an invalid state.                                                            |
| `SyntaxError`                | The string did not match the expected pattern.                                                |
| `InvalidModificationError`   | The object can not be modified in this way.                                                   |
| `NamespaceError`             | The operation is not allowed by Namespaces in XML                                             |
| `InvalidAccessError`         | The object does not support the operation or argument.                                        |
| `TypeMismatchError`          | The type of the object does not match the expected type.                                      |
| `SecurityError`              | The operation is insecure.                                                                    |
| `NetworkError`               | A network error occurred.                                                                     |
| `AbortError`                 | The operation was aborted.                                                                    |
| `URLMismatchError`           | The given URL does not match another URL.                                                     |
| `QuotaExceededError`         | The quota has been exceeded.                                                                  |
| `TimeoutError`               | The operation timed out.                                                                      |
| `InvalidNodeTypeError`       | The node is incorrect or has an incorrect ancestor for this operation.                        |
| `DataCloneError`             | The object can not be cloned.                                                                 |

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("DOMException") }}
