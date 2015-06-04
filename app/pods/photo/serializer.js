import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizePayload: function(payload) {
    var photos = payload.map((photo, idx) => {
      return { id: idx, imageSrc: photo };
    });
    return { "photos": photos };
  }
});
