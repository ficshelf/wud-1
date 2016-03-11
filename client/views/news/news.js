Template.body.events({
    'change .getdata': (e) => {
        e.preventDefault();
        Session.set('Category', $(e.target).val());
        Meteor.call('getYahooNews', Session.get('Category'), function(err, response) {
			Session.set('News', response);
		});
}});


Template.news.helpers({
    result: () => {
	return (Session.get('News')) ;
}});


Template.news.onRendered(() =>  {
       $('select').material_select();
       Meteor.call('getYahooNews', Session.get('Category'), function(err, response) {
		Session.set('News', response);
	});
});
