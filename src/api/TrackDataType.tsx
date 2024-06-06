export type TrackData = {
    tracks: Track[];
  };
  
export type Track = {
    albumName: string;
    imageUrl: string;
    artists: string;
    externalUrls: string;
    href: string;
    id: string;
    isPlayable: boolean;
    name: string;
    previewUrl: string;
  };