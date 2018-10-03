---
id: 1398
title: 'Bangalore Docker Meetup #14'
date: 2015-08-28T12:08:32+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1398
permalink: /2015/08/28/bangalore-docker-meetup-14/
categories:
  - docker
  - fedora
  - geek
  - learning
  - Uncategorized
tags:
  - bangalore
  - docker
  - fedora
  - geek
  - linux
---
As planned in [previous meetup](http://www.meetup.com/Docker-Bangalore/events/223408776/), this time we arranged all the networking related talks. We covered topics from basics to advance. We looked at current state of Docker Networking and how it going to evolve in near future.  The meetup started with Q & A session, in which few participants discussed how they are using Docker in production.
  


<div style="margin-bottom: 5px;">
  <strong> <a title="Docker Networking - Current Status and goals of Experimental Networking" href="//www.slideshare.net/SreenivasMakam/docker-networking-current-status-and-goals-of-experimental-networking" target="_blank">Docker Networking &#8211; Current Status and goals of Experimental Networking</a> </strong> from <strong><a href="//www.slideshare.net/SreenivasMakam" target="_blank">Sreenivas Makam</a></strong>
</div>

<div style="margin-bottom: 5px;">
</div>

After Q& A [Sreenivas Makum](https://in.linkedin.com/in/sreenivasmakam) from Cisco talked about current state of Docker networking and briefly touched experimental Docker networking. He also gave a demo at the end.
  
After the Sreenivas talk, [Lakshman](https://www.linkedin.com/pub/lakshman-kumar-vit-lakshman/16/6a5/ab) have presentation on [libnetwork](https://github.com/docker/libnetwork) He talked about how concepts like end-point, sandbox etc and plugin architecture of libnetwork.  Due to some logistic issue we could not do the demo.
   


<div style="margin-bottom:5px">
  <strong> <a href="//www.slideshare.net/neependra/docker-networking-libnetwork-lakshman-kumar" title="Docker Networking (Libnetwork) - Lakshman Kumar" target="_blank">Docker Networking (Libnetwork) &#8211; Lakshman Kumar</a> </strong> from <strong><a href="//www.slideshare.net/neependra" target="_blank">neependra</a></strong>
</div>

Next was [Rachit Arora](https://www.linkedin.com/in/rachit1arora) from IBM who briefly talked about libnetwork again and then shared his experience with multi-host networking with OVS and [Weave](https://github.com/weaveworks/weave). He also shared some performance numbers which he collected with different configurations. From his talk it was clear that performance is going to be one of the key factor while choosing the network solution for Docker in production.
   


<div style="margin-bottom:5px">
  <strong> <a href="//www.slideshare.net/neependra/docker-multi-host-networking-rachit-arora-ibm" title="Docker Multi Host Networking, Rachit Arora, IBM" target="_blank">Docker Multi Host Networking, Rachit Arora, IBM</a> </strong> from <strong><a href="//www.slideshare.net/neependra" target="_blank">neependra</a></strong>
</div>

The last talk was from [Girag](https://www.linkedin.com/in/girag) from [Bluemeric](http://bluemeric.com/) in which he talked about networking in Kubernetes. He shared  in-depth details and personally I learned new new things.
   


<div style="margin-bottom:5px">
  <strong> <a href="//www.slideshare.net/neependra/kubernetes-networking-giragadurai-vallirajan" title="Kubernetes Networking - Giragadurai Vallirajan" target="_blank">Kubernetes Networking &#8211; Giragadurai Vallirajan</a> </strong> from <strong><a href="//www.slideshare.net/neependra" target="_blank">neependra</a></strong>
</div>

Overall the technical content in this meetup was very high and everybody loved that. We got some very good feedback. Lets keep it up.In the next meetup, we would be participating in [Docker Global Hack Day #3](http://www.meetup.com/Docker-Bangalore/events/224873126/) on 19th Sept.&#8217;15.
  
There were lots of questions regarding SDN and network tunneling technologies. Networking has drastically changed in last few years. I don&#8217;t fully understand it and see other folks who are also trying to catch up. So we also decided to do an experiment to share our learning in public domain. Members from this meetup group and other community members would be collaborating on a document which would cover networking from basic to advance level. For now we decided to collaborate on [github repo](https://github.com/nkhare/cloud-networking-guide).