export interface FamiliesProps {
  id: string;
	premium: boolean;
	details: DetailsProps;
}

export interface DetailsProps  {
  name: string;
  description: string;
}

export interface SearchParamsProps {
  skip: number;
  take: number;
}
