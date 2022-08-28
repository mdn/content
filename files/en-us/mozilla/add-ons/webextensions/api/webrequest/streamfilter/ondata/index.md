---
title: webRequest.StreamFilter.ondata
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.ondata
  - TextDecoder
  - TextEncoder
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.ondata
---
{{AddonSidebar()}}

An event handler that is called repeatedly when response data is available. The handler is passed an `event` object containing a `data` property, which includes a chunk of the response data as an {{jsxref("ArrayBuffer")}}.

To decode the data, use either {{domxref("TextDecoder")}} or {{domxref("Blob")}}.

Without an `ondata` listener, you don't receive the original response body, and the output stream is empty unless {{WebEXTAPIRef("webRequest.StreamFilter.write", "write")}} is called.

## WebExtension Examples

This example adds an `ondata` listener which replaces "WebExtension Example" in the response with "WebExtension WebExtension Example" using the {{jsxref("String.prototype.replace()", "replace()")}} method.

> **Note:** This example only works for occurrences of "WebExtension Example" that are entirely contained within a data chunk, and not ones that straddle two chunks (which might happen \~0.1% of the time for large documents). Additionally it only deals with UTF-8-coded documents. A real implementation of this would have to be more complex.

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(
      /WebExtension Example/g,
      "WebExtension WebExtension Example"
    );
    filter.write(encoder.encode(str));
    // Doing filter.disconnect(); here would make us process only
    // the first chunk, and let the rest through unchanged. Note
    // that this would break multi-byte characters that occur on
    // the chunk boundary!
  };

  filter.onstop = (event) => {
    filter.close();
  };

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"]
);
```

Another example for handling large documents:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    if (data.length === 1) {
      str = decoder.decode(data[0]);
    } else {
      for (let i = 0; i < data.length; i++) {
        let stream = i !== data.length - 1;
        str += decoder.decode(data[i], { stream });
      }
    }
    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

Here's another version:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    for (const buffer of data) {
      str += decoder.decode(buffer, { stream: true });
    }
    str += decoder.decode(); // end-of-stream

    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

The above example can also be written like so:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(decoder.decode(event.data, { stream: true }));
  };

  filter.onstop = (event) => {
    data.push(decoder.decode());

    let str = data.join("");
    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

This example uses a {{domxref("Blob")}}:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    let str = await blob.text();

    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

This example makes use of the {{domxref("DOMParser")}} interface:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const parser = new DOMParser();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const str = await blob.text();
    const doc = parser.parseFromString(str, blob.type);
    const nodes = doc.querySelectorAll("title, h1");
    for (const node of nodes) {
      node.innerText = node.innerText.replace(
        "WebExtension Example",
        "WebExtension $&"
      );
    }
    filter.write(encoder.encode(doc.documentElement.outerHTML));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

This example combines all buffers into a single buffer:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(new Uint8Array(event.data));
  };

  filter.onstop = (event) => {
    let combinedLength = 0;
    for (const buffer of data) {
      combinedLength += buffer.length;
    }
    const combinedArray = new Uint8Array(combinedLength);
    let writeOffset = 0;
    for (const buffer of data) {
      combinedArray.set(buffer, writeOffset);
      writeOffset += buffer.length;
    }
    let str = decoder.decode(combinedArray);
    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

The above example can also be written like so:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const buffer = await blob.arrayBuffer();
    let str = decoder.decode(buffer);
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

This example demonstrates, how one can detect, if it's the final chunk in the response:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");

  let str = "";
  filter.ondata = (event) => {
    let stream = true;
    const data = new Uint8Array(event.data.slice(-8, -1));
    if (String.fromCharCode(...data) === "</html>") {
      stream = false; // end-of-stream
    }
    str += decoder.decode(event.data, { stream });
  };

  filter.onstop = (event) => {
    // Just change any instance of WebExtension Example in the HTTP response
    // to WebExtension WebExtension Example.
    str = str.replace(/WebExtension Example/g, "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
