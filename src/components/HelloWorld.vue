<template>
  <div>
     <div>
      So you want to make a complaint... 
      <br/><br/>
      Let's make this nice and easy...
      <br/><br/>
      First enter your name.
      <br/><br/>
      <input type="text" v-model="nameText" v-on:keydown="op" id="nameField">
      <span style="color:red">{{errormessage}}</span>
      <stickyButton v-on:click="next()"></stickyButton>
    </div>
    <modal></modal>

    <clippy></clippy>
            
    </div>
</template>

<script>

import clippy from '@/components/clippy'
import stickyButton from '@/components/stickyButton'
import modal from '@/components/modal'
import { EventBus } from './events.js';

import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapState([
    'Name'
  ]),
  data: function () {
      return {
        counter: 0,
        errorcount:0,
        errormessage:"",
        nameText:"",
        annoyingintro:[
          {header:"Welcome to Complaint-a-tron", 
          text:`
            <div>This form uses the revolutionary new Complain-a-tron technology</div>
            <div>
              Complain-a-tron has taken years of research to optimise the completion of complaint gathering.
            </div>
            <div>
              We will help you every step of the way to ensure that completing this form is a pleasant experience.
            </div>
          `
        },
        {header:"Welcome to Complaint-a-tron", 
          text:`
            <div>As you carry on filling in the form. Keep your eyes peeled for "Mona" our on page helper.</div>
            <div>"Mona" will always be ready with helpful hints</div>
          `
        },
        {header:"Welcome to Complaint-a-tron", 
          text:`
            <div>Watch out for robots</div>
            <div>For safety and security purposes we will be constantly scanning for robot activity you may be asked to validate that youb are not a robot</div>
          `
        },
        {header:"Welcome to Complaint-a-tron", 
          text:`
            <div>!! WARNING!!!!</div>
            <div>This is a serious process. Any partially completed forms will be regarded as a waste of government time which you may be charged for.</div>
            <div>We may contact the authorities to re-capture wasted costs of this type</div>
          `
        }
        ],
        modaltext:"",
        modalheader:""
      }
    },
    created: function () {
      
      // `this` points to the vm instance
      this.suggestion();
    },
    methods: {
      op:function(e){
        if(this.counter<this.annoyingintro.length){
          this.modal(this.annoyingintro[this.counter].header, this.annoyingintro[this.counter].text);
          this.counter++;
          $("#myModal").on('hidden.bs.modal', function () {
            $("#nameField").focus();
          });
          $("#myModal").on('show.bs.modal', function () {
            $("#nameField").blur();
          });
          return false;
        }
      },
      modal: function(header, text){
        EventBus.$emit('showModal', header, text);
      },
      next:function(){
          if(this.nameText===""){
              this.errormessage="*"
              EventBus.$emit('speak', "I think you messed up. You've not entered your name.");
              return;
          }
          switch(this.errorcount){
            case 0:
              this.errormessage="*"
              EventBus.$emit('speak', "check your work, dude. It's your own name, you should know it!!");
              break;
            case 1:
              this.modal("Error!!!","Please check you have actually entered your name.<br/><br/>A error was quite clearly indicated<br/><br/>It is important you pay attention when errors happen.<br/><br/>");
              break;
            case 2:
              this.modal("Thank you.", "Excellent. Your name - " + this.nameText + " - has been accepted, press Next to continue.");
              EventBus.$emit('speak', "We're good to go!!");
              break;
            default:
              this.$store.dispatch('SET_NAME', this.nameText)
              EventBus.$emit('showLoadingScreen', "Email");
          }
          this.errorcount++;

      },
      suggestion () {
        const self = this,
        interval = Math.floor(Math.random() * 100000) + 3000;
        this.interval = setInterval(function() { 
            clearInterval(self.interval);
            EventBus.$emit("suggest");
            self.suggestion() 
          }, interval);
        
      }

    },
    components: {
      clippy: clippy,
      stickyButton: stickyButton,
      modal: modal
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
