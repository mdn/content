---
title: "`script.getRealms` command"
short-title: getRealms
slug: Web/WebDriver/Reference/BiDi/Modules/script/getRealms
page-type: webdriver-command
browser-compat: webdriver.bidi.script.getRealms
sidebar: webdriver
---

The `script.getRealms` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module returns a list of all [realms](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms).
You can optionally filter the list by [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or by the type of realm.

## Syntax

```json-nolint
/* With no parameters */
{
  "method": "script.getRealms",
  "params": {}
}

/* With optional parameters */
{
  "method": "script.getRealms",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "window"
  }
}
```

### Parameters

The `params` field can contain:

- `context` {{optional_inline}}
  - : A string that contains the ID of the context that has the realms you want.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    If not specified, realms of all contexts are returned.
- `type` {{optional_inline}}
  - : A string that contains the [type of realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#types_of_realms) you want.
    It can take one of the following values:
    - `"window"`: A realm whose global object is a {{domxref("Window")}}.
      This includes sandbox realms.
    - `"worker"`: A realm whose global object is a {{domxref("WorkerGlobalScope")}}, but not one of the more specific dedicated, shared, or service worker global scopes.
    - `"dedicated-worker"`: A realm whose global object is a {{domxref("DedicatedWorkerGlobalScope")}}.
    - `"shared-worker"`: A realm whose global object is a {{domxref("SharedWorkerGlobalScope")}}.
    - `"service-worker"`: A realm whose global object is a {{domxref("ServiceWorkerGlobalScope")}}.
    - `"worklet"`: A realm whose global object is a {{domxref("WorkletGlobalScope")}}, but not one of the more specific audio or paint worklet global scopes.
    - `"audio-worklet"`: A realm whose global object is an {{domxref("AudioWorkletGlobalScope")}}.
    - `"paint-worklet"`: A realm whose global object is a {{domxref("PaintWorkletGlobalScope")}}.

    If the `type` field is not specified, realms of all types are returned.

### Return value

The `result` object in the response contains the following field:

- `realms`
  - : An array of realm objects, one for each matching realm, or an empty array if there are no matching realms.
    The value of the `type` field in each object determines the other fields that are present:
    - `context` {{optional_inline}}
      - : A string that contains the ID of the context to which the realm belongs.
        This field is included only when the `type` field value is `"window"`.
    - `origin`
      - : A string with the [origin](/en-US/docs/Glossary/Origin) of the realm.
    - `owners` {{optional_inline}}
      - : A single-element array that contains the ID of the realm that owns the worker.
        This field is included only when the `type` field value is `"dedicated-worker"`.
    - `realm`
      - : A string that contains the ID of the realm.
    - `sandbox` {{optional_inline}}
      - : A string that contains the name of the sandbox realm.
        This field is included only for a sandbox realm, which is of type `"window"`.
    - `type`
      - : A string that indicates the type of realm.
        See the [`type`](#type) parameter for possible values.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A parameter has an invalid type.
    This error is also returned when `type` is not one of the recognized realm types.
- `no such frame`
  - : No context with the given `context` ID is found.

## Description

The `script.getRealms` command is a way to discover realm IDs, which you can then pass to commands such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate), [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction), or [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) instead of a context ID.
Since worker realms have no associated context ID, referring to a realm directly is the only way to run a script in a worker.

A context can have several realms, so filtering by `context` can return the realm of the active document, any sandbox realms, and any realms of the workers that the document owns.
The realms of child contexts are not included.
To get the realms of a child context, call the command with the ID of that context.

Only realms that are ready to run scripts are returned, so a realm that is still initializing does not appear in the result.
Realm IDs change on each cross-document navigation, so make sure to fetch them again after navigating.

## Examples

### Getting all realms

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose a tab is open at `https://example.com` and the page has started a dedicated worker.
You also created a sandbox realm named `myAutomationSandbox` earlier using [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).

Send the following message to get every available realm:

```json
{
  "id": 1,
  "method": "script.getRealms",
  "params": {}
}
```

The browser responds with the three realms as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "realms": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
        "type": "window"
      },
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "e4f5a6b7-c8d9-4012-b3c4-d5e6f7a8b9c0",
        "sandbox": "myAutomationSandbox",
        "type": "window"
      },
      {
        "origin": "https://example.com",
        "owners": ["7c37f4c0-abcd-1234-ef56-789012345678"],
        "realm": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071",
        "type": "dedicated-worker"
      }
    ]
  }
}
```

### Getting only the window realms of one context

Using the same connection and session as in the previous example, suppose you open a second tab at `https://example.net`.
The new tab has its own context.

Send the following message to get only the window realms of the first tab, the one at `https://example.com`:

```json
{
  "id": 2,
  "method": "script.getRealms",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "window"
  }
}
```

The browser responds with only the realms that match the specified `context` and `type`.
The realm of the dedicated worker does not match the `type`, and the realm of the second tab belongs to a different `context`, so both are omitted from the response:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "realms": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
        "type": "window"
      },
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "e4f5a6b7-c8d9-4012-b3c4-d5e6f7a8b9c0",
        "sandbox": "myAutomationSandbox",
        "type": "window"
      }
    ]
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
- [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) command
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) event
- [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed) event
