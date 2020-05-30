---
path: "/blog/gatsby-and-react"
date: "2020-05-24"
title: "Gatsby & React"
type: "Tech"
image: "react-and-gatsby.jpg"
imageAlt: "Gatsby and React Logos"
---
So recently I've undertaken the redesign of my personal site (this one right here!). Over the course of doing so I decided to choose a new stack to build it on, and since every site so far has been PHP + MySQL hardcoded, so I wanted to do something JS focused. Since the framework has a large amount of buzz, I went with [Gatsby](https://www.gatsbyjs.org/).

Gatsby prides itself on being a static site generator. It won't win anyone over if you need something hyper "modern", it finds a better niche in brochure sites and dealing with content that won't change too quick or often (great for a blog!). Over the course of writing this site I wanted ideas for the first post, but eventually I thought it only suitable to cover it's own development as the innagural article, so naturally I'll share thoughts about its use.

Gatsby's hello world program and its following tutorials are quite easy - and if you've learned its component pieces (largely React and GraphQl) the scaffolding of a base Gatsby site will be really easy to traverse. Understanding the intended solution to almost every problem takes a quick second of documentation digging. One of the large problems with this approach though (and I think this is somewhat symptomatic of a _very_ large portion of frontend frameworks in 2020) is that a large amount of the application is resolved via "magic solutions". High enough on the JS stack and you've abstracted all of your problems into dust, but if these out-of-the-box solutions don't fit your application, growing pains are sure to ensue. Often times on the modern web, I find myself longing for bespoke solutions to simple problems instead of re-inventing the wheel, but I've been pleasantly surprised here.

Gatsby's performance holds against scale quite well. Conceptually, all of Gatsby focuses itself so wholely on being the one-and-only static site solution so much so that you won't run into many problems without thousands of man hours behind them already. This leaves the site maintainer with a very mature feeling development cycle - something that can't be said for many contemporaries.

Notably, performance audits of the site returns a promising affair. Currently the indev build runs mid 90's in most categories and can blame most of the shortcomings on still being served over http for the time being. So performance complaints from the anti-JS crowd can be mostly dismissed. (Total sidenote but why does Hacker News hate JavaScript? Okay well I _know why_, but at least this part of Gatsby is up to snuff in that area.)

I'd definitely consider Gatsby the next time I need to generate some docs or as an addition to another site. Gatsby annihilates competitor's in its niche. What it may sacrifice in not being as bare as svelte or feature rich as your next big Vue PWA, it makes up for in rapid development cycles and stellar documentation. Definitely come with some React knowledge though.
