import { ImageItemDto } from '../../types/gallery.dto'
import { ModalDto } from '../../types/modal.dto'
import ActionType from './actions-types'

interface setGallery {
  type: ActionType.SET
  payload: ImageItemDto[]
}

// interface getOnGalleryItem {
//   type: ActionType.GET;
//   payload: number;
// }

interface setModal {
  type: ActionType.MODAl_SET
  payload: ModalDto
}

export type GalleryActions = setGallery
export type ModalActions = setModal
