---
title: "`browsingContext.print` command"
short-title: print
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/print
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.print
sidebar: webdriver
---

The `browsingContext.print` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module creates a paginated representation of a document in a [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) as a PDF and returns it as a [Base64](/en-US/docs/Glossary/Base64)-encoded string.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "background": true,
    "margin": {
      "top": 2.0,
      "bottom": 2.0,
      "left": 2.0,
      "right": 2.0
    },
    "orientation": "landscape",
    "page": {
      "width": 21.0,
      "height": 29.7
    },
    "pageRanges": ["1-3"],
    "scale": 1.5,
    "shrinkToFit": false
  }
}
```

### Parameters

The `params` field contains:

- `background` {{optional_inline}}
  - : A boolean that indicates whether background colors and images are included in the resulting PDF.
    - `false`: Background colors and images are omitted from the resulting PDF. This is the default.
    - `true`: Background colors and images are included in the resulting PDF.
- `context`
  - : A string that contains the ID of the context that has the document to print.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `margin` {{optional_inline}}
  - : An object that specifies the page margins in centimeters. It can contain the following fields:
    - `bottom` {{optional_inline}}
      - : A non-negative number that specifies the bottom margin. The default is `1.0`.
    - `left` {{optional_inline}}
      - : A non-negative number that specifies the left margin. The default is `1.0`.
    - `right` {{optional_inline}}
      - : A non-negative number that specifies the right margin. The default is `1.0`.
    - `top` {{optional_inline}}
      - : A non-negative number that specifies the top margin. The default is `1.0`.
- `orientation` {{optional_inline}}
  - : A string that specifies the page orientation.
    It can take one of the following values:
    - `"landscape"`: The page is printed in landscape orientation.
    - `"portrait"`: The page is printed in portrait orientation. This is the default.
- `page` {{optional_inline}}
  - : An object that specifies the page size in centimeters.
    It can contain the following fields:
    - `height` {{optional_inline}}
      - : A number that specifies the page height.
        The value must be greater than or equal to `0.0352` (1 point).
        The default is `27.94`.
    - `width` {{optional_inline}}
      - : A number that specifies the page width.
        The value must be greater than or equal to `0.0352` (1 point).
        The default is `21.59`.
- `pageRanges` {{optional_inline}}
  - : An array of numbers and strings, each specifying pages to include in the resulting PDF.
    Each array item is one of the following:
    - A number that selects a single page, counting the first page as page 1.
    - A string that selects a range, such as `"2-4"`.
      Either bound in the range can be omitted.
      Omitting the lower bound, as in `"-3"`, means pages 1 through 3.
      Omitting the upper bound, as in `"5-"`, means page 5 through the last page.

    If `pageRanges` is not specified, all pages are included in the resulting PDF.
- `scale` {{optional_inline}}
  - : A number that specifies the zoom factor to apply to the page content.
    The value must be between `0.1` and `2.0`.
    The default is `1.0`.
- `shrinkToFit` {{optional_inline}}
  - : A boolean that indicates whether the page content is resized to fit the page width.
    - `true`: The content is resized to match the page width, overriding any page width specified by the document's CSS. This is the default.
    - `false`: The content is not resized; any page width specified by the document's own CSS is used instead.

### Return value

The `result` object in the response contains the following fields:

- `data`
  - : A string that contains the Base64-encoded PDF data.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - An array item in `pageRanges` is not a valid page number or range.
    - A range in `pageRanges` has a lower bound greater than its upper bound.
- `no such frame`
  - : No context with the given `context` ID is found.
- `unsupported operation`
  - : The browser cannot generate a paginated representation of the context.

## Description

The `page`, `margin`, `scale`, and `shrinkToFit` parameters control how the document's content is laid out on each printed page.

The `orientation` parameter is applied on top of these.
Setting `orientation` to `"landscape"` swaps dimensions of the `page` rather than rotating the page as a whole.
In landscape, the width of the printed page uses the `height` value of the page, and its height uses the `width` value.

For reference, the default `page` size is `21.59` by `27.94` centimeters (US Letter size, 8.5 by 11 inches).
In portrait, this prints as 21.59 cm wide and 27.94 cm tall.
In landscape, it prints as 27.94 cm wide and 21.59 cm tall.

## Examples

### Printing with default settings

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to print a context's document using every parameter's default: a 21.59 by 27.94 centimeter (US Letter) page in portrait orientation, no background graphics, 1 cm margins on all sides, a scale of 1.0, and content resized to fit the page width:

```json
{
  "id": 1,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

The browser responds with the Base64-encoded PDF data:

```json-nolint
{
  "id": 1,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci..."
  }
}
```

### Printing specific pages and ranges in landscape

Using the same connection and session as in the first example, send the following message to print page 1, pages 3 through 5, and page 8, in landscape orientation, with background graphics included:

```json
{
  "id": 2,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "orientation": "landscape",
    "background": true,
    "pageRanges": ["1", "3-5", "8"]
  }
}
```

The browser responds with the Base64-encoded PDF data:

```json-nolint
{
  "id": 2,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDQgMCBSL0ZpbHRlci..."
  }
}
```

### Printing on A4 paper with custom margins

Using the same connection and session as in the first example, send the following message to print on A4 paper (21.0 cm x 29.7 cm) with 2 cm margins on all sides:

```json
{
  "id": 3,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "page": {
      "width": 21.0,
      "height": 29.7
    },
    "margin": {
      "top": 2.0,
      "bottom": 2.0,
      "left": 2.0,
      "right": 2.0
    }
  }
}
```

The browser responds with the Base64-encoded PDF data:

```json-nolint
{
  "id": 3,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDUgMCBSL0ZpbHRlci..."
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.captureScreenshot`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
