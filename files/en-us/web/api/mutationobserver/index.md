---
title: MutationObserver
slug: Web/API/MutationObserver
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Reference
  - Interface
  - MutationObserver
  - NeedsContent
  - NeedsUpdate
  - Reference
  - mutation
  - observers
  - resize
browser-compat: api.MutationObserver
---
{{APIRef("DOM WHATWG")}}

The {{domxref("MutationObserver")}} interface provides the ability to watch for changes being made to the [DOM](/en-US/docs/Web/API/Document_Object_Model) tree. It is designed as a replacement for the older [Mutation Events](/en-US/docs/Web/API/MutationEvent) feature, which was part of the DOM3 Events specification.

## Constructor

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : Creates and returns a new `MutationObserver` which will invoke a specified callback function when DOM changes occur.

## Methods

- {{domxref("MutationObserver.disconnect()", "disconnect()")}}
  - : Stops the `MutationObserver` instance from receiving further notifications until and unless {{domxref("MutationObserver.observe", "observe()")}} is called again.
- {{domxref("MutationObserver.observe()", "observe()")}}
  - : Configures the `MutationObserver` to begin receiving notifications through its callback function when DOM changes matching the given options occur.
- {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}
  - : Removes all pending notifications from the `MutationObserver`'s notification queue and returns them in a new {{jsxref("Array")}} of {{domxref("MutationRecord")}} objects.

## Mutation Observer & customize resize event listener & demo

<https://codepen.io/milofultz/pen/LYjPXPw>

## Example

The following example was adapted from [this blog post](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// Select the node that will be observed for mutations
const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [A brief overview](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [A more in-depth discussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
