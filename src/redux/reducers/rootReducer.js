import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pannier: [],
}

const petitePygmeeSlice = createSlice({
    name: 'petitePygmeeSlice',
    initialState,

    reducers: {

        pannier: (state, action) => {
            const objetRecherche = { aliment: action.payload.aliment };
            const existe = state.pannier.some(objet => objet.aliment === objetRecherche.aliment);

            if(existe){
                state.pannier = state.pannier.map(objet =>
                    objet.aliment === objetRecherche.aliment ? { ...objet, quantite: objet.quantite + 1 } : objet
                  );
            }else{
                state.pannier = [...state.pannier, action.payload.menuData];
            }

        },

        supprimer: (state, action) => {
            const aliment = action.payload;
            // Utilisez filter pour créer un nouveau tableau sans l'élément à supprimer
            state.pannier = state.pannier.filter((i) => i.aliment !== aliment);
        }


    }
})

export const { pannier, supprimer } = petitePygmeeSlice.actions;


export default petitePygmeeSlice.reducer;