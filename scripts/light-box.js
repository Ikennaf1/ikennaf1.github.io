
var content_1 = '\
<div id="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>\
<div id="name_text"><h1 class="name-text"><a href="">Ike Felix</a></h1></div>\
<h3 class="text-title">September 2020</h3>\
    <p class="p-highlight">Blinds Beta now available in <a href="https://wordpress.org/" target="_blank">WordPress.org plugin repository</a></p>\
    <p class="p-text">Current version at this time: Beta version 0.0.5. <br>Blinds is a simple WordPress plugin that gives WordPress users the option to activate Night / Dark mode on\
    WordPress blogs or websites.</p>\
    <p class="p-text"><a href="https://wordpress.org/plugins/blinds" target="_blank">Get the plugin from WordPress</a><br>\
    <p class="p-highlight">Launched Blinds Beta</p>\
    <p class="p-text">A simple WordPress plugin that gives WordPress users the option to activate Night / Dark mode on\
    WordPress blogs or websites.</p>\
    <p class="p-text"><a href="https://ikennaf1.github.io/blinds/" target="_blank">Plugin website</a><br>\
    <a href="https://www.github.com/ikennaf1/blinds" target="_blank">Plugin repository</a></p>\
    <br>\
    \
<div id="about"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>\
<h3 class="text-title">About</h3>\
    <p class="p-highlight">Full Name<br><span class="p-text">Ikenna Felix Isiogu</span></p>\
    <p class="p-highlight">Strengths<br><span class="p-text">Back-end / Front-end web development with:\
        <ul class="p-text">\
            <li>PHP</li>\
            <li>WordPress</li>\
            <li>Laravel</li>\
            <li>MySql</li>\
            <li>JavaScript</li>\
            <li>HTML</li>\
            <li>CSS</li>\
        </ul></span></p>\
    <p class="p-highlight">Nationality<br><span class="p-text">Nigerian</span></p>\
    <p class="p-highlight">Country of Residence<br><span class="p-text">Nigeria</span></p>\
    <p class="p-highlight">City of Residence<br><span class="p-text">Awka</span></p>\
';

window.onload = function() {
    var text_content = document.getElementById('text_content_id');
    var text_content_2 = document.getElementById('text_content_id_2');
    
    text_content_2.innerHTML =  content_1;
    edit_id("portfolio", "portfolio-small");
    edit_id("about", "about-small");

    text_content.innerHTML =  content_1;

    show_element('contact_me', 'form_visibility');
    show_element('contact_me_small', 'form_visibility');
    hide_element('contact_close', 'form_visibility');
    hide_element('contain_contact_id', 'form_visibility');
}

function edit_id(old_id, new_id)
{
    var id = document.getElementById(old_id);
    id.setAttribute("id", new_id);
}

function show_element(to_click, to_show)
{
    to_click = document.getElementById(to_click);
    to_show = document.getElementById(to_show);
    to_filter_1 = document.getElementById('wide');
    to_filter_2 = document.getElementById('text_content_id_2');
    to_click.onclick = function() {
        to_show.style.display = 'block';
        to_filter_1.style.filter = 'sepia(70%) blur(20px)';
        to_filter_2.style.filter = 'sepia(70%) blur(20px)';
    }
}

function hide_element(to_click, to_hide)
{
    to_click = document.getElementById(to_click);
    to_hide = document.getElementById(to_hide);
    to_unfilter_1 = document.getElementById('wide');
    to_unfilter_2 = document.getElementById('text_content_id_2');
    to_click.onclick = function() {
        to_hide.style.display = 'none';
        to_unfilter_1.style.filter = 'sepia(0%) blur(0px)';
        to_unfilter_2.style.filter = 'sepia(0%) blur(0px)';
    }
}
