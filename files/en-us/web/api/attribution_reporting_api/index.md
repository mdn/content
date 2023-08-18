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

Traditionally on the web, conversion has been measured using third-party tracking cookies. an ad will typically be contained on a web page embedded in an {{htmlelement("iframe")}}, which can set a cookie containing information about the user and their interaction with the ad. Later on, when the user decides to visit the advertiser's site, provided it is from the same domain as the ad it can access that cookie and associate data from there with its own data. For example, did the user purchase a product after coming from the other site?

This is bad for user [privacy](/en-US/docs/Web/Privacy). At this point, any page from the same domain can get access to that cookie, plus information from sites that embed those pages, and a surprisingly large number of parties can see that data, and infer other data about the user based on their browsing habits.

To mitigate this problem, The Attribution Reporting API allows developers to register:

- **Attribution sources**: An ad-related event that can be used to measure a user's interaction with the ad. This can involve clicking a link or viewing an image or other asset associated with an ad, on the site where it is published.
- **Attribution triggers**. An event on the advertiser's own site, for example clicking a "purchase" button on an ecommerce site.

When an attribution source event occurs (for example, the user clicks the link in the ad), associated data is stored in a private local cache accessible only by the browser. This data includes any contextual reporting data that you want to measure (for example user ID, geographic region, campaign ID), plus the origin that the ad is hosted on and one or more destinations ([eTLD+1](https://web.dev/same-site-same-origin/#site)s) — sites where you expect the associated conversion to occur (i.e, where the attribution triggers are).

Next, when the attribution trigger event occurs (for example the user clicks the "purchase" button), the browser attempts to match the attribution trigger to an entry in the private local storage partition. For a successful match, the trigger must be:

1. On a `destination` specified in the source's associated {{httpheader("Attribution-Reporting-Register-Source")}} header.
2. Same-origin with the request that specified the source registration.

This provides privacy protection, but also flexibility — the source and trigger can potentially be situated on the top-level site, or embedded in a frame.

If a successful match is found, the browser sends data to a reporting endpoint on a server typically owned by the ad tech provider where it can be securely analyzed. The data is not accessible by the site the ad is placed on, or the advertiser site, or any other site except for the site hosting the reporting endpoint.

These reports can be either:

- **Event-level reports**: Reports based on a single attribution source event, for example, "Click ID 200498 on publisher.example.com by user bob_smith led to a purchase on ourshop.example.com". This is useful for simple reporting of coarse data such as what ad placements result in the most conversions.
- **Summary reports**: More detailed reports that combine data from multiple conversions on both the source and trigger side. For example "Campaign ID 774653 on publisher.example.com has led to 654 sales of widgets on ourshop.example.com from users in Italy, with a total revenue of $9540." Compiling a summary report requires usage of n aggregation service (see for example the [Google aggregation service](https://github.com/privacysandbox/aggregation-service)).

The steps involved in using the Attribution Reporting API are:

1. [Registering attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registering attribution triggers](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Generating reports](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Interfaces

The Attribution Reporting API has no distinct interfaces of its own.

### Extensions to other interfaces

- {{domxref("HTMLAnchorElement.attributionSrc")}}, {{domxref("HTMLImageElement.attributionSrc")}}, {{domxref("HTMLScriptElement.attributionSrc")}}
  - : The `attributionSrc` property allows you to get and set the `attributionsrc` attribute on {{htmlelement("a")}}, {{htmlelement("img")}}, and {{htmlelement("script")}} elements programmatically. It reflects the value of that attribute.
- {{domxref("fetch()")}} and the {{domxref("Request.Request", "Request()")}} constructor, the `attributionReporting` option
  - : When generating a request via {{domxref("fetch()")}}, this indicates that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with it. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to complete attribution source or trigger registration.
- {{domxref("XMLHttpRequest.setAttributionReporting()")}}
  - : When generating a request via {{domxref("XMLHttpRequest")}}, this indicates that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with it. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to complete attribution source or trigger registration.
- {{domxref("Window.open()")}}, the `attributionsrc` feature keyword
  - : When generating a request via {{domxref("Window.open()")}}, this indicates that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with it. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} header in the response to complete registration of an attribution source. `Window.open()` calls cannot be used to register an attribution trigger.

## HTML elements

- {{htmlelement("a")}}, {{htmlelement("img")}}, and {{htmlelement("script")}} — the `attributionsrc` attribute
  - : Specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the resource request. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response. When registering an attribution source, this is required; when registering an attribution trigger it is only required if you want to specify a separate registration server to the resource the `href` or `src` attribute is pointing at.

## HTTP headers

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Used to indicate that the feature the request originated from is eligible to take part in attribution reporting, either as an attribution source or trigger.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to complete registration of an attribution source.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to complete registration of an attribution trigger.
- {{httpheader("Attribution-Reporting-Support")}}
  - : xxx EDITORIAL: NEED TO FIND OUT WHETHER THE CROSS-WEB/PLATFORM-SPECIFIC APP ATTRIBUTION REPORTING FUNCTIONALITY IS SUPPORTED. SEE https://github.com/WICG/attribution-reporting-api/blob/main/app_to_web.md
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} directive
  - : Controls whether the current document is allowed to use attribution reporting.

## Examples

There is a complete demo available at [Demo: Attribution Reporting API](https://arapi-home.web.app/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution reporting](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/) on developer.chrome.com (2023)
- [Register multiple reporters](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/multiple-reporters/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
