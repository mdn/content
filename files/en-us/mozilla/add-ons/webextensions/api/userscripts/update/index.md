---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.update
---

{{AddonSidebar}}

Updates user scripts registered by the extension.

## Syntax

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // array of objects
);
```

### Parameters

- `scripts`

  - : `array` of {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details of user scripts to update.

    Properties that are `null` or omitted are not changed. Passing an empty array to `matches`, `excludeMatches`, `globs`, and `excludeGlobs` clears these properties.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if all the requested user scripts are updated. If any user scripts fail to update or the request fails for another reason, none of the scripts are updated, and the promise is rejected with an error message.

## Examples

This snippet shows two examples of updates to a user scripts. The first update fails because it attempts to create an invalid script registration. The second example shows a successful update.

```js
// Valid registration:
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('Hello world!');" }],
    matches: ["*://example.com/*"],
  },
]);

// Invalid! Would result in script without matches or includeGlobs!
await browser.userScripts.update([{ matches: [] }]);

// Valid: replaces matches with includeGlobs.
await browser.userScripts.update([
  {
    matches: [],
    includeGlobs: ["*example*"],
  },
]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
