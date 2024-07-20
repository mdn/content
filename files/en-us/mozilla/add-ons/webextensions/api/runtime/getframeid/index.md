---
title: runtime.getFrameId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getFrameId
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getFrameId
---

{{AddonSidebar}}

Returns the frame ID of any window global or frame element when called from a content script or extension page, including background pages.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getFrameId(
  target               // object
)
```

### Parameters

- `target`
  - : A {{glossary("WindowProxy")}} or a {{glossary("browsing context")}} container [Element](/en-US/docs/Web/API/Element) (iframe, frame, embed, or object) for the target frame.

### Return value

Returns the frame ID of the target frame, or -1 if the frame doesn't exist.

## Examples

This code recursively walks descendant frames and gets parent frame IDs.

```js
const parents = {};

function visit(win) {
  const frameId = browser.runtime.getFrameId(win);
  const parentId = browser.runtime.getFrameId(win.parent);
  parents[frameId] = win.parent !== win ? parentId : -1;

  try {
    const frameEl = browser.runtime.getFrameId(win.frameElement);
    browser.test.assertEq(frameId, frameEl, "frameElement id correct");
  } catch (e) {
    // Can't access a cross-origin .frameElement.
  }

  for (const frame of win.frames) {
    visit(frame);
  }
}
visit(window);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
