import { Provider } from 'react-redux';
import { store } from '../redux/store';
import News from './news';

export default function App() {
  return (
    <Provider store={store}>
      <News />
    </Provider>
  );
}
