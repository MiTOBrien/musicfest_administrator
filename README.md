# MusicFest Administrator (Back End)

## Preview
![Front End Image](https://github.com/Mood-Boost/mood_boost_be/blob/main/images/New%20Recording%20-%201_17_2025%2C%204_08_07%20PM-high.gif)

MusicFest Administrator is a tool to help people running music festivals.  It allows you to get a full list/schedule of all performing acts, a schedule for a specific attendee, and to delete artists from specific schedule slots.

This is the backend portion of the application that contains the database for user accounts, shows/acts performing, and schedules that are used inside the front end application.  The MusicFest Administrator Front End can be found [here](https://github.com/MiTOBrien/musicfest_administrator).

### Deployed Site
- Coming soon

## Getting Started
Clone down the resposity to your location machine, cd into the direcotry and run: 
- bundle install
- rails db:{drop,create,migrate,seed} or rails db:reset

At this point you can run the backend and run the test suite or test backend functionality by launching the server from the command line:
- rails s or rails server

To see the app fully functioning you will also need to clone down the front end and run that as well.

## Technology Used

- Ruby v3.2
- Rails v7.1
- PostgreSQL
- JSONAPI-Serializer*
- rack-cors

*These are included as gems and installed when bundle install is run from the command prompt.

## Database Creation/Initialization

![Database Schema](https://github.com/Mood-Boost/mood_boost_be/blob/main/images/schema.png)

From the command prompt run:
- rails db:{drop,create,migrate,seed} or rails db:reset

## Sample Requests/Responses

### GET /api/v1/users
```json
{
  "data": [
    {
      "id": "19",
      "type": "user",
      "attributes": {
        "username": "default",
        "first_name": "Default",
        "email": "default@gmail.com"
      }
    },
    {
      "id": "20",
      "type": "user",
      "attributes": {
        "username": "apu_nahasapeemapetilon",
        "first_name": "Apu",
        "email": "apu.nahasapeemapetilon@example.com"
      }
    }
  ]
}
```
### GET api/v1/users/20/activities?summary=true
```json
{
    "activity_summary": {
        "View a Quote": 11,
        "View Breathing Guide": 2,
        "View a Joke": 1
    }
}
```
### POST api/v1/users/19/activities
```json
{
    "user_activity": {
        "id": 159,
        "user_id": 19,
        "activity_id": 4,
        "created_at": "2025-01-18T00:05:36.364Z",
        "updated_at": "2025-01-18T00:05:36.364Z"
    }
}
```
### POST /api/v1/users
```json
{
    "data": {
        "id": "31",
        "type": "user",
        "attributes": {
            "username": "stormblessed",
            "first_name": null,
            "email": "default224@gmail.com"
        }
    }
}
```

## Test Suite
- RSpec
- Factory Bot
- Faker
- Shoulda-Matchers
- SimpleCov

To run the RSpec tests from the command prompt run: 
- bundle exec rspec spec

## Contributors
- Danielle Cardona [github](https://github.com/dcardona23) [LinkedIn](https://www.linkedin.com/in/danielle-cardona-se/)
- Karl Fallenius [github](https://github.com/SmilodonP) [LinkedIn](https://www.linkedin.com/in/karlfallenius/)
- Michael O'Brien [github](https://github.com/MiTOBrien) [LinkedIn](https://www.linkedin.com/in/michaelobrien67/)
- Paul Knapp [github](https://github.com/Paul-Knapp) [LinkedIn](https://www.linkedin.com/in/paul-m-knapp/)
- Terra Manning [github](https://github.com/TDManning) [LinkedIn](https://www.linkedin.com/in/terra-manning/)