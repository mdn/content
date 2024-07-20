---
title: Registering attribution triggers
slug: Web/API/Attribution_Reporting_API/Registering_triggers
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how to register attribution triggers.

## Basic methodology

Once you have [registered attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources), you need to register attribution triggers. These are interactions on a site where a conversion is to be measured (for example, clicking a "purchase" button on an advertiser's site can indicate that a conversion may have occurred). The browser will then attempt to match the attribution trigger to an attribution source entry stored in a private local storage partition, and [generate a report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) if a match is found.

The different attribution trigger types are registered in different ways, which are detailed in the sections below — see [HTML-based attribution triggers](#html-based_attribution_triggers) and [JavaScript-based attribution triggers](#javascript-based_attribution_triggers).

However, what happens behind the scenes to register triggers, look for matches, etc., is the same in all cases.

1. All of the trigger types send an {{httpheader("Attribution-Reporting-Eligible")}} header on a request, which indicates that the response is eligible to register a trigger. For example:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. When the server receives a request that includes an `Attribution-Reporting-Eligible` header, it can include an {{httpheader("Attribution-Reporting-Register-Trigger")}} along with the response. Its value is a JSON string containing data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values.

   The following example is intended to match with a [event-level report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) attribution source:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "event_trigger_data": [
         {
           "trigger_data": "4",
           "priority": "1000000000000",
           "deduplication_key": "2345698765",
         },
       ],
       "debug_key": "1115698977",
     });
   );
   ```

   The fields specified here are as follows:

   - `"event_trigger_data"`: An object representing data about the trigger. This includes:
     - `"trigger_data"`: The data associated with the trigger, which is typically used to indicate events such as "user added item to shopping cart" or "user signed up to mailing list". This value will be included in the generated report, if any, although it will be subject to modification based on the attributed source's [`"trigger_data_matching"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) field.
       > **Note:** The values used to represent each event, and the number of elements in the array, are completely arbitrary and defined by you as the developer. The array may contain values that are not used, but values must be present in the array to be attributed to the source by the browser when a trigger is registered.
     - `"priority"`: A string representing a priority value for the attribution trigger. See [Report priorities and limits](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) for more information.
     - `"deduplication_key"`: A string representing a unique key that can be used to prevent attributions from being duplicated — for example if a user were to add the same item to a shopping cart multiple times. See [Prevent duplication in reports](https://developer.chrome.com/docs/privacy-sandbox/attribution-reporting/prevent-duplication/) for more information.
   - `"debug_key"`: A number representing a debug key. Set this if you want to generate a [debug report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) alongside the associated attribution report.

   See {{httpheader("Attribution-Reporting-Register-Trigger")}} for a detailed description of all the available fields.

   A trigger intended to match with a [summary report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) attribution source requires the fields shown below:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "aggregatable_trigger_data": [
         {
           "key_piece": "0x400",
           "source_keys": ["campaignCounts"]
         },
         {
           "key_piece": "0xA80",
           "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
         }
       ],
       "aggregatable_values": {
         "campaignCounts": 32768,
         "geoValue": 1664
       },
       "debug_key": "1115698977"
     });
   );
   ```

   The fields in this example are:

   - `"aggregatable_trigger_data"`: An array of objects, each one defining an aggregation key to apply to different source keys.
   - `"aggregatable_values"`: An object containing properties representing a value for each data point defined in `"aggregatable_trigger_data"`.

   Again, see {{httpheader("Attribution-Reporting-Register-Trigger")}} for a detailed description of all the available fields.

3. When the user interacts with the attribution trigger, the browser attempts to match the trigger against any attribution source entries stored in the browser's private local cache. For a successful match, the `Attribution-Reporting-Register-Trigger`'s [`"trigger_data"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) must match one of the values provided in the {{httpheader("Attribution-Reporting-Register-Source")}}'s [`"trigger_data"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data), and the site (scheme + [eTLD+1](/en-US/docs/Glossary/eTLD)) of the top-level page on which the trigger is being registered must:

   - match the site of at least one of the `destination`s specified in the source's associated data.
   - be same-origin with the request that specified the source registration.

   > **Note:** These requirements provide privacy protection, but also flexibility — the source _and_ trigger can potentially be embedded in an {{htmlelement("iframe")}} or situated in the top-level site.

   There are many other factors that will prevent a successful match outcome; for example:

   - The trigger's filters do not match the source's filter data (See [Filters](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) for more details).
   - The source's [`"trigger_data_matching"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) setting results in no match occurring.
   - The source's [`"max_event_level_reports"`](/en-US/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) limit has been reached.
   - A successful match is not reported due to the browser's randomized response algorithm. See [Adding noise to reports](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) for more details.

4. If a successful match is found, the browser [generates a report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) based on the source and trigger data, and sends it to a reporting endpoint.

> **Note:** Attribution triggers cannot be registered on {{htmlelement("a")}} elements or {{domxref("Window.open()")}} calls like attribution sources can.

## HTML-based attribution triggers

HTML-based attribution triggers can be used for detecting conversions on a page when it first loads — or more precisely when an `<img>` or `<script>` loads. For example, if a user has clicked an attribution source link on a publisher's page and navigated to the advertiser's page, you can to register the attribution trigger and get the browser to attempt a match with stored source entries as soon as the advertiser's page loads.

You can register an attribution trigger by adding the `attributionsrc` attribute to an appropriate element. This can be done on {{htmlelement("img")}} and {{htmlelement("script")}} elements.

If you leave the attribute value blank, the registration request will be sent to the server the requested resource is hosted on. It is also possible to specify an additional URL inside the value to send the registration request to; see [Specifying a URL inside attributionsrc](#specifying_a_url_inside_attributionsrc) for more details.

Here's an `<img>` element example:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

You could also achieve this via the {{domxref("HTMLImageElement.attributionSrc")}} property:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In this case, the browser will attempt to match the trigger with a stored attribution source when the browser receives the response containing the image file (when the `load` event fires). Bear in mind that users might not necessarily be able to perceive the image at all — it might be a 1x1 transparent tracking pixel that is only being used for attribution reporting.

A {{htmlelement("script")}} example might look like so:

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

In this case, the browser will attempt to match the trigger with a stored attribution source when the browser receives the response containing the script.

## JavaScript-based attribution triggers

JavaScript-based attribution triggers are more versatile than HTML-based attribution triggers. You can trigger the browser to attempt a match with a stored source based on a custom interaction, for example, clicking a custom element or submitting a form.

To register a script-based attribution trigger, you can either:

- Send a {{domxref("fetch()")}} request containing the `attributionReporting` option:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  // Optionally set keepalive to ensure the request outlives the page
  function triggerMatching() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // Associate the interaction trigger with whatever
  // element and event makes sense for your code
  elem.addEventListener("click", triggerMatching);
  ```

- Send an {{domxref("XMLHttpRequest")}} with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object:

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  function triggerMatching() {
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
  // element and event makes sense for your code
  elem.addEventListener("click", triggerMatching);
  ```

In this case, the browser will attempt to match the trigger with a stored attribution source when the browser receives the response from the fetch request.

> **Note:** The request can be for any resource. It doesn't need to have anything directly to do with the Attribution Reporting API, and can be a request for JSON, plain text, an image blob, or whatever else makes sense for your app.

## Specifying a URL inside attributionsrc

In the above examples, the `attributionsrc` attribute is left blank, taking the value of an empty string. This is fine if the server that holds the requested resource is the same server that you also want to handle the registration, i.e. receive the {{httpheader("Attribution-Reporting-Eligible")}} header and respond with the {{httpheader("Attribution-Reporting-Register-Trigger")}} header.

However, it might be the case that the requested resource is not on a server you control, or you just want to handle registering the attribution trigger on a different server. In such cases, you can specify one or more URLs as the value of `attributionsrc`. When the resource request occurs, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URLs specified in `attributionsrc` in addition to the resource origin; the URLs can then respond with the {{httpheader("Attribution-Reporting-Register-Trigger")}} to complete registration.

For example, in the case of an `<img>` element you could declare the URL in the `attributionsrc` attribute:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Or in JavaScript via the `attributionSrc` property:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## See also

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
