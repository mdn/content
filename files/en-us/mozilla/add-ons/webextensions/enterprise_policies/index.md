---
title: Enterprise policies and extensions
slug: Mozilla/Add-ons/WebExtensions/Enterprise_policies
page-type: guide
sidebar: addonsidebar
---

An enterprise policy is a setting applied by a system administrator, so a browser or extension is configured the same for everyone in an organization. Users and extensions cannot modify the policies.

Browsers expose two kinds of policies that are relevant to extensions:

- **Installation and lifecycle policies**, which control whether an extension is installed, force-installed, blocked, or locked so users can't remove it.
- **Configuration data policies**, which enable an administrator to supply values that an extension uses to modify its behavior, for example, to set a default server URL or block features. The extension reads these values using the {{WebExtAPIRef("storage.managed")}} API.

Firefox, Chrome, and Safari take different approaches to defining these policies.

## Firefox

### Installation and lifecycle policies

Firefox administrators configure a JSON file named `policies.json` (deployed through `enterprise policies`, sometimes together with an MDM tool) to control installation and lifecycle behavior. The policies most relevant to extensions are:

- `Extensions`
  - : Controls installation, uninstallation, and locking of specific extensions.
- `ExtensionSettings`
  - : A more general policy that manages installation origins, update URLs, permissions, and blocked or allowed extension lists; it also supports the `restricted_domains` setting referenced in [Content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains).
- `ExtensionUpdate`
  - : Enables or turns off extension updates.
- `InstallAddonsPermission`
  - : Configures the default install policy and the origins extensions can be installed from.
- `BlockAboutAddons`
  - : Blocks access to `about:addons`.

For a full list of policies and the file's JSON syntax, see the [Firefox policy reference](https://firefox-admin-docs.mozilla.org/reference/policies/) and the Mozilla [policy-templates](https://github.com/mozilla/policy-templates) on GitHub.

### Configuration data: the `3rdparty` policy and native manifests

Firefox offers two ways for an administrator to supply configuration data to an extension:

- The [`3rdparty` policy](https://firefox-admin-docs.mozilla.org/reference/policies/3rdparty.html), which nests arbitrary data under `policies > 3rdparty > Extensions > <extension ID>` in `policies.json`.
- A [managed storage native manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) JSON file. This file is provisioned outside the extension (for example, by an installer or device management tool) at a fixed OS-specific location.

Both mechanisms populate the {{WebExtAPIRef("storage.managed")}} storage area. Firefox doesn't require the extension to declare a `managed_schema` in the [storage](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) manifest key to describe the shape of this data.

> [!NOTE]
> In Firefox, you must restart the browser to load changes to the native manifest or the `3rdparty` policy into managed storage. As a result, {{WebExtAPIRef("storage.onChanged")}} never fires for managed storage. If managed storage is not configured for an extension, calling {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}} or {{WebExtAPIRef("storage.StorageArea.getKeys()", "storage.managed.getKeys()")}} throws an exception rather than returning `undefined` (see [Firefox bug 1868153](https://bugzil.la/1868153)).

## Chrome

### Installation and lifecycle policies

Installation and lifecycle are controlled by policies including:

- [`ExtensionInstallForcelist`](https://chromeenterprise.google/policies/extension-install-forcelist/), which force-installs a list of extensions that users can't remove or disable.
- [`ExtensionSettings`](https://chromeenterprise.google/policies/extension-settings/), a superset policy that also controls update URLs, blocked permissions, and blocked and allowed hosts, and overrides `ExtensionInstallForcelist` where both apply.

See [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) and the [Chrome Enterprise policy list](https://chromeenterprise.google/policies/) for the full set.

### Configuration data

Chrome extensions declare the shape of their managed configuration data with a [`storage.managed_schema`](https://developer.chrome.com/docs/extensions/reference/manifest/storage) JSON schema file referenced from `manifest.json`. Administrators then supply values that match that schema through platform-specific policy management (for example, the Windows registry, a macOS configuration profile, or the Google Admin console). Values that don't validate against the schema aren't published to the extension.

## Safari

Safari's enterprise support, delivered through declarative device management (MDM) on supervised Apple devices, covers only installation and lifecycle: allowing, always enabling, or always turning off specific extensions; controlling private-browsing access; and restricting the domains an extension can access.

There is no Safari equivalent of `storage.managed`; Apple's declarative configuration has no mechanism for an administrator to push arbitrary configuration data into an extension.

See [Safari extensions management: declarative device management](https://support.apple.com/guide/deployment/safari-extensions-management-declarative-depff7fad9d8/web) for the full configuration reference.

## Comparison

|                                             | Firefox                                                           | Chrome                                                            | Safari                              |
| ------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| Force-install / block / lock extensions     | Yes (`Extensions`, `ExtensionSettings`)                           | Yes (`ExtensionInstallForcelist`, `ExtensionSettings`)            | Yes (declarative device management) |
| Restrict host/domain access                 | Yes (`ExtensionSettings` `restricted_domains`)                    | Yes (`ExtensionSettings` `runtime_blocked_hosts`)                 | Yes (per-extension domain access)   |
| Deliver configuration data to the extension | Yes, via `storage.managed` (`3rdparty` policy or native manifest) | Yes, using `storage.managed` (`managed_schema` + platform policy) | Not supported                       |
| Schema required for configuration data      | No                                                                | Yes (`managed_schema`)                                            | N/A                                 |
| Configuration data changes apply live       | No — requires browser restart                                     | Yes                                                               | N/A                                 |

## See also

- [Extension Workshop: Enterprise](https://extensionworkshop.com/documentation/enterprise/) a guide to developing and distributing extensions for Firefox enterprise deployments, including [adding policy support to an extension](https://extensionworkshop.com/documentation/enterprise/enterprise-development/)
- {{WebExtAPIRef("storage.managed")}}
- [manifest.json/storage](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage)
- [Native manifests](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests)
