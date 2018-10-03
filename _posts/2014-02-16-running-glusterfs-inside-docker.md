---
id: 1048
title: Running GlusterFS inside docker container
date: 2014-02-16T08:27:30+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1048
permalink: /2014/02/16/running-glusterfs-inside-docker/
categories:
  - docker
  - geek
  - gluster
  - learning
  - redhat
  - rhs
tags:
  - btrfs
  - container
  - docker
  - fedora
  - geek
  - glusterfs
  - linux
  - redhat
---
As a part of [GlusterFS 3.5 testing and hackathon](http://www.meetup.com/Gluster-Bangalore/events/164854692/), I decided to put [GlusterFS](http://www.gluster.org/) inside a [docker container](https://www.docker.io).So I installed docker on my Fedora20 desktop
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ yum install docker-io -y
  
$ systemctl enable docker.service
  
ln -s &#8216;/usr/lib/systemd/system/docker.service&#8217; &#8216;/etc/systemd/system/multi-user.target.wants/docker.service&#8217;
  
$ systemctl start docker.service
  
$ docker version
  
Client version: 0.7.6
  
..
  
Server version: 0.7.6
  
[/sourcecode]
  
and then started a Fedora container
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ docker run -i -t mattdm/fedora /bin/bash
  
[/sourcecode]
  
Once I am inside the container I installed GlusterFS packages
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
bash-4.2# yum install glusterfs glusterfs-server -y
  
[/sourcecode]
  
And then tried to create volume
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
bash-4.2# /usr/sbin/glusterd
  
bash-4.2# gluster volume create vol 172.17.0.3:/mnt/brick/ force
  
[/sourcecode]
  
<span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; font-size: 14px; line-height: 1.5em;"><br /> but I got following error:-<br /> </span>
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
volume create: vol: failed: Glusterfs is not supported on brick: 172.17.0.3:/mnt/brick.
  
Setting extended attributes failed, reason: Operation not permitted.
  
[/sourcecode]
  
From above error it looked as setting up extended attributes are not supported, which is a basic need to use GlusteFS. So I tried to test them manually. I was able to set extended attributes in _user_ namespace but not in _trusted_ namespace.
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
bash-4.2# yum install attr -y
  
bash-4.2# setfattr -n user.foo1 -v "bar" a
  
bash-4.2# touch a; setfattr -n trusted.foo1 -v "bar" a
  
setfattr: a: Operation not permitted
  
[/sourcecode]
  
<span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; font-size: 14px; line-height: 1.5em;">With some internet search I figured out that <strong>CAP_SYS_ADMIN</strong> is needed for setting up extended attributes in <em>trusted</em> namespace and to get that inside docker we need to run an image with <em>&#8211;privileged=true</em> option like</span>
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ docker run &#8211;privileged=true -i -t mattdm/fedora /bin/bash
  
[/sourcecode]
  
With that I was able to create the volume and start it
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
bash-4.2# gluster volume create vol 172.17.0.3:/mnt/brick/ force
  
bash-4.2# gluster volume start vol
  
[/sourcecode]
  
But when I tried to mount the volume I got following error:-
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
E [mount.c:267:gf\_fuse\_mount] 0-glusterfs-fuse: cannot open /dev/fuse (No such file or directory)
  
[/sourcecode]
  
this turned out to be image specific problem, which I am using (mattdm/fedora). I had to _mknod for /dev/fuse_
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
bash-4.2# mknod /dev/fuse c 10 229
  
[/sourcecode]
  
and after that I was able to mount volume.
  
On Fedroa 20 for docker version 0.7.6 the default storage driver for docker is device-mapper on which extended attributes are supported. AUFS storage driver does not support extended attributes as of now.I have tried with _btrfs_ storage driver with docker 0.8 as well and was able to use GlusterFS. To use _btrfs _storage driver, we need to start docker daemon with following command :-
  
[sourcecode language=&#8221;text&#8221; gutter=&#8221;false&#8221;]
  
$ docker -d -s btrfs
  
[/sourcecode]
  
Above will only work if Docker is running on a _btrfs_ partition already prepared by the host system.