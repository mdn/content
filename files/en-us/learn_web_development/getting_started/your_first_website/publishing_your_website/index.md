---
title: Publishing your website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Once you finish writing the code and organizing the files that make up your website, you need to put it all online so people can find it. This article explains how to get [your sample website](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) online with little effort.

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

Publishing a website is a complex topic because there are many ways to go about it. This article explains the most common approaches:

- Getting hosting and a domain name (low cost for small projects)
- Using a web-based IDE (free for basic sites)
- Using an online publishing tool (free for basic sites)

## Getting hosting and a domain name

To have more control over content and website appearance, most professionals/businesses choose to buy web hosting and a domain name:

- Web hosting is rented file space on a hosting company's [web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server). You put website files on the web server. The web server provides website content to website visitors. The cost of web hosting can vary greatly, but can be as cheap as $5-10 per month.
- A [domain name](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) is the unique web address where people find your website, such as `https://www.mozilla.org` or `https://www.bbc.co.uk`. You can rent your domain name for as many years as you want from a **domain registrar**. The domain name usually costs $5-15 per year. This cost varies depending on:
  - Local obligations: some country top-level domain names are more costly, as different countries set different prices.
  - Services associated with the domain name: some registrars provide spam protection by hiding your postal address and email address behind their own addresses: the postal address can be provided in care of the registrar, and your email address can be obscured via your registrar's alias.

If you get your web hosting _and_ domain name from the same company, they tend to be configured automatically to talk to one another. However, if you get them from separate companies, or want to change your hosting to a different company, you need to do a bit of setup to point the domain name to the correct server. This is so that people will see your website when they navigate to that web address. This is usually done by logging into your domain registrar's website, and setting your domain's [nameservers](https://kinsta.com/blog/what-is-a-nameserver/) to the ones provided by your hosting company.

Hosting providers charge you according to how much {{Glossary("Bandwidth", "bandwidth")}} your website consumes. This depends on how many people, and Web crawling robots, access your content during a given time, and how much server space your content takes up. This is why people usually store their videos on dedicated services such as YouTube, Dailymotion, and Vimeo. For example, your provider may have a plan that includes up to several thousand visitors per day, for "reasonable" bandwidth usage. Be careful, however as this is defined differently from one hosting provider to another. Keep in mind that reliable, paid, personal hosting can cost around ten to fifteen dollars per month.

### Tips for finding hosting and domains

- MDN does not promote specific commercial hosting companies or domain name registrars. To find hosting companies and registrars, just search for "web hosting" and "domain names". All registrars will have a feature to allow you to check if the domain name you want is available.
- Your home or office {{Glossary("ISP", "internet service provider")}} may provide some limited hosting for a small website. The available feature set will be limited, but it might be perfect for your first experiments.
- There are also free services available like [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), and [WordPress](https://wordpress.com/). Such services can be limited in scope, but they are good enough for initial experiments.

### Publishing to your domain

Companies use various mechanisms to transfer files to their web servers. Many will have more than one option; typical options include using an SFTP client or RSync, or keeping your website source code in a GitHub repo and granting the hosting company access so they can fetch the source from GitHub, build it if necessary, and publish it.

> [!NOTE]
> It is possible to [Configure a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

#### Dedicated publishing programs

You can use a dedicated publishing program such as an [SFTP client](/en-US/docs/Glossary/FTP) or [RSync](https://en.wikipedia.org/wiki/Rsync) to send your files to your hosting server.

Each operating system includes an SFTP client, as part of its file manager. Windows Explorer, Nautilus (a common Linux file manager), and the Mac Finder all include this functionality. However, people often choose dedicated SFTP clients to display local or remote directories side-by-side and store server passwords.

If you want to install an SFTP client, there are several reliable and free options: for example, [FileZilla](https://filezilla-project.org/) for all platforms, [WinSCP](https://winscp.net/eng/index.php) for Windows, [Cyberduck](https://cyberduck.io/) for Mac or Windows.

## Using a web-based IDE such as CodePen

There are a number of web apps that emulate a website development environment, allowing you to write HTML, CSS and JavaScript, which is then rendered and displayed in an output pane. Generally speaking, these tools are easy to use, great for learning, good for sharing code (for example, if you want to share a technique with or ask for debugging help from colleagues in a different office), and free (for basic features). They host your rendered page at a unique web address. However, the features are limited, and these apps often don't provide hosting space for assets (like images).

Try playing with some of these examples to find out which one works best for you:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Using an online publishing tool

Some tools let you publish your website online:

- [GitHub](https://github.com/) is a "social coding" site. It allows you to upload code repositories for storage in the [Git](https://git-scm.com/) **version control system.** You can then collaborate on code projects, and the system is open-source by default, meaning that anyone in the world can find your GitHub code, use it, learn from it, and improve on it. GitHub has a very useful feature called [GitHub Pages](https://pages.github.com/), which allows you to expose website code live on the web.
- [Netlify](https://www.netlify.com/) is a web hosting platform that provides hosting for static websites directly from your GitHub repository. It also provides a number of additional features, such as deployment preview, serverless functions, and form handling.
- [Fly.io](https://fly.io/) is a platform that allows you to deploy applications and databases close to your users. This is more suitable if you have a web application that requires backend services.

These options are generally free, with a limited feature-set.

## What approach would we recommend?

If you are just getting started, we'd recommend GitHub pages for its ease of use.

1. If you don't already have an account, [sign up for GitHub](https://github.com/).
2. Create a repository to store your site, following the steps at [Creating a repository for your site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site).
3. Upload your site files to your new repository using the GitHub UI. You can find instructions on how to do so at [Adding a file to a repository on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github).
4. Set up your repository to publish its contents using GitHub pages. To do this, see the instructions at [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
5. After a short while, you should see a message saying "Your site is live at https://username.github.io/repositoryname/", for example, "Your site is live at https://bobsmith.github.io/myfirstwebsite/" if your name is bobsmith and your repository is called myfirstwebsite. There should be a "Visit site" button that you can click to view your site.

## Further reading

- [What is a web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Understanding domain names](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
