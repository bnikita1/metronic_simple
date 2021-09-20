import { USER_REGISTERATION, USER_LOGIN,GET_CATEGORY, ADD_CATEGORY, UPDATE_CATEGORY,DELETE_CATEGORY,USER_LOGOUT } from "../actionTypes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialAuthState = {
    user: undefined,
    authToken: undefined,
  };

const reducer = persistReducer(
    { storage, key: "v726-demo1-auth", whitelist: ["authToken"] },
    (state = initialAuthState, { type, payload }) => {
        switch (type) {
            case USER_REGISTERATION.USER_REGISTERATION_INIT:
                return { ...state, loading: true };
            case USER_REGISTERATION.USER_REGISTERATION_SUCCESS:
                console.log("USER_REGISTERATION_SUCCESS", payload);
                return { ...state, authToken: payload.user.authToken, user: payload.user, loading: false };
            case USER_REGISTERATION.USER_REGISTERATION_ERROR:
                return { ...state, error: payload, loading: false };
            
            case USER_LOGIN.USER_LOGIN_INIT:
                return { ...state, loading: true };

            case USER_LOGIN.USER_LOGIN_SUCCESS:
                return { ...state, authToken: payload.user.authToken, user: payload.user, loading: false };

            case USER_LOGIN.USER_LOGIN_ERROR:
                return { ...state, error: payload, loading: false };
            
            case GET_CATEGORY.GET_CATEGORY_INIT:
                return { ...state, loading: true };
    
            case GET_CATEGORY.GET_CATEGORY_SUCCESS:
                return { ...state, categorylst: payload.categories, loading: false };
    
            case GET_CATEGORY.GET_CATEGORY_ERROR:
                return { ...state, error: payload, loading: false };

            case ADD_CATEGORY.ADD_CATEGORY_SUCCESS:
                const cat = payload;
                cat.id = Math.random();
                const category = [...state.categorylst] || [];
                category.unshift(cat);
                return { ...state, categorylst: category, loading: false };

            case UPDATE_CATEGORY.UPDATE_CATEGORY_SUCCESS:
                const cats = payload;
                const categorys = [...state.categorylst] || [];
                categorys.map((item, index) => {
                    if (item.id === payload.id) {
                        console.log("IDDD", item.id);
                        item.category = payload.category
                        item.description = payload.description
                    }
                });
                return { ...state, categorylst: categorys, loading: false };
            
            case DELETE_CATEGORY.DELETE_CATEGORY_SUCCESS:
                const categoryss = [...state.categorylst] || [];
                const catss = categoryss.filter((item) => item.id !== payload.categories.id);
                return { ...state, categorylst: catss, loading: false };

            
                case USER_LOGOUT.USER_LOGOUT_INIT:
                    return { ...state, loading: true };
    
            case USER_LOGOUT.USER_LOGOUT_SUCCESS:
                return { ...state, authToken: null, user: undefined, loading: false };
    
                case USER_LOGOUT.USER_LOGOUT_ERROR:
                    return { ...state, error: payload, loading: false };
            default:
                return state;
            
            
        }
    }
);

export default reducer;