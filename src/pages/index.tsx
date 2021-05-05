import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import News from './news';
import { ApplicationHeader } from '../usecase/shared/ApplicationHeader';

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationHeader />
      <News />
    </Provider>
  );
}
