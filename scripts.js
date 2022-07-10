const appInstance = {
  data() {
    return {
        
        state:1,
        buttontxt: "TURN ON",
        
    };
  },
  methods: {
    controlBulb: function () {
        const lightoff = document.querySelector("#on");
        const lighton = document.querySelector("#on");
                
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
    always: function (){
        lightoff.innerHTML = '<img src="./images/bulb-off.jpg">'
      }
  },
 };

Vue.createApp(appInstance).mount("#app");
