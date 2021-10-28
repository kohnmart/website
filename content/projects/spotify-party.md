---
title: "Playlist Sharing"
tag: "web"
thumbnail: "spotifyparty.jpg"
highlight: 'true'
members: {
Date: "November 2020 - February 2021",    
Martin Kohnle: "Django, Websocket, Spotipy, Docker, Design",
Moritz Kronberger: "Postgres SQL, Django, Docker, Design",
}
---

# SpotifyParty

### Python / Django / Websocket / Postgres SQL / Docker <br /> <br />

<team :members="members"></team>

<br /> <br />

The music at parties plays an important role in the mood and joy of the guests. The music genre is
usually decided by the host himself or someone with exclusive access to the playback device. A single
person's taste in music can become very monotonous and boring. Through the music voting, SpotifyParty helps to keep the mood and atmosphere positive all night long. <br /> <br />

<image-loader height="overview_image_400" image="dev/spotifyparty/title"></image-loader>

## Summary

#### Design

Every unforgettable party needs a smooth start! Creating the session and joining should be possible in a few steps. Long waiting times are an absolute no-go.
Based on the fact that guests use a smartphone rather than a PC at the party, we have optimized the app design accordingly. Of course you can also control it via the PC, but that's not fancy on a party.<br /> <br />

#### Welcome to the Party! <br />

On the homepage, SpotifyParty offers two options. If a host has already started a session, the guests can join using the 6-digit code.
With "create party" you can become the host yourself. The steps to create it are described below.
A Spotify registration is necessary for this. <br /> <br />

#### Settings <br />

After the successful Spotity registration (OAuth), the app queries the user playlists and the play-back status.
Currently, you can only choose your own playlists. Every device that the host has connected to his account and
is currently active can be used to play. The setting options are mandatory fields without which the session cannot be started.
For the live feedback, the connection to the websocket is established at this point.<br /> <br />

<image-loader height="overview_image_400" image="dev/spotifyparty/first"></image-loader>

#### Start Session <br />

The session is created and ready to be started. The host can now send the access code to the guests. All guests are led into a waiting room for a joint start.
<br /> <br />

#### Live Session <br />

The session starts and the first song in the playlist is played. As long as the current song is playing,
anyone can vote for the next track. The likes are then reset accordingly.
Of course, you can skip a few songs if you don't want to look at your smartphone.
<br /> <br />

<image-loader height="overview_image_400" image="dev/spotifyparty/second"></image-loader>

#### Review <br />

All team members were able to meet the requirements for the app that were set out at the beginning.
In the current state, all the necessary features have been implemented so that the app can function as a prototype.
For us, technical development was primary and design secondary. This area can be optimized accordingly.
<br /> <br />

#### Outlook <br />

The base of the app is a good starting point for future extensions.
For example, it should be possible to configure the hard-coded preferences such as the number of tracks,
the voting time and playlists by third parties. A simple application and low entry barriers apply to all future extensions.
<br /> <br />

Download the complete documentation:
<pdf-loader doc="docs/spotifyparty.pdf"></pdf-loader>
