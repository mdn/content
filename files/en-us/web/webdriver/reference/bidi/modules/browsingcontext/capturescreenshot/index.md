---
title: "`browsingContext.captureScreenshot` command"
short-title: captureScreenshot
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.captureScreenshot
sidebar: webdriver
---

The `browsingContext.captureScreenshot` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module captures an image of the specified [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) and returns it as a [Base64](/en-US/docs/Glossary/Base64)-encoded string.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "format": {
      "type": "image/jpeg",
      "quality": 0.8
    },
    "clip": {
      "type": "box",
      "x": 10,
      "y": 10,
      "width": 200,
      "height": 100
    }
  }
}
```

### Parameters

The `params` field contains:

- `clip` {{optional_inline}}
  - : An object that limits the capture to a rectangular area or to a single element.
    If `clip` is not specified, the entire `origin` area is captured.
    It contains the following fields:

    - `type`
      - : A string that specifies whether the screenshot area is a rectangular region or a specific element.
        It can take one of the following values:

        - `"box"`
          - : Captures a rectangular region.
            The area is specified using coordinates that are offsets from the top-left corner of `origin`.
            The `clip` object has the following fields for `type: "box"`:

            - `height`
              - : A number that specifies the height of the rectangle.
            - `width`
              - : A number that specifies the width of the rectangle.
            - `x`
              - : A number that specifies the horizontal offset of the rectangle from the top-left corner of `origin`.
            - `y`
              - : A number that specifies the vertical offset of the rectangle from the top-left corner of `origin`.
        - `"element"`
          - : Captures the bounding box of a specific element.
            The `clip` object also has the following field for `type: "element"`:

            - `element`
              - : An object containing the ID that uniquely identifies the DOM element to capture.
                The ID is returned by the browser when you locate the element using [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate), or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).
- `context`
  - : A string that contains the ID of the context to capture as a screenshot.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `format` {{optional_inline}}
  - : An object that specifies the image encoding to use. If not specified, the screenshot is encoded as `"image/png"`.
    It contains the following fields:
    - `quality` {{optional_inline}}
      - : A number between `0.0` and `1.0` that specifies the compression quality to use for [lossy formats](/en-US/docs/Glossary/Lossy_compression) such as `"image/jpeg"`.
        If not specified, the compression level used is browser-dependent.
    - `type`
      - : A string that contains the image [MIME type](/en-US/docs/Glossary/MIME_type) to encode the screenshot as, for example `"image/png"` or `"image/jpeg"`.
- `origin` {{optional_inline}}
  - : A string that specifies the area for the screenshot.
    It can take one of the following values:
    - `"document"`: The area spans the entire scrollable document, including content outside the [visible viewport](/en-US/docs/Glossary/Visual_Viewport).
    - `"viewport"`: The area is the visible viewport. This is the default.

### Return value

The `result` object in the response contains the following fields:

- `data`
  - : A string that contains the Base64-encoded image data.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.

- `no such element`
  - : The DOM element referenced by `clip.element` cannot be resolved or does not belong to the document of the context being captured.

- `no such frame`
  - : No context with the given context ID is found.

- `unable to capture screen`
  - : The requested `clip` region, after being intersected with the `origin` area, has zero width or height.

- `unsupported operation`
  - : The browser cannot capture a screenshot of the context.

## Examples

### Capturing an image of the visible viewport

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to capture the current viewport as a PNG:

```json
{
  "id": 1,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

The browser responds with the Base64-encoded image data as follows:

```json-nolint
{
  "id": 1,
  "type": "success",
  "result": {
    "data": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASU..."
  }
}
```

### Capturing an image of the entire document as a JPEG

Using the same connection and session, send the following message to capture the full scrollable page as a compressed JPEG, including content outside the viewport:

```json
{
  "id": 2,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "format": {
      "type": "image/jpeg",
      "quality": 0.8
    }
  }
}
```

The browser responds with the Base64-encoded JPEG data as follows:

```json-nolint
{
  "id": 2,
  "type": "success",
  "result": {
    "data": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMDAwMDAwMDAwMEBAMEBQYFBQUFBgcGBgYGBwgICQkJCQgIC..."
  }
}
```

### Capturing an image of a specific element

Using the same connection and session, suppose [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) returns a node with a shared ID.

With `origin` set to `"document"`, send the following message to capture only that element's bounding box, even if it is currently scrolled out of view:

```json
{
  "id": 3,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "clip": {
      "type": "element",
      "element": {
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a"
      }
    }
  }
}
```

The browser responds with the Base64-encoded image data as follows:

```json-nolint
{
  "id": 3,
  "type": "success",
  "result": {
    "data": "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M8ABYxAxAgAAcM..."
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) command
- [`browsingContext.print`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/print) command
