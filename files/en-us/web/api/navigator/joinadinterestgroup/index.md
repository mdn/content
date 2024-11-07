---
title: "Navigator: joinAdInterestGroup() method"
short-title: joinAdInterestGroup()
slug: Web/API/Navigator/joinAdInterestGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.joinAdInterestGroup
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`joinAdInterestGroup()`** method of the {{domxref("Navigator")}} interface requests the user's browser to add an interest group to its list of stored interest groups that it is a member of.

> [!NOTE]
> Subsequent calls to `joinAdInterestGroup()` with the same `owner` and `name` will overwrite previously-stored values for that interest group.

For more information on how this works, see [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group).

## Syntax

```js-nolint
joinAdInterestGroup(options)
```

### Parameters

- `options`

  - : An options object that can contain the following properties:

    - `lifetimeMs`

      - : A number representing the time, in milliseconds, that the browser will be a member of the interest group for. The maximum allowable lifetime is 30 days after the most recent site visit, but this can be extended by a subsquent `joinAdInterestGroup()` call with the same `owner` and `name`. If the value is set to `0` or less, it will cause the browser to leave the interest group.

    - `name`

      - : A string representing the name of the group. This can be anything you like, but it should clearly describe the kind of product the interest group is related to.

    - `owner`

      - : A string representing the URL of the interest group owner, or a third party (such as a **Demand-side platform** (DSP)) acting on their behalf. If an ad auction relevant to the group is run on an ad seller site, its owner may be invited to participate.

    - `additionalBidKey` {{optional_inline}}

      - : A string containing a 32-byte [Ed25519](https://datatracker.ietf.org/doc/html/rfc8032) public key representing an additional bid key, which is used to identify a [negative interest group](#). Negative interest groups (i.e. those that specify an `additionalBidKey`) are not allowed to specify `ads` or an `updateURL`.

    - `ads` {{optional_inline}}

      - : An array of objects representing the different ads related to this interest group, which may be shown in the group owner wins an ad auction. Each object can contain the following properties:
        - `allowedReportingOrigins` {{optional_inline}}
          - : An array of strings representing the destination URLs that are allowed to receive registered macro values during ad engagement reporting. The macros are registered by {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdMacro", "registerAdMacro()")}} calls inside the buyer's [`reportWin()`](#) reporting logic, and the destination URLs are specified inside {{domxref("Fence.reportEvent()")}} calls inside the the embedded document displaying the winning ad (typically inside a {{htmlelement("fencedframe")}}). A maximum of 10 reporting origin URLs can be specified in one interest group, and they must be non-HTTPS.
            > [!NOTE]
            > Reporting origins need to be [enrolled](/en-US/docs/Web/API/Protected_Audience_API#enrollment_and_local_testing) before they can be used in reporting.
        - `buyerReportingId` {{optional_inline}}
          - : A string representing a reporting ID to use for the interest group name that is made available to the buyer's [`reportWin()`](#) reporting logic (as the `interestGroupOwner` property of the `browserSignals` argument). If `buyerReportingId` is not specified, the reported interest group name will be equal to `name`.
        - `buyerAndSellerReportingId` {{optional_inline}}
          - : A string representing a reporting ID to use for the interest group name / buyer reporting ID that is made available to the buyer's [`reportWin()`](#) reporting logic and the seller's [`reportResult()`](#) reporting logic (as the `interestGroupOwner` property of the `browserSignals` argument). If `buyerAndSellerReportingId` is not specified, the reported interest group name will be equal to `name`.
        - `metaData` {{optional_inline}}
          - : An object representing ad-specific metadata that can be used at bidding time during an auction. The content of this metadata is completely arbitrary — it can contain any properties the owner wants to include — although it must be JSON-serializable. Additionally, the owner should make sure it is compatible with the auctions they wish to bid in.
        - `renderURL`
          - : A string representing the URL of the ad content to be displayed if this ad is chosen.
        - `sizeGroup` {{optional_inline}}
          - : A string representing the name of the size group containing the sizes that the ad can be loaded at. Size groups are defined in the [`sizeGroups`](#sizegroups) property.

    - `adComponents` {{optional_inline}}

      - : An array of objects representing component ads that can be used to create ads composed of multiple pieces at bid time (see the `adComponents` option of [`generateBid`](#)). `adComponents` objects contain exactly the same properties as [`ads`](#ads) objects. A maximum of 40 ad components can be defined in each interest group.

    - `adSizes` {{optional_inline}}

      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) in which each property name is a string representing an identifying name for a possible ad size and each value is an object containing `width` and `height` properties that define that size. The `width` and `height` properties are strings that can contain the following value types:

        - Unitless numbers, which are interpreted as pixel values. For example, `"100"` represents 100 pixels.
        - Numbers followed by `"px"`, which are interpreted as pixel values. `"100px"` represents 100 pixels, and is equivalent to `"100"`.
        - Numbers followed by `"sw"` or `"sh"`, which are interpreted as a percentage of the screen width and screen height, respectively. For example, `"100sw"` represents the full width of the screen, whereas `"50sh"` represents half the screne height.

          Ad sizes are grouped together inside the [`sizeGroups`](#sizegroups) property; each ad specified inside the [`ads`](#ads) property can specify a [`sizeGroup`](#sizegroup) that defines what sizes that ad can be loaded at.

    - `biddingLogicURL` {{optional_inline}}

      - : A string representing the URL of the ad buyer's bidding logic JavaScript code, which is run during the ad auction to generate the interest group's auction bid. The JavaScript must contain an author-defined [`generateBid()`](#) function, which must return an object containing the correct information for the browser to process the buyer's bid. See [Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction) for more information on where this script fits into the overall process. `biddingLogicURL`s must be valid HTTPS URLs that contain no fragment or credentials. They must also be same-origin with the `owner`.

    - `biddingWasmHelperURL` {{optional_inline}}

      - : A string representing the URL of a [WebAssembly](/en-US/docs/WebAssembly) binary, which the bidder can provide to handle computationally-expensive subroutines in the bidding logic. This must be served with an `application/wasm` MIME type. The corresponding [WebAssembly.Module](/en-US/docs/WebAssembly/JavaScript_interface/Module) will be made available by the browser inside the bidder's [`generateBid()`](#) function.

    - `enableBiddingSignalsPrioritization` {{optional_inline}}

      - : A boolean. If set to `true` ... If set to `false` (the default) ... [EDITORIAL: I don't understand the priority stuff at all. I need more information about this].

    - `executionMode` {{optional_inline}}

      - : A string representing the execution mode to in which run the [`generateBid()`](#) bidding logic. Possible values are:

        - `"compatibility"`
          - : The default value. Each invocation of `generateBid()` is run in a completely separate new execution environment. This is the most secure option — it is impossible for an earlier invocation to pass data directly to a later invocation. However, it has higher execution costs leading to performance implications because each execution environment must be initialized from scratch.
        - `"group-by-origin"`
          - : Interest groups that share the same [`biddingLogicURL`](#biddinglogicurl) and were joined on the same top-level origin will use the same execution environment to invoke `generateBid()`. This has lower execution costs because the execution environment is not initialized from scratch each time, and therefore is better for performance. However, sharing the execution environment does risk information leakage. Therefore, to avoid cross-site information leaking into `generateBid()`, attempts to join or leave an interest group in "group-by-origin" mode from more than one top-level origin will result in all "group-by-origin" interest groups that were joined from the same top-level origin being removed. Only use this mode if you are confident that your interest groups will only be joined or left from a single top-level origin only.
        - `"frozen-context"`
          - : In the same way as `"group-by-origin"` mode, interest groups that share the same [`biddingLogicURL`](#biddinglogicurl) and were joined on the same top-level origin will use the same execution environment to invoke `generateBid()`. However, `"frozen-context"` mode attempts to freeze the JavaScript context after the top-level script has been run, but before calling `generateBid()`, in each case. The browser calls [`Object.freeze()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) on every JavaScript object that is still reachable and checks for data types or variable bindings that could carry state between runs. If these checks fail then the bid execution will also fail. This mode has higher performance costs than `"group-by-origin"`, but doesn't have the same "single top-level origin only" joining and leaving restrictions.

    - `maxTrustedBiddingSignalsURLLength` {{optional_inline}}

      - : A number that specifies the maximum allowable URL length for the interest group's trusted bidding signals requests. This must be greater than or equal to `0`. See [Fetching Real-Time Data from a Trusted Server](#) for more information on how these URLs are constructed.

    - `priority` {{optional_inline}}

      - : A number that indicates the interest group's relative priority for participating in an auction. This comes into play when the `runAdAuction()` [`perBuyerGroupLimits`](/en-US/docs/Web/API/Navigator/runAdAuction#perBuyerGroupLimits) option is used to limit the number of interest groups each buyer can have bidding in the auction. groups with higher `priority` values are chosen first. In cases where some but not all interest groups with equal priority can participate in an auction due to `perBuyerGroupLimits`, participants are chosen randomly from the interest groups with that priority.

    - `prioritySignalsOverrides` {{optional_inline}}

      - : [EDITORIAL: I don't understand what this does]

    - `priorityVector` {{optional_inline}}

      - : [EDITORIAL: I don't understand what this does]

    - `sellerCapabilities` {{optional_inline}}

      - : [EDITORIAL: I don't understand what this does; not covered in the explainer]

    - `sizeGroups` {{optional_inline}}

      - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) in which each property name is a string representing a group name and each value is an array of strings representing the names of the [adSizes](#adsizes) that are members of that group. Each ad specified inside the [`ads`](#ads) property can specify a [sizeGroup](#sizegroup) that defines what sizes that ad can be loaded at.

    - `trustedBiddingSignalsKeys` {{optional_inline}}

      - : An array of strings representing the keys to pass in the request for the interest group's trusted bidding signals. See [Fetching Real-Time Data from a Trusted Server](#) for more information.

    - `trustedBiddingSignalsSlotSizeMode` {{optional_inline}}

      - : [EDITORIAL: I don't understand what this does]

    - `trustedBiddingSignalsURL` {{optional_inline}}

      - : A string representing the base URL to request the interest group's trusted bidding signals. See [Fetching Real-Time Data from a Trusted Server](#) for more information.

    - `updateURL` {{optional_inline}}

      - : A string representing the interest group's update URL, that is, the URL that interest group data updates are requested from when {{domxref("Navigator.updateAdInterestGroups()")}} method is called. See [Updating interest groups](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group#updating_interest_groups) for more information.

    - `userBiddingSignals` {{optional_inline}}
      - : An object representing general metadata that can be used at bidding time during an auction. The content of this metadata is completely arbitrary — it can contain any properties the owner wants to include — although it must be JSON-serializable. Additionally, the owner should make sure it is compatible with the auctions they wish to bid in.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of `joinAdInterestGroup()` is disallowed by a {{httpheader("Permissions-Policy/join-ad-interest-group", "join-ad-interest-group")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if:
    - The `lifetimeMS` option is not specified.
    - The `biddingLogicURL`, `biddingWasmHelperURL`, `owner`, `trustedBiddingSignalsURL`, or `updateURL` URLs do not resolve, and/or do not use an HTTPS scheme.
    - `maxTrustedBiddingSignalsURLLength` is set to a negative number.
    - `ads.metadata` or `userBiddingSignals` are not JSON-serializable.
    - Any of the names specified in `adSizes` are empty strings (or not strings), and/or the corresponding `width` and `height` sizes are not valid size values.
    - Any of the group names in `sizeGroups` are empty strings (or not strings); any of the referenced `adSizes` names are empty strings (or not strings), or don't exist in `adSizes`.
    - Any of the `renderURL` values specified in `ads` or `adComponents` do not resolve, do not use an HTTPS scheme, or include credentials.
    - Any of the `sizeGroup` values specified in `ads` or `adComponents` are empty strings (or not strings), or don't exist in `sizeGroups`.
    - Any `allowedReportingOrigins` arrays specified in `ads` or `adComponents` have a length greater than `10`, or contain URLs that do not resolve and/or do not use an HTTP scheme.
    - `additionalBidKey` is specified in addition to `ads` and/or `updateURL`.
    - The `additionalBidKey` value fails to successfully decode, or is not 32 bits in length.
    - The total estimated size of the included interest group data exceeds 1048576 bytes (~1.05 MB).

## Examples

See [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group) for example code snippets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
