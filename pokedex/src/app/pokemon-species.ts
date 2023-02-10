export interface Language {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
}

export interface Name {
  language: Language;
  name: string;
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  name: string;
  names: Name[];
}
