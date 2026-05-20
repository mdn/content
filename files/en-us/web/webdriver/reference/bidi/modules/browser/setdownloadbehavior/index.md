---
title: "`browser.setDownloadBehavior` command"
short-title: setDownloadBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.setDownloadBehavior
sidebar: webdriver
---

The `browser.setDownloadBehavior` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module allows file downloads to a specified folder, blocks file downloads entirely, or resets the behavior to the browser's default. The behavior can be configured for all or some [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Syntax

```json-nolint
{
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {}
  }
}
```

### Parameters

The `params` field contains:

- `downloadBehavior`
  - : An object with the following fields, or `null` to reset to the browser's default download behavior:
    - `type`
      - : A string that specifies whether downloads are allowed or blocked. Valid values are:
        - `"allowed"`: Indicates that downloads are permitted. When this value is set, the `destinationFolder` field is required.
        - `"denied"`: Indicates that downloads are blocked.
    - `destinationFolder`
      - : A string that specifies the path to the folder where downloaded files are saved.
        This field is required when `type` is `"allowed"`.
- `userContexts` {{optional_inline}}
  - : An array of strings where each string is the ID ([UUID](/en-US/docs/Glossary/UUID)) of a [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) to apply the download behavior to.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).
    - If included, the specified download behavior is applied to each listed user context. If `downloadBehavior` is `null`, the per-context override is reset for each listed user context.
    - If not included, the specified download behavior is applied as a global default to all user contexts.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `unsupported operation`
  - : The browser does not support the specified download behavior.
- `no such user context`
  - : No user context with the given user context ID is found.

## Examples

### Allowing downloads to a specific folder

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to set the global download behavior and direct downloads to a specific folder:

```json
{
  "id": 1,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/home/user/downloads"
    }
  }
}
```

The browser responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Allowing downloads in multiple user contexts

To allow downloads in multiple user contexts, get the user context IDs using [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts), and then send the following message to direct downloads to a specified folder:

```json
{
  "id": 2,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/home/user/downloads/user-context"
    },
    "userContexts": [
      "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f",
      "9c2d8e45-fb12-4a67-bc34-567890abcdef"
    ]
  }
}
```

The browser responds as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

### Blocking downloads in a specific user context

To block downloads in a specific user context, first obtain the user context ID using [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts). Then send the following message:

```json
{
  "id": 3,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "denied"
    },
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

The browser responds as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Resetting download behavior to the browser default

Send the following message to reset the global download behavior back to the browser's default:

```json
{
  "id": 4,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": null
  }
}
```

The browser responds as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
