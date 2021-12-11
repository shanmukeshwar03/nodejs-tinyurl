import UrlModel from '../Models/Url.js'

const GetUrl = async (req, res, next) => {
  try {
    const urls = await UrlModel.find({ user: req._id })
    res.send(urls)
  } catch (error) {
    next(error)
  }
}

const PostUrl = async (req, res, next) => {
  try {
    const { source } = req.body
    if (!source) throw { id: 5 }
    const url = await UrlModel.create({ source, user: req._id })
    res.send(url)
  } catch (error) {
    next(error)
  }
}

const DeleteUrl = async (req, res, next) => {
  try {
    const { shr } = req.params
    if (!shr) throw { id: 5 }

    const url = await UrlModel.findByIdAndDelete(shr)
    if (!url) throw { id: 3 }

    res.send('Ok')
  } catch (error) {
    next(error)
  }
}

export default { GetUrl, PostUrl, DeleteUrl }
