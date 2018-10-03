---
id: 1700
title: 'Bangalore Docker Meetup #18'
date: 2016-03-01T12:41:03+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1700
permalink: /2016/03/01/bangalore-docker-meetup-18/
categories:
  - bangalore
  - devops
  - docker
  - geek
  - learning
  - logging
  - meetups
  - monitoring
tags:
  - bangalore
  - docker
  - foss
  - geek
  - linux
  - meetup
---
As decided in the [last meetup](http://neependra.net/?p=1618), we&#8217;ll discuss about the Logging and Monitoring Docker containers next time. This time our meetup was hosted at [HPE](https://www.hpe.com/in/en/home.html) office in Electronic City, Bangalore. Around 80 people attended the meetup this time.
  
After taking few questions we started with formal presentations. This time I gave the first talk but did not have any slides. I talked about importance for logging and monitoring in production. I showed outputs for _docker logs_ and _docker stats_ commands and went into some internals. Then I gave overview of [Docker Logging Drivers](https://docs.docker.com/engine/admin/logging/overview/) and showed a demo of Syslog driver. My demo with logspouts and ELK stack did not work.
  
Saifi Khan from [TensorX](http://tensorx.io/) gave the next talk on cAdvisor. He also did not have formal presentation but went deep into how cAdvisor collects the stats  from the host. He shared an an [article on cAdvisor](http://opensourceforu.efytimes.com/2015/06/monitoring-docker-infrastructure/), which got publish in one of the India&#8217;s Open Source Magazine.
  
Next was [Sreenivas Makam](https://www.linkedin.com/in/sreenivasmakam) of Cisco who talked about [Sysdig](http://www.sysdig.org/) with a very nice demo. I haven&#8217;t tried it earlier and was surprised to the very rich feature set of Sysdig. One could record the system state in a file and replay it like we do with TCPDump. It could be one stop of container Monitoring and Debugging. Recorded demos are [available at his website](https://sreeninet.wordpress.com/2016/02/27/docker-meetup-bangalore-sysdig-presentation/).
  


<div style="margin-bottom: 5px;">
  <strong> <a title="Container Monitoring with Sysdig" href="//www.slideshare.net/SreenivasMakam/container-monitoring-with-sysdig-58790785" target="_blank">Container Monitoring with Sysdig</a> </strong> from <strong><a href="//www.slideshare.net/SreenivasMakam" target="_blank">Sreenivas Makam</a></strong>
</div>

Last presentation was from [Vinay Krishna](https://in.linkedin.com/in/vinaykrishna) of SolutionIQ. Who talked about logging with FluentD.
  


<div style="margin-bottom: 5px;">
  <strong> <a title="Fluentd and docker monitoring" href="//www.slideshare.net/vin76/fluentd-and-docker-monitoring" target="_blank">Fluentd and docker monitoring</a> </strong> from <strong><a href="//www.slideshare.net/vin76" target="_blank">Vinay Krishna</a></strong>
</div>

We also had [Samantha](https://twitter.com/samantha_tse) from Digital Ocean, who was in Bangalore to interact with Developer community. Digital Ocean is setting up a Datacenter in Bangalore, which was kind of news to everyone.
  
In March Docker community would be celebrating Docker&#8217;s 3rd birthday in which we would be doing Docker 101 workshop.