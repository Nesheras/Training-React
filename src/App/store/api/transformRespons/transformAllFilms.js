export function transformAllMovies(response) {
    let films = response.items.map((film) => {
        return {
            id: film.filmId || film.kinopoiskId,
            nameRu: film.nameRu || "Нет названия",
            posterUrlPreview: film.posterUrlPreview || "Нет фото",
        };
    });
    return films;
}
