---
title: "`permissions.setPermission` command"
short-title: setPermission
slug: Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission
page-type: webdriver-command
browser-compat: webdriver.bidi.permission.setPermission
sidebar: webdriver
---

The `permissions.setPermission` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`permissions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/permissions) module sets the permission state for the specified feature and [origin](/en-US/docs/Glossary/Origin).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "permissions.setPermission",
  "params": {
    "descriptor": {
      "name": "geolocation"
    },
    "origin": "https://www.google.com",
    "state": "prompt"
  }
}

/* With required and optional parameters */
{
  "method": "permissions.setPermission",
  "params": {
    "descriptor": {
      "name": "geolocation"
    },
    "embeddedOrigin": "https://other.example",
    "origin": "https://example.com",
    "state": "granted",
    "userContext": "383a1d6a-91c2-4388-8d8f-5b6be1c919f8"
  }
}
```

### Parameters

The `params` field contains:

- `descriptor`
  - : An object that identifies the feature whose permission state is to be set.
    It contains the following field:
    - `name`
      - : A string that specifies the feature's name, such as `geolocation` or `notifications`.
        For more examples of feature names, see the list in [Permission-aware APIs](/en-US/docs/Web/API/Permissions_API#permission-aware_apis).
- `embeddedOrigin` {{optional_inline}}
  - : A string that specifies the origin of the embedded document for which to set the permission.
    The default is the value of the [`origin`](#origin) parameter.
    The browser uses this value only if the feature's permission rules distinguish between embedded origins.
- `origin`
  - : A string that specifies the top-level origin for which to set the permission, such as `https://example.com`.
- `state`
  - : A string that specifies the [permission state](/en-US/docs/Web/API/PermissionStatus/state#value) to set.
    It can take one of the following values:
    - `denied`: The browser prevents the website at the specified origin from using the feature.
    - `granted`: The browser allows the website at the specified origin to use the feature, subject to other restrictions, such as those imposed by [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
    - `prompt`: The browser treats permission as not yet granted for the specified origin.
      A subsequent request to use the feature may trigger a permission prompt or be denied.
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which to set the permission.
    The default is `default`.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) and [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - [`state`](#state) has an invalid value.
    - The browser considers the requested state inappropriate for the specified feature.
    - The browser cannot interpret [`descriptor`](#descriptor) for the specified feature.
- `no such user context`
  - : Thrown if no user context with the specified [`userContext`](#usercontext) ID is found.

## Description

The `permissions.setPermission` command lets you test how a website behaves with different permission states for a feature.
The command sets permission by origin, so the change applies to documents at that origin and is not limited to a single tab.
By default, the browser uses only the top-level origin to determine where the change applies, but some features also distinguish between embedded origins.

Granting permission to use a feature does not override restrictions imposed by [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
If Permissions Policy blocks a feature, [`Permissions.query()`](/en-US/docs/Web/API/Permissions/query) reports a `denied` state for that document even after this command grants permission.

## Examples

### Granting geolocation permission

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you open a tab in the default user context and navigate it to `https://example.com` by using the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command.
Send the following message to grant permission to use geolocation for that origin:

```json
{
  "id": 4,
  "method": "permissions.setPermission",
  "params": {
    "descriptor": {
      "name": "geolocation"
    },
    "origin": "https://example.com",
    "state": "granted"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

To check the page's geolocation permission state, call [`Permissions.query()`](/en-US/docs/Web/API/Permissions/query) through [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) in the same tab.
Set [`expression`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#expression) to `navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => permissionStatus.state)` and [`awaitPromise`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#awaitpromise) to `true`.
The command returns `granted` in the `value` field of the inner `result` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
