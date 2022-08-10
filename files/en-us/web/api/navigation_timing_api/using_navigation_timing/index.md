---
title: Using Navigation Timing
slug: Web/API/Navigation_timing_API/Using_Navigation_Timing
page-type: guide
tags:
  - Guide
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Performance
---
{{DefaultAPISidebar("Navigation Timing")}}

The Navigation Timing API lets you easily obtain detailed and highly accurate timing information to help isolate performance problems with your site's code or resources.

Unlike other tools or libraries, the [Navigation Timing API](/en-US/docs/Web/API/Navigation_timing_API) lets you gather information that only the browser can provide at a level of accuracy much improved over other techniques. It also offers the advantage of being able to provide timing information as perceived by the user rather than data that has no correlation to what the user experiences.

## Collecting timing information

Using the API is as simple as obtaining the {{domxref("Performance")}} object using {{domxref("window.performance")}} and looking up what you need within the object returned. For example, to measure the perceived loading time for a page:

```js
window.addEventListener("load", () => {
  const now = new Date().getTime();
  const loadingTime = now - performance.timing.navigationStart;

  document.querySelector(".output").innerText = `${loadingTime} ms`;
}, false);
```

This code, executed when the {{domxref("Window/load_event", "load")}} event occurs, subtracts from the current time the time at which the navigation whose timing was recorded began ({{domxref("PerformanceTiming.navigationStart", "performance.timing.navigationStart")}}), and outputs that information to the screen by inserting it into an element.

```html hidden
<div class="output">
</div>
```

```css hidden
.output {
  border: 1px solid #bbb;
  font: 16px "Open Sans", "Helvetica", "Arial", sans-serif;
}
```

In tandem with appropriate HTML and CSS, the result is:

{{EmbedLiveSample("Collecting_timing_information", 500, 80)}}

The values listed are for the {{HTMLElement("iframe")}} in which the sample is presented above.

For a list of the available timing values you can look for in {{domxref("PerformanceTiming")}}, see the {{domxref("PerformanceTiming")}} interface's [Properties](/en-US/docs/Web/API/PerformanceTiming#properties) section.

## Determining navigation type

To put the timing information obtained from {{domxref("PerformanceTiming")}} into the correct perspective, you need to know more about what sort of load operation occurred. In particular, you need to know:

- Was this a load or a reload?
- Was this a navigation or a move forward or backward through history?
- How many (if any) redirects were required in order to complete the navigation?

This information is provided by the {{domxref("Performance.navigation")}} property, which returns a {{domxref("PerformanceNavigation")}} object that includes the needed information.

Let's add this information to the example above. The new code looks like this:

```js
window.addEventListener("load", () => {
  const now = new Date().getTime();
  const loadingTime = now - performance.timing.navigationStart;

  let output = `Load time: ${loadingTime} ms<br/>`;
  output += "Navigation type: ";

  switch(performance.navigation.type) {
      case PerformanceNavigation.TYPE_NAVIGATE:
        output += "Navigation";
      break;
    case PerformanceNavigation.TYPE_RELOAD:
        output += "Reload";
      break;
    case PerformanceNavigation.TYPE_BACK_FORWARD:
        output += "History";
      break;
    default:
        output += "Unknown";
      break;
  }

  output += `<br/>Redirects: ${performance.navigation.redirectCount}`;
  document.querySelector(".output").innerHTML = output;
}, false);
```

This amends the previous example by looking at the contents of the `performance.navigation` object. {{domxref("PerformanceNavigation.type", "performance.navigation.type")}} indicates what kind of load operation took place: a navigation, a reload, or a shift through the browser's history. We also obtain the number of redirects that were incurred during the navigation from {{domxref("PerformanceNavigation.redirectCount", "performance.navigation.redirectCount")}}. This information is output to the screen just like the page load time was previously: by inserting it into the element with class `"output"`.

```html hidden
<div class="output">
</div>
```

```css hidden
.output {
  border: 1px solid #bbb;
  font: 16px "Open Sans", "Helvetica", "Arial", sans-serif;
}
```

With this code in place, the result looks like this:

{{EmbedLiveSample("Determining_navigation_type", 500, 120)}}

The values listed are for the {{HTMLElement("iframe")}} in which the sample is presented.

## See also

- [Navigation Timing API](/en-US/docs/Web/API/Navigation_timing_API)
- {{domxref("window.performance")}}
- {{domxref("Performance")}}, {{domxref("PerformanceTiming")}}, and {{domxref("PerformanceNavigation")}}
