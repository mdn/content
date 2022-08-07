---
title: Building a cross-browser extension
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
tags:
  - Add-ons
  - Extensions
  - Guide
  - WebExtensions
---
{{AddonSidebar()}}

> **Note:** This article discusses building cross-browser extensions for manifest v2. At the time of writing (December 2021), manifest v3 is being introduced by the major browser vendors. Manifest v3 is likely to change the way cross-browser extension development is undertaken. However, work on Manifest v3 is not complete. The major browser vendors are collaborating (with community members) to ease the development of a cross-browser extension in the [W3C WebExtensions Community Group](https://github.com/w3c/webextensions).

The introduction of the browser extensions API created a uniform landscape for the development of browser extensions. However, there are differences in the API implementations and the scope of coverage among the browsers that use the extensions API (the major ones being Chrome, Edge, Firefox, Opera, and Safari).

Maximizing the reach of your browser extension means developing it for at least two browsers, possibly more. This article looks at six of the main challenges faced when creating a cross-browser extension and suggests how to address these challenges.

## Cross-platform extension coding hurdles

There are six areas you need to address when tackling a cross-platform extension:

- API namespace
- API asynchronous event handling
- API function coverage
- Manifest keys
- Extension packaging
- Extension publishing

### API namespace

There are two API namespaces in use among the main browsers:

- `browser.*`, the proposed standard for the extensions API used by Firefox and Safari.
- `chrome.*` used by Chrome, Opera, and Edge.

Firefox also supports the `chrome.*` namespace for APIs that are compatible with Chrome, primarily to assist with [porting](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/). However, using the `browser.*` namespace is preferred. In addition to being the proposed standard, `browser.*` uses promises—a modern and convenient mechanism for handling asynchronous events.

Only in the most trivial extensions is namespace likely to be the only cross-platform issue that has to be addressed. Therefore, it's rarely, if ever, helpful to address this issue alone. The best approach is to address this with asynchronous event handling.

### API asynchronous event handling

There are two approaches to handling asynchronous events in use among the main browsers:

- _Promises_, the proposed standard for the extensions API used by Firefox and Safari.
- _Callbacks_, used by Chrome, Edge, and Opera.

Firefox also supports callbacks for the APIs that support the `chrome.*` namespace. However, using promises (and the `browser.*` namespace) is recommended. Promises have been adopted as part of the proposed standard. It greatly simplifies asynchronous event handling, particularly where you need to chain events together.

> **Note:** If you're unfamiliar with the differences between these two methods, take a look at [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) or the MDN [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) page.

#### The WebExtension browser API Polyfill

So, how do you take advantage of promises easily? The solution is to code for Firefox using promises and use the [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) to address Chrome, Opera, and Edge.

This polyfill addresses the API namespace and asynchronous event handling across Firefox, Chrome, Opera, and Edge.

To use the polyfill, install it into your development environment using npm or download it directly from [GitHub releases](https://github.com/mozilla/webextension-polyfill/releases).

Then, reference `browser-polyfill.js` in:

- `manifest.json`, to make it available to background and content scripts.
- HTML documents, such as `browserAction` popups or tab pages.
- The `executeScript` call in dynamically-injected content scripts loaded by `tabs.executeScript`, where it hasn't been loaded using a `content_scripts` declaration in `manifest.json`.

So, for example, this `manifest.json` code makes the polyfill available to background scripts:

```json
{
 // …
 "background": {
   "scripts": [
     "browser-polyfill.js",
     "background.js"
   ]
 }
}
```

Your goal is to ensure that the polyfill executes in your extension before any other scripts that expect the `browser.*` API namespace execute.

> **Note:** For more details and information on using the polyfill with a module bundler, see the [project's readme on GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

There are other polyfill options. However, at the time of writing, none of the other options provide the coverage of the WebExtension browser API Polyfill. So, where you haven't targeted Firefox as your first choice, your options are to accept the limitations of alternative polyfills, port to Firefox and add cross-browser support, or develop your own polyfill.

### API function coverage

The differences in the API functions offered in each of the main browsers fall into three broad categories:

1. **Lack of support for an entire function.**
    For example, at the time of writing, Edge didn't support the {{WebExtAPIRef("browserSettings")}} function.
2. **Variations in the support for features within a function.**
    For example, at the time of writing, Firefox doesn't support the notification function method {{WebExtAPIRef("notifications.onButtonClicked")}}, while Firefox is the only browser that supports {{WebExtAPIRef("notifications.onShown")}}.
3. **Proprietary functions, supporting browser-specific features.**
    For example, at the time of writing, containers was a Firefox-specific feature supported by the {{WebExtAPIRef("contextualIdentities")}} function.

Details about the support for the extension APIs among the main browsers and Firefox for Android and Safari on iOS can be found on the Mozilla Developer Network [Browser support for JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) page. Browser compatibility information is also included with each function and its methods, types, and events in the Mozilla Developer Network [JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) reference pages.

#### Handling API differences

A simple approach to addressing API differences is to limit the functions used in your extension to functions that offer the same functionality across your range of targeted browsers. In practice, this approach is likely to be too restrictive for most extensions.

Instead, where there are differences among the APIs, you should either offer alternative implementations or fallback functionality. (Remember: you may also need to do this to allow for differences in API support between versions of the _same_ browser.)

The use of runtime checks on the availability of a function's features is the recommended approach to implementing alternative or fallback functionality. The benefit of performing a runtime check is that you don't need to update and redistribute the extension to take advantage of a function when it becomes available.

The following code enables you to perform a runtime check:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Manifest keys

The differences in the [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) file keys supported by the main browsers fall broadly into three categories:

1. **Extension information attributes.**
    For example, at the time of writing, Firefox and Opera include the [`developer`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) key for details about the developer of the extension.
2. **Extension features.**
    For example, at the time of writing, Chrome did not support the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) key.
3. **Key optionality.**
    At the time of writing, generally, only `"manifest_version"`, `"version"`, and `"name"` are mandatory keys.

Browser compatibility information is included with each key in the Mozilla Developer Network [`manifest.json` key reference pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

As `manifest.json` files tend to change little—except for release numbers, which may differ between the various browsers—creating and editing a static version for each browser is usually the simplest approach.

### Extension packaging

Packaging an extension for distribution through the browser extension stores is relatively straightforward. Firefox, Chrome, Edge, and Opera all use a simple zip format that requires the `manifest.json` file to be at the root of the zip package. Safari requires extensions to be packaged in a similar way to apps.

For details on packaging, refer to the guidance on the respective extension's developer portals.

### Extension publishing

Each of the major browsers maintains browser extension stores. Each store also reviews your extension to check for security vulnerabilities.

As a consequence, you need to approach adding and updating your extension for each store separately. In some cases, you can upload your extension using a utility.

This table summarizes the approach and features of each store:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registration fee</th>
      <th>Upload utility</th>
      <th>Pre-publication review process</th>
      <th>Account two-factor authentication</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><p>Chrome</p></th>
      <td><p>Yes</p></td>
      <td><p>Yes</p></td>
      <td><p>Automatic, less than an hour</p></td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Edge</p></th>
      <td><p>No</p></td>
      <td><p>No</p></td>
      <td><p>No SLA provided</p></td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Firefox</p></th>
      <td><p>No</p></td>
      <td>
        <p>
          <a
            href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
            >web-ext</a
          >
        </p>
      </td>
      <td>
        <p>Automatic, a few seconds.</p>
        <p>
          A manual review of the extension takes place after publication, which
          may result in the extension being suspended where issues that need
          fixing are found.
        </p>
      </td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>No</p></td>
      <td><p>No</p></td>
      <td><p>Manual, no SLA provided</p></td>
      <td><p>No</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Yes</p></td>
      <td><p>No</p></td>
      <td><p>Yes with, according to Apple, on average, 50% of apps reviewed in 24 hours and over 90% reviewed in 48 hours.</p></td>
      <td><p>Yes</p></td>
    </tr>
  </tbody>
</table>

### Other considerations

#### Version numbering

The Firefox, Chrome, and Edge stores require that each uploaded version has a different version number. This means you cannot revert to an earlier version number if you come across issues in a release.

## Conclusion

When approaching a cross-platform extension development, the differences between extension API implementations can be addressed by targeting Firefox and using the [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/). Following this approach, you benefit from using API features that are closely aligned with the proposed extensions API standard and gain the simplicity of promises for asynchronous event handling.

The bulk of your cross-platform work is likely to focus on handling variations among the API features supported by the main browsers. Creating your `manifest.json` files should be relatively straightforward and something you can do manually. You will then need to account for the variations in the processes for submitting to each extension store.

You can use [browser-extension-template](https://github.com/fregante/browser-extension-template) to quickly set up a working project for building and publishing a browser extension.

Following the advice in this article, you should be able to create an extension that works well on all of the four main browsers, enabling you to deliver your extension features to more people.
