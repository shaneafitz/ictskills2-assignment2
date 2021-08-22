# Assignment - ReactJS app.

Name: Shane Fitzpatrick

## Overview.

For the assignment I extended the initial movies assignment which can be found here (https://github.com/shaneafitz/ictskills-moviesApp.git) with some new features. 
The new features are:
 
 + TV shows home page with with release date and popularity
 + TV show information page with an overview, genres, run time of episodes, country of production and popularity 
 + Link to cast members added to movie card which displays all actors associated with the movie, their character name and their star rating
 + Link to actor’s biography on each actor’s card which also displays date and place of birth along with a variety of headshots 
 + A top-rated movie page
 + A popular movie page

## Setup requirements.

To run this project yourself:

+ Clone the Repo
+ Install neccessary packages: npm install
+ Get an api_key by signing up to the TMDB site https://www.themoviedb.org/
+ Copy your key into the .env file REACT_APP_TMDB_KEY=<<your key here >>
+ Type npm start into the terminal
+ Open your browser at http://localhost:3000/


## API Data Model.

Additional TMDB endpoints used and sample responses, in JSON 

Get Popular Movies
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`

```
{
page: 1,
results: [
{
adult: false,
backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
genre_ids: [
28,
12,
14
],
id: 436969,
original_language: "en",
original_title: "The Suicide Squad",
overview: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
popularity: 5658.642,
poster_path: "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
release_date: "2021-07-28",
title: "The Suicide Squad",
video: false,
vote_average: 8.1,
vote_count: 2629
},
{
adult: false,
backdrop_path: "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
genre_ids: [
12,
14,
35,
28
],
id: 451048,
original_language: "en",
original_title: "Jungle Cruise",
overview: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
popularity: 5156.953,
poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
release_date: "2021-07-28",
title: "Jungle Cruise",
video: false,
vote_average: 7.9,
vote_count: 1909
},
{
adult: false,
backdrop_path: "/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg",
genre_ids: [
35,
28,
12,
878
],
id: 550988,
original_language: "en",
original_title: "Free Guy",
overview: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
popularity: 2794.463,
poster_path: "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
release_date: "2021-08-11",
title: "Free Guy",
video: false,
vote_average: 7.9,
vote_count: 255
},
}

```
  
Get TopRated Movies
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`

```
{
adult: false,
backdrop_path: "/las0P4Dua54XrZ73VQmGUaH1z0U.jpg",
genre_ids: [
16,
28,
18,
878
],
id: 283566,
original_language: "ja",
original_title: "シン・エヴァンゲリオン劇場版:||",
overview: "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
popularity: 468.682,
poster_path: "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg",
release_date: "2021-03-08",
title: "Evangelion: 3.0+1.0 Thrice Upon a Time",
video: false,
vote_average: 8.8,
vote_count: 217
},
{
adult: false,
backdrop_path: "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",
genre_ids: [
35,
18,
10749
],
id: 19404,
original_language: "hi",
original_title: "दिलवाले दुल्हनिया ले जायेंगे",
overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
popularity: 18.537,
poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
release_date: "1995-10-20",
title: "Dilwale Dulhania Le Jayenge",
video: false,
vote_average: 8.8,
vote_count: 3102
},
{
adult: false,
backdrop_path: "/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg",
genre_ids: [
18,
80
],
id: 278,
original_language: "en",
original_title: "The Shawshank Redemption",
overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
popularity: 65.673,
poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
release_date: "1994-09-23",
title: "The Shawshank Redemption",
video: false,
vote_average: 8.7,
vote_count: 19490
}

```    

Get TvShows 
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

```
{
backdrop_path: "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
first_air_date: "2021-08-11",
genre_ids: [
16,
10759,
10765
],
id: 91363,
name: "What If...?",
origin_country: [
"US"
],
original_language: "en",
original_name: "What If...?",
overview: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
popularity: 2269.951,
poster_path: "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
vote_average: 8.6,
vote_count: 737
},
{
backdrop_path: "/pXjpqrx65mlQskf9mfTWSszYODn.jpg",
first_air_date: "2020-05-18",
genre_ids: [
10765,
10759,
18
],
id: 80986,
name: "DC's Stargirl",
origin_country: [
"US"
],
original_language: "en",
original_name: "DC's Stargirl",
overview: "Courtney Whitmore, a smart, athletic and above all else kind girl, discovers her step-father has a secret: he used to be the sidekick to a superhero. "Borrowing" the long-lost hero’s cosmic staff, she becomes the unlikely inspiration for an entirely new generation of superheroes.",
popularity: 1199.205,
poster_path: "/rbkGgrEHOPyAEZqPk609QN1Ird6.jpg",
vote_average: 8,
vote_count: 787
},
{
backdrop_path: "/f5tjVQtxihaVwXOdpITSPeIqlpX.jpg",
first_air_date: "2021-06-09",
genre_ids: [
18,
10765
],
id: 84958,
name: "Loki",
origin_country: [
"US"
],
original_language: "en",
original_name: "Loki",
overview: "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
popularity: 1092.788,
poster_path: "/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
vote_average: 8.2,
vote_count: 7302
}

```

Get TvShow 
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

```
{
backdrop_path: "/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg",
created_by: [
{
id: 169061,
credit_id: "5918e7e4925141583c04b400",
name: "David Shore",
gender: 2,
profile_path: "/yUwAL9wOJoS9caz9GusyHsrad8J.jpg"
}
],
episode_run_time: [
43
],
first_air_date: "2017-09-25",
genres: [
{
id: 18,
name: "Drama"
}
],
homepage: "http://abc.go.com/shows/the-good-doctor",
id: 71712,
in_production: true,
languages: [
"en"
],
last_air_date: "2021-06-07",
last_episode_to_air: {
air_date: "2021-06-07",
episode_number: 20,
id: 2944095,
name: "Vamos",
overview: "During part two of the two-part season finale, Dr. Shaun Murphy must perform a risky surgery on a patient without electricity when the power suddenly goes out. Meanwhile Lim and Dr. Mateo Rendón Osma’s relationship deepens as they overcome difficulties during the surgery.",
production_code: "420",
season_number: 4,
still_path: "/5DlE7uIRetvlcmQUPk7HQFp22Fm.jpg",
vote_average: 0,
vote_count: 0
},
name: "The Good Doctor",
next_episode_to_air: {
air_date: "2021-09-27",
episode_number: 1,
id: 3076759,
name: "",
overview: "",
production_code: "",
season_number: 5,
still_path: null,
vote_average: 0,
vote_count: 0
},
networks: [
{
name: "ABC",
id: 2,
logo_path: "/ndAvF4JLsliGreX87jAc9GdjmJY.png",
origin_country: "US"
}
],
number_of_episodes: 77,
number_of_seasons: 5,
origin_country: [
"US"
],
original_language: "en",
original_name: "The Good Doctor",
overview: "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",
popularity: 1072.419,
poster_path: "/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
production_companies: [
{
id: 19366,
logo_path: "/vOH8dyQhLK01pg5fYkgiS31jlFm.png",
name: "ABC Studios",
origin_country: "US"
},
{
id: 90375,
logo_path: null,
name: "3AD",
origin_country: "US"
},
{
id: 11073,
logo_path: "/wHs44fktdoj6c378ZbSWfzKsM2Z.png",
name: "Sony Pictures Television Studios",
origin_country: "US"
}
],
production_countries: [
{
iso_3166_1: "US",
name: "United States of America"
}
]

```

Get Movie Cast 
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

```
{
adult: false,
gender: 2,
id: 17605,
known_for_department: "Acting",
name: "Idris Elba",
original_name: "Idris Elba",
popularity: 21.598,
profile_path: "/be1bVF7qGX91a6c5WeRPs5pKXln.jpg",
cast_id: 27,
character: "Robert DuBois / Bloodsport",
credit_id: "5c8059dc0e0a2643145d441b",
order: 0
},
{
adult: false,
gender: 1,
id: 234352,
known_for_department: "Acting",
name: "Margot Robbie",
original_name: "Margot Robbie",
popularity: 46.628,
profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
cast_id: 33,
character: "Harleen Quinzel / Harley Quinn",
credit_id: "5ca268419251411a16098d23",
order: 1
},
{
adult: false,
gender: 2,
id: 56446,
known_for_department: "Acting",
name: "John Cena",
original_name: "John Cena",
popularity: 21.414,
profile_path: "/rgB2eIOt7WyQjdgJCOuESdDlrjg.jpg",
cast_id: 37,
character: "Christopher Smith / Peacemaker",
credit_id: "5cb78a7b0e0a266ba4efa295",
order: 2
},
{
adult: false,
gender: 2,
id: 92404,
known_for_department: "Acting",
name: "Joel Kinnaman",
original_name: "Joel Kinnaman",
popularity: 19.537,
profile_path: "/3oC3Stq87lFWaxYrlgWTxM8Msqf.jpg",
cast_id: 35,
character: "Rick Flag",
credit_id: "5ca7c426c3a3683f485dcc6b",
order: 3
}

```

Get Actor Info 
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

```
{
adult: false,
also_known_as: [
"Марго Роббі",
"Марго Робби",
"มาร์โก ร็อบบี",
"瑪歌·羅比",
"마고 로비",
"مارجوت روبي",
"マーゴット・ロビー",
"Марго Роби",
"Margot Elise Robbie",
"Μάργκοτ Ελίς Ρόμπι",
"Μάργκοτ Ρόμπι",
"玛格特·罗比",
"Марґо Роббі"
],
biography: "Margot Elise Robbie (born 2 July 1990) is an Australian actress and producer. She has received nominations for two Academy Awards and five BAFTA Awards. In 2017, Time magazine named her one of the 100 most influential people in the world, and in 2019, she was ranked among the world's highest-paid actresses. Robbie studied drama at Somerset College and began her career in Australian independent films in the late 2000s, before working in the soap opera Neighbours (2008–2011). After moving to America, she starred in the ABC drama series Pan Am (2011–2012) and had her breakthrough role in Martin Scorsese's black comedy film The Wolf of Wall Street (2013). Robbie's profile continued to grow with starring roles as a grifter in Focus (2015), Jane Porter in The Legend of Tarzan (2016), and Harley Quinn in the DC Extended Universe, beginning with Suicide Squad (2016). Robbie garnered critical acclaim and nominations for the BAFTA Award and Academy Award for Best Actress for portraying the disgraced figure skater Tonya Harding in the biopic I, Tonya (2017). This acclaim continued for her roles as Queen Elizabeth I in the period drama Mary Queen of Scots (2018), Sharon Tate in the comedy-drama Once Upon a Time in Hollywood (2019), and a fictional Fox News employee in the drama Bombshell (2019). She received BAFTA Award nominations for all three and a nomination for the Academy Award for Best Supporting Actress for the lattermost. Robbie is married to the filmmaker Tom Ackerley. They are among the founders of the production company LuckyChap Entertainment, under which she has produced some of her own films, as well as the television series Dollface (2019–present).",
birthday: "1990-07-02",
deathday: null,
gender: 1,
homepage: null,
id: 234352,
imdb_id: "nm3053338",
known_for_department: "Acting",
name: "Margot Robbie",
place_of_birth: "Dalby, Queensland, Australia",
popularity: 46.628,
profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg"
}

``` 


## App Design.

### Component catalogue.

Storybook components with original components de-selected

![][stories]

### UI Design.


![][view]
>Shows new link (highlighted) to find cast members of the associated movie

![][view2]
>Shows popular movie page

![][view3]
>Shows top rated movie page

![][view4]
>Shows Tv Shows home page

![][view5]
>Shows a Tv shows information page

![][view6]
>Shows a movies cast list

![][view7]
>Shows a cast members biography


### Routing.


+ GET /movies/toprated- displays top rated movies.
+ GET /movies/popular- displays popular movies.
+ GET /movies/:id/cast- displays cast of characters for each movie.
+ GET /movies/:id/info- displays Bio information of each actor.
+ GET /tvShows/:id- displays individual tv show.
+ GET •	GET /tvShows/- displays all tv shows. 

## Independent learning (If relevant).

N/A

[stories]: componentCatalogue.PNG
[view]: ./movieCard.png
[view2]: ./popular.png
[view3]: ./topRated.png
[view4]: ./tvShows.png
[view5]: ./tvShow.png
[view6]: ./castList.png
[view7]: ./actor.png

