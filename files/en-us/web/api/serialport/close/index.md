---
title: "SerialPort: close() method"
short-title: close()
slug: Web/API/SerialPort/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.close
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`SerialPort.close()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when the port closes.

## Description

`close()` closes the serial port if previously-locked {{domxref("SerialPort.readable")}} and {{domxref("SerialPort.writable")}} members are unlocked, meaning the `releaseLock()` methods have been called for their respective reader and writer.

However, when continuously reading data from a serial device using a loop, the associated [readable stream](/en-US/docs/Web/API/ReadableStream) will always be locked until the [reader](/en-US/docs/Web/API/ReadableStreamDefaultReader) encounters an error. In this case, calling [`reader.cancel()`](/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel) will force [`reader.read()`](/en-US/docs/Web/API/ReadableStreamDefaultReader/read) to resolve immediately with `{ value: undefined, done: true }` allowing the loop to call [`reader.releaseLock()`](/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

```js
// Without transform streams.

let keepReading = true;
let reader;

async function readUntilClosed() {
  while (port.readable && keepReading) {
    reader = port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // reader.cancel() has been called.
          break;
        }
        // value is a Uint8Array.
        console.log(value);
      }
    } catch (error) {
      // Handle error...
    } finally {
      // Allow the serial port to be closed later.
      reader.releaseLock();
    }
  }

  await port.close();
}

const closedPromise = readUntilClosed();

document.querySelector("button").addEventListener("click", async () => {
  // User clicked a button to close the serial port.
  keepReading = false;
  // Force reader.read() to resolve immediately and subsequently
  // call reader.releaseLock() in the loop example above.
  reader.cancel();
  await closedPromise;
});
```

Closing a serial port is more complicated when using [transform streams](/en-US/docs/Web/API/TransformStream). See [Close a serial port](https://developer.chrome.com/docs/capabilities/serial#close-port) for guidance.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
