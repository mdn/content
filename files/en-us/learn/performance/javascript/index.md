---
title: JavaScript performance
slug: Learn/Performance/JavaScript
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

While images and video account for over 70% of the bytes downloaded for the average website, byte per byte, JavaScript has a greater negative impact on performance. This article looks to introduce performance issues caused by scripts and introduces tips and tricks for optimizing JavaScript for web performance.

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
        To learn about the effects of JavaScript on performance optimization,
        and how a JavaScript file size is not the only impact on web
        performance.
      </td>
    </tr>
  </tbody>
</table>

Similar to images and video, the best way to improve performance is to omit what is not, in fact, necessary. But not all bytes downloaded have the same impact. JavaScript bytes have to be downloaded, parsed, and executed. JavaScript impacts download performance. We'll cover tips and tricks to minimize that impact on download. But JavaScript can also consume the main thread, the CPU, and the battery. It can make the UI feel unresponsive or janky. We'll introduce concepts for handling that as well.

## Download impact

Web applications include a lot of JavaScript. Many applications are built with a JavaScript framework, or multiple, with several additional dependencies. Often times third party scripts and APIs are added, including A/B testing, tracking pixels, and features like maps and support features. All of this JavaScript must be downloaded. Eventually.

Performance optimizations should include:

- **Reducing the amount of JavaScript that is needed.** Some features requiring complex JavaScript can be done with a few lines of JavaScript. Requiring a library for other features may improve developer experience, but is all that JavaScript required? Is there a lighter weight or home spun solutions? Some features may not be necessary, and though they may add some bling, is the cost of the feature in terms of performance worth it?
- **Remove unused code.**
- **Split the JavaScript into smaller files.** Code-split JavaScript into critical and non-critical parts. Module bundlers like webpack support code-splitting.
- **Optimize these smaller files.** [Minification](/en-US/docs/Glossary/Minification) reduces the number of characters in your file, thereby reducing the number of bytes or weight of your JavaScript. [Gzipping](/en-US/docs/Glossary/GZip_compression) compresses the file further, and should be used even if you don't minify. [Brotli](/en-US/docs/Glossary/Brotli_compression) is similar to Gzip, generally outperforming Gzip's compression.

## Render impact

Web applications include a lot of JavaScript. Many applications are built with a JavaScript framework, or multiple, with several additional dependencies. Often times third party scripts and APIs are added, including A/B testing, tracking pixels, and features like maps and support features.

## Battery impact

## Conclusion

While optimizing your media files and scripts will get you very far along in terms of web performance optimization, everything that touches a web pages impacts performance. In the next article we take a look at some HTML features that can impact performance, including some attributes specifically created to improve performance.

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
