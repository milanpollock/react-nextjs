import { PostedState } from '@dark-rush-photography/shared-types';

export const imageSchema = {
  entityId: { type: String, required: true },
  slug: { type: String, required: true },
  state: {
    type: String,
    enum: Object.keys(PostedState),
    required: true,
  },
  order: { type: Number, required: true },
  isStared: { type: Boolean, required: true },
  isLoved: { type: Boolean, required: true },
  isLiked: { type: Boolean, required: true },
  title: { type: String, required: false },
  description: { type: String, required: false },
  keywords: { type: String, required: false },
  dateCreated: { type: String, required: true },
  datePublished: { type: String, required: false },
};
