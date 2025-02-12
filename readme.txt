based on https://github.com/ffflorian/api-clients/tree/main/packages/absence.io


remote.mjs

apiKey: set API key in environment settings as secret
apiKeyId: set API key in environment settings as secret

userId: use getUserId endpoint to fetch it, e.g. 5b8d398e8b01fc592c6342eb
you can find the response of userid as a txt attached here

reasonId: this is a required field. If you want to add or create a different use case with a different absence there is a reasonsId.txt with the reasonsId used in our absence.
I have no use for them but added them as they could be useful for something else.

logging data can actually be commented out, this was for debugging purposes when everything was run on local with terminal and VSC, I was just too lazy to remove it.
