// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";

import "trix";
import "@rails/actiontext";

import $ from "jquery";
import axios from "axios";

// .article_titleをクリックするとアラームが表示される
document.addEventListener('turbo:load', () => {
    $('.article_title').on('click', () => {
        axios.get('/')
            .then((Response) => {
                console.log(Response)
            })
    })
});
