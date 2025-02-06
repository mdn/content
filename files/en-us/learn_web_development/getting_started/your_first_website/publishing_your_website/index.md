---
title: Publishing your website
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Once you finish writing the code and organizing the files that make up your website, you need to put it all online so people can find it. This article explains how to get your sample website online with little effort.

> [!NOTE]
> You'll need a sample website available on your local computer to follow along with this article. It should contain at least a valid `index.html` file. If you've not done so already, we'd advise you to build one by working through the previous articles in this module, starting with [What will your website look like?](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system, the basic software you will use to build a website, and file systems.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The basic tools and concepts involved in publishing a website — hosting, domains, FTP programs.</li>
          <li>What alternative hosting options are available, for example Google App Engine, GitHub, and CodePen.</li>
          <li>Publishing a website using GitHub Pages.</li>
          <li>Hosting, how to purchase it, and how to put a website online.</li>
          <li>How to register a domain.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What are the options?

Publishing a website is a complex topic because there are many ways to go about it. This article doesn't attempt to document all the possible methods. Instead, it explains the advantages and disadvantages of three approaches that are practical for beginners. Then it steps through one method that can work right away for many readers.

### Getting hosting and a domain name

To have more control over content and website appearance, most professionals/businesses choose to buy web hosting and a domain name:

- Web hosting is rented file space on a hosting company's [web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server). You put website files on the web server. The web server provides website content to website visitors.
- A [domain name](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) is the unique web address where people find your website, such as `https://www.mozilla.org` or `https://www.bbc.co.uk`. You can rent your domain name for as many years as you want from a **domain registrar**.

If you get your web hosting _and_ domain name from the same company, they tend to be configured automatically to talk to one another. However, If you get them from separate companies, or want to change your hosting to a different company, you need to do a bit of setup to point the domain name to the correct server. This is so that people will see your website when they navigate to that web address. This is usually done by logging into your domain registrar's website, and setting your domain's [nameservers](https://kinsta.com/knowledgebase/what-is-a-nameserver/) to the ones provided by your hosting company.

Companies use various mechanisms to transfer files to their web servers. Many will have more than one option; typical options include:

- A drag and drop interface (you'll see an example of this in [Publishing via GitHub](#publishing_via_github), later on).
- An {{Glossary("FTP", "File Transfer Protocol (FTP)")}} program. FTP programs vary widely, but generally, you have to connect to your web server using details provided by your hosting company (typically username, password, hostname). Then the program shows you your local files and the web server's files in two windows, and provides a way for you to transfer files back and forth.
- Keeping website source code in a GitHub repo (see below) and granting the hosting company access so they can fetch the source, build it if necessary, and publish it.
- Some companies will provide [command line tools](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) for you to use to transfer your files.

#### Tips for finding hosting and domains

- MDN does not promote specific commercial hosting companies or domain name registrars. To find hosting companies and registrars, just search for "web hosting" and "domain names". All registrars will have a feature to allow you to check if the domain name you want is available.
- Your home or office {{Glossary("ISP", "internet service provider")}} may provide some limited hosting for a small website. The available feature set will be limited, but it might be perfect for your first experiments.
- There are also free services available like [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), and [WordPress](https://wordpress.com/). Such services can be limited in scope, but they are good enough for initial experiments.

### Using an online tool like GitHub or Google App Engine

Some tools let you publish your website online:

- [GitHub](https://github.com/) is a "social coding" site. It allows you to upload code repositories for storage in the [Git](https://git-scm.com/) **version control system.** You can then collaborate on code projects, and the system is open-source by default, meaning that anyone in the world can find your GitHub code, use it, learn from it, and improve on it. GitHub has a very useful feature called [GitHub Pages](https://pages.github.com/), which allows you to expose website code live on the web.
- [Google App Engine](https://cloud.google.com/appengine/) is a powerful platform that lets you build and run applications on Google's infrastructure — whether you need to build a multi-tiered web application from scratch or host a static website. See [How do you host your website on Google App Engine?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) for more information.

These options are generally free, with a limited feature-set.

### Using a web-based IDE such as CodePen

There are a number of web apps that emulate a website development environment, allowing you to write HTML, CSS and JavaScript, which is then rendered and displayed in an output pane. Generally speaking, these tools are easy to use, great for learning, good for sharing code (for example, if you want to share a technique with or ask for debugging help from colleagues in a different office), and free (for basic features). They host your rendered page at a unique web address. However, the features are limited, and these apps often don't provide hosting space for assets (like images).

Try playing with some of these examples to find out which one works best for you:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Publishing via GitHub

Now let's examine how to publish your site via GitHub Pages.

1. First of all, [sign up for GitHub](https://github.com/) and verify your email address.
2. Next, you need to [create a repository](https://github.com/new) to store files. On this page:
   1. in the _Repository name_ box, enter _username_.github.io, where _username_ is your username. For example, our friend Bob Smith would enter _bobsmith.github.io_.
   2. Click the _Create repository_ button at the bottom of the page.
3. On the next page, find the _uploading an existing file_ link, and click on it. This should bring you to the file upload page.
4. At this point, you should be able to drag and drop files from your local file system onto the web page to upload them to the GitHub repository. To do so:
   1. Open a file explorer/finder window on your computer.
   2. Make sure you can see the file explorer _and_ the web browser windows — position them next to one another on your screen.
   3. Navigate the file explorer window to the folder containing your sample website.
      > [!NOTE]
      > Make sure your folder has an `index.html` file.
   4. Select all of your sample website's files (for example using the <kbd>Ctrl</kbd> + <kbd>A</kbd> keyboard shortcut, or <kbd>Cmd</kbd> + <kbd>A</kbd> on macOS).
   5. Drag the files from your file explorer over the "Drag files here to add them to your repository" section of the GitHub page.
   6. The section's border and text changes to indicate a drop is possible. Drop the files at this point.
   7. Click the _Commit changes_ button at the bottom of the page.
5. Navigate your browser to _username_.github.io to see your website online. For example, for the username _chrisdavidmills_, go to [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > It may take a few minutes for your website to go live. If your website does not display immediately, wait a few minutes and try again.

To learn more, see [GitHub Pages Help](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Further reading

- [What is a web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Understanding domain names](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [How much does it cost to do something on the web?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
