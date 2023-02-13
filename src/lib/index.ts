import { reactive } from "vue";
import { airtable } from "./airtable";

export const campTypes = [
  "Ecology",
  "Skate",
  "Adaptive",
  "Teen",
  "Traditional",
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

type CampType = ElementType<typeof campTypes>;

export interface IReactiveCamps {
  loading: boolean;
  error: string | null;
  data: any[];
}

export const camps = reactive<IReactiveCamps>({
  loading: false,
  error: null,
  data: [],
});

export const fetchCampsOf = async (campType: CampType | string) => {
  try {
    camps.loading = true;
    const { data } = await airtable.get("/camps", {
      params: {
        view: "Grid view",
        filterByFormula: `{${campType}}`,
      },
    });
    camps.data = data.records;
  } catch (e) {
    camps.error = `Unable to fetch camp locations.`;
  } finally {
    camps.loading = false;
  }
};
