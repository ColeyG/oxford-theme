---
path: "/blog/bash"
date: "2020-06-22"
title: "Why I Love Bash"
type: "Tech"
image: "bash-card.svg"
imageAlt: "Heart Image"
---
No matter the language, I always find bash scripts in the cracks of my projects. I mean, who needs any CI/CD integration other than a folder full of `.sh` files? This site itself just has a few deploy scripts for dev and production environments. Anyways, there are plenty of reasons why someone would love bash, here are some of mine.

### Automagic

Why type more? And that begs the question, why do more? Bash gives you shortcuts to automate the tasks you do everyday! (If you use the cli regularly)

One of my favorite applications for bash is as the task runner. Most folks in web have some experience with gulp, webpack, rollup, etc, but when those don't fit the task at hand, why write anything more complicated than bash? In a small project that I talked about on the site before, my [gameboy demo](https://github.com/ColeyG/coles-gba-demo), I found myself running the same simple compilation steps over and over again. Run compile steps against the devkit, link the project with the appropriate linker, and execute the program with an appropriate emulation suite. This was cumbersome, and I am bad at C, so bash to the rescue!

Here's a link to the [full script](https://github.com/ColeyG/coles-gba-demo/blob/master/scripts/compile.sh). While a simple bash task, it saved so much time over the course of the work I've done on the gameboy.

### Dark Cron Spells

For decades, dark lore in the cron tab speaks of tasks repeated by servers executing bash scripts. Cache-flushing and server health check scripts. Mailing automation or backups. The Cron Job can give you peace of mind when it comes to common maintenance tasks that otherwise could be executed wrong or forgotten.

In case you don't know, a [cron](https://en.wikipedia.org/wiki/Cron) is a simple job scheduler dating back to 1975 for Unix based systems!

I personally run simple cron jobs to give me backups sent out of my house for things like video game servers or development machines that I'd be devastated without. One neat implementation that I recently discovered, is the ssl recertification cron task. If you host self-signed ssl certs on any of your machines, resigning is a shackle that chains you to server repairs for an eternity. I'd like to think of the cron tab as a demon that I've trapped inside each of my instances. It is cursed to toil away and ... update keys and make sure my Minecraft world is backed up... Not too bad of a punishment I hope.

### .bashrc and the Dot Files

I hope this band plays at my funeral! .bashrc and the Dot Files are the best way to ensure total cli configuration parity between different servers, instances, and dev workstations.

I personally run a [bash configuration repo](https://github.com/ColeyG/bash-config) that has scripts and aliases that I use on every computer I touch. A handful of commands on the repo and the machine is syced, and an auto-update script handles any changes or improvements I make on one machine to the next with git.

The dead-simple concepts in bash lead to incredibly easily maintained company standards and simple repeatable automation that saves time every day. If you familiarize yourself with the cli, you accidentally learn bash programming. And with a little extra logic sprinkled in, bash can handle even larger scaled automation duties.
