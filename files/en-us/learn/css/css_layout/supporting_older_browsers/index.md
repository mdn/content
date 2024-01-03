---
title: Supporting older browsers
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
page-type: learn-module-chapter
browser-compat: css.properties.grid-template-columns
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

There will be visitors to your site who use older browsers, or browsers which may not support the features you have used. This will always be the case on the web — new features are continuously being added to CSS and therefore to browsers. Different browsers will prioritize different things. This article explains how to use modern web techniques without locking out users of older technology.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a> and
        <a href="/en-US/docs/Learn/CSS/Building_blocks">Styling boxes</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand how to provide support for your layouts on older browsers
        that might not support the features you want to use.
      </td>
    </tr>
  </tbody>
</table>

## What is the browser landscape for your site?

Every website is different in terms of its target audience. Before deciding on the approach to take, find out the number of visitors coming to your site using older browsers. This is straightforward if you have an existing website you are adding to or replacing, as you probably have analytics available that can tell you the technology people are using. If you have no analytics or this is a brand new site, then there are sites such as [Statcounter](https://gs.statcounter.com/) that can provide statistics filtered by location.

You should also consider the type of devices and the way people use your site. For example, you may expect a higher-than-average number of mobile devices. Accessibility and people using assistive technology should always be considered, but for some sites that may be even more critical. In my experience, developers are often very worried about the experience of 1% of users using the particular browser and operating system combination as their company's CEO, while not considering the far greater number who have accessibility needs.

## What is the support for the features you want to use?

Once you know the browsers that come to your site, you can assess any technology that you want to use against how well it is supported and how easily you can provide an alternative for visitors who do not have that technology available.

We try to help you at MDN, by providing browser compatibility information on every CSS property page. For example, take a look at the page for {{cssxref("grid-template-columns")}}, with special attention to the `subgrid` value. The following table is included at the bottom of that page. It lists the major browsers along with the version they began supporting this property.

{{Compat}}

These browser compatibility tables provide information on which browsers are compatible with the technology that you are looking for and the version from which the browser started supporting that functionality. Browser and mobile phone browser compatibility information are displayed separately. The browser names take up the column headers.

Another popular way to find out about how well a feature is supported is the [Can I Use](https://caniuse.com/) website. This site lists the majority of Web Platform features with information about their browser support status. You can view usage statistics by location — useful if you work on a site that has users mostly for a specific area of the world. You can even link your Google Analytics account to get analysis based on your user data.

Understanding the technology your users have, and the support for things you might want to use puts you in a good place to make all of your decisions and to know how best to support all of your users.

## Support doesn't mean "looks the same"

A website can't possibly look the same in all browsers. Some of your users will be viewing the site on a phone and others on a large desktop screen. Similarly, some of your users will have an old browser version, and others the latest browser. Some of your users might be hearing your content read out to them by a screen reader, or are zoomed in on the page to be able to read it. Supporting everyone means serving a version of your content that is designed defensively, so that it will look great on modern browsers, but will still be usable at a basic level for all users no matter how they are accessing your content.

A basic level of support comes from structuring your content well so that the normal flow of your page makes sense. A user with a very limited data plan might not load images, fonts, or even your CSS, but the content should still be presented in a way that makes reading easy. A well-structured HTML document should always be your starting point. _If you remove your stylesheet, does your content make sense?_

It doesn't make commercial sense to pour time into trying to give everyon identical experiences as user environments vary and is not something you can controll. It is helpful to render a plain, CSS-less view of your site to ensure a fallback experience of your site is accessible. This fallback may never be viewed by people using very old or limited browsers; but may be viewed by your main target audience — users of modern browsers — when their browser or Internet connection temporarily fails. It is better to focus on what you can control: it is better to spend the time to make the site [accessible](/en-US/docs/Web/Accessibility), thus serving more users. There is a middle ground between a plain HTML page and all the bells and whistles, and CSS makes creating fallbacks pretty straightforward.

## Creating fallbacks in CSS

Browsers ignore CSS that they don't understand. When a browser doesn't recognize a new feature, it [discards the declaration as invalid](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors) without throwing an error. This allows both old and new values to coexist in the same ruleset. Just make sure to declare the old value before the new value so that, when supported, the new value overwrites the fallback value.

CSS specifications contain information that explains what the browser does when two similar features, such as layout methods, are applied to the same item. For example, there is a definition for what happens if a floated item is also a grid item using CSS grid container. There is also a definition for what happens when an element has both a `margin-top` and a `margin-block-start` set.

These techniques were demonstrated in the [legacy techniques layout tutorial](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods). Back when grid wasn't fully supported, the browser ignored the grid styles. This tutorial is now a good demonstration of how newer features, in this case grid layout, are designed and defined to take precedence over older features, floats in this case, when their effects would otherwise conflict.

### Fallback methods

As noted above, a browser will discard any CSS it doesn't understand. Check out the [CSS error handling guide](/en-US/docs/Web/CSS/CSS_syntax/Error_handling). This enables using new CSS properties and new property values before they are universally supported. New CSS features that aren't understood are discarded as invalid. This enabled the use of [vendor-prefixing](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes)

Just make sure to declare the old value before the new value so that, when supported, the new value overwrites the fallback value.
To deal with this issue we need to have a way to detect if Grid is supported and therefore if it will override the width. CSS has a solution for us here.

## Feature queries

Feature queries allow you to test whether a browser supports any particular CSS feature. This means that you can write some CSS for browsers that don't support a certain feature, then check to see if the browser has support and if so throw in your fancy layout.

If we add a feature query to the above example, we can use it to set the widths of our items back to `auto` if we know that we have grid support.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79 185 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
    width: auto;
  }
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{ EmbedLiveSample('Feature_queries', '100%', '200') }}

Support for feature queries is very good across modern browsers. However, you should note that browsers that do not support CSS Grid also tend not to support feature queries. This means that an approach as detailed above will work for those browsers. What we are doing is writing our old CSS first, outside of any feature query. Browsers that do not support Grid, and do not support the feature query will use that layout information they can understand and completely ignore everything else. The browsers that support the feature query also support CSS Grid and so will run the grid code and the code inside the feature query.

The specification for feature queries also contains the ability to test if a browser does not support a feature — this is only helpful if the browser does support feature queries. In the future, an approach of checking for lack of support will work, as the browsers that don't have feature query support go away. For now, however, use the approach of doing the older CSS, then overwriting it, for the best support.

## Testing older browsers

With the majority of browsers supporting Flexbox and Grid, it can be reasonably hard to test older browsers. One way is to use an online testing tool such as Sauce Labs, as detailed in the [Cross browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) module.

## Summary

You now have the knowledge to confidently use techniques such as Grid, create fallbacks for older browsers, and make use of any new techniques that might come along in the future.

Now that you have worked through our articles on CSS layout, it's time to test your comprehension with our assessment for the module: [Fundamental layout comprehension](/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension).

## See also

- [Using Feature Queries in CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
- [Backwards Compatibility of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox)
- [CSS Grid Layout and Progressive Enhancement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Using CSS Grid: Supporting Browsers Without Grid](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/)
- [Cascading Web Design with Feature Queries](https://24ways.org/2017/cascading-web-design/)
- [Using Feature Queries (Video)](https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
