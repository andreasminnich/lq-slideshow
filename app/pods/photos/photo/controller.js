import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    prevModel: function(photo) {
      this.transitionToRoute("photos.photo", parseInt(photo.get("id")) - 1);
    },
    nextModel: function(photo) {
      this.transitionToRoute("photos.photo", parseInt(photo.get("id")) + 1);
    }
  }
});
