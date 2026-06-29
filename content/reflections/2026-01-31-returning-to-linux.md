---
title: "Returning to Linux"
date: 2026-02-12T21:31:36-03:00
draft: false
---

My journey with Linux started in college (2013) when I decided to try Ubuntu. I loved how easy it was to install packages and run programs directly in the terminal. Over the years, I experimented with many distributions, including Xubuntu (where I fell in love with XFCE) and a very precarious Arch Linux installation (where I never quite managed to automate the internet connection).

But I always kept Windows as a dual-boot safety net, mostly because certain software required it. The Linux side wasn't without friction, either: major Ubuntu updates often broke my system, and managing NVIDIA drivers was a constant headache. Despite the bumps, maintaining a Linux partition was worth it to have a proper development environment.

This changed in 2021. I bought a new computer that year and, after spending way too much time struggling to configure a dual boot (this will be relevant later), I decided to give WSL a try. To my surprise, it worked great.

For the first time, I felt like I had the best of both worlds in a single OS: Windows for compatibility and Linux for development. The isolation also allowed me to mess around freely with my dev environment and easily fix it if I broke something, a lesson learned from being too experimental with my main installs in the past.

The interface had finally caught up too. The Windows Terminal looked great and worked perfectly, making the transition seamless. At the time, the drawbacks often mentioned about WSL (such as its performance) did not bother me at all. Even if they did, the quirks would have felt like a small price to pay for the convenience.

Windows 10 felt like the endgame. It wasn't perfect, but it was good enough for most people. At the time, I naïvely believed that it would be the last version of Windows, evolving forever through rolling updates. Thus, the launch of Windows 11 later that year definitely surprised me.

When my computer became eligible for the upgrade, I saw no reason to switch: Windows 11 felt like an unnecessary UI change. So, I got used to dismissing the full-page notifications begging me to "finish configuring my device" every few days. They were annoying, but not enough for me to do something about them. This routine continued until Windows 10 support officially ended, and with it, its security updates. I finally bit the bullet and upgraded to Windows 11.

The problems with Windows 11 are multiple and many people spent a lot of time (rightfully!) complaining about it: [1](https://www.theverge.com/2022/2/18/22940517/windows-11-pro-require-microsoft-account-internet-connection), [2](https://news.ycombinator.com/item?id=30055222), [3](https://www.theregister.com/2023/04/17/microsoft_windows_start_ads/), [4](https://www.neowin.net/news/windows-11-is-now-automatically-enabling-onedrive-folder-backup-without-asking-permission/). Most of them annoyed me but the funniest part was that the full page ads did not bother me at all anymore as I had developed muscle memory for dismissing them without thinking. The turning point for me was the performance.

The OS is just too bloated and slow. Everything takes way longer than what I would consider acceptable. I find it unbelievable for my computer, which is a few years old but still pretty powerful, to constantly feel overwhelmed by the OS idling. My main use of Windows, playing games, became materially worse given that the OS was constantly fighting for resources.

I decided to give the open-source world one more chance. After some research, I landed on [Nobara](https://nobaraproject.org/), a Fedora-based distro focused on gaming. After some struggle, I finally found the reason I couldn't install another OS on my computer previously (a BIOS setting for the SATA mode hidden behind a cryptic shortcut). Once that was changed, the installation process was smooth and familiar.

So far, my experience has been very positive. KDE (which I always saw as bloated and slow) now runs perfectly well, NVIDIA drivers just work, and games are compatible thanks to Valve's Proton. Overall, the Linux ecosystem feels the best it has ever been for regular day-to-day use.

That being said, despite all of Microsoft's efforts, I feel that 2026 is far from being the so-called "Year of Linux". Although I find Linux to be the superior experience, most users will not go through the hoops of choosing, installing, and getting used to a new OS. Even I, someone used to the process and who actually likes configuring computers, struggled to do so! One can hope, though, for this process to get easier as time goes on, allowing Linux to gain more mainstream adoption.
