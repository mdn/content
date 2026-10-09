---
title: "`script.addPreloadScript` command"
short-title: addPreloadScript
slug: Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript
page-type: webdriver-command
browser-compat: webdriver.bidi.script.addPreloadScript
sidebar: webdriver
---

The `script.addPreloadScript` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module registers and configures a function to run before a new document's own scripts.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.addPreloadScript",
  "params": {
    "functionDeclaration": "() => { console.log('Document created'); }"
  }
}

/* With required and optional parameters */
{
  "method": "script.addPreloadScript",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "readyStateChannel",
          "ownership": "root",
          "serializationOptions": {
            "includeShadowTree": "open",
            "maxDomDepth": 1,
            "maxObjectDepth": 2
          }
        }
      }
    ],
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "functionDeclaration": "(notify) => { notify(document.readyState); }",
    "sandbox": "myAutomationSandbox"
  }
}
```

### Parameters

The `params` field contains:

- `arguments` {{optional_inline}}
  - : An array of objects that specifies the arguments passed to the [preload script](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts).
    The browser converts each object into a messaging function and passes them to the preload script in array order.
    Each call to one of these functions sends a [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) event to the subscribed client.
    If omitted or empty, the preload script is called without arguments.
    Each object contains the following fields:
    - `type`
      - : A string that has the value `"channel"`.
    - `value`
      - : An object that configures the [channel](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#channels).
        It contains the following fields:
        - `channel`
          - : A string that identifies the channel in the resulting [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) events.
        - `ownership` {{optional_inline}}
          - : A string that specifies whether the browser keeps a reference to the object sent in each message.
            It can take one of the following values:
            - `"none"`: The browser does not keep a reference to the object, so the message data contains no `handle` field.
              This is the default.
            - `"root"`: The browser keeps the object alive and includes a `handle` field in the message data.
              You can pass the `handle` to other `script` module commands and release it when you no longer need it by using [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown).
              The browser also releases handles when the realm is destroyed.
        - `serializationOptions` {{optional_inline}}
          - : An object that controls the amount of detail to include in the message data when the sent value is an object.
            It can contain the following fields:
            - `includeShadowTree` {{optional_inline}}
              - : A string that specifies whether descendants of shadow roots are included in the message data when the sent value is a DOM node.
                It can take one of the following values:
                - `"none"`: Descendants of shadow roots are not included.
                  This is the default.
                - `"all"`: Descendants of both open shadow roots (accessible from JavaScript outside the root) and closed shadow roots (not accessible from JavaScript outside the root) are included.
                - `"open"`: Descendants of only open shadow roots are included.
            - `maxDomDepth` {{optional_inline}}
              - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of descendant nodes included in the message data.
                The default is `0`, which excludes descendants.
                This limit also applies to descendants of shadow roots included by `includeShadowTree`.
            - `maxObjectDepth` {{optional_inline}}
              - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of nested objects included in the message data.
                The default is `null`.
- `contexts` {{optional_inline}}
  - : An array of one or more context ID strings that specifies the [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in which the script runs.
    The script also runs in the child contexts of those top-level contexts.
    This field cannot be used if [`userContexts`](#usercontexts) is specified.
    If both `contexts` and `userContexts` are omitted, the script runs in all contexts of the session.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `functionDeclaration`
  - : A string that contains the JavaScript source code for the function to call.
    The browser evaluates the string and calls the resulting function with the values specified in the [`arguments`](#arguments) parameter.
- `sandbox` {{optional_inline}}
  - : A string that contains the name of the [sandbox realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms) in which the script runs.
    The browser creates the sandbox realm if it doesn't already exist when the preload script runs.
    If omitted, the script runs in the document's default realm.
- `userContexts` {{optional_inline}}
  - : An array of one or more user context ID strings that specifies the [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the script runs.
    The script runs in every context that belongs to those user contexts, including contexts created later.
    This field cannot be used if [`contexts`](#contexts) is specified.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

### Return value

The `result` field in the response is an object with the following field:

- `script`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies the preload script.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - Both [`contexts`](#contexts) and [`userContexts`](#usercontexts) are provided in the same request.
    - A context ID in [`contexts`](#contexts) refers to a child context instead of a top-level context.
- `no such frame`
  - : Thrown if no context with the specified ID in `contexts` is found.
- `no such user context`
  - : Thrown if no user context with the specified ID in `userContexts` is found.

## Description

A [preload script](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts) runs when a new document is created in a context selected by the `contexts` or `userContexts` parameters.
If neither parameter is specified, the preload script runs in each new document created in any context of the session.
This includes child contexts, such as those created by {{HTMLElement("iframe")}} elements.
It runs before the document's own scripts.
Adding a preload script does not run it in existing documents.

The preload script remains registered until you remove it with [`script.removePreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript) or the session ends.

If the preload script fails because of a syntax error or a runtime exception, the browser reports the exception in the realm where it runs.
These failures are not included in the `script.addPreloadScript` response, and they don't prevent other preload scripts from running.

## Examples

### Logging each new document's URL

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Send the following message to register a preload script that logs the URL of each new document to the console:

```json
{
  "id": 1,
  "method": "script.addPreloadScript",
  "params": {
    "functionDeclaration": "() => { console.log('Document created:', location.href); }"
  }
}
```

The browser responds with the ID of the preload script as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

When you subsequently navigate a context to a new document, the preload script logs the document's URL to the console before the document's own scripts run.

### Overriding an API in a context

Using the same connection and session as in the first example, assume you obtained a tab's context ID by using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

Suppose a page uses {{jsxref("Date.now()")}} to check whether an offer has expired.
The offer expires on January 2, 2030, at midnight UTC.
You want to check that the page displays the expired state without waiting for the deadline to pass.
To simulate a time after the deadline, replace `Date.now()` with a function that returns the timestamp for January 3, 2030, at midnight UTC.

Send the following message to register this replacement as a preload script for new documents in that tab and its child contexts:

```json
{
  "id": 2,
  "method": "script.addPreloadScript",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "functionDeclaration": "() => { Date.now = () => Date.UTC(2030, 0, 3); }"
  }
}
```

The browser responds with the ID of the preload script as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "script": "8f2c5d19-6b4e-4a80-b7c3-1d2e3f4a5b6c"
  }
}
```

After the registration succeeds, navigate the tab to the offer page by using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).
The preload script replaces `Date.now()` before the page's own scripts run, so when the page calls `Date.now()`, it receives a timestamp after the deadline.
This lets you test the page's behavior after the offer has expired.

### Getting data from a preload script

Using the same connection and session as in the first example, subscribe to [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) by using [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe).

Suppose you want the client to receive the document's URL when a tab navigates to `https://example.com/`.
Configure a channel named `newDocumentUrls` so the preload script can send the URL to the client.
The resulting `script.message` events include `newDocumentUrls` in their `channel` field, so the client can identify these URL reports.

Send the following message to register the preload script and configure the channel:

```json
{
  "id": 3,
  "method": "script.addPreloadScript",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "newDocumentUrls"
        }
      }
    ],
    "functionDeclaration": "(report) => { report(window.location.href); }"
  }
}
```

The browser responds with the ID of the preload script as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "script": "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d"
  }
}
```

After the registration succeeds, navigate a tab to `https://example.com/`.
When the preload script runs in the new document, the browser passes a messaging function as its `report` argument.
Before the document's own scripts run, the preload script calls `report()` with the document's URL.
The client receives a [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) event containing the document's URL, the channel name `newDocumentUrls`, and the IDs of the source realm and context.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.removePreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript) command
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) event
