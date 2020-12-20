$(document).ready(function () {

    let position = 0

    const slidesToShow = 1
    const slidesToScroll = 1

    const container = $('.slider-container')
    const track = $('.slider-track')
    const item = $('.slider-item-testimonials')

    const itemsCount = item.length
    const itemWidth = container.width() / slidesToShow

    const btnPrev = $('.btn--prev')
    const btnNext = $('.btn--next')

    const movePosition = slidesToScroll * itemWidth

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth
        })
    })

    btnNext.click(function () {
        position -= movePosition
        setPosition()
        checkBtns()
    })

    btnPrev.click(function () {
        position += movePosition
        setPosition()
        checkBtns()
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        })
    }

    const checkBtns = () => {
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth)
        btnPrev.prop('disabled', position === 0)
    }

    checkBtns()

    $('.burger').click(function () {
        let nav = $('.nav--mobile')
        nav.addClass('active--nav')
    })

    $(document).mouseup(function (e) {
        let activeNav = $('.active--nav')
        if (!activeNav.is(e.target) && activeNav.has(e.target).length === 0) {
            activeNav.removeClass('active--nav')
        }
    })

})