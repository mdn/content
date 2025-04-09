---
title: "Navigator: presentation property"
short-title: presentation
slug: Web/API/Navigator/presentation
page-type: web-api-instance-property
browser-compat: api.Navigator.presentation
---

{{securecontext_header}}{{APIRef("Presentation API")}}

The `presentation` read-only property of {{DOMxRef("Navigator")}} serves as the entry
point for the [Presentation API](/en-US/docs/Web/API/Presentation_API) and
returns a reference to {{DOMxRef("Presentation")}} object.

## Value

A reference to {{DOMxRef("Presentation")}} object.

## Examples

The following example demonstrates how to use the [Presentation API](/en-US/docs/Web/API/Presentation_API) to start a presentation session in a supporting browser.

```js
// Check if the Presentation API is available in the current browser
if ('presentation' in navigator) {
  // Access the Presentation object
  const presentationObj = navigator.presentation;
  console.log("Presentation object:", presentationObj);
  // Create a PresentationRequest
  const presentationUrls = ["https://example.com/presentation.html"];
  const presentationRequest = new PresentationRequest(presentationUrls);
  console.log("Created a PresentationRequest:", presentationRequest);
  
  // Start a presentation session
  presentationRequest.start()
    .then(session => {
      console.log("Presentation session started:", session);
    })
    .catch(error => {
      console.error("Error starting presentation session:", error);
    });
} else {
  // Notify if the API is unavailable
  console.error("Presentation API is not available in this browser.");
}
```

The code first checks if the [Presentation API](/en-US/docs/Web/API/Presentation_API) is supported by testing for the existence of `navigator.presentation`. If supported, it creates a new `PresentationRequest` object with a URL to the presentation content. It then attempts to start a presentation session using the `start()` method, which returns a Promise that resolves with a `PresentationConnection` object on success or rejects with an error if the session cannot be started.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Presentation API](/en-US/docs/Web/API/Presentation_API)
- {{DOMxRef("Presentation")}}
