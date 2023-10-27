---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
page-type: web-api-overview
status:
  - experimental
browser-compat: html.elements.a.attributionsrc
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

The **Attribution Reporting API** enables developers to measure conversions — for example when a user clicks an ad embedded on one site and then proceeds to purchase the item over on the vendor's site — and then access reports on those conversions. And it does this without relying on third-party tracking cookies.

## Concepts and usage

Advertisers commonly want to measure conversions so that they can figure out what advertising placements are giving them the greatest return on investment (ROI) and can adjust their strategy to suit. This usually includes capturing data such as:

- Which users converted (for example purchased an item, or signed up for a service), and how many.
- The geographic regions they are based in.
- What sites the ads were placed on.
- How many products were sold, services were signed up for, etc.
- How much revenue was generated.

Traditionally on the web, conversion has been measured using third-party tracking cookies. An ad will typically be embedded on a web page in an {{htmlelement("iframe")}}, which can set a cookie containing information about the user and their interaction with the ad.

Later on, when the user decides to visit the advertiser's site, provided it is from the same domain as the ad, that site can access the third-party cookie set previously by the ad. The advertiser can then associate the data from the ad with their own first-party data to answer questions such as "did the user purchase a product after interacting with an ad for the product from another site?"

This is bad for user [privacy](/en-US/docs/Web/Privacy). At this point, any page from the same domain can get access to that cookie, plus information from sites that embed those pages. A surprisingly large number of parties will be able to access that data, and infer other data about the user based on their browsing habits.

The Attribution Reporting API provides a way to measure ad conversions in a way that protects user privacy.

### How does it work?

Let's illustrate how the Attribution Reporting API works via an example.

Say we have a online shop, `shop.example` (aka the advertiser), which embeds an ad for one of its products (contained on `ad.shop.example`) on a content site, `news.example` (aka the publisher). The online shop wants to measure how many conversions they get between users interacting with the ad, and then viewing the product page on their site and putting the product into their shopping cart.

![Image representation of the steps described below](ara-flow.png)

The steps involved are as follows:

1. When a user visits the `news.example` site, the site can register an **Attribution source**. This is an ad-related feature that can be used to detect an interaction with the ad. This feature can be:
   - A link. In this case, an interaction is detected by the user clicking the link (directly via an {{htmlelement("a")}} element, or via a {{domxref("Window.open()")}} call).
   - An image such as a 1x1 transparent pixel. The source is registered when the server responds to the image resource network request.
   - A script. In this case you can indicate interaction with the ad via whatever resource request makes sense for your app (i.e. a {{domxref("fetch")}} or {{domxref("XMLHttpRequest")}}).
2. When the action occurs, as determined by the attribution source, associated source data is stored in a private local cache accessible only by the browser. This data includes the contextual and first-party data available to the page and the advertiser, origin of the ad creative, and one or more destinations ([eTLD+1](https://web.dev/same-site-same-origin/#site)s) where you expect the conversion from that ad to occur.
3. When the user later visits `shop.example`, this site can register an **Attribution trigger**. Attribution triggers can be registered by loading:
   - An image, for example a 1x1 conversion pixel.
   - Any network resource (via {{domxref("fetch")}} or {{domxref("XMLHttpRequest")}}).
4. When the attribution trigger is set off (for example, the user clicks the "Add to cart" button on `shop.example`), the browser attempts to match the attribution trigger to a source data entry saved in the private local cache (see 2.). For a successful match, the trigger must be:
   - On a `destination` specified in the source's associated data.
   - Same-origin with the request that specified the source registration.
     > **Note:** These requirements provide privacy protection, but also flexibility — the source _and_ trigger can potentially be situated on the top-level site, or embedded in an {{htmlelement("iframe")}}.
5. If a match is found successfully, the browser sends report data to an endpoint on a reporting server typically owned by the ad tech provider where it can be securely analyzed. The data is not accessible by the site the ad is placed on, or the advertiser site, or any other site except for the site hosting the reporting endpoint. These reports can be either:
   - **Event-level reports**: Reports based on an attribution source event, where detailed source data is associated with coarse trigger data. For example, a report may look like "Click ID 200498 on `ad.shop.example` led to a purchase on `shop.example`", where "Click ID 200498" is the detailed source data, and "purchase" is the coarse trigger data. The detailed source data may encode first-party or contextual data from the source page, and the coarse trigger data may encode the event from the trigger page.
   - **Summary reports**: More detailed reports that combine data from multiple conversions on both the source and trigger side. For example "Campaign ID 774653 on `news.example` has led to 654 sales of widgets on `shop.example` from users in Italy, with a total revenue of $9540." Compiling a summary report requires usage of an aggregation service (see for example the [Google aggregation service](https://github.com/privacysandbox/aggregation-service)).

For more information on implementing the functionality required for the above steps, see:

1. [Registering attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registering attribution triggers](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Generating reports](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Interfaces

The Attribution Reporting API doesn't define any distinct interfaces of its own.

### Extensions to other interfaces

- {{domxref("HTMLAnchorElement.attributionSrc")}}, {{domxref("HTMLImageElement.attributionSrc")}}, {{domxref("HTMLScriptElement.attributionSrc")}}
  - : The `attributionSrc` property allows you to get and set the `attributionsrc` attribute on {{htmlelement("a")}}, {{htmlelement("img")}}, and {{htmlelement("script")}} elements programmatically. It reflects the value of that attribute.
- {{domxref("fetch()")}} and the {{domxref("Request.Request", "Request()")}} constructor, the `attributionReporting` option
  - : When generating a request via {{domxref("fetch()")}}, this indicates that you want the request to trigger the browser to set off an attribution source or trigger event.
- {{domxref("XMLHttpRequest.setAttributionReporting()")}}
  - : When generating a request via {{domxref("XMLHttpRequest")}}, this indicates that you want the request to trigger the browser to set off an attribution source or trigger event.
- {{domxref("Window.open()")}}, the `attributionsrc` feature keyword
  - : Causes completion of the registration of an attribution source _and_ triggers the browser to store the associated source data (as provided in the {{httpheader("Attribution-Reporting-Register-Source")}} response header) when the `open()` method completes. Note that `Window.open()` calls cannot be used to register attribution triggers.

## HTML elements

- {{htmlelement("a")}}, {{htmlelement("img")}}, and {{htmlelement("script")}} — the `attributionsrc` attribute
  - : Specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the associated resource request. On the server-side this header is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response. When registering an attribution source, this is required; when registering an attribution trigger it is only required if you want to specify a separate registration server to the resource the `src` attribute is pointing at. Note that `<a>` elements cannot be used to register attribution triggers.

## HTTP headers

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Used to indicate that the feature the request originated from is eligible to take part in attribution reporting, either as an attribution source or trigger.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to complete registration of an attribution source.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to complete registration of an attribution trigger.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} directive
  - : Controls whether the current document is allowed to use attribution reporting.

## Examples

See [Demo: Attribution Reporting API](https://arapi-home.web.app/) for an example implementation (see the [source code also](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution reporting](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/) on developer.chrome.com (2023)
- [Register multiple reporters](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/multiple-reporters/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
