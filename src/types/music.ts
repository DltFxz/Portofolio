export interface Song {
    id:number;
    title:string;
    artist:string;
    album:string;
    duration:string;
    audioUrl:string;
}

export interface PlayerState {
    currentSong: Song | null;
    isPlaying: boolean;
    currentTime: number;
    duration:number;
    volume:number;
    isShuffled:boolean;
    repeatMode: 'off' | 'one' | 'all';
}