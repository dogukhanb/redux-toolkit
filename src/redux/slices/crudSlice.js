import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "Navbar Animasyonu",
      author: "Furkan",
      assigned_to: "Ali",
      end_date: "2023-04-12",
      id: "b6f04e4c-fc73-4b36-ab27-ec6ae968b042",
    },
    {
      title: "Header Düzenlemesi",
      author: "Ayşe",
      assigned_to: "Fatma",
      end_date: "2024-08-25",
      id: "29d3372f-7848-4aaf-8694-b6fab599fe1e",
    },
    {
      title: "Sayfa Dizaynı",
      author: "Fatma",
      assigned_to: "Ali",
      end_date: "2022-06-05",
      id: "d5568f07-9897-4fc4-8554-b120d0ee4678",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // a) task'e id ekle
      action.payload.id = v4();
      // b) veriyi diziye ekle
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex((i) => i.id === action.payload);
      state.tasks.splice(index, 1);
    },
    editTask: (state, action) => {
      //düzenlenicek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      //elemanı güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

// store ' atanıtmak için reducer'ı export et

export default crudSlice.reducer;

// projede kullanabilmek için aksiyonları export et

export const { addTask, deleteTask, editTask } = crudSlice.actions;
