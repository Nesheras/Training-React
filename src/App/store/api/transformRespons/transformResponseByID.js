export const transformFilmById = (film) => {
    return {
        id: film.kinopoiskId,
        nameRu: film.nameRu || "Нет названия",
        nameOriginal: film.nameOriginal || "Нет названия",
        posterUrl: film.posterUrl || "Нет фото",
        posterUrlPreview: film.posterUrlPreview || "Нет фото",
        year: film.year || "Не известно",
        description: film.description || "Нет описания",
    };
};
