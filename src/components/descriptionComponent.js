export const descriptionComponent = {
    template: '#description',
    props: {
        text: {
            validator: function (val) {
                // text can be object (an array) or undefined (initially)
                return val === undefined || typeof val === 'object';
            },
            required: true
        }
    },
    ready: function () {
        // console.log('descriptionComponent ready!');
    }
};
