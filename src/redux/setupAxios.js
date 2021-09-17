export default function setupAxios(axios, store) {
  console.log("Store interceptore", store);
  axios.interceptors.request.use(
    config => {
      console.log("Store interceptore.getState", store.getState());
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    err => { console.log("Error From SetupAxios"); Promise.reject(err)}
  );
}
