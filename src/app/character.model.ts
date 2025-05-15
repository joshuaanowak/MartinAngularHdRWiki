export interface Character {
    id: string;        
    name: string;
    wikiUrl?: string;
    race?: string;
    birth?: string;
    gender?: string;
    death?: string;    
    hair?: string;
    height?: string;
    realm?: string;
    spouse?: string;
}


export interface CharacterResponse {
    docs: Character[];
  }
