const app = new Vue({
    el: '#root',

    data: {
        emails: []
    },

    methods: {

    },

    created: function() {

        for (let i = 0; i < 10; i++) {

            // make request for a random email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                this.emails.push(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        }

    }

});