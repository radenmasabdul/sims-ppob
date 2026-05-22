import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Banner {
  banner_name: string;
  banner_image: string;
  description: string;
}

interface Service {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
}

interface InformationState {
  banners: Banner[];
  services: Service[];
}

const initialState: InformationState = {
  banners: [],
  services: [],
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setBanners: (state, action: PayloadAction<Banner[]>) => {
      state.banners = action.payload;
    },
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
    clearInformation: (state) => {
      state.banners = [];
      state.services = [];
    },
  },
});

export const { setBanners, setServices, clearInformation } = informationSlice.actions;
export default informationSlice.reducer;
