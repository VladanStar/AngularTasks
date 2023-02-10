export class Pokemon {
  constructor(
      public base_experience: number,
      public height: number,
      public id: number,
      public name: string,
      public species: Species,
      public sprites: Sprites,
      public stats: Stat[],
      public types: Type[],
      public weight: number,
      public flavorText: string
  ) { }
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
}

export interface StatDetails {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatDetails;
}

export interface TypeDetails {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeDetails;
}
