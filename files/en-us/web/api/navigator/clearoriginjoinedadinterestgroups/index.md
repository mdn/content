---
title: "Navigator: clearOriginJoinedAdInterestGroups() method"
short-title: clearOriginJoinedAdInterestGroups()
slug: Web/API/Navigator/clearOriginJoinedAdInterestGroups
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.clearOriginJoinedAdInterestGroups
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`clearOriginJoinedAdInterestGroups()`** method of the {{domxref("Navigator")}} interface requests the user's browser to leave all ad interest groups with a specified owner that were previously joined on the current top-level frame's origin.

When calling `clearOriginJoinedAdInterestGroups()` from a document embedded in an {{htmlelement("iframe")}}, The document must be same-origin with the `owner` of the interest group(s) you are trying to leave for the operation to succeed.

For more information on ad interest groups, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
clearOriginJoinedAdInterestGroups(owner)
clearOriginJoinedAdInterestGroups(owner, interestGroupsToKeep)
```

### Parameters

- `owner`
  - : A string specifying the owner of the interest group(s) the browser is requested to leave.
- `interestGroupsToKeep` {{optional_inline}}
  - : An array of strings specifying names of interest groups with the specified `owner` that should not be left.

### Return value

A promise that fulfills with `Undefined`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) is disallowed by a {{httpheader("Permissions-Policy/join-ad-interest-group", "join-ad-interest-group")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the `owner` URL does not resolve, and/or does not use an HTTPS scheme.

## Examples

The following snippet requests the browser to leave all interest groups joined on the current top-level frame's origin with an `owner` of `"https://dsp.example"`, _except_ for the ones named in the array:

```js
navigator.clearOriginJoinedAdInterestGroups({
  owner: "https://dsp.example",
  [
    "fashion shoes",
    "another group name"
  ]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group)
