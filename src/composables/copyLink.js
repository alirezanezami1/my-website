import { ref } from 'vue'

const showCopyModal = ref(false)

export function useCopyLink() {
  async function CopyCvLink(link) {
    try {
      await navigator.clipboard.writeText(link)
      showCopyModal.value = true
      setTimeout(() => {
        showCopyModal.value = false
      }, 1500)
    } catch (err) {
      console.log(err)
    }
  }

  return { showCopyModal, CopyCvLink }
}
