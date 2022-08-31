---
title: Window.updateCommands()
slug: Web/API/Window/updateCommands
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Window
  - XUL command nodes
  - sCommandName
  - updateCommands
  - Non-standard
browser-compat: api.Window.updateCommands
---
{{ApiRef}}{{Non-standard_Header}}

## Summary

Updates the state of commands of the current chrome window (UI).

## Syntax

```js
updateCommands("sCommandName")
```

### Parameters

- `sCommandName` is a particular string which describes what kind of update event this is (e.g. whether we are in bold right now).

### Return value

None ({{jsxref("undefined")}}).

## Notes

This enables or disables items (setting or clearing the "disabled" attribute on the command node as appropriate), or ensures that the command state reflects the state of the selection by setting current state information in the "state" attribute of the XUL command nodes.

## Specifications

DOM Level 0. Not part of specification.

## Browser compatibility

{{Compat}}
