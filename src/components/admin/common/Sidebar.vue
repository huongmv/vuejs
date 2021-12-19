<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span> -->
            AdminLTE 3
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> -->
                    img
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
            <i class="fas fa-search fa-fw"></i>
        </button>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library -->
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <!-- <i class="right fas fa-angle-left"></i> -->
                            </p>
                        </a>
                        <!-- <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="./index.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Dashboard v1</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="./index2.html" class="nav-link active">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Dashboard v2</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="./index3.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Dashboard v3</p>
                                </a>
                            </li>
                        </ul> -->
                    </li>
                    <!-- Nav Item - User -->
                    <li class="nav-item">
                        <router-link to="/admin/product/list" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <span>Product list</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-copy"></i>
                            <p>
                                User Manager
                                <i class="fas fa-angle-left right"></i>
                                <!-- <span class="badge badge-info right">6</span> -->
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- Nav Item - User -->
                            <li class="nav-item">
                                <router-link to="/admin/userList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <span>User List</span>
                                </router-link>
                            </li>
                            <!-- Nav Item - Tables -->
                            <li class="nav-item">
                                <router-link to="/admin/productAdmin" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <span>Product List</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
export default {
    mounted () {
        // let $ = this._$

        // $("#sidebarToggle, #sidebarToggleTop").on('click', function() {
        //     $("body").toggleClass("sidebar-toggled");
        //     $(".sidebar").toggleClass("toggled");
        //     if ($(".sidebar").hasClass("toggled")) {
        //         $('.sidebar .collapse').collapse('hide');
        //     }
        // })

        // // Close any open menu accordions when window is resized below 768px
        // $(window).resize(function() {
        //     if ($(window).width() < 768) {
        //         $('.sidebar .collapse').collapse('hide');
        //     }
        // })

        // // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        // $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        //     if ($(window).width() > 768) {
        //         var e0 = e.originalEvent,
        //             delta = e0.wheelDelta || -e0.detail;
        //         this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        //         e.preventDefault();
        //     }
        // })

        // // Scroll to top button appear
        // $(document).on('scroll', function() {
        //     var scrollDistance = $(this).scrollTop();
        //     if (scrollDistance > 100) {
        //         $('.scroll-to-top').fadeIn();
        //     } else {
        //         $('.scroll-to-top').fadeOut();
        //     }
        // })

        // // Smooth scrolling using jQuery easing
        // $(document).on('click', 'a.scroll-to-top', function(e) {
        //     var $anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: ($($anchor.attr('href')).offset().top)
        //     }, 1000, 'easeInOutExpo');
        //     e.preventDefault();
        // })
    }
}
</script>
