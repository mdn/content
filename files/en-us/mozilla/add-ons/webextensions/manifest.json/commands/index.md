---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.commands
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the **`commands`** key to define one or more keyboard shortcuts for your extension.

Each keyboard shortcut is defined with a **name**, a **combination of keys**, and a **description**. After defining commands in your extension's `manifest.json`, you can listen for their associated key combinations with the {{WebExtAPIRef("commands")}} API.

## Syntax

The `commands` key is an object, and each shortcut is a property of it. **The property's name is the name of the shortcut.**

Each shortcut's value is an object with up to 2 properties:

1. `suggested_key` {{optional_inline}}: the combination of keys that activate the shortcut.
2. `description` {{optional_inline}}: a string that describes the shortcut, i.e., what it does.

The `suggested_key` property is an object with any or none of these properties (all strings):

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

The value of each property is the keyboard shortcut for the command on that platform, as a string containing keys separated by "`+`". The value for `"default"` is used on all platforms that aren't explicitly listed. If `"default"`` isn't included, the command doesn't have a keyboard shortcut on any platform not included, unless a shortcut is configured by the user or through the {{WebExtAPIRef("commands.update")}} API.

For example:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event to the extension"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  },
  "do-something-else": {
    "suggested_key": {
      "linux": "Ctrl+Shift+P"
    }
  },
  "do-nothing-yet": {}
}
```

This JSON defines these shortcuts:

1. `"toggle-feature"`, accessed with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> on Linux, and <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> on all other platforms.
2. `"do-another-thing"`, accessed with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> on all platforms.
3. `"do-something-else"`, accessed with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Linux only, and no default shortcut on other platforms.
4. `"do-nothing-yet"`, sets no keyboard shortcut but enables a shortcut to be set by the user or with the {{WebExtAPIRef("commands.update")}} API.

You can listen for the commands with code like this, in this case for the `"toggle-feature"` command:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### Special shortcuts

There are 4 **special shortcuts with default actions** for which the {{WebExtAPIRef("commands.onCommand")}} event doesn't fire:

- `_execute_browser_action`: works like a click on a [toolbar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) created with {{WebExtAPIRef("browserAction")}} or specified in the [browser_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) key in the manifest.json key.
- `_execute_action`: works like a click on a [toolbar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) created with {{WebExtAPIRef("action")}} or specified in the [action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key in the manifest.json key.
- `_execute_page_action`: works like a click on an [address bar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) created with {{WebExtAPIRef("pageAction")}} or specified in the [page_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) key in the manifest.json key.
- `_execute_sidebar_action`: opens the extension's [sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) specified in the [sidebar_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json key.

The availability of these special shortcuts varies between manifest versions and browsers, like this:

<table>
<thead>
  <tr>
    <th></th>
    <th>Manifest V2</th>
    <th>Manifest V3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>_execute_browser_action</code></td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td><code>_execute_action</code></td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td><code>_execute_page_action</code></td>
    <td>Yes</td>
    <td>Firefox only</td>
  </tr>
  <tr>
    <td><code>_execute_sidebar_action</code></td>
    <td>Firefox only</td>
    <td>Firefox only</td>
  </tr>
</tbody>
</table>

> [!NOTE]
> If the user changes the shortcut of the `_execute_browser_action` command, it is automatically carried over to the `_execute_action` command when the extension migrates from Manifest V2 to V3. This was implemented in Chrome 111 and Firefox 127.

For example, this JSON defines a key combination that clicks the extension's browser action:

```json
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Shortcut values

There are two valid formats for shortcut keys: as a **key combination** or as a **media key**.

### Key combinations

> [!NOTE]
> On Macs, `"Ctrl"` is interpreted as `"Command"`, so if you actually need `"Ctrl"`, specify `"MacCtrl"`.

Key combinations must consist of 2 or 3 keys:

1. **modifier** (mandatory, except for function keys). This can be any of: `"Ctrl"`, `"Alt"`, `"Command"`, or `"MacCtrl"`.
2. **secondary modifier** (optional). If supplied, this must be either `"Shift"` or (for Firefox ≥ 63) any one of `"Ctrl"`, `"Alt"`, `"Command"`, or `"MacCtrl"`. Must not be the modifier already used as the main modifier.
3. **key** (mandatory). This can be any one of:

   - the letters `A` – `Z`
   - the numbers `0` – `9`
   - the function keys `F1` – `F12`
     > [!NOTE]
     > From Firefox 135, users can assign the `F13` to `F19` keys to an extension using [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox). Your extension can't assign these keys from the manifest file. However, it can assign them using {{WebExtAPIRef("commands.update")}}.
   - `Comma`, `Period`, `Home`, `End`, `PageUp`, `PageDown`, `Space`, `Insert`, `Delete`, `Up`, `Down`, `Left`, `Right`

The key is then given as a string containing the set of key values, in the order listed above, separated by "`+`". For example, `"Ctrl+Shift+Z"`.

If a key combination is already used by the browser (like `"Ctrl+P"`) or by an existing add-on, then you can't override it. You can define it, but your event handler will not be called when the user presses the key combination.

### Media keys

Alternatively, the shortcut may be specified as one of the following media keys:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Updating shortcuts

Shortcuts can be updated via {{WebExtAPIRef("commands.update()")}}. Users can also update shortcuts via the "Manage Extension Shortcuts" option at `about:addons` in Firefox, as shown in [this video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647). In Chrome, users can change shortcuts at `chrome://extensions/shortcuts`.

## Example

Define a single keyboard shortcut, using only the default key combination:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

Define two keyboard shortcuts, one with a platform-specific key combination:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Browser compatibility

{{Compat}}
