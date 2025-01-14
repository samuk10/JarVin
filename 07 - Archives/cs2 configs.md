


Pode ajudar no KDE alterando pra fullscreen e etc: [https://github.com/ValveSoftware/csgo-osx-linux/issues/3274](https://github.com/ValveSoftware/csgo-osx-linux/issues/3274 "https://github.com/ValveSoftware/csgo-osx-linux/issues/3274")

### old
`SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS=0 %command% -novid -refresh 143 -console -fullscreen -w 1280 -h 1024 +exec autoexec`

### new launch option https://steamcommunity.com/sharedfiles/filedetails/?id=3113667547
```bash
xrandr --output DisplayPort-1 --mode 1280x1024 --refresh 143; %command% -w 1280 -h 1024 -freq 143 -fullscreen; xrandr --output DisplayPort-1 --mode 1920x1080 --refresh 144 ; SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS=0 %command% -novid -console +exec autoexec


[url=https://steamcommunity.com/sharedfiles/filedetails/?id=3113667547]Linux Launch Options[/url]:

```