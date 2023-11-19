/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SpaLogo {
        /**
          * The logo src
         */
        "src": string;
    }
    interface SpaTextLogo {
        "container": "" | "square";
        /**
          * The logo style
         */
        "logostyle": "short" | "full";
    }
    interface SpaTooltip {
        /**
          * Tooltip bg
         */
        "backgroundColor": string;
        /**
          * Tooltip alignment prop to where the tooltip will appear
         */
        "tooltipAlignment": string;
        /**
          * Tooltip target element id
         */
        "tooltipTarget": string;
        /**
          * Tooltip content text
         */
        "tooltipText": string;
    }
}
declare global {
    interface HTMLSpaLogoElement extends Components.SpaLogo, HTMLStencilElement {
    }
    var HTMLSpaLogoElement: {
        prototype: HTMLSpaLogoElement;
        new (): HTMLSpaLogoElement;
    };
    interface HTMLSpaTextLogoElement extends Components.SpaTextLogo, HTMLStencilElement {
    }
    var HTMLSpaTextLogoElement: {
        prototype: HTMLSpaTextLogoElement;
        new (): HTMLSpaTextLogoElement;
    };
    interface HTMLSpaTooltipElement extends Components.SpaTooltip, HTMLStencilElement {
    }
    var HTMLSpaTooltipElement: {
        prototype: HTMLSpaTooltipElement;
        new (): HTMLSpaTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "spa-logo": HTMLSpaLogoElement;
        "spa-text-logo": HTMLSpaTextLogoElement;
        "spa-tooltip": HTMLSpaTooltipElement;
    }
}
declare namespace LocalJSX {
    interface SpaLogo {
        /**
          * The logo src
         */
        "src"?: string;
    }
    interface SpaTextLogo {
        "container"?: "" | "square";
        /**
          * The logo style
         */
        "logostyle"?: "short" | "full";
    }
    interface SpaTooltip {
        /**
          * Tooltip bg
         */
        "backgroundColor"?: string;
        /**
          * Tooltip alignment prop to where the tooltip will appear
         */
        "tooltipAlignment"?: string;
        /**
          * Tooltip target element id
         */
        "tooltipTarget"?: string;
        /**
          * Tooltip content text
         */
        "tooltipText"?: string;
    }
    interface IntrinsicElements {
        "spa-logo": SpaLogo;
        "spa-text-logo": SpaTextLogo;
        "spa-tooltip": SpaTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "spa-logo": LocalJSX.SpaLogo & JSXBase.HTMLAttributes<HTMLSpaLogoElement>;
            "spa-text-logo": LocalJSX.SpaTextLogo & JSXBase.HTMLAttributes<HTMLSpaTextLogoElement>;
            "spa-tooltip": LocalJSX.SpaTooltip & JSXBase.HTMLAttributes<HTMLSpaTooltipElement>;
        }
    }
}
