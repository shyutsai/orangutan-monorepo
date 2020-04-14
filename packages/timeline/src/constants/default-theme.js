import defaultFontFamily from './font-family'
import elementTypes from './element-types'

export default {
  fontFamily: defaultFontFamily,
  [elementTypes.record]: {
    titleColor: '#a67a44',
    color: '#404040',
    strongColor: '#262626',
    linkColor: '#a67a44',
    linkUnderlineColor: '#d8d8d8',
  },
  [elementTypes.unitFlag]: {
    color: '#fff',
    background: '#000',
  },
  [elementTypes.groupFlag]: {
    color: '#fff',
    background: '#a67a44',
  },
}
