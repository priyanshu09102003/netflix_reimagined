"use strict";

import { api_key, fetchDataFromServer} from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";
import { search } from "./search.js";


//Collecting genre name and url parameters from local storage
const genreName = window.localStorage.getItem("genreName");
const urlParam = window.localStorage.getItem("urlParam");

const pageContent = document.querySelector("[page-content]");

sidebar();


let currentPage = 1;
let totalPages = 0;




fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=true&page=${currentPage}&${urlParam}` , function({results: movieList , total_pages}){

    totalPages = total_pages;

    document.title = `${genreName} Movies - Netflix`;

    const movieListElem =document.createElement("section");
    movieListElem.classList.add("movie-list" , "genre-list");
    movieListElem.ariaLabel = `${genreName} Movies`;

    movieListElem.innerHTML  = `

        <div class="title-wrapper">
                <h1 class="heading">All ${genreName} Movies</h1>
            </div>

            <div class="grid-list">  
            </div>

            <button class="btn load-more " load-more>Load More</button>
    
    `;


    //Add Movie cards based on fetched item
    
    for(const movie of movieList){
        const movieCard = createMovieCard(movie);

        movieListElem.querySelector(".grid-list").appendChild(movieCard);
    }

    pageContent.appendChild(movieListElem);


    //Load more Functionality to load more movies on click

    document.querySelector("[load-more]").addEventListener("click" , function (){

        if(currentPage >= totalPages){
            this.style.display = "none"; //this == loading-btn
            return;
        }

        currentPage++;

        this.classList.add("loading"); //this == loading-btn

        fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=true&page=${currentPage}&${urlParam}`, ({results : movieList}) => {

            this.classList.remove("loading");

            for(const movie of movieList){
                const movieCard = createMovieCard(movie);

                movieListElem.querySelector(".grid-list").appendChild(movieCard);
            }


        });
    });

});

search();