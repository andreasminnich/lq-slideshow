import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('photos', function() {
    this.route('photo', { path: '/:photo_id' });
  });
});

export default Router;
