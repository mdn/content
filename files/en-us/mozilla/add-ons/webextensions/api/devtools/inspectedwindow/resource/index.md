---
title: devtools.inspectedWindow.Resource
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/Resource
page-type: webextension-api-type
browser-compat: webextensions.api.devtools.inspectedWindow.Resource
---

{{AddonSidebar()}}

A resource within the inspected page, such as a document, a script, or an image. This object is returned from {{WebExtAPIRef('devtools.inspectedWindow.getResources()')}}, {{WebExtAPIRef('devtools.inspectedWindow.onResourceAdded')}}, and {{WebExtAPIRef('devtools.inspectedWindow.onResourceContentCommitted')}}.

## Type

Values of this type are objects. They contain these properties:

- `url`
  - : `string`. The URL of the resource.
- `getContent`
  - : `function`. Gets the content of the resource. This function takes no parameters, and returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an object containing:
    - `content`
      - : `string`. Content of the resource, which could be encoded.
    - `encoding`
      - : `string`. Empty if the content is not encoded, otherwise the encoding name.
- `setContent`
  - : `function`. Sets the content of the resource. This function takes these parameters:
    - `content`
      - : `string`. The new content of the resource. Only resources with the text type are supported.
    - `commit`
      - : `boolean`. True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.

    Returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an error object set to undefined if the resource content was set successfully; otherwise it describes the error.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
