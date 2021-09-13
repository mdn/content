---
title: Event.originalTarget
slug: Web/API/Event/originalTarget
tags:
  - API
  - DOM
  - Gecko
  - NeedsExample
  - NeedsHelp
  - Non-standard
  - Property
browser-compat: api.Event.originalTarget
---
{{ ApiRef("DOM") }} {{Non-standard_header}}

The original target of the event before any retargetings. (Mozilla-specific)

In presence of [XBL](/en-US/docs/XBL) anonymous content this will be the anonymous node the event originally fired on. See [Anonymous Content#Event_Flow_and_Targeting](/en-US/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting) for more details.

Note: `originalTarget` may also be native anonymous content (see {{Bug("208427")}}), in which case it's useless for non-privileged code.

See also [Comparison of Event Targets](/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)

## Example

_Need an example that makes sense here_

## Specifications

This is a Mozilla-specific property. Defined in {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}

This event property is **not defined** in the [W3.org DOM Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/events.html)

## Browser compatibility

{{Compat}}
