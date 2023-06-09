import { FaceDetection } from '../classes/FaceDetection';
import { FaceLandmarks } from '../classes/FaceLandmarks';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { WithFaceDetection } from './WithFaceDetection';
export type WithFaceLandmarks<TSource extends WithFaceDetection<{}>, TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> = TSource & {
    landmarks: TFaceLandmarks;
    unshiftedLandmarks: TFaceLandmarks;
    alignedRect: FaceDetection;
    angle: {
        roll: number | undefined;
        pitch: number | undefined;
        yaw: number | undefined;
    };
};
export declare function isWithFaceLandmarks(obj: any): obj is WithFaceLandmarks<WithFaceDetection<{}>, FaceLandmarks>;
export declare function extendWithFaceLandmarks<TSource extends WithFaceDetection<{}>, TFaceLandmarks extends FaceLandmarks = FaceLandmarks68>(sourceObj: TSource, unshiftedLandmarks: TFaceLandmarks): WithFaceLandmarks<TSource, TFaceLandmarks>;
