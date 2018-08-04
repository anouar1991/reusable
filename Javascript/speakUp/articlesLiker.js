/**
 * usage :
 *     -takes all articles
 *     -checks if already liked
 *     -checks if it is positive or null
 *     -like the post
 * */
$.each($('article'), function (e, art) {
    let voteCount = $(art).find('.vote-count span').text()
    let voteButton = $(art).find('.js-vote-up > a')
    let isSelected = voteButton.hasClass('selected');
    let isPositif = function () {
        return parseInt(voteCount) >= 0;
    }

    if (!isSelected && isPositif()) {
    console.log('voteCount:' + voteCount + ' isSelected: ' + isSelected + '  clicked')
    setTimeout(function () {
        voteButton[0].click()
    }, 500)
}
})