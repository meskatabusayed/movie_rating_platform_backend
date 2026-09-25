import { Schema, model } from "mongoose";
import type { TMovie, TReview } from "./movie.interface.js";



const reviewSchema = new Schema<TReview>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const movieSchema = new Schema<TMovie>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    genre: {
      type: String,
      required: true,
      trim: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    viewCount: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: [reviewSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

movieSchema.pre("save", function () {
  if (this.isModified("title") || this.isModified("releaseDate")) {
    const title = this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const date = this.releaseDate.toISOString().split("T")[0];

    this.slug = `${title}-${date}`;
  }

});

export const Movie = model<TMovie>("Movie", movieSchema);