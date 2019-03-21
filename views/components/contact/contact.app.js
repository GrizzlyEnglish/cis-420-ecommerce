var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
Vue.component('sk-contact', {
  data: function() {
    return {
      name: "John Doe",
      email: {
        value: "jo@hnd.oe",
        valid: true
      },
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      selection: {
        member: "0",
        framework: "vue",
        features: []
      },
      message: {
        text: `Karoline,\n...`,
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  },
    template: `
    <div id="app">

<form class="sk-contact" @submit.prevent="submit">

  <div class="error-message">
    <p v-show="!email.valid">Oh, please enter a valid email address.</p>
  </div>

  <fieldset>
    <legend>Contact</legend>
    <div>
      <label class="label" for="name">Full Name</label>
      <input type="text" name="name" id="name" required="" v-model="name">
    </div>
    <div>
      <label class="label" for="email">Email</label>
      <input type="email" name="email" id="email" required=""
             :class="{ email , error: !email.valid }"
             v-model="email.value">
    </div>

    <div>
      <label class="label" for="textarea">Message</label>
      <textarea class="message" name="textarea" id="textarea" required="" 
                v-model="message.text" 
                :maxlength="message.maxlength"></textarea>
    </div>
    <div>
      <input type="submit" value="Send Form">
    </div>
  </fieldset>
</form>


</div>
`
});
