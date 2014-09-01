/**
 * Interface to the Course model.
 */


/**
 * Constructor to the Course object.
 *
 * @param model
 *   The model of the course document.
 */
function Course(model) {
  this.docModel = model;
}

/**
 * Converts a timestamp in seconds to a Date object.
 *
 * @param timestamp
 *   Timestamp in seconds.
 */
var convertToDate = function(timestamp) {
  return new Date(timestamp * 1000);
};

/**
 * Finds a course document for a given course_id.
 *
 * @param req
 *   The request object in a GET callback.
 * @param res
 *   The reponse object in a GET callback.
 */




module.exports = Course;