import { Schema, model, models } from "mongoose";


const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es requerido"],
      unique: true,
      trim: true,
    },
    category: {
        type: String,
        required: [true, "La categoria es requerida"],
        enum:["Queso", "Chorizo", "Yerba", "Miel", "Manteca", "Ajo", "Otros"],
        
    },
    description: {
      type: String,
      required: [true, "La descripción es requerida"],
      trim: true,
    },
    imageUrl: {
     type: String,
     required:false
    }
  },
  { timestamps: true }
);
// if Product model doesn't exist, create model

export default models.Product || model('Product', productSchema);