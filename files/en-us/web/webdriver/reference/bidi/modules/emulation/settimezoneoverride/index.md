---
title: "`emulation.setTimezoneOverride` command"
short-title: setTimezoneOverride
slug: Web/WebDriver/Reference/BiDi/Modules/emulation/setTimezoneOverride
page-type: webdriver-command
browser-compat: webdriver.bidi.emulation.setTimezoneOverride
sidebar: webdriver
---

The `emulation.setTimezoneOverride` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`emulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/emulation) module overrides the time zone for the specified [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) or [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Syntax

```json-nolint
/* With required parameters and `contexts` */
{
  "method": "emulation.setTimezoneOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "timezone": "Asia/Tokyo"
  }
}

/* With required parameters and `userContexts` */
{
  "method": "emulation.setTimezoneOverride",
  "params": {
    "timezone": "Asia/Tokyo",
    "userContexts": [
      "a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"
    ]
  }
}
```

### Parameters

The `params` field contains:

- `contexts` {{optional_inline}}
  - : An array of one or more strings that contains the IDs of the [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to affect.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    This field cannot be used if [`userContexts`](#usercontexts) is also specified, but it is required if `userContexts` is not specified.
- `timezone`
  - : A string that specifies an available [named time zone identifier or time zone offset string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), such as `"Asia/Tokyo"` or `"+09:00"`.
    It can be `null` to remove the time zone override at the specified scope.
- `userContexts` {{optional_inline}}
  - : An array of one or more strings that contains the IDs of the [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) to affect.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).
    This field cannot be used if [`contexts`](#contexts) is also specified, but it is required if `contexts` is not specified.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type or value.
    - Both `contexts` and `userContexts` are specified.
    - Neither `contexts` nor `userContexts` is specified.
    - `contexts` or `userContexts` is an empty array.
    - A context specified in `contexts` is not a top-level context.
    - `timezone` is neither `null` nor a valid time zone offset string nor an available named time zone identifier.
- `no such frame`
  - : No context with an ID specified in `contexts` is found.
- `no such user context`
  - : No user context with an ID specified in `userContexts` is found.

## Description

The `emulation.setTimezoneOverride` command allows you to simulate a time zone for the selected top-level contexts or user contexts.

The command changes the default time zone used by date and time APIs such as [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
It also changes the local time zone used by [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) methods such as [`getHours()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) and [`getTimezoneOffset()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset).

To remove an override, set `timezone` to `null` for the affected contexts or user contexts.
If you remove an override for a top-level context, an override configured for its user context still applies.

## Examples

### Overriding a tab's time zone with Asia/Tokyo

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you have a web page that displays event times in the browser's default time zone, and you want to verify that it displays them in Tokyo's time zone when the override is `Asia/Tokyo`.

First, open a tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returns its context ID.
Then load the page you're testing.

Send the following message to set the tab's time zone to `Asia/Tokyo`:

```json
{
  "id": 1,
  "method": "emulation.setTimezoneOverride",
  "params": {
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"],
    "timezone": "Asia/Tokyo"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "type": "success",
  "id": 1,
  "result": {}
}
```

After the command succeeds, trigger the page's date and time formatting.
When the page creates a new [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) object without specifying a [`timeZone`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone) option, the object uses the overridden time zone, `Asia/Tokyo`.
Check that the page displays event times in Tokyo's time zone, for example, 18:00 for an event at 09:00 UTC.

To remove the override, send the same command with `timezone` set to `null` and the same `contexts` array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)
