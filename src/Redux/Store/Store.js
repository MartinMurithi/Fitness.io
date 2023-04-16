import { configureStore } from '@reduxjs/toolkit'
import ExerciseSlice from '../Features/ExerciseSlice';

const store = configureStore({
    reducer: {
        exercise: ExerciseSlice,
    }
})

export default store;