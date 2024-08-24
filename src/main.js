localStorage.setItem('user-settings', '{"lastNewsCheck":"1970-01-01T00:00:00Z"}');
let deletedModal = false;
window.addEventListener('load', function () {
    setInterval(() => {
        console.log('resetting daily saves')
        localStorage.setItem('user-settings', `{"lastNewsCheck":"${new Date().toISOString()}"}`);
    }, 500);
});