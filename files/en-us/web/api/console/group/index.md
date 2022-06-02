---
title: console.group()
slug: Web/API/console/group
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.group
---
{{APIRef("Console API")}}

The **`console.group()`** method creates a new inline group in the [Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) log, causing any subsequent console messages to be indented by an additional level,
until {{domxref("console.groupEnd()")}} is called.

{{AvailableInWorkers}}

## Syntax

```js
group()
group(label)
```

### Parameters

- `label` {{optional_inline}}
  - : Label for the group.

### Return value

None ({{jsxref("undefined")}}).

## Examples

You can use nested groups to help organize your output by visually associating related
messages. To create a new nested block, call `console.group()`. The
`console.groupCollapsed()` method is similar, but the new block is
collapsed and requires clicking a disclosure button to read it.

To exit the current group, call `console.groupEnd()`.
For example, given this code:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

The output looks like this:

![A screenshot of messages nested in the console output.](nesting.png)

See [Using groups in the console](/en-US/docs/Web/API/console#using_groups_in_the_console) in the documentation of {{domxref("console")}} for more details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console.groupEnd()")}}
