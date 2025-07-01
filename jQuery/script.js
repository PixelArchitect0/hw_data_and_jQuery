const question = $(".question");

question.on('click', function() {
    $(".question").removeClass('active')
    $(this).addClass('active');
    const answer = $(this).next(".answer");
    $(".answer").slideUp();
    answer.slideDown(`${answer}`)

});