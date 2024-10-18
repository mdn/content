---
title: "Protected Audience API: Joining an ad interest group"
slug: Web/API/Protected_Audience_API/Join_ad_interest_group
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

This article explains how to use the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) to add a user's browser to an advertising **interest group**.

Later on, when the same user visits a site that could potentially display ads related to that interest group, the Protected Audience API can be used to [run an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction) to choose the most relevant ad to display to them based on that interest. If the interest group owner is invited to bid in the auction, they will have one of their ads displayed, should they win.

## Process summary

Let's say a user visits a site where a company is talking about its products, for example a Shoe company. This might be the company's own site (`shoe-shop.example`), or another site like a fashion blog that has articles about shoes. From their browsing behavior, it is reasonable for the company to surmise that the user has an interest in shoes, and therefore add them to an interest group related to shoes. The company can then target the user with ads relevant to this interest in the future.

Traditionally, advertisers have learned about user interests by tracking their behavior across sites using technologies such as [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies). An ad will typically be embedded on a web page in an {{htmlelement("iframe")}}, which can set a cookie containing information about the user and the subjects they are interested in. This is bad for user [privacy](/en-US/docs/Web/Privacy).

The Protected Audience API provides an alternative mechanism for adding users to interest groups that does not track them. When a user visits a site that indicates such an interest, the **buyer** (the company that wants to advertise its products, or a **Demand-side platform** (DSP) acting on its behalf) can invoke the {{domxref("Navigator.joinAdInterestGroup()")}} method — this in effect asks the user's browser to add an interest group to its list of stored interest groups that it is a member of. An interest group is equivalent to a remarketing list in traditional advertising, and contains the following information:

- A name, indicating what the interest is. In this case, an appropriate name might be `shoes` or `fashion-shoes`.
- The URL of the interest group owner. This might be the shop itself, i.e. `shoe-shop.example`, or the DSP acting on their behalf, for example `https://dsp.example`.
- Configuration information required for the browser to include the buyer in ad auctions, such as bidding logic code, real-time data, and appropriate ad metadata.

In the next section, we'll look in detail at a typical `joinAdInterestGroup()` call and the information it contains.

## A typical `joinAdInterestGroup()` call

`joinAdInterestGroup()` is invoked with an options object parameter, which contains all the information the browser needs to join the interest group. A typical basic call might look like this:

```js
const oneWeekInSeconds = 60 * 60 * 24 * 7;

const interestGroupOptions = {
  owner: "https://dsp.example",
  name: "fashion shoes",
  lifetimeMs: oneWeekInSeconds,
  biddingLogicURL: "https://dsp.example/bid.js",
  ads: [
    {
      renderURL: "https://dsp.example/ads/default-ad.html",
      metadata: {
        adName: "default-ad",
      },
    },
  ],
};

navigator.joinAdInterestGroup(interestGroupOptions);
```

The option properties as follows:

- `owner`
  - : The URL of the interest group owner, or a third party (such as a DSP) acting on their behalf. If an ad auction relevant to the group is run on an ad seller site, its owner may be invited to participate.
- `name`
  - : The name of the group. This can be anything you like, but it should clearly describe the kind of product the interest group is related to.
- `lifetimeMs`
  - : The time, in milliseconds, that the browser will be a member of the interest group for. In the above example we have set the lifetime as one week. The maximum allowable lifetime is 30 days after the most recent site visit, but this can be extended by a subsquent `joinAdInterestGroup()` call with the same `owner` and `name`. If the value is set to `0` or less, it will cause the browser to leave the interest group.
- `biddingLogicURL`
  - : The URL of the ad buyer's bidding logic JavaScript code, which is run during the ad auction to generate the interest group's auction bid. The JavaScript must contain an author-defined [`generateBid()`](#) function, which must return an object containing the correct information for the browser to process the buyer's bid. See [Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction) for more information on where this script fits into the overall process. `biddingLogicURL`s must be valid HTTPS URLs that contain no fragment or credentials. They must also be same-origin with the `owner`.
- `ads`

  - : An array of objects representing the different ads related to this interest group, which may be shown in the group owner wins an ad auction. The sub-properties shown here are as follows:

    - `renderURL`
      - : The URL of the ad to be displayed if this ad is chosen.
    - `metaData`

      - : An object representing metadata that can be used at bidding time during an auction. The content of this metadata is completely arbitrary — it can contain any properties the owner wants to include — although they should make sure it is compatible with the auctions they wish to bid in.

      `ads` objects can contain other properties too, including reporting information and ad sizes.

> [!NOTE]
> This example contains a limited subset of the available properties. For more information, see the {{domxref("Navigator.joinAdInterestGroup()")}} reference page.

## Updating interest groups

Subsequent calls to `joinAdInterestGroup()` with the same `owner` and `name` will overwrite previously-stored values for that interest group.

There is also a method available for updating specific values stored inside previously-joined interest groups, {{domxref("Navigator.updateAdInterestGroups()")}}. Any values can be updated except for the group `owner` and `name` — these cannot be changed. The calling origin must be same-origin with the owner of the groups being updated.

The method is invoked with no parameters:

```js
navigator.updateAdInterestGroups();
```

Update information is retrieved from the [`updateURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#updateURL) property of the options object passed into each group's originating `joinAdInterestGroup()` call.

## Leaving interest groups

To request that the browser leave an interest group, the buyer can call the {{domxref("Navigator.leaveAdInterestGroup()")}} method. A typical call looks like this:

```js
navigator.leaveAdInterestGroup({
  owner: "https://dsp.example",
  name: "fashion shoes",
});
```

The `owner` and `name` properties have exactly the same definition as they do for `joinAdInterestGroup()`; here we are specifying `owner` and `name` of the group we want to leave rather than join.

The object parameter is optional — you can omit it in cases where `leaveAdInterestGroup()` is called from inside an ad that is being targeted at a specific interest group. This will cause the browser to leave that group.

To leave multiple interest groups with one operation, the buyer can call the {{domxref("Navigator.clearOriginJoinedAdInterestGroups()")}} method, which looks like this:

```js
navigator.clearOriginJoinedAdInterestGroups({
  owner: "https://dsp.example",
  [
    "fashion shoes",
    "another group name"
  ]
});
```

This requests the browser to leave all interest groups owned by the specified owner that were previously joined on the current top-level frame's origin, except for the ones named in the optional array.

> [!NOTE]
> When calling `leaveAdInterestGroup()` or `clearOriginJoinedAdInterestGroups()` from a document embedded in an {{htmlelement("iframe")}}, The document must be same-origin with the `owner` of the interest group(s) you are trying to leave for the operation to succeed.

## Handling permission to join and leave groups

For a browser to successfully join or leave an ad interest group, permission is needed from both the site being visited, and the interest group's `owner` in the case of join requests, and just the group `owner` in the case of leave requests.

### Visited site permissions

The visited site can allow or deny permission using the {{httpheader("Permissions-Policy")}} {{httpheader("Permissions-Policy/join-ad-interest-group", "join-ad-interest-group")}} directive (there is no directive for leaving interest groups). By default, this allows `joinAdInterestGroup()` to be run in the top-level page, but not in cross-domain code embedded in {{domxref("iframe")}}s. This can be controlled using the `Permission-Policy` header and/or the `<iframe>` allow attribute.

For example, to allow `joinAdInterestGroup()` to be run on the current domain as well as a trusted partner DSP's site:

```http
Permissions-Policy: join-ad-interest-group=(self "https://dsp.example")
```

To control permission specifically for code embedded inside an `<iframe>`:

```html
<iframe
  src="https://dsp.example/join-handler"
  allow="join-ad-interest-group https://dsp.example"></iframe>
```

### Group owner permissions

The interest group `owner` implicitly grants permission to run join or leave requests in top-level or embedded code running on its own domain. It can grant permission to other domains via a list at a `.well-known` URL. Let's look at how this works.

1. When code run on a particular domain embedded in an {{domxref("iframe")}} calls {{domxref("joinAdInterestGroup()")}}, {{domxref("leaveAdInterestGroup()")}}, or {{domxref("clearOriginJoinedAdInterestGroups()")}} for an interest group with a different owner, the browser will fetch the URL `https://owner.domain/.well-known/interest-group/permissions/?origin=frame.origin`:

   - `owner.domain` is the domain that owns the interest group.
   - `frame.origin` is the origin embedded inside the `<frame>`.

   The fetch uses the `omit` [`credentials` mode](/en-US/docs/Web/API/RequestInit#credentials), using the Network Partition Key of the frame that invoked the method, and a [`mode`](/en-US/docs/Web/API/RequestInit#mode) setting of `cors`, to avoid unexpected data leakage. As a result, the response needs an appropriate {{httpheader("Access-Control-Allow-Origin")}} header to allow it to load from the calling origin.

2. The file sent in the response must be a JSON file with the following format:

   ```json
   {
     "joinAdInterestGroup": true,
     "leaveAdInterestGroup": true
   }
   ```

   Each field takes a boolean value indicating whether the `frame.origin` has the group owner's permission to join/leave interest groups. Missing permissions are assumed to be `false`.

   - `"joinAdInterestGroup": true`: The `frame.origin` has permission to run `joinAdInterestGroup()`. In addition, because calling `joinAdInterestGroup()` with a `lifetimeMs` value of `0` effectively leaves an interest group, this setting also allows `frame.origin` to call `leaveAdInterestGroup()`, even if `leaveAdInterestGroup` is missing or set to `false`.
   - `"leaveAdInterestGroup": true`: The `frame.origin` has permission to run `leaveAdInterestGroup()` and `clearOriginJoinedAdInterestGroups()`.

Browsers may delay these requests or run them out of order due to network constraints, however, all pending join and leave requests for a single owner must be run in the order in which they were made. Same-origin operations should be applied immediately. When a page or `<iframe>` is navigated, the browser will attempt to complete pending join and leave requests that are blocked on a network fetch, but may choose to drop them if there are more than 20 for a single top-level frame.
