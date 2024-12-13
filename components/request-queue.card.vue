<template>
  <div class="w-full rounded-xl relative" v-if="event">
    <!-- <div class="border p-20 bg-white/5 grid place-items-center">
      <div v-for="(item, index) in eventRequests" :key="item.id">
        {{ item.song_title ?? item.description }}
      </div>
    </div> -->
    <div class="py-4 px-6 bg-[#1C1B1F] rounded-t-[inherit]">
      <div class="font-display font-semibold text-2xl mb-2">Request Queue</div>
      <div class="flex items-center gap-4 text-muted-foreground text-sm -ml-1">
        <div class="flex items-center gap-px">
          <SvgIcon name="celebration" class="relative scale-75" />
          <div>{{ event?.title }}</div>
        </div>
        <div class="flex items-center gap-px">
          <SvgIcon name="location" class="relative scale-75" />
          <div>{{ event?.address }}</div>
        </div>
      </div>
    </div>
    <div class="relative px-6 py-8 bg-white/5 rounded-b-[inherit]">
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute left-1/2 -translate-x-1/2"
      ></div>
      <div
        class="space-y-1 grid justify-center text-center mb-8 relative z-[3]"
      >
        <NuxtImg
          src="/images/disco.png"
          :class="
            cn('size-[120px] mx-auto', activeRequest ? 'animate-spin' : null)
          "
        />
        <Summary
          class="font-semibold text-base"
          v-if="activeRequest"
          :content="
            activeRequest?.type === 'hype'
              ? activeRequest?.description
              : activeRequest?.song_title ?? ''
          "
        />
        <div class="text-sm text-muted-foreground" v-if="activeRequest">
          Now
          {{
            activeRequest?.type === "song" ? "playing" : "performing hype"
          }}...
        </div>
      </div>
      <div
        class="p-1 absolute -translate-y-4 left-0 right-0 text-center text-background font-medium text-sm bg-gradient-to-r from-[#844AFF] from-[1.28%] via-[#E991DD] via-[58.26%] to-[#FCF0AF] to-[100%]"
        v-if="activeRequest && authEmail === activeRequest?.audience?.email"
      >
        {{ activeRequest?.type === "hype" ? "Performing" : "Playing" }} your
        {{ activeRequest?.type }} request
      </div>
      <div
        :class="
          cn(
            'text-muted-foreground mb-4',
            activeRequest && authEmail === activeRequest?.audience?.email
              ? 'mt-16'
              : null
          )
        "
      >
        PREVIOUS REQUESTS
      </div>
      <div class="space-y-6" v-if="eventRequests?.length">
        <RequestItem
          v-for="item in eventRequests"
          :key="item.id"
          :request="item"
          :type="item.type"
        />
      </div>
      <div class="p-3 text-center grid place-items-center" v-else>
        No requests yet, hang tight
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { HostProfile } from "~/types/user";
import Summary from "./shared/summary.vue";
const props = defineProps<{ event: HostProfile["live_event"] }>();

const { authEmail } = useAuth();

const eventRequests = computed(() => {
  return props?.event?.requests
    ? props?.event?.requests
        .sort((req) => {
          if (req?.audience?.email === authEmail?.value) return -1;
          return 0;
        })
        .slice(0, 3)
    : [];
});

const activeRequest = computed(() =>
  props?.event?.requests?.find((item) => item?.status === "now-playing")
);
</script>
