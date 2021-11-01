---
title: MediaError
slug: Web/API/MediaError
tags:
  - API
  - Audio
  - Errors
  - HTML DOM
  - Interface
  - Media
  - MediaError
  - Reference
  - Video
browser-compat: api.MediaError
---
{{APIRef("HTML DOM")}}

The **`MediaError`** interface represents an error which occurred while handling media in an HTML media element based on {{domxref("HTMLMediaElement")}}, such as {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

A `MediaError` object describes the error in general terms using a numeric `code` categorizing the kind of error, and a `message`, which provides specific diagnostics about what went wrong.

## Properties

_This interface doesn't inherit any properties._

- {{domxref("MediaError.code")}}
  - : A number which represents the general type of error that occurred, as follows: {{page("/en-US/docs/Web/API/MediaError/code", "Media error code constants")}}
- {{domxref("MediaError.message")}}
  - : A {{domxref("DOMString")}} object containing a human-readable string which provides _specific diagnostic information_ to help the reader understand the error condition which occurred; specifically, it isn't a summary of what the error code means, but actual diagnostic information to help in understanding what exactly went wrong. This text and its format is not defined by the specification and will vary from one {{Glossary("user agent")}} to another. If no diagnostics are available, or no explanation can be provided, this value is an empty string (`""`).

## Methods

_This interface doesn't implement or inherit any methods, and has none of its own._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.error")}}
