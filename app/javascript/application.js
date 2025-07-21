// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";

import "trix";
import "@rails/actiontext";

import $ from "jquery";

// .article_titleをクリックするとアラームが表示される
document.addEventListener("DOMContentLoaded", () => {
    $('.article_title').on('click', () => {
        window.alert('CLICKED')
    })
});
