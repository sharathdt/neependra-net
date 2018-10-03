---
id: 85
title: Tips and Tricks
date: 2010-10-19T09:37:58+00:00
author: admin
layout: page
guid: http://neependra.net/?page_id=85
---
# Productivity

  * [**Screen**](http://aperiodic.net/screen/) I am not the first one to mention that. I just didn&#8217;t use it for such a long time even after knowing it. It a great tool and must for all the  SysAdmins and Developers.

# Git

  * Resetting the master on github

<a name="msg_811e10e7f32e0956"></a>_Reset your local master to the point you want, then **\`git push &#8211;force origin&#8217;**_

# **Some powerful commands on Linux**

http://www.pixelbeat.org/cmdline.html

# Adding ISO as repository on Fedora/RHEL/CentOS

Do a loop-back mount of the ISO and then add following in the_ **yum.conf**_ file.
  
[isoupdates]
  
name=isoupdates
  
baseurl=file:///path/to/mounted/iso
  
enabled=1

# Debian Package

Any file in /etc directory is treated as configuration files.They are not removed after un-installing the package. To remove those
  
files run:
  
** _$dpkg &#8211;purge <package name>_**
  
Make sure you don&#8217;t remove them manually. If you did then run:
  
**_$ dpkg  &#8211;force-confnew <package>.deb_**
  
This will re-install the configuration files.
  
In my case, in the post section I was  removing them manually, which was causing the problem next time while installing package.
  
I had to install a init script and **dpkg** was giving following error:-
  
**update-rc.d: /etc/init.d/blah: file does not exist**
  
**dpkg** was assuming that the file **&#8220;/etc/init.d&#8221;** is already and the not copying it again.

# dd command status

**?dd** command doesn&#8217;t give us the status, So if you put very large copy using then you just have to wait till it finishes.
  
Run following command
  
**_kill -USR1 <pid of dd process>
  
_** 
  
and you get some status on the terminal you were running the command. You can run  above command as many times you want to get the status.

# 

# Finding the SCSI id for a disk and its controller

<span style="font-family: 'Times New Roman', serif;">If we look at &#8220;/proc/scsi/scsi&#8221; file then we see something like following:-</span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>Host: scsi1 Channel: 00 Id: 00 Lun: 22</strong></span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>Vendor: HP Model: P2000 G3 FC Rev: T201</strong></span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>Type: Direct-Access ANSI SCSI revision</strong></span>
  
<span style="font-family: 'Times New Roman', serif;">And we look at dmesg output then we see :-</span>
  
<span style="font-family: 'Times New Roman', serif;">sd 1:0:0:22: [sde] 683593728 512-byte logical blocks: (349 GB/325 GiB)</span>
  
<span style="font-family: 'Times New Roman', serif;">sd 1:0:0:22: [sde] Write Protect is off</span>
  
<span style="font-family: 'Times New Roman', serif;">sd 1:0:0:22: [sde] Mode Sense: 93 00 00 08</span>
  
<span style="font-family: 'Times New Roman', serif;">sd 1:0:0:22: [sde] Attached SCSI disk</span>
  
<span style="font-family: 'Times New Roman', serif;">From above we can conclude that &#8220;sde&#8221; is the disk which is attached on host 1 and have Lun Id as 22. We can also see that the disk is coming from HP P2000 G3 FC storage. </span>
  
<span style="font-family: 'Times New Roman', serif;">A typical SCSI nameing convention is</span>
  
<span style="font-family: 'Times New Roman', serif;"><host> <channel> <target> <lun></span>

# 

# Scanning for newly attached disk on the FC HBA

<span style="font-family: 'Times New Roman', serif;">To scan the given &#8220;host (h)&#8221; , &#8220;channel(c)&#8221;&#8221;, &#8220;target(t)&#8221; and &#8220;lun(l)&#8221; , run following command :-</span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>$</strong></span><span style="font-family: 'Times New Roman', serif;"><strong>echo &#8220;<c> <t> <l>&#8221; > /sys/class/scsi_host/host<h>/scan</strong></span>
  
<span style="font-family: 'Times New Roman', serif;">And to scan all channels, target and luns for a give host run following:-</span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>$ echo &#8220;- &#8211; -&#8221; > /sys/class/scsi_host/host<h>/scan</strong></span>

# 

# Using SAR (system activity report)

<span style="font-family: 'Times New Roman', serif;">It is used to collect, report, or save system activity information. It can report CPU, Disk, Memory, Network, paging and other information.</span> <span style="font-family: 'Times New Roman', serif;">If configured with </span><span style="font-family: 'Times New Roman', serif;"><em>cron</em></span> <span style="font-family: 'Times New Roman', serif;">then it collects information everyday and store the statistics in &#8220;/var/log/sa&#8221; folder. The &#8220;saX&#8221; files are binary files and &#8220;sarX&#8221; file are human readable data, where is day of the month.</span> <span style="font-family: 'Times New Roman', serif;">We can collect all those stats manually as well.</span>
  
<span style="font-family: 'Times New Roman', serif;">Following command will collect Disk, CPU, Memory, paging, load average stats in every 5 mins and save it in &#8220;logfile&#8221; file in binary format:-</span>
  
<strong style="font-family: 'Times New Roman', serif;">$ sar -dp -u -r -B -q 5 -o <logfile></strong>
  
<span style="font-family: 'Times New Roman', serif;">And with following the binary file can be coverted into CSV file:-</span>
  
<span style="font-family: 'Times New Roman', serif;"><strong>$ sadf -d &#8212; -dp -u -r -B -q 5 <logfile> > <csvfile></strong></span>
  
<span style="font-family: 'Times New Roman', serif;">Make sure &#8220;sar&#8221; and &#8220;sadf&#8221; is run on the same system, else the name of the disks in CSV file would change.</span>
  
&nbsp;