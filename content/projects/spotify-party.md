---
title: "Web App"
tag: "web"
thumbnail: "spotifyparty"
highlight: 'true'
members: {
Date: "November 2020 - February 2021",    
Type: "Study",
Team: "Martin Kohnle, Moritz Kronberger",
Role: "Django, Django-Channels, Spotify Api",
}
link: "https://github.com/kohnmart/spotify-party"
file: "docs/spotifyparty.pdf"
---

# SpotifyParty

### Python / Django / Websocket / PostgreSQL / Docker / Figma <br /> <br />

<team :members="members" :link="link" :doc="file"></team>

<br /> <br />

<image-loader height="large_wide" image="dev/spotifyparty/title"></image-loader>

## Introduction

This course was about developing an agile web application with Python and the Django framework. We decided to create an application that makes it possible to share Spotify playlists at parties. The host simply creates a live session. The guests can then join using an access code. The music selection works via a voting system. The song with the most votes is chosen in each round. Varied music is essential for a good party. The mood changes over the night and so does the music. <br /> <br />

#### Design

Every unforgettable party needs a smooth start! Creating the session and joining should be possible in a few steps. Long waiting times are an absolute no-go.
We have optimized the design for smartphones, as these are usually used at parties.
We assumed that the guests wanted to spend as little time on the app as possible during the party. Accordingly, we developed an interface that is limited to the essential features.<br /> <br />

## Welcome to the Party! <br />

SpotifyParty offers two roles at the beginning. If a host has already started a session, the guests can join using the 6-digit code.
Or you can become the host yourself. The steps to create it are described below.
A Spotify registration is necessary for this. <br /> <br />

#### Settings <br />

After the successful Spotity registration (OAuth), the app queries the user playlists and the play-back status.
Every device that the host has connected to his account and
is currently active can be used to play. The setting options are mandatory fields.
For the live feedback, the connection to the websocket is established at this point.
<br /> <br />

<image-loader height="small_portrait" image="dev/spotifyparty/first"></image-loader>

#### Start Session <br />

The session is created and ready to be started. The host can now send the access code to the guests. All guests are led into a waiting room for a joint start.
<br /> <br />

#### Live Session <br />

The session starts and the first song in the playlist is played. As long as the current song is playing,
anyone can vote for the next track. The likes are then reset accordingly.
Of course, you can skip a few songs if you don't want to look at your smartphone.
<br /> <br />

<image-loader height="small_portrait" image="dev/spotifyparty/second"></image-loader>

## Review <br />

All team members were able to meet the requirements for the app.
In the current state, all the necessary features have been implemented so that the app can function as a prototype.
The technical implementation of a Python web application was primarily required in this project. The integration of a web socket and the Spotify API was a personal requirement. The design should be considered secondary.
<br /> <br />

#### Perspective <br />

The base of the app is a good starting point for future extensions.
For example, it should be possible to configure the hard-coded preferences such as the number of tracks,
the voting time and playlists by third parties. A simple application and low entry barriers apply to all future extensions.
 <br />  <br />
 
[Go to Documentation](#top)