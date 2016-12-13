$(function() {

  // your code will go here
  // https://www.codeschool.com/users/s_cot1983.json
  $.ajax({
		url: 'https://www.codeschool.com/users/s_cot1983.json',
		dataType: 'jsonp',
		success: function(response){
			console.log('response',response.courses.completed);
			addBadges(response.courses.completed)
		}
	  
  });
  function addBadges(courses) {
	  var badges = $('#badges');
	  courses.forEach(function(course){
		var $course = $('<div />', {'class': 'course'}).appendTo(badges);
		  $('<h3 />', {text: course.title}).appendTo($course);
		  $('<img />', {src: course.badge}).appendTo($course);
		  $('<a />', {
			  href: course.url, 
			  target: '_blank', 
			  'class': 'btn btn-primary',
			  text: 'See Course'}).appendTo($course);
	  });
  }
  

});
