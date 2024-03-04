---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
page-type: web-api-overview
status:
  - experimental
browser-compat: html.elements.fencedframe
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

The **Fenced Frame API** provides functionality for controlling content embedded in {{htmlelement("fencedframe")}} elements.

## Concepts and usage

One major source of [privacy](/en-US/docs/Web/Privacy) and [security](/en-US/docs/Web/Security) problems on the web is content embedded in {{htmlelement("iframe")}} elements. Historically `<iframe>`s have been used to set third-party cookies, which can be used to share information and track users across sites. In addition, content embedded in an `<iframe>` can communicate with its embedding document (for example, using {{domxref("Window.postMessage()")}}).

The embedding document can also use scripting to read various forms of information from the `<iframe>` — for example you can potentially get significant tracking/fingerprinting data from reading the embedded URL from the `src` property, especially if it contains [URL parameters](/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#query). The `<iframe>` can also access the embedding context's DOM, and vice versa.

Most modern browsers are working on mechanisms to partition storage so that cookie data can no longer be used for tracking (for example see [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Partitioned_cookies) or [Firefox State Partitioning](/en-US/docs/Web/Privacy/State_Partitioning)).

`<fencedframe>` elements aim to solve another piece of this puzzle — they are very similar to `<iframe>`s in form and function, except that:

- Communication cannot be shared between the `<fencedframe>` content and its embedding site.
- A `<fencedframe>` can access cross-site data, but only in a very specific set of controlled circumstances that preserve user privacy.
- A `<fencedframe>` cannot be freely manipulated or have its data accessed via regular scripting (for example reading or setting the source URL). `<fencedframe>` content can only be embedded via [specific APIs](#use_cases).
- A `<fencedframe>` cannot access the embedding context's DOM, nor can the embedding context access the `<fencedframe>`'s DOM.

### Use cases

`<fencedframe>`s are used by other APIs to embed different types of cross-site content or collect data, fulfilling different use cases in a privacy-preserving manner. Most of these previously relied on third-party cookies or other mechanisms that were bad for privacy.

- The [Shared Storage API](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/) provides access to unpartitioned cross-site data in a secure environment, calculating and/or displaying results in a `<fencedframe>`. For example:
  - Advertisers can measure the reach of an ad, or serve subsequent ads based on which ones users have already seen on other sites.
  - Developers can do A/B testing, showing variants to a user based on a group they are assigned to, or based on how many users have seen each one already.
  - Businesses can customize the user's experience based on what they have seen on other sites. For example, if they have already purchased membership, you might not want to show them membership sign-up ads across your other properties.
- The [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/) allows developers to implement interest group-based advertising, namely remarketing and custom audience use cases. It can evaluate multiple bids for ad space and display the winning ad in a `<fencedframe>`.
- The [Private Aggregation API](https://developer.chrome.com/docs/privacy-sandbox/private-aggregation/) can gather data from `<fencedframe>`s (originating from shared storage or the Protected Audience API) and create aggregated reports.

## How do `<fencedframe>`s work?

As mentioned above, you don't control the content embedded in a {{htmlelement("fencedframe")}} directly via regular script.

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/fledge/) or [Shared Storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/)) generates a {{domxref("FencedFrameConfig")}} object, which is then set via JavaScript as the value of the `<fencedframe>`'s {{domxref("HTMLFencedFrameElement.config")}} property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` must be passed in to the `runAdAuction()` call to obtain a `FencedFrameConfig` object. If `resolveToConfig` is set to `false`, the resulting {{jsxref("Promise")}} will resolve to an opaque [URN](/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urns) (for example `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) that can only be used in an `<iframe>`.

Either way, the browser stores a URL containing the target location of the content to embed — mapped to the opaque URN, or the `FencedFrameConfig`'s internal `url` property. The URL value cannot be read by JavaScript running in the embedding context.

> **Note:** Support is provided for opaque URNs in `<iframe>`s to ease migration of existing implementations over to [privacy sandbox](https://developer.chrome.com/docs/privacy-sandbox/) APIs. This support is intended to be temporary and will be removed in the future as adoption grows.

> **Note:** `FencedFrameConfig` has a {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} method that is used to pass in data from the embedding document to the `<fencedframe>`'s shared storage. It could for example be accessed in a {{domxref("Worklet")}} via the `<fencedframe>` and used to generate a report. See the [Shared Storage API](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/) for more details.

### Accessing fenced frame functionality on the `Fence` object

Inside documents embedded in `<fencedframe>`s, JavaScript has access to a {{domxref("Window.fence")}} property that returns a {{domxref("Fence")}} instance for that document. This object contains several functions specifically relevant to fenced frame API functionality.
For example, {{domxref("Fence.reportEvent()")}} provides a way to trigger the submission of report data via a [beacon](/en-US/docs/Web/API/Beacon_API) to one or more specified URLs, in order to report ad views and clicks.

### Permissions policy

Only specific features designed to be used in `<fencedframes>`s can be enabled via permissions policies set on them; other policy-controlled features are not available in this context. See [Permissions policies available to fenced frames](/en-US/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) for more details.

### HTTP headers

A {{httpheader("Sec-Fetch-Dest")}} header with a value of `fencedframe` will be set for any requests made from inside a `<fencedframe>`, including child `<iframe>`s embedded within a `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

The server must set a {{httpheader("Supports-Loading-Mode")}} response header with a value of `fenced-frame` for any document intended to be loaded into a `<fencedframe>`, or `<iframe>` embedded within a `<fencedframe>`.

```http
Supports-Loading-Mode: fenced-frame
```

Other effects of fenced frames on HTTP headers are as follows:

- [User-agent client hints](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) are not available inside fenced frames because they rely on [permissions policy](/en-US/docs/Web/HTTP/Permissions_Policy) delegation, which could be used to leak data.
- Strict [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) settings are enforced on new browsing contexts opened from inside frenced frames, otherwise they could be used to leak information to other origins. Any new window opened from inside a fenced frame will have [`rel="noopener"`](/en-US/docs/Web/HTML/Attributes/rel/noopener) and `Cross-Origin-Opener-Policy: same-origin` set to ensure that {{domxref("Window.opener")}} returns `null` and place it in its own browsing context group.
- [`Content-Security-Policy: fenced-frame-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) has been added for specifying valid sources for nested browsing contexts loaded into `<fencedframe>` elements.
- [`Content-Security-Policy: sandbox`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) custom settings cannot be inherited by fenced frames, to mitigate privacy issues. For a fenced frame to load, you need to specify no `sandbox` CSP (which implies the below values), or specify the following sandbox values:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` and `unload` events

[`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) and [`unload`](/en-US/docs/Web/API/Window/unload_event) events do not fire on fenced frames, because they can leak information in the form of a page deletion timestamp. Implementations aim to eliminate as many potential leakages as possible.

## Interfaces

- {{domxref("FencedFrameConfig")}}
  - : Represents the navigation of a {{htmlelement("fencedframe")}}, i.e. what content will be displayed in it. A `FencedFrameConfig` is returned from a source such as the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/) and set as the value of {{domxref("HTMLFencedFrameElement.config")}}.
- {{domxref("Fence")}}
  - : Contains several functions relevant to fenced frame functionality. Available only to documents embedded inside a `<fencedframe>`.
- {{domxref("HTMLFencedFrameElement")}}
  - : Represents a `<fencedframe>` element in JavaScript and provides properties to configure it.

### Extensions to other interfaces

- {{domxref("Navigator.deprecatedReplaceInURN()")}}
  - : Substitutes specified strings inside the mapped URL corresponding to a given opaque URN or `FencedFrameConfig`'s internal `url` property.
- {{domxref("Window.fence")}}
  - : Returns a {{domxref("Fence")}} object instance for the current document context. Available only to documents embedded inside a `<fencedframe>`.

## Enrollment and local testing

Certain API features that create {{domxref("FencedFrameConfig")}}s such as {{domxref("Navigator.runAdAuction()")}} ([Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/)) and {{domxref("WindowSharedStorage.selectURL()")}} ([Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)), as well as other features such as {{domxref("Fence.reportEvent()")}}, require you to enroll your site in a [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment). If you don't do this, the API calls will fail with a console warning.

> **Note:** In Chrome, you can still test your fenced frame code locally without enrollment. To allow local testing, enable the following Chrome developer flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Examples

The following demos all make use of `<fencedframe>`s:

- [Shared Storage API demos](https://shared-storage-demo.web.app/) (which also includes some Private Aggregation API examples)
- [Protected Audience API demo](https://protected-audience-demo-advertiser.web.app/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
