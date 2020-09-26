import create from '../../styles/_utils/create-component-base'
import { composite } from '../../_utils/color'
import sizeVariables from './_common'
import baseTrackingRectStyle from '../../_base/tracking-rect/styles/light'
import baseMenuMaskStyle from '../../_base/menu-mask/styles/light'
import baseSelectMenuStyle from '../../_base/select-menu/styles/light'
import baseSelectionStyle from '../../_base/selection/styles/light'
import baseLoadingStyle from '../../_base/loading/styles/light'
import scrollbarStyle from '../../scrollbar/styles/light'
import radioStyle from '../../radio/styles/light'
import checkboxStyle from '../../checkbox/styles/light'

export default create({
  theme: 'light',
  name: 'Cascader',
  peer: [
    baseTrackingRectStyle,
    baseMenuMaskStyle,
    baseSelectMenuStyle,
    baseSelectionStyle,
    baseLoadingStyle,
    scrollbarStyle,
    radioStyle,
    checkboxStyle
  ],
  getDerivedVariables ({ base, derived }) {
    const {
      borderRadius,
      popmenuBoxShadow
    } = base
    const {
      popoverColor,
      textColorSecondary,
      primaryColor,
      textColorDisabled,
      dividerColorOverlay,
      baseColor,
      hoverColorOverlay
    } = derived
    return {
      ...sizeVariables,
      menuBorderRadius: borderRadius,
      menuColor: popoverColor,
      menuBoxShadow: popmenuBoxShadow,
      menuBorderColor: dividerColorOverlay,
      menuTrackingRectColor: composite(baseColor, hoverColorOverlay),
      optionTextColor: textColorSecondary,
      optionTextColorMatched: primaryColor,
      optionTextColorDisabled: textColorDisabled,
      optionArrowColor: textColorDisabled,
      optionCheckMarkColor: primaryColor
    }
  }
})