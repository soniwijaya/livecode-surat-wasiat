let basicTemp = `<div class="thumbnail">
                    <img :src="list.url" alt="post" style="width:100%">
                    <div class="caption">
                        <p><b>Name  {{ list.user.name }}</b></p>
                        <p><b>Email {{ list.user.email }}</b></p>
                    </div>
                </div>`

Vue.component('field-content', {
    props: ['list'],
    template: basicTemp,
})