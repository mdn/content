---
title: Installing basic software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In this article, we discuss what software you need to do simple web development and what you need to install now, including a code editor and some modern web browsers.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand what software you need to get started.</li>
          <li>Install a code editor, some modern browsers, and a local testing server.</li>
          <li>Explore options for other common types of apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code editors

A decent code editor is one of the most important things for any developer to have available on their machine. As well as being the place where you write your code, code editors have a whole host of other functionality available. We have dedicated an entire article to code editors later on in the series.

For now, we would recommend that you install [Visual Studio Code](https://code.visualstudio.com/), as it is available across different platforms, has a great feature set and support, and is the editor we mostly use. You should install this now to follow along with the rest of this article.

## Modern web browsers

Having modern web browsers available to you is essential for web development so that you can test your websites or apps on the browsers your visitors use to access them. You also need to keep your web browsers up-to-date so that they support the latest web technologies and have the latest security fixes applied.

> [!NOTE]
> Most browsers tend to install updates automatically, applying the changes when they are restarted. You can usually check for updates on the browser "About" page, for example available in the menu at _Firefox_ > _About Firefox_ or _Chrome_ > _About Google Chrome_ on Firefox/Chrome for macOS, or the menu icon > _Help_ > _About Firefox_ or menu icon > _Help_ > _About Google Chrome_ on Firefox/Chrome for Windows.

For now, you should install a couple of desktop and mobile/alternative device browsers to test your code in. You'll most commonly come across web browsers on desktop, laptop, and mobile devices, but you will also come across web browsers on other devices such as tablets, watches, and TVs. If possible, make sure you have one browser from each line installed and available to test on (so you don't just test in multiple browsers based on the same rendering engine):

- Desktop browsers:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative device browsers:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Most of the Android browsers listed above have iOS versions, but these were historically all powered by Apple's WebKit engine under the hood due to Apple's App Store rules. At the of writing, browsers are starting to create versions of their iOS browsers based on their own rendering engines, due to regulatory changes. See [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Local web servers

Normally, when you type in a web address in a browser to load a website, the files that are combined to render that site by your browser are fetched from a remote web server hosted on a server computer somewhere else in the world. You'll learn more about how this works in the next article in the series.

When creating a website locally (on your own machine), you can often load up the main HTML index file directly in a browser to test it. However, some examples will need to be run through a locally-installed web server to work successfully.

One of the easiest options we've found to make a local server available is to use a code editor extension — this way, it is available right inside your code editor. Do the following inside Visual Studio Code:

1. Open the _Extensions_ pane using the _View_ > _Extensions_ menu option.
2. In the "Search..." box at the top of this pane, type in "live preview". The top search result should be the [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension, created by Microsoft.
3. Click on that option to open up a page of information about it, which includes how to use it.
4. Press the _Install_ button to install the extension.
5. Now, when you are working on an HTML file in the editor, you should be able to click the "Show Preview" button to open the live example up in a separate tab.

The above option is simple, but not that flexible. In future, you may want to made a more flexible local server option available that can be used to load examples in any browser you have available. For other options (and more background information around why local servers are necessary), see [How do you set up a local testing server?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Graphics editors

Web developers are often required to manipulate image files for use on the websites they create. This can often mean designing/creating graphic assets, but equally, the graphics are often provided by a graphic designer (this could be a team mate or a third-party), in which case the web developer may be called upon to crop or resize the files they receive.

None of the learning articles on MDN require you to create your own graphics, although a few of them may require you to manipulate the files that we provide.

There are many graphic editing tools available. We would recommend that you don't spend money on an expensive commercial product until further along in your learning journey, _if_ you feel that you really need it. There are many free software tools and online services that will probably be good enough for now.

For example:

- macOS comes with a tool called [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac). This is mainly used for viewing images and PDFs, but it also has some really useful features for editing images, including resizing, rotating, cropping, annotating, and converting between different file types.
- The built-in Windows [Photos app](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) comes with many similar features.
- The [tinypng](https://tinypng.com/) website, provides a free service allowing you to compress PNGs, JPEGs, and more. This is a very common task you'll have to do when preparing assets for use on a website.

If you have more substantial graphics editing/creation needs, you'll want a fully-fledged graphics package. In terms of commercial offerings, [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) has long been the industry standard, and there are also popular relative newcomers such as [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/), and [Canva](https://www.canva.com).

If your budget is limited, most of the above apps have trials or free modes there are worth exploring. There are also some well-regarded free apps available such as [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), and [Paint.NET](https://www.getpaint.net/).

## Version control tools

**Version control** tools are used by developers to manage files on servers, collaborate on a project with a team, share code and assets, and avoid editing conflicts. Right now, [Git](https://git-scm.com/) is the most popular version control system along with hosting services such as [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/).

While version control tools are essential for web development teams, you don't need to worry about them right now. We've got a module dedicated to [Version control](/en-US/docs/Learn_web_development/Core/Version_control) near the end of our Core modules series.

## Site deployment apps

After you've finished developing a website or app (on your local computer, or perhaps on a development server), you'll want to put it onto a remote web server so that your users can type in the web address associated with it, and view it on the web!

There are various ways you can do this, from buying hosting and using an [SFTP app](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), using a service like [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/), or even setting up a quick demo to share with others using something like [Glitch](https://glitch.com/) or [CodePen](https://codepen.io/).

Such a list of options might seem overwhelming, but don't worry — you don't need to know anything about publishing websites right now. We'll look at this topic many times later in the course. You'll get practical experience of it soon enough, in our [Your first website](/en-US/docs/Learn_web_development/Getting_started/Your_first_website) module.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
