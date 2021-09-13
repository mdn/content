---
title: NDEFReadingEvent.serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
tags:
  - API
  - Property
  - Reference
  - serialNumber
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.serialNumber
---
{{securecontext_header}}{{DefaultAPISidebar("")}}

The **`serialNumber`** property of the {{domxref("NDEFReadingEvent")}} interface returns the serial number of the device, which is used for anti-collision and identification, or an empty string if no serial number is available.

## Syntax

```js
let aserialNumber = NDEFReadingEvent.serialNumber;
```

### Value

A string containing the device's serial number.

## Examples

This example shows how to create a convenience function that reads a single tag and then stops polling, saving battery life by cutting unneeded work. The example could easily be extended to time out after a given amount of milliseconds.

```js
const ndefReader = new NDEFReader();

  function read() {
    return new Promise((resolve, reject) => {
      const ctlr = new AbortController();
      ctlr.signal.onabort = reject;
      ndefReader.addEventListener("reading", event => {
        ctlr.abort();
        resolve(event);
      }, { once: true });
      ndefReader.scan({ signal: ctlr.signal }).catch(err => reject(err));
    });
  }

  read().then(({ serialNumber }) => {
    console.log(serialNumber);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
