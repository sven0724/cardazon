import { combineReducers } from 'redux';
import product from './product.reducer';
import news from './news.reducer';

const productReducers = combineReducers({
	product,
	news
});

export default productReducers;
