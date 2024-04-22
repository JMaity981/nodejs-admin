
const express = require('express');
const route = express.Router();

const AuthController = require("../controllers/AuthController")

module.exports = function (route) {

    route.use((req, res, next) => {
        var uemail = req.session.useremail;
        const allowUrls = ["/login", "/auth-validate", "/register", "/signup", "/forgotpassword", "/sendforgotpasswordlink", "/resetpassword", "/error", "/changepassword"];
        if (allowUrls.indexOf(req.path) !== -1) {
            if (uemail != null && uemail != undefined) {
                return res.redirect('/');
            }

        } else if (!uemail) {
            return res.redirect('/login');
        }
        next();
    })
    

    route.get('/auth-create-password-basic', (req, res, next) => {
        res.render('auth-create-password-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-create-password-boxed', (req, res, next) => {
        res.render('auth-create-password-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-create-password-cover', (req, res, next) => {
        res.render('auth-create-password-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-create-password-modern', (req, res, next) => {
        res.render('auth-create-password-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-login-basic', (req, res, next) => {
        res.render('auth-login-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-login-boxed', (req, res, next) => {
        res.render('auth-login-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-login-cover', (req, res, next) => {
        res.render('auth-login-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-login-modern', (req, res, next) => {
        res.render('auth-login-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-logout-basic', (req, res, next) => {
        res.render('auth-logout-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-logout-boxed', (req, res, next) => {
        res.render('auth-logout-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-logout-cover', (req, res, next) => {
        res.render('auth-logout-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-logout-modern', (req, res, next) => {
        res.render('auth-logout-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-register-basic', (req, res, next) => {
        res.render('auth-register-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-register-boxed', (req, res, next) => {
        res.render('auth-register-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-register-cover', (req, res, next) => {
        res.render('auth-register-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-register-modern', (req, res, next) => {
        res.render('auth-register-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-reset-password-basic', (req, res, next) => {
        res.render('auth-reset-password-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-reset-password-boxed', (req, res, next) => {
        res.render('auth-reset-password-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-reset-password-cover', (req, res, next) => {
        res.render('auth-reset-password-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-reset-password-modern', (req, res, next) => {
        res.render('auth-reset-password-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-two-steps-basic', (req, res, next) => {
        res.render('auth-two-steps-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-two-steps-boxed', (req, res, next) => {
        res.render('auth-two-steps-boxed', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-two-steps-cover', (req, res, next) => {
        res.render('auth-two-steps-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-two-steps-modern', (req, res, next) => {
        res.render('auth-two-steps-modern', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-verify-email-basic', (req, res, next) => {
        res.render('auth-verify-email-basic', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-verify-email-cover', (req, res, next) => {
        res.render('auth-verify-email-cover', {  layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-verify-email-modern', (req, res, next) => {
        res.render('auth-verify-email-modern', {  layout: 'layouts/layout-without-nav' });
    })



    route.get('/', (req, res, next) => {
        res.render('index');
    })
    route.get('/index', (req, res, next) => {
        res.render('index');
    })
    route.get('/apps-calendar-month-grid', (req, res, next) => {
        res.render('apps-calendar-month-grid');
    })
    route.get('/apps-calendar-multi-month-stack', (req, res, next) => {
        res.render('apps-calendar-multi-month-stack');
    })
    route.get('/apps-calendar', (req, res, next) => {
        res.render('apps-calendar');
    })
    route.get('/apps-chat', (req, res, next) => {
        res.render('apps-chat');
    })
    route.get('/apps-ecommerce-cart', (req, res, next) => {
        res.render('apps-ecommerce-cart');
    })
    route.get('/apps-ecommerce-checkout', (req, res, next) => {
        res.render('apps-ecommerce-checkout');
    })
    route.get('/apps-ecommerce-order-overview', (req, res, next) => {
        res.render('apps-ecommerce-order-overview');
    })
    route.get('/apps-ecommerce-orders', (req, res, next) => {
        res.render('apps-ecommerce-orders');
    })
    route.get('/apps-ecommerce-product-create', (req, res, next) => {
        res.render('apps-ecommerce-product-create');
    })
    route.get('/apps-ecommerce-product-grid', (req, res, next) => {
        res.render('apps-ecommerce-product-grid');
    })
    route.get('/apps-ecommerce-product-list', (req, res, next) => {
        res.render('apps-ecommerce-product-list');
    })
    route.get('/apps-ecommerce-product-overview', (req, res, next) => {
        res.render('apps-ecommerce-product-overview');
    })
    route.get('/apps-ecommerce-sellers', (req, res, next) => {
        res.render('apps-ecommerce-sellers');
    })
    route.get('/apps-hr-attendance-main', (req, res, next) => {
        res.render('apps-hr-attendance-main');
    })
    route.get('/apps-hr-attendance', (req, res, next) => {
        res.render('apps-hr-attendance');
    })
    route.get('/apps-hr-create-leave-employee', (req, res, next) => {
        res.render('apps-hr-create-leave-employee');
    })
    route.get('/apps-hr-create-leave', (req, res, next) => {
        res.render('apps-hr-create-leave');
    })
    route.get('/apps-hr-department', (req, res, next) => {
        res.render('apps-hr-department');
    })
    route.get('/apps-hr-employee', (req, res, next) => {
        res.render('apps-hr-employee');
    })
    route.get('/apps-hr-holidays', (req, res, next) => {
        res.render('apps-hr-holidays');
    })
    route.get('/apps-hr-leave-employee', (req, res, next) => {
        res.render('apps-hr-leave-employee');
    })
    route.get('/apps-hr-leave', (req, res, next) => {
        res.render('apps-hr-leave');
    })
    route.get('/apps-hr-payroll-create-payslip', (req, res, next) => {
        res.render('apps-hr-payroll-create-payslip');
    })
    route.get('/apps-hr-payroll-employee-salary', (req, res, next) => {
        res.render('apps-hr-payroll-employee-salary');
    })
    route.get('/apps-hr-payroll-payslip', (req, res, next) => {
        res.render('apps-hr-payroll-payslip');
    })
    route.get('/apps-hr-sales-estimates', (req, res, next) => {
        res.render('apps-hr-sales-estimates');
    })
    route.get('/apps-hr-sales-expenses', (req, res, next) => {
        res.render('apps-hr-sales-expenses');
    })
    route.get('/apps-hr-sales-payments', (req, res, next) => {
        res.render('apps-hr-sales-payments');
    })
    route.get('/apps-invoice-add-new', (req, res, next) => {
        res.render('apps-invoice-add-new');
    })
    route.get('/apps-invoice-list', (req, res, next) => {
        res.render('apps-invoice-list');
    })
    route.get('/apps-invoice-overview', (req, res, next) => {
        res.render('apps-invoice-overview');
    })
    route.get('/apps-mailbox', (req, res, next) => {
        res.render('apps-mailbox');
    })
    route.get('/apps-notes', (req, res, next) => {
        res.render('apps-notes');
    })
    route.get('/apps-social-event', (req, res, next) => {
        res.render('apps-social-event');
    })
    route.get('/apps-social-friends', (req, res, next) => {
        res.render('apps-social-friends');
    })
    route.get('/apps-social-marketplace', (req, res, next) => {
        res.render('apps-social-marketplace');
    })
    route.get('/apps-social-video', (req, res, next) => {
        res.render('apps-social-video');
    })
    route.get('/apps-users-grid', (req, res, next) => {
        res.render('apps-users-grid');
    })
    route.get('/apps-users-list', (req, res, next) => {
        res.render('apps-users-list');
    })
    route.get('/charts-apex-area', (req, res, next) => {
        res.render('charts-apex-area');
    })
    route.get('/charts-apex-bar', (req, res, next) => {
        res.render('charts-apex-bar');
    })
    route.get('/charts-apex-boxplot', (req, res, next) => {
        res.render('charts-apex-boxplot');
    })
    route.get('/charts-apex-bubble', (req, res, next) => {
        res.render('charts-apex-bubble');
    })
    route.get('/charts-apex-candlstick', (req, res, next) => {
        res.render('charts-apex-candlstick');
    })
    route.get('/charts-apex-column', (req, res, next) => {
        res.render('charts-apex-column');
    })
    route.get('/charts-apex-funnel', (req, res, next) => {
        res.render('charts-apex-funnel');
    })
    route.get('/charts-apex-heatmap', (req, res, next) => {
        res.render('charts-apex-heatmap');
    })
    route.get('/charts-apex-line', (req, res, next) => {
        res.render('charts-apex-line');
    })
    route.get('/charts-apex-mixed', (req, res, next) => {
        res.render('charts-apex-mixed');
    })
    route.get('/charts-apex-polar', (req, res, next) => {
        res.render('charts-apex-polar');
    })
    route.get('/charts-apex-radar', (req, res, next) => {
        res.render('charts-apex-radar');
    })
    route.get('/charts-apex-radialbar', (req, res, next) => {
        res.render('charts-apex-radialbar');
    })
    route.get('/charts-apex-range-area', (req, res, next) => {
        res.render('charts-apex-range-area');
    })
    route.get('/charts-apex-scatter', (req, res, next) => {
        res.render('charts-apex-scatter');
    })
    route.get('/charts-apex-timeline', (req, res, next) => {
        res.render('charts-apex-timeline');
    })
    route.get('/charts-apex-treemap', (req, res, next) => {
        res.render('charts-apex-treemap');
    })
    route.get('/dashboards-analytics', (req, res, next) => {
        res.render('dashboards-analytics');
    })
    route.get('/dashboards-email', (req, res, next) => {
        res.render('dashboards-email');
    })
    route.get('/dashboards-hr', (req, res, next) => {
        res.render('dashboards-hr');
    })
    route.get('/dashboards-social-media', (req, res, next) => {
        res.render('dashboards-social-media');
    })
    route.get('/forms-basic', (req, res, next) => {
        res.render('forms-basic');
    })
    route.get('/forms-checkbox-radio', (req, res, next) => {
        res.render('forms-checkbox-radio');
    })
    route.get('/forms-clipboard', (req, res, next) => {
        res.render('forms-clipboard');
    })
    route.get('/forms-colorpicker', (req, res, next) => {
        res.render('forms-colorpicker');
    })
    route.get('/forms-datepicker', (req, res, next) => {
        res.render('forms-datepicker');
    })
    route.get('/forms-editor-balloon', (req, res, next) => {
        res.render('forms-editor-balloon');
    })
    route.get('/forms-editor-classic', (req, res, next) => {
        res.render('forms-editor-classic');
    })
    route.get('/forms-editor-inline', (req, res, next) => {
        res.render('forms-editor-inline');
    })
    route.get('/forms-file-upload', (req, res, next) => {
        res.render('forms-file-upload');
    })
    route.get('/forms-input-mask', (req, res, next) => {
        res.render('forms-input-mask');
    })
    route.get('/forms-input-spin', (req, res, next) => {
        res.render('forms-input-spin');
    })
    route.get('/forms-multi-select', (req, res, next) => {
        res.render('forms-multi-select');
    })
    route.get('/forms-select', (req, res, next) => {
        res.render('forms-select');
    })
    route.get('/forms-switches', (req, res, next) => {
        res.render('forms-switches');
    })
    route.get('/forms-validation', (req, res, next) => {
        res.render('forms-validation');
    })
    route.get('/forms-wizard', (req, res, next) => {
        res.render('forms-wizard');
    })
    route.get('/forms-timepicker', (req, res, next) => {
        res.render('forms-timepicker');
    })
    
    route.get('/icons-lucide', (req, res, next) => {
        res.render('icons-lucide');
    })
    route.get('/icons-remix', (req, res, next) => {
        res.render('icons-remix');
    })
    route.get('/maps-google', (req, res, next) => {
        res.render('maps-google');
    })
    route.get('/maps-leaflet', (req, res, next) => {
        res.render('maps-leaflet');
    })
    route.get('/navigation-breadcrumb', (req, res, next) => {
        res.render('navigation-breadcrumb');
    })
    route.get('/navigation-navbars', (req, res, next) => {
        res.render('navigation-navbars');
    })
    route.get('/navigation-pagination', (req, res, next) => {
        res.render('navigation-pagination');
    })
    route.get('/navigation-tabs', (req, res, next) => {
        res.render('navigation-tabs');
    })
    route.get('/onepage-landing', (req, res, next) => {
        res.render('onepage-landing', { layout:"layouts/onepage-landing.ejs"});
    })
    route.get('/product-landing', (req, res, next) => {
        res.render('product-landing', { layout:"layouts/onepage-landing.ejs"});
    })
    
    route.get('/pages-404', (req, res, next) => {
        res.render('pages-404', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/pages-coming-soon', (req, res, next) => {
        res.render('pages-coming-soon', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/pages-maintenance', (req, res, next) => {
        res.render('pages-maintenance', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/pages-offline', (req, res, next) => {
        res.render('pages-offline', { layout: 'layouts/layout-without-nav' });
    })
    
    
    route.get('/pages-account-settings', (req, res, next) => {
        res.render('pages-account-settings');
    })
    route.get('/pages-account', (req, res, next) => {
        res.render('pages-account');
    })
    route.get('/pages-contact-us', (req, res, next) => {
        res.render('pages-contact-us');
    })
    route.get('/pages-faqs', (req, res, next) => {
        res.render('pages-faqs');
    })
    route.get('/pages-pricing', (req, res, next) => {
        res.render('pages-pricing');
    })
    route.get('/pages-starter', (req, res, next) => {
        res.render('pages-starter');
    })
    route.get('/plugins-lightbox', (req, res, next) => {
        res.render('plugins-lightbox');
    })
    route.get('/plugins-scroll-hint', (req, res, next) => {
        res.render('plugins-scroll-hint');
    })
    route.get('/plugins-simplebar', (req, res, next) => {
        res.render('plugins-simplebar');
    })
    route.get('/plugins-sweetalert', (req, res, next) => {
        res.render('plugins-sweetalert');
    })
    route.get('/plugins-swiper-slider', (req, res, next) => {
        res.render('plugins-swiper-slider');
    })
    route.get('/plugins-video-player', (req, res, next) => {
        res.render('plugins-video-player');
    })
    route.get('/tables-basic', (req, res, next) => {
        res.render('tables-basic');
    })
    route.get('/tables-datatable', (req, res, next) => {
        res.render('tables-datatable');
    })
    route.get('/tables-gridjs', (req, res, next) => {
        res.render('tables-gridjs');
    })
    route.get('/tables-listjs', (req, res, next) => {
        res.render('tables-listjs');
    })
    route.get('/ui-alerts', (req, res, next) => {
        res.render('ui-alerts');
    })
    route.get('/ui-avatar', (req, res, next) => {
        res.render('ui-avatar');
    })
    route.get('/ui-buttons', (req, res, next) => {
        res.render('ui-buttons');
    })
    route.get('/ui-cards', (req, res, next) => {
        res.render('ui-cards');
    })
    route.get('/ui-collapse', (req, res, next) => {
        res.render('ui-collapse');
    })
    route.get('/ui-countdown', (req, res, next) => {
        res.render('ui-countdown');
    })
    route.get('/ui-drawer', (req, res, next) => {
        res.render('ui-drawer');
    })
    route.get('/ui-dropdown', (req, res, next) => {
        res.render('ui-dropdown');
    })
    route.get('/ui-gallery', (req, res, next) => {
        res.render('ui-gallery');
    })
    route.get('/ui-label', (req, res, next) => {
        res.render('ui-label');
    })
    route.get('/ui-lists', (req, res, next) => {
        res.render('ui-lists');
    })
    route.get('/ui-modal', (req, res, next) => {
        res.render('ui-modal');
    })
    route.get('/ui-notification', (req, res, next) => {
        res.render('ui-notification');
    })
    route.get('/ui-progress-bar', (req, res, next) => {
        res.render('ui-progress-bar');
    })
    route.get('/ui-spinners', (req, res, next) => {
        res.render('ui-spinners');
    })
    route.get('/ui-timeline', (req, res, next) => {
        res.render('ui-timeline');
    })
    route.get('/ui-tooltip', (req, res, next) => {
        res.render('ui-tooltip');
    })
    route.get('/ui-video', (req, res, next) => {
        res.render('ui-video');
    })






    route.get('/layouts-horizontal', (req, res, next) => {
        res.render('layouts-horizontal', { layout: 'layouts/layout-horizontal', title: 'Horizontal', page_title: 'Horizontal', folder: 'layouts' });
    })
    route.get('/layouts-detached', (req, res, next) => {
        res.render('layouts-detached', { layout: 'layouts/layout-detached', title: 'Detached', page_title: 'Detached', folder: 'layouts' });
    })
    route.get('/layouts-two-column', (req, res, next) => {
        res.render('layouts-two-column', { layout: 'layouts/layout-twocolumn', title: 'Two Column', page_title: 'Two Column', folder: 'layouts' });
    })
    route.get('/layouts-vertical-hovered', (req, res, next) => {
        res.render('layouts-vertical-hovered', { layout: 'layouts/layout-verti-hoverd', title: 'Vertical Hovered', page_title: 'Vertical Hovered', folder: 'layouts' });
    })
    // Authentication
    route.get('/login', (req, res, next) => {
        res.render('auth/login', { title: 'Login', layout: 'layouts/layout-without-nav', 'message': req.flash('message'), error: req.flash('error') })
    })

    // validate login form
    route.post("/auth-validate", AuthController.validate)

    // logout
    route.get("/logout", AuthController.logout);

    route.get('/register', (req, res, next) => {
        res.render('auth/register', { title: 'Register', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // validate register form
    route.post("/signup", AuthController.signup)

    route.get('/forgotpassword', (req, res, next) => {
        res.render('auth/forgotpassword', { title: 'Forgot password', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // send forgot password link on user email
    route.post("/sendforgotpasswordlink", AuthController.forgotpassword)

    // reset password
    route.get("/resetpassword", AuthController.resetpswdview);
    // Change password
    route.post("/changepassword", AuthController.changepassword);

    //500
    route.get('/error', (req, res, next) => {
        res.render('auth/auth-404', { title: '404 Error', layout: 'layouts/layout-without-nav' });
    })

}