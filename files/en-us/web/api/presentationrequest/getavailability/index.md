---
title: "PresentationRequest: getAvailability() method"
short-title: getAvailability()
slug: Web/API/PresentationRequest/getAvailability
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PresentationRequest.getAvailability
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

When the `getAvailability()` method is called, the user agent _MUST_ run the following steps:

- Input
  - : _presentationUrls_, a list of [presentation request URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls)
- Output
  - : _P_, a [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise)

1. If one of the following conditions is true:

   - The result of running the [prohibits mixed security contexts algorithm](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) on the document's [settings object](https://www.w3.org/TR/presentation-api/#dfn-settings-object) is `"Prohibits Mixed Security Contexts"` and _presentationUrl_ is an [a priori unauthenticated URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url).
   - The document object's [active sandboxing flag set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) has the [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) set.

   Run the following substeps:

   1. Return a [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) rejected with a `SecurityError` {{domxref("DOMException")}}.
   2. Abort these steps.

2. Let _P_ be a new [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise).
3. Return _P_, but continue running these steps [in parallel](https://www.w3.org/TR/presentation-api/#dfn-in-parallel).
4. If the user agent is unable to [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) for the entire duration of the [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) (e.g., because the user has disabled this feature), then:

   1. [Resolve](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ with a new `PresentationAvailability` object with its `value` property set to `false`.
   2. Abort all the remaining steps.

5. If the user agent is unable to continuously [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) but can find presentation displays in order to start a connection, then:

   1. [Reject](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) _P_ with a `NotSupportedError` {{domxref("DOMException")}}.
   2. Abort all the remaining steps.

6. If there exists a tuple (_A_, _presentationUrls_) in the [set of availability objects](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects), then:

   1. [Resolve](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ with _A_.
   2. Abort all the remaining steps.

7. Let _A_ be a new `PresentationAvailability` object with its `value` property set as follows:

   1. `false` if the [list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) is empty.
   2. `true` if there is at least one [compatible presentation display](https://www.w3.org/TR/presentation-api/#dfn-compatible-presentation-display) for some member of _presentationUrls_. Meaning there is an entry _(presentationUrl, display)_ in the [list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) for some _presentationUrl_ in _presentationUrls_.
   3. `false` otherwise.

8. Create a tuple (_A_, _presentationUrls_) and add it to the [set of availability objects](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects).
9. Run the algorithm to [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays).
10. [Resolve](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ with _A_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
