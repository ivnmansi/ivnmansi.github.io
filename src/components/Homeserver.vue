<script setup lang="ts">
    import { ref } from 'vue';
    import Panel from 'primevue/panel';
    import Tag from 'primevue/tag';
    import MeterGroup from 'primevue/metergroup';

     const pcData = ref({
        host: 'Lenovo G40-80',
        os: 'Proxmox VE 9.2',
        ram: '8GB',
        storage: '250GB',
        uptime: '2 days 4 hours',
        services: 3
    })


    const discUsage = ref([{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }]);
    const ramUsage = ref([{ label: 'RAM used', value: 8, color: 'var(--p-teal-400)' }]);

</script>

<template>
    <Panel class="w-full max-w-md hover-panel">
        <template #header>
            <h2 class="">Homeserver status <Tag severity="warn">WIP API</Tag> <Tag severity="success">Online</Tag></h2>   
        </template>
        <template #footer>
            <p class="text-surface-500 dark:text-surface-400 text-sm">Placeholder data</p>
        </template>
        <div class="text-left align-middle flex flex-col gap-2 justify-center">
            <table class=" w-full text-sm text-surface-500">
                <tbody>
                    <tr>
                        <td><b>Host</b> {{ pcData.host }}</td>
                        <td><b>OS</b> {{ pcData.os }}</td>
                    </tr>
                    <tr>
                        <td><b>Uptime</b> {{ pcData.uptime }}</td>
                        <td><b>Services running</b> {{ pcData.services }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <MeterGroup :value="discUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">Storage</span>
                    <span class="font-medium text-sm">250GB</span>
                </div>
            </template>
        </MeterGroup>

        <MeterGroup :value="ramUsage" class="max-w-md mx-auto">
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span class="text-sm">RAM</span>
                    <span class="font-medium text-sm">8GB</span>
                </div>
            </template>
        </MeterGroup>
               
    </Panel>
</template>