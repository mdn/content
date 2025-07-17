---
title: Open source etiquette
slug: MDN/Community/Open_source_etiquette
page-type: mdn-community-guide
sidebar: mdnsidebar
---

If you've not worked on an open source project (OSP) before, it is a good idea to read this article before starting to contribute to MDN Web Docs and other open source projects.
There are a few behaviors to adopt that will help you and the other project contributors feel valued and safe, and stay productive.
This article won't teach you everything about contributing to open source; the aim is to cover foundational topics for taking part in open source communities.

## Think about why you are contributing to an OSP

Before you start contributing to an open source project, ask yourself why you want to do that.
It's fine if the answer to this question is "I want something to do with my time", but even better reasons might include:

- I want to improve my skills.
- I use this tool all the time and found a bug in it or I want to help make it better.
- I want to help other people use the tool more successfully.
- I want to help other people contribute to the project more successfully.
- I want to publicly demonstrate my own skills for my college or university course or to improve my chances of getting a job.

Some of these reasons are self-serving, and that's fine!
Having a clear set of reasons for contributing will make you more productive and make it easier to work with the community.

## Be polite, be kind, avoid incendiary or offensive language

We could abbreviate this to "be kind".
This is our number one bit of advice for anyone starting open source contributions.
Be kind to the other contributors on the project, and it will be a happier and more productive place.

- Thank people if they help you.
- Congratulate people where appropriate, like if they land a pull request, or fix a difficult bug.
- Always respond respectfully, even if you feel like the answer to a question was obvious or that someone is repeating themselves.
- Try to help people to do better in a supportive way.
  For example, saying "this is wrong" or "here is the answer" is not as helpful as saying "This is OK, but I feel that it would be better if we did it more like this, here's a blog post for more ideas" or "you can find the answer here; also check out this link for more common answers".

Contributors are here because they want to make a positive impact on the project.
Beyond that, don't make assumptions, such as:

- Knowledge of the project and the technologies used to build it
- Gender, sexuality, age, languages spoken, location, political views, religion, or other personal attributes
- Experience with open source projects
- Confidence level
- Expectations
- Sense of humor

You should keep what you write on topic and avoid controversial subjects, such as religion or politics.
Refrain from swearing or potentially offensive language.
It rarely improves communication, and can make it harder for others to participate.

Be supportive and respectful even if you disagree with someone, or don't like a decision they've made.
Be aware that there are rules in place in any good OSP to protect its contributors against being made to feel uncomfortable while contributing.
This usually can be found in a `CODE_OF_CONDUCT.md` file on GitHub (see [`mdn/content` CODE_OF_CONDUCT](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) for an example).

MDN's repos are governed by the wide-reaching [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) (CPG).
Usually mildly offensive behavior on MDN Web Docs repos (such as constantly being off-topic/disruptive, or being rude) will be first responded to with a warning, followed by a final warning, then a temporary or permanent ban.
More serious behavioral problems such as hate speech or threats against another contributor will not be tolerated, and will likely result in an instant ban.

If you receive anything that makes you feel uncomfortable, you should always report it using the mechanism provided on the code of conduct.

## Choose effective contributions

Think about what you want to do on the project. For example, we have a large list of issues filed at on the [contributors task board](https://github.com/orgs/mdn/projects/25/views/1), broken up by various task types.
You could also contribute by opening [pull requests](/en-US/docs/MDN/Community/Pull_requests) to fix problems that you come across while reading MDN articles.

A lot of the work on MDN revolves around writing documentation and code examples, but there are other ways to contribute too.
This could be helping to triage issues that come in, fixing typos, fixing grammar to make pages more understandable, or mentoring people that are trying to make fixes.
Every fix is useful, no matter how small, and we won't turn any away.
Nevertheless, try to make sure your fixes are productive. We'd like to advise against these kinds of contributions:

- Updating code style, language in prose, or testing framework because you like it better.
- Changing pages from US English to British English.
- Adding or removing punctuation when the original is correct.

In many cases, things are like they are on OSPs for a reason.
You should read style guides if they have one, and if in doubt about whether something is productive, always ask first!

## Read the manual

Good OSPs will always make contributor documentation readily available. On GitHub projects, it is usually in the repo's CONTRIBUTING.md file, or sometimes in the project's README.md file. Being a documentation project, MDN content has a [README](https://github.com/mdn/content/blob/main/README.md) and a decent set of contributor docs on the site itself (see [Community resources](/en-US/docs/MDN/Community)).

Don't be afraid to ask for help, but always try to find the answer to your question first before asking.
This way you build up your knowledge of the project and become more independent, and don't put unnecessary burden on the other contributors.
If an explanation is hard to find or not described very well, file an issue, or create a pull request to try to fix it yourself.

## Find out where to ask questions

Find out where the best place is to ask questions. Good OSPs will always make this clear in their docs (see [Get in touch](/en-US/docs/MDN/Community/Communication_channels)). If you want to ask general questions, then always make use of these channels. Don't file an issue on GitHub for every question, as it adds noise to the project (see the next section).

## Make progress, not noise

Think carefully about the way you handle communication in the project — make sure it is useful, and that it doesn't make other contributor's jobs harder. Submitting pull requests to fix bugs is great, but be sure they are useful or easy to review.
Filing issues and joining in other conversations is fine, but are your issues and comments on topic, or are they adding noise?

As a rule, do:

- Discuss one topic per issue — it is easy to keep issues focused and productive.
- Fix one issue per PR — it may be slightly more work for you, but it is much easier to review a single clear fix.
- Contribute to other threads if you have a useful point to make or can answer someone else's question.
- Ask questions using other mechanisms like chat rooms or forums if you are not sure whether something is useful or have a simple question.
- Read the manual first to try to answer the question yourself before asking it.

Don't:

- Complicate issues by trying to discuss multiple topics at once, or making off-topic comments.
- Try to cram multiple fixes into a single pull request. It makes it a lot harder to review, and raises suspicions (some people might think you are trying to hide some malicious code in between the valid changes).
- Open lots of issues asking vague questions.
- Ask questions without trying to solve the problem yourself first.

## OSPs are a democracy (almost)

OSPs are quite democratic — many decisions are voted on, and you are largely free to contribute how you want, as long as you don't impede anyone else from contributing.

However, some things will be largely decided by a small group of core contributors. You are free to make a case against any decision, but sometimes a moderator will make a call that goes against your opinion. You need to respect and accept these decisions.

It is useful to get to know any project's moderators, so you know who best to ask for help, for example in pull requests or issue threads.

## Be patient, be timely

Bear in mind that many people working on OSPs are doing it in their free time, without payment, and all people working on OSPs are generally very busy. If you are waiting for something like a pull request review, or an answer to a question, be patient.

It is reasonable to wait a few days and then ping someone politely to ask if they've had time to look at it. If they happen to be too busy, it may be best to wait a further week and try following up with them then.

It is **not** reasonable or polite to demand things like a quick reply.

If someone is waiting for you to do something for them, you should be extended the same courtesy, but at the same time, try to respond as promptly as you can. If you really can't find the time, let them know, and ask the maintainers to help you find someone else to do the task.

## See also

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [More general freeCodeCamp "How to contribute to open source" list](https://github.com/freeCodeCamp/how-to-contribute-to-open-source)
- [Getting started with contributing to open source](https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/)
- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/) on google.github.io/eng-practices
