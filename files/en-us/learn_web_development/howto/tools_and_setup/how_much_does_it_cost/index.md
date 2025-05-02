---
title: How much does it cost to do something on the Web?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
page-type: learn-faq
sidebar: learn-how-to
---

Getting involved on the Web isn't as cheap as it looks. In this article we discuss how much you may have to spend, and why.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You should already understand
        <a href="/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need"
          >what software you need</a
        >, the difference between
        <a
          href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >a webpage, a website, etc.</a
        >, and what
        <a href="/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >a domain name is</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Review the complete process for creating a website and find out how much
        each step can cost.
      </td>
    </tr>
  </tbody>
</table>

## Summary

When launching a website, you may spend nothing, or your costs may go through the roof. In this article we discuss how much everything costs, and how you get what you pay (or don't pay).

## Software

### Text editors

You likely have a text editor: such as, Notepad on Windows, Gedit on Linux, TextEdit on Mac. You'll have an easier time writing code if you choose an editor that color-codes, checks your syntax, and assists you with code structure.

Many editors are free, for example [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/), and [Visual Studio Code](https://code.visualstudio.com/). Some, like [Sublime Text](https://www.sublimetext.com/), you can test as long as you like, but you're encouraged to pay. Some, like [PhpStorm](https://www.jetbrains.com/phpstorm/), can cost between a few dozen and 200 dollars, depending on the plan you purchase. Some of them, like [Microsoft Visual Studio](https://visualstudio.microsoft.com/), can cost hundreds, or thousands of dollars; though Visual Studio Community is free for individual developers or open source projects. Often, for-pay editors will have a trial version.

To start, we suggest trying out several editors, to get a sense of which works best for you. If you're only writing simple {{Glossary("HTML")}}, {{Glossary("CSS")}}, and {{Glossary("JavaScript")}}, go with a simple editor.

Price does not reliably reflect a text editor's quality or usefulness. You have to try it for yourself and decide if it meets your needs. For example, Sublime Text is cheap, but comes with many free plugins that can greatly extend its functionality.

### Image editors

Your system likely includes an image editor, or viewer: Paint on Windows, Eye of GNOME on Ubuntu, Preview on Mac. Those programs are relatively limited, you'll soon want a more robust editor to add layers, effects, and grouping.

Editors can be free ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderately expensive ([PaintShop Pro](https://www.paintshoppro.com/), less than $100), or several hundred dollars ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

You can use any of them, as they will have similar functionality, though some are so comprehensive you'll never use every feature. If at some point you need to exchange projects with other designers, you should find out what tools they're using. Editors can all export finished projects to standard file formats, but each editor saves ongoing projects in its own specialized format. Most of the images on the internet are copyrighted, so it is better to check the license of the file before you use it. Sites like [Pixabay](https://pixabay.com/) provide images under CC0 license, so you can use, edit and publish them even with modification for commercial use.

### Media editors

If you want to include video or audio into your website, you can either embed online services (for example YouTube, Vimeo, or Dailymotion), or include your own videos (see below for bandwidth costs).

For audio files, you can find free software ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), or paying up to a few hundred dollars ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Likewise, video-editing software can be free ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) for Linux, [iMovie](https://support.apple.com/imovie) for Mac), less than $100 ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), or several hundred dollars ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). The software you received with your digital camera may cover all your needs.

### Publishing tools

You also need a way to upload files: from your hard drive to a distant web server. To do that you should use a publishing tool such as an [(S)FTP client](/en-US/docs/Glossary/FTP), [RSync](https://en.wikipedia.org/wiki/Rsync), or [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Each operating system includes an (S)FTP client, as part of its file manager. Windows Explorer, Nautilus (a common Linux file manager), and the Mac Finder all include this functionality. However, people often choose dedicated (S)FTP clients to display local or remote directories side-by-side and store server passwords.

If you want to install an (S)FTP client, there are several reliable and free options: for example, [FileZilla](https://filezilla-project.org/) for all platforms, [WinSCP](https://winscp.net/eng/index.php) for Windows, [Cyberduck](https://cyberduck.io/) for Mac or Windows, [and more](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Because FTP is inherently insecure, you should make sure to use SFTP — the secure, encrypted version of FTP that most hosting sites you'll deal with these days will offer by default — or another secure solution like Rsync over SSH.

## Browsers

You either already have a browser or can get one for free. If necessary, download Firefox [here](https://www.mozilla.org/en-US/firefox/all/) or Google Chrome [here](https://www.google.com/chrome/).

## Web access

### Computer / modem

You need a computer. Costs can vary tremendously, depending on your budget, and where you live. To publish a barebones website, you only need a basic computer capable of launching an editor, and a Web browser, so the entry level can be quite low.

Of course, you'll need a more serious computer if you want to produce complicated designs, touch up photos, or produce audio and video files.

You need to upload content to a remote server (see _Hosting_ below), so you need a modem. Your {{Glossary("ISP")}} can rent Internet connectivity to you for a few dollars per month, though your budget might vary, depending on your location.

### ISP access

Make sure that you have sufficient {{Glossary("Bandwidth", "bandwidth")}}:

- Low-bandwidth access may be adequate to support a 'simple' website: reasonably-sized images, texts, some CSS and JavaScript. That will likely cost you a few dozen dollars, including the rent for the modem.
- On the other hand, you'll need a high-bandwidth connection, such as DSL, cable, or fiber access, if you want a more advanced website with hundreds of files, or if you want to deliver heavy video/audio files directly from your web server. It could cost the same as low-bandwidth access, upwards to several hundred dollars per month for more professional needs.

## Hosting

### Understanding bandwidth

Hosting providers charge you according to how much {{Glossary("Bandwidth", "bandwidth")}} your website consumes. This depends on how many people, and Web crawling robots, access your content during a given time, and how much server space your content takes up. This is why people usually store their videos on dedicated services such as YouTube, Dailymotion, and Vimeo. For example, your provider may have a plan that includes up to several thousand visitors per day, for "reasonable" bandwidth usage. Be careful, however as this is defined differently from one hosting provider to another. Keep in mind that reliable, paid, personal hosting can cost around ten to fifteen dollars per month.

> [!NOTE]
> There is no such thing as "unlimited" bandwidth. If you consume a huge amount of bandwidth, expect to pay a huge amount of money.

### Domain names

Your domain name has to be purchased through a domain name provider (a registrar). Your hosting provider may also be a registrar ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) for instance are at the same time registrars and hosting providers). The domain name usually costs $5-15 per year. This cost varies depending on:

- Local obligations: some country top-level domain names are more costly, as different countries set different prices.
- Services associated with the domain name: some registrars provide spam protection by hiding your postal address and email address behind their own addresses: the postal address can be provided in care of the registrar, and your email address can be obscured via your registrar's alias.

### Do-it-yourself hosting vs. "packaged" hosting

When you want to publish a website, you could do everything by yourself: set up a database (if needed), Content Management System, or {{Glossary("CMS")}} (like [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.), upload pre-made or your own templates.

You could use your hosting provider's environment, for roughly ten to fifteen dollars per month, or subscribe directly to a dedicated hosting service with pre-packaged CMSs (e.g., [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). For the latter, you won't have to pay anything, but you may have less control over templating and other options.

### Free hosting vs. paid hosting

You might ask, why should I pay for my hosting when there are so many free services?

- You have more freedom when you pay. Your website is yours, and you can migrate seamlessly from one hosting provider to the next.
- Free hosting providers may add advertising to your content, beyond your control.

It is better to go for paid hosting rather than relying on free hosting, as it is possible to move your files easily and uptime is guaranteed by most paid sites. Most hosting providers give you a huge discount to start with.

Some people opt for a mixed approach. For example, their main blog on a paid host with a full domain name, and spontaneous, less strategic, content on a free host service.

## Professional website agencies and hosting

If you desire a professional website, you will likely ask a web agency to do it for you.

Here, costs depend on multiple factors, such as:

- Is this a simple website with a few pages of text? Or a more complex, thousand-pages-long website?
- Will you want to update it regularly? Or will it be a static website?
- Must the website connect to your company's IT structure to gather content (say, internal data)?
- Do you want some shiny new feature that is popular at the moment? At the time of writing, clients are seeking single pages with complex parallax.
- Will you need the agency to think up user stories or solve complex {{Glossary("UX")}} problems? For example, creating a strategy to engage users, or A/B testing to choose a solution among several ideas.

And for hosting you need to consider following choices:

- Do you want redundant servers, in case your server goes down?
- Is 95% reliability adequate, or do you need professional, around-the-clock service?
- Do you want high-profile, ultra-responsive dedicated servers, or can you cope with a slower, shared machine?

Depending on how you answer these questions, your site could cost thousands to hundreds of thousands of dollars.

## Next steps

Now that you understand what kind of money your website may cost you, it's time to start designing that website and [setting up your work environment](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Read on about [how to choose and install a text editor](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- If you're more focused on design, take a look at the [anatomy of a web page](/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
