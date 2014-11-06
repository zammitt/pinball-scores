Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('scores'); }
});

Router.route('/', {name: 'highScores'});
Router.route('/my-scores', {name: 'myScores'});
