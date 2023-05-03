const initialStata = {
    favorites:[]
}

export const FavoriteReducer = (state = initialStata, action) => {
       switch (action.type) {
           case "ADD_TO_FAVORİTE" : {
               let bas = state.favorites.find(el => el.id === action.payload.id)
               if (bas) {
                   return {...state, favorites: state.favorites.filter((el) => el.id !== bas.id)}
               }else return {...state, favorites: [...state.favorites, action.payload]}
           }
           default: return state
       }
}