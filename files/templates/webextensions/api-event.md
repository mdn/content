---
title: Namespace.onEventName
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName
page-type: webextension-api-event
# Add status if the event is deprecated or experimental, otherwise remove the status field
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.onEventName
sidebar: addonsidebar
---

<!-- If this event is experimental, include the following macro -->

{{SeeCompatTable}}

<!-- If this event is deprecated, include a warning with replacement info -->

> [!WARNING]
> This event is deprecated. Use {{WebExtAPIRef("Namespace.onReplacementEvent")}} instead.

<!-- Write one or two sentences describing when the event fires and why it is useful -->

Fires when …

## Syntax

<!-- If addListener doesn't accept extra parameters, use this form -->

```js-nolint
browser.Namespace.onEventName.addListener(listener)
browser.Namespace.onEventName.removeListener(listener)
browser.Namespace.onEventName.hasListener(listener)
```

<!-- If addListener accepts extra parameters, use this form -->

```js-nolint
browser.Namespace.onEventName.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.Namespace.onEventName.removeListener(listener)
browser.Namespace.onEventName.hasListener(listener)
```

Events have three functions:

- `addListener(listener)` <!-- or addListener(listener, filter, extraInfoSpec) -->
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stops listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs. The function is passed these arguments:
    - `param1`
      - : `type`. Description of the parameter.

<!-- If addListener accepts extra parameters, document them here. For example: -->

- `extraParam1`
  - : `type`. Description of the parameter.
- `extraParam2` {{optional_inline}}
  - : `type`. Description of the parameter. If the parameter accepts a fixed set of values, list them, for example:
    - `"value1"`: Description of the first value.
    - `"value2"`: Description of the second value.
    - `"value3"`: Description of the third value.

<!-- Remove the extra parameters above if addListener only takes a listener -->

<!-- If the listener is expected to return a value or a Promise, document it below. Otherwise, remove the Return value section -->

### Return value

<!-- Describe the value or Promise the listener can return, and the circumstances under which it is used. For example: -->

Returns a {{jsxref("Promise")}} that resolves to an `object` with the following properties, or `undefined` to take no action:

- `property1`
  - : `type`. Description of the property.
- `property2`
  - : `type`. Description of the property.

## Listener objects

<!-- If the listener receives complex objects, document their shape here under H3 headings -->
<!-- This section is used when the listener object has more than five fields across its objects (see webRequest.onBeforeSendHeaders) -->
<!-- Rename the H3 heading below to match the listener parameter (for example, `details`) -->
<!-- Remove this section if the listener parameters are simple enough to document inline above. -->
<!-- When removed, the Description section below moves up to follow addListener syntax directly. -->

### objectName

- `field1`
  - : `type`. Description of the field.
- `field2`
  - : `type`. Description of the field.

## Description

<!-- Add a detailed description of when and why this event fires, edge cases, interactions with other events or APIs, etc. -->
<!-- This section can be omitted if the introductory paragraph is sufficient. -->

## Examples

### Example title

<!-- Write a descriptive title and a short example showing how to listen for the event -->

```js
function handleEvent(param1) {
  console.log(param1);
}

browser.Namespace.onEventName.addListener(handleEvent);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

<!-- Add see also links as appropriate -->

## See also

- {{WebExtAPIRef("Namespace")}}
