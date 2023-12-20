---
title: EditContext API
slug: Web/API/EditContext_API
page-type: web-api-overview
browser-compat: api.EditContext
---

{{securecontext_header}}{{DefaultAPISidebar("EditContext API")}}

The **EditContext API** ...

## Concept

... Explain what's done by the API and what's not. For example need to update the selection manually, because the view could be done with anything. Text, canvas, etc. and therefore the editcontext doesn't necessarily know when selection changes.

... something that should be mentioned in the article (and that the spec should also call out, but doesn't) is that if EditContext is used with `canvas` there's an extra burden on the author to support a11y, since screen readers can't read the content from the DOM. This is not really a new issue with EditContext, but is a problem that anyone building an editor view with `canvas` needs to solve. Google Docs supports a11y for their `canvas` editor by maintaining a separate HTML "view" of the document being edited that's kept offscreen but presented to screen readers.

## Interfaces

- {{DOMxRef("EditContext")}}

  - : The **`EditContext`** interface represents an instance of an EditContext ...

- {{DOMxRef("TextFormat")}}

  - : The **`TextFormat`** interface represents an instance of an TextFormat ...

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ...
