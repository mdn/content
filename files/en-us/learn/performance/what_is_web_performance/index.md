---
title: What is web performance?
slug: Learn/Performance/What_is_web_performance
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}

Web performance is all about making websites fast, including making slow processes _seem_ fast. Does the site load quickly, allow the user to start interacting with it quickly, and offer reassuring feedback if something is taking time to load (e.g. a loading spinner)? Are scrolling and animations smooth? This article provides a brief introduction to objective, measurable web performance\*, looking at what technologies, techniques, and tools are involved in web optimization.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To gain basic familiarity of what is involved with web performance.
      </td>
    </tr>
  </tbody>
</table>

_\* versus subjective, [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance), covered in the next article_

## What is web performance?

Web performance is the objective measurement and perceived user experience of a website or application. This includes the following major areas:

- **Reducing overall load time**: How long does it take the files required to render the website to download on to the user's computer? This tends to be affected by [latency](/en-US/docs/Web/Performance/Understanding_latency), how big your files are, how many files there are, and other factors besides. A general strategy is to make your files as small as possible, reduce the number of HTTP requests made as much as possible, and employ clever loading techniques (such as [preload](/en-US/docs/Web/HTML/Attributes/rel/preload)) to make files available sooner.
- **Making the site usable as soon as possible**: This basically means loading your website assets in a sensible order so that the user can start to actually use it really quickly. Any other assets can continue to load in the background while the user gets on with primary tasks, and sometimes we only load assets when they are actually needed (this is called [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)). The measurement of how long it takes the site to get to a usable start after it has started loading is called [time to interactive](/en-US/docs/Glossary/Time_to_interactive).
- **Smoothness and interactivity**: Does the application feel reliable and pleasurable to use? Is the scrolling smooth? Are buttons clickable? Are pop-ups quick to open up, and do they animate smoothly as they do so? There are a lot of best practices to consider in making apps feel smooth, for example using CSS animations rather than JavaScript for animation, and minimizing the number of repaints the UI requires due to changes in the DOM.
- **[Perceived performance](/en-US/docs/Learn/Performance/Perceived_performance)**: How fast a website seems to the user has a greater impact on user experience than how fast the website actually is. How a user perceives your performance is as important, or perhaps more important, than any objective statistic, but it's subjective, and not as readily measurable. Perceived performance is user perspective, not a metric. Even if an operation is going to take a long time (because of latency or whatever), it is possible to keep the user engaged while they wait by showing a loading spinner, or a series of useful hints and tips (or jokes, or whatever else you think might be appropriate). Such an approach is much better than just showing nothing, which will make it feel like it is taking a lot longer and possibly lead to your users thinking it is broken and giving up.
- **[Performance measurements](/en-US/docs/Learn/Performance/Measuring_performance)**: Web performance involves measuring the actual and perceived speeds of an application, optimizing where possible, and then monitoring the performance, to ensure that what you've optimized stays optimized. This involves a number of metrics (measurable indicators that can indicate success or failure) and tools to measure those metrics, which we will discuss throughout this module.

To summarize, many features impact performance including latency, application size, the number of DOM nodes, the number of resource requests made, JavaScript performance, CPU load, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.

> **Note:** Web performance includes both objective measurements like time to load, frames per second, and [time to interactive](/en-US/docs/Glossary/Time_to_interactive), and subjective experiences of how long it felt like it took the content to load.

## How content is rendered

To effectively understand web performance, the issues behind it, and the major topic areas we mentioned above, you really should understand some specifics about how browsers work. This includes:

- **How the browser works**. When you request a URL and hit

  <kbd>Enter</kbd>

  /

  <kbd>Return</kbd>

  , the browser finds out where the server is that holds that website's files, establishes a connection to it, and requests the files. See [Populating the page: how the browser works](/en-US/docs/Web/Performance/How_browsers_work) for a detailed overview.

- **Source order**. Your HTML index file's source order can significantly affect performance. The download of additional assets linked to from the index file is generally sequential, based on source order, but this can be manipulated and should definitely be optimized, realizing that some resources block additional downloads until their content is parsed and executed.
- **The critical path**. This is the process that the browser uses to construct the web document once the files have been downloaded from the server. The browser follows a well-defined set of steps, and optimizing the critical rendering path to prioritize the display of content that relates to the current user action will lead to significant improvements in content rendering time. See [Critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path) for more information.
- The **document object model**. The document object model, or DOM, is a tree structure that represents the content and elements of your HTML as a tree of nodes. This includes all the HTML attributes and the relationships between the nodes. Extensive DOM manipulation after the pages has loaded (e.g., adding, deleting, or moving of nodes) can affect performance, so it is worth understanding how to DOM works, and how such issues can be mitigated. Find out more at [Document Object Model](/en-US/docs/Web/API/Document_Object_Model).
- **Latency**. We mention this briefly earlier on, but in brief, latency is the time it takes for your website assets to travel from the server to a user's computer. There is overhead involved in establishing TCP and HTTP connections, and some unavoidable latency in pushing the request and response bytes back and forth across the network, but there are certain ways to reduce latency (e.g. reducing the number of HTTP request you make by downloading fewer files, using a [CDN](/en-US/docs/Glossary/CDN) to make your site more universally performant across the world, and using HTTP/2 to serve files more efficiently from the server). You can read all about this topic at [Understanding Latency](/en-US/docs/Web/Performance/Understanding_latency).

## Conclusion

That's it for now; we hope our brief overview of the web performance topic helped you to get an idea of what it is all about, and made you excited to learn more. Next up we'll look at perceived performance, and how you can use some clever techniques to make some unavoidable performance hits appear less severe to the user, or disguise them completely.

{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}
