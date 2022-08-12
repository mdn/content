---
title: StaticRange
slug: Web/API/StaticRange
page-type: web-api-interface
tags:
  - API
  - Content Range
  - DOM
  - DOM API
  - DOM Tree
  - Interface
  - Reference
  - Static Range API
  - StaticRange
browser-compat: api.StaticRange
---
{{APIRef("DOM")}}

The [DOM](/en-US/docs/Web/API/Document_Object_Model) **`StaticRange`** interface extends {{domxref("AbstractRange")}} to provide a method to specify a range of content in the DOM whose contents don't update to reflect changes which occur within the DOM tree.

This interface offers the same set of properties and methods as `AbstractRange`.

`AbstractRange` and `StaticRange` are not available from [web workers](/en-US/docs/Web/API/Web_Workers_API).

{{InheritanceDiagram}}

## Constructor

- {{domxref("StaticRange.StaticRange", "StaticRange()")}}
  - : Creates a new `StaticRange` object given the {{domxref("StaticRangeInit")}} dictionary specifying the default values for its properties.

## Properties

_The properties below are inherited from its parent interface, {{domxref("AbstractRange")}}._

- {{domxref("StaticRange.collapsed")}} {{ReadOnlyInline}}
  - : Returns a Boolean value which is `true` if the range's start and end positions are the same, resulting in a range of length 0.
- {{domxref("StaticRange.endContainer")}} {{ReadOnlyInline}}
  - : Returns the DOM {{domxref("Node")}} which contains the ending point of the range. The offset into the node at which the end position is located is indicated by `endOffset`.
- {{domxref("StaticRange.endOffset")}} {{ReadOnlyInline}}
  - : Returns an integer value indicating the offset into the node given by `endContainer` at which the last character of the range is found.
- {{domxref("StaticRange.startContainer")}} {{ReadOnlyInline}}
  - : Returns the DOM {{domxref("Node")}} which contains the starting point of the range (which is in turn identified by `startOffset`.
- {{domxref("StaticRange.startOffset")}} {{ReadOnlyInline}}
  - : Returns an integer value indicating the offset into the node specified by `startContainer` at which the first character of the range is located.

## Usage notes

A DOM range specifies a span of content in a document, potentially beginning inside one node (or element) and ending inside another one. Unlike a {{domxref("Range")}}, a `StaticRange` represents a range which is fixed in time; it does not change to try to keep the same content within it as the document changes. If any changes are made to the DOM, the actual data contained within the range specified by a `StaticRange` may change. This lets the {{Glossary("user agent")}} avoid a lot of work that is unnecessary if the web app or site doesn't need a live-updating range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Live updating range of content within the DOM: {{domxref("Range")}}
- {{domxref("AbstractRange")}}, the abstract interface from which all ranges are derived
