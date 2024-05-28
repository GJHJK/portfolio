document.querySelectorAll('.progress-bar').forEach(function(bar) {
    bar.addEventListener('mouseover', function() {
        this.style.zIndex = 10;
    });
    bar.addEventListener('mouseout', function() {
        this.style.zIndex = 1;
    });
});
