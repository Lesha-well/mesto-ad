const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/apf-cohort-202",
  headers: {
    authorization: "d6440bc7-ee67-4b55-9065-3d0b9740d863",
    "Content-Type": "application/json",
  },
};

/* Проверяем, успешно ли выполнен запрос, и отклоняем промис в случае ошибки. */
const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, { // Запрос к API-серверу
    headers: config.headers, // Подставляем заголовки
  }).then(getResponseData);  // Проверяем успешность выполнения запроса
};

export const getCardList = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(getResponseData);
};
