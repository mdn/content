---
title: userScripts.onBeforeScript (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/onBeforeScript
page-type: webextension-api-event
browser-compat: webextensions.api.userScripts_legacy.onBeforeScript
---

{{AddonSidebar}}

> [!WARNING]
> This is documentation for the legacy `userScripts` API. It's available in Firefox for Manifest V2. For functionality to work with user scripts in Manifest V3 see the new {{WebExtAPIRef("userScripts")}} API.

The `onBeforeScript` event of the {{WebExtAPIRef("userScripts_legacy","browser.userScripts")}} is fired before a user script is executed. It can only be included in the API script, the script registered in [`"user_scripts"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), where it is used to detect that the custom API methods should be exported to the user script.

## Syntax

```js-nolint
browser.userScripts.onBeforeScript.addListener(listener)
browser.userScripts.onBeforeScript.removeListener(listener)
browser.userScripts.onBeforeScript.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `script`

      - : An `object` that represents the user script that matched a web page. Its properties and methods are as follows:

        - `defineGlobals`
          - : A method that exports an object containing properties and methods available globally to the user script sandbox. This method must be called synchronously to guarantee that the user script has not executed.
        - `export`
          - : A method that converts a value to one that the user script code can access. This method is used in API methods exported to the user script to result or resolve non-primitive values. The exported objects can also provide methods that the user script code can access and call.
        - `global`
          - : An `object` that provides access to the sandbox for the user script.
        - `metadata`
          - : The `scriptMetadata` property set when the user script was registered using `userScripts.register`.

## Examples

An example of how the listener might be used:

```js
browser.userScripts.onBeforeScript.addListener((script) => {
  script; // This is an API object that represents the user script
  // that is going to be executed.

  script.metadata; // Access the user script metadata (returns the
  // value of the scriptMetadata property from
  // the call to userScripts.register).

  // Export some global properties into the user script sandbox
  // (this method has to be called synchronously from the
  // listener, otherwise the user script may have executed).
  script.defineGlobals({
    aGlobalPropertyAccessibleFromUserScriptCode: "prop value",

    myCustomAPIMethod(param1, param2) {
      // Custom methods exported from the API script can use
      // the WebExtensions APIs available to content scripts.
      browser.runtime.sendMessage(/* … */);
      // …

      return 123; // primitive values can be returned directly
      // …

      // Non primitive values have to be exported explicitly
      // using the export method provided by the script API
      // object
      return script.export({
        objKey1: {
          nestedProp: "nestedValue",
        },
        // Explicitly exported objects can also provide methods.
        objMethod() {
          /* … */
        },
      });
    },

    async myAsyncMethod(param1, param2, param3) {
      // exported methods can also be declared as async
    },
  });
});
```

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("contentScripts")}}
