import { homeserverStatusService } from '@/services/homeserverStatusService'

export function getHomeserverStatus() {
    return homeserverStatusService().fetchData();
}