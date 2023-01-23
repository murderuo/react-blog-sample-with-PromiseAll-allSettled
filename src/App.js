// import logo from './logo.svg';
import { useEffect, useReducer } from 'react';
import customAxios from './api/axios';
import './App.css';
import BasePage from './components/BasePage';

function App() {
  const endPoints = ['posts', 'comments', 'albums', 'photos', 'users'];
  const initalState = {
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    users: [],
  };
  const [values, setValues] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    initalState,
  );

  const fetchData = async () => {
    const promises = endPoints.map(ep => customAxios.get(ep));
    const promiseStatus = await Promise.allSettled([...promises]);
    console.log(promiseStatus);
    const results = promiseStatus.map(prom =>
      prom?.status === 'fulfilled'
        ? prom?.value?.data
        : [{ url: prom.reason?.config?.url, err: prom.reason?.message }],
    );
    console.log(results);
    const [posts, comments, albums, photos, users] = [...results];

    setValues({ posts, comments, albums, photos, users });
  };

  useEffect(() => {
    fetchData();
    // console.log(values);
  }, []);

  return (
    <div className="fb">
      <BasePage values={values} setValues={setValues} />
    </div>
  );
}

export default App;
