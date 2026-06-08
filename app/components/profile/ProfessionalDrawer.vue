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
            <Transition
              name="drawer-content"
              mode="out-in"
            >
              <ProfileProfessionalProfile
                v-if="professional"
                :professional="professional"
              />

              <ProfileProfessionalDrawerSkeleton
                v-else
              />
            </Transition>
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
    min-height: 100dvh;
    overflow: hidden;
    background: var(--color-bg);
    box-shadow: -20px 0 50px rgb(0 0 0 / 15%);
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }

  &__content {
    overflow-y: auto;
    overscroll-behavior: contain;
    flex: 1;
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

.drawer-enter-active .professional-drawer__panel,
.drawer-leave-active .professional-drawer__panel {
  transition:
    transform 350ms cubic-bezier(.22, 1, .36, 1),
    opacity 350ms ease;
}

.drawer-enter-from .professional-drawer__panel,
.drawer-leave-to .professional-drawer__panel {
  transform: translateX(40px);
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: background-color 300ms ease;
}

.drawer-enter-from,
.drawer-leave-to {
  background: rgb(0 0 0 / 0%);
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