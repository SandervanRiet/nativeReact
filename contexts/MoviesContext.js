import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const MoviesContext = createContext();

export function MoviesProvider(props) {
    const [movies, setMovies] = useState(INITIAL_DATA);
    const [activeMovieId, setActiveMovieId] = useState();

    const onToggleIsSelected = useCallback(
        (movieToToggle) => {
            const toggledMovie = { ...movieToToggle, isSelected: !movieToToggle.isSelected };
            console.log(toggledMovie);
            setMovies((prevMovies) =>
                prevMovies.map((movie) => (movieToToggle.id === movie.id ? toggledMovie : movie))
            );
        },
        [setMovies]
    );

    const setActiveMovie = useCallback(movieToActivate => setActiveMovieId(movieToActivate.id), []);

    const getMovieWithId = useCallback(id => movies.find(movie => movie.id === id), [movies]);


    const api = useMemo(() => ({ movies, onToggleIsSelected,setActiveMovie,getMovieWithId }), [movies, onToggleIsSelected,setActiveMovie,getMovieWithId]);
    return <MoviesContext.Provider value={api}>{props.children}</MoviesContext.Provider>;
}

export const useMoviesContext = () => useContext(MoviesContext);

const INITIAL_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        description:
            '"The Shawshank Redemption" is a 1994 American drama film directed by Frank Darabont, based on the novella "Rita Hayworth and Shawshank Redemption" by Stephen King. The film follows the story of Andy Dufresne (Tim Robbins), a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. In prison, Andy befriends Red (Morgan Freeman), a fellow inmate who is known for being able to smuggle goods into the prison.\n' +
            '\n' +
            'Through the years, Andy uses his skills as a banker to gain the trust of the prison staff and eventually becomes instrumental in their financial dealings. He also helps other inmates, including Brooks Hatlen (James Whitmore), to find meaning and hope in their lives.\n' +
            '\n' +
            'As the years go by, Andy\'s innocence is proven and he is finally released from prison, leaving behind a legacy of hope and redemption for his fellow inmates. "The Shawshank Redemption" is widely regarded as one of the greatest films ever made and has earned a reputation as a classic tale of hope, friendship, and perseverance in the face of adversity.',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        director: 'Frank Darabont',
        duration: '2h 22min',
        time: '1994',
        imdbScore: 9.3,
        image : require('../assets/ShawshankRedemption.jpg'),
        video : '6hB3S9bIaco'
    },
    {
        id: '2',
        name: 'The Godfather',
        description:
            'The Godfather is a crime drama film directed by Francis Ford Coppola. The film revolves around the aging patriarch of an organized crime dynasty, who transfers control of his clandestine empire to his reluctant son. Starring Marlon Brando, Al Pacino, and James Caan, this classic movie is filled with suspense, drama, and captivating performances. The film showcases the dark world of organized crime and highlights the complexities of family relationships. The Godfather is a timeless masterpiece that has continued to captivate audiences over the years and is widely regarded as one of the greatest films of all time. The film\'s stellar cast, exceptional direction, and stunning visuals make it a must-watch for movie lovers.',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        time: '1972',
        imdbScore: 9.2,
        image : require('../assets/godfather1.jpg'),
        video : 'UaVTIH8mujA'
    },
    {
        id: '3',
        name: 'The Godfather: Part II',
        description:
            'The Godfather: Part II is a crime drama film and the sequel to The Godfather. Directed by Francis Ford Coppola, the movie explores the early life and career of Vito Corleone in 1920s New York City, while his son, Michael, expands and tightens his grip on the family crime syndicate. Starring Al Pacino, Robert De Niro, and Robert Duvall, the film is a masterclass in storytelling, with powerful performances and a complex narrative that weaves together multiple timelines. The Godfather: Part II is widely regarded as one of the best sequels in movie history and has cemented its place as a classic in the crime drama genre. With its exceptional cast, breathtaking cinematography, and powerful direction, The Godfather: Part II is a must-watch for fans of the first film and anyone who appreciates great cinema.',
        actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        time: '1974',
        imdbScore: 9.0,
        image : require('../assets/godfather2.jpg'),
        video : '9O1Iy9od7-A'
    },
    {
        id: '4',
        name: 'The Dark Knight',
        description:
            'The Dark Knight is a superhero film directed by Christopher Nolan. The film follows Batman, played by Christian Bale, as he faces off against the Joker, portrayed by Heath Ledger, who wreaks havoc and chaos on the people of Gotham. With stunning visuals, an engrossing story, and brilliant performances by its cast, The Dark Knight is widely regarded as one of the best superhero movies of all time. The film\'s exploration of complex themes such as morality, justice, and chaos, coupled with its thrilling action sequences and outstanding performances, make it a must-watch for fans of the genre and movie lovers alike.',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        director: 'Christopher Nolan',
        duration: '2h 32min',
        time: '2008',
        imdbScore: 9.0,
        image : require('../assets/thedarkknight.jpg'),
        video : 'EXeTwQWrcwY'
    },
    {
        id: '5',
        name: '12 Angry Men',
        description:
            '12 Angry Men is a drama film directed by Sidney Lumet. The movie revolves around a jury holdout who attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence. Starring Henry Fonda, Lee J. Cobb, and Martin Balsam, the film is a masterclass in acting, with powerful performances from its entire cast. With its tight script and intense atmosphere, 12 Angry Men is a gripping drama that explores themes of prejudice, justice, and the power of persuasion. The film\'s minimalist set and focus on character-driven storytelling make it a timeless classic that has influenced countless films in the years since its release.',
        actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
        director: 'Sidney Lumet',
        duration: '1h 36min',
        time: '1957',
        imdbScore: 8.9,
        image : require('../assets/12angrymen.jpg'),
        video : '_13J_9B5jEk'
    }, {
        id: '6',
        name: 'Inception',
        description: 'nception is a science-fiction thriller directed by Christopher Nolan. The film follows a thief, played by Leonardo DiCaprio, who steals corporate secrets through the use of dream-sharing technology and is given the inverse task of planting an idea into the mind of a CEO. With its mind-bending storyline, stunning visuals, and exceptional performances from its cast, Inception is a must-watch for fans of science-fiction and action movies. The film explores complex themes such as the nature of reality and the power of the human mind, all while keeping the audience on the edge of their seats with its thrilling action sequences.',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        director: 'Christopher Nolan',
        duration: '2h 28min',
        time: '2010',
        imdbScore: 8.8,
        image : require('../assets/inception.jpg'),
        video : 'YoHD9XEInc0'
    },
    {
        id: '7',
        name: 'Django Unchained',
        description: '"Django Unchained" is a gripping western drama that follows the story of a freed slave, Django (Jamie Foxx), as he teams up with a German bounty hunter, Dr. King Schultz (Christoph Waltz), to rescue his wife from a cruel Mississippi plantation owner. The movie takes place in the antebellum South and is marked by Tarantino\'s signature dialogue, sharp cinematography, and a riveting score. The film\'s standout performances come from Foxx, Waltz, and Leonardo DiCaprio, who plays the villainous Calvin Candie. "Django Unchained" is a captivating, intense, and thrilling movie that explores themes of race, revenge, and redemption.',
        actors: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio'],
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        time: '2012',
        imdbScore: 8.4,
        image : require('../assets/django.jpg'),
        video : '0fUCuvNlOCg'
    },
    {
        id: '8',
        name: 'The Lord of the Rings: The Return of the King',
        description: '"The Lord of the Rings: The Return of the King" is the final installment in the epic fantasy trilogy directed by Peter Jackson. The movie depicts the epic battle between the armies of Men and Sauron\'s army, while Frodo and Sam journey to destroy the One Ring in the fires of Mount Doom. The film is visually stunning and features spectacular battle scenes, dazzling special effects, and a brilliant cast that includes Elijah Wood, Viggo Mortensen, and Ian McKellen. With its rich storyline, breathtaking visuals, and magnificent soundtrack, "The Lord of the Rings: The Return of the King" is a cinematic masterpiece that has left an indelible mark on the film industry.',
        actors: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
        director: 'Peter Jackson',
        duration: '3h 21min',
        time: '2003',
        imdbScore: 8.9,
        image : require('../assets/lothr.jpg'),
        video : 'y2rYRu8UW8M'
    },{
        id: '9',
        name: 'Avatar',
        description: '"Avatar" is a sci-fi epic that takes place on the distant moon Pandora, where a paraplegic Marine, Jake Sully (Sam Worthington), is sent on a mission to infiltrate the Na\'vi people and mine their land for a valuable mineral. As he learns more about the Na\'vi, Jake becomes sympathetic to their cause and becomes embroiled in a battle against his own people. The movie features stunning visuals, breathtaking action scenes, and a talented cast that includes Zoe Saldana and Sigourney Weaver. "Avatar" is a groundbreaking movie that set new standards for special effects and 3D technology, while also exploring themes of environmentalism and cultural imperialism.',
        actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        director: 'James Cameron',
        duration: '2h 42m',
        time: '2009',
        imdbScore: 7.8,
        image : require('../assets/avatar.jpg'),
        video : '5PSNL1qE6VY'
    },
    {
        id: '10',
        name: 'Transformers',
        description: 'Transformers is a science fiction action movie that was released in 2007. The movie is directed by Michael Bay and produced by Steven Spielberg. It is based on the popular toy line of the same name, created by Hasbro. The movie tells the story of a group of Autobots, robots that can transform into various vehicles, as they come to Earth in search of a powerful artifact called the Allspark. Along the way, they form an alliance with a teenager named Sam Witwicky (played by Shia LaBeouf) and battle against the evil Decepticons who want to use the Allspark to take over the world. The movie is known for its stunning visual effects and intense action sequences.',
        actors: ['Shia LaBeouf', 'Megan Fox', 'Josh Duhamel'],
        director: 'Michael Bay',
        duration: '2h 24m',
        time: '2007',
        imdbScore: 7.0,
        image : require('../assets/transformers.jpg'),
        video : 'v8ItGrI-Ou0'
    },
    {
        id: '11',
        name: 'The Matrix',
        description: 'The Matrix is a science fiction action movie that was released in 1999. The movie is directed by the Wachowskis and stars Keanu Reeves, Laurence Fishburne, and Carrie-Anne Moss. The movie takes place in a dystopian future where humans are enslaved by intelligent machines that have created a simulated reality called the Matrix to keep them under control. The story follows a hacker named Neo (played by Reeves) as he discovers the truth about the Matrix and joins a group of rebels led by Morpheus (played by Fishburne) to fight against the machines. The Matrix is known for its groundbreaking visual effects, including "bullet time" and its philosophical themes about the nature of reality and the power of choice.',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        director: 'Lana Wachowski, Lilly Wachowski',
        duration: '2h 16m',
        time: '1999',
        imdbScore: 8.7,
        image: require('../assets/matrix.jpg'),
        video : 'vKQi3bBA1y8'
    },
    {
        id: '12',
        name: 'Terminator',
        description: 'The Terminator is a science fiction action movie that was released in 1984. The movie is directed by James Cameron and stars Arnold Schwarzenegger as a cyborg assassin sent back in time from a post-apocalyptic future to kill Sarah Connor (played by Linda Hamilton), the mother of the future leader of the human resistance. The story follows a soldier named Kyle Reese (played by Michael Biehn) who is sent back in time to protect Sarah and stop the Terminator. The movie was a critical and commercial success and launched Schwarzenegger\'s career as an action star. It also spawned a franchise with several sequels and spinoffs. The Terminator is known for its thrilling action sequences, iconic catchphrases, and its exploration of the dangers of artificial intelligence and the consequences of time travel.',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
        director: 'James Cameron',
        duration: '1h 47m',
        time: '1984',
        imdbScore: 8.0,
        image: require('../assets/terminator.jpg'),
        video : 'k64P4l2Wmeg'
    }
];



