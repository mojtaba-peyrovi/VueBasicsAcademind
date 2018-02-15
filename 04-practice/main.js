new Vue({
    el:'#app',
    data: {
        sum: 0,
        subtract: 0,
        multiply: 1,
        divide: 1,
        extension: 5
    },
    methods:{
        operator() {
            this.sum = this.sum + this.extension;
            this.subtract = this.subtract - this.extension;
            this.multiply = this.multiply * this.extension;
            this. divide = this.divide / this.extension;
        }
    }

});
