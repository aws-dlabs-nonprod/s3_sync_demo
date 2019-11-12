import { css } from 'styled-components';
import Media from '@style/media';

export default css`

    /* SimpleBar */
    [data-simplebar] {
        position: relative;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        height: calc(100% - 7.8rem);
        
        ${Media.tablet`
            height: 100%;
        `}
    }

    .simplebar-wrapper {
        overflow: hidden;
        width: inherit;
        height: inherit;
        max-width: inherit;
        max-height: inherit;
    }

    .simplebar-mask {
        direction: inherit;
        position: absolute;
        overflow: hidden;
        padding: 0;
        margin: 0;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: auto !important;
        height: auto !important;
        z-index: 0;
    }

    .simplebar-offset {
        direction: inherit !important;
        box-sizing: inherit !important;
        resize: none !important;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0;
        margin: 0;
        -webkit-overflow-scrolling: touch;
    }

    .simplebar-content-wrapper {
        direction: inherit;
        box-sizing: border-box !important;
        position: relative;
        display: block;
        height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */
        width: auto;
        visibility: visible;
        overflow: auto; /* Scroll on this element otherwise element can't have a padding applied properly */
        max-width: 100%; /* Not required for horizontal scroll to trigger */
        max-height: 100%; /* Needed for vertical scroll to trigger */
    }

    .simplebar-content:before,
    .simplebar-content:after {
        content: " ";
        display: table;
    }
    
    /*  */
    .simplebar-content {
        align-items: flex-end;
        display: flex;
        min-height: 100%;

        > div {
            width: 100%;
        }
    }

    .simplebar-placeholder {
        max-height: 100%;
        max-width: 100%;
        width: 100%;
        pointer-events: none;
    }

    .simplebar-height-auto-observer-wrapper {
        box-sizing: inherit !important;
        height: 100%;
        width: inherit;
        max-width: 1px;
        position: relative;
        float: left;
        max-height: 1px;
        overflow: hidden;
        z-index: -1;
        padding: 0;
        margin: 0;
        pointer-events: none;
        flex-grow: inherit;
        flex-shrink: 0;
        flex-basis: 0;
    }

    .simplebar-height-auto-observer {
        box-sizing: inherit;
        display: block;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 1000%;
        width: 1000%;
        min-height: 1px;
        min-width: 1px;
        overflow: hidden;
        pointer-events: none;
        z-index: -1;
    }

    .simplebar-track {
        z-index: 1;
        position: absolute;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
    }

    [data-simplebar].simplebar-dragging .simplebar-track {
        pointer-events: all;
    }

    .simplebar-scrollbar {
        position: absolute;
        right: 2px;
        width: 7px;
        min-height: 10px;
    }

    .simplebar-scrollbar:before {
        position: absolute;
        content: "";
        background: black;
        border-radius: 7px;
        left: 0;
        right: 0;
        opacity: 0.1;
        transition: opacity 0.2s linear;
    }

    .simplebar-track .simplebar-scrollbar.simplebar-visible:before {
        /* When hovered, remove all transitions from drag handle */
        opacity: 0.5;
        transition: opacity 0s linear;
    }

    .simplebar-track.simplebar-vertical {
        top: 0;
        width: 11px;
    }

    .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
        top: 2px;
        bottom: 2px;
    }

    .simplebar-track.simplebar-horizontal {
        left: 0;
        height: 11px;
    }

    .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
        height: 100%;
        left: 2px;
        right: 2px;
    }

    .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
        right: auto;
        left: 0;
        top: 2px;
        height: 7px;
        min-height: 0;
        min-width: 10px;
        width: auto;
    }
`;