
var app = new Vue({
    el: '#five',
    data: {
        name: 'Dao Viet Trung'
    },
    filters : {
        strUpperCase : function (data) {
            return data.toUpperCase();
        },
        lastFil : function(data){
            return data.bold();
        }
    }
});

var app = new Vue({
    el: '#app-two',
    data: {
        slogan: 'Dao Viet Trung: <font color="orange">DevFast</font>',
        className: 'text-danger',
        styleData: 'text-align: center',
    },
});  

var app = new Vue({
    el: '#app-three',
    data: {
        age : 22
    },
});

var app = new Vue({
    el: '#app-four',
    data: {
        className : "text-danger",
        textCenter: "text-align: center",
        condition: true,
    },
});

var app = new Vue({
    el: '#app-six',
    data: {
        isRed: true
    },
    methods: {
        toggleClass : function () {
            if (this.isRed == true) {
                this.isRed = false;
            } else {
                this.isRed = true;
            }
        }
    }
});

