export const updateUrlParams = (param, value) => {
  if (window.history.pushState) {
    let url = new URL(window.location.href);
    let search_params = url.searchParams;
    search_params.set(param, value);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.history.pushState({ path: new_url }, "", new_url);
  }
};

export const getURLParams = (paramName) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
};

export const GetAllUrlParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const entries = urlParams.entries();
  return entries;
};

export const deleteURLParams = (paramName) => {
  let url = new URL(window.location.href);
  let search_params = url.searchParams;
  search_params.delete(paramName);
  url.search = search_params.toString();
  let new_url = url.toString();
  window.history.pushState({ path: new_url }, "", new_url);
};
