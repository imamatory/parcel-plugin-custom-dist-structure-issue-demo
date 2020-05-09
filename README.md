# Setup
```
npm i
npm run start # start parcel in watch mode
npm run serve # start server to serve static files
```
# Steps to reproduce issue with assets links
* Open http://localhost:5000/pages/
* Open console in dev tools
* Open in file in editor `src/layout/layout.pug`
* Start sequentialy update the content of the file (for example comment and uncomment strings)
* Then you should see live updates in dev toosl console and after few updates you see error like
`GET http://localhost:5000/static/common.3ccb24e6.js 404`
I have this error usually after 5-15 updates (probably it depends on size of styles to compile but i don't really sure)

