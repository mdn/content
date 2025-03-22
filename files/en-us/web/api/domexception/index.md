---
title: DOMException
slug: Web/API/DOMException
page-type: web-api-interface
browser-compat: api.DOMException
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`DOMException`** interface represents an abnormal event (called an **exception**) that occurs as a result of calling a method or accessing a property of a web API. This is how error conditions are described in web APIs.

Each exception has a **name**, which is a short "PascalCase"-style string identifying the error or abnormal condition.

`DOMException` is a {{Glossary("Serializable object")}}, so it can be cloned with {{DOMxRef("Window.structuredClone", "structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}}.

## Constructor

- {{domxref("DOMException.DOMException()", "DOMException()")}}
  - : Returns a `DOMException` object with a specified message and name.

## Instance properties

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Returns one of the legacy error code constants, or `0` if none match.
- {{domxref("DOMException.message")}} {{ReadOnlyInline}}
  - : Returns a string representing a message or description associated with the given [error name](#error_names).
- {{domxref("DOMException.name")}} {{ReadOnlyInline}}
  - : Returns a string that contains one of the strings associated with an [error name](#error_names).

## Error names

Common error names are listed here. Some APIs define their own sets of names, so this is not necessarily a complete list.

Note that the following deprecated historical errors don't have an error name but instead have only a legacy constant code value and a legacy constant name:

- Legacy code value: `2`, legacy constant name: `DOMSTRING_SIZE_ERR`
- Legacy code value: `6`, legacy constant name: `NO_DATA_ALLOWED_ERR`
- Legacy code value: `16`, legacy constant name: `VALIDATION_ERR`

> [!NOTE]
> Because historically the errors were identified by a numeric value that corresponded with a named variable defined to have that value, some of the entries below indicate the legacy code value and constant name that were used in the past.

- `IndexSizeError`
  - : The index is not in the allowed range. For example, this can be thrown by the {{ domxref("Range") }} object. (Legacy code value: `1` and legacy constant name: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : The node tree hierarchy is not correct. (Legacy code value: `3` and legacy constant name: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : The object is in the wrong {{ domxref("Document") }}. (Legacy code value: `4` and legacy constant name: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : The string contains invalid characters. (Legacy code value: `5` and legacy constant name: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : The object cannot be modified. (Legacy code value: `7` and legacy constant name: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : The object cannot be found here. (Legacy code value: `8` and legacy constant name: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : The operation is not supported. (Legacy code value: `9` and legacy constant name: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : The object is in an invalid state. (Legacy code value: `11` and legacy constant name: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : The attribute is in use. (Legacy code value: `10` and legacy constant name: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : The string did not match the expected pattern. (Legacy code value: `12` and legacy constant name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : The object cannot be modified in this way. (Legacy code value: `13` and legacy constant name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : The operation is not allowed by Namespaces in XML. (Legacy code value: `14` and legacy constant name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : The object does not support the operation or argument. (Legacy code value: `15` and legacy constant name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : The type of the object does not match the expected type. (Legacy code value: `17` and legacy constant name: `TYPE_MISMATCH_ERR`) This value is deprecated; the JavaScript {{jsxref("TypeError")}} exception is now raised instead of a `DOMException` with this value.
- `SecurityError`
  - : The operation is insecure. (Legacy code value: `18` and legacy constant name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : A network error occurred. (Legacy code value: `19` and legacy constant name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : The operation was aborted. (Legacy code value: `20` and legacy constant name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : The given URL does not match another URL. (Legacy code value: `21` and legacy constant name: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : The quota has been exceeded. (Legacy code value: `22` and legacy constant name: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : The operation timed out. (Legacy code value: `23` and legacy constant name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : The node is incorrect or has an incorrect ancestor for this operation. (Legacy code value: `24` and legacy constant name: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : The object can not be cloned. (Legacy code value: `25` and legacy constant name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : The encoding or decoding operation failed (No legacy code value and constant name).
- `NotReadableError` {{experimental_inline}}
  - : The input/output read operation failed (No legacy code value and constant name).
- `UnknownError` {{experimental_inline}}
  - : The operation failed for an unknown transient reason (e.g. out of memory) (No legacy code value and constant name).
- `ConstraintError` {{experimental_inline}}
  - : A mutation operation in a transaction failed because a constraint was not satisfied (No legacy code value and constant name).
- `DataError` {{experimental_inline}}
  - : Provided data is inadequate (No legacy code value and constant name).
- `TransactionInactiveError` {{experimental_inline}}
  - : A request was placed against a transaction that is currently not active or is finished (No legacy code value and constant name).
- `ReadOnlyError` {{experimental_inline}}
  - : The mutating operation was attempted in a "readonly" transaction (No legacy code value and constant name).
- `VersionError` {{experimental_inline}}
  - : An attempt was made to open a database using a lower version than the existing version (No legacy code value and constant name).
- `OperationError` {{experimental_inline}}
  - : The operation failed for an operation-specific reason (No legacy code value and constant name).
- `NotAllowedError`
  - : The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission (No legacy code value and constant name).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `DOMException`](https://github.com/zloirock/core-js#domexception) is available in [`core-js`](https://github.com/zloirock/core-js)
- {{ domxref("DOMError") }}
