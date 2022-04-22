---
title: Native manifests
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
tags:
  - Extensions
  - WebExtensions
---
{{AddonSidebar}}

Native manifests are specially formatted JSON files that are provisioned on the user's computer by some means outside the extension installation process. For example, a native manifest might be provisioned by a device administrator or by a native application installer.

There are three different types of native manifest:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native messaging manifests</a>
      </td>
      <td>
        Enable a feature called
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
        Define read-only data that an extension can access using the
        {{WebExtAPIRef("storage.managed")}} API.
      </td>
    </tr>
    <tr>
      <td><a href="#pkcs_11_manifests">PKCS #11 manifests</a></td>
      <td>
        Enable an extension to use the {{WebExtAPIRef("pkcs11")}} API
        to enumerate PKCS #11 security modules and install them in Firefox.
      </td>
    </tr>
  </tbody>
</table>

For all native manifests, you need to arrange things so the browser can find the manifest. The section on [manifest location](#manifest_location) describes these rules.

## Native messaging manifests

The native messaging manifest contains a single JSON object with the following properties:

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
          On MacOS and Linux, it must also match the native messaging manifest's
          filename (excluding the <code>.json</code> extension).
        </p>
        <p>
          On Windows, it must match the name of the registry key you create,
          that contains the location of the native messaging manifest.
        </p>
        <p>
          The name must match the following regular expression:
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
          On Windows, this may be relative to the manifest itself. On MacOS and
          Linux it must be absolute.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Describes the method used to connect the extension with the app.</p>
        <p>
          Currently, only one value can be given here, <code>"stdio"</code>,
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
          values. Each value represents an extension which is allowed to
          communicate with this native application.
        </p>
        <p>
          Note that this means you will probably want to include the
          <code
            ><a
              href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          key in your extension's <code>manifest.json</code> file, so you can
          set an explicit ID during development.
        </p>
      </td>
    </tr>
  </tbody>
</table>

For example, here's a manifest for the `ping_pong` native application:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": [ "ping_pong@example.org" ]
}
```

This allows the extension whose ID is `ping_pong@example.org` to connect, by passing the name `ping_pong` into the relevant {{WebExtAPIRef("runtime")}} API function. The application itself is at `/path/to/native-messaging/app/ping_pong.py`.

## Managed storage manifests

The managed storage manifest contains a single JSON object with the following properties:

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
          you've specified in the extension's
          <code
            ><a
              href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >applications</a
            ></code
          >
          key.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Human readable description, ignored by Firefox.</td>
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
          strings, numbers, booleans, arrays, or objects. This will become the
          data in the <code>browser.storage.managed</code> storage area.
        </p>
      </td>
    </tr>
  </tbody>
</table>

For example:

```json
{
  "name": "favourite-color-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    "color": "management thinks it should be blue!"
  }
}
```

Given this JSON manifest, the `favourite-color-examples@mozilla.org` extension could access the data using code like this:

```js
let storageItem = browser.storage.managed.get('color');
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## PKCS #11 manifests

The PKCS #11 manifest is a file containing a JSON object with the following properties:

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
        <p>This must match the name used in the <code>pkcs11</code> API.</p>
        <p>
          On MacOS and Linux, it must also match the manifest's filename
          (excluding the extension).
        </p>
        <p>
          On Windows, it must match the name of the registry key you create,
          which contains the location of the manifest.
        </p>
        <p>
          The name must match the following regular expression:
          <code>"^\w+(\.\w+)*$"</code>. This means that it may only contain
          lowercase alphanumeric characters, underscores and dots. It may not
          start or end with a dot, and a dot cannot be followed by another dot.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>Description of the module.</p>
        <p>
          This is used to set the friendly name for the module in the browser's
          UI (for example, the "Security Devices" dialog in Firefox).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Path to the module.</p>
        <p>
          On Windows, this may be relative to the manifest itself. On MacOS and
          Linux it must be absolute.
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
          values. Each value represents an extension which is allowed to
          interact with the module.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This means you will probably want to include
            the
            <code
              ><a
                href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >applications</a
              ></code
            >
            key in your extension's <code>manifest.json</code> file, so you can
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

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

The key should have a single default value, which is the path to the manifest.

> **Warning:** As of Firefox 64, the 32-bit registry view ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) will be checked first for these keys, followed by the "native" registry view. Use whichever is appropriate for your application.
>
> **For Firefox 63 and older:** This key should _not_ be created under [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system), even if the app is 32-bit. Previous versions of the browser will always look for the key under the "native" view of the registry, not the 32-bit emulation. To ensure that the key is created in the "native" view, you can pass the `KEY_WOW64_64KEY` or `KEY_WOW64_32KEY` flags into `RegCreateKeyEx`. See [Accessing an Alternate Registry View](https://docs.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

For per-user visibility, create a registry key with the following name:

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

The key should have a single default value, which is the path to the manifest.

### macOS

For global visibility, store the manifest in:

```
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```
/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```
/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

For per-user visibility, store the manifest in:

```
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```
~/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```
~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

For global visibility, store the manifest in either:

```
/usr/lib/mozilla/native-messaging-hosts/<name>.json
```

```
/usr/lib/mozilla/managed-storage/<name>.json
```

```
/usr/lib/mozilla/pkcs11-modules/<name>.json
```

or:

```
    /usr/lib64/mozilla/native-messaging-hosts/<name>.json
```

```
    /usr/lib64/mozilla/managed-storage/<name>.json
```

```
    /usr/lib64/mozilla/pkcs11-modules/<name>.json
```

For per-user visibility, store the manifest in:

```
~/.mozilla/native-messaging-hosts/<name>.json
```

```
~/.mozilla/managed-storage/<name>.json
```

```
~/.mozilla/pkcs11-modules/<name>.json
```
