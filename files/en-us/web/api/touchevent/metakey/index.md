---
title: TouchEvent.metaKey
slug: Web/API/TouchEvent/metaKey
tags:
  - API
  - DOM
  - Mobile
  - Property
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.metaKey
---
{{ APIRef("Touch Events") }}

## Summary

A boolean value indicating whether or not the <kbd>Meta</kbd> key is enabled when the touch event is created. If this key is enabled, the attribute's value is `true`. Otherwise, it is `false`.

This property is {{readonlyInline}}.

> **Note:** On Macintosh keyboards, this is the <kbd>⌘ Command</kbd> key. On Windows keyboards, this is the Windows key (<kbd>⊞</kbd>).

## Syntax

```js
var metaEnabled = touchEvent.metaKey;
```

### Return value

- `metaEnabled`
  - : `true` if the <kbd>Meta</kbd> key is enabled for this event; and `false` if the <kbd>Meta</kbd> is not enabled.

## Example

The [TouchEvent.altKey example](/en-US/docs/Web/API/TouchEvent/altKey#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
