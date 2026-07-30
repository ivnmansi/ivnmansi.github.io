import { lastSongService } from '@/services/lastSongService';

export function getLastSong() {
    return lastSongService().fetchData();
}