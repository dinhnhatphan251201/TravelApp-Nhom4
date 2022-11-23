import { createSlice } from "@reduxjs/toolkit";
import discoverData from "../assets/data/discoverData";

const initialState = {
    tours: [...discoverData],
};

export const tourSlice = createSlice({
    name: "tours",
    initialState,
    reducers: {
        updateTours: (state, action) => {
            const newTours = state.tours.map((tour, index) => {
                if (tour.id === action.payload) {
                    tour.liked = !tour.liked;
                }

                return tour;
            });

            state.tours = [...newTours];
        },
    },
});

export const { updateTours } = tourSlice.actions;
export const selectTour = (state) => state.tours;
export default tourSlice.reducer;
