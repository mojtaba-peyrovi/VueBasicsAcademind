new.filter('uppercase', function(value){
    return value.toUpperCase();
});



new Vue({
    el:'#app',
    data: {
        title: 'hello world!'
    },
    computed: {
        theTitle: function(){
            return this.title.toUpperCase();
        }
    }

});
