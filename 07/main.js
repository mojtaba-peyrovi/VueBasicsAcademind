Vue.component('app-user', {
    template: ` <div><div class="user" v-for="user in users">
                <p>username: {{ user.username }}</p>
                </div></div> `,

    data: function(){
        return {
            users: [
                {username:'Max'},
                {username:'Chris'},
                {username:'Anna'}
            ]
        };
    }
});



new Vue({
    el:'#app',
    data: {
        title: 'hello world!'

    }

});
