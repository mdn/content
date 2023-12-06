---
title: "TouchEvent: metaKey property"
short-title: metaKey
slug: Web/API/TouchEvent/metaKey
page-type: web-api-instance-property
browser-compat: api.TouchEvent.metaKey
---

{{ APIRef("Touch Events") }}

The read-only **`metaKey`** property of the {{domxref("TouchEvent")}} interface returns a boolean value indicating whether or not the <kbd>Meta</kbd> key is enabled when the touch event is created. If this key is enabled, the attribute's value is `true`. Otherwise, it is `false`.

This property is {{ReadOnlyInline}}.

> **Note:** On Macintosh keyboards, this is the <kbd>⌘ Command</kbd> key. On Windows keyboards, this is the Windows key (<kbd>⊞</kbd>).

## Value

A boolean value that is `true` if the <kbd>Meta</kbd> key is enabled for this event; and `false` if the <kbd>Meta</kbd> is not enabled.

## Examples

The [TouchEvent.altKey example](/en-US/docs/Web/API/TouchEvent/altKey#examples) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
