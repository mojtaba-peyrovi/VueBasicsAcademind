new Vue({
  el:'#app',
  data:{
  	title: 'Hello World'
  },
  methods:{
		changeTitle(){
    	this.title = 'New Title 2'
    }
  }
});
