**Movie app that takes info from a api to display movies where we can favorite.**

In this project I wanted to see how well I could combine the different tools I had learned. Those tools were React, Typescript and Tailwind with prettier and Eslint to format and error checking. I wanted to do this while also getting to work with API's (chose to do https://www.themoviedb.org/ for my API). I did follow a tutorial (https://www.youtube.com/watch?v=G6D9cBaLViA) because I wanted to focus my 2 goals.

Overall it went good, definetly met quite alot of issues. Learned it was a bit rough to setup Tailwind in vite. One of the biggest struggles was how to set up my API key. Because I wanted to not make it public (of course). But I still wanted to be able to reach them with my services. Digged thro alot of old guides and nothing worked, until I found out vite have a special way of getting grabbing enviorment values (import.meta.env.VITE).

Do note that the API resources can not be accessed without a API key. Because of this I will attach pictures that can show this app. 

Home page
<img width="1890" height="905" alt="image" src="https://github.com/user-attachments/assets/da33df49-0ea8-4153-b8a5-a93555736755" />

Example of one our movie cards with our favorite button                                             
<img width="538" height="480" alt="image" src="https://github.com/user-attachments/assets/1b3145b2-a48a-438b-9c0a-4620e14a6d35" />

Here we have favorited some of the movies (as seen by the yellow star in the top right of the movie cards)
<img width="1878" height="818" alt="image" src="https://github.com/user-attachments/assets/15537004-9ae4-4499-89f3-8bf7fc7cb5bf" />

Here we have our favorites page (which shows all movies why have checked as favorite)
<img width="1881" height="739" alt="image" src="https://github.com/user-attachments/assets/5f73ae3b-3652-44d8-a78a-9e9a6ad6eefb" />

Here we searched for something (note that some movies do not have a picture)
<img width="1882" height="843" alt="image" src="https://github.com/user-attachments/assets/2207aa26-a3c3-436e-90c2-b5490215b76a" />
