const appInstance = {
  data() {
    return {
      bulbstate: 1,
      btnText: "TURN ON",
    };
  },
  methods: {
    bulbLogic: function () {
      this.bulbstate = !this.bulbstate;


// Control switch btn text
      if(this.btnText=="TURN ON"){
        this.btnText = "TURN OFF"
      }
      else{
        this.btnText ="TURN ON"
      }


    },
   
      
    
  },
};
Vue.createApp(appInstance).mount("#app");
