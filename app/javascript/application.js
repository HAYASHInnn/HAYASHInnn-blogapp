// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";

import "trix";
import "@rails/actiontext";

import $ from "jquery";
import axios from "axios";

// .article_titleをクリックするとアラームが表示される
document.addEventListener('turbo:load', () => {
    const dataset = $('#article_show').data()
    const articleId = dataset.articleId
    axios.get(`/articles/${articleId}/like`)
        .then((response) => {
            console.log(response)
        })
})
