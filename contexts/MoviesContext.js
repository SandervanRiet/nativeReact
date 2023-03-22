import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const MoviesContext = createContext();

export function MoviesProvider(props) {
    const [movies, setMovies] = useState(INITIAL_DATA);

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

    const api = useMemo(() => ({ movies, onToggleIsSelected }), [movies, onToggleIsSelected]);
    return <MoviesContext.Provider value={api}>{props.children}</MoviesContext.Provider>;
}

export const useMoviesContext = () => useContext(MoviesContext);

const INITIAL_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        director: 'Frank Darabont',
        duration: '2h 22min',
        time: '1994',
        imdbScore: 9.3,
        image : require('../assets/ShawshankRedemption.jpg'),
    },
    {
        id: '2',
        name: 'The Godfather',
        description:
            'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        time: '1972',
        imdbScore: 9.2,
        image : require('../assets/godfather1.jpg'),
    },
    {
        id: '3',
        name: 'The Godfather: Part II',
        description:
            'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        time: '1974',
        imdbScore: 9.0,
        image : require('../assets/godfather2.jpg'),
    },
    {
        id: '4',
        name: 'The Dark Knight',
        description:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        director: 'Christopher Nolan',
        duration: '2h 32min',
        time: '2008',
        imdbScore: 9.0,
        image : require('../assets/thedarkknight.jpg'),
    },
    {
        id: '5',
        name: '12 Angry Men',
        description:
            'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
        director: 'Sidney Lumet',
        duration: '1h 36min',
        time: '1957',
        imdbScore: 8.9,
        image : require('../assets/12angrymen.jpg'),
    }, {
        id: '6',
        name: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        director: 'Christopher Nolan',
        duration: '2h 28min',
        time: '2010',
        imdbScore: 8.8,
        image : require('../assets/inception.jpg'),
    },
    {
        id: '7',
        name: 'Django Unchained',
        description: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        actors: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio'],
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        time: '2012',
        imdbScore: 8.4,
        image : require('../assets/django.jpg'),
    },
    {
        id: '8',
        name: 'The Lord of the Rings: The Return of the King',
        description: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        actors: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
        director: 'Peter Jackson',
        duration: '3h 21min',
        time: '2003',
        imdbScore: 8.9,
        image : require('../assets/lothr.jpg'),
    },{
        id: '9',
        name: 'Avatar',
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        director: 'James Cameron',
        duration: '2h 42m',
        time: '2009',
        imdb_score: 7.8,
        image : require('../assets/avatar.jpg'),
    },
    {
        id: '10',
        name: 'Transformers',
        description: 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
        actors: ['Shia LaBeouf', 'Megan Fox', 'Josh Duhamel'],
        director: 'Michael Bay',
        duration: '2h 24m',
        time: '2007',
        imdb_score: 7.0,
        image : require('../assets/transformers.jpg'),
    },
    {
        id: '11',
        name: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        director: 'Lana Wachowski, Lilly Wachowski',
        duration: '2h 16m',
        time: '1999',
        imdb_score: 8.7,
        image: require('../assets/matrix.jpg')
    },
    {
        id: '12',
        name: 'Terminator',
        description: 'A seemingly indestructible robot is sent from 2029 to 1984 to assassinate a young waitress, whose unborn son will lead humanity in a war against sentient machines, while a soldier from that war is sent to protect her at all costs.',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
        director: 'James Cameron',
        duration: '1h 47m',
        time: '1984',
        imdb_score: 8.0,
        image: require('../assets/terminator.jpg')
    }
];



