const SCREEN_SPACE_RATIO = 4.0;

const CameraPosition = {
    CENTER: 0.5,
    RIGHT: 0.6666666667,
    LEFT: 0.3333333333
};

const lerp = (min, max, percentage) => {
    return (1.0 - percentage) * min + percentage * max;
};

/**
 * Calculate the camera orbit/pan for a given video size and horizontal offset
 *
 * @param {number} videoWidth element width
 * @param {number} videoHeight element height
 * @param {number} percentage horizontal offset, 0 is hard left and 1 is hard right
 */
const calculateCameraPosition = (videoWidth, videoHeight, percentage) => {
    const ratio = videoWidth / videoHeight;
    const angleRange = ratio * SCREEN_SPACE_RATIO;

    return {
        tiltDeg: 0,
        orbitDegX: lerp(-20, 20, percentage),
        orbitDegY: 0,
        panDeg: lerp(-angleRange, angleRange, percentage)
    };
};

export {
    calculateCameraPosition,
    CameraPosition
};