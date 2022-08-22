---
title: WritableStream.abort()
slug: Web/API/WritableStream/abort
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Streams
  - WritableStream
  - abort
browser-compat: api.WritableStream.abort
---
{{APIRef("Streams")}}

The **`abort()`** method of the {{domxref("WritableStream")}} interface aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.

## Syntax

```js
abort(reason)
```

### Parameters

- `reason`
  - : A string providing a human-readable reason for the abort.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason` parameter.

### Exceptions

- {{jsxref("TypeError")}}
  - : The stream you are trying to abort is not a {{domxref("WritableStream")}}, or it is locked.

## Examples

```js
const writableStream = new WritableStream({
  write(chunk) {
    // ...
  },
  close() {
    // ...
  },
  abort(err) {
    // ...
  }
}, queuingStrategy);

// ...

// abort the stream later on, when required
writableStream.abort();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
