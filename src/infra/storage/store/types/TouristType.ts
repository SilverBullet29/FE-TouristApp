import { Auth, User, Tourist } from "@infra/services/types";

type TouristAction = "update" | "delete" | "add";

export type TouristState = {
  tempTourist: Tourist.Item | null;
  setTempTourist: (
    tourist: Tourist.Item | null,
    actionType: TouristAction,
  ) => void;
  removeTempTourist: () => void;
  actionType: TouristAction | null;
};
