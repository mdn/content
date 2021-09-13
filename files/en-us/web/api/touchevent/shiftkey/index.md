---
title: TouchEvent.shiftKey
slug: Web/API/TouchEvent/shiftKey
tags:
  - API
  - DOM
  - Mobile
  - Property
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.shiftKey
---
{{ APIRef("Touch Events") }}

## Summary

A boolean value indicating whether or not the <kbd>shift</kbd> key is enabled when the touch event is created. If this key is enabled, the attribute's value is `true`. Otherwise, it is `false`.

This property is {{readonlyInline}}.

## Syntax

    var shiftEnabled = touchEvent.shiftKey;

### Return value

- `shiftEnabled`
  - : `true` if the <kbd>shift</kbd> key is enabled for this event; and `false` if the <kbd>shift</kbd> key is not enabled.

## Example

The [TouchEvent.altKey example](/en-US/docs/Web/API/TouchEvent/altKey#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
