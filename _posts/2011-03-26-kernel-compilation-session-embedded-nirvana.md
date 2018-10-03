---
id: 266
title: Kernel Compilation Session @Embedded Nirvana
date: 2011-03-26T09:28:10+00:00
author: admin
layout: post
guid: http://neependra.net/?p=266
permalink: /2011/03/26/kernel-compilation-session-embedded-nirvana/
categories:
  - Uncategorized
tags:
  - fedora
  - foss
  - kernel
---
**[Embedded Nirvana](http://embeddednirvana.org/)** is an initiative for hands-on knowledge sharing for Linux OS on Embedded Devices. Today we are having out event for COEP students <http://embeddednirvana.org/about-envent/>.  I also gave a talk on Linux Kernel Compilation. The commands are very specific for Fedora.
  
Before getting into kernel compilation I would like to talk about few things which might not be directly related to the topic.If we look at sometime in history then we see that hardware has become cheaper and cheaper and with that the number of computer users has been increased. Here a brief time-line:-

  * 70s: mainframe 1 / organization
  * 80s: minicomputer, 1 / group
  * 90s: PC, 1 / user.

And now a user might have more than one PC in one or the other form like PC, Mobile, Kindle, Ipad.. etc
  
Lets look at the wish-list of current users:-

  * More features
  * More Device support
  * More battery life
  * More Security
  * Very few errors
  * Good User Interface

User is becoming more greedy day by day. Now if we want to have a one large code base which fulfills the above
  
wish-list, we carefully need to pickup the correct pieces depending on the hardware and put them together to
  
have running system. In short this is what we mean by Kernel Compilation.
  
Here in brief history of Linux Kernel:-

  * 0.01 First version released by Linus (1991).
  * 1.0 First release (x86 only) in 1994.
  * 1.2 Supports other CPUs (Alpha, MIPS) in 1995.
  * 2.0 SMP support, more architectures (1996).
  * 2.2 Efficient SMP, more hardware support (1999).
  * 2.4 LVM, Plug-n-Play, USB, etc. (2001).
  * 2.6 Scalability (embedded, NUMA, PAE, sched), kernel pre-emption,User-mode linux (2003)

You can either download the source from the kernel.org or use the code provided by specific distribution.
  
You&#8217;ll see some version number with Linux kernel. Lets try to understand that:-
  
Version Numbering: **A.B.C.D**
  
**A: Major version**
  
Changed twice: 1.0 (1994), 2.0 (1996)
  
**B: Minor version**
  
Even numbers are stable releases
  
Odd numbers are development releases
  
**C: Minor revision**
  
Not so minor in 2.6 as development continues.
  
**D: Bug-fix / security patch release**
  
First occurred with NFS bug in 2.6.35.1
  
Download the kernel source from [kernel.org](http://kernel.org/) and uncompress it.
  
Source Layout Image.
  
[<img class="alignleft size-medium wp-image-267" title="source_layout" src="http://neependra.net/wp-content/uploads/2011/03/source_layout-300x202.png" alt="Linux Kernel Source Layout" width="300" height="202" />](http://neependra.net/wp-content/uploads/2011/03/source_layout.png)
  
Once you get the source, you need to compile the kernel for your hardware.The kernel takes the configuration
  
parameters from the **.config** file, which generally resides in kernel source directory.

  * Rather than creating **.config** from scratch its better to use the config file which is known towork for your hardware. For the currently running kernel the config file can be found at &#8220;/boot&#8221;directory, which you copy to kernel source directory with **.config** name.

It might happen that the newer kernel might have some new features which were not available earlier, Soyou&#8217;ll not have the configuration for those in the .config file. To update the .config file accordingly run following command :-
  
**\# make oldconfig**
  
If you want to modify some configuration parameters then you can use one of the following tools:-
  
**menuconfig
  
xconfig**
  
Once you run &#8220;menuconfig&#8221; you&#8217;ll get following window:-
  
[<img class="alignleft size-medium wp-image-271" title="make_menuconfig" src="http://neependra.net/wp-content/uploads/2011/03/make_menuconfig-300x187.png" alt="" width="300" height="187" />](http://neependra.net/wp-content/uploads/2011/03/make_menuconfig.png)
  
Now you can see different kernel options. You can get some info about them.
  
To search for any option you can press &#8220;/&#8221; and get the search box.
  
Before any option you&#8217;ll see a [], which might contain **nothing, &#8220;*&#8221; or &#8220;M&#8221;.**

  * **nothing** &#8211; option is not configure
  * ***** &#8211; Option is configured and part of the kernel.
  * **M** &#8211; Option is configured and compiled and loadable module. Not the part of default kernel.

After finishing the configuration you can proceed for compilation.
  
Run following command to compile the program
  
**$ make**
  
After compilation to copy the compiled modules in &#8220;/lib/modules/kernel-x&#8221; directory run
  
**$ make modules_install**
  
Then to copy the compiled kernel in &#8220;/boot&#8221; directory, updating the grub configuration etc. run
  
**$ make install**
  
Thats it!!!!  Boot with new kernel.