---
title: "`emulation.setLocaleOverride` command"
short-title: setLocaleOverride
slug: Web/WebDriver/Reference/BiDi/Modules/emulation/setLocaleOverride
page-type: webdriver-command
browser-compat: webdriver.bidi.emulation.setLocaleOverride
sidebar: webdriver
---

The `emulation.setLocaleOverride` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`emulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/emulation) module overrides the locale for the specified [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) or [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Syntax

```json-nolint
/* With required parameters and `contexts` */
{
  "method": "emulation.setLocaleOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "locale": "fr-FR"
  }
}

/* With required parameters and `userContexts` */
{
  "method": "emulation.setLocaleOverride",
  "params": {
    "locale": "fr-FR",
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
- `locale`
  - : A string that specifies a structurally valid {{glossary("BCP 47 language tag", "language tag")}}, such as `fr-FR`.
    It can be `null` to remove the locale override at the specified scope.
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
    - `locale` is not `null` and is not a structurally valid language tag.
- `no such frame`
  - : No context with an ID specified in `contexts` is found.
- `no such user context`
  - : No user context with an ID specified in `userContexts` is found.

## Description

The `emulation.setLocaleOverride` command allows you to simulate a locale for the selected top-level contexts or user contexts.

The command changes the default locale used by internationalization APIs such as [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
It also changes the language preferences exposed through [`navigator.language`](/en-US/docs/Web/API/Navigator/language) and [`navigator.languages`](/en-US/docs/Web/API/Navigator/languages).

The command also sets the [`Accept-Language`](/en-US/docs/Web/HTTP/Reference/Headers/Accept-Language) request header to the overridden locale when the request does not already specify that header.

To remove an override, set `locale` to `null` for the affected contexts or user contexts.
If you remove an override for a top-level context, an override configured for its user context still applies.

## Examples

### Overriding a tab's locale with French

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you have a web page that formats dates using the browser's default locale, and you want to verify that it displays dates in French when the locale is `fr-FR`.

First, open a tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returns its context ID.
Then load the page you're testing.

Send the following message to set the tab's locale to French:

```json
{
  "id": 1,
  "method": "emulation.setLocaleOverride",
  "params": {
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"],
    "locale": "fr-FR"
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

After the command succeeds, trigger the page's date formatting.
When the page creates a new [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) object without specifying a locale, the formatter uses the overridden locale, `fr-FR`.
Check that the page displays dates using French formatting conventions, such as "14 mars 2026" for March 14, 2026, when using the [`dateStyle: "long"`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle) option.

To remove the override, send the same command with `locale` set to `null` and the same `contexts` array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Navigator.language`](/en-US/docs/Web/API/Navigator/language)
- [`Navigator.languages`](/en-US/docs/Web/API/Navigator/languages)
