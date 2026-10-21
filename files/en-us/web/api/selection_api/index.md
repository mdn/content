---
title: Selection API
slug: Web/API/Selection_API
page-type: web-api-overview
spec-urls: https://w3c.github.io/selection-api/#selection-interface
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

The **Selection API** enables developers to access and manipulate the portion of a document selected by the user.

The API includes capabilities to:

- Access the currently selected nodes
- Modify the current selection, expanding or collapsing it or selecting an entirely different part of the document
- Delete parts of the current selection from the DOM
- React to events indicating that a selection is started or changed

## Interfaces

- {{domxref("Selection")}}
  - : An interface which represents the part of the document selected by the user or the current position of the caret.

## Extensions to other interfaces

### Window

- {{domxref("Window/getSelection()", "Window.getSelection()")}}
  - : A method returning a `Selection` object representing the current selection or current position of the caret.

### Document

- {{domxref("Document/getSelection()", "Document.getSelection()")}}
  - : A method returning a `Selection` object representing the current selection or current position of the caret.
- {{domxref("Document/selectionchange_event", "selectionchange")}}
  - : An event which is fired when the current selection is changed.

### Node

- {{domxref("Node/selectstart_event", "selectstart")}}
  - : An event which is fired when a user starts a new selection.

## Specifications

{{Specifications}}
