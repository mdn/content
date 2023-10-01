---
title: Selection API
slug: Web/API/Selection_API
page-type: web-api-overview
spec-urls: https://w3c.github.io/selection-api/#selection-interface
---

{{DefaultAPISidebar("Selection API")}}

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

The **Selection API** enables developers to access and manipulate the portion of a document selected by the user.

The {{domxref("Window/getSelection()", "Window.getSelection()")}} and {{domxref("Document/getSelection()", "Document.getSelection()")}} methods return a {{domxref("Selection")}} object representing the portion of the document selected by the user. A `Selection` object provides methods to:

- access the currently selected nodes
- modify the current selection, expanding or collapsing it or selecting an entirely different part of the document
- delete parts of the current selection from the DOM.

The Selection API also provides two events, both firing on {{domxref("Document")}}:

- the {{domxref("Node/selectstart_event", "selectstart")}} event is fired when the user starts to make a new selection
- the {{domxref("Document/selectionchange_event", "selectionchange")}} event is fired when the current selection changes.

## Interfaces

- {{domxref("Selection")}}
  - : An interface which represents the part of the document selected by the user or the current position of the caret.
- {{domxref("Document/getSelection()", "Document.getSelection()")}}
  - : A method returning a `Selection` object representing the current selection or current position of the caret.
- {{domxref("Window/getSelection()", "Window.getSelection()")}}
  - : A method returning a `Selection` object representing the current selection or current position of the caret.
- {{domxref("Document/selectionchange_event", "Document.selectionchange")}}
  - : An event which is fired when the current selection is changed.
- {{domxref("Node/selectstart_event", "Node.selectstart")}}
  - : An event which is fired when a user starts a new selection.

## Specifications

{{Specifications}}
