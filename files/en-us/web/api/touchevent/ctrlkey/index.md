---
title: TouchEvent.ctrlKey
slug: Web/API/TouchEvent/ctrlKey
tags:
  - API
  - DOM
  - Mobile
  - Property
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.ctrlKey
---
{{ APIRef("Touch Events") }}

## Summary

A boolean value indicating whether the <kbd>control</kbd> (Control) key is enabled when the touch event is created. If this key is enabled, the attribute's value is `true`. Otherwise, it is `false`.

This property is {{readonlyInline}}.

## Syntax

```js
var ctrlEnabled = touchEvent.ctrlKey;
```

### Return value

- `ctrlEnabled`
  - : `true` if the <kbd>control</kbd> key is enabled for this event; and `false` if the <kbd>control</kbd> is not enabled.

## Example

The [TouchEvent.altKey example](/en-US/docs/Web/API/TouchEvent/altKey#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
