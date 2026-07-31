export interface HomeServerStatus {
    serverName: string;
    isOnline: boolean;
    lastChecked: string;

    memory: {
        totalMemory: number;
        usedMemory: number;
        freeMemory: number;
        usagePercentage: number;
    };

    disk: {
        totalSpace: number;
        usedSpace: number;
        freeSpace: number;
        usagePercentage: number;
    };

    uptime: {
        days: number;
        hours: number;
        minutes: number;
    }
}

export function homeserverStatusService() {
    const url = 'https://api.ivnmansi.xyz/api/server/status';

    const fetchData = async () => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Homeserver API returned ${response.status}`);
        }

        const data = await response.json();

        return data as HomeServerStatus;
    };

    return { fetchData };
}
