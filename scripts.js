const appInstance = {
  data() {
    return {
        // begin with off state image
        beginshow: 'start',

        // set bulb state
        state:1,
        // switch button state
        buttontxt: "TURN ON",
        
    };
  },
  methods: {
    controlBulb: function () {
        const lightoff = document.querySelector("#on");
        const lighton = document.querySelector("#on");
                this.beginshow = 'started';
        if(this.state <= 0){
            lighton.innerHTML = ""
            lightoff.innerHTML = ""
            lightoff.innerHTML = '<img src="./images/bulb-off.jpg">'
            this.state+=1;
            this.buttontxt = "TURN ON"
        }
        else{
           
            lightoff.innerHTML = ""
            lighton.innerHTML = '<img src="./images/bulb-on.jpg" >'
            this.state-=1;
            this.buttontxt = "TURN OFF"
        }
    },
   
  },
 };

Vue.createApp(appInstance).mount("#app");
