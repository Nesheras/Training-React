export const transformSearch = (response) => {
    return {
        keyword: response.keyword || "",
        films: response.films.map((film) => {
            return {
                id: film.filmId || film.kinopoiskId,
                nameRu: film.nameRu || "Нет названия",
                posterUrlPreview: film.posterUrlPreview || "Нет фото",
            };
        }),
    };
};
