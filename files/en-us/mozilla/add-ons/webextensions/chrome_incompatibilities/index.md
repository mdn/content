---
title: Chrome incompatibilities
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
page-type: guide
---

{{AddonSidebar}}

Extensions built with WebExtension APIs are designed to be compatible with Chrome and Opera extensions. As far as possible, extensions written for those browsers should run on Firefox with minimal changes.

However, there are significant differences between Chrome, Firefox, and Edge. In particular:

- Support for JavaScript APIs differs across browsers. See [Browser support for JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) for more details.
- Support for `manifest.json` keys differs across browsers. See the ["Browser compatibility" section](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) in the [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page for more details.
- JavaScript APIs:

  - **In Firefox:** JavaScript APIs are accessed under the `browser` namespace.
  - **In Chrome and Edge:** JavaScript APIs are accessed under the `chrome` namespace. (cf. [Chrome bug 798169](https://crbug.com/798169))

- Asynchronous APIs:

  - **In Firefox:** Asynchronous APIs are implemented using promises.
  - **In Chrome and Edge:** Asynchronous APIs are implemented using callbacks. (cf. [Chrome bug 328932](https://crbug.com/328932))

The rest of this page summarizes these and other incompatibilities.

## JavaScript APIs

### chrome.\* and browser.\* namespace

- **In Firefox:** The equivalent APIs are accessed using the `browser` namespace.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Extensions access privileged JavaScript APIs using the `chrome` namespace.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Callbacks and promises

- **In Firefox:** Asynchronous APIs use [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to return values instead.

  ```js
  function logCookie(c) {
    console.log(c);
  }

  function logError(e) {
    console.error(e);
  }

  let setCookie = browser.cookies.set({
    url: "https://developer.mozilla.org/",
  });
  setCookie.then(logCookie, logError);
  ```

- **In Chrome:** Asynchronous APIs use callbacks to return values, and {{WebExtAPIRef("runtime.lastError")}} to communicate errors.

  ```js
  function logCookie(c) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(c);
    }
  }

  chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
  ```

### Firefox supports both the chrome and browser namespaces

As a porting aid, the Firefox implementation of WebExtensions supports `chrome`, using callbacks, as well as `browser`, using promises. This means that many Chrome extensions will just work in Firefox without any changes.

> **Note:** However, this is _not_ part of the WebExtensions standard and may not be supported by all compliant browsers.

If you choose to write your extension to use `browser` and promises, then Firefox also provides a polyfill that will enable it to run in Chrome: <https://github.com/mozilla/webextension-polyfill>.

### Partially supported APIs

The page [Browser support for JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) includes compatibility tables for all APIs that have any support in Firefox. Where there are caveats around support for a given API item, this is indicated in these tables with an asterisk "\*" and in the reference page for the API item, the caveats are explained.

These tables are generated from compatibility data stored as [JSON files in GitHub](https://github.com/mdn/browser-compat-data).

The rest of this section describes compatibility issues that are not already captured in the tables.

#### Notifications API

For `notifications.create()`, with `type "basic"`:

- **In Firefox**: `iconUrl` is optional.
- **In Chrome**: `iconUrl` is required.

When the user clicks on a notification:

- **In Firefox**: The notification is cleared immediately.
- **In Chrome**: This is not the case.

If you call `notifications.create()` more than once in rapid succession:

- **In Firefox**: In Firefox, the notifications may not display at all. Waiting to make subsequent calls until within the `chrome.notifications.create()` callback function is not a sufficient delay to prevent this.

#### Proxy API

Firefox and Chrome include a Proxy API. However, the design of these two APIs is incompatible.

- **In Firefox**: Proxies are set using the [proxy.settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) property or [proxy.onRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) to provide [ProxyInfo](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamically.
  See [proxy](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy) for more information on the API.
- **In Chrome**: Proxy settings are defined in a [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/proxy/#type-ProxyConfig) object. Depending on Chrome's proxy settings, the settings may contain [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/proxy/#type-ProxyRules) or a [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/proxy/#type-PacScript). Proxies are set using the [proxy.settings](https://developer.chrome.com/docs/extensions/reference/proxy/#property-settings) property.
  See [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/proxy/) for more information on the API.

#### Tabs API

When using `tabs.executeScript()` or `tabs.insertCSS()`:

- **In Firefox**: Relative URLs passed are resolved relative to the current page URL.
- **In Chrome**: These URLs are resolved relative to the extension's base URL.

To work cross-browser, you can specify the path as an absolute URL, starting at the extension's root, like this:

```plain
/path/to/script.js
```

When querying tabs by URL `tabs.query()`:

- **In Firefox**: Extensions must have the `"tabs"` permission.
- **In Chrome**: Extensions do not need the `"tabs"` permission, but only tabs whose URLs match the extension's host permissions will be included in the results.

When calling `tabs.remove()`:

- **In Firefox**: The `tabs.remove()` promise is fulfilled after the `beforeunload` event.
- **In Chrome**: The callback does not wait for `beforeunload`.

#### WebRequest API

- **In Firefox:**

  - Requests can be redirected only if their original URL uses the `http:` or `https:` scheme.
  - The `activeTab` permission does not allow intercepting network requests in the current tab. (See [bug 1617479](https://bugzil.la/1617479))
  - Events are not fired for system requests (for example, extension upgrades or search bar suggestions).

    - **From Firefox 57 onwards:** Firefox makes an exception for extensions that need to intercept {{WebExtAPIRef("webRequest.onAuthRequired")}} for proxy authorization. See the documentation for {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - If an extension wants to redirect a public (e.g., HTTPS) URL to an [extension page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), the extension's `manifest.json` file must contain a [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key with the URL of the extension page.

    - > **Note:** _Any_ website may then link or redirect to that URL, and extensions should treat any input (POST data, for example) as if it came from an untrusted source, just as a normal web page should.

  - Some of the `browser.webRequest.*` APIs allow returning Promises that resolves `webRequest.BlockingResponse` asynchronously.

- **In Chrome:** Only `webRequest.onAuthRequired` supports asynchronous `webRequest.BlockingResponse` via supplying `'asyncBlocking'`.

#### Windows API

- **In Firefox:** `onFocusChanged` of the {{WebExtAPIRef("windows")}} API, will trigger multiple times for a given focus change.

### Unsupported APIs

#### DeclarativeContent API

- **In Firefox:** Chrome's [declarativeContent](https://developer.chrome.com/docs/extensions/reference/declarativeContent/) API [has not yet been implemented](https://bugzil.la/1435864). In addition, Firefox [will not be supporting](https://bugzil.la/1323433#c16) the `declarativeContent.RequestContentScript` API (which is rarely used, and is unavailable in stable releases of Chrome).

### Miscellaneous incompatibilities

#### URLs in CSS

- **In Firefox:** URLs in injected CSS files are resolved relative to _the CSS file itself_.
- **In Chrome:** URLs in injected CSS files are resolved relative to _the page they are injected into_.

#### Support for dialogs in background pages

- **In Firefox:** [`alert()`](/en-US/docs/Web/API/Window/alert), [`confirm()`](/en-US/docs/Web/API/Window/confirm), and [`prompt()`](/en-US/docs/Web/API/Window/prompt) are not supported in background pages:

#### web_accessible_resources

- **In Firefox:** Resources are assigned a random {{Glossary("UUID")}} that changes for every instance of Firefox: `moz-extension://«random-UUID»/«path»`. This randomness can prevent you from doing a few things, such as add your specific extension's URL to another domain's CSP policy.
- **In Chrome:** When a resource is listed in `web_accessible_resources`, it is accessible as `chrome-extension://«your-extension-id»/«path»`. The extension ID is fixed for a given extension.

#### Manifest "key" property

- **In Firefox:** Since Firefox uses random UUIDs for `web_accessible_resources`, this property is unsupported.
- **In Chrome:** When working with an unpacked extension, the manifest may include a [`"key"` property](https://developer.chrome.com/docs/extensions/mv3/manifest/key/) to pin the extension ID across different machines. This is mainly useful when working with `web_accessible_resources`.

#### Content script HTTP(S) requests

- **In Firefox:** When a content script makes an HTTP(S) request, you _must_ provide absolute URLs.
- **In Chrome:** When a content script makes a request (for example, using [`fetch()`](/en-US/docs/Web/API/Fetch_API/Using_Fetch)) to a relative URL (like `/api`), it will be sent to `https://example.com/api`.

#### Content script environment

- **In Firefox:** The global scope of the [content script environment](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) is not strictly equal to `window` ([Firefox bug 1208775](https://bugzil.la/1208775)). More specifically, the global scope (`globalThis`) is composed of standard JavaScript features as usual, plus `window` as the prototype of the global scope. Most DOM APIs are inherit from the page through `window`, through [Xray vision](/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) to shield the content script from modifications by the web page. Content scripts may encounter JavaScript objects from its own global scope or Xray-wrapped versions from the web page.
- **In Chrome:** The global scope is `window` and the available DOM APIs are generally independent of the web page (other than sharing the underlying DOM). Content scripts cannot directly access JavaScript objects from the web page.

#### Executing code in web page from content script

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} runs code in the context of the content script, and `window.eval` runs code in the context of the page. See [Using `eval` in content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} and `window.eval` always runs code in the context of the content script, not in the context of the page.

#### Sharing variables between content scripts

- **In Firefox:** You cannot share variables between content scripts by assigning them to `this.{variableName}` in one script and then attempting to access them using `window.{variableName}` in another. This is a limitation created by the sandbox environment in Firefox. This limitation may be removed, see [Firefox bug 1208775](https://bugzil.la/1208775).

#### Content script lifecycle during navigation

- **In Firefox:** Content scripts remain injected in a web page after the user has navigated away, however, window object properties are destroyed. For example, if a content script sets `window.prop1 = "prop"` and the user then navigates away and returns to the page `window.prop1` is undefined. This issue is tracked in [Firefox bug 1525400](https://bugzil.la/1525400).

  To mimic the behavior of Chrome, listen for the [pageshow](/en-US/docs/Web/API/Window/pageshow_event) and [pagehide](/en-US/docs/Web/API/Window/pagehide_event) events. Then simulate the injection or destruction of the content script.

- **In Chrome:** Content scripts are destroyed when the user navigates away from a web page. If the user then returns to the page through history, by clicking the back button, the content script is injected into the web page again.

#### "per-tab" zoom behavior

- **In Firefox:** The zoom level persists across page loads and navigation within the tab.
- **In Chrome:** Zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.

See {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json keys

The main [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) page includes a table describing browser support for `manifest.json` keys. Where there are caveats around support for a given key, this is indicated in the table with an asterisk "\*" and in the reference page for the key, the caveats are explained.

These tables are generated from compatibility data stored as [JSON files in GitHub](https://github.com/mdn/browser-compat-data).

## Native messaging

### Connection-based messaging arguments

**On Linux and Mac:** Chrome passes one argument to the native app, which is the origin of the extension that started it, in the form: `chrome-extension://«extensionID/»` (trailing slash required). This enables the app to identify the extension.

**On Windows:** Chrome passes two arguments:

1. The origin of the extension
2. A handle to the Chrome native window that started the app

### allowed_extensions

- **In Firefox:** The manifest key is called `allowed_extensions`.
- **In Chrome:** The manifest key is called `allowed_origins` instead.

### App manifest location

- **In Chrome:** The app manifest is expected in a different place. See [Native messaging host location](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in the Chrome docs.

### App persistence

- **In Firefox:** When a native messaging connection is closed, Firefox kills the subprocesses if they do not break away. On Windows, the browser puts the native application's process into a [Job object](<https://msdn.microsoft.com/library/windows/desktop/ms684161(v=vs.85).aspx>) and kills the job. Suppose the native application launches other processes and wants them to remain open after the native application is killed. In that case, the native application must use `CreateProcess`, instead of `ShellExecute`, to launch the additional process with the [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/library/windows/desktop/ms684863(v=vs.85).aspx>) flag.

## Data cloning algorithm

Some extension APIs allow an extension to send data from one part of the extension to another, such as {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, the `postMessage()` method of {{WebExtAPIRef("runtime.port")}}, and {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** The [Structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.
- **In Chrome:** The [JSON serialization algorithm](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) is used. It may switch to structured cloning in the future ([issue 248548](https://crbug.com/248548)).

The Structured clone algorithm supports more types than the JSON serialization algorithm. A notable exception are (DOM) objects with a `toJSON` method. DOM objects are not cloneable nor JSON-serializable by default, but with a `toJSON()` method, these can be JSON-serialized (but still not cloned with the structured cloning algorithm). Examples of JSON-serializable objects that are not structured cloneable include instances of {{domxref("URL")}} and {{domxref("PerformanceEntry")}}.

Extension that rely on the `toJSON()` method of the JSON serialization algorithm can use {{jsxref("JSON.stringify()")}} followed by {{jsxref("JSON.parse()")}} to ensure that a message can be exchanged, because a parsed JSON value is always structurally cloneable.
