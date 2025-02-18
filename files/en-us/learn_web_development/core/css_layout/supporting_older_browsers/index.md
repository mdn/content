---
title: Supporting older browsers
slug: Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers
page-type: learn-module-chapter
browser-compat: css.properties.grid-template-columns
---

{{LearnSidebar}}

Visitors to your website may include users who either use older browsers or use browsers that do not support the CSS features you've implemented. This is a common scenario on the web, where new features are continuously being added to CSS. Browsers differ in their support for these features because different browsers tend to prioritize implementing different features. This article explains how you as a web developer can use modern web techniques to ensure that your website remains accessible to users with older technology.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS Styling basics</a>.)
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

Every website is different in terms of its target audience. Before deciding on an approach, find out the number of visitors coming to your site using older browsers. This is straightforward if you're adding to or replacing an existing website, as you probably have analytics available that can tell you the technology your visitors are using. If you don't have analytics or you're launching a brand new site, then sites such as [Statcounter](https://gs.statcounter.com/) can provide relevant statistics, which can be filtered by location.

You should also consider the type of devices and the way people use your site. For example, you can expect a higher-than-average usage of your website on mobile devices. Always prioritize accessibility and people using assistive technology; for some sites, this may be even more critical. Developers are often very worried about the experience of 1% of users, while overlooking the far greater number who have accessibility needs.

## What is the support for the features you want to use?

{{Compat}}

The above table is included at the bottom of every feature page under the section "Browser compatibility". After identifying the browsers your site visitors use, you can assess any technology that you want to use against how well it is supported across browsers and how easily you can provide an alternative for visitors who do not have that technology available.

On MDN, we provide browser compatibility information on every CSS property page. This compatibility information, presented in a table, includes a list of major browsers along with the versions that started supporting the property. The browser names take up the column headers. For example, take a look at the above table or the page for {{cssxref("grid-template-columns")}}, with special attention to the `subgrid` (most recently supported) and `masonry` (experimental and not supported) values.

These browser compatibility tables provide information on which browsers are compatible with the technology that you are looking for and the version from which the browser started supporting that functionality. Browser and mobile phone browser compatibility information are displayed separately.

Another popular way to find out about how well a feature is supported is the [Can I Use](https://caniuse.com/) website. This site lists the majority of Web Platform features with information about their browser support status. You can view usage statistics by location — useful if you work on a site that has users mostly for a specific area of the world. You can even link your Google Analytics account to get analysis based on your user data.

Understanding the technology your users have because of the browser they're using and the cross-browser support for features that you might want to use on your website, puts you in a good place to make all of your decisions and to know how best to support all of your users.

## Feature support does not mean identical appearance

A website can't possibly look the same in all browsers. Some of your users will be viewing the site on a phone and others on a large desktop screen. Similarly, some of your users will have an old browser version, and others the latest browser. Some of your users might be hearing your content read out to them by a screen reader, while others might need to zoom in on the page to be able to read it. Supporting everyone means serving a version of your content that is designed defensively, so that it will look great on modern browsers, but will still be usable at a basic level for all users no matter how they are accessing your content.

A basic level of support comes from structuring your content well so that the normal flow of your page makes sense. For users on a limited data plan, their browsers might not load images, fonts, or even your CSS. However, the content should be presented in a way such that it is accessible and readable even when these elements are not fully loaded. A well-structured HTML document should always be your starting point. Ask yourself: _if you remove your stylesheet, does your content still make sense?_

It doesn't make commercial sense to spend time trying to give everyone an identical experience of your website. This is because user environments can vary widely and are beyond your control. There is a balance you need to strike between a plain HTML page and a fully featured website. It is helpful to test a plain, CSS-less view of your site to ensure that the fallback experience of your site is accessible. This fallback may never be viewed by people using very old or limited browsers, but may be viewed by your main target audience — users of modern browsers — when their browser or Internet connection fails temporarily. CSS simplifies creating these fallbacks. Therefore, it is better to focus on what you can control, that is, spend the time to make your site [accessible](/en-US/docs/Web/Accessibility), thereby serving more users.

## Creating fallbacks in CSS

CSS specifications contain information that explain what the browser does when two similar features, such as layout methods, are applied to the same item. For example, they define what happens if an item is floated and is also a grid item and part of a CSS grid container. There is also a definition for what happens when an element has both {{cssxref("margin-top")}} and {{cssxref("margin-block-start")}} properties set.

When a browser doesn't recognize a new feature, it discards the declaration as invalid [without throwing an error](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors). Because browsers discard CSS properties and values they don't support, both old and new values can coexist in the same ruleset. Just make sure to declare the old value before the new value so that, when supported, the new value overwrites the old value (the fallback).

For example, most browsers support the two-value syntax of the {{cssxref("display")}} property. If a browser doesn't, it will use the older, single-value syntax.

```css
.container {
  display: inline-flex;
  display: inline flex;
}
```

Similarly, this [error-handling](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#vendor_prefixes) ensures old CSS code bases continue to work even if legacy {{glossary("Vendor_Prefix", "vendor-prefixed")}} features are no longer supported. While vendor prefixing is no longer commonly used, if you must include a vendor-prefixed property or value, make sure to declare the prefixed value before the standard value so that, when supported, the new value overwrites the fallback value.

### Using new selectors

Including new selectors that aren't supported in all browsers needs to be handled more carefully. If a selector in a comma-separated list of [selectors is invalid](/en-US/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#selector_support), the entire style block is ignored.

If using vendor-prefixed [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) or new [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) a browser may not yet support, include the prefixed values within a [forgiving selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list) by using {{cssxref(":is", ":is()")}} or {{cssxref(":where", ":where()")}} so the entire selector block doesn't get [invalidated and ignored](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list).

```css
:is(:-prefix-mistake, :unsupported-pseudo),
.valid {
  font-family: sans-serif;
}
:-prefix-mistake,
:unsupported-pseudo,
.valid {
  color: red;
}
```

In the above example, the `.valid` content will be `sans-serif` but not `red`.

## Feature queries

Feature queries allow you to test whether a browser supports a particular CSS feature. This means that you can write some CSS for browsers that don't support a certain feature, then check to see if the browser has support and if so, throw in your fancy new features.

We can add a feature query to test for `subgrid` support, and provide styles based on that support:

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: palegoldenrod;
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  border-radius: 5px;
  background-color: rgb(207 232 220);
}

@supports (grid-template-rows: subgrid) {
  .wrapper {
    grid-template-rows: subgrid;
    gap: 10px;
    background-color: lightblue;
    text-align: center;
  }
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
  <div class="item">Item Four</div>
  <div class="item">Item Five</div>
  <div class="item">Item Six</div>
</div>
```

{{ EmbedLiveSample('Feature_queries', '100%', '200') }}

Feature queries are supported in all modern browsers. Write your CSS for fully supported features first, outside of any feature queries. Once your site is usable and accessible to all users, add new features within feature query blocks. Browsers that support the feature queried can then render the newer CSS inside the feature query block. Use the approach of writing well-supported CSS first, then enhancing features based on support.

## Testing older browsers

One way is to use an online testing tool such as Sauce Labs, as detailed in the [Testing](/en-US/docs/Learn_web_development/Extensions/Testing) module.

## Summary

You now have the knowledge to provide fallback CSS for older browsers and confidently test for new features. You should now feel confident making use of any new techniques that might come along.

Now that you have worked through our articles on CSS layout, it's time to test your comprehension with our assessment for the module: [Fundamental layout comprehension](/en-US/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension).

## See also

- [`@supports`](/en-US/docs/Web/CSS/@supports) at-rule
- [CSS at-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
- [Using feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module
