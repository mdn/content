---
title: Registering attribution sources
slug: Web/API/Attribution_Reporting_API/Registering_sources
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how to register attribution sources.

## Basic methodology

Attribution sources take the form of links, images, or scripts contained within content that you want to measure interactions with (for example, they might be ads that you want to measure conversions on). These cause the browser to store source data in a private local cache (accessible only by the browser) when specific actions occur. The different attribution source types are registered and signal actions in different ways — they are differentiated as:

- Navigation sources, which signal in response to navigation — for example when the user clicks on a link or activates it with the keyboard, or when a navigation occurs as a result of a {{domxref("Window.open()")}} call. See [Navigation-based attribution sources](#navigation-based_attribution_sources) for examples.
- Event sources, which signal in response to events firing. See [Event-based attribution sources](#event-based_attribution_sources) for examples.

However, what happens behind the scenes to register sources and retrieve and store the source data is the same in all cases.

1. All of the sources send an {{httpheader("Attribution-Reporting-Eligible")}} header on a request, which indicates that the response is eligible to register a source. For example:

   ```http
   Attribution-Reporting-Eligible: navigation-source
   ```

2. When the server receives a request that includes an `Attribution-Reporting-Eligible` header, it can include an {{httpheader("Attribution-Reporting-Register-Source")}} header along with the response. This takes a JSON string as its value that provides the information the browser should store when the attribution source is interacted with. The information you include in this header also determines which types of report the browser will generate:

   - The following example will cause an [event-level report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) to be generated when a [trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers) is matched to a source:

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",
       }),
     );
     ```

     The only required field in this context is `destination`, which specifies 1–3 sites on which a trigger is expected to occur. These are used to match the attribution trigger to the source when a trigger is interacted with. The other fields specified above do the following:

     - `"source_event_id"`: A string representing an ID for the attribution source, which can be used to map it to other information when the attribution source is interacted with, or aggregate information at the reporting endpoint (see [Generating reports > Basic process](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#basic_process) for endpoint information).
     - `"expiry"`: A string representing an expiry time in seconds for the attribution source, after which it will no longer be active (i.e. subsequent triggers won't be attributable to this source).
     - `"priority"`: A string representing a priority value for the attribution source. See [Report priorities and limits](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) for more information.
     - `"debug_key"`: A base-10-formatted 64-bit unsigned integer representing a debug key. Set this if you want to generate a [debug report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) alongside the associated attribution report.
     - `"event_report_window"`: A string representing a time in seconds, after which subsequent triggers won't be attributable to this source for the purpose of producing event-level reports.

     See {{httpheader("Attribution-Reporting-Register-Source")}} for a detailed description of all the available fields.

   - To make the browser generate a [summary report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) when a trigger is matched to a source, you need to include some extra fields, _in addition_ to those required for generating an event-level report.

     ```js
     res.set(
       "Attribution-Reporting-Register-Source",
       JSON.stringify({
         source_event_id: "412444888111012",
         destination: "https://advertiser.example",
         expiry: "604800",
         priority: "100",
         debug_key: "122939999",
         event_report_window: "86400",

         aggregation_keys: {
           campaignCounts: "0x159",
           geoValue: "0x5",
         },
         aggregatable_report_window: "86400",
       }),
     );
     ```

     The additional fields in this example are:

     - `"aggregation_keys"`: An object containing user-provided keys representing different data points to aggregate report values under.
     - `"aggregatable_report_window"`: A string representing a time in seconds after which trigger data will no longer be included in generated aggregatable reports.

     Again, see {{httpheader("Attribution-Reporting-Register-Source")}} for a detailed description of all the available fields.

3. When the specified action occurs on the registered attribution source, the browser stores the provided source data in its private local cache.

## Navigation-based attribution sources

There are a couple of different types of navigation-based attribution sources that can be registered — those based on HTML (which use the `attributionsrc` attribute) and those based on {{domxref("Window.open()")}} calls (which use an `attributionsrc` window feature).

### HTML-based navigation sources

To register a navigation-based attribution source you can add the `attributionsrc` attribute to an appropriate {{htmlelement("a")}} element, either declaratively:

```html
<a href="https://shop.example" attributionsrc target="_blank">
  Click to visit our shop
</a>
```

Or via the {{domxref("HTMLAnchorElement.attributionSrc")}} property:

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

In this case, the browser stores the source data associated with the navigation-based attribution source (as provided in the {{httpheader("Attribution-Reporting-Register-Source")}} response header) when the browser receives the response.

### Window.open()-based navigation sources

You can also add the `attributionsrc` feature keyword to the features property of a {{domxref("Window.open()")}} call. In this example we run it in response to a `click` event being fired:

```js
elem.addEventListener("click", () => {
  window.open("https://shop.example", "_blank", "attributionsrc");
});
```

> **Note:** When setting up a [`click`](/en-US/docs/Web/API/Element/click_event) event like in the above example, it is advisable to set it on a control where a click is expected, such as a {{htmlelement("button")}} or {{htmlelement("a")}} element. This makes more sense semantically, and is more accessible to both screenreader and keyboard users.

> **Note:** To register an attribution source via `open()`, it must be called with [transient activation](/en-US/docs/Glossary/Transient_activation) (i.e. inside a user interaction event handler such as `click`) within five seconds of user interaction.

## Event-based attribution sources

There are a couple of different types of event-based attribution sources that can be registered — those based on HTML (which use the `attributionsrc` attribute like we saw above with `<a>` element) and those based on JavaScript.

### HTML-based event sources

To register an event-based attribution source via HTML, you can add the `attributionsrc` attribute to an appropriate element — {{htmlelement("img")}} or {{htmlelement("script")}}.

Let's look at an `<img>` element example:

```html
<img src="advertising-image.png" attributionsrc />
```

You could also achieve this via the {{domxref("HTMLImageElement.attributionSrc")}} property:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

The browser stores the source data associated with the source (as provided in the {{httpheader("Attribution-Reporting-Register-Source")}} response header) when the browser receives the response containing the image file. Bear in mind that users might not necessarily be able to perceive the image at all — it might be a 1x1 transparent tracking pixel that is only being used for attribution reporting.

A {{htmlelement("script")}} example might look like so:

```html
<script src="advertising-script.js" attributionsrc />
```

Or via the {{domxref("HTMLScriptElement.attributionSrc")}} property:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In this case, the browser stores the source data associated with the source (as provided in the {{httpheader("Attribution-Reporting-Register-Source")}} response header) when the browser receives the response containing the script.

### JavaScript-based event sources

Script-based attribution sources are more versatile than HTML-based attribution sources. You can set up a script to initiate a request that is eligible to register an attribution source based on whatever request suits your app.

To set up a script-based attribution source, you can:

1. Send a {{domxref("fetch()")}} request containing the `attributionReporting` option:

   ```js
   const attributionReporting = {
     eventSourceEligible: true,
     triggerEligible: false,
   };

   // Optionally set keepalive to ensure the request outlives the page
   function triggerSourceInteraction() {
     fetch("https://shop.example/endpoint", {
       keepalive: true,
       attributionReporting,
     });
   }

   // Associate the interaction trigger with whatever
   // event makes sense for your code (does not have to be a
   // DOM event/user interaction)
   elem.addEventListener("click", triggerSourceInteraction);
   ```

2. Send an {{domxref("XMLHttpRequest")}} with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object:

   ```js
   const attributionReporting = {
     eventSourceEligible: true,
     triggerEligible: false,
   };

   function triggerSourceInteraction() {
     const req = new XMLHttpRequest();
     req.open("GET", "https://shop.example/endpoint");
     // Check availability of setAttributionReporting() before calling
     if (typeof req.setAttributionReporting === "function") {
       req.setAttributionReporting(attributionReporting);
       req.send();
     } else {
       throw new Error("Attribution reporting not available");
       // Include recovery code here as appropriate
     }
   }

   // Associate the interaction trigger with whatever
   // event makes sense for your code (does not have to be a
   // DOM event/user interaction)
   elem.addEventListener("click", triggerSourceInteraction);
   ```

> **Note:** The request can be for any resource. It doesn't need to have anything directly to do with the Attribution Reporting API, and can be a request for JSON, plain text, an image blob, or whatever else makes sense for your app.

## Specifying URLs inside attributionsrc

So far, in all the examples we have seen, the `attributionsrc` attribute/feature or `attributionSrc` property has been left blank, taking the value of an empty string. This is fine if the server that holds the requested resource is the same server that you also want to handle the registration, i.e. receive the {{httpheader("Attribution-Reporting-Eligible")}} header and respond with the {{httpheader("Attribution-Reporting-Register-Source")}} header.

However, it might be the case that the requested resource is not on a server you control, and you want to register the attribution source via a separate server that you _do_ control. In this case, you can specify one or more URLs as the value of `attributionsrc`. When the resource request occurs, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionsrc` in addition to the resource origin; these URLs can then respond with the {{httpheader("Attribution-Reporting-Register-Source")}} to register the source.

For example, in the case of an `<a>` element you could declare the URL(s) in the `attributionsrc` attribute:

```html
<a
  href="https://shop.example"
  attributionsrc="https://a.example/register-source">
  Click to visit our shop
</a>
```

Or in JavaScript via the `attributionSrc` property:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

In the case of a {{domxref("Window.open()")}} call, the different URLs would have to be listed as multiple separate `attributionsrc` features in the [`windowFeatures`](/en-US/docs/Web/API/Window/open#windowfeatures) parameter, separated by commas:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

elem.addEventListener("click", () => {
  window.open(
    "https://ourshop.example",
    "_blank",
    `attributionsrc=${encodedUrlA},attributionsrc=${encodedUrlB}`,
  );
});
```

> **Note:** Specifying multiple URLs at once means that multiple attribution source events can be registered for the same attribution source. You might for example have different campaigns that you are trying to measure the success of, which involve generating different reports on different data.
