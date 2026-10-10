---
title: "`script.disown` command"
short-title: disown
slug: Web/WebDriver/Reference/BiDi/Modules/script/disown
page-type: webdriver-command
browser-compat: webdriver.bidi.script.disown
sidebar: webdriver
---

The `script.disown` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module releases the specified handles.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    }
  }
}

/* With required and optional parameters */
{
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "sandbox": "myAutomationSandbox"
    }
  }
}
```

### Parameters

The `params` field contains:

- `handles`
  - : An array of strings that specifies the handles to release.
    Any specified handle not found in the target realm is ignored.
    Handles are returned in a `handle` field when a command such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) is sent with [`resultOwnership`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#resultownership) set to `"root"`.
- `target`
  - : An object that specifies the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) that owns the specified handles.
    The object must contain either a `context` field or a `realm` field:
    - `context`
      - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) whose active document provides the realm that owns the handles.
        Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    - `realm`
      - : A string that contains the ID of the realm that owns the handles.
        Realm IDs are returned by the [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command.
    - `sandbox` {{optional_inline}}
      - : A string that contains the name of the [sandbox realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms) that owns the handles.
        For a non-empty name, the browser creates a sandbox realm with that name in the specified context if one doesn't already exist.
        For an empty name (`""`), handles are released from the realm of the active document instead.
        This field is available only when the `target` object contains a `context` field.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown if a required parameter is missing or has an invalid type.
- `no such frame`
  - : Thrown in any of the following cases:
    - No context with the specified `context` ID is found.
    - No realm with the specified `realm` ID is found.

## Description

After a handle is released, you can no longer use it in other `script` commands.
The object isn't necessarily garbage collected.
Other handles or references from the page's own scripts can keep the object alive.

The browser automatically releases handles when their realm is destroyed (see the [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed) event).
You can use `script.disown` to release handles you no longer need before the realm is destroyed.

## Examples

### Releasing a handle using a context ID

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you evaluate `({ count: 2 })` in a tab's default realm by using [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).
In that command, you set the [`resultOwnership`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#resultownership) parameter to `"root"`.
The browser returns a handle for the resulting object.

When you no longer need the handle, send the following message to release it.
Use the same context ID as in the earlier `script.evaluate` command, without navigating or reloading the page between the two commands:

```json
{
  "id": 5,
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 5,
  "type": "success",
  "result": {}
}
```

### Releasing multiple handles using a realm ID

Using the same connection and session as in the first example, suppose you have two handles for objects in the same realm.
Send the following message to release both handles, using the ID of that realm in `target`:

```json
{
  "id": 6,
  "method": "script.disown",
  "params": {
    "handles": [
      "a9b8c7d6-e5f4-4321-9a8b-7c6d5e4f3a2b",
      "b2c3d4e5-f6a7-4b89-9c0d-1e2f3a4b5c6d"
    ],
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    }
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 6,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
- [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command
- [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed) event
