'use strict';

import { imageBaseURL } from "./api.js";

// Movie Card functionality
export function createMovieCard(movie) {
    const {
        poster_path,
        title,
        vote_average,
        release_date,
        id,
    } = movie;

    const card = document.createElement("div");
    card.classList.add("movie-card");

    const posterURL = poster_path ? `${imageBaseURL}w185${poster_path}` : './assets/images/fallback-poster.png';

    card.innerHTML = `
        <figure class="poster-box card-banner">
            <img src="${posterURL}" alt="${title}" class="img-cover" loading="lazy">
        </figure>
        <h4 class="title">${title}</h4>
        <div class="meta-list">
            <div class="meta-item">
                <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
                <span class="span">${vote_average.toFixed(1)}</span>
            </div>
            <div class="card-badge">${release_date ? release_date.split("-")[0] : 'N/A'}</div>
        </div>
        <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a>
    `;

    return card;
}
