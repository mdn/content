---
title: ReadableStream.cancel()
slug: Web/API/ReadableStream/cancel
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - cancel
browser-compat: api.ReadableStream.cancel
---
{{APIRef("Streams")}}

The **`cancel()`** method of the
{{domxref("ReadableStream")}} interface returns a {{jsxref("Promise")}} that
resolves when the stream is canceled.

Cancel is used when you've completely finished with the stream and don't need any more
data from it, even if there are chunks enqueued waiting to be read. That data is lost
after cancel is called, and the stream is not readable any more. To read those chunks
still and not completely get rid of the stream, you'd use
{{domxref("ReadableStreamDefaultController.close()")}}.

## Syntax

```js
var promise = readableStream.cancel(reason);
```

### Parameters

- reason {{optional_inline}}
  - : A human-readable reason for the cancellation. The underlying source may or may not use it.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason`
parameter.

### Exceptions

- TypeError
  - : The stream you are trying to cancel is not a {{domxref("ReadableStream")}}, or it is
    locked.

## Examples

In Jake Archibald's [cancelling a
fetch](https://jsbin.com/gameboy/edit?js,console) example, a stream is used to fetch the WHATWG HTML spec chunk by chunk; each
chunk is searched for the string "service workers". When the search terms is found,
`cancel()` is used to cancel the stream — the job is finished so it is no
longer needed.

```js
var searchTerm = "service workers";
// Chars to show either side of the result in the match
var contextBefore = 30;
var contextAfter = 30;
var caseInsensitive = true;
var url = 'https://html.spec.whatwg.org/';

console.log(`Searching '${url}' for '${searchTerm}'`);

fetch(url).then(response => {
  console.log('Received headers');

  var decoder = new TextDecoder();
  var reader = response.body.getReader();
  var toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
  var bufferSize = Math.max(toMatch.length - 1, contextBefore);

  var bytesReceived = 0;
  var buffer = '';
  var matchFoundAt = -1;

  return reader.read().then(function process(result) {
    if (result.done) {
      console.log('Failed to find match');
      return;
    }

    bytesReceived += result.value.length;
    console.log(`Received ${bytesReceived} bytes of data so far`);

    buffer += decoder.decode(result.value, {stream: true});

    // already found match & just context-gathering?
    if (matchFoundAt === -1) {
      matchFoundAt = (caseInsensitive ? buffer.toLowerCase() : buffer).indexOf(toMatch);
    }

    if (matchFoundAt === -1) {
      buffer = buffer.slice(-bufferSize);
    }
    else if (buffer.slice(matchFoundAt + toMatch.length).length >= contextAfter) {
      console.log("Here's the match:")
      console.log(buffer.slice(
        Math.max(0, matchFoundAt - contextBefore),
        matchFoundAt + toMatch.length + contextAfter
      ));
      console.log("Cancelling fetch");
      reader.cancel();
      return;
    }
    else {
      console.log('Found match, but need more context…');
    }

    // keep reading
    return reader.read().then(process);
  });
}).catch(err => {
  console.log("Something went wrong. See devtools for details. Does the response lack CORS headers?");
  throw err;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
