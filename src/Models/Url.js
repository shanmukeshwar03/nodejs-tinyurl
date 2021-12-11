import mongoose from 'mongoose'
import crypto from 'crypto'

const Url = mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  shr: {
    type: String,
    default: function () {
      return crypto.randomBytes(3).toString('hex')
    },
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Types.ObjectId,
    select: false,
    required: true,
    ref: 'User',
  },
})

export default mongoose.model('Url', Url, 'Urls')
