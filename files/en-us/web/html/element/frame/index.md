---
title: <frame>
slug: Web/HTML/Element/frame
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.frame
---

{{HTMLSidebar}}{{Deprecated_Header}}

The **`<frame>`** [HTML](/en-US/docs/Web/HTML) element defines a particular area in which another HTML document can be displayed. A frame should be used within a {{HTMLElement("frameset")}}.

Using the `<frame>` element is not encouraged because of certain disadvantages such as performance problems and lack of accessibility for users with screen readers. Instead of the `<frame>` element, {{HTMLElement("iframe")}} may be preferred.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : This attribute specifies the document that will be displayed by the frame.
- `name` {{Deprecated_Inline}}
  - : This attribute is used for labeling frames. Without labeling, every link will open in the frame that it's in – the closest parent frame. See the [`target`](/en-US/docs/Web/HTML/Element/a#target) attribute for more information.
- `noresize` {{Deprecated_Inline}}
  - : This attribute prevents resizing of frames by users.
- `scrolling` {{Deprecated_Inline}}
  - : This attribute defines the existence of a scrollbar. If this attribute is not used, the browser adds a scrollbar when necessary. There are two choices: "yes" for forcing a scrollbar even when it is not necessary and "no" for forcing no scrollbar even when it _is_ necessary.
- `marginheight` {{Deprecated_Inline}}
  - : This attribute defines the height of the margin between frames.
- `marginwidth` {{Deprecated_Inline}}
  - : This attribute defines the width of the margin between frames.
- `frameborder` {{Deprecated_Inline}}
  - : This attribute allows you to specify a frame's border.

## Example

### A frameset document

A frameset document has a {{HTMLElement("frameset")}} element instead of a {{HTMLElement("body")}} element. The `<frame>` elements are placed within the `<frameset>`.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="400, 500">
    <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  </frameset>
</html>
```

If you want to embed another HTML page into the {{HTMLElement("body")}} of a document, use an {{HTMLElement("iframe")}} element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
