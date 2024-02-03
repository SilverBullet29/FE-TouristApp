import { APIMeta, APIResponse } from "./api";

export namespace Tourist {
  export interface Item {
    $id: string;
    createdat: string;
    id: string;
    tourist_email: string;
    tourist_location: string;
    tourist_name: string;
    tourist_profilepicture: string;
  }

  export interface Request {
    page: number;
  }

  export type Response = APIResponse<Tourist.Item[]> & APIMeta;

  export interface RequestEdit {
    id: string;
    tourist_email: string;
    tourist_name: string;
    tourist_location: string;
  }

  export type ResponseEdit = APIResponse<any>;

  export interface RequestDelete {
    id: string;
  }

  export type ResponseDelete = APIResponse<any>;

  export type RequestAdd = Omit<RequestEdit, "id">;

  export type RequestDetail = {
    id: string;
  };

  export type ResponseDetail = Tourist.Item;
}
