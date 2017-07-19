Vue.use(VueHtml5Editor, {
    showModuleName: true,
    image: {
        sizeLimit: 512 * 1024,
        upload: {
            url: '/upload'
        },
        compress: {
            width: 1000,
            height: 1000,
            quality: 80
        }
    }
});

new Vue({
    el: "#app",
    data: {
        Subject: '',
        Body: '',
        showModuleName: false
    },
    methods: {
        updateData: function(data) {
            this.Body = data
        },
        fullScreen: function() {
            this.$refs.editor.enableFullScreen()
        },
        focus: function() {
            this.$refs.editor.focus()
        },
        post: function() {
            var self = this;
            var url = '/post';
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                timeout: 60000,
                data: {
                    Subject: self.Subject,
                    Body: self.Body
                },
                error: function() { alert('Error loading'); },
                beforeSend: function() {
                    //$("#resultTable").html('<img src="/Images/loading.gif" />');
                },
                success: function(result) {
                    location.href = '/';
                }
            });
        }
    }
});