<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import Panel from 'primevue/panel';
    import Tag from 'primevue/tag';
    import MeterGroup from 'primevue/metergroup';

    import { getHomeserverStatus } from '@/composables/getHomeserverStatus';
    import type { HomeServerStatus } from '@/services/homeserverStatusService';

     const pcData = ref<HomeServerStatus | null>(null);
     const errorMessage = ref('');

    const fetchHomeserverStatus = async () => {
        try {
            pcData.value = await getHomeserverStatus();
        } catch {
            errorMessage.value = 'Unable to reach the status API.';
        }
    };

    onMounted(() => {
        fetchHomeserverStatus();
    });

    const diskUsage = computed(() => [{
        label: 'Space used',
        value: pcData.value?.disk.usagePercentage ?? 0,
        color: 'var(--p-primary-color)',
    }]);

    const ramUsage = computed(() => [{
        label: 'RAM used',
        value: pcData.value?.memory.usagePercentage ?? 0,
        color: 'var(--p-teal-400)',
    }]);

    const formatGigabytes = (value?: number) => value == null ? '—' : `${value.toFixed(1)} GB`;
    const formatUptime = (uptime?: HomeServerStatus['uptime']) => {
        if (!uptime) return '—';
        return `${uptime.days}d ${uptime.hours}h ${uptime.minutes}m`;
    };
    const formatLastChecked = (value?: string) => value ? new Date(value).toLocaleString() : '—';

</script>

<template>
    <Panel class="w-full max-w-md hover-panel">
        <template #header>
            <h2 class=""><v-icon name="fa-server" class="mr-2" />Homeserver status <Tag :severity="pcData?.isOnline ? 'success' : 'danger'">{{ pcData?.isOnline ? 'Online' : 'Offline' }}</Tag></h2>
        </template>
        <template #footer>
            <p v-if="errorMessage" class="text-sm text-red-400">{{ errorMessage }}</p>
            <p v-else class="text-sm text-surface-400">Last checked: {{ formatLastChecked(pcData?.lastChecked) }}</p>
        </template>
        <div class="flex flex-col justify-center gap-2 text-left align-middle">
            <table class=" w-full text-sm text-surface-500">
                <tbody>
                    <tr>
                        <td><b>OS</b> Proxmox VE</td>
                        <td><b>Uptime</b> {{ formatUptime(pcData?.uptime) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <MeterGroup :value="diskUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">Storage</span>
                    <span class="font-medium text-sm">{{ formatGigabytes(pcData?.disk.totalSpace) }}</span>
                </div>
            </template>
        </MeterGroup>

        <MeterGroup :value="ramUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">RAM</span>
                    <span class="font-medium text-sm">{{ formatGigabytes(pcData?.memory.usedMemory) }} / {{ formatGigabytes(pcData?.memory.totalMemory) }}</span>
                </div>
            </template>
        </MeterGroup>
               
    </Panel>
</template>
