---
title: "`script.callFunction` command"
short-title: callFunction
slug: Web/WebDriver/Reference/BiDi/Modules/script/callFunction
page-type: webdriver-command
browser-compat: webdriver.bidi.script.callFunction
sidebar: webdriver
---

The `script.callFunction` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module calls the specified function with the given arguments in a [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) and returns the function's result.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.callFunction",
  "params": {
    "functionDeclaration": "() => document.title",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    },
    "awaitPromise": false
  }
}

/* With required and optional parameters */
{
  "method": "script.callFunction",
  "params": {
    "functionDeclaration": "function (quantity) { return this.price * quantity; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "sandbox": "myAutomationSandbox"
    },
    "awaitPromise": false,
    "arguments": [
      {
        "type": "number",
        "value": 3
      }
    ],
    "this": {
      "type": "object",
      "value": [
        [
          "price",
          {
            "type": "number",
            "value": 5
          }
        ]
      ]
    },
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

- `arguments` {{optional_inline}}
  - : An array of objects that represents the values to pass to the function as arguments, in the order they appear in the array.
    The browser converts each object into a JavaScript value before calling the function.
    If omitted, the function is called without arguments.

    To describe a primitive or structured JavaScript value or configure a channel for sending messages to the client, the object uses a combination of `type` and the optional `value` fields.
    The `value` field's format depends on the `type` field.
    To refer to an existing JavaScript object or a DOM node, the object uses the `handle` or `sharedId` field instead.

    - `type`
      - : A string that specifies the type of value to pass to the function.
        It can take one of the following values:
        - For a primitive JavaScript value: One of `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
        - For a structured JavaScript value: One of `"array"`, `"date"`, `"map"`, `"object"`, `"regexp"`, or `"set"`.
        - For a browser-created function that sends messages to the client: `"channel"`.
          The browser passes this messaging function as an argument to the called function.
          Each call to the messaging function sends a [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) event to the client if the client has subscribed to it.
    - `value` {{optional_inline}}
      - : An array, boolean, number, object, or string, depending on `type`, that specifies the value to pass.
        This field is not available when `type` is `"null"` or `"undefined"`.
        It is required for all other `type` values.
        - When `type` is `"array"`, `value` is an array of objects.
          Each object describes an array item using the same fields as an object in the `arguments` parameter: `type` and the optional `value`, or `handle` or `sharedId`.
        - When `type` is `"bigint"`, `value` is a string that represents the integer.
        - When `type` is `"boolean"`, `value` is `true` or `false`.
        - When `type` is `"channel"`, `value` is an object that configures the channel.
          This is the same channel configuration used in the [`arguments`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript#arguments) parameter of `script.addPreloadScript`.
          It contains the following fields:
          - `channel`
            - : A string that identifies the channel in the resulting [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) events.
          - `ownership` {{optional_inline}}
            - : A string that specifies whether the browser keeps a reference to the object sent in each message.
              It takes the same values and has the same default as the [`resultOwnership`](#resultownership) parameter.
          - `serializationOptions` {{optional_inline}}
            - : An object that controls the amount of detail to include in each message.
              It has the same fields and defaults as the [`serializationOptions`](#serializationoptions_2) parameter.
        - When `type` is `"date"`, `value` is a string in the [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).
        - When `type` is `"map"`, `value` is an array that describes the entries of a JavaScript [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
          Each item in the array is another array containing exactly two items: a key followed by its value.
          The key is a string or an object that represents a JavaScript value.
          The value is an object that represents a JavaScript value.

          Objects used as keys or values use the same fields as an object in the [`arguments`](#arguments) parameter: `type` and the optional `value`, or `handle` or `sharedId`.

        - When `type` is `"number"`, `value` is a number or the string `"-0"`, `"-Infinity"`, `"Infinity"`, or `"NaN"`.
        - When `type` is `"object"`, `value` is an array that describes the properties of a JavaScript object.
          Each item in the array is another array containing exactly two items: a key followed by its value.
          The key is a string or an object that represents a JavaScript value.
          The value is an object that represents a JavaScript value.

          Objects used as keys or values use the same fields as an object in the [`arguments`](#arguments) parameter: `type` and the optional `value`, or `handle` or `sharedId`.

        - When `type` is `"regexp"`, `value` is an object with the following fields:
          - `flags` {{optional_inline}}
            - : A string that specifies the [regular expression flags](/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).
          - `pattern`
            - : A string that contains the [regular expression pattern](/en-US/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern).
        - When `type` is `"set"`, `value` is an array of objects.
          Each object describes a set item using the same fields as an object in the `arguments` parameter: `type` and the optional `value`, or `handle` or `sharedId`.
        - When `type` is `"string"`, `value` is a string.
    - `handle`
      - : A string that contains an ID for referencing an existing JavaScript object to pass to the function.
        Use this field instead of the `arguments` parameter's [`type`](#type) and [`value`](#value) fields.
        If both `handle` and `sharedId` are specified, `handle` is ignored.
        A handle can be used only in the realm in which it is created.

        Handles for objects are returned by commands such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) or a previous `script.callFunction` command when [`resultOwnership`](#resultownership) is set to `"root"`.
    - `sharedId`
      - : A string that contains an ID for referencing an existing DOM node to pass to the function.
        Use this field instead of the `arguments` parameter's [`type`](#type) and [`value`](#value) fields.
        This ID can be used across realms, including [sandbox realms](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms), that can access the same node.

        Shared IDs are returned by commands such as [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
- `awaitPromise`
  - : A boolean that indicates how a promise returned by a function is handled.
    - `true`: If the function returns a promise, the browser waits for the promise to settle and returns the resolved value.
      If the promise is rejected, the rejection reason is reported as an exception.
    - `false`: If the function returns a promise, the browser returns the promise object without waiting for the promise to settle.
- `functionDeclaration`
  - : A string that contains the JavaScript source code for the function to call.
    The browser evaluates the string and calls the resulting function with the values specified in the [`arguments`](#arguments) parameter.
- `resultOwnership` {{optional_inline}}
  - : A string that specifies whether the browser keeps a reference to the returned object so you can interact with it later.
    It can take one of the following values:
    - `"none"`: The browser does not keep a reference to the returned object, so the response contains no `handle` field.
      This is the default.
    - `"root"`: The browser keeps the returned object alive and includes a [`handle`](#handle_3) field in the response.
      You can pass the `handle` to other `script` module commands and release it when you no longer need it by using [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown).
      The browser also releases handles when the realm is destroyed.
- `serializationOptions` {{optional_inline}}
  - : An object that controls the amount of detail to include in the response when the function returns an object.
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
  - : An object that specifies the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) in which to call the function.
    The object must contain either a `context` field or a `realm` field:
    - `context`
      - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) whose active document provides the realm in which to call the function.
        Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    - `realm`
      - : A string that contains the ID of the realm in which to call the function.
        Realm IDs are returned by the [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command.
    - `sandbox` {{optional_inline}}
      - : A string that contains the name of the [sandbox realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms) in which to call the function.
        For a non-empty name, the sandbox realm is created with the specified name if it doesn't already exist.
        For an empty name (`""`), the function is called in the realm of the active document instead.
        This field is available only when the `target` object contains a `context` field.
- `this` {{optional_inline}}
  - : An object that describes the value to use as [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) when calling the function.
    It uses the same fields as an object in the [`arguments`](#arguments) parameter.
    If omitted, the browser uses `null` for `this`.
    For a non-strict function, JavaScript replaces `null` with the realm's global object.
    For an arrow function, this field does not affect the value of `this` inside the function.
- `userActivation` {{optional_inline}}
  - : A boolean that indicates whether the browser simulates user interaction by providing [transient activation](/en-US/docs/Glossary/Transient_activation) before calling the function.
    This lets the function use [APIs that require transient activation](/en-US/docs/Web/Security/Defenses/User_activation#transient_activation), such as {{domxref("Element.requestFullscreen()")}}.
    - `false`: The browser does not simulate user interaction or reset existing transient activation.
      APIs that require transient activation may fail if the page does not already have transient activation.
      This is the default.
    - `true`: The browser simulates user interaction before calling the function.
      This does not guarantee the success of an API call; for example, the call can fail if a required permission has not been granted.

### Return value

The following fields are available in the `result` object in the response, depending on the value of its [`type`](#type_4) field:

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
            This field is omitted when the [`type`](#type_2) field in this `exception` object is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
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
            See the [`value`](#value_3) field of the successful `result` for details about how each type is represented.
            For thrown values, the browser uses the default values for the fields of the [`serializationOptions`](#serializationoptions_2) parameter, regardless of the values specified in the command.
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
  - : A string that contains the ID of the realm in which the function is called.
- `result` {{optional_inline}}
  - : An object that represents the return value of the function and is present only when the `result` object in the response contains `"type": "success"`.
    It can contain the following fields:
    - `handle` {{optional_inline}}
      - : A string that contains an ID for referencing the returned object in subsequent `script` module commands.
        This handle can be used only in the realm in which it is created.
        The browser includes this field when the [`resultOwnership`](#resultownership) parameter is specified as `"root"` and the returned value supports a handle.
        This field is omitted when the [`type`](#type_3) field in this `result` object is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
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
      - : A string that identifies the type of value returned by the function, such as `"array"`, `"function"`, `"map"`, `"node"`, `"number"`, `"object"`, `"set"`, or `"string"`.
    - `value` {{optional_inline}}
      - : An array, boolean, number, object, or string that represents the returned value, depending on the `type` field in this `result` object.

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
              Descendants are included up to the level specified by `maxDomDepth` in the [`serializationOptions`](#serializationoptions_2) parameter.
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
  - : A string that indicates how the function call completed.
    It has one of the following values:
    - `"exception"`: Evaluating `functionDeclaration` or calling the function threw an exception, or the promise returned by the function was rejected when `awaitPromise` was `true`.
      The [`exceptionDetails`](#exceptiondetails) field describes the exception.
    - `"success"`: The function returned normally.
      The [`result`](#result) field describes the return value of the function.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - The [`functionDeclaration`](#functiondeclaration) parameter evaluates to a value that isn't a function.
    - An object in the [`arguments`](#arguments) or [`this`](#this) parameter, including a nested object, has an unrecognized `type` or an invalid `value` for that type.
      For example, when `type` is `"map"` or `"object"`, an item in its `value` array doesn't contain exactly two items.
- `no such frame`
  - : Thrown in any of the following cases:
    - No context with the given context ID is found.
    - No realm with the given realm ID is found.
- `no such handle`
  - : A `handle` value in the [`arguments`](#arguments) or [`this`](#this) parameter is not found in the target realm.
- `no such node`
  - : Thrown when a `sharedId` is specified in the [`arguments`](#arguments) or [`this`](#this) parameter and any of the following applies:
    - No node with the given `sharedId` is found.
    - The realm specified by [`target`](#target) is not associated with a document.
    - The node's document and the target realm do not satisfy the same-origin-domain check.

## Description

The `script.callFunction` command accepts a function declaration and arguments to pass to the function.
Passing arguments separately from the function's source code lets you supply values, including references to existing JavaScript objects or DOM nodes, without inserting them into the source string.

Using the `serializationOptions` parameter, you can limit the depth of DOM descendants and nested JavaScript objects included in the response.
See [Controlling the returned detail](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#controlling_the_returned_detail) on the `script.evaluate` page for how these limits work.

The response can also include `handle`, `internalId`, and `sharedId` identifiers.
To understand how they differ and where you can use them, see [Object identifiers in the response](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#object_identifiers_in_the_response) on the `script.evaluate` page.

When inspecting the response, check the [`type`](#type_4) field inside [`result`](#return_value) to distinguish a successful function call from an exception.
JavaScript exceptions are reported in the command's `result`, rather than as protocol errors.

## Examples

### Calling a function with node and text arguments

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose the page in a tab contains the heading "Welcome" and you want to change its text to "Welcome back".
You use [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) to obtain the tab's context ID and [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) to find the heading and obtain its `sharedId`.

To make the change, you'll define a function that accepts an element and a string as arguments.
The function will assign the string to the element's [`textContent`](/en-US/docs/Web/API/Node/textContent) property and return the updated text.

Send the following message to call the function with the heading element and "Welcome back" as its arguments:

```json
{
  "id": 1,
  "method": "script.callFunction",
  "params": {
    "functionDeclaration": "(element, text) => { element.textContent = text; return element.textContent; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    },
    "awaitPromise": false,
    "arguments": [
      {
        "sharedId": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071"
      },
      {
        "type": "string",
        "value": "Welcome back"
      }
    ]
  }
}
```

The browser responds as follows, where the response's outer `result` object has `"type": "success"` and contains a nested `result` object with the updated text "Welcome back":

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "type": "success",
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "result": {
      "type": "string",
      "value": "Welcome back"
    }
  }
}
```

### Calling a function with an object as `this`

Suppose you want to increase the value stored in an object's `count` property.
In an earlier [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command, you evaluated the expression `({ count: 2 })` with `resultOwnership` set to `"root"`.
You used the context ID of the tab from the previous example to evaluate the expression in the page's default realm.
The browser kept the resulting object alive and returned its handle along with the realm ID.

To increase the value of `count` by three, you'll define a function that accepts a number.
Let's name the function's parameter `increment`.
The function adds `increment` to the `count` property, which is accessed as `this.count`, and returns the updated value.

Using the same connection and session as in the previous example and without navigating or reloading the page after the earlier `script.evaluate` command, send the following message to call the function.
In `target`, use the context ID from the earlier `script.evaluate` command.
Set `this` to a reference containing the object's handle and `arguments` to an array containing a description of the number `3`:

```json
{
  "id": 2,
  "method": "script.callFunction",
  "params": {
    "functionDeclaration": "function (increment) { this.count += increment; return this.count; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    },
    "awaitPromise": false,
    "this": {
      "handle": "f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"
    },
    "arguments": [
      {
        "type": "number",
        "value": 3
      }
    ]
  }
}
```

The browser responds as follows, where the nested `result` object contains the updated count `5`:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "type": "success",
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "result": {
      "type": "number",
      "value": 5
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) command
- [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) command
- [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) command
- [`script.message`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) event
