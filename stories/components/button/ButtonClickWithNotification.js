export default {
  name: 'Button with notification click',

  template: `<b-button @click="clickMe">Click Me</b-button>`,

  methods: {
    clickMe() {
      this.$notification.open('Clicked!!')
    }
  },
};