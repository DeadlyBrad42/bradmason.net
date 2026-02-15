import data from '../data.json';

export const dataStore = {
    getData: function (callback) {
        // Data is imported statically via Vite, call callback immediately
        callback(data);
    }
};
