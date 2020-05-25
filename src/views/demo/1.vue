<template>
    <div>
        <header class="header">
            <div class="header-top flex flex-bet inner">
                <div class="w32 header-logo">
                    <p class="img-logo"><img src="../../images/top/TX15mWZA89.png" class="img-logo" alt="レガシィマネジメントグループ" width="295" height="65"></p>
                    <p class="title">相続の不安を専門家が解決するプラットフォーム</p>
                    <a class="link-legacy" href="http://legacy.gr.jp/" target="_blank" rel="noopener noreferrer">
                        <img src="../../images/top/logo.jpg" alt="レガシィマネジメントグループ" width="230" height="20">
                    </a>
                </div>
                <div class="w68 header-content d-flex flex-column justify-content-end">
                    <div class="flex w-100">
                        <div class="header-content-left header-content-user">
                            <div class="user-info" v-if="isAuthenticated">
                                <span class="fullname">{{ currentUser.lastName }} {{ currentUser.firstName }}様専用画面</span>
                                <span class="btn-logout" style="margin-left: 10px" @click="logout">ログアウト</span>
                            </div>
                            <div class="register-info" v-else>
                                <span class="btn-register" style="margin-right: 10px" @click="registerEmail">無料会員登録</span>
                                <span class="btn-logout" @click="openLoginDialog">ログイン</span>
                            </div>
                        </div>
                        <div class="header-content-right header-content-inform">
                            <ul>
                                <li>
                                    <div class="inquiry inquiry-left lf">
                                        <router-link to="/contact" >
                                            <span><i class="el-icon-message"></i>問い合わせ</span>
                                        </router-link>
                                    </div>
                                    <div class="logo-header inquiry-right lf logo-header-not-login">
                                        <div class="logo-header-not-lg">
                                            <div class="logo-header-not-lg-l lf">
                                                <p class="colorCCC"><span class="left lf">相続発生のお客様</span><span class="right lf">無理相談</span></p>
                                                <p class="logo-header-not-lg-phone"><i class="el-icon-phone"></i> 0120-00-8377</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav-cl class="w-100" v-if="!hiddenNavMenu"></nav-cl>
                </div>
            </div>
        </header>
        <!-- Login Dialog -->
        <Login :dialogVisible="isOpenLoginDialog" />
        <!--register-->
        <register-email :dialogVisible="isOpenRegisterDialog"></register-email>
        <!--register-->
    </div>
</template>
<script>
    import Nav from './Nav.vue'
    import Login from '../../views/pages/client/login/Login.vue'
    import { mapGetters } from 'vuex'
    import { LOGOUT_CLIENT, SET_OPEN_LOGIN_DIALOG, SET_OPEN_REGISTER_DIALOG } from '@/store/actions.type'
    import RegisterEmail from '@/views/pages/client/register_email/RegisterEmail'
    export default {
        name: 'header-top',
        data () {
            return {
                dialogVisible: false
            }
        },
        components: {
            'nav-cl': Nav,
            Login,
            'register-email': RegisterEmail
        },
        computed: {
            ...mapGetters(['currentUser', 'isAuthenticated', 'isOpenLoginDialog', 'hiddenNavMenu', 'isOpenRegisterDialog'])
        },
        methods: {
            logout () {
                this.$store.dispatch(LOGOUT_CLIENT).then(() => {
                    this.$router.push({ name: 'portal' })
                })
            },
            openLoginDialog () {
                this.$store.dispatch(SET_OPEN_LOGIN_DIALOG, true)
            },
            register () {
                const path = `/member/register`
                if (this.$route.path !== path) {
                    this.$router.push(path)
                }
            },
            registerEmail () {
                this.$store.dispatch(SET_OPEN_REGISTER_DIALOG, true)
            }
        },
        mounted () {
            let hiddenNavMenu = this.hiddenNavMenu
            let $ = this._$
            /******************************************
             初期処理
             ******************************************/
            let winW = $(window).width()
            let winH = $(window).height()
            // windowのスクロール位置
            let headerHeight = $('.header').outerHeight()
            $('.btn-sub-menu').on('click', function () {
                $('.v-modal').css({
                    'z-index': 'unset'
                })
            })
            /* スマホ */
            if (winW <= 768) {
                $('.gnav,.gnav-menu').height(winH - headerHeight)
                $('.btn-menu,.gnav-bg').on('click', function () {
                    $('.gnav').toggleClass('on')
                    $('.submenu').slideUp()
                })
            }
            /******************************************
             window load
             ******************************************/
            $(window).on('load', function () {
            })
            /******************************************
             window resize
             ******************************************/
            $(window).on('resize', function () {
                winW = $(window).width()
                winH = $(window).height()
                $('.header, .gnav').css({
                    'width': winW
                })
            })
            /******************************************
             window scroll
             ******************************************/
            $(window).on('scroll', function () {
                if (hiddenNavMenu) {
                    return
                }

                let winScrolltop = $(window).scrollTop()
                headerHeight = $('.header').outerHeight()
                let winW = $(window).width()
                let winH = $(window).height()
                if (winScrolltop > 140) {
                    if (winW > 600 && winH > 400) {
                        $('.header-top .header-content .gnav').css({ 'position': 'fixed', 'top': 0, 'max-width': '650.08px' }).show(1000)
                        $('.header-top .header-content .gnav ul.submenu').css({ 'min-width': '900px', 'left': 'unset', 'right': '4%' })
                        $('.header-top .header-logo p').css({ 'text-align': 'left' })
                        $('.header-top .header-logo p.img-logo').css({
                            'position': 'fixed',
                            'top': 0,
                            'max-width': '308.91px',
                            'max-height': '65px',
                            'min-width': '326.91px'
                        }).show(1000)
                    }
                }
                if (winScrolltop < 170) {
                    $('.header-top .header-content .gnav').css({ 'position': 'unset', 'top': 'unset', 'max-width': 'unset' })
                    $('.header-top .header-content .gnav ul.submenu').css({ 'min-width': 'unset', 'left': 0, 'right': 0 })
                    $('.header-top .header-logo p').css({ 'text-align': 'center' })
                    $('.header-top .header-logo p.img-logo').css({
                        'position': 'unset',
                        'top': 'unset',
                        'max-width': 'unset',
                        'max-height': 'unset',
                        'min-width': 'unset'
                    })
                }
            })
            /* tab切り替え */
            $('.tab-btn').click(function () {
                // セレクタ設定
                var thisElm = $(this)
                var thisTabWrap = thisElm.parents('.tab-wrap')
                var thisTabBtn = thisTabWrap.find('.tab-btn')
                var thisTabContents = thisTabWrap.find('.tab-contents')
                // current class
                var currentClass = 'current'
                // js-tab-btn current 切り替え
                thisTabBtn.removeClass(currentClass)
                thisElm.addClass(currentClass)
                // クリックされた tabが何番目か取得
                var thisElmIndex = thisTabBtn.index(this)
                // js-tab-contents 切り替え
                thisTabContents.removeClass(currentClass)
                thisTabContents.eq(thisElmIndex).addClass(currentClass)
            })
        }
    }
</script>
<style>
    @import "../../assets/css/client.css";
    .header {
        clear: both;
        z-index: 999
    }
    .header-content {
        overflow: hidden;
    }
    .user-info .fullname, .btn-login {
        background-color: #a5272a;
        color: #ffffff;
        font-weight: bold;
        padding: 0.2em 0.5em;
        text-align: center;
        border-radius: 5px;
    }
    .btn-login {
        padding: 0.2em 1.1em;
    }
    .user-info{
        padding: 15px 0;
    }
    .register-info {
        padding-bottom: 15px;
    }
    .register-info .btn-register:hover {
        cursor: pointer;
    }
    .user-info .btn-logout,
    .register-info .btn-logout,
    .inquiry .btn-logout{
        color: #8a0602;
        border: 1px solid #8a0602;
        font-weight: bold;
        padding: 0.2em 0.5em;
        text-align: center;
        border-radius: 5px;
    }
    .user-info .btn-logout,
    .register-info .btn-logout{
        cursor: pointer;
    }
    .user-info .btn-logout:hover {
        color: #a5272a;
    }

    .register-info .btn-register{
        background-color: #a5272a;
        color: #ffffff;
        font-weight: bold;
        padding: 0.2em 1.1em;
        text-align: center;
        border-radius: 5px;
        margin-right: 10px;
    }
    .header-content-inform .inquiry {
        text-align: center;
    }
    .header-content-inform .inquiry a{
        font-size: 14px;
        text-align: left;
        font-style: normal;
        color: rgb(138, 6, 2);
        overflow: visible;
        font-weight: bold;
    }
    .header-content-inform .logo-header p{
        font-size: 10px;
        color: #c7bf93;
        padding-left: 10px;
    }
    .header-content-inform, .header-content-user {
        position: relative;
    }
    /*.header-content-inform .inquiry,*/
    /*.header-content-inform .logo-header{*/
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*}*/
    .header-content-user div.user-info,
    .header-content-user div.register-info {
        float: right;
        width: 100%;
        position: absolute;
        bottom: 0px;
    }
    .header-content-inform .logo-header{
        right: 0;
    }
    .header-content-inform .logo-header svg{
        float: right;
    }
    .header-logo {
        position: relative;
        text-align: center;
    }
    .header-logo a {
        display: block;
        height: 20px;
        text-align: center;
    }
    .header-logo p.title {
        width: 100%;
        text-align: center;
    }
    .header-logo p.img-logo {
        width: 100%;
        text-align: center;
        background-color: #ffffff;
    }
    .header-logo svg {
        bottom: 40px;
    }
    .header-logo p {
        font-size: 13px;
        line-height: unset;
    }
    .logo-header-not-login {
        background: #a5272a;
    }
    .header-content-inform .logo-header p.colorCCC{
        color: #cccccc;
    }
    .logo-header-not-lg .logo-header-not-lg-l {
        height: auto;
        position: relative;
        width: 100%;
    }
    .logo-header-not-lg-l p.colorCCC {
        padding-top: 5px;
        font-size: 10px;
    }

    .logo-header-not-lg-l p.colorCCC span.left{
        width: 65%;
    }
    .logo-header-not-lg-l p.colorCCC span.right{
        width: 35%;
    }
    .logo-header-not-lg .logo-header-not-lg-r{
        width: 35%;
        min-height: 50px;
    }
    .logo-header-not-lg-r {
        position: relative;
    }
    .logo-header-not-lg-r button{
        padding: 5px 8px;
        border-radius: 2px;
        border: none;
        position:absolute;
        bottom: 5px;
        color: #000000;
    }
    .header-content-inform .logo-header p {
        line-height: unset;
    }
    .header-content-inform .logo-header p.logo-header-not-lg-phone {
        color: #ffffff;
        font-size: 12px;
    }
    .logo-header-not-lg-phone i.el-icon-phone{
        background: #a5272a;
        color: #ffffff;
    }
    .header-content {
        font-size: 14px;
    }
    .header-content-left {
        width: 55%;
        position: relative;
        right: 0;
    }
    .header-content-right {
        width: 45%;
        position: relative;
        right: 0;
    }
    .inquiry-left span{
        background: #887862;
        padding: 4px 15px;
        color: #ffffff;
        font-weight: 400;
    }
    .inquiry-left i.el-icon-message {
        font-size: 16px;
        margin-right: 5px;
    }
    .inquiry-left {
        position: absolute;
        bottom: 15px;
        width: 50%;
    }
    .inquiry-right {
        position: absolute;
        bottom: 12px;
        width: 50%;
    }
    .btn-sub-menu {
        margin-top: 4px;
    }
    .user-info .fullname,
    .register-info .btn-register{
        border: 1px solid #a5272a
    }
    .gnav-menu li.gnav-menu-item {
        display: inline-block;
        height: 65px;
    }
    .nav-smart-phone .gnav-menu-item p{
        font-size: 18px;
        padding-top: 10px;
    }
    .nav-smart-phone .gnav-menu-item .submenu li.submenu-item p{
        font-size: 14px;
    }
    .nav-smart-phone li.first-child {
        min-height: 45px;
    }
    @media screen and (max-width:940px){
        .inquiry-left span {
            padding: 4px 15px;
        }
        .header-logo, .header-logo svg, .header-logo p {
            width: 100%;
        }
        .header-content-inform .inquiry a {
            font-size: 10px;
        }
    }
    @media screen and (max-width:768px){
        .header-logo, .header-logo svg, .header-logo p {
            width: 100%;
        }
        .header-content-inform .inquiry a {
            font-size: 10px;
        }
        .header-logo svg {
            bottom: 60px;
        }
    }
    @media screen and (max-width:550px){
        .logo-header-not-lg-l p.colorCCC span{
            font-size: 8px;
        }
        .header-content-inform .logo-header p.logo-header-not-lg-phone {
            font-size: 9px;
        }
        .header-content-inform .logo-header {
            right: 21%;
        }
        .header-content-inform .inquiry {
            text-align: right;
        }
        .inquiry-left {
            bottom: 17px;
            left: 4%;
            width: 40%;
        }
        .inquiry-right {
            width: 32%;
        }
        .header-content-left .user-info {
            text-align: center;
        }
        .inquiry-left span {
            padding: 7px 10px;
            font-size: 12px;
        }
        .register-info .btn-register,
        .user-info .btn-logout,
        .register-info .btn-logout,
        .user-info .fullname,
        .btn-login {
            font-size: 12px;
        }
        .inquiry-left i.el-icon-message{
            font-size: 16px;
        }
        .header-content-inform .inquiry a {
            font-size: 8px;
        }
        .register-info .btn-register {
            padding: 0.2em 0.5em;
        }
        .gnav {
            display: block;
            max-height: 45px !important;
        }
        .header-content-left {
            width: 100%;
        }
        .header-content-right {
            width: 100%;
        }
        .header-top .header-content .flex {
            min-height: 80px;
        }
        .nav-height {
            height: 45px;
        }
        .nav-smart-phone li.gnav-menu-item {
            height: unset;
        }
    }
    @media screen and (max-width:420px){
        .inquiry-left {
            bottom: 17px;
            left: 4%;
        }
        .header-content-left .user-info,
        .header-content-user .register-info{
            text-align: center;
        }
        .register-info .btn-register {
            padding: 0.2em 0.5em;
        }
        .header-content-inform .inquiry a {
            font-size: 8px;
        }
        .header-content-inform .logo-header svg {
            width: 80px;
        }
        .gnav {
            display: block;
            max-height: 45px !important;
        }
        .inquiry-left i.el-icon-message{
            font-size: 14px;
        }
        .nav-height {
            height: 45px;
        }
        .nav-smart-phone li.gnav-menu-item {
            height: unset;
        }
    }
    @media screen and (max-width:320px){
        .inquiry-left {
            bottom: 17px;
            left: 4%;
        }
        .inquiry-right {
            width: 40%;
        }
        .header-content-inform .logo-header {
            right: 14%;
        }
        .header-content-left .user-info {
            text-align: center;
        }
        .register-info .btn-register {
            padding: 0.2em 0.5em;
        }
        .header-content-inform .inquiry a {
            font-size: 8px;
        }
        .header-content-inform .logo-header svg {
            width: 80px;
        }
        .gnav {
            display: block;
            max-height: 45px !important;
        }
        .inquiry-left span {
            padding: 7px 10px;
            font-size: 10px;
        }
        .register-info .btn-register,
        .user-info .btn-logout,
        .register-info .btn-logout,
        .user-info .fullname,
        .btn-login {
            font-size: 8px;
        }
        .inquiry-left i.el-icon-message{
            font-size: 12px;
        }
        .nav-height {
            height: 45px;
        }
        .nav-smart-phone li.gnav-menu-item {
            height: unset;
        }
    }
    @media screen and (max-width:320px) {
        .header-content-inform .logo-header{
            right: 0;
        }
        .inquiry-right {
            width: 55%;
        }
    }
    @media screen and (min-height: 250px) and (max-height:350px){
        .inquiry-left {
            bottom: 17px;
            left: 1%;
        }
        .header-content-left .user-info {
            text-align: center;
        }
        .el-drawer__body .nav-smart-phone {
            max-height: 250px;
        }
        .inquiry-left span {
            font-size: 12px;
        }
        .logo-header-not-lg-l p.colorCCC {
            padding-top: unset;
        }
        .register-info .btn-register,
        .user-info .btn-logout,
        .register-info .btn-logout,
        .user-info .fullname,
        .btn-login {
            font-size: 8px;
        }
        .inquiry-left span,
        .inquiry-left i.el-icon-message{
            font-size: 8px;
        }
        .nav-smart-phone li.gnav-menu-item {
            height: unset;
        }
    }
    @media screen and (min-height: 351px) and (max-height:400px){
        .el-drawer__body .nav-smart-phone {
            max-height: 350px;
        }
        .nav-height {
            height: 45px;
        }
    }

    @media screen and (min-height: 401px) and (max-height:450px){
        .el-drawer__body .nav-smart-phone {
            max-height: 380px;
        }
        .nav-height {
            height: 45px;
        }
    }

    @media screen and (min-height: 451px)  and (max-height:510px){
        .el-drawer__body .nav-smart-phone {
            max-height: 430px;
        }
        .nav-height {
            height: 45px;
        }
    }

    @media screen and (min-height: 510px)  and (max-height:600px){
        .el-drawer__body .nav-smart-phone {
            max-height: 480px;
        }
    }

    @media screen and (min-height: 601px)  and (max-height:650px){
        .el-drawer__body .nav-smart-phone {
            max-height: 550px;
        }
        .gnav-menu li.gnav-menu-item {
            height: unset;
        }
    }

    @media screen and (min-height: 651px)  and (max-height:700px){
        .el-drawer__body .nav-smart-phone {
            max-height: 600px;
        }
    }

    @media screen and (min-height: 701px)  and (max-height:1100px){
        .el-drawer__body .nav-smart-phone {
            max-height: 650px;
        }
        .gnav-menu li.gnav-menu-item {
            height: unset;
            padding-bottom: 5px;
        }
        .inquiry-left span {
            padding: 6px 15px;
        }
    }

</style>
