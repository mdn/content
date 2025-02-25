---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
page-type: webextension-api
browser-compat: webextensions.api.userScripts
---

{{AddonSidebar}}

Use this API to register user scripts, third-party scripts designed to manipulate webpages or provide new features. Registering a user script instructs the browser to attach the script to pages that match the URL patterns specified during registration.

> [!NOTE]
> This is documentation for the new API version, available in Firefox for Manifest V3. See {{WebExtAPIRef("userScripts_legacy","userScripts (legacy)")}} for information on the API available for use in Firefox with Manifest V2.

This API offers capabilities similar to {{WebExtAPIRef("scripting")}} but with features suited to handling third-party scripts.

## Permissions

To use this API, you need the `userScripts` permission and [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) for sites where you want to run scripts. However, the approach to enabling the use of this API varies between browsers:

- In Firefox, `userScripts` is an [optional-only permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) declared in the `optional_permissions` manifest key. Your extension must check that the permission has been granted by checking the availability of the `userScripts` API namespace or using {{WebExtAPIRef("permissions.contains()")}} and, if not, request it using {{WebExtAPIRef("permissions.request()")}}.
- in Chrome, `userScripts` is an install time requested permission declared in the [`permissions` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). However, to enable use of the API, users must [turn on the developer environment in Chrome](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Execution worlds

When a user script is registered or updated (using {{WebExtAPIRef("userScripts.register()")}} or {{WebExtAPIRef("userScripts.update()")}}), your extension can set it to run in an isolated `USER_SCRIPT` world or the `MAIN` world.

A `USER_SCRIPT` world provides an isolated execution environment that isn't accessible to a host page or other extensions. This means a user script can change its JavaScript environment without affecting the host page or other extensions' user and content scripts. In this environment, user scripts aren't visible to the host page or other extensions' user and content scripts. The API also enables an extension to configure a content security policy (CSP) for the `USER_SCRIPT` world using {{WebExtAPIRef("userScripts.configureWorld()")}}.

In the `MAIN` world, host pages and other extensions can see and access running user scripts.

These execution world values are defined in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}}.

## Messaging

Like content scripts and other extension scripts, user scripts communicate with other parts of an extension with messages using {{WebExtAPIRef("runtime.sendMessage()")}} and {{WebExtAPIRef("runtime.connect()")}}. However, extensions receive messages using the dedicated {{WebExtAPIRef("runtime.onUserScriptMessage")}} and {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedicated handlers are used as they make it easier to identify messages from user scripts, which are a less-trusted context.

To enable messaging APIs, call {{WebExtAPIRef("userScripts.configureWorld()")}} with the `messaging` argument set to `true` before registering a user script.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Extension updates

When an extension updates, user scripts are cleared. To restore scripts, add code to the extension's {{WebExtAPIRef("runtime.onInstalled")}} event handler that responds to the `"update"` reason.

> [!NOTE]
> User scripts are unregistered when the related extension page (from which the user scripts were registered) is unloaded, so register user scripts from an extension page that persists as long as you want the user scripts to stay registered.

## Types

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : The execution environment for a script injected with {{WebExtAPIRef("userScripts.register()")}}
    or {{WebExtAPIRef("userScripts.update()")}}.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : An `object` returned by {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} representing registered user scripts and used as input to {{WebExtAPIRef("userScripts.register","register()")}} and {{WebExtAPIRef("userScripts.update","update()")}}.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : The code or a file source for a user script.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : A list of user scripts to be processed by {{WebExtAPIRef("userScripts.getScripts()")}} or {{WebExtAPIRef("userScripts.unregister()")}}.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : The configuration of a `USER_SCRIPT` execution environment.

## Methods

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Configures a `USER_SCRIPT` execution environment for the extension.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Returns user scripts registered by the extension.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Returns all the extension's registered world configurations.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registers user scripts for the extension.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Resets the configuration for a `USER_SCRIPT` world registered by the extension.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Unregisters user scripts registered by the extension.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Updates user scripts registered by the extension.

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("scripting","browser.scripting")}}
