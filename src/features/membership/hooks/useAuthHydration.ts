import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/stores";
import { hydrateAuth, finishHydration, logout } from "../stores/auth.store";
import { isTokenExpired } from "@/lib/utils";

interface StoreAuth {
  token: string;
}

export function useAuthHydration() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (!stored) {
      dispatch(finishHydration());
      return;
    }

    try {
      const parsed: StoreAuth = JSON.parse(stored);

      if (!parsed.token) {
        dispatch(logout());
        dispatch(finishHydration());
        return;
      }

      if (isTokenExpired(parsed.token)) {
        dispatch(logout());
        dispatch(finishHydration());
        return;
      }

      dispatch(hydrateAuth({ token: parsed.token }));
      dispatch(finishHydration());
    } catch (error) {
      console.error("Failed to parse auth:", error);
      dispatch(logout());
      dispatch(finishHydration());
    }
  }, [dispatch]);
}
