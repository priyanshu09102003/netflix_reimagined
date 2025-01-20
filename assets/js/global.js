"use strict";

// Video Overlay
document.addEventListener('DOMContentLoaded', function () {
    const videoOverlay = document.getElementById('video-overlay');
    const introVideo = document.getElementById('intro-video');

    if (introVideo && videoOverlay) { // Check if elements exist
        introVideo.addEventListener('ended', function () {
            videoOverlay.classList.add('fade-out');
        });
    }
});

// Adding event listener on multiple elements
const addEventOnElements = function(elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle the search button
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function() {
    searchBox.classList.toggle("active");
});

// Store movieID in 'localStorage' when clicked on card
const getMovieDetail = function(movieID) {
    window.localStorage.setItem("movieId", String(movieID));
}

const getMovieList = function(urlParam, genreName) {
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}
