<template>
  <Teleport to="body">
    <Transition name="drawer">
     <div
        v-if="professionalId"
        class="professional-drawer"
        role="dialog"
        aria-modal="true"
        :aria-label="professional?.name ?? 'Perfil do profissional'"
        @click.self="close"
      >
        <div class="professional-drawer__panel">
          <div class="professional-drawer__topbar">
            <button
              class="professional-drawer__close"
              aria-label="Fechar perfil"
              @click="close"
            >
              ✕
            </button>
          </div>

          <div class="professional-drawer__content">
            <ProfessionalProfile 
              v-if="professional" 
              :professional="professional" 
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useProfessionalsDetail } from '~/composables/useProfessionalsDetail'

const router = useRouter()

const props = defineProps<{
  professionalId: number
}>()

const { professional} = useProfessionalsDetail(
  toRef(props, 'professionalId')
)

const handleKeydown = (event: KeyboardEvent) => {
  if(event.key === 'Escape') {
    close()
  }
}

const close = () => {
  router.push('/professionals')
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped lang="scss">
.professional-drawer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 100dvh;
  background: rgb(0 0 0 / 40%);

  &__panel {
    position: relative;

    width: 100%;
    max-width: 560px;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--color-bg);
    box-shadow: -20px 0 50px rgb(0 0 0 / 15%);
  }

  &__content {
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  &__topbar {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    z-index: 10;
  }

  &__close {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;
    border: 0;
    border-radius: var(--radius-round);
    cursor: pointer;
    background: rgb(255 255 255 / 90%);
    backdrop-filter: blur(10px);
    transition:
      transform var(--transition-base),
      background-color var(--transition-base);
  }

  &__close:hover {
    transform: scale(1.05);
    background: var(--color-bg);
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity var(--transition-base);
}

.drawer-enter-active .drawer__panel,
.drawer-leave-active .drawer__panel {
  transition: transform var(--transition-slow) cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer__panel,
.drawer-leave-to .drawer__panel {
  transform: translateX(100%);
}

@media (max-width: 600px) {
  .professional-drawer {
    &__panel {
      max-width: 100%;
    }

    &__topbar {
      top: var(--space-3);
      right: var(--space-3);
    }
  }
}
</style>