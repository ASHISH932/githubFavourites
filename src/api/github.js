const uri = 'https://api.github.com';

export const searchApi = item => fetch(`${uri}/search/repositories?q=${item}&page=1&per_page=10`)
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));

export const getLatestTag = url => fetch(`${url}?page=1&per_page=1`)
    .then(response => response.json())
    .then(response => ({ version: response }))
    .catch(error => ({ err: error }));