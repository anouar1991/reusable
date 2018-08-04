/**
 * Get video source and open a new window
 * usage : After the window is opened. press ctrl + s to download the video
 * */
(function() {
    videoSelector = 'video'
    videoSource = $(videoSelector).attr('src')
    window.open(videoSource, '_blank')
    return this;
})();