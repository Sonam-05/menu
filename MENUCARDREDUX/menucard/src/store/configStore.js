import { legacy_createStore as createStore} from 'redux'
import reducer from './menus';

const store = createStore(reducer);

export default store;