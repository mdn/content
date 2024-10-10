---
title: "Navigator: updateAdInterestGroups() method"
short-title: updateAdInterestGroups()
slug: Web/API/Navigator/updateAdInterestGroups
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.updateAdInterestGroups
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`updateAdInterestGroups()`** method of the {{domxref("Navigator")}} interface updates interest groups that the browser is already a member of with information obtained from their update URLs.

Any values can be updated except for group `owner` and `name` — these cannot be changed. The calling origin must be same-origin with the owner of the groups being updated.

Update information is retrieved from the [`updateURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#updateURL) property of the options object passed into each group's originating `joinAdInterestGroup()` call.

> [!NOTE]
> Updates that take too long are aborted, to avoid revealing coarse IP location information to update servers for too long after navigating to another page. The time limit can vary between implementations; Chromium for example has a 10 minute limit.

For more information on ad interest groups, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
updateAdInterestGroups()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const interestGroupOptions = {
  // ...

  updateURL: "https://dsp.example/dataUpdates",
};

navigator.joinAdInterestGroup(interestGroupOptions);

// ...

navigator.updateAdInterestGroups();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group)
