---
title: message_serialization
slug: Mozilla/Add-ons/WebExtensions/manifest.json/message_serialization
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.message_serialization
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>3 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">"message_serialization": "structured_clone"</pre>
      </td>
    </tr>
  </tbody>
</table>

Use the `message_serialization` key to choose how Chrome and Safari extensions serialize the messages they send with {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.connect()")}}, {{WebExtAPIRef("tabs.connect()")}}, and the `postMessage()` method of {{WebExtAPIRef("runtime.Port")}}.

This is a string that can take either of these values:

- `"json"` (the default): messages are serialized as JSON, as with [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). Values that JSON can't represent, such as a {{jsxref("Map")}}, a {{jsxref("Date")}}, an {{jsxref("ArrayBuffer")}}, or a {{domxref("Blob")}}, arrive as an empty object or a string.
- `"structured_clone"`: messages are serialized with the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), which supports more types than JSON. Binary data and values such as `Map` and `Date` can be sent without encoding them first.

Firefox always uses the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) and ignores this key.

## Using the structured clone algorithm

The structured clone algorithm isn't a replacement for JSON serialization. Before using it, check that your extension and any library it uses to send messages don't rely on JSON behavior. When using the structured clone algorithm:

- **`toJSON()` methods are ignored.** JSON serialization calls an object's `toJSON()` method and sends the result. Structured cloning doesn't call it; instead, it copies the object's enumerable properties. An object that uses `toJSON()` to omit or transform properties sends different data. If some messages in your extension rely on `toJSON()`, you can apply it for those messages. See [Send a value that has a `toJSON()` method](#send_a_value_that_has_a_tojson_method).
- **Some values that JSON skips throw an error.** JSON serialization silently omits properties whose values are functions. Structured cloning throws a `DataCloneError` instead. Objects wrapped in a {{jsxref("Proxy")}}, such as the reactive state objects of some UI frameworks, also can't be cloned.
- **Class instances arrive as plain objects.** The prototype and methods of the sent object aren't preserved.
- **Libraries share the setting.** The key applies to every message the extension sends, including messages sent by third-party libraries. A library that relies on JSON behavior may break.

In Chrome, extensions that use different serialization formats can't exchange messages. If extension A uses JSON serialization and sends a message to extension B, which uses structured cloning, the message fails to send, and the port closes. Safari doesn't support messaging between extensions. Messages from web pages sent with [`externally_connectable`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable), the replies to them, and messages to native apps always use JSON, even if the extension uses structured cloning, so a web page that relies on `toJSON()` keeps working.

To check whether an extension is using structured cloning, read the key from the manifest:

```js
const usesStructuredClone =
  browser.runtime.getManifest().message_serialization === "structured_clone";
```

## Examples

Choose to use the structured clone algorithm:

```json
"message_serialization": "structured_clone"
```

With this key set, a background script can send a `Map` to a content script, and the content script receives a `Map`:

```js
// background.js
const tabs = await browser.tabs.query({ active: true, currentWindow: true });
browser.tabs.sendMessage(tabs[0].id, {
  headers: new Map([["Content-Language", "en"]]),
});

// content-script.js
browser.runtime.onMessage.addListener((message) => {
  console.log(message.headers.get("Content-Language")); // "en"
});
```

### Send a value that has a `toJSON()` method

Structured cloning doesn't call `toJSON()`. To keep the JSON result for a message, apply it before sending. Other messages continue to use structured cloning.

```js
class Account {
  constructor(name, token) {
    this.name = name;
    this.token = token;
  }

  toJSON() {
    return { name: this.name };
  }
}

const account = new Account("Alice", "a1b2c3");

// Sends { name: "Alice", token: "a1b2c3" }, because toJSON() is ignored.
browser.runtime.sendMessage(account);

// Sends { name: "Alice" }.
browser.runtime.sendMessage(account.toJSON());

// Applies toJSON() to nested objects too.
browser.runtime.sendMessage(JSON.parse(JSON.stringify(account)));
```

## Browser compatibility

{{Compat}}
