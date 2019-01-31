# Character Manager

This is ultimately going to be a character sheet manager for my own personal uses. 

## Current Functionality

* Starts an Express application on port 8080
* Has the /randomChar GET endpoint that returns a randomly generated DnD Character

## Future Functionality

* Store 5e character sheets in a datastore (Mongo, Google Cloud Datastore, Etc...)
* Retrieve character sheets
* Dynamically link other documents that can be broken out:
    * Background
    * Race
        * Sub-Race
    * Class
        * Sub-Class
    * Features
