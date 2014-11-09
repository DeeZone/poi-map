poi-map
=======

A system to manage Poi resources that will be accessed through an interactive map interface. The data and the access method is decoupled as an API to allow for agnostic access.

End points:
-------
- GET /courses: A listing of all course entries

- POST /course
  Query:
    - course_type : the type course entry to create

    Required post values:
    - title : String,
    - address1 : String
    - city : String
    - country : String

    Optional post values:
    - description : String,
    - address2 : String,
    - region : String,
    - postal_code: String,
    - url : String,
    - instructor : String,

- DELETE /course
    Parameter:
      - course_id : Number
