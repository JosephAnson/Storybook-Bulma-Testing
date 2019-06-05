import {addParameters, configure} from '@storybook/vue';

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);

// Option defaults:
addParameters({
  options: {

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,

  },
});

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);