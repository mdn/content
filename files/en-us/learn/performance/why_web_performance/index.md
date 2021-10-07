---
title: The "why" of web performance
slug: Learn/Performance/why_web_performance
tags:
  - Beginner
  - Introduction
  - Learn
  - Performance
  - Reference
  - Tutorial
  - Web Performance
---
{{LearnSidebar}}{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

Web performance is all about making websites fast, including making slow processes _seem_ fast. This article provides an introduction into why web performance is important to site visitors and for your business goals.

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
        To gain basic familiarity of why web performance is important for good
        user experience.
      </td>
    </tr>
  </tbody>
</table>

Web performance refers to how quickly site content **loads** and **renders** in a web browser, and how well it responds to user interaction. Bad performing sites are slow to display and slow to respond to input. Bad performing sites increase site abandonment. At its worst, bad performance causes content to be completely inaccessible. A good goal for web performance is for users to not notice performance. While an individual's perception of site performance is subjective, loading and rendering can be measured. Good performance may not be obvious to most site visitors, but most will immediately recognize a sluggish site. That is why we care.

## Why care about performance?

Web performance — and its associated best practices—are vital for your website visitors to have a good experience. In a sense, web performance can be considered a subset of [web accessibility](/en-US/docs/Learn/Accessibility). With performance as with accessibility, you consider what device a site visitor is using to access the site and the device connection speed.

As an example, consider the loading experience of CNN.com, which at the time of this writing had over 400 HTTP requests with a file size of over 22.6MB.

- Imagine loading this on a desktop computer connected to a fibre optic network. This would seem relatively fast, and the file size would be largely irrelevant.
- Imagine loading that same site using tethered mobile data on a 9 year-old iPad while commuting home on public transportation. The same site will be slow to load, possibly verging on unusable depending on cell coverage. You might give up before it finishes loading.
- Imagine loading that same site on a $35 Huawei device in a rural India with limited coverage or no coverage. The site will be very slow to load—if it loads at all—with blocking scripts possibly timing out, and adverse CPU impact causing browser crashes if it does load.

A 22.6 MB site could take up to 83 seconds to load on a 3G network, with [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) (meaning the site's base HTML structure) at 31.86 seconds.

And it isn't just the time taken to download that is a major problem. A lot of countries still have internet connections that bill per megabyte. Our example 22.6 MB CNN.com experience would cost about 11% of the average Indian's daily wage to download. From a mobile device in Northwest Africa, it might cost two days of an average salary.  And if this site were loaded on a US carrier's international roaming plan? The costs would make anyone cry. (See [how much your site costs to download](https://whatdoesmysitecost.com/).)

### Improve conversion rates

Reducing the download and render time of a site improves conversion rates and user retention.

A **conversion rate** is the rate at which site visitors perform a measured or desired action. For example, this might be making a purchase, reading an article, or subscribing to a newsletter. The action being measured as the conversion rate depends on the website's business goals.

Performance impacts conversion; improving web performance improves conversion. Site visitors expect a site to load in two seconds or less; sometimes even less on mobile (where it generally takes longer). These same site visitors begin abandoning slow sites at 3 seconds.

The speed at which a site loads is one factor. If the site is slow to react to user interaction, or appears janky, this causes site visitors to lose interest and trust.

Here's some real-world examples of performance improvements:

- [Tokopedia reduced render time from 14s to 2s for 3G connections and saw a 19% increase in visitors, 35% increase in total sessions, 7% increase in new users, 17% increase in active users and 16% increase in sessions per user.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Rebuilding Pinterest pages for performance resulted in a 40% decrease in wait time, a 15% increase in SEO traffic and a 15% increase in conversion rate to signup.](https://wpostats.com/2017/03/10/pinterest-seo.html)

To build websites and applications people want to use; to attract and retain site visitors, you need to create an accessible site that provides a good user experience. Building websites requires HTML, CSS, and JavaScript, typically including binary file types such as images and video. The decisions you make and the tools you choose as you build your site can greatly affect the performance of the finished work.

Good performance is an asset. Bad performance is a liability. Site speed directly affects bounce rates, conversion, revenue, user satisfaction, and search engine ranking. Performant sites have been shown to increase visitor retention and user satisfaction. Slow content has been shown to lead to site abandonment, with some visitors leaving to never return. Reducing the amount of data that passes between the client and the server lowers the costs to all parties. Reducing HTML/CSS/JavaScript and media file sizes reduces both the time to load and a site's power consumption (see [performance budgets](/en-US/docs/Web/Performance/Performance_budgets)).

Tracking performance is important. Multiple factors, including network speed and device capabilities affect performance. There is no single performance metric; and differing business objectives may mean different metrics are more relevant to the goals of the site or the organization that it supports. How the performance of your site is perceived is user experience!

## Conclusion

Web performance is important for accessibility and also for other website metrics that serve the goals of an organization or business. Good or bad website performance correlates powerfully to user experience, as well as the overall effectiveness of most sites. This is why you should care about web performance.

{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

## In this module

- [The "why" of web performance](/en-US/docs/Learn/Performance/why_web_performance)
- [What is web performance?](/en-US/docs/Learn/Performance/What_is_web_performance)
- [How do users perceive performance?](/en-US/docs/Learn/Performance/Perceived_performance)
- [Measuring performance](/en-US/docs/Learn/Performance/Measuring_performance)
- [Multimedia: images](/en-US/docs/Learn/Performance/Multimedia)
- [Multimedia: video](/en-US/docs/Learn/Performance/video)
- [JavaScript performance best practices](/en-US/docs/Learn/Performance/JavaScript).
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
- [CSS performance features](/en-US/docs/Learn/Performance/CSS)
- [Fonts and performance](/en-US/docs/Learn/Performance/Fonts)
- [Mobile performance](/en-US/docs/Learn/Performance/Mobile)
- [Focusing on performance](/en-US/docs/Learn/Performance/business_case_for_performance)
