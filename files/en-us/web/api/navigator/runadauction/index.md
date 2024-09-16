---
title: "Navigator: runAdAuction() method"
short-title: runAdAuction()
slug: Web/API/Navigator/runAdAuction
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.runAdAuction
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`runAdAuction()`** method of the {{domxref("Navigator")}} interface initiates a real-time auction on the seller/publisher site that determines which ad is to be shown in the associated ad space.

When calling `runAdAuction()`, the calling origin does not need to be same-origin with the seller's origin. For example, a seller may wish to call `runAdAuction()` from a publisher's site context.

For more information on ad auctions, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
runAdAuction(options)
```

### Parameters

- `options`

  - : An options object that can contain the following properties:

    - `decisionLogicURL`
      - : The URL of the seller's bidding logic JavaScript code, which is run during the ad auction to generate the interest group's auction bid. The JavaScript must contain an author-defined [`generateBid()`](#) function, which is run on each received bid to generate suitability scores. `decisionLogicURL`s must be valid HTTPS URLs that contain no fragment or credentials. They must also be same-origin with the `seller`.
    - `seller`
      - : The URL of the seller, or a third party (such as an SSP) acting on their behalf.
    - `additionalBids` {{optional_inline}}
      - : An author-defined promise that should fulfill with {{jsxref("undefined")}} when the fetch request or {{htmlelement("iframe")}} navigation for any additional bids has completed, meaning the bids have arrived and are ready to be accepted into the auction. See [Creating additional bids](#) for more details.
    - `allSlotsRequestedSizes` {{optional_inline}}

      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) that specifies the size of all ad slots on the page. This information will be passed to each interest group's [`trustedBiddingSignalsURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#trustedbiddingsignalsurl), if requested. For each property, the `id` is a string representing an identifying name for a requested ad size and the `value` is an object containing `width` and `height` properties that define that size. The bidder should list the the sizes it provides in its [`adSizes`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#adsizes) property. The `width` and `height` properties are strings that can contain the following value types:

        - Unitless numbers, which are interpreted as pixel values. For example, `"100"` represents 100 pixels.
        - Numbers followed by `"px"`, which are interpreted as pixel values. `"100px"` represents 100 pixels, and is equivalent to `"100"`.
        - Numbers followed by `"sw"` or `"sh"`, which are interpreted as a percentage of the screen width and screen height, respectively. For example, `"100sw"` represents the full width of the screen, whereas `"50sh"` represents half the screne height.

    - `auctionNonce` {{optional_inline}}
      - : A string containing a [version 4 Universally Unique IDentifier (UUID)](https://www.ietf.org/rfc/rfc4122.txt#version-4-uuid). This represents an auction nonce, which is included in `runAdAuction()` options to prevent unintended replaying of additional bids. The nonce should be generated using the {{domxref("Navigator.createAuctionNonce()")}} method.
    - `auctionSignals` {{optional_inline}}
      - : Arbitrary metadata related to the auction that is shared with the buyer (passed into [`generateBid()`](#)) and the seller (passed into [`scoreAd()`](#)). This property can take any value provided it is JSON-serializable. Can also be expressed as a promise if you wish the values to be passed asynchronously. This gives the seller an opportunity to provide information about the page context (such as ad size and publisher ID), the type of auction (for example, first-price vs second-price), etc.
    - `componentAuctions` {{optional_inline}}
      - : An array of `runAdAuction()` options objects. In the case of an ad auction composed of multiple component auctions, this property contains the configuration for each component. See [`Running component auctions`](#) for more details.
    - `deprecatedRenderURLReplacements` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) that specifies substitution macro names and values. These macro names can then be specified in the URN or {{domxref("FencedFrameConfig")}} `src` returned by `runAdAuction()` and they will be replaced by the specified values. For each property, the `id` is an identifying name for the macro, and the `value` is the value to be substituted. Macro names must be in the form `${NAME}` or `%%NAME%%`. Can also be expressed as a promise if you wish the values to be passed asynchronously.
    - `directFromSellerSignalsHeaderAdSlot` {{optional_inline}}
      - : A string that represents signals coming from the seller. These signals are trusted to come from the seller because the content loads from response headers from an HTTPS fetch request made to the seller's origin, ensuring the authenticity and integrity of the signals. Can also be expressed as a promise if you wish the values to be passed asynchronously. [EDITORIAL: I don't understand how this works, need more input here]
    - `interestGroupBuyers` {{optional_inline}}
      - : An array containing the URLs of the interest group [owners](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#owner) invited to bid in the auction. All interest groups with these owners that the user's browser is a member of will be invited to bid in the auction, provided:
        - The group's [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) resolves successfully.
        - The group has at least one ad creative listed in its [`ads`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#ads) array.
        - The group's [`priority`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#priority) is greater than or equal to `0`.
    - `maxTrustedScoringSignalsURLLength` {{optional_inline}}
      - : A number that specifies the maximum allowable URL length for the seller's trusted scoring signals requests. This must be greater than or equal to `0`. See [Fetching Real-Time Data from a Trusted Server](#) for more information on how these URLs are constructed.
    - `perBuyerCumulativeTimeouts` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) representing the maximum allowable cumulative runtime, in milliseconds, for all of each buyer's [`generateBid()`](#) scripts. This includes downloading resources, starting processes, and generating bid calls. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a number representing their cumulative timeout value. A key of `*` is used to set a default cumulative value for unspecified buyers.
    - `perBuyerCurrencies` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) specifying the expected currency for each buyer as a [three-character currency code](<https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)>). For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a string representing their expected currency. If the [`generateBid()`](#) call for a particular buyer returns a `bidCurrency` and buyer has a currency specified in `perBuyerCurrencies`, the two must match otherwise the bid will be dropped. A key of `*` is used to set a default currency for unspecified buyers.
    - `perBuyerExperimentGroupIds` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) specifying IDs for coordinated experiments with buyers' trusted servers (see [Fetching Real-Time Data from a Trusted Server](#) for more information). For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a number between 0 and 65535, inclusive (16 bits), representing an arbitrary ID.
    - `perBuyerGroupLimits` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) specifying the maximum number of interest groups owned by each buyer that can participate in the auction. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a number between 0 and 65535, inclusive (16 bits), representing the maximum number of interest groups the owner can have in the auction. A key of `*` is used to set a default maximum group limit for unspecified buyers.
    - `perBuyerMultiBidLimits` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) specifying the maximum number of bids each buyer can make in the auction. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a number between 0 and 65535, inclusive (16 bits), representing the maximum number of bids. A key of `*` is used to set a default bid limit for unspecified buyers.
    - `perBuyerPrioritySignals` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) specifying priority signals for each buyer bidding in the auction. These are used to dynamically compute interest group priorities before `perBuyerGroupLimits` are applied. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is an object containing properties that specify each priority signal (in the form `"signal-name": number`). A key of `*` is used to set a default set of priority signals for unspecified buyers.
    - `perBuyerRealTimeReportingConfig` {{optional_inline}}
      - : [EDITORIAL: I don't understand what this does; it isn't mentioned at all in the explainer.]
    - `perBuyerSignals` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) representing arbitrary metadata related to each group owner invited to bid in the auction. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` can be any value type containing metadata suitable for the current auction. Each buyer's metadata is shared with them (passed into their `generateBid()` function).
    - `perBuyerTimeouts` {{optional_inline}}
      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) representing the maximum allowable runtime, in milliseconds, of each buyer's [`generateBid()`](#) script. For each property, the `id` is a string containing the URL of the group `owner`, and the `value` is a number representing their timeout value. If a value is not specified, the default value `50` is used. The maximum allowed buyer timeout is 500ms — higher values will be clamped to this maximum. A key of `*` is used to set an updated default value for unspecified buyers.
    - `reportingTimeout` {{optional_inline}}
      - : A number specifying the maximum allowable runtime, in milliseconds, for buyer and seller reporting functions ([`reportWin()`](#) and [`reportResult()`](#), respectively). Defaults to `50`. A specified value higher than `5000` will be clamped to `5000`.
    - `requestedSize` {{optional_inline}}

      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) representing the seller's recommended frame size for displaying the winning ad. The contained properties are `width` and `height`, which accept the following value types:

        - Unitless numbers, which are interpreted as pixel values. For example, `"100"` represents 100 pixels.
        - Numbers followed by `"px"`, which are interpreted as pixel values. `"100px"` represents 100 pixels, and is equivalent to `"100"`.
        - Numbers followed by `"sw"` or `"sh"`, which are interpreted as a percentage of the screen width and screen height, respectively. For example, `"100sw"` represents the full width of the screen, whereas `"50sh"` represents half the screne height.

          When `requestedSize` is specified, the {{domxref("FencedFrameConfig")}} returned when the `runAdAuction()` promise fulfills will automatically populate the associated {{htmlelement("fencedframe")}} element's `width` and `height` attributes with the requested size. Note however that the `<fencedframe>`'s' size can be modified if wished. Bidders may pick a different content size for the ad; if so, that resulting size will be visually scaled to fit inside the `<fencedframe>`.

    - `requestId` {{optional_inline}}
      - : A string ... [EDITORIAL: I don't understand what this does; it isn't mentioned at all in the explainer.]
    - `requiredSellerCapabilities` {{optional_inline}}
      - : An array of strings ... [EDITORIAL: I don't understand what this does; it isn't mentioned at all in the explainer.]
    - `resolveToConfig` {{optional_inline}}
      - : A boolean value; if set to `true`, the `runAdAuction()` call will fulfill with a `FencedFrameConfig` object containing the required information for displaying the winning ad in a `<fencedframe>`. If set to `false`, the `runAdAuction()` call will fulfill with an opaque [URN](/en-US/docs/Web/URI#urns) containing the required information for displaying the winning ad in an `<iframe>`.
    - `sellerCurrency` {{optional_inline}}
      - : A string representing the seller's preferred currency for the auction as a [three-character currency code](<https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)>). [EDITORIAL: It isn't clear from the explainer how this value relates to `perBuyerCurrencies`, or what effect it has on currencies in reporting. I need some help on this.]
    - `sellerExperimentGroupId` {{optional_inline}}
      - : A number between 0 and 65535, inclusive (16 bits) specifying an arbitrary ID for coordinated experiments with the seller's trusted server (see [Fetching Real-Time Data from a Trusted Server](#) for more information).
    - `sellerRealTimeReportingConfig` {{optional_inline}}
      - : [EDITORIAL: I don't understand what this does; it isn't mentioned at all in the explainer.]
    - `sellerSignals` {{optional_inline}}
      - : Arbitrary metadata related to the seller that is shared with the seller only at this stage (passed into [`scoreAd()`](#)). This property can take any value provided it is JSON-serializable. Can also be expressed as a promise if you wish the values to be passed asynchronously.
    - `sellerTimeout` {{optional_inline}}
      - : A number representing the maximum allowable runtime in milliseconds of the seller's [`scoreAd()`](#) script. The default value is `50`. The maximum allowed `sellerTimeout` is 500ms — higher values will be clamped to this maximum.
    - `serverResponse` {{optional_inline}}
      - : A string ... [EDITORIAL: I don't understand what this does; it isn't mentioned at all in the explainer.]
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object belonging to an {{domxref("AbortController")}} (i.e. returned by its {{domxref("AbortController.signal")}} property). {{domxref("AbortController.abort()")}} can then be used to cancel the auction.
    - `trustedScoringSignalsURL` {{optional_inline}}
      - : A string representing the base URL to request the seller's trusted scoring signals. See [Fetching Real-Time Data from a Trusted Server](#) for more information.

### Return value

A {{jsxref("Promise")}} that fulfills with one of two values, depending on the value set for the `resolveToConfig` option:

- If `resolveToConfig` is `true`, the promise will fulfill with a {{domxref("FencedFrameConfig")}} object. This can be set as the value of a {{htmlelement("fencedframe")}} element's {{domxref("HTMLFencedFrameElement.config")}} property to display the ad in the `<fencedframe>`.
- If `resolveToConfig` is `false`, the promise will fulfill with an opaque [URN](/en-US/docs/Web/URI#urns). This can be set as the value of an {{htmlelement("iframe")}} element's {{domxref("HTMLIFrameElement.src")}} property to display the ad in the `<iframe>`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of `runAdAuction()` is disallowed by a {{httpheader("Permissions-Policy/run-ad-auction", "run-ad-auction")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if:
    - `decisionLogicURL` or `seller` are not specified.
    - One of `serverResponse` and `requestId` is specified, but the other is not.
    - `maxTrustedScoringSignalsURLLength` is set to a number less than `0` (or a non-numeric value).
    - `requestedSize` is set, but one or both of the component `width` and `height` values are set to an invalid value type.
    - `allSlotsRequestedSizes` is set, but one of its records contains a `width` or `height` value set to an invalid value type, or one of irs records does not equal `requestedSize`.
    - `additionalBids` is set, and one of the following is true:
      - `auctionNonce` is not set.
      - `interestGroupBuyers` is not set, or is empty.
      - `componentAuctions` is set to a non-empty array.
    - The macro names specified in `deprecatedRenderURLReplacements` are not specified in the allowed formats (`${NAME}` or `%%NAME%%`).
    - The specified buyer URLs (for example, in `perBuyerTimeouts` do not resolve, and/or do not use an HTTPS scheme.
    - One or more of the keys specified in `perBuyerPrioritySignals` starts with `browserSignals.`.
    - One one more currencies specified in `perBuyerCurrencies` or `sellerCurrency` is not a valid [three-character currency code](<https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)>).
    - `componentAuctions` is set, and `deprecatedRenderURLReplacements` is also set.
    - The `runAdAuction()` call did not generate a winning bid.

## Examples

See [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction) for example code snippets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
