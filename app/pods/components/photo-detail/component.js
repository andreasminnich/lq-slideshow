import Ember from 'ember';

const ANIMATE = {
  TO_LEFT: 'toLeft',
  TO_RIGHT: 'toRight',
  TO_UP: 'toUp',
  TO_DOWN: 'toDown'
}

export default Ember.Component.extend({

  direction: ANIMATE.TO_LEFT,

  keyDown: function(e) {
    switch (e.keyCode) {
      case 40:
        this.set('direction', ANIMATE.TO_DOWN);
        this.send('next', this.get('photo'));
        break;
      case 39:
        this.set('direction', ANIMATE.TO_LEFT);
        this.send('next', this.get('photo'));
        break;
      case 38:
        this.set('direction', ANIMATE.TO_UP);
        this.send('next', this.get('photo'));
        break;
      case 37:
        this.set('direction', ANIMATE.To_RIGHT);
        this.send('prev', this.get('photo'));
        break;
    }
  },

  focusOnInit: Ember.on('didInsertElement', function() {
    Ember.run.schedule('afterRender', () => this.focusComponent());
  }),
  focusOnChange: Ember.observer('photo.id', function() {
    this.focusComponent();
  }),

  focusComponent: function() {
    this.$().attr({ tabindex: 1 }).focus()
  },


  actions: {
    prev: function(photo) {
      this.sendAction('load-prev', photo);
    },
    next: function(photo) {
      this.sendAction('load-next', photo);
    }
  }
});
