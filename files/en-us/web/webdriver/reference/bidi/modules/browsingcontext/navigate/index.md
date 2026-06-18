---
title: "`browsingContext.navigate` command"
short-title: navigate
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.navigate
sidebar: webdriver
---

The `browsingContext.navigate` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module navigates the specified [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) to the given URL.

## Syntax

```json-nolint
{
  "method": "browsingContext.navigate",
  "params": {
    "context": "<contextId>",
    "url": "<url>"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the context to be navigated.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `url`
  - : A string that contains the destination URL.
- `wait` {{optional_inline}}
  - : A keyword that specifies the stage of document loading at which the command returns (the stages correspond to those of the [`document.readyState`](/en-US/docs/Web/API/Document/readyState) property).
    It can take one of the following values:
    - `"complete"`
      - : The command returns when the document and all its subresources have finished loading.
        Use this value when your automation needs to interact with page content — for example, to click a button or read text — before sending further commands.
    - `"interactive"`
      - : The command returns when the document has been parsed and is ready for interaction.
        Use this value when you need the DOM to be available but don't need images or other subresources to finish loading.
    - `"none"`
      - : The command returns once the navigation has committed, that is, the browser has accepted the URL and begun loading the new page, but page content is not yet available.
        This is also the default behavior when `wait` is omitted.
        Use this value when you only need to initiate the navigation and track its progress through navigation events.

### Return value

The `result` object in the response contains the following fields:

- `navigation`
  - : A string that contains the ID ([UUID](/en-US/docs/Glossary/UUID)) that uniquely identifies this navigation. A new UUID is generated for each `browsingContext.navigate` command.
    If you are subscribed to navigation events such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted), the event includes this same UUID, letting you match the event back to this specific navigate call.
- `url`
  - : A string that contains the URL of the loaded document, including the fragment.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
    This error is also returned if the `url` parameter is not a valid URL.
- `no such frame`
  - : No context with the given context ID is found.
- `unknown error`
  - : A navigation failure occurred, such as a network error or an aborted navigation.

## Examples

### Navigating to a URL

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you create a new tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create). Using the context ID of that tab, send the following message to navigate it to, say, `https://example.com/page.html`:

```json
{
  "id": 1,
  "method": "browsingContext.navigate",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "url": "https://example.com/page.html"
  }
}
```

The browser responds as follows with the navigation ID and the URL of the loaded document:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "navigation": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "url": "https://example.com/page.html"
  }
}
```

### Navigating and waiting for the page to fully load

Suppose you want to navigate a context to `https://example.com/form.html` and wait until the page has fully loaded before continuing. Send the following message:

```json
{
  "id": 2,
  "method": "browsingContext.navigate",
  "params": {
    "context": "d84e9b52-c4a1-4f88-b537-613c8a5b9e2d",
    "url": "https://example.com/form.html",
    "wait": "complete"
  }
}
```

The browser responds as follows, once the document and all its subresources have finished loading:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "navigation": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
    "url": "https://example.com/form.html"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`browsingContext.traverseHistory`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
