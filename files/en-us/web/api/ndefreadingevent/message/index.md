---
title: NDEFReadingEvent.message
slug: Web/API/NDEFReadingEvent/message
tags:
  - API
  - Property
  - Reference
  - message
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.message
---
{{securecontext_header}}{{DefaultAPISidebar("")}}

The **`message`** property of the {{domxref("NDEFReadingEvent")}} interface returns an {{DOMxRef("NDEFMessage")}} object containing the received message.

## Syntax

```js
let aMessage = NDEFReadingEvent.message;
```

### Value

An {{domxref("NDEFMessage")}} object.

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
