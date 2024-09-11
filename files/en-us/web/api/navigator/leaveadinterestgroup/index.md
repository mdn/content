---
title: "Navigator: leaveAdInterestGroup() method"
short-title: leaveAdInterestGroup()
slug: Web/API/Navigator/leaveAdInterestGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.leaveAdInterestGroup
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`leaveAdInterestGroup()`** method of the {{domxref("Navigator")}} interface requests the user's browser to leave an ad interest group previously joined on the current top-level frame's origin.

When calling `leaveAdInterestGroup()` from a document embedded in an {{htmlelement("iframe")}}, The document must be same-origin with the `owner` of the interest group(s) you are trying to leave for the operation to succeed.

For more information on ad interest groups, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
leaveAdInterestGroup()
leaveAdInterestGroup(group)
```

### Parameters

- `group` {{optional_inline}}
  - : An object containing the following properties:
    - `owner`
      - : A string specifying the owner of the interest group the browser is requested to leave.
    - `name`
      - : A string specifying the name of the interest group the browser is requested to leave.

### Return value

A promise that fulfills with `Undefined`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) is disallowed by a {{httpheader("Permissions-Policy/join-ad-interest-group", "join-ad-interest-group")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the `owner` URL does not resolve, and/or does not use an HTTPS scheme.

## Examples

The following snippet requests the browser to leave the interest group joined on the current top-level frame's origin with an `owner` of `"https://dsp.example"` and a `name` of `"fashion shoes"`:

```js
navigator.leaveAdInterestGroup({
  owner: "https://dsp.example",
  name: "fashion shoes",
});
```

The `group` object parameter is optional — you can omit it in cases where `leaveAdInterestGroup()` is called from inside an ad that is being targeted at a specific interest group. This will cause the browser to leave that group:

```js
navigator.leaveAdInterestGroup();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group)
