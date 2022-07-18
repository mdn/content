---
title: runtime.getFrameId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getFrameId
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getBrowserInfo
  - runtime
browser-compat: webextensions.api.runtime.getFrameId
---
{{AddonSidebar}}

Returns the frame ID of any window global or frame element when called from a content script or extension page, including background pages.

## Syntax

```js
var gettingInfo = browser.runtime.getFrameId()
```

### Parameters

- `target`
  - : A {{glossary("WindowProxy")}} or a {{glossary("browsing context")}} container [Element](/en-US/docs/Web/API/Element) (iframe, frame, embed, or object) for the target frame.

### Return value

Returns the frame ID of the target frame, or -1 if the frame doesn't exist.

## Examples

This code recursively walks descendant frames and gets parent frame IDs.

```js
let parents = {};

function visit(win) {
  let frameId = browser.runtime.getFrameId(win);
  let parentId = browser.runtime.getFrameId(win.parent);
  parents[frameId] = (win.parent != win) ? parentId : -1;

  try {
    let frameEl = browser.runtime.getFrameId(win.frameElement);
    browser.test.assertEq(frameId, frameEl, "frameElement id correct");
  } catch (e) {
    // Can't access a cross-origin .frameElement.
  }

  for (let i = 0; i < win.frames.length; i++) {
    visit(win.frames[i]);
  }
}
visit(window);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
