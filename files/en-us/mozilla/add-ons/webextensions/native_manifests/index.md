---
title: Native manifests
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
page-type: guide
---

{{AddonSidebar}}

Native manifests are JSON files provisioned on the user's computer by means other than the extension installation process. For example, a native manifest might be provisioned by a device administrator or native application installer.

There are three types of native manifest:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native messaging manifests</a>
      </td>
      <td>
        Enables a feature called
        <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >native messaging</a
        >, in which an extension can communicate with a native app installed on
        the device.
      </td>
    </tr>
    <tr>
      <td>
        <a href="#managed_storage_manifests">Managed storage manifests</a>
      </td>
      <td>
        Defines read-only data that an extension can access using the
        {{WebExtAPIRef("storage.managed")}} API.
      </td>
    </tr>
    <tr>
      <td><a href="#pkcs_11_manifests">PKCS #11 manifests</a></td>
      <td>
        Enables an extension to use the {{WebExtAPIRef("pkcs11")}} API
        to enumerate PKCS #11 security modules and install them in Firefox.
      </td>
    </tr>
  </tbody>
</table>

For all native manifests, you need to store the file so the browser can find it. The section on [manifest location](#manifest_location) describes how to do this. On Linux and macOS, the files are in a fixed location, on Windows the file location is written to the Windows Registry.

## Native messaging manifests

The native messaging manifest is a file with a name that matches the string passed by the extension into {{WebExtAPIRef("runtime.connectNative()")}} or {{WebExtAPIRef("runtime.sendNativeMessage()")}} with the `.json` extension. It contains a JSON object with these properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>Name of the native application.</p>
        <p>
          This must match the name passed into
          {{WebExtAPIRef("runtime.connectNative()")}} or
          {{WebExtAPIRef("runtime.sendNativeMessage()")}} by
          the extension.
        </p>
        <p>
          On Windows, use this value as the name of the registry key you create
          that contains the location of the native messaging manifest.
        </p>
        <p>
          The name must match the regular expression:
          <code>"^\w+(\.\w+)*$"</code>. This means that it may only contain
          (lowercase or uppercase) alphanumeric characters, underscores, and
          dots. It may not start or end with a dot, and a dot cannot be followed
          by another dot.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Description of the native application.</td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Path to the native application.</p>
        <p>
          On Windows, this may be relative to the manifest itself. On macOS and
          Linux, it must be absolute.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Describes the method used to connect the extension with the app.</p>
        <p>
          Takes the value <code>"stdio"</code> only,
          which indicates that messages are received by the app using standard
          input (<code>stdin</code>) and sent using standard output
          (<code>stdout</code>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array of String</td>
      <td>
        <p>
          An array of
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on ID</a
          >
          values. Each value represents an extension allowed to
          communicate with this native application.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This means you want to include
            the
            <code
              ><a
                href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            key in your extension's <code>manifest.json</code> file so you
            set an explicit ID during development.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

For example, here's the content of the `ping_pong.json` manifest file for the `ping_pong` native application from the [native messaging example](https://github.com/mdn/webextensions-examples/tree/main/native-messaging):

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

This allows the extension with the ID `ping_pong@example.org` to connect by passing the name `ping_pong` into the relevant {{WebExtAPIRef("runtime")}} API function. The native application is at `/path/to/native-messaging/app/ping_pong.py`.

## Managed storage manifests

The managed storage manifest is a file with a name that matches the ID specified in the extension's [browser_specific_settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key with the `.json` extension. It contains a JSON object with these properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>
          The ID of the extension that can access this storage, given as the ID
          specified in the extension's
          <code
            ><a
              href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          key.
        </p>
        <p>
          On Windows, use this as the name of the registry key you create,
          which contains the location of the manifest.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Human-readable description, ignored by Firefox.</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>This must be <code>"storage"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td>Object</td>
      <td>
        <p>
          A JSON object that may contain any valid JSON values, including
          strings, numbers, booleans, arrays, or objects. This becomes the
          data in the <code>browser.storage.managed</code> storage area.
        </p>
      </td>
    </tr>
  </tbody>
</table>

For example, in the [favourite-colour example](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) manage storage data is set in the file named `favourite-colour-examples@mozilla.org.json`, which contains:

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "color": "management thinks it should be blue!"
  }
}
```

The `favourite-colour-examples@mozilla.org` extension then accesses the data using code like this:

```js
let storageItem = browser.storage.managed.get("color");
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## PKCS #11 manifests

The PKCS #11 manifest is a file with a name that matches the name of the PKCS #11 module (as used in the <code>pkcs11</code> API) with the `.json` extension. It contains a JSON object with these properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>Name of the PKCS #11 module.</p>
        <p>This must match the name used in the {{WebExtAPIRef("pkcs11")}} API.</p>
        <p>
          On Windows, use this as the name of the registry key you create,
          which contains the location of the manifest.
        </p>
        <p>
          The name must match the regular expression:
          <code>"^\w+(\.\w+)*$"</code>. This means that it may only contain
          lowercase alphanumeric characters, underscores, and dots. It may not
          start or end with a dot, and a dot cannot be followed by another dot.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>Description of the PKCS #11 module.</p>
        <p>
          This sets the friendly name for the module in the browser's
          UI (for example, the "Security Devices" dialog in Firefox).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Path to the PKCS #11 module.</p>
        <p>
          The path to the PKCS #11 module may be absolute or relative to the manifest itself.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>This must be <code>"pkcs11"</code>.</td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array of String</td>
      <td>
        <p>
          An array of
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on ID</a
          >
          values. Each value represents an extension allowed to
          interact with the module.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This means you want to include
            the
            <code
              ><a
                href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            key in your extension's <code>manifest.json</code> file so you
            set an explicit ID during development.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

For example:

```json
{
  "name": "my_module",
  "description": "My test module",
  "type": "pkcs11",
  "path": "/path/to/libpkcs11testmodule.dylib",
  "allowed_extensions": ["my-extension@mozilla.org"]
}
```

Given this JSON manifest, saved as `my_module.json`, the `my-extension@mozilla.org` extension could install the security module at `/path/to/libpkcs11testmodule.dylib` using code like this:

```js
browser.pkcs11.installModule("my_module");
```

## Manifest location

On Linux and macOS, you need to store the manifest in a particular place. On Windows, you need to create a registry key that points to the manifest's location.

The detailed rules are the same for all the manifest types, except that the penultimate component of the path identifies the type of manifest. The examples below show the form for each of the three different types. In all the examples, `<name>` is the value of the `name` property in the manifest.

### Windows

For global visibility, create a registry key with the following name:

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

The key should have a single default value, which is the path to the manifest.

> [!WARNING]
> As of Firefox 64, the 32-bit registry view [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) will be checked first for these keys, followed by the "native" registry view. Use whichever is appropriate for your application.
>
> **For Firefox 63 and older:** This key should _not_ be created under [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system), even if the app is 32-bit. Previous versions of the browser will always look for the key under the "native" view of the registry, not the 32-bit emulation. To ensure that the key is created in the "native" view, you can pass the `KEY_WOW64_64KEY` or `KEY_WOW64_32KEY` flags into `RegCreateKeyEx`. See [Accessing an Alternate Registry View](https://learn.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

For per-user visibility, create a registry key with the following name:

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

The key should have a single default value, which is the path to the manifest.

### macOS

For global visibility, store the manifest in:

```plain
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```plain
/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```plain
/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

For per-user visibility, store the manifest in:

```plain
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```plain
~/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```plain
~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

For global visibility, store the manifest in either:

```plain
/usr/lib/mozilla/native-messaging-hosts/<name>.json
```

```plain
/usr/lib/mozilla/managed-storage/<name>.json
```

```plain
/usr/lib/mozilla/pkcs11-modules/<name>.json
```

or:

```plain
/usr/lib64/mozilla/native-messaging-hosts/<name>.json
```

```plain
/usr/lib64/mozilla/managed-storage/<name>.json
```

```plain
/usr/lib64/mozilla/pkcs11-modules/<name>.json
```

For per-user visibility, store the manifest in:

```plain
~/.mozilla/native-messaging-hosts/<name>.json
```

```plain
~/.mozilla/managed-storage/<name>.json
```

```plain
~/.mozilla/pkcs11-modules/<name>.json
```
