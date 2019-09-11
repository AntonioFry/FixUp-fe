# FixUp

### Develpers

Front-End:
[Antonio Fry](https://github.com/AntonioFry)
[Steve Rumizen](https://github.com/rumizen)

Back-End:
[Trevor Nodland](https://github.com/tnodland)
[James Cape](https://github.com/james-cape)

[Back-End Repo](https://github.com/james-cape/fixup_backend)

## Summary

FixUp is an interactive mobile app that deals with the issue of general property damage/problems. If a homeowner were to have a water leak, they could sign up with our app and then post that problem to a database of ongoing projects. As a contractor on our app you would be able to then go and swipe on the posted projects deciding on whether to take up or decline them.

## Homeowner

As a homeowner, one of the biggest features is being able to post new projects. In doing so a user is asked to provide an image, description, tag and title of the problem. Once the project is posted it will show up in the users home/active projects page.

![process of homeowner posting a new project](https://media.giphy.com/media/lTH6scZ8BkMlY22cxf/giphy.gif)

As a homeowner, when in the home/active projects page a user is able to click on individual project as well as a contractor. Doing this will take the user to a new page which displays either the information on the contractor or project depending on which one they pressed on.

![process of homeowner looking at different screens](https://media.giphy.com/media/gkEtXwlYTw7HBoD5eU/giphy.gif)

## Contractor

As a contractor, you are able to see a batch of projects that you can swipe through. Swiping right means you're willng to take the job,while swiping left means you are declining the job. Every time a swpie happens, the app is posting to a database and creating a contractor_project object. This object is what ties the homeowner to the contractor.

As a contractor, you are also able to see suggested projects based off your specialty, as well as projects where you swiped right and the homeowner has responded to you.

## Technologies

- React Native
- Expo
- TravisCI