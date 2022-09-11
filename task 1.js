Vue.component('global', {
    template: '<div>Registration of global component. </div>'
});
var component1 ={
    template: '<div><global></global>Component 1 is global</div>',};
var component2 ={
        template: '<div><component1></component1>Component 2 is local. </div>',};

var app = new Vue({
    el: '#app',
    data: {
        text: 'Component 1 is used inside component 2',
    },

    components: {
        component1,
        component2
    },
});