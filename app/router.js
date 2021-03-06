import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', { path: '/' }, function() {
      this.route('complete');
      this.route('incomplete');
  });
  this.route('projects',function(){
      this.route('ongoing');
      this.route('done');
      this.route('tobe');
  });
  this.route('teachers', function() {
    this.route('index');
    this.route('new');
  });
  this.route('login');
});

export default Router;
