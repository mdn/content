---
title: "InterestGroupReportingScriptRunnerGlobalScope: registerAdMacro() method"
short-title: registerAdMacro()
slug: Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdMacro
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InterestGroupReportingScriptRunnerGlobalScope.registerAdMacro
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`registerAdMacro()`** method of the
{{domxref("InterestGroupReportingScriptRunnerGlobalScope")}} interface registers substitution macro name/value pairs. The macro names can then be included in the
[`destinationURL`](/en-US/docs/Web/API/Fence/reportEvent#destinationurl) of the {{domxref("Fence.reportEvent()")}} call that fired the custom event. The names will be substituted with the specified values.

## Syntax

```js-nolint
registerAdMacro(name, value)
```

### Parameters

- `name`
  - : The name of the substitution macro.
- `value`
  - : The value to be substituted when the `name` is included in the `destinationURL` of an associated {{domxref("Fence.reportEvent()")}} call.

The characters used in `name` and `value` have to be an upper- or lower-case alphanumberic character, a number, `-`, `.`, `_`, `~`, or `%`.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if any character used in `name` or `value` is outside the list of allowed characters specified above.

## Examples

### Sending report data to a custom destination URL

You can send report data to a custom URL, different to the one specified in {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}, by specifying a custom URL in the `reportEvent()` call's [`destinationURL`](/en-US/docs/Web/API/Fence/reportEvent#destinationurl) property:

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
  destinationURL: "http://some-other.example",
});
```

The `destinationURL` can include substitution macros that are substituted with values registered by `registerAdMacro()` calls inside the buyer's [`reportWin()`](#) reporting logic (this is not available inside the seller's [`reportResult()`](#) reporting logic). For example, you might want to include `PUBLISHER_ID` and `SOURCE_URL_ENC` values:

You first need to register these values via `registerAdMacro()`:

```js
function reportWin(auctionSignals, browserSignals) {
  const { campaignId } = auctionSignals;

  registerAdBeacon({
    click: `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
  });

  registerAdMacro("PUBLISHER_ID", "123a");
  registerAdMacro("SOURCE_URL_ENC", "http%3A%2F%2Fpub%2Eexample%2Fpage");
}
```

You can then specify these inside the `destinationURL`:

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
  destinationURL:
    "http://some-other.example?cid=555&pub_id=${PUBLISHER_ID}&site=${SOURCE_URL_ENC}&t=123'",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
