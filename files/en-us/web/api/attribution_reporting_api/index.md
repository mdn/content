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

- Which users converted (for example purchased an item, or signed up for a service), and how many
- The geographic regions they are based in
- What sites the ads were placed on
- How many products were sold, services were signed up for, etc.
- How much revenue was generated

Traditionally on the web conversion has been measured using third-party tracking cookies. an ad will typically be contained on a web page embedded in an {{htmlelement("iframe")}}, which can set a cookie containing information about the user and their interaction with the ad. Later on, when the user decides to visit the advertiser's site, provided it is from the same domain as the ad it can access that cookie and associate data from there with its own data. For example, did the user purchase a product after coming from the other site?

This is bad for user [privacy](/en-US/docs/Web/Privacy). At this point, any page from the same domain can get access to that cookie, plus information from sites that embed those pages, and a surprisingly large number of parties can see that data, and infer other data about the user based on their browsing habits.

To mitigate this problem, The Attribution Reporting API allows developers to register:

- **Attribution sources**: An ad-related event that can be used to measure a user's interaction with the ad. This can involve clicking a link or viewing an image or other asset.
- **Attribution triggers**. An event on the advertiser's site, for example clicking a "purchase" button.

When an attribution source event occurs (e.g. the user clicks the link in the ad), associated data is stored in a private local storage partition accessible only by the browser. This data includes any contextual reporting data that you want to measure (for example user ID, geographic region, campaign ID), plus the origin that the ad is hosted on and one or more destinations ([eTLD+1](https://web.dev/same-site-same-origin/#site)s) — sites where you expect the conversion to occur (i.e where the attribution triggers are).

Next, when the attribution trigger event occurs (e.g. the user clicks the "purchase" button), the browser attempts to match the attribution trigger to an entry in the private local storage partition. For a successful match, the trigger must be on a specified destination (specified in the source's associated {{httpheader("Attribution-Reporting-Register-Source")}} header) and be hosted on the same origin as the ad (EDITORIAL: IS THIS CORRECT?). This provides privacy protection, but also flexibility — the source and trigger can potentially be situated on the top-level site, or embedded in a frame.

If a successful match is found, the browser sends data to a reporting endpoint on a server typically owned by the ad tech provider where it can be securely analyzed. The data is not accessible by the site the ad is placed on, or the advertiser site, or any other site except for the site hosting the reporting endpoint.

These reports can be either:

- **Event-level reports**: Reports based on a single attribution source event, for example, "Click ID 200498 on publisher.example.com by user bob_smith led to a purchase on ourshop.example.com". This is useful for simple reporting of coarse data such as what ad placements result in the most conversions.
- **Summary reports**: More detailed reports that combine data from multiple conversions on both the source and trigger side. For example "Campaign ID 774653 on publisher.example.com has led to 654 sales of widgets on ourshop.example.com from users in Italy, with a total revenue of $9540." Compiling a summary report requires usage of n aggregation service (see for example the [Google aggregation service](https://github.com/privacysandbox/aggregation-service)).

## How does the Attribution Reporting API work?

The steps involved in using the Attribution Reporting API are:

- Registering attribution sources
- Registering attribution triggers
- Collecting data and generating reports

In the following sections we will look at each of these in a little more detail.

## Registering attribution sources

To begin with, you need to register an attribution source for users to interact with; this will take the form of a click or view on a hosted ad that causes the browser to store information on that interaction. All of the different methods of initiating an attribution source registration are listed in the sections below. They all work the same way:

1. All of the methods cause an HTTP request to be sent. Including `attributionsrc`/`attributionRequest` as indicated causes the {{httpheader("Attribution-Reporting-Eligible")}} header to be sent along with that request, to indicate that the request is eligible for attribution reporting.
2. When the server receives such a request, you should include a {{httpheader("Attribution-Reporting-Register-Source")}} along with the response — this provides the information that the browser should store when the attribution source is interacted with.

The `Attribution-Reporting-Register-Source` header takes a JSON string as its value. For example:

```js
JSON.stringify({
  source_event_id: "412444888111012",
  destination: "https://advertiser.example",
  // Optional fields
  expiry: "604800",
  priority: "100",
  debug_key: "122939999",
});
```

See {{httpheader("Attribution-Reporting-Register-Source")}} for all the available fields.

### Click-based attribution sources

To register a click-based attribution source, you can:

- Add the `attributionsrc` attribute to an appropriate {{htmlelement("a")}} element (either declaratively, or via the {{domxref("HTMLAnchorElement.attributionSrc")}} property):

  ```html
  <a href="https://ourshop.example.com" attributionsrc>
    Click to visit our shop
  </a>
  ```

  ```js
  const aElem = document.querySelector("a");
  aElem.attributionSrc = "";
  ```

- Add the `attributionsrc` feature keyword to the features property of a {{domxref("Window.open()")}} call:

  ```js
  window.open("https://ourshop.example.com", "_blank", "attributionsrc");
  ```

  > **Note:** It is much better for accessibility to use an `<a>` element, but this method is available for cases where that isn't an option and the user is clicking something else to trigger the navigation. Note that, to register the source, this method must be called within five seconds of user interaction.

### View-based attribution sources

To register a view-based attribution source, you can:

- Add the `attributionsrc` attribute to an appropriate {{htmlelement("img")}} element that (either declaratively, or via the {{domxref("HTMLImageElement.attributionSrc")}} property):

  ```html
  <img src="advertising-image.png" attributionsrc />
  ```

  ```js
  const imgElem = document.querySelector("img");
  imgElem.attributionSrc = "";
  ```

  EDITORIAL: WHAT IS THE ACCEPTED BEST PRACTICE HERE? SURELY IF YOU JUST INCLUDE THIS IN THE PAGE IT WILL TRIGGER THE EVENT AS SOON AS THE IMAGE SOURCE IS LOADED, WHICH IS NO GOOD - YOU WANT THE USER TO ACTUALLY LOOK AT IT BEFORE THE EVENT IS LOADED. SHOULD WE RECOMMEND LAZY LOADING, OR USE OF AN INTERSECTION OBSERVER, OR SIMILAR?

- Add the `attributionsrc` attribute to an appropriate {{htmlelement("script")}} element that (either declaratively, or via the {{domxref("HTMLScriptElement.attributionSrc")}} property):

  ```html
  <script src="advertising-script.js" attributionsrc />
  ```

  ```js
  const scriptElem = document.querySelector("script");
  scriptElem.attributionSrc = "";
  ```

  EDITORIAL: AGAIN, WHAT WOULD THE USAGE OF THIS ACTUALLY LOOK LIKE?

- Send a {{domxref("fetch()")}} request containing the `attributionReporting` option:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  // Optionally set keepalive to ensure the request outlives the page.
  fetch("https://a.example/register-source", {
    keepalive: true,
    attributionReporting,
  });
  ```

  EDITORIAL: AGAIN, HOW SHOULD WE RECOMMEND THAT PEOPLE ACTUALLY USE THIS? IS IT THE CASE THAT YOU USE ATTRIBUTIONSRC ON THE SCRIPT ELEMENT IN COMBINATION WITH ATTRIBUTIONREPORTING IN FETCH (OR XHR?) AND IN THAT CASE HOW DOES THE SCRIPT ELEMENT GET USED AS A SOURCE/TRIGGER?

- Send an {{domxref("XMLHttpRequest")}} request with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  const req = new XMLHttpRequest();
  req.open("GET", "https://a.example/register-source");
  req.setAttributionReporting(attributionReporting);
  req.send();
  ```

### Specifying URLs inside attributionsrc

You can specify one or more space-separated URLs as a value for `attributionsrc` attributes or `attributionSrc` properties, in any of the cases listed in the previous sections.

For example in the case of an `<a>` element:

```html
<a
  href="https://ourshop.example.com"
  attributionsrc="https://a.example/register-source https://b.example/register-source">
  Click to visit our shop
</a>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

In the case of a {{domxref("Window.open()")}} call, the different URLs have to be listed as separate `attributionsrc` features in the features parameter, separated by commas:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

window.open(
  "https://ourshop.example.com",
  "_blank",
  `attributionsrc=${encodedUrl1},attributionsrc=${encodedUrl2}`,
);
```

In this case, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionsrc`; this is required if the resource pointed to in `href` or `src` is not on a server you control, and you want to register the attribution source on separate servers that you _do_ control. `attributionsrc` instructs the browser to make the required extra requests and specifies their destinations.

## Registering attribution triggers

With your sources registered, you now need to register attribution triggers — these are events occurring on the advertiser's site (e.g. clicking a "purchase" button) that tell the browser to capture conversions, which as explained before involves the browser attempting to match the attribution trigger to an attribution source entry in the private local storage partition. All of the different methods of initiating an attribution trigger registration are listed in the sections below. They all work the same way:

1. All of the methods cause an HTTP request to be sent. Including `attributionsrc`/`attributionRequest` as indicated causes the {{httpheader("Attribution-Reporting-Eligible")}} header to be sent along with that request, to indicate that the request is eligible for attribution reporting. Alternatively, you can just send the header directly via a conversion pixel.
2. When the server receives such a request from a trigger source, you should include a {{httpheader("Attribution-Reporting-Register-Trigger")}} along with the response — this provides data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values.

The `Attribution-Reporting-Register-Trigger` header takes a JSON string as its value. For example:

```js
JSON.stringify({
  event_trigger_data: [
    {
      trigger_data: "412444888111012",
      // Optional
      priority: "1000000000000",
      deduplication_key: "2345698765",
    },
  ],
  debug_key: "1115698977",
});
```

See {{httpheader("Attribution-Reporting-Register-Trigger")}} for all the available fields.

### Pixel-based attribution triggers

You can register an attribution trigger based on a conversion pixel — an invisible 1x1 image used to track user interactions on an advertiser's page and send details to the server via JavaScript. You can just use conversion pixel as it is generated, for example:

```html
<img
  src="https://ourshop.example.com/conversion/4rghshdh5"
  width="1"
  height="1" />
```

As long as you send the {{httpheader("Attribution-Reporting-Eligible")}} header along with requests made via the pixel.

You can also include the `attributionsrc` attribute, with a single URL as the value:

```html
<img
  src="https://ourshop.example.com/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Or add it via JavaScript:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

In this case, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL specified in `attributionsrc`; this is required if the resource pointed to in `src` is not on a server you control, and you want to register the attribution trigger on a separate server that you _do_ control. `attributionsrc` instructs the browser to make that extra request and specifies its destination.

### Script-based attribution triggers

You can register an attribution trigger based on a JavaScript fetch request. First of all, you include the script in your page, with or without an `attributionsrc` attribute:

```html
<!-- Without attributionsrc -->
<script src="advertising-script.js" />

<!-- With attributionsrc -->
<script
  src="advertising-script.js"
  attributionsrc="https://my-separate-tracking-site.example.com" />
```

Or add `attributionsrc` via JavaScript:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

Again, `attributionsrc` is only required if the resource pointed to in JavaScript fetch request is not on a server you control, and you want to register the attribution trigger on a separate server that you _do_ control.

Inside your `advertising-script.js` file, you need to make the JavaScript fetch request. To instruct the browser to send the {{httpheader("Attribution-Reporting-Eligible")}} header, you need to include an `attributionReporting` option.

In {{domxref("fetch()")}}, this looks like so:

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

// Optionally set keepalive to ensure the request outlives the page.
fetch("https://a.example/register-trigger", {
  keepalive: true,
  attributionReporting,
});
```

In {{domxref("XMLHttpRequest")}} request, it is done by invoking {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} on the request object:

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

const req = new XMLHttpRequest();
req.open("GET", "https://a.example/register-trigger");
req.setAttributionReporting(attributionReporting);
req.send();
```

EDITORIAL: AGAIN, HOW SHOULD WE RECOMMEND THAT PEOPLE ACTUALLY USE THESE?

## Collecting data and generating reports

EDITORIAL: I HAVE LEFT THIS SECTION BLANK BECAUSE I'M NOT SURE:

1. HOW YOU SPECIFY WHETHER YOU WANT AN EVENT-LEVEL OR SUMMARY REPORT GENERATED
2. HOW THE BROWSER GENERATES A REPORT AFTER IT MATCHES A CONVERSION TO A SOURCE
3. WHAT DATA THAT REPORT CONTAINS
4. HOW YOU SPECIFY THE LOCATION OF THE REPORTING ENDPOINT
5. WHAT THE AD SERVER IS SUPPOSED TO DO WITH THE REPORT ONCE IT REACHES THE ENDPOINT

IN THIS SECTION WE'LL ALSO NEED TO TALK ABOUT:

- REPORT WINDOWS, WHEN THEY ARE SENT, ETC.: https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/custom-report-windows/
- HOW NOISE IS ATTRIBUTED TO SUMMARY REPORTS (SEE https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/understanding-noise/)
- CONTRIBUTION BUDGETS (SEE https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/contribution-budget/)

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
  - : xxx EDITORIAL: NOT SURE WHAT THIS DOES
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
