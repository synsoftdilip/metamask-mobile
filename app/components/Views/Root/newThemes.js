import { lightTheme, darkTheme } from '@metamask/design-tokens';
import brandColors from '../../../util/theme/temp-tokens/brandColors';

const ColorSet1 = {
    background: {
        default: '#EAF8BF',
         /**
           * {string} background.defaultHover - For component hover states that use background/default
           */
         defaultHover: '#ECA400',
         /**
          * {string} background.defaultPressed - For component pressed states that use background/default.
          */
         defaultPressed: '#ECA400',
         /**
          * {string} background.alternative - For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)
          */
         alternative: '#ECA400',
         /**
          * {string} background.alternativeHover - For component hover states that use background/alternative
          */
         alternativeHover: '#ECA400',
         /**
          * {string} background.alternativePressed - For component pressed states that use background/alternative
          */
         alternativePressed: '#ECA400',
         /**
          * {string} background.hover - For component hover states that don't have a background color
          */
         hover: '#ECA400',
         /**
          * {string} background.pressed - For component pressed states that don't have a background color
          */
         pressed: '#ECA400',
    },
    text: {
        /**
         * {string} text.default - For general text that takes main priority in the information hierarchy
         */
        default: '#001D4A',
        /**
         * {string} text.alternative - For a weaker contrast option for neutral text
         */
        alternative: '#001D4A',
        /**
         * {string} text.muted - For inactive or lowest priority text. (Example: placeholder)
         */
        muted: '#001D4A',
    },
    icon: {
        /**
         * {string} icon.default - For default neutral icons
         */
        default: '#001D4A',
        /**
         * {string} icon.alternative - For a weaker contrast option for neutral icons
         */
        alternative: '#001D4A',
        /**
         * {string} icon.muted - For inactive or lowest priority icons
         */
        muted: '#001D4A',
    },
    border: {
        /**
         * {string} border.default - For default neutral borders with visible contrast. (Example: text inputs)
         */
        default: '#001D4A',
        /**
         * {string} border.muted - For a weaker contrast option for neutral borders.
         */
        muted: '#001D4A',
    },
    overlay: {
        /**
         * {string} overlay.default - For shading layers behind modality screens
         */
        default: 'rgba(234, 248, 191, 0.8)',
        /**
         * {string} overlay.alternative - For a stronger shading layer option behind modality screens
         */
        inverse: 'rgba(234, 248, 191, 0.8)',
        /**
         * {string} overlay.inverse - [DEPRECATED] Should be used for elements over an overlay
         */
        alternative: 'rgba(234, 248, 191, 0.8)',
    },
    shadow: {
        /**
         * {string} shadow.default - For neutral shadows
         */
        default: 'red',
    },
    primary: {
        /**
         * {string} primary.default - For primary user action related elements
         */
        default: '#ECA400',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: '#ECA400',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: '#ECA400',
        /**
         * {string} primary.alternative - For the \"pressed\" state of interactive primary elements
         */
        alternative: '#ECA400',
        /**
         * {string} primary.muted - For lowest contrast background used in primary elements
         */
        muted: 'rgba(70,83,98,0.5)',
        /**
         * {string} primary.inverse - For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)disabled state
         */
        inverse: '#001D4A',
        /**
         * {string} primary.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: '#ECA400',
        /**
         * {string} primary.shadow - For primary button hover
         */
        shadow: '#ECA400',
    },
    secondary: {
        /**
         * {string} secondary.default - [DEPRECATED] Should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.alternative - [DEPRECATED] Should be used as an alternative to secondary.default for things such as hover states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.muted - [DEPRECATED] It’s a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.inverse - [DEPRECATED] Should be used only as the foreground element on top of primary/default and primary/alternative. It is intended to be the most contrasting color to primary/default. It should meet all AA and AAA accessibility standards such as the text or icon of a primary button
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.disabled - [DEPRECATED] Should be used for all disabled secondary action components
         */
        disabled: 'rgb(28, 28, 30)',
    },
    error: {
        /**
         * {string} error.default - For high-level alert danger/critical elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} error.alternative - For the \"pressed\" state of interactive danger/critical elements
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} error.muted - For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} error.inverse - For elements used on top of error/default (Example: label of danger/critical button)
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} error.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
        /**
         * {string} error.shadow - For error danger/critical button hover
         */
        shadow: 'rgb(28, 28, 30)',
    },
    warning: {
        /**
         * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} warning.alternative - [DEPRECATED] Should be used as an alternative to warning/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} warning.inverse - For elements used on top of warning/default. Used for text, icon or border
         */
        inverse:'rgb(28, 28, 30)',
        /**
         * {string} warning.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    success: {
        /**
         * {string} success.default - For positive & good semantic elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} success.alternative - [DEPRECATED] Should be used as an alternative to success/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} success.muted - For lowest contrast background used in success semantic. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} success.inverse -  For elements used on top of success/default. Used for text, icon or border
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} success.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    info: {
        /**
         * {string} info.default - For informational semantic elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} info.alternative - [DEPRECATED] Should be used as an alternative to info/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} info.muted - For lowest contrast background used in informational semantic. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} info.inverse - For elements used on top of info/default. Used for text, icon or border
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} info.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    
  };

  const ColorSet2 = {

    background: {
       
        default: '#362417',
         /**
           * {string} background.defaultHover - For component hover states that use background/default
           */
         defaultHover: '#92817A',
         /**
          * {string} background.defaultPressed - For component pressed states that use background/default.
          */
         defaultPressed: '#92817A',
         /**
          * {string} background.alternative - For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)
          */
         alternative: '#92817A',
         /**
          * {string} background.alternativeHover - For component hover states that use background/alternative
          */
         alternativeHover: '#92817A',
         /**
          * {string} background.alternativePressed - For component pressed states that use background/alternative
          */
         alternativePressed: '#92817A',
         /**
          * {string} background.hover - For component hover states that don't have a background color
          */
         hover: '#92817A',
         /**
          * {string} background.pressed - For component pressed states that don't have a background color
          */
         pressed: '#92817A',
    },
    text: {
        /**
         * {string} text.default - For general text that takes main priority in the information hierarchy
         */
        default: '#FFFBFF',
        /**
         * {string} text.alternative - For a weaker contrast option for neutral text
         */
        alternative: '#FFFBFF',
        /**
         * {string} text.muted - For inactive or lowest priority text. (Example: placeholder)
         */
        muted: '#FFFBFF',
    },
    icon: {
        /**
         * {string} icon.default - For default neutral icons
         */
        default: '#FFFBFF',
        /**
         * {string} icon.alternative - For a weaker contrast option for neutral icons
         */
        alternative: '#FFFBFF',
        /**
         * {string} icon.muted - For inactive or lowest priority icons
         */
        muted: '#FFFBFF',
    },
    border: {
        /**
         * {string} border.default - For default neutral borders with visible contrast. (Example: text inputs)
         */
        default: '#ffffff',
        /**
         * {string} border.muted - For a weaker contrast option for neutral borders.
         */
        muted: '#ffffff',
    },
    overlay: {
        /**
         * {string} overlay.default - For shading layers behind modality screens
         */
        default: 'rgba(255, 251, 255,0.4)',
        /**
         * {string} overlay.alternative - For a stronger shading layer option behind modality screens
         */
        inverse: 'rgba(255, 251, 255,0.4)',
        /**
         * {string} overlay.inverse - [DEPRECATED] Should be used for elements over an overlay
         */
        alternative: 'rgba(255, 251, 255,0.4)',
    },
    shadow: {
        /**
         * {string} shadow.default - For neutral shadows
         */
        default: 'red',
    },
    primary: {
        /**
         * {string} primary.default - For primary user action related elements
         */
        default: '#92817A',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: '#92817A',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: '#92817A',
        /**
         * {string} primary.alternative - For the \"pressed\" state of interactive primary elements
         */
        alternative: '#92817A',
        /**
         * {string} primary.muted - For lowest contrast background used in primary elements
         */
        muted: 'rgba(255,255,255,0.4)',
        /**
         * {string} primary.inverse - For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)disabled state
         */
        inverse: '#FFFBFF',
        /**
         * {string} primary.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: '#92817A',
        /**
         * {string} primary.shadow - For primary button hover
         */
        shadow: '#92817A',
    },
    secondary: {
        /**
         * {string} secondary.default - [DEPRECATED] Should be used for any secondary actions. It should not be used for any negative connotations such as warnings or errors as it is quite closely tied to the MetaMask Fox
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.alternative - [DEPRECATED] Should be used as an alternative to secondary.default for things such as hover states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.muted - [DEPRECATED] It’s a very low contrasting secondary variant for things such as alert backgrounds. secondary.muted and secondary.inverse should not be used together in a foreground and background combination
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.inverse - [DEPRECATED] Should be used only as the foreground element on top of primary/default and primary/alternative. It is intended to be the most contrasting color to primary/default. It should meet all AA and AAA accessibility standards such as the text or icon of a primary button
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} secondary.disabled - [DEPRECATED] Should be used for all disabled secondary action components
         */
        disabled: 'rgb(28, 28, 30)',
    },
    error: {
        /**
         * {string} error.default - For high-level alert danger/critical elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} error.alternative - For the \"pressed\" state of interactive danger/critical elements
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} error.muted - For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} error.inverse - For elements used on top of error/default (Example: label of danger/critical button)
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} error.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
        /**
         * {string} error.shadow - For error danger/critical button hover
         */
        shadow: 'rgb(28, 28, 30)',
    },
    warning: {
        /**
         * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} warning.alternative - [DEPRECATED] Should be used as an alternative to warning/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} warning.inverse - For elements used on top of warning/default. Used for text, icon or border
         */
        inverse:'rgb(28, 28, 30)',
        /**
         * {string} warning.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    success: {
        /**
         * {string} success.default - For positive & good semantic elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} defaultHover - For the "hover" state of interactive elements
         */
        defaultHover: 'rgb(28, 28, 30)',
        /**
         * {string} defaultPressed - For the "pressed" state of interactive elements
         */
        defaultPressed: 'rgb(28, 28, 30)',
        /**
         * {string} success.alternative - [DEPRECATED] Should be used as an alternative to success/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} success.muted - For lowest contrast background used in success semantic. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} success.inverse -  For elements used on top of success/default. Used for text, icon or border
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} success.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    info: {
        /**
         * {string} info.default - For informational semantic elements. Used for text, background, icon or border
         */
        default: 'rgb(28, 28, 30)',
        /**
         * {string} info.alternative - [DEPRECATED] Should be used as an alternative to info/default for things like hover or pressed states
         */
        alternative: 'rgb(28, 28, 30)',
        /**
         * {string} info.muted - For lowest contrast background used in informational semantic. (Example: notification background)
         */
        muted: 'rgb(28, 28, 30)',
        /**
         * {string} info.inverse - For elements used on top of info/default. Used for text, icon or border
         */
        inverse: 'rgb(28, 28, 30)',
        /**
         * {string} info.disabled - [DEPRECATED] Should be used for disabled state
         */
        disabled: 'rgb(28, 28, 30)',
    },
    
  };
  
  export const newThemeSet1 = {
    colors: ColorSet1,
    typography: lightTheme.typography,
    shadows: lightTheme.shadows,
    brandColors: brandColors,
  }

  export const newThemeSet2 = {
    colors: ColorSet2,
    typography: darkTheme.typography,
    shadows: darkTheme.shadows,
    brandColors: brandColors,
  }