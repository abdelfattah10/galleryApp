import 'url-search-params-polyfill';

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    category: searchParams.get('category') || '',
  };
}

export {
  getParams
}
