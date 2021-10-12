# Less - Ethical Social Media Webapp


## Author: Hadrian Chio, WDD320
<img alt="PHP version 8.0.7" src="https://img.shields.io/badge/PHP-8.0.7-blueviolet"> <img src="https://img.shields.io/badge/JS-ES6-yellow" alt="Javascript ECMA Script 6"> <img src="https://img.shields.io/badge/React-17.0.2-red" alt="React 17.0.2">

Less is a take on a social media platform in the scope of a school project at [SAE](https://www.sae.edu/che/de/).

### Important information
Moesif Origin & CORS Changer must be installed. I'm unclear why it doesn't work without it even if I have stated cross origin allowed (make sure it is on):
https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/

You need to register a personal user to gain access to the project.

IMPORTANT:
Put the "less_webapp" folder in htdocs with only the api and static as parent folders (the react build after "npm run build").
Redirect AFTER logout is not implemented yet. To get to the login screen please copy & paste following url in the browser:
http://localhost/less_webapp/

Github repo:
https://github.com/abeerance/Less_Social_Media

````
Not implemented yet:
- Notifications
- Search
- Open images on public feed with modals
- Write comments
- Only placeholder on images
- Personal Feed doesn't show personal photos
- Personal feed picture open not implemented
- Can't use bio / username / passowrd
- Password reset
````

### Folder Structure

#### 📂  less_webapp
```
- public
    Folders after run NPM buil
```

#### src
````
- api
    PHP scripts
- assets
    Used images
- components
    The different react components
-context
    provides user context/register/login/logout
- App.js
    The react app
- index.css
    Global CSS file
- index.html
    Landing HTML
- index.js
    States where the root id is
````
