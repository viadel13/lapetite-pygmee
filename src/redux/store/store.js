import {configureStore} from '@reduxjs/toolkit';
import petitePygmeeSliceReducer from '../reducers/rootReducer';


const store = configureStore({
    reducer:{
        petitePygmee: petitePygmeeSliceReducer,
    }
    
});
  
export default store;