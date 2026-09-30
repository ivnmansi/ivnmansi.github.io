<script setup lang="ts">
import Button from "primevue/button";
import MeterGroup from "primevue/metergroup";
import Panel from "primevue/panel";
import Tag from "primevue/tag";
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import { getHomeserverStatus } from "@/composables/getHomeserverStatus";
import type { HomeServerStatus } from "@/services/homeserverStatusService";

const { t } = useI18n();

const pcData = ref<HomeServerStatus | null>(null);
const errorMessage = ref("");

const fetchHomeserverStatus = async () => {
    try {
        pcData.value = await getHomeserverStatus();
    } catch {
        errorMessage.value = t("homeserver.error");
    }
};

onMounted(() => {
    fetchHomeserverStatus();
});

const diskUsage = computed(() => [
    {
        label: t("homeserver.spaceUsed"),
        value: pcData.value?.disk.usagePercentage ?? 0,
        color: "var(--p-primary-color)",
    },
]);

const ramUsage = computed(() => [
    {
        label: t("homeserver.ramUsed"),
        value: pcData.value?.memory.usagePercentage ?? 0,
        color: "var(--p-teal-400)",
    },
]);

const formatGigabytes = (value?: number) => (value == null ? "—" : `${value.toFixed(1)} GB`);
const formatUptime = (uptime?: HomeServerStatus["uptime"]) => {
    if (!uptime) return "—";
    return `${uptime.days}d ${uptime.hours}h ${uptime.minutes}m`;
};
const formatLastChecked = (value?: string) => (value ? new Date(value).toLocaleString() : "—");
</script>

<template>
    <Panel class="w-full max-w-md hover-panel">
        <template #header>
            <h2 class="">
                <v-icon name="fa-server" class="mr-2" />{{ t("homeserver.title") }}
                <Tag :severity="pcData?.isOnline ? 'success' : 'danger'">{{
                    pcData?.isOnline ? t("homeserver.online") : t("homeserver.offline")
                }}</Tag>
            </h2>
        </template>
        <template #footer>
            <div class="flex flex-wrap items-center justify-between gap-4">
                <p v-if="errorMessage" class="text-sm text-red-400">{{ errorMessage }}</p>
                <p v-else class="text-sm text-surface-400">
                    {{ t("homeserver.lastChecked", { date: formatLastChecked(pcData?.lastChecked) }) }}
                </p>
                <Button
                    severity="secondary"
                    rounded
                    as="a"
                    href="https://github.com/ivnmansi/homeserver-status"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="t('homeserver.githubAria')"
                >
                    <v-icon name="fa-external-link-alt" />
                </Button>
            </div>
        </template>
        <div class="flex flex-col justify-center gap-2 text-left align-middle">
            <table class="w-full text-sm text-surface-500">
                <tbody>
                    <tr>
                        <td>
                            <b>{{ t("homeserver.os") }}</b> Proxmox VE
                        </td>
                        <td>
                            <b>{{ t("homeserver.uptime") }}</b> {{ formatUptime(pcData?.uptime) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <MeterGroup :value="diskUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">{{ t("homeserver.storage") }}</span>
                    <span class="font-medium text-sm">{{ formatGigabytes(pcData?.disk.totalSpace) }}</span>
                </div>
            </template>
        </MeterGroup>

        <MeterGroup :value="ramUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">{{ t("homeserver.ram") }}</span>
                    <span class="font-medium text-sm"
                        >{{ formatGigabytes(pcData?.memory.usedMemory) }} /
                        {{ formatGigabytes(pcData?.memory.totalMemory) }}</span
                    >
                </div>
            </template>
        </MeterGroup>
    </Panel>
</template>
