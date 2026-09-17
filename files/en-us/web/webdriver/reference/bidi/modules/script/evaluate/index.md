---
title: "`script.evaluate` command"
short-title: evaluate
slug: Web/WebDriver/Reference/BiDi/Modules/script/evaluate
page-type: webdriver-command
browser-compat: webdriver.bidi.script.evaluate
sidebar: webdriver
---

The `script.evaluate` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module evaluates a JavaScript expression in a [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) and returns the value of the expression.
For expressions that evaluate to a promise, you can wait for the promise to settle and get the resolved value instead.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.evaluate",
  "params": {
    "expression": "document.title",
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    },
    "awaitPromise": false
  }
}

/* With required and optional parameters */
{
  "method": "script.evaluate",
  "params": {
    "expression": "document.querySelector('button')",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "sandbox": "myAutomationSandbox"
    },
    "awaitPromise": true,
    "resultOwnership": "root",
    "serializationOptions": {
      "maxDomDepth": 1,
      "maxObjectDepth": 2,
      "includeShadowTree": "open"
    },
    "userActivation": true
  }
}
```

### Parameters

The `params` field contains:

- `awaitPromise`
  - : A boolean that indicates how a promise returned by an expression is handled.
    - `true`: If the expression evaluates to a promise, the browser waits for the promise to settle and returns the resolved value.
      If the promise is rejected, the rejection reason is reported as an exception.
    - `false`: The browser returns the promise object without waiting for the promise to settle.
- `expression`
  - : A string that contains the JavaScript expression to evaluate.
- `resultOwnership` {{optional_inline}}
  - : A string that specifies whether the browser keeps a reference to the returned object so you can interact with it later.
    It can take one of the following values:
    - `"none"`: The browser does not keep a reference to the returned object, so the response contains no `handle` field.
      This is the default.
    - `"root"`: The browser keeps the returned object alive and includes a [`handle`](#handle_2) field in the response.
      You can pass the `handle` to other `script` module commands and release it when you no longer need it by using [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown).
      The browser also releases handles when the realm is destroyed.
- `serializationOptions` {{optional_inline}}
  - : An object that controls the amount of detail to include in the response when the expression evaluates to an object.
    It can contain the following fields:
    - `includeShadowTree` {{optional_inline}}
      - : A string that specifies whether descendants of shadow roots are included in the response when the returned value is a DOM node.
        It can take one of the following values:
        - `"none"`: Descendants of shadow roots are not included.
          This is the default.
        - `"all"`: Descendants of both open shadow roots (accessible from JavaScript outside the root) and closed shadow roots (not accessible from JavaScript outside the root) are included.
        - `"open"`: Descendants of only open shadow roots are included.
    - `maxDomDepth` {{optional_inline}}
      - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of descendant nodes included in the response.
        The default is `0`, which excludes descendants.
        This limit also applies to descendants of shadow roots included by `includeShadowTree`.
    - `maxObjectDepth` {{optional_inline}}
      - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of nested objects included in the response.
        The default is `null`.
- `target`
  - : An object that specifies the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) in which to evaluate the expression.
    The object must contain either a `context` field or a `realm` field:
    - `context`
      - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) whose active document provides the realm in which to evaluate the expression.
        Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    - `realm`
      - : A string that contains the ID of the realm in which to evaluate the expression.
        Realm IDs are returned by the [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command.
    - `sandbox` {{optional_inline}}
      - : A string that contains the name of the [sandbox realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms) in which to evaluate the expression.
        For a non-empty name, the sandbox realm is created with the specified name if it doesn't already exist.
        For an empty name (`""`), the expression is evaluated in the realm of the active document instead.
        This field is available only when the `target` object contains a `context` field.
- `userActivation` {{optional_inline}}
  - : A boolean that indicates whether the browser simulates user interaction by providing [transient activation](/en-US/docs/Glossary/Transient_activation) before evaluating the expression.
    This lets the expression use [APIs that require transient activation](/en-US/docs/Web/Security/Defenses/User_activation#transient_activation), such as {{domxref("Element.requestFullscreen()")}}.
    - `false`: The browser does not simulate user interaction or reset existing transient activation.
      APIs that require transient activation may fail if the page does not already have transient activation.
      This is the default.
    - `true`: The browser simulates user interaction before evaluating the expression.
      This does not guarantee the success of an API call; for example, the call can fail if a required permission has not been granted.

### Return value

The following fields are available in the `result` object in the response, depending on the value of its [`type`](#type_3) field:

- `exceptionDetails` {{optional_inline}}
  - : An object that describes the thrown exception and is present only when the `result` object in the response contains `"type": "exception"`.
    It contains the following fields:
    - `columnNumber`
      - : A non-negative integer that contains the zero-based column number where the exception was thrown, or `0` if the stack trace is empty.
    - `exception`
      - : An object that represents the thrown JavaScript value in the response.
        The thrown value can be an {{jsxref("Error")}} object or another JavaScript value.
        It can contain the following fields:
        - `handle` {{optional_inline}}
          - : A string that contains an ID for referencing the thrown object in subsequent `script` module commands.
            This handle can be used only in the realm in which it is created.
            The browser includes this field when the [`resultOwnership`](#resultownership) parameter is specified as `"root"` and the thrown value supports a handle.
            This field is omitted when the [`type`](#type) field in this `exception` object is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
        - `internalId` {{optional_inline}}
          - : A string that uniquely identifies an object within the response.
            This field is present only when the same object appears more than once in the response.
            This ID cannot be used to reference the object in subsequent commands.
        - `sharedId` {{optional_inline}}
          - : A string that contains an ID for referencing the thrown DOM node in subsequent commands that accept a node reference, such as in the `startNodes` parameter of [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
            This field is present only when the `type` field in this `exception` object is `"node"`.
            This ID can be used across realms that can access the same node.
        - `type`
          - : A string that identifies the type of the thrown value, such as `"error"`, `"object"`, or `"string"`.
        - `value` {{optional_inline}}
          - : An array, boolean, number, object, or string that represents the thrown value, depending on the `type` field in the `exception` object.
            This field is omitted when that type is `"error"`.
            See the [`value`](#value_2) field of the successful `result` for details about how each type is represented.
            For thrown values, the browser uses the default values for the fields of the [`serializationOptions`](#serializationoptions) parameter, regardless of the values specified in the command.
    - `lineNumber`
      - : A non-negative integer that contains the zero-based line number where the exception was thrown, or `0` if the stack trace is empty.
    - `stackTrace`
      - : An object that represents the JavaScript stack at the point where the exception was thrown.
        It contains the following field:
        - `callFrames`
          - : An array of zero or more stack-frame objects.
            Each object contains the following fields:
            - `columnNumber`
              - : A non-negative integer that contains the zero-based column number of the executed code.
            - `functionName`
              - : A string that contains the name of the executing function.
            - `lineNumber`
              - : A non-negative integer that contains the zero-based line number of the executed code.
            - `url`
              - : A string that contains the URL of the script.
    - `text`
      - : A string that contains a textual description of the exception.
        The exact format is browser-dependent, so don't rely on this value for assertions in tests.
- `realm`
  - : A string that contains the ID of the realm in which the expression is evaluated.
- `result` {{optional_inline}}
  - : An object that represents the value of the evaluated expression and is present only when the `result` object in the response contains `"type": "success"`.
    It can contain the following fields:
    - `handle` {{optional_inline}}
      - : A string that contains an ID for referencing the returned object in subsequent `script` module commands.
        This handle can be used only in the realm in which it is created.
        The browser includes this field when the [`resultOwnership`](#resultownership) parameter is specified as `"root"` and the returned value supports a handle.
        This field is omitted when the [`type`](#type_2) field in this `result` object is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
    - `internalId` {{optional_inline}}
      - : A string that uniquely identifies an object within the response.
        This field is present only when the same object appears more than once in the response.
        This ID cannot be used to reference the object in subsequent commands.
        This field is omitted when the `type` field in this `result` object is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
    - `sharedId` {{optional_inline}}
      - : A string that contains an ID for referencing the returned node in subsequent commands that accept a node reference, such as in the `startNodes` parameter of [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
        This field is present only when the `type` field in this `result` object is `"node"`.
        This ID can be used across realms that can access the same node.
    - `type`
      - : A string that identifies the type of value produced by evaluating the expression, such as `"array"`, `"function"`, `"map"`, `"node"`, `"number"`, `"object"`, `"set"`, or `"string"`.
    - `value` {{optional_inline}}
      - : An array, boolean, number, object, or string that represents the evaluated value, depending on the `type` field in this `result` object.

        For example, `"string"` values are represented as strings, `"boolean"` values as `true` or `false`, and `"bigint"` values as strings.
        For `"array"`, `"set"`, `"nodelist"`, and `"htmlcollection"`, `value` is an array of objects representing the collection items.

        This field is not present for every type.
        For objects, this field can be omitted when the `maxObjectDepth` limit is reached or when the same object has already been represented in the response.

        - When `type` is `"node"`, `value` is an object that describes properties of the returned node and can contain the following fields:
          - `attributes` {{optional_inline}}
            - : An object whose keys are attribute names and values are the corresponding attribute values as strings.
              This field is present only for element nodes.
          - `childNodeCount`
            - : A non-negative integer that specifies the number of direct child nodes of the returned node.
              This is the actual count, even if the `children` field is missing.
          - `children` {{optional_inline}}
            - : An array of child node objects, each with fields such as `sharedId`, `type`, and `value`.
              Descendants are included up to the level specified by `maxDomDepth` in the [`serializationOptions`](#serializationoptions) parameter of the `script.evaluate` command.
          - `localName` {{optional_inline}}
            - : A string that contains the local name of the node.
              For an HTML element, this is the tag name in lowercase.
              This field is present only for element and attribute nodes.
          - `mode` {{optional_inline}}
            - : A string that specifies whether the shadow root is `"open"` or `"closed"`.
              This field is present only for shadow root nodes.
          - `namespaceURI` {{optional_inline}}
            - : A string that contains the [namespace URI](/en-US/docs/Web/API/Element/namespaceURI) of the node.
              This field is present only for element and attribute nodes.
              For HTML elements, the value is always the standard HTML namespace, `"http://www.w3.org/1999/xhtml"`.
          - `nodeType`
            - : A non-negative integer that represents the type of node, such as `1` for an element or `3` for a text node.
          - `nodeValue` {{optional_inline}}
            - : A string that contains the value of the node, such as the text of a text node or the data of a comment node.
              This field is absent for element and document nodes.
          - `shadowRoot` {{optional_inline}}
            - : An object that describes the shadow root attached to the node, with fields such as `sharedId`, `type`, and `value`.
              This field is `null` when the returned element has no shadow root.
        - When `type` is `"window"`, `value` is an object with the following field:
          - `context`
            - : A string that contains the browsing context ID.
- `type`
  - : A string that indicates how the expression evaluation completed.
    It has one of the following values:
    - `"exception"`: The expression threw an exception, or the promise it evaluated to was rejected when `awaitPromise` was `true`.
      The [`exceptionDetails`](#exceptiondetails) field describes the exception.
    - `"success"`: The expression completed normally.
      The [`result`](#result) field describes the value of the expression.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such frame`
  - : No context with the given `context` ID is found.
    This error is also returned when no realm with the given `realm` ID is found.

## Description

The `script.evaluate` command evaluates a JavaScript expression in the realm identified by the `target` parameter.
For example, you can evaluate `document.title` to read the page title or `document.querySelector("#status").textContent = "Ready"` to update an element in the page.

### Controlling the returned detail

When evaluating an expression that produces an object, you can specify two limits in the `serializationOptions` parameter to control the depth of the data returned (as in [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes#controlling_the_returned_detail)):

- `maxDomDepth` controls the number of levels of DOM descendants included in the `children` field of each returned node.
- `maxObjectDepth` controls the number of levels of nested JavaScript object properties included when representing non-node values in the response.

### Object identifiers in the response

The `script.evaluate` response can include `handle`, `internalId`, and `sharedId` identifiers in either the successful `result` object or the `exception` object.
They serve different purposes.

To see how these identifiers differ and where you can use them, consider a page with the following status message:

```html
<p id="status">Loading…</p>
```

You can use `script.evaluate` to run the following expression to find the status element (`<p id="status">`) and return an array containing two references to it.

```js
(() => {
  const node = document.querySelector("#status");
  return [node, node];
})();
```

In `[node, node]`, both items refer to the same status element.
The successful `result`, therefore, includes two representations of the same node, one for each array item.
With the [`resultOwnership`](#resultownership) parameter set to `"root"`, the returned array includes a `handle`.
Both node representations within the array share an `internalId` and a `sharedId`, but do not include handles.
The following table compares the identifiers returned in this example:

| `handle`                                                                                                                                                                                                                                         | `internalId`                                                                       | `sharedId`                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The `handle` value identifies the array.                                                                                                                                                                                                         | The two `internalId` values are the same.                                          | The two `sharedId` values are the same.                                                                                                                                                                                                    |
| This handle can be used in the [`arguments`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments) parameter of `script.callFunction` to pass the array to a function that changes its first item's text to `"Ready"`. | The IDs can be compared to determine that both array items refer to the same node. | This ID can be used in the [`startNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes#startnodes) parameter of `browsingContext.locateNodes` to find descendants, such as the status element's text node. |
| This handle can be used only in the realm where it was created.                                                                                                                                                                                  | This ID cannot be used in subsequent commands.                                     | This ID can be used across realms that can access the same node.                                                                                                                                                                           |

## Examples

### Evaluating an expression in a realm

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose a tab is open at `https://example.com` and you want to read its page title programmatically.
You obtain the active document's realm ID by using [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms).
Send the following message to evaluate the expression in that realm:

```json
{
  "id": 1,
  "method": "script.evaluate",
  "params": {
    "expression": "document.title",
    "target": {
      "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    },
    "awaitPromise": false
  }
}
```

The browser responds as follows, where the response's outer `result` object has `"type": "success"` and contains a nested `result` object with the page title, "Example Domain":

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "type": "success",
    "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "result": {
      "type": "string",
      "value": "Example Domain"
    }
  }
}
```

### Evaluating an expression that throws

Suppose you try to read the text of an element with the class `price` on the same page, but no such element exists.

Using the same connection and session as in the previous example, obtain the tab's context ID by using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), and send the following message:

```json
{
  "id": 2,
  "method": "script.evaluate",
  "params": {
    "expression": "document.querySelector(\".price\").textContent",
    "target": {
      "context": "ceb33cd1-a9a3-46e7-a79d-3c1a3d4d754c"
    },
    "awaitPromise": false
  }
}
```

The element lookup returns `null`, and reading its `textContent` property throws a {{jsxref("TypeError")}}.
The browser responds as follows, where the response's outer `result` object has `"type": "exception"` and contains an `exceptionDetails` object describing the exception.
The top-level `"type": "success"` indicates that the command succeeded, even though evaluating the expression threw an exception:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "type": "exception",
    "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "exceptionDetails": {
      "columnNumber": 9,
      "lineNumber": 0,
      "text": "TypeError: can't access property \"textContent\", document.querySelector(...) is null",
      "exception": {
        "type": "error"
      },
      "stackTrace": {
        "callFrames": [
          {
            "columnNumber": 9,
            "functionName": "",
            "lineNumber": 0,
            "url": "https://example.com/"
          }
        ]
      }
    }
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
- [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) command
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) guide
