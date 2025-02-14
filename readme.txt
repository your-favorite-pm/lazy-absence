based on https://github.com/ffflorian/api-clients/tree/main/packages/absence.io


remote.mjs

apiKey: set API key in environment settings as secret
apiKeyId: set API key in environment settings as secret

userId: use getUserId endpoint to fetch it, e.g. 5b8d398e8b01fc592c6342eb
you can find the response of userid as a txt attached here

reasonId: this is a required field. If you want to add or create a different use case with a different absence there is a reasonsId.txt with the reasonsId used in our absence.
I have no use for them but added them as they could be useful for something else.

logging data can actually be commented out, this was for debugging purposes when everything was run on local with terminal and VSC, I was just too lazy to remove it.


I managed to be even more lazy:
- create mjs file and save it anywhere on your system
- rework the script to take the apiKey and ID instead of github secrets (I'm not saying you should hardcode your credentials to the mjs file, but you could)
- create an alias in your .zshrc file, e.g. "alias start-remote='cd ~/yourdirectory && node yourscriptsname.mjs'
- run terminal and run 'start-remote'

Lazy double click via apple script (if you have set up the alias in previous step otherwise your regular cmd):
- run automator app
- add a new file with content: 
    tell application "Terminal"
          activate
          do script "start-terminal"
      end tell
- save your file and drag it to your desktop

