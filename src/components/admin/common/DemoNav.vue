<template>
    <div class="d-none">
        <!-- Options -->
        <div id="nav-colors">
            Navbar
            <button id="pink" class="btn"></button>
            <button id="red" class="btn"></button>
            <button id="purple" class="btn"></button>
            <button id="blue" class="btn"></button>
            <button id="green" class="btn"></button>
            <button id="yellow" class="btn"></button>
            <button id="orange" class="btn"></button>  
        </div>
        <div id="font-colors">
            Font
            <button id="white" class="btn"></button>
            <button id="black" class="btn"></button>
        </div>
        <div id="edges">
            Edges
            <button id="rounded" class="btn">Rounded</button>
            <button id="square" class="btn">Square</button>
        </div>
        <h1>Minimal Bootstrap Navbar</h1>
        <nav class="navbar">
                <!-- Nav Header -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><span class="fa fa-home"></span><span class="link"> Home</span></a>
                </div>
                <!-- Nav Collapse -->
                <div class="navbar-collapse collapse" id="collapse-1">
                    <!-- Nav Left -->
                    <ul class="nav navbar-nav">
                        <!-- Products -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="fa fa-tags"></span><span class="link"> Products</span> <span class="fa fa-caret-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#"><span class="fa fa-tag"></span> Catalogue 1</a></li>
                                <li><a href="#"><span class="fa fa-tag"></span> Catalogue 2</a></li>
                            </ul>
                        </li>
                        <!-- Services -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="fa fa-gears"></span><span class="link"> Services</span> <span class="fa fa-caret-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#"><span class="fa fa-gear"></span> Service 1</a></li>
                                <li><a href="#"><span class="fa fa-gear"></span> Service 2</a></li>
                                <li><a href="#"><span class="fa fa-gear"></span> Service 3</a></li>
                            </ul>
                        </li>
                        <!-- About -->
                        <li><a href="#"><span class="fa fa-info-circle"></span><span class="link"> About</span></a></li>
                        <!-- Contact -->
                        <li><a href="#"><span class="fa fa-phone"></span><span class="link"> Contact</span></a></li>
                    </ul>
                    <!-- Nav Right -->
                    <form class="navbar-form navbar-right">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn"><span class="fa fa-search"></span></button>
                    </form>
                </div>
        </nav>
    </div>
</template>
<style>
@import "../../../assets/scss/nav.scss";
</style>
<script>
export default {
    mounted () {
        let $ = this._$
// Open close dropdown on click
        $('li.dropdown').click(function(){
            if($(this).hasClass('open')) {
                $(this).find('.dropdown-menu').slideUp('fast')
                $(this).removeClass('open')
            }
            else {
                $(this).find('.dropdown-menu').slideDown('fast')
                $(this).toggleClass('open')
            }
        })

// Close dropdown on mouseleave
        $('li.dropdown').mouseleave(function(){
            $(this).find('.dropdown-menu').slideUp('fast')
            $(this).removeClass('open')
        })

// Navbar toggle
        $('.navbar-toggle').click(function(){
            $('.navbar-collapse').toggleClass('collapse').slideToggle('fast')
        })

// Navbar colors
        $('#nav-colors > .btn').click(function(){
            if($(this).is('#pink')) {
                $('.navbar').css('background','linear-gradient(to right, #ff5858, #f857a6)')
                $('.dropdown-menu').css('background','#ff5858')
            }
            else if($(this).is('#red')) {
                $('.navbar').css('background','linear-gradient(to right, #d31027, #ea384d)')
                $('.dropdown-menu').css('background','#d31027')
            }
            else if($(this).is('#purple')) {
                $('.navbar').css('background','linear-gradient(to right, #41295a, #2f0743)')
                $('.dropdown-menu').css('background','#41295a')
            }
            else if($(this).is('#blue')) {
                $('.navbar').css('background','linear-gradient(to right, #396afc, #2948ff)')
                $('.dropdown-menu').css('background','#396afc')
            }
            else if($(this).is('#green')) {
                $('.navbar').css('background','linear-gradient(to right, #add100, #7b920a)')
                $('.dropdown-menu').css('background','#add100')
            }
            else if($(this).is('#yellow')) {
                $('.navbar').css('background','linear-gradient(to right, #f7971e, #ffd200)')
                $('.dropdown-menu').css('background','#f7971e')
            }
            else if($(this).is('#orange')) {
                $('.navbar').css('background','linear-gradient(to right, #e43a15, #e65245)')
                $('.dropdown-menu').css('background','#e43a15')
            }
        })

// Font colors
        $('#font-colors > .btn').click(function(){
            if($(this).is('#white')) {
                $('.navbar .fa, .link, a').css('color','white')
                $('.icon-bar').css('background','white')
            }
            else if($(this).is('#black')) {
                $('.navbar .fa, .link, a').css('color','black')
                $('.icon-bar').css('background','black')
            }
        })

// edges
        $('#edges > .btn').click(function(){
            if($(this).is('#rounded')) {
                $('.navbar, .form-control').css('border-radius','8px')
                if($(window).width() > 768) {
                    $('.dropdown-menu').css({
                        'border-bottom-right-radius':'8px',
                        'border-bottom-left-radius':'8px'
                    })
                }
            }
            else if($(this).is('#square')) {
                $('.navbar, .form-control').css('border-radius','0')
                $('.dropdown-menu').css({
                    'border-bottom-right-radius':'0',
                    'border-bottom-left-radius':'0'
                })
            }
        })
    }
}
</script>
