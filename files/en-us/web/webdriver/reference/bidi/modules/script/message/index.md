---
title: "`script.message` event"
short-title: message
slug: Web/WebDriver/Reference/BiDi/Modules/script/message
page-type: webdriver-event
browser-compat: webdriver.bidi.script.message_event
sidebar: webdriver
---

The `script.message` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module fires when a preload script registered with [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) or a function invoked with [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) calls a browser-created function that sends data through a [channel](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#channels).

## Event data

The `params` field in the event notification is an object with the following fields:

- `channel`
  - : A string that identifies the client-specified channel through which the message was sent.
    This value matches the `channel` field in the `value` object of an argument passed to [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript#arguments) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments).
- `data`
  - : An object that represents the value passed to the browser-created function.
    The contents and level of detail included in this `data` object depend on the channel settings specified in [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript#arguments) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments): `ownership` and `serializationOptions`.
    The object can contain the following fields:
    - `handle` {{optional_inline}}
      - : A string that contains an ID for the object passed to the browser-created function.
        The browser includes this field when the channel's [`ownership`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#ownership) is `"root"` and the value passed to the browser-created function supports a handle.
        This field is omitted when the [`type`](#type) field is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
        This handle can be used only in the realm in which it is created.
    - `internalId` {{optional_inline}}
      - : A string that uniquely identifies an object within this event's `data` object.
        This field is present only when the same object appears more than once.
        All representations of that object share the same `internalId`.
        This field is omitted when the [`type`](#type) field is `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"`, or `"undefined"`.
        This ID cannot be used to reference the object in subsequent commands.
    - `sharedId` {{optional_inline}}
      - : A string that contains an ID for the DOM node passed to the browser-created function.
        This field is present only when the [`type`](#type) field is `"node"`.
        This ID can be used in subsequent commands that accept a node reference, such as the `startNodes` parameter of [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
        It is valid across realms that can access the same node.
    - `type`
      - : A string that identifies the type of the value passed to the browser-created function, such as `"array"`, `"boolean"`, `"node"`, `"number"`, `"object"`, or `"string"`.
    - `value` {{optional_inline}}
      - : An array, boolean, number, object, or string that represents the value passed to the browser-created function, depending on the [`type`](#type) field.

        For example, `"bigint"` values are represented as strings.
        For `"array"`, `"htmlcollection"`, `"nodelist"`, and `"set"`, `value` is an array of objects representing the collection items.
        For `"object"`, `value` is an array of key-value pairs.

        This field is not present for every type.
        For example, it is omitted for `"function"` and `"undefined"`.
        For container types, this field may be omitted if the limit specified by `maxObjectDepth` in the channel's `serializationOptions` field is reached.
        If the same container object appears more than once within this `data` object, its contents are included only in the first representation, subject to the depth limit.
        Later representations of the same container object omit `value`, including when an object contains a reference to itself.

        - When `type` is `"node"`, `value` is an object that describes properties of the node and can contain the following fields:
          - `attributes` {{optional_inline}}
            - : An object whose keys are attribute names and values are the corresponding attribute values as strings.
              This field is present only for element nodes.
          - `childNodeCount`
            - : A non-negative integer that specifies the number of the node's direct children.
              This is the actual count, even if the `children` field is missing.
          - `children` {{optional_inline}}
            - : An array of child node objects, each with fields such as `sharedId`, `type`, and `value`.
              Descendants are included up to the level specified by `maxDomDepth` in the channel's [`serializationOptions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#serializationoptions) parameter.
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
            - : A string that contains the [value of the node](/en-US/docs/Web/API/Node/nodeValue), such as the text of a text node or the data of a comment node.
              This field is absent for nodes with a `nodeValue` of `null`, such as element, document, and shadow root nodes.
          - `shadowRoot` {{optional_inline}}
            - : An object that describes the shadow root attached to the node, with fields such as `sharedId`, `type`, and `value`.
              This field is `null` when the element has no shadow root.
        - When `type` is `"window"`, `value` is an object with the following field:
          - `context`
            - : A string that contains the ID of the context associated with the window.
- `source`
  - : An object that identifies the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) in which the browser-created function was called.
    It contains the following fields:
    - `context` {{optional_inline}}
      - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) in which the browser-created function was called.
        This field is included only for window realms, including sandbox realms.
    - `realm`
      - : A string that contains the ID of the realm in which the browser-created function was called.
    - `userContext` {{optional_inline}}
      - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the browser-created function was called.
        This field is included only for window realms, including sandbox realms.

## Description

When the `arguments` parameter of [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript#arguments) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments) includes an argument with `type` set to `"channel"`, the browser creates a function that sends data to the client.
The browser passes this function as an argument to the script supplied in the command's `functionDeclaration` parameter.
The script can call this function immediately or retain it for later calls, such as from an event listener.

When the script calls the browser-created function with a value, the browser sends a `script.message` event to the subscribed client.
The event's `data` field represents the value passed to the function, `channel` contains the channel name specified in the command's argument, and `source` identifies where the function was called.

Ensure that the client is [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `script.message` before the script calls the browser-created function.
If you restrict the subscription to particular [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), messages are delivered only from scripts within that scope.

### Events vs. command responses

A `script.message` event is separate from the response to the command that supplied the channel argument.
For example, the `send` parameter in the following command receives the browser-created function:

```json
{
  "id": 1,
  "method": "script.callFunction",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "status"
        }
      }
    ],
    "awaitPromise": false,
    "functionDeclaration": "(send) => { send(\"ready\"); return 10; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}
```

In this example, the command returns `10`, while calling `send("ready")` triggers a `script.message` event carrying `"ready"`.

A `script.message` event has no command `id`; its `channel` field identifies the client-specified channel.

### Using object handles

If the event's `data` object includes a `handle`, it identifies the object passed to the browser-created function.
Objects nested within that object do not receive separate handles.
The client can use the handle to pass the original object to a function in a subsequent [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments) command.

The browser keeps the referenced object alive until the client releases the handle by using [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) or until the realm is destroyed, for example, by navigation to a different page.

## Examples

### Reporting attribute changes with a DOM observer

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a global [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `script.message`.

Suppose you want the client to receive notifications when element attributes change on a page.
You can use a preload script to watch for attribute changes throughout the document and a channel argument to notify the client about the attribute name and new value.

The code in this example uses [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) to register a preload script that installs a {{domxref("MutationObserver")}} before the page's scripts run.
The preload script receives a browser-created function through its `sendMessage` parameter.
When the script calls `sendMessage` with the details of an attribute change, the browser sends those details to the client in a `script.message` event.

Within the preload script in this example, a `MutationObserver` calls the `reportChanges` function when it has attribute changes to report.
The `reportChanges` function goes through the list of change records one at a time.
For each record, `change.target` is the element whose attribute changed.
The function reads the attribute's name and current value, then calls `sendMessage` with an object containing these two values as `attributeName` and `newValue`.

Calling `observer.observe()` starts watching the document for attribute changes.
Setting the [`attributes`](/en-US/docs/Web/API/MutationObserver/observe#attributes) option to `true` enables attribute monitoring, while setting [`subtree`](/en-US/docs/Web/API/MutationObserver/observe#subtree) to `true` extends monitoring to elements throughout the document.

Send the following message to register the preload script:

```json-nolint
{
  "id": 2,
  "method": "script.addPreloadScript",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "my-changes-channel"
        }
      }
    ],
    "functionDeclaration": "
      (sendMessage) => {
        function reportChanges(changes) {
          changes.forEach((change) => {
            const attributeName = change.attributeName;
            const newValue = change.target.getAttribute(attributeName);
            sendMessage({ attributeName, newValue });
          });
        }

        const observer = new MutationObserver(reportChanges);
        observer.observe(document, {
          attributes: true,
          subtree: true
        });
      }"
  }
}
```

To run the preload script in a tab, obtain the tab's context ID by using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Then reload that tab using [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) with `wait` set to `"complete"`.
After the reload completes, use [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) in that context to trigger an attribute change.
For example, run `document.documentElement.setAttribute("class", "updated")`.

This attribute change causes the preload script to call `sendMessage`, triggering a `script.message` event such as the following:

```json
{
  "type": "event",
  "method": "script.message",
  "params": {
    "channel": "my-changes-channel",
    "data": {
      "type": "object",
      "value": [
        [
          "attributeName",
          {
            "type": "string",
            "value": "class"
          }
        ],
        [
          "newValue",
          {
            "type": "string",
            "value": "updated"
          }
        ]
      ]
    },
    "source": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "userContext": "default"
    }
  }
}
```

The `channel` field identifies the channel used by the preload script.
In the event's `data`, `attributeName` is `"class"` and `newValue` is `"updated"`, reporting the attribute change triggered by the client.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) command
- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
- [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) command
