// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"


import "trix"
import "@rails/actiontext"

// ページが表示されたときにアラームを出す
document.addEventListener('DOMContentLoaded', () => {
    window.alert('DOM LOADED')
})
